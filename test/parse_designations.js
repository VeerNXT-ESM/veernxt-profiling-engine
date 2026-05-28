const fs = require('fs');
const path = require('path');

const CSV_PATH = path.resolve(__dirname, '../../web/public/Service_Detail.csv');
const JSON_OUT_PATH = path.resolve(__dirname, '../data/designations.json');

// Parse quoted multi-line CSV
function parseCSV(content) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n
      }
      currentRow.push(currentField.trim());
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    rows.push(currentRow);
  }
  return rows;
}

function compileDesignations() {
  console.log(`\n======================================================`);
  console.log(`🧹 COMPILING ARMED FORCES DESIGNATIONS FROM CSV`);
  console.log(`======================================================`);

  if (!fs.existsSync(CSV_PATH)) {
    console.error(`❌ Service_Detail.csv not found at: ${CSV_PATH}`);
    process.exit(1);
  }

  const content = fs.readFileSync(CSV_PATH, 'utf-8');
  const rows = parseCSV(content);
  const designations = [];

  rows.forEach((row, idx) => {
    if (row.length < 5) return;

    const sNo = row[0];
    const armCorps = row[1];
    const service = row[2];
    const allTradesRaw = row[4];

    // Skip non-numeric serial rows (headers, titles, decorative lines)
    if (isNaN(parseInt(sNo, 10)) || !armCorps || !service || !allTradesRaw) {
      return;
    }

    // Split trade list by newline and sanitize
    const lines = allTradesRaw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

    lines.forEach(line => {
      // Strip leading digits and list dot prefixes e.g. "1. Rifleman" -> "Rifleman"
      let cleanTrade = line.replace(/^\d+\.\s*/, '').replace(/^◆\s*/, '').trim();

      // Skip explanatory notes
      if (cleanTrade.toLowerCase().startsWith('note:')) {
        return;
      }

      if (cleanTrade) {
        designations.push({
          trade: cleanTrade,
          arm_corps: armCorps.trim(),
          service: service.trim()
        });
      }
    });
  });

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(JSON_OUT_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write compiled JSON
  fs.writeFileSync(JSON_OUT_PATH, JSON.stringify({ designations }, null, 2));

  console.log(`✅ Successfully compiled ${designations.length} service designations!`);
  console.log(`💾 JSON database written to: ${JSON_OUT_PATH}`);
  console.log(`======================================================\n`);
}

if (require.main === module) {
  compileDesignations();
}

module.exports = {
  compileDesignations
};
