# Substack to Markdown/PDF

Scrape Substack posts (including paid/subscriber-only) to Markdown, HTML, and PDF.

Based on [timf34/Substack2Markdown](https://github.com/timf34/Substack2Markdown) with improvements:
- **Chrome** support (instead of Edge-only)
- **PDF export** via `--pdf` flag
- **Cookie-based auth** for paid posts (avoids captcha issues)

## Setup

```bash
pip install -r requirements.txt
```

For PDF export, you also need system dependencies for weasyprint:
```bash
# Ubuntu/Debian
sudo apt install libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 libffi-dev

# macOS
brew install pango
```

## Usage

### Free posts (no login needed)

```bash
python substack_scraper.py -u https://example.substack.com
python substack_scraper.py -u https://example.substack.com -n 5        # only 5 posts
python substack_scraper.py -u https://example.substack.com --pdf       # also export PDF
```

### Paid posts - Cookie auth (recommended)

This is the most reliable method. No browser needed.

1. Log into substack.com in your browser
2. Open DevTools (F12) -> Application -> Cookies -> substack.com
3. Copy the `substack.sid` cookie value
4. Paste it in `config.py` as `SUBSTACK_SID_COOKIE`

```bash
python substack_scraper.py -u https://example.substack.com -p --cookie
python substack_scraper.py -u https://example.substack.com -p --cookie --pdf
```

### Paid posts - Selenium login (fallback)

Set `EMAIL` and `PASSWORD` in `config.py`, then:

```bash
python substack_scraper.py -u https://example.substack.com -p
python substack_scraper.py -u https://example.substack.com -p --no-headless  # see the browser
```

## Output

Files are saved in directories organized by author name:
- `substack_md_files/<author>/` - Markdown files
- `substack_html_pages/<author>/` - HTML files
- `substack_pdf_files/<author>/` - PDF files (with `--pdf`)
- `data/<author>.json` - Post metadata
