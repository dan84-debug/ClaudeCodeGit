# Financial Modeling Best Practices Guide

This document outlines the best practices for building financial models, based on our established modeling framework.

---

## Table of Contents

1. [Model Structure Overview](#model-structure-overview)
2. [Segment Revenue Build](#segment-revenue-build)
3. [Income Statement](#income-statement)
4. [Balance Sheet](#balance-sheet)
5. [Supporting Schedules](#supporting-schedules)
6. [Common Size Analysis](#common-size-analysis)
7. [Cash Flow Statement](#cash-flow-statement)
8. [Formula and Reference Best Practices](#formula-and-reference-best-practices)
9. [Formatting Standards](#formatting-standards)

---

## Model Structure Overview

### Column Layout

A well-organized model uses a consistent column structure:

| Column | Purpose |
|--------|---------|
| A | Marker column (`x` for section headers) |
| B | Row labels/descriptions |
| C-F | Annual data (4 fiscal years) |
| G-J | Blank separator columns |
| K-N | Quarterly data (4 quarters) |

### Section Order

Models should flow in this logical order:

1. **Segment Revenue Breakdown** - Top of model
2. **Income Statement** - Core financial performance
3. **Balance Sheet** - Financial position (annual only)
4. **Supporting Schedules** - Interest, CapEx, Equity
5. **Common Size Analysis** - Ratio analysis
6. **Cash Flow Statement** - Derived from B/S changes

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
Gross Profit                        [=Revenue-COGS]   [=Revenue-COGS]
- SG&A Expenses                     [hardcoded]       [hardcoded]
- Depreciation & Amortization       [hardcoded]       [hardcoded]
- Goodwill Impairment              [hardcoded]       [hardcoded]
Operating Income (Loss)             [formula]         [formula]
- Interest Expense, net             [hardcoded]       [hardcoded]
Pretax Income (Loss)               [formula]         [formula]
- Income Tax Expense (Benefit)      [hardcoded]       [hardcoded]
Net Income (Loss)                   [formula]         [formula]
```

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

### Column Widths

| Column Type | Recommended Width |
|-------------|-------------------|
| Marker (A) | 3 |
| Labels (B) | 40-45 |
| Data columns | 12-14 |
| Separator columns | 3 |

### Marker Column Convention

Use `x` in column A to mark major section headers:
- `x` for SEGMENT REVENUE BREAKDOWN
- `x` for INCOME STATEMENT
- `x` for BALANCE SHEET
- `x` for each supporting schedule

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

---

*Last Updated: January 2026*
