#!/usr/bin/env python3
"""Parse a DOCX question paper into structured quiz JSON.

Usage:
    python parse_docx_quiz.py "path/to/Section 1.docx" --output quiz.json

This script extracts paragraph text from the DOCX file and applies
heuristics to identify questions, multiple-choice options, and answer keys.

If python-docx is installed, it will use that library for more stable text
extraction. Otherwise it uses zipfile + XML parsing directly.
"""

import argparse
import json
import re
import sys
from pathlib import Path
from zipfile import ZipFile


ANSWER_SECTION_MARKERS = [
    r'^answers?\b',
    r'^answer key\b',
    r'^solutions?\b',
    r'^correct answers?\b',
]

QUESTION_PATTERN = re.compile(r'^(?:\d+\.|Q\d+\.|Question\s+\d+\.)\s*(.*)', re.IGNORECASE)
OPTION_PATTERN = re.compile(r'^([A-D])\s*[\.).]\s*(.*)$', re.IGNORECASE)
ANSWER_LINE_PATTERN = re.compile(r'^(\d+)\s*[\.)]?\s*([A-D])\b', re.IGNORECASE)
ANSWER_BLOCK_PATTERN = re.compile(r'^(?:[A-D])\s*[\.)]?\s*(.*)$', re.IGNORECASE)
ANSWER_INLINE_PATTERN = re.compile(r'(\d+)\s*[\.)]?\s*([A-D])\b', re.IGNORECASE)


def extract_paragraphs_from_docx(path):
    try:
        from docx import Document
        doc = Document(path)
        paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
        if paragraphs:
            return paragraphs
    except Exception:
        pass

    # Fallback raw XML extraction
    with ZipFile(path, 'r') as z:
        xml_bytes = z.read('word/document.xml')
    try:
        from xml.etree import ElementTree as ET
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        root = ET.fromstring(xml_bytes)
        paragraphs = []
        for p in root.findall('.//w:p', namespaces):
            texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
            line = ''.join(texts).strip()
            if line:
                paragraphs.append(line)
        return paragraphs
    except Exception as exc:
        raise RuntimeError(f'Failed to extract paragraphs from DOCX: {exc}')


def split_answers_section(paragraphs):
    answer_start = None
    for idx, paragraph in enumerate(paragraphs):
        normalized = paragraph.strip().lower()
        if any(re.match(marker, normalized) for marker in ANSWER_SECTION_MARKERS):
            answer_start = idx
            break
    if answer_start is None:
        # fallback: locate the first line that looks like an answer list for question numbers
        for idx, paragraph in enumerate(paragraphs):
            if ANSWER_LINE_PATTERN.match(paragraph):
                answer_start = idx
                break
    if answer_start is None:
        return paragraphs, []
    return paragraphs[:answer_start], paragraphs[answer_start:]


def parse_questions(paragraphs):
    questions = []
    current = None
    for paragraph in paragraphs:
        trimmed = paragraph.strip()
        if not trimmed:
            continue

        q_match = QUESTION_PATTERN.match(trimmed)
        if q_match:
            if current:
                questions.append(current)
            current = {
                'id': len(questions) + 1,
                'question_text': q_match.group(1).strip(),
                'question_raw': trimmed,
                'options': [],
                'answer': None,
            }
            continue

        if current is None:
            continue

        opt_match = OPTION_PATTERN.match(trimmed)
        if opt_match:
            label = opt_match.group(1).upper()
            text = opt_match.group(2).strip()
            current['options'].append({'label': label, 'text': text})
            continue

        # if the line is part of the question body or option continuation
        if current['options'] and not OPTION_PATTERN.match(trimmed):
            # attach as continuation of the last option
            current['options'][-1]['text'] += ' ' + trimmed
        else:
            current['question_text'] += ' ' + trimmed

    if current:
        questions.append(current)
    return questions


def parse_answer_lines(paragraphs):
    answers = {}
    for paragraph in paragraphs:
        trimmed = paragraph.strip()
        if not trimmed:
            continue

        for match in ANSWER_INLINE_PATTERN.finditer(trimmed):
            qnum = int(match.group(1))
            choice = match.group(2).upper()
            answers[qnum] = choice

    return answers


def build_quiz(paragraphs, source_path):
    question_paragraphs, answer_paragraphs = split_answers_section(paragraphs)
    questions = parse_questions(question_paragraphs)
    answers = parse_answer_lines(answer_paragraphs)

    for question in questions:
        qid = question['id']
        if qid in answers:
            question['answer'] = answers[qid]
        else:
            # also try if the raw question line contains the answer after a dash
            inline = re.search(r'\bAnswer\s*[:\-]\s*([A-D])\b', question['question_raw'], re.IGNORECASE)
            if inline:
                question['answer'] = inline.group(1).upper()

    return {
        'source_file': str(source_path),
        'question_count': len(questions),
        'questions': questions,
        'answer_lookup': answers,
    }


def main():
    parser = argparse.ArgumentParser(description='Parse a DOCX question paper into JSON quiz format.')
    parser.add_argument('docx_file', type=Path, help='Path to the DOCX file')
    parser.add_argument('--output', '-o', type=Path, default=None, help='Output JSON file')
    args = parser.parse_args()

    if not args.docx_file.exists():
        print(f'File not found: {args.docx_file}', file=sys.stderr)
        sys.exit(1)

    paragraphs = extract_paragraphs_from_docx(args.docx_file)
    quiz = build_quiz(paragraphs, args.docx_file)
    output_data = json.dumps(quiz, indent=2, ensure_ascii=False)

    if args.output:
        args.output.write_text(output_data, encoding='utf-8')
        print(f'Wrote quiz JSON to {args.output}')
    else:
        print(output_data)


if __name__ == '__main__':
    main()
