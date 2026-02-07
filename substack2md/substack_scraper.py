import argparse
import json
import os
from abc import ABC, abstractmethod
from typing import List, Optional, Tuple
from time import sleep

import html2text
import markdown
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from tqdm import tqdm
from xml.etree import ElementTree as ET
from urllib.parse import urlparse

from config import EMAIL, PASSWORD, SUBSTACK_SID_COOKIE

BASE_MD_DIR: str = "substack_md_files"
BASE_HTML_DIR: str = "substack_html_pages"
BASE_PDF_DIR: str = "substack_pdf_files"
JSON_DATA_DIR: str = "data"


def extract_main_part(url: str) -> str:
    parts = urlparse(url).netloc.split('.')
    return parts[1] if parts[0] == 'www' else parts[0]


class BaseSubstackScraper(ABC):
    def __init__(self, base_substack_url: str, md_save_dir: str, html_save_dir: str,
                 pdf_save_dir: str = "", export_pdf: bool = False):
        if not base_substack_url.endswith("/"):
            base_substack_url += "/"
        self.base_substack_url = base_substack_url
        self.writer_name = extract_main_part(base_substack_url)
        self.md_save_dir = f"{md_save_dir}/{self.writer_name}"
        self.html_save_dir = f"{html_save_dir}/{self.writer_name}"
        self.pdf_save_dir = f"{pdf_save_dir}/{self.writer_name}" if pdf_save_dir else ""
        self.export_pdf = export_pdf

        for d in [self.md_save_dir, self.html_save_dir]:
            os.makedirs(d, exist_ok=True)
        if self.export_pdf and self.pdf_save_dir:
            os.makedirs(self.pdf_save_dir, exist_ok=True)

        self.keywords = ["about", "archive", "podcast"]
        self.post_urls = self.get_all_post_urls()

    def get_all_post_urls(self) -> List[str]:
        urls = self.fetch_urls_from_sitemap()
        if not urls:
            urls = self.fetch_urls_from_feed()
        return self.filter_urls(urls, self.keywords)

    def fetch_urls_from_sitemap(self) -> List[str]:
        sitemap_url = f"{self.base_substack_url}sitemap.xml"
        response = requests.get(sitemap_url)
        if not response.ok:
            print(f'Error fetching sitemap at {sitemap_url}: {response.status_code}')
            return []
        root = ET.fromstring(response.content)
        return [el.text for el in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]

    def fetch_urls_from_feed(self) -> List[str]:
        print('Falling back to feed.xml. This will only contain up to the 22 most recent posts.')
        feed_url = f"{self.base_substack_url}feed.xml"
        response = requests.get(feed_url)
        if not response.ok:
            print(f'Error fetching feed at {feed_url}: {response.status_code}')
            return []
        root = ET.fromstring(response.content)
        urls = []
        for item in root.findall('.//item'):
            link = item.find('link')
            if link is not None and link.text:
                urls.append(link.text)
        return urls

    @staticmethod
    def filter_urls(urls: List[str], keywords: List[str]) -> List[str]:
        return [url for url in urls if all(kw not in url for kw in keywords)]

    @staticmethod
    def html_to_md(html_content: str) -> str:
        h = html2text.HTML2Text()
        h.ignore_links = False
        h.body_width = 0
        return h.handle(html_content)

    @staticmethod
    def save_to_file(filepath: str, content: str) -> None:
        if os.path.exists(filepath):
            print(f"File already exists: {filepath}")
            return
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

    @staticmethod
    def md_to_html(md_content: str) -> str:
        return markdown.markdown(md_content, extensions=['extra'])

    @staticmethod
    def get_filename_from_url(url: str, filetype: str = ".md") -> str:
        if not filetype.startswith("."):
            filetype = f".{filetype}"
        return url.rstrip("/").split("/")[-1] + filetype

    @staticmethod
    def combine_metadata_and_content(title: str, subtitle: str, date: str,
                                     like_count: str, content: str) -> str:
        metadata = f"# {title}\n\n"
        if subtitle:
            metadata += f"## {subtitle}\n\n"
        metadata += f"**{date}**\n\n"
        metadata += f"**Likes:** {like_count}\n\n"
        return metadata + content

    def extract_post_data(self, soup: BeautifulSoup) -> Tuple[str, str, str, str, str]:
        title_element = soup.select_one("h1.post-title, h2")
        title = title_element.text.strip() if title_element else "Untitled"

        subtitle_element = soup.select_one("h3.subtitle")
        subtitle = subtitle_element.text.strip() if subtitle_element else ""

        date = ""
        date_element = soup.select_one("div.pencraft.pc-reset.color-pub-secondary-text-hGQ02T")
        if date_element and date_element.text.strip():
            date = date_element.text.strip()
        if not date:
            script_tag = soup.find("script", {"type": "application/ld+json"})
            if script_tag and script_tag.string:
                try:
                    metadata = json.loads(script_tag.string)
                    if "datePublished" in metadata:
                        date_str = metadata["datePublished"]
                        date_obj = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
                        date = date_obj.strftime("%b %d, %Y")
                except (json.JSONDecodeError, ValueError, KeyError):
                    pass
        if not date:
            date = "Date not found"

        like_count_element = soup.select_one("a.post-ufi-button .label")
        like_count = (
            like_count_element.text.strip()
            if like_count_element and like_count_element.text.strip().isdigit()
            else "0"
        )

        content_element = soup.select_one("div.available-content")
        content_html = str(content_element) if content_element else ""
        md = self.html_to_md(content_html)
        md_content = self.combine_metadata_and_content(title, subtitle, date, like_count, md)

        return title, subtitle, like_count, date, md_content

    def save_as_pdf(self, html_content: str, pdf_filepath: str) -> None:
        """Convert HTML content to PDF using weasyprint."""
        if os.path.exists(pdf_filepath):
            print(f"PDF already exists: {pdf_filepath}")
            return
        try:
            from weasyprint import HTML as WeasyprintHTML
            styled_html = f"""<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>
body {{ font-family: Georgia, serif; max-width: 700px; margin: 40px auto;
       padding: 0 20px; line-height: 1.6; color: #333; }}
h1 {{ font-size: 28px; margin-bottom: 8px; }}
h2 {{ font-size: 20px; color: #666; font-weight: normal; }}
img {{ max-width: 100%; height: auto; }}
blockquote {{ border-left: 3px solid #ccc; padding-left: 16px; color: #555; }}
</style></head><body>{html_content}</body></html>"""
            WeasyprintHTML(string=styled_html).write_pdf(pdf_filepath)
            print(f"Saved PDF: {pdf_filepath}")
        except ImportError:
            print("weasyprint not installed. Install with: pip install weasyprint")
        except Exception as e:
            print(f"Error generating PDF: {e}")

    @abstractmethod
    def get_url_soup(self, url: str) -> Optional[BeautifulSoup]:
        raise NotImplementedError

    def save_essays_data_to_json(self, essays_data: list) -> None:
        os.makedirs(JSON_DATA_DIR, exist_ok=True)
        json_path = os.path.join(JSON_DATA_DIR, f'{self.writer_name}.json')
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                existing_data = json.load(f)
            essays_data = existing_data + [d for d in essays_data if d not in existing_data]
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(essays_data, f, ensure_ascii=False, indent=4)

    def scrape_posts(self, num_posts_to_scrape: int = 0) -> None:
        essays_data = []
        count = 0
        total = num_posts_to_scrape if num_posts_to_scrape != 0 else len(self.post_urls)
        for url in tqdm(self.post_urls, total=total):
            try:
                md_filename = self.get_filename_from_url(url, ".md")
                html_filename = self.get_filename_from_url(url, ".html")
                md_filepath = os.path.join(self.md_save_dir, md_filename)
                html_filepath = os.path.join(self.html_save_dir, html_filename)

                if not os.path.exists(md_filepath):
                    soup = self.get_url_soup(url)
                    if soup is None:
                        total += 1
                        continue
                    title, subtitle, like_count, date, md = self.extract_post_data(soup)
                    self.save_to_file(md_filepath, md)

                    html_content = self.md_to_html(md)
                    self.save_to_file(html_filepath, html_content)

                    if self.export_pdf and self.pdf_save_dir:
                        pdf_filename = self.get_filename_from_url(url, ".pdf")
                        pdf_filepath = os.path.join(self.pdf_save_dir, pdf_filename)
                        self.save_as_pdf(html_content, pdf_filepath)

                    essays_data.append({
                        "title": title, "subtitle": subtitle,
                        "like_count": like_count, "date": date,
                        "file_link": md_filepath, "html_link": html_filepath,
                    })
                else:
                    print(f"File already exists: {md_filepath}")
            except Exception as e:
                print(f"Error scraping post: {e}")
            count += 1
            if num_posts_to_scrape != 0 and count >= num_posts_to_scrape:
                break
        self.save_essays_data_to_json(essays_data)


