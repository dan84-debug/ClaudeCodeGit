# IPO S-1 Summarizer - Project Plan

## Project Overview

Build a tool to analyze SEC S-1 IPO filings and generate two deliverables:
1. **Excel file** - Extracted financial data (income statement, balance sheet)
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
| **Income Statement** | Revenue, COGS, Gross Profit, SG&A, EBITDA, Operating Income, Interest Expense, Net Income |
| **Balance Sheet** | Cash, A/R, Inventory, PP&E, Total Assets, A/P, Debt (Short/Long-term), Equity |

#### IPO-Specific Data
- Shares offered (primary + secondary)
- Price range (low/high)
- Use of proceeds breakdown
- Pre-IPO ownership structure
- Post-IPO cap table
- Selling shareholders (who is selling and why)

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

  KEY METRICS TO INCLUDE:
  - Gross Margin %
  - EBITDA
  - EBITDA Margin %
  - Operating Margin %
  - Net Margin %

  YoY GROWTH CALCULATIONS:
  - Revenue Growth %
  - Gross Profit Growth %
  - EBITDA Growth %
  - Net Income Growth %

Tab 3: Balance Sheet
- Most recent period
- Prior year comparison
- Key ratios (Current ratio, Debt/Equity, etc.)

Tab 4: IPO Details
- Shares offered
- Price range
- Use of proceeds
- Cap table (pre/post IPO)
- Selling shareholders breakdown

Tab 5: Valuation
- Shares outstanding (pre/post IPO)
- Market cap at low/mid/high price
- Enterprise Value
- P/E ratio
- P/S ratio
- EV/Revenue
- EV/EBITDA
- Comparison to peers (if available)
```

### 2.2 Python Libraries Required
- `openpyxl` - Excel file creation/formatting
- `pandas` - Data manipulation
- `requests` or `sec-edgar-downloader` - SEC EDGAR API access
- `beautifulsoup4` - HTML parsing for S-1 documents

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

## 3. Financial Analysis

### Profitability
- Revenue and growth trends
- Gross Margin
- EBITDA and EBITDA Margin
- Net Income and Net Margin
- YoY growth rates (Revenue, EBITDA, Net Income)

### Balance Sheet
- Cash position
- Debt levels and structure
- Key ratios

## 4. Valuation
- IPO price range
- Implied market cap
- Enterprise value
- Key multiples (P/E, P/S, EV/EBITDA)
- How it compares to peers

## 5. Who Is Selling & Why
- Primary vs secondary offering breakdown
- Which shareholders are selling
- Why they are selling (debt repayment, liquidity, etc.)
- Use of proceeds

## 6. Risk Factors (Key Highlights)
- Top 5-7 material risks from S-1

## 7. Investment Considerations
- Bull case
- Bear case
```

---

## Phase 4: Implementation Plan

### Step 1: SEC Data Fetcher
```
File: src/sec_fetcher.py
- Function to download S-1 from EDGAR by CIK or ticker
- Parse HTML/XBRL for structured data
```

### Step 2: Financial Parser
```
File: src/financial_parser.py
- Extract Income Statement tables
- Extract Balance Sheet tables
- Calculate margins and growth rates
```

### Step 3: Excel Generator
```
File: src/excel_generator.py
- Create workbook with all tabs
- Apply formatting (currency, percentages, headers)
- Add formulas for margins and YoY growth
```

### Step 4: Summary Generator
```
File: src/summary_generator.py
- Template-based markdown generation
- Auto-populate financial metrics
- Export to .md (and optionally .docx via pandoc)
```

### Step 5: Main Orchestrator
```
File: main.py
- CLI interface
- Input: S-1 URL or company identifier
- Output: Excel file + Summary document
```

---

## Phase 5: Directory Structure

```
ipo-summarizer/
├── Claude.md              # This planning document
├── requirements.txt       # Python dependencies
├── main.py               # Main entry point
├── src/
│   ├── sec_fetcher.py    # Download S-1 filings
│   ├── financial_parser.py # Parse financial tables
│   ├── excel_generator.py  # Create Excel output
│   └── summary_generator.py # Create summary document
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

### Who Is Selling & Why
- Existing investors selling via secondary offering
- Overallotment of 2.91M shares from existing investor
- Proceeds used to repay $350M Term Loan (from October 2025 dividend)
- General corporate purposes

### Business Profile
- **Industry**: Value home furnishings retail
- **Stores**: 206 showrooms across 26 states (as of Sept 2025)
- **Growth Target**: 500+ locations by 2035
- **Sourcing**: 63% Vietnam, 27% USA (moved out of China by FY2024)

---

## Next Steps (To Implement)

1. [ ] Set up project directory structure
2. [ ] Create requirements.txt with dependencies
3. [ ] Build SEC fetcher module
4. [ ] Build financial parser (start with Bob's S-1 as test case)
5. [ ] Build Excel generator with margins & YoY growth
6. [ ] Build summary generator
7. [ ] Test end-to-end with Bob's Discount Furniture

---

## Sources

- [Bob's Discount Furniture S-1 Filing (SEC)](https://www.sec.gov/Archives/edgar/data/2085187/000162828026001455/bobsdiscountfurnitureincs-1.htm)
- [Retail Dive - Bob's files for IPO](https://www.retaildive.com/news/bobs-discount-furniture-files-ipo/809213/)
- [Renaissance Capital - BOBS IPO Analysis](https://www.renaissancecapital.com/IPO-Center/News/116053/Budget-furniture-retailer-Bobs-Discount-Furniture-files-for-an-estimated-$4)
