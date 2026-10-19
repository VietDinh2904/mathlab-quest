import argparse
import json
import subprocess
from pathlib import Path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf")
    parser.add_argument("output")
    parser.add_argument("--first", type=int, required=True)
    parser.add_argument("--last", type=int, required=True)
    parser.add_argument("--dpi", type=int, default=110)
    parser.add_argument("--pdftoppm", required=True)
    args = parser.parse_args()

    output = Path(args.output)
    images = output / "images"
    output.mkdir(parents=True, exist_ok=True)
    images.mkdir(parents=True, exist_ok=True)
    jsonl = output / "pages.jsonl"
    completed = set()
    if jsonl.exists():
        for line in jsonl.read_text(encoding="utf-8").splitlines():
            if line.strip():
                completed.add(json.loads(line)["page"])

    missing = [page for page in range(args.first, args.last + 1) if page not in completed]
    if not missing:
        print(f"Already complete: {jsonl}", flush=True)
        return

    subprocess.run([
        args.pdftoppm, "-f", str(min(missing)), "-l", str(max(missing)),
        "-jpeg", "-r", str(args.dpi), args.pdf, str(images / "page")
    ], check=True)

    from rapidocr_onnxruntime import RapidOCR

    engine = RapidOCR()
    with jsonl.open("a", encoding="utf-8") as stream:
        for page in missing:
            image_path = images / f"page-{page:03d}.jpg"
            result, _ = engine(str(image_path))
            lines = []
            for item in result or []:
                box, text, score = item
                lines.append({"box": box, "text": text, "score": score})
            record = {"page": page, "text": "\n".join(line["text"] for line in lines), "lines": lines}
            stream.write(json.dumps(record, ensure_ascii=False) + "\n")
            stream.flush()
            print(f"OCR page {page}/{args.last}: {len(lines)} lines", flush=True)


if __name__ == "__main__":
    main()
