# Financial Modeling Best Practices Guide

This document outlines the best practices for building financial models, based on our established modeling framework.

---

## Table of Contents

1. [Model Structure Overview](#model-structure-overview)
2. [Segment Revenue Build](#segment-revenue-build)
3. [Income Statement](#income-statement)
4. [Tax Schedule](#tax-schedule)
5. [Balance Sheet](#balance-sheet)
6. [Supporting Schedules](#supporting-schedules)
7. [Common Size Analysis](#common-size-analysis)
8. [Cash Flow Statement](#cash-flow-statement)
9. [DCF Valuation](#dcf-valuation)
10. [Market Data & Comparison](#market-data--comparison)
11. [Data Sources & SEC Filings](#data-sources--sec-filings)
12. [Proofreading & Verification](#proofreading--verification)
13. [Formula and Reference Best Practices](#formula-and-reference-best-practices)
14. [Formatting Standards](#formatting-standards)
15. [Instructions for Efficient Model Modifications](#instructions-for-efficient-model-modifications-for-claude)
16. [Verification Log](#verification-log)

---

## Model Structure Overview

### Column Layout

A well-organized model uses a consistent column structure that separates historical data from forecast periods:

| Column | Purpose |
|--------|---------|
| A | Marker column (`x` for section headers) |
| B | Row labels/descriptions |
| C-F | Annual historical data (FY 2021-2024) |
| G-L | Annual forecast data (FY 2025-2030) |
| M-Q | Blank separator columns (5 columns) |
| R-U | Quarterly 2024 (Q1-Q4 2024, historical) |
| V-Y | Quarterly 2025 (Q1-Q4 2025, current year) |
| Z-AC | Quarterly 2026 (Q1-Q4 2026, forecast) |

**Key Layout Principles:**
- Historical and forecast periods should be clearly distinguished
- Forecast annual columns (2025-2030) allow for both quarterly roll-ups and long-term projections
- Quarterly data extends through EOY 2026 for near-term detailed forecasting
- Annual projections extend to 2030 for DCF and long-term valuation

### Section Order

Models should flow in this logical order:

1. **Segment Revenue Breakdown** - Top of model
2. **Income Statement** - Core financial performance (with driver rows)
3. **Tax Schedule** - Effective tax rate calculation
4. **Balance Sheet** - Financial position (annual only)
5. **Supporting Schedules** - Interest, CapEx, Equity
6. **Common Size Analysis** - Ratio analysis
7. **Cash Flow Statement** - Derived from B/S changes

---

## Segment Revenue Build

### Purpose
Break down total revenue into reporting segments that reconcile to consolidated revenue. This provides transparency into business drivers and enables segment-level forecasting.

### Structure

```
SEGMENT REVENUE BREAKDOWN - In Thousands USD
                                    FY 2021   FY 2022   FY 2023   FY 2024
Segment A Revenue                   [value]   [value]   [value]   [value]
  YoY Growth                                  [formula] [formula] [formula]
Segment B Revenue                   [value]   [value]   [value]   [value]
  YoY Growth                                  [formula] [formula] [formula]
Segment C Revenue                   [value]   [value]   [value]   [value]
  YoY Growth                                  [formula] [formula] [formula]
Total Revenue                       [SUM]     [SUM]     [SUM]     [SUM]
  YoY Growth                                  [formula] [formula] [formula]
```

### Key Principles

1. **Each segment has its own YoY growth rate** calculated directly below
2. **Total Revenue** is a SUM formula of all segments
3. **YoY Growth formula**: `=CurrentYear/PriorYear - 1`
4. **Quarterly YoY** uses hardcoded prior year quarterly values for comparison
5. Segments should **reconcile exactly** to reported total revenue

### YoY Growth Formulas

**Annual YoY Growth:**
```
=D4/C4-1  (current year / prior year - 1)
```

**Quarterly YoY Growth:**
```
=K4/[Prior Year Q1 Value]-1  (current quarter / same quarter prior year - 1)
```

---

## Income Statement

### Standard Line Items

```
INCOME STATEMENT - In Thousands USD
                                    Annual Columns    Quarterly Columns
Revenue                             [hardcoded]       [hardcoded]
- Cost of Revenue                   [hardcoded]       [hardcoded]
  % of Sales                        [=COGS/Revenue]   [=COGS/Revenue]      <- DRIVER ROW (light gray)
Gross Profit                        [=Revenue-COGS]   [=Revenue-COGS]
- SG&A Expenses                     [hardcoded]       [hardcoded]
  % of Sales                        [=SG&A/Revenue]   [=SG&A/Revenue]      <- DRIVER ROW (light gray)
- Depreciation & Amortization       [hardcoded]       [hardcoded]
- Goodwill Impairment              [hardcoded]       [hardcoded]
Operating Income (Loss)             [formula]         [formula]
- Interest Expense, net             [hardcoded]       [hardcoded]
Pretax Income (Loss)               [formula]         [formula]
- Income Tax Expense (Benefit)      [hardcoded]       [hardcoded]
Net Income (Loss)                   [formula]         [formula]
```

### Driver Rows for Forecasting

Driver rows are key metrics expressed as a percentage of revenue that help project future values. They should be:

1. **Placed directly below the line item** they relate to
2. **Formatted with light gray shading** (`#F0F0F0`) to distinguish them from actual data rows
3. **Labeled with "% of Sales"** and indented with two spaces
4. **Include IF statements** to handle cases where revenue is zero:
   ```
   =IF(Revenue>0, LineItem/Revenue, "")
   ```

**Key Driver Rows:**
- **Cost of Sales % of Sales**: Indicates gross margin trends
- **SG&A % of Sales**: Shows operating leverage
- **Effective Tax Rate**: From Tax Schedule (see below)

### Reference Items Section

Below the income statement, include calculated metrics:

- **EBITDA**: `=Operating Income + D&A + Impairment`
- **Gross Margin**: `=Gross Profit / Revenue`
- **Operating Margin**: `=Operating Income / Revenue`
- **Net Profit Margin**: `=Net Income / Revenue`

### Formula Examples

```
Gross Profit:       =C20-C21 (Revenue minus Cost of Revenue)
Operating Income:   =C22-C23-C24-C25 (Gross Profit minus OpEx items)
Pretax Income:      =C26-C27 (Operating Income minus Interest)
Net Income:         =C28-C29 (Pretax minus Tax)
EBITDA:            =C26+C24+C25 (Op Income + D&A + Impairment)
```

---

## Tax Schedule

### Purpose

The Tax Schedule calculates the effective tax rate by comparing income tax expense to pretax income. This is essential for forecasting as it allows you to project tax expense based on projected pretax income.

### Structure

```
TAX SCHEDULE
                                    Annual Columns    Quarterly Columns
Pretax Income (Loss)                [=link to I/S]    [=link to I/S]
Income Tax Expense (Benefit)        [=link to I/S]    [=link to I/S]
Effective Tax Rate                  [formula]         [formula]           <- DRIVER ROW (light gray)
```

### Effective Tax Rate Formula

```
=IF(Pretax Income <> 0, Tax Expense / Pretax Income, "")
```

**Important Notes:**
- Use `<> 0` instead of `> 0` because pretax income can be negative (loss)
- The effective tax rate can be negative when there's a tax benefit on a pretax loss
- The Effective Tax Rate row should have light gray shading to indicate it's a driver row
- Historical effective tax rates help inform projected tax rates for forecast periods

### Using Tax Rate for Forecasting

In forecast periods:
1. Project Pretax Income using revenue growth and margin assumptions
2. Apply the projected Effective Tax Rate to calculate Tax Expense:
   ```
   Tax Expense = Pretax Income × Effective Tax Rate
   ```
3. Calculate Net Income = Pretax Income - Tax Expense

---

## Balance Sheet

### Structure

Balance sheets should be **annual only** - do not include quarterly balance sheet data unless specifically needed for working capital analysis.

### Assets Section

```
BALANCE SHEET - In Thousands of USD
ASSETS
+ Cash and Cash Equivalents         [hardcoded]
+ Accounts Receivable, net          [hardcoded]
+ Subcontractor Receivables         [hardcoded]
+ Prepaid & Other Current           [hardcoded]
Total Current Assets                [SUM formula]
+ Restricted Cash & Investments     [hardcoded]
+ Fixed Assets, net                 [hardcoded]
+ Other Assets                      [hardcoded]
+ Deferred Tax Assets               [hardcoded]
+ Goodwill                          [hardcoded]
+ Intangible Assets, net            [hardcoded]
Total Assets                        [SUM formula]
```

### Liabilities & Equity Section

```
LIABILITIES & SHAREHOLDERS' EQUITY
+ Accounts Payable & Accrued        [hardcoded]
+ Accrued Compensation & Benefits   [hardcoded]
+ Other Current Liabilities         [hardcoded]
Total Current Liabilities           [SUM formula]
+ Revolving Credit Facility         [hardcoded]
+ Notes Payable, net                [hardcoded]
+ Deferred Income Taxes             [hardcoded]
+ Other Long-term Liabilities       [hardcoded]
Total Liabilities                   [SUM formula]
Stockholders' Equity                [=Total Assets - Total Liabilities]
Total Liabilities & Equity          [=Total Liabilities + Equity]

Check A=L+E                         [=Total Assets - Total L&E]
```

### Balance Check

Always include a **Check A=L+E** row that should equal zero. This verifies the balance sheet balances.

---

## Supporting Schedules

### Interest Expense and Debt Schedule

```
INTEREST EXPENSE AND DEBT SCHEDULE
Interest Expense                    [=link to I/S]
Total Debt                          [=Revolving + Notes Payable]
Implied Interest Rate               [=IF(Debt>0, Interest/Debt, 0)]
Debt / EBITDA                       [=IF(EBITDA>0, Debt/EBITDA, 0)]
```

### PPE and CapEx Schedule

```
PPE AND CAPEX SCHEDULE              FY 2022   FY 2023   FY 2024
CapEx (implied)                     [formula] [formula] [formula]
Revenue                             [=link]   [=link]   [=link]
CapEx as % of Revenue               [formula] [formula] [formula]

Depreciation & Amortization         [=link]   [=link]   [=link]
D&A as % of Revenue                 [formula] [formula] [formula]
```

**Implied CapEx Formula:**
```
=Current Year Fixed Assets - Prior Year Fixed Assets + Current Year D&A
```

### Equity Schedule

```
EQUITY SCHEDULE                     FY 2022   FY 2023   FY 2024
Beginning of Period                 [=Prior Year Equity]
+ Net Income                        [=link to I/S]
+ Other Changes (Buybacks/OCI)      [=Ending - Beginning - NI]
End of Period                       [=Current Year Equity]
```

---

## Common Size Analysis

### Purpose
Express balance sheet items as a percentage of revenue to analyze trends and compare across periods.

### Structure

```
COMMON SIZE BALANCE SHEET
Balance Sheet Items as % of Revenue
ASSETS
+ Cash and Cash Equivalents         [=Cash/Revenue]
+ Accounts Receivable, net          [=AR/Revenue]
...
Total Assets                        [=Total Assets/Revenue]

LIABILITIES & EQUITY
+ Accounts Payable & Accrued        [=AP/Revenue]
...
Total Liabilities & Equity          [=Total L&E/Revenue]
```

### Key Metrics to Watch

- **Days Sales Outstanding (DSO)**: AR / Revenue * 365
- **Days Payable Outstanding (DPO)**: AP / COGS * 365
- **Inventory Turns**: COGS / Average Inventory

---

## Cash Flow Statement

### Derived Cash Flow Approach

Build the cash flow statement from balance sheet changes:

```
STATEMENT OF CASH FLOWS (Derived)
Operating Activities:
Net Income                          [=link to I/S]
+ Depreciation & Amortization       [=link to I/S]
+ Goodwill Impairment              [=link to I/S]
change in + Accounts Receivable     [=-(Current AR - Prior AR)]
change in + Subcontractor Recv      [=-(Current - Prior)]
change in + Prepaid & Other         [=-(Current - Prior)]
change in + Payables & Accruals     [=Current - Prior]
change in + Accrued Compensation    [=Current - Prior]
change in + Other ST Liabilities    [=Current - Prior]
Cash Flow From Operations           [SUM of above]

Investing Activities:
change in + Property, Plant & Equip [=-((Current PPE - Prior PPE) + D&A)]
change in + Other LT Assets         [=-(changes in LT assets)]
change in + Goodwill (Acquisitions) [=-((Current GW - Prior GW) + Impairment)]
change in + Intangibles             [=-(Current - Prior)]
Cash Flow From Investing            [SUM of above]

Financing Activities:
change in + LT Debt                 [=Current Debt - Prior Debt]
change in + Other LT Liabilities    [=Current - Prior]
change in Total Equity (ex NI)      [=link to Equity Schedule]
Cash Flow From Financing            [SUM of above]

Total Cash Flow                     [=CFO + CFI + CFF]
Actual Change in Cash (B/S)         [=Current Cash - Prior Cash]
Difference (Check)                  [=Total CF - Actual Change]
```

### Sign Conventions for Working Capital Changes

| Item | Increase in Account | Cash Flow Effect |
|------|---------------------|------------------|
| Receivables | Uses cash | Negative |
| Inventory | Uses cash | Negative |
| Prepaid | Uses cash | Negative |
| Payables | Source of cash | Positive |
| Accrued Liabilities | Source of cash | Positive |

---

## DCF Valuation

### Purpose

A simple annual DCF (Discounted Cash Flow) provides an intrinsic value estimate for the company based on projected free cash flows.

### Structure

```
DCF VALUATION - Annual (in Thousands USD)
                                    FY 2025   FY 2026   FY 2027   FY 2028   FY 2029   FY 2030
INPUTS
Discount Rate (WACC)                [input]   <- Light blue shading for inputs
Terminal Growth Rate                [input]

FREE CASH FLOW
EBITDA                              [=link]   [=link]   [=link]   [=link]   [=link]   [=link]
- CapEx (as % of Revenue)           [formula] [formula] [formula] [formula] [formula] [formula]
- Change in NWC (assumed 0)         [0]       [0]       [0]       [0]       [0]       [0]
- Cash Taxes                        [=link]   [=link]   [=link]   [=link]   [=link]   [=link]
Free Cash Flow                      [SUM]     [SUM]     [SUM]     [SUM]     [SUM]     [SUM]

PRESENT VALUE
Discount Factor                     [formula] [formula] [formula] [formula] [formula] [formula]
PV of FCF                           [formula] [formula] [formula] [formula] [formula] [formula]

VALUATION SUMMARY
Sum of PV of FCFs                   [SUM of all PV FCFs]
Terminal Year FCF                   [=link to final year FCF]
Terminal Value (Gordon Growth)      [=FCF*(1+g)/(r-g)]
PV of Terminal Value                [=TV * final discount factor]
Enterprise Value                    [=Sum PV + PV Terminal]
```

### Key Formulas

**Discount Factor:**
```
=1/(1+WACC)^Year
```

**Terminal Value (Gordon Growth Model):**
```
=Terminal FCF * (1 + Terminal Growth) / (WACC - Terminal Growth)
```

### Input Cell Formatting

- Input cells should have **light blue shading** (`#E6F3FF`)
- Default assumptions: WACC 10%, Terminal Growth 2%
- Include label cell shading to match

---

## Market Data & Comparison

### Purpose

Compare the DCF-derived enterprise value against current market valuation to determine upside/downside potential.

### Structure

```
MARKET DATA & VALUATION COMPARISON
MARKET INPUTS (Update Manually)
Shares Outstanding (millions)       [input]   <- Light blue shading
Current Stock Price ($)             [input]
Market Cap (thousands)              [=Shares * Price * 1000]
Total Debt (FY2024)                 [=link to BS]
Cash (FY2024)                       [=link to BS]
Net Debt                            [=Total Debt - Cash]
Current Enterprise Value            [=Market Cap + Net Debt]

VALUATION COMPARISON
DCF Enterprise Value                [=link to DCF EV]
Implied Equity Value                [=DCF EV - Net Debt]
Implied Share Price ($)             [=Implied Equity / Shares / 1000]
Upside / (Downside) %               [=Implied Price / Current Price - 1]
```

### Key Metrics

- **Net Debt**: Total Debt - Cash (can be negative if cash exceeds debt)
- **Current EV**: Market Cap + Net Debt
- **Upside/Downside**: Shows if DCF suggests stock is undervalued (positive) or overvalued (negative)

---

## Data Sources & SEC Filings

### Where to Get Financial Data

For any public company model, data should be sourced from official SEC filings:

| Filing Type | Frequency | Data Available |
|-------------|-----------|----------------|
| 10-K | Annual | Full year financials, all statements, segment data |
| 10-Q | Quarterly | Quarterly financials, YTD data, segment breakdowns |
| 8-K | Event-driven | Material events, earnings releases |
| DEF 14A | Annual | Executive compensation, share counts |

### SEC EDGAR Access

**Base URL:** `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=[CIK_NUMBER]`

**Finding CIK:**
1. Search company name on SEC EDGAR
2. CIK is the unique identifier (e.g., AMN Healthcare = 0001142750)

### Model Data Mapping

| Model Section | Primary Source | Filing Location |
|---------------|----------------|-----------------|
| Segment Revenue | 10-K/10-Q | Notes to Financial Statements |
| Income Statement | 10-K/10-Q | Consolidated Statements of Operations |
| Balance Sheet | 10-K/10-Q | Consolidated Balance Sheets |
| Cash Flow | 10-K/10-Q | Consolidated Statements of Cash Flows |
| Share Count | DEF 14A / 10-K | Cover page or Notes |

### Replicating for Other Companies

To build a model for a different company:

1. **Find CIK**: Search SEC EDGAR for company name
2. **Download 10-K**: Most recent annual for historical data
3. **Download 10-Qs**: For quarterly data
4. **Map line items**: Match filing line items to model rows
5. **Update references**: Change ticker, CIK in data source section

---

## Proofreading & Verification

### Purpose

After every model update, verify that hardcoded data matches SEC filings exactly. This ensures model integrity and prevents errors from propagating into forecasts.

### Verification Protocol

After each model change, perform these checks:

1. **Random Sample Check**: Pick one random historical period (annual or quarterly)
2. **Pull Original Filing**: Access the 10-K or 10-Q for that period
3. **Compare Key Figures**:
   - Revenue (must match exactly)
   - Cost of Revenue
   - SG&A
   - Net Income
   - Total Assets
   - Total Liabilities

### Verification Checklist

```
[ ] Randomly selected period: ____________
[ ] Filing type and date: ____________
[ ] Revenue matches: ______ (model) vs ______ (filing)
[ ] Cost of Revenue matches: ______ vs ______
[ ] Net Income matches: ______ vs ______
[ ] Total Assets matches: ______ vs ______
[ ] Total Liabilities matches: ______ vs ______
[ ] Any discrepancies noted and corrected: ____________
```

### Common Discrepancy Sources

| Issue | Cause | Resolution |
|-------|-------|------------|
| Off by factor of 1000 | Units mismatch | Model uses thousands; filings may use millions |
| Sign difference | Expense/income treatment | Losses should be negative |
| Timing | Filing date vs period end | Ensure you're comparing same period |
| Restatements | Prior period adjustments | Use most recent filing's historical data |

### When to Verify

- **Always**: After initial data entry
- **Always**: After adding new historical periods
- **Spot check**: After modifying formulas that reference historical data
- **Full check**: Before presenting to stakeholders

### Automated Checks in Model

The model includes built-in checks:
- **Balance Check (A=L+E)**: Should equal 0
- **Cash Flow Reconciliation**: Derived CF should match actual B/S cash change

---

## Formula and Reference Best Practices

### Use Cell References, Not Hardcoded Values

**Good:**
```
=C20-C21  (references actual cells)
```

**Bad:**
```
=3984235-2674634  (hardcoded values)
```

### Link Related Schedules

Always link supporting schedules back to the main financial statements:

```
Interest Schedule Interest Expense: =C27 (links to I/S Interest row)
Equity Schedule Net Income: =C30 (links to I/S Net Income row)
```

### Use Consistent Column References

When building formulas across multiple years, maintain consistent column patterns:

```
Column C = FY 2021 (oldest)
Column D = FY 2022
Column E = FY 2023
Column F = FY 2024 (most recent)
```

### Error Handling

Use IF statements to prevent division by zero errors:

```
=IF(C58>0, C57/C58, 0)  (only divide if denominator > 0)
```

---

## Formatting Standards

### Number Formats

| Data Type | Format | Example |
|-----------|--------|---------|
| Currency (thousands) | `#,##0` | 1,234,567 |
| Percentages | `0.0%` | 25.3% |
| Multiples | `0.0x` | 3.5x |

### Visual Hierarchy

1. **Section Headers**: Bold, larger font (11-14pt)
2. **Subtotals**: Bold
3. **Regular line items**: Normal weight
4. **Growth rates/margins**: Indented with two spaces
5. **Driver rows (% of Sales, Tax Rate)**: Light gray fill (`#F0F0F0`), indented with two spaces

### Column Widths

| Column Type | Recommended Width |
|-------------|-------------------|
| Marker (A) | 3 |
| Labels (B) | 40-45 |
| Annual data columns (C-L) | 14 |
| Separator columns (M-Q) | 3 |
| Quarterly data columns (R-AC) | 12 |

### Marker Column Convention

Use `x` in column A to mark major section headers:
- `x` for SEGMENT REVENUE BREAKDOWN
- `x` for INCOME STATEMENT
- `x` for TAX SCHEDULE
- `x` for BALANCE SHEET
- `x` for each supporting schedule
- `x` for DCF VALUATION
- `x` for MARKET DATA & VALUATION COMPARISON
- `x` for DATA SOURCES & FILING REFERENCES

---

## Quick Reference: Common Formulas

### Profitability Ratios
```
Gross Margin = Gross Profit / Revenue
Operating Margin = Operating Income / Revenue
Net Margin = Net Income / Revenue
EBITDA Margin = EBITDA / Revenue
```

### Leverage Ratios
```
Debt/EBITDA = Total Debt / EBITDA
Debt/Equity = Total Debt / Stockholders' Equity
Interest Coverage = EBITDA / Interest Expense
```

### Growth Rates
```
YoY Growth = (Current Period / Prior Period) - 1
CAGR = (Ending Value / Beginning Value)^(1/Years) - 1
```

### Working Capital
```
Working Capital = Current Assets - Current Liabilities
Current Ratio = Current Assets / Current Liabilities
Quick Ratio = (Current Assets - Inventory) / Current Liabilities
```

---

## Checklist Before Finalizing Model

- [ ] All formulas reference cells (no hardcoded calculations)
- [ ] Balance sheet balances (A = L + E check = 0)
- [ ] Cash flow reconciles to balance sheet cash change
- [ ] Segment revenues sum to total revenue
- [ ] All percentages formatted correctly
- [ ] Section headers marked with `x` in column A
- [ ] Supporting schedules link back to main statements
- [ ] Error handling in place for division operations
- [ ] Column widths set for readability
- [ ] Quarterly data separated from annual by blank columns
- [ ] Driver rows (% of Sales, Tax Rate) have light gray shading
- [ ] Tax Schedule included with effective tax rate calculation
- [ ] Forecast periods extend through 2030 annually and Q4 2026 quarterly
- [ ] DCF valuation section includes discount rate and terminal growth inputs
- [ ] Market data section includes shares outstanding and stock price inputs
- [ ] Data sources section references correct SEC CIK
- [ ] Proofreading verification completed against SEC filing

---

## Instructions for Efficient Model Modifications (For Claude)

### Python Model File Structure

The `create_amn_model.py` file follows a consistent pattern. To efficiently navigate and modify:

**File Structure (approximate line ranges):**
```
Lines 1-20:      Imports and style definitions
Lines 20-70:     Column layout definitions (annual_cols, quarterly_cols)
Lines 70-150:    Historical data dictionaries (segment_annual, annual_data, quarterly_data)
Lines 150-350:   Segment Revenue Breakdown section
Lines 350-550:   Income Statement section (includes driver rows)
Lines 550-650:   Tax Schedule section
Lines 650-900:   Balance Sheet section
Lines 900-1000:  PPE and CapEx Schedule
Lines 1000-1100: Common Size Balance Sheet
Lines 1100-1150: Equity Schedule
Lines 1150-1280: Statement of Cash Flows
Lines 1280-1410: DCF Valuation section
Lines 1410-1510: Market Data & Comparison section
Lines 1510-1530: Data Sources section
Lines 1530-end:  Column widths and save
```

### Key Variables to Track

When modifying the model, these are critical:
- `row_refs`: Dictionary storing row numbers for formula references
- `annual_cols_hist` / `annual_cols_fcast`: Column letters for annual data
- `quarterly_cols_2024/2025/2026`: Column letters for quarterly data
- `driver_fill`: Light gray fill for driver rows
- `input_fill`: Light blue fill for input cells

### Adding New Sections

1. Find the appropriate location using line range guide above
2. Add section header with `x` marker in column A
3. Store row references in `row_refs` dictionary
4. Use consistent formula patterns from existing sections
5. Update column widths if needed at end of file

### Modifying Historical Data

To update historical values:
1. Find the data dictionary (e.g., `annual_data`, `quarterly_data_2024`)
2. Update the values in the dictionary
3. Re-run the script to regenerate Excel file

### Reading Strategy

When asked to modify the model:
1. Read lines 1-150 for structure and data definitions
2. Use `Grep` to find specific section (e.g., `grep "INCOME STATEMENT"`)
3. Read ~100 lines around the target section
4. Make targeted edits using `Edit` tool

---

## Verification Log

Record of income statement verifications performed against SEC filings:

### FY 2023 Verification (January 2026)
**Period:** Fiscal Year 2023 (12/31/2023)
**Source:** AMN Healthcare 10-K, SEC EDGAR, press releases

| Line Item | Model (000s) | Filing (000s) | Status |
|-----------|--------------|---------------|--------|
| Revenue | 3,789,254 | 3,789,254 | ✓ |
| Cost of Revenue | 2,539,673 | 2,539,673 | ✓ |
| Gross Profit | 1,249,581 | 1,249,581 | ✓ |
| SG&A | 756,238 | 756,238 | ✓ |
| D&A | 154,914 | 154,914 | ✓ |
| Operating Income | 338,429 | 338,429 | ✓ |
| Interest Expense | 54,140 | 54,140 | ✓ |
| Pretax Income | 284,289 | 284,289 | ✓ |
| Tax Expense | 73,610 | 73,610 | ✓ |
| Net Income | 210,679 | ~211,000 | ✓ |

**Segment Revenue:**
- Nurse & Allied: 2,624,500 vs 2,625,000 (✓ <0.1% variance)
- Physician & Leadership: 669,700 vs 670,000 (✓ <0.1% variance)

**Verified by:** Claude | **Date:** January 31, 2026

---

*Last Updated: January 2026*
