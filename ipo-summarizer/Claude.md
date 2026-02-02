# IPO S-1 Summarizer - Project Plan

## Project Overview

Build a tool to analyze SEC S-1 IPO filings and generate two deliverables:
1. **Excel file** - Extracted financial data (income statement, balance sheet, cash flow)
2. **Summary document** (Word/Markdown) - Investment summary with key analysis

### Reference Example: Bob's Discount Furniture S-1
- **SEC Filing**: https://www.sec.gov/Archives/edgar/data/2085187/000162828026001455/bobsdiscountfurnitureincs-1.htm
- **Ticker**: BOBS (proposed NYSE listing)
- **Revenue**: ~$2B (LTM Sept 2025)
- **Net Income**: ~$119M (LTM Sept 2025)

---

## Phase 1: S-1 Data Extraction

### 1.1 Input Sources
- SEC EDGAR API for fetching S-1 filings
- Alternative: Manual PDF/HTML upload of S-1 document

### 1.2 Key Data to Extract

#### Financial Statements
| Statement | Key Line Items |
|-----------|----------------|
| **Income Statement** | Revenue, COGS, Gross Profit, SG&A, Operating Income, Interest Expense, Net Income |
| **Balance Sheet** | Cash, A/R, Inventory, PP&E, Total Assets, A/P, Debt (Short/Long-term), Equity |
| **Cash Flow** | Operating CF, CapEx, Free Cash Flow, Financing Activities |

#### IPO-Specific Data
- Shares offered (primary + secondary)
- Price range (low/high)
- Use of proceeds breakdown
- Pre-IPO ownership structure
- Post-IPO cap table

---

## Phase 2: Excel Output Structure

### 2.1 Workbook Tabs

```
Tab 1: Summary Dashboard
- Company name, ticker, exchange
- IPO price range & implied valuation
- Key metrics at a glance

Tab 2: Income Statement
- Historical (3 years if available)
- LTM / Recent interim period
- YoY growth calculations
- Margin calculations (Gross, Operating, Net)

Tab 3: Balance Sheet
- Most recent period
- Prior year comparison
- Key ratios (Current ratio, Debt/Equity, etc.)

Tab 4: Cash Flow Statement
- Historical periods
- Free Cash Flow calculation

Tab 5: IPO Details
- Shares offered
- Price range
- Use of proceeds
- Cap table (pre/post IPO)

Tab 6: Valuation Metrics
- P/E, P/S, EV/EBITDA at IPO price
- Comparison to industry peers (if data available)
```

### 2.2 Python Libraries Required
- `openpyxl` - Excel file creation/formatting
- `pandas` - Data manipulation
- `requests` or `sec-edgar-downloader` - SEC EDGAR API access
- `beautifulsoup4` - HTML parsing for S-1 documents
- `re` - Regex for financial data extraction

---

## Phase 3: Summary Document Structure

### 3.1 Document Sections

```markdown
# [Company Name] - IPO Investment Summary

## 1. Executive Summary
- One paragraph overview of the company and IPO

## 2. Business Overview
### What They Do
- Core business description
- Products/services offered
- Target market/customer base

### How They Make Money
- Revenue model breakdown
- Revenue by segment/geography (if disclosed)
- Key growth drivers

### Competitive Position
- Market position
- Key competitors
- Moat/competitive advantages

## 3. Financial Analysis

### Profitability Analysis
- Revenue growth trends
- Gross margin analysis
- Operating margin trends
- Net margin and path to profitability

### Balance Sheet Health
- Cash position
- Debt levels and structure
- Working capital adequacy
- Asset quality

### Cash Flow Analysis
- Operating cash flow trends
- CapEx requirements
- Free cash flow generation

## 4. IPO Transaction Details
- Shares offered and structure
- Price range and implied valuation
- Use of proceeds
- Lock-up provisions

## 5. Risk Factors (Key Highlights)
- Top 5-7 material risks from S-1

## 6. Investment Considerations
- Bull case
- Bear case
- Key metrics to watch post-IPO
```

---

## Phase 4: Implementation Plan

### Step 1: SEC Data Fetcher
```
File: src/sec_fetcher.py
- Function to download S-1 from EDGAR by CIK or ticker
- Parse HTML/XBRL for structured data
- Handle both traditional HTML and inline XBRL formats
```