class SubstackScraper(BaseSubstackScraper):
    """Scrapes free/public posts using requests."""
    def get_url_soup(self, url: str) -> Optional[BeautifulSoup]:
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")
        if soup.find("h2", class_="paywall-title"):
            print(f"Skipping premium article: {url}")
            return None
        return soup


class CookieSubstackScraper(BaseSubstackScraper):
    """Scrapes paid posts using a substack.sid session cookie (no browser needed)."""
    def __init__(self, base_substack_url: str, md_save_dir: str, html_save_dir: str,
                 cookie: str = "", pdf_save_dir: str = "", export_pdf: bool = False):
        self.session = requests.Session()
        self.session.cookies.set("substack.sid", cookie, domain=".substack.com")
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                          "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        })
        super().__init__(base_substack_url, md_save_dir, html_save_dir,
                         pdf_save_dir=pdf_save_dir, export_pdf=export_pdf)

    def get_url_soup(self, url: str) -> Optional[BeautifulSoup]:
        resp = self.session.get(url)
        soup = BeautifulSoup(resp.content, "html.parser")
        if soup.find("h2", class_="paywall-title"):
            print(f"Warning: Could not access premium article (cookie may be expired): {url}")
            return None
        return soup


class SeleniumSubstackScraper(BaseSubstackScraper):
    """Scrapes paid posts using Selenium with Chrome (login via email/password)."""
    def __init__(self, base_substack_url: str, md_save_dir: str, html_save_dir: str,
                 headless: bool = True, chrome_path: str = "", chromedriver_path: str = "",
                 pdf_save_dir: str = "", export_pdf: bool = False):
        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options as ChromeOptions
        from selenium.webdriver.chrome.service import Service
        from webdriver_manager.chrome import ChromeDriverManager

        options = ChromeOptions()
        if headless:
            options.add_argument("--headless=new")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        if chrome_path:
            options.binary_location = chrome_path

        if chromedriver_path and os.path.exists(chromedriver_path):
            service = Service(executable_path=chromedriver_path)
        else:
            service = Service(ChromeDriverManager().install())

        self.driver = webdriver.Chrome(service=service, options=options)
        self._login()

        super().__init__(base_substack_url, md_save_dir, html_save_dir,
                         pdf_save_dir=pdf_save_dir, export_pdf=export_pdf)

    def _login(self) -> None:
        from selenium.webdriver.common.by import By

        self.driver.get("https://substack.com/sign-in")
        sleep(3)

        try:
            signin_btn = self.driver.find_element(
                By.XPATH, "//a[@class='login-option substack-login__login-option']"
            )
            signin_btn.click()
            sleep(3)
        except Exception:
            pass  # Layout may differ

        email_el = self.driver.find_element(By.NAME, "email")
        password_el = self.driver.find_element(By.NAME, "password")
        email_el.send_keys(EMAIL)
        password_el.send_keys(PASSWORD)

        submit = self.driver.find_element(
            By.XPATH, "//*[@id='substack-login']//form//button"
        )
        submit.click()
        sleep(15)

        error_containers = self.driver.find_elements(By.ID, 'error-container')
        if error_containers and error_containers[0].is_displayed():
            raise RuntimeError(
                "Login failed. Check credentials or use cookie-based auth instead."
            )

    def get_url_soup(self, url: str) -> Optional[BeautifulSoup]:
        self.driver.get(url)
        sleep(2)
        return BeautifulSoup(self.driver.page_source, "html.parser")

    def __del__(self):
        if hasattr(self, 'driver') and self.driver:
            try:
                self.driver.quit()
            except Exception:
                pass


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Scrape Substack posts to Markdown, HTML, and PDF."
    )
    parser.add_argument("-u", "--url", type=str, required=True,
                        help="Base URL of the Substack (e.g. https://example.substack.com)")
    parser.add_argument("-n", "--number", type=int, default=0,
                        help="Number of posts to scrape (0 = all)")
    parser.add_argument("-p", "--premium", action="store_true",
                        help="Use authenticated scraper for paid posts")
    parser.add_argument("--cookie", action="store_true",
                        help="Use cookie-based auth (set SUBSTACK_SID_COOKIE in config.py)")
    parser.add_argument("--pdf", action="store_true",
                        help="Also export posts as PDF files")
    parser.add_argument("--headless", action="store_true", default=True,
                        help="Run browser in headless mode (default: True)")
    parser.add_argument("--no-headless", action="store_true",
                        help="Run browser with visible window")
    parser.add_argument("--md-dir", type=str, default=BASE_MD_DIR,
                        help="Directory to save markdown files")
    parser.add_argument("--html-dir", type=str, default=BASE_HTML_DIR,
                        help="Directory to save HTML files")
    parser.add_argument("--pdf-dir", type=str, default=BASE_PDF_DIR,
                        help="Directory to save PDF files")
    parser.add_argument("--chrome-path", type=str, default="",
                        help="Path to Chrome binary")
    parser.add_argument("--chromedriver-path", type=str, default="",
                        help="Path to chromedriver binary")
    return parser.parse_args()