### Step 2: Financial Parser
```
File: src/financial_parser.py
- Extract Income Statement tables
- Extract Balance Sheet tables
- Extract Cash Flow tables
- Normalize data into standard format
```

### Step 3: Excel Generator
```
File: src/excel_generator.py
- Create workbook with all tabs
- Apply formatting (currency, percentages, headers)
- Add formulas for calculated metrics
- Generate charts (optional)
```

### Step 4: Summary Generator
```
File: src/summary_generator.py
- Template-based markdown generation
- Pull key narrative sections from S-1
- Auto-populate financial metrics
- Export to .md (and optionally .docx via pandoc)
```

### Step 5: Main Orchestrator
```
File: main.py
- CLI interface
- Orchestrate full pipeline
- Input: S-1 URL or company identifier
- Output: Excel file + Summary document
```

---

## Phase 5: Directory Structure

```
ipo-summarizer/
├── Claude.md              # This planning document
├── README.md              # Usage instructions
├── requirements.txt       # Python dependencies
├── main.py               # Main entry point
├── src/
│   ├── __init__.py
│   ├── sec_fetcher.py    # Download S-1 filings
│   ├── financial_parser.py # Parse financial tables
│   ├── excel_generator.py  # Create Excel output
│   └── summary_generator.py # Create summary document
├── templates/
│   └── summary_template.md # Markdown template
├── output/
│   └── (generated files go here)
└── examples/
    └── bobs_discount_furniture/
        ├── BOBS_Financials.xlsx
        └── BOBS_IPO_Summary.md
```

---

## Phase 6: Bob's Discount Furniture - Example Data

### Key Financials (from S-1)
| Metric | Value | Period |
|--------|-------|--------|
| Revenue | $2.0B | LTM Sept 2025 |
| Net Income | $119M | LTM Sept 2025 |
| Revenue (9mo) | $1.72B | 9mo ending Sept 2025 |
| YoY Revenue Growth | 20.4% | 9mo comparison |
| Net Income (9mo) | $81M | 9mo ending Sept 2025 |
| YoY Net Income Growth | 63.6% | 9mo comparison |

### IPO Details
| Item | Value |
|------|-------|
| Exchange | NYSE |
| Ticker | BOBS |
| Shares Offered | 19.45M primary |
| Overallotment | 2.91M additional |
| Price Range | $17 - $19 |
| Implied Valuation | Up to ~$2.48B |
| Use of Proceeds | Repay $350M Term Loan, general corporate |

### Business Profile
- **Industry**: Value home furnishings retail
- **Stores**: 206 showrooms across 26 states (as of Sept 2025)
- **Growth Target**: 500+ locations by 2035
- **Sourcing**: 63% Vietnam, 27% USA (moved out of China by FY2024)

---

## Technical Considerations

### SEC EDGAR API
- Rate limiting: 10 requests per second max
- User-agent required in headers
- S-1 filings can be HTML or XBRL format
- May need to handle amendments (S-1/A)

### Financial Data Extraction Challenges
- Tables are often inconsistent in format
- Numbers may include footnote references
- Need to handle both thousands and millions
- Negative numbers shown in parentheses

### Output Formatting
- Excel: Use number formats, conditional formatting
- Markdown: Can convert to .docx using pandoc
- Consider using python-docx for native Word output

---

## Next Steps (To Implement)

1. [ ] Set up project directory structure
2. [ ] Create requirements.txt with dependencies
3. [ ] Build SEC fetcher module
4. [ ] Build financial parser (start with Bob's S-1 as test case)
5. [ ] Build Excel generator
6. [ ] Build summary generator
7. [ ] Test end-to-end with Bob's Discount Furniture
8. [ ] Add CLI interface
9. [ ] Documentation and examples

---

## Sources

- [Bob's Discount Furniture S-1 Filing (SEC)](https://www.sec.gov/Archives/edgar/data/2085187/000162828026001455/bobsdiscountfurnitureincs-1.htm)
- [Retail Dive - Bob's files for IPO](https://www.retaildive.com/news/bobs-discount-furniture-files-ipo/809213/)
- [Renaissance Capital - BOBS IPO Analysis](https://www.renaissancecapital.com/IPO-Center/News/116053/Budget-furniture-retailer-Bobs-Discount-Furniture-files-for-an-estimated-$4)