def main():
    args = parse_args()
    headless = args.headless and not args.no_headless

    if args.premium:
        if args.cookie or SUBSTACK_SID_COOKIE:
            cookie = SUBSTACK_SID_COOKIE
            if not cookie:
                print("Error: --cookie flag used but SUBSTACK_SID_COOKIE is empty in config.py")
                return
            print(f"Using cookie-based auth for: {args.url}")
            scraper = CookieSubstackScraper(
                args.url, md_save_dir=args.md_dir, html_save_dir=args.html_dir,
                cookie=cookie, pdf_save_dir=args.pdf_dir, export_pdf=args.pdf
            )
        else:
            print(f"Using Selenium login for: {args.url}")
            scraper = SeleniumSubstackScraper(
                args.url, md_save_dir=args.md_dir, html_save_dir=args.html_dir,
                headless=headless, chrome_path=args.chrome_path,
                chromedriver_path=args.chromedriver_path,
                pdf_save_dir=args.pdf_dir, export_pdf=args.pdf
            )
    else:
        print(f"Scraping free posts from: {args.url}")
        scraper = SubstackScraper(
            args.url, md_save_dir=args.md_dir, html_save_dir=args.html_dir,
            pdf_save_dir=args.pdf_dir, export_pdf=args.pdf
        )

    scraper.scrape_posts(args.number)
    print("Done!")


if __name__ == "__main__":
    main()
