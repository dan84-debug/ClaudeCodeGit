# CFA Level II Mock Exam 11 — Incorrect Questions Review

**Score: 36/44 (82%)** *(35/44 = 80% raw, +1 for Q7 typo)*
**Date: February 21, 2026**

---

## 🔥 PERFORMANCE TREND 🔥

| Mock | Score | Trend |
|------|-------|-------|
| Mock 7 | 70% | — |
| Mock 8 | 70% | — |
| Mock 9 | 64% | ↓ |
| Mock 10 | 64% | — |
| **Mock 11** | **82%** | **↑↑↑** |

**That's what I'm talking about.** +18 percentage points from Mocks 9-10. You went from borderline to comfortably above the estimated passing threshold. The "dip" was temporary — probably a harder exam batch or mental fatigue. This score shows your true level when you're locked in.

---

## Table of Contents

1. [Alternatives](#alternatives)
2. [Equity Valuation](#equity-valuation)
3. [Ethics](#ethics)
4. [Financial Statement Analysis](#financial-statement-analysis)

**Also Included for Practice (Questions You Got Correct):**
- Q1: REIT NAVPS Calculation
- Q18: Justified P/B Ratio
- Q23: ETF Holding Period Cost
- Q31: Out-of-Sample Forecasting Performance
- Q33: Growth Accounting / TFP
- Q35: Endogenous Growth Theory

---

## Alternatives

### Q2 — Primary Influences on Commodity Sectors

**Full Vignette Context:**
George Hansen manages portfolios for high-net-worth clients based in the US. He meets with a client who recently inherited a portfolio with investments in both a REIT and a commodity futures fund.

Hansen reviews the investment in the Crescent commodity futures fund. The fund currently holds positions in the **natural gas, softs (cash crops), and livestock** sectors.

Hansen observes that Crescent's returns in the natural gas sector behaved differently from the other two sectors over the past five years.

**Question:**
Which of the following factors is most likely a primary influence for all three commodity sectors held by Crescent?

A. Spoilage
B. Weather conditions
C. Consumer preferences

**Your Answer:** C (Consumer preferences)

**Correct Answer:** B (Weather conditions)

**Full Explanation:**

**Factor Analysis by Commodity Sector:**

| Factor | Natural Gas | Softs (Cash Crops) | Livestock |
|--------|------------|-------------------|-----------|
| **Weather** | **YES** — heating/cooling demand | **YES** — crop yields | **YES** — animal health |
| Spoilage | NO — doesn't spoil | YES — perishable | YES — perishable |
| Consumer Preferences | NO — utility demand | Partial | Partial |

**Why Weather is Correct:**
- **Natural Gas:** Demand driven by heating (cold weather) and cooling (hot weather)
- **Softs:** Crop yields heavily dependent on rainfall, temperature, drought
- **Livestock:** Animal health vulnerable to extreme weather; feed costs affected by crop weather

**Why C (Consumer Preferences) is Wrong:**
Natural gas demand is driven by **weather and industrial activity**, NOT consumer preferences. You don't choose whether to heat your home based on preference — you do it because it's cold.

**Why A (Spoilage) is Wrong:**
Natural gas doesn't spoil. It's stored in pipelines and tanks indefinitely. Spoilage affects softs and livestock but NOT all three sectors.

**Key Insight:**
> Weather is the universal factor affecting ALL commodity categories — energy, agriculture, and livestock.

---

## Equity Valuation

### Q9 — Residual Income Model Suitability

**Full Vignette Context:**
Debra McAlister is an equity analyst for a mutual fund company. She is researching Zedco Inc. as a possible addition to the firm's portfolios.

McAlister gathers the following information about Zedco:
- **ROE:** Highest in industry but volatile; McAlister is concerned about using past data to estimate future ROE
- **Debt:** Average level for industry; expected to refinance most older debt within the next year (lower interest rates)
- **Terminal Value:** McAlister is uncertain about her estimate
- **Dividend Payout:** Low payout ratio, expected to be maintained
- **Accounting Accruals:** Most recent financial statement shows abnormally high level

McAlister decides to use both single-stage and multistage **residual income models** to value Zedco.

**Question:**
Which of the following best supports McAlister's choice of valuation models for Zedco?

A. The properties of Zedco's ROE
B. The characteristics of Zedco's debt
C. The estimation of Zedco's terminal value

**Your Answer:** B (The characteristics of Zedco's debt)

**Correct Answer:** C (The estimation of Zedco's terminal value)

**Full Explanation:**

**Why C (Terminal Value Uncertainty) SUPPORTS RI Model:**

The **key strength** of residual income models:
> Terminal value does NOT make up a large portion of total present value

In RI valuation:
- Current book value captures a large portion of total value
- ROE fades toward cost of equity over time
- Terminal value is a smaller component than in DDM or DCF

**If McAlister is UNCERTAIN about terminal value → RI model is APPROPRIATE**

**Why A (ROE Properties) Does NOT Support:**
- ROE is volatile and unpredictable
- McAlister is "not highly confident" in using past ROE
- ROE is a **critical input** to RI models
- Unreliable ROE makes RI **LESS** appropriate, not more

**Why B (Debt Characteristics) Does NOT Support:**
- Zedco is refinancing debt at lower rates
- Current interest expense doesn't reflect true cost of debt
- RI model assumes interest expense accurately reflects cost of debt
- This is a **weakness** for using RI, not a strength

**Residual Income Model — When to Use:**

| Supports RI | Does NOT Support RI |
|-------------|---------------------|
| Uncertain terminal value | Unpredictable ROE |
| No dividends paid | Changing capital structure |
| Negative FCF | Interest expense doesn't reflect cost of debt |
| Focus on book value | High accounting accruals |

---

### Q10 — Single-Stage RI Implied Growth Rate

**Full Vignette Context:**
McAlister calculates the implied growth rate in Zedco's residual income using its current market price. She uses the data in Exhibit 1 for her analysis.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Cost of equity capital | 12% |
| WACC | 10% |
| ROE (3-year average) | 29% |
| Current price per share | $80 |
| Book value per share | $20 |

**Question:**
Using the single-stage residual income model, Zedco's implied growth rate in residual income is closest to:

A. 3.7%
B. 6.3%
C. 7.8%

**Your Answer:** A (3.7%)

**Correct Answer:** B (6.3%)

**Full Explanation:**

**Single-Stage Residual Income Model:**
> V₀ = B₀ + [(ROE − r) / (r − g)] × B₀

Rearranging to solve for g:
> g = r − [(ROE − r) / (V₀/B₀ − 1)]

**Step 1: Identify Variables**
- V₀ = Current price = $80
- B₀ = Book value per share = $20
- ROE = 29%
- r = Cost of equity = 12% (NOT WACC!)

**Step 2: Calculate P/B Ratio**
> V₀/B₀ = $80/$20 = 4

**Step 3: Solve for Implied Growth Rate**
> g = 0.12 − [(0.29 − 0.12) / (4 − 1)]
> g = 0.12 − [0.17 / 3]
> g = 0.12 − 0.0567
> g = **0.0633 = 6.3%**

**Why You Got It Wrong (Answer A = 3.7%):**
You used WACC (10%) instead of cost of equity (12%):

Wrong calculation:
> g = 0.10 − [(0.29 − 0.10) / (4 − 1)]
> g = 0.10 − [0.19 / 3]
> g = 0.10 − 0.0633 = 0.0367 = 3.7%

**Why C is Wrong (7.8%):**
Answer C forgets the "−1" in the denominator:
> g = 0.12 − [(0.29 − 0.12) / 4] = 0.12 − 0.0425 = 0.0775 ≈ 7.8%

**Key Formula:**
> g = r − [(ROE − r) / (P/B − 1)]

**Critical Reminder:**
> For EQUITY valuation → Use COST OF EQUITY (r), not WACC

---

### Q12 — H-Model Valuation

**Full Vignette Context:**
McAlister values Midord Corporation using the H-model with the following inputs:
- Required return on equity (r) = 10%
- Most recent dividend (D₀) = $0.55
- Half-life of high-growth period (H) = 4 years
- Initial short-term dividend growth rate (gS) = 12%
- Long-term dividend growth rate (gL) = 5%

**Question:**
Using the H-model, the estimated value per share of Midord stock is closest to:

A. $12
B. $13
C. $15

**Your Answer:** B ($13)

**Correct Answer:** C ($15)

**Full Explanation:**

**H-Model Formula:**
> V₀ = [D₀(1 + gL) + D₀ × H × (gS − gL)] / (r − gL)

**Step 1: Calculate Each Component**
- D₀(1 + gL) = $0.55 × 1.05 = $0.5775
- D₀ × H × (gS − gL) = $0.55 × 4 × (0.12 − 0.05) = $0.55 × 4 × 0.07 = $0.154

**Step 2: Sum the Numerator**
> Numerator = $0.5775 + $0.154 = $0.7315

**Step 3: Divide by (r − gL)**
> V₀ = $0.7315 / (0.10 − 0.05)
> V₀ = $0.7315 / 0.05
> V₀ = **$14.63 ≈ $15**

**Why You Got It Wrong (Answer B = $13):**
You used **0.5H** (half of 4 = 2) instead of **H** (4):

Wrong calculation:
> V₀ = [$0.55(1.05) + $0.55 × 2 × 0.07] / 0.05
> V₀ = [$0.5775 + $0.077] / 0.05
> V₀ = $0.6545 / 0.05 = $13.09 ≈ $13

**Why A is Wrong ($12):**
Answer A omits H entirely:
> V₀ = [$0.55(1.05) + $0.55 × 0.07] / 0.05 = $0.616 / 0.05 = $12.32

**H-Model Key Points:**
- H = **Half-life** of high-growth period (given directly)
- Do NOT halve H again — it's already the half-life
- The formula uses H as given, not H/2

**Formula Memory Aid:**
> V₀ = [D₀(1 + gL) + D₀H(gS − gL)] / (r − gL)
>
> First term: Gordon growth with long-term g
> Second term: Premium for high growth period (× H, not H/2)

---

## Ethics

### Q14 — Fair Dealing: IPO Allocation Disclosure

**Full Vignette Context:**
Susan Park, CFA, is a portfolio manager at Plum Asset Management. Plum has adopted the Standards as part of its ethics and compliance policy.

Park receives orders from four of her clients to purchase shares in an oversubscribed IPO. She determines that the IPO is suitable for all of these clients. One of the clients, a family member of Park's, has a regular fee-paying account that is managed similarly to those of the other three clients. Park allocates the shares she receives to the four clients on a **pro rata basis** according to order size. **She discloses the firm's IPO allocation policy to only those clients that participate in IPOs.**

**Question:**
With regard to her actions associated with the IPO, did Park violate the Standard relating to fair dealing?

A. No
B. Yes, because she allocated IPO shares to her family member
C. Yes, because she did not appropriately disclose the firm's IPO allocation policy

**Your Answer:** A (No)

**Correct Answer:** C (Yes, because she did not appropriately disclose the firm's IPO allocation policy)

**Full Explanation:**

**Standard III(B) Fair Dealing — Disclosure Requirements:**

Members must disclose trade allocation procedures to **ALL clients and prospective clients**, not just those who participate in specific trades.

**Park's Violation:**
> She disclosed the IPO allocation policy **ONLY to clients that participate in IPOs**

This violates the Standard because:
- ALL clients should know how allocations work
- Prospective clients need this information to make informed decisions
- Selective disclosure is unfair to non-participating clients

**Why A is Wrong:**
There IS a violation — the selective disclosure of allocation policy.

**Why B is Wrong:**
Allocating to family members is **NOT** a violation IF:
- Family account is fee-paying ✓
- Family account is managed similarly to others ✓
- Allocation is pro-rata ✓

Park did all of these correctly. The family allocation was fine.

**Key Rule:**
> Allocation policies must be disclosed to ALL clients and prospects — not just those who participate in a given trade.

---

## Financial Statement Analysis

### Q41 — Equity Method Investment Carrying Value

**Full Vignette Context:**
Karl Reinke, a research analyst, is examining the financial statements of Argon plc, a UK-based company that reports under IFRS.

On 1 January of the current year, Argon purchased a **40% non-controlling interest** in Xenon plc for **GBP 500 million**. The book values of the assets and liabilities were equal to their fair values except for:
- **Inventory:** Undervalued by GBP 5 million
- **Equipment:** Undervalued by GBP 10 million (remaining life: 10 years, straight-line, no residual value)

Xenon uses the **FIFO** inventory valuation method. Reinke estimates that Xenon will report **net income of GBP 60 million** and will **not declare any dividends** for the current year.

**Question:**
The estimated amount of Argon's investment in Xenon at the end of the current year should be:

A. GBP 521.6 million
B. GBP 522.4 million
C. GBP 523.6 million

**Your Answer:** B (GBP 522.4 million)

**Correct Answer:** A (GBP 521.6 million)

**Full Explanation:**

**Equity Method Investment Calculation:**

| Component | Calculation | Amount |
|-----------|-------------|--------|
| Initial purchase price | Given | 500.0 |
| + Share of net income | 60 × 40% | +24.0 |
| − Inventory FV adjustment | 5 × 40% (sold under FIFO) | −2.0 |
| − Equipment depreciation | (10/10 years) × 40% | −0.4 |
| **Ending balance** | | **521.6** |

**Step-by-Step:**

**1. Start with Purchase Price:** GBP 500.0M

**2. Add Share of Net Income:**
> Xenon's net income = GBP 60M
> Argon's share = 60 × 40% = **+GBP 24.0M**

**3. Subtract Inventory FV Adjustment:**
The inventory was **undervalued** by GBP 5M at acquisition.
Under FIFO, this inventory is sold first during the year.
> Adjustment = 5 × 40% = **−GBP 2.0M**

This reduces income because the acquired inventory had a higher fair value than book value. When sold, COGS should have been higher.

**4. Subtract Equipment Depreciation:**
The equipment was **undervalued** by GBP 10M.
> Annual depreciation on excess = 10M / 10 years = GBP 1M
> Argon's share = 1 × 40% = **−GBP 0.4M**

**5. Total:**
> 500.0 + 24.0 − 2.0 − 0.4 = **GBP 521.6M**

**Why You Got It Wrong (Answer B = GBP 522.4M):**
You **ADDED** the equipment depreciation instead of **SUBTRACTING** it:

Wrong: 500.0 + 24.0 − 2.0 **+** 0.4 = 522.4

The equipment was **undervalued** (FV > BV), so we need **additional** depreciation expense, which **reduces** the investment balance.

**Why C is Wrong (GBP 523.6M):**
Answer C omits the inventory adjustment entirely:
> 500.0 + 24.0 − 0.4 = 523.6

**Key Rule for FV Adjustments:**

| Asset Type | FV vs BV | Effect on Investment |
|------------|----------|---------------------|
| Inventory (FIFO) | FV > BV | **Subtract** when sold |
| Equipment | FV > BV | **Subtract** depreciation annually |
| Inventory (LIFO) | FV > BV | No immediate effect |

---

### Q42 — Partial vs Full Goodwill and D/E Ratio

**Full Vignette Context:**
Argon also acquired an **80% controlling interest** in Radon plc in the current year, and has elected to use the **partial goodwill option** for recognizing goodwill when consolidating Radon.

Argon reports under **IFRS**. Argon's primary competitors are **US-based companies that report under US GAAP**.

**Question:**
When consolidating Radon, Argon's D/E ratio at the end of the current year would be:

A. Lower than if it used the method of its primary competitors
B. The same as if it used the method of its primary competitors
C. Higher than if it used the method of its primary competitors

**Your Answer:** B (The same as if it used the method of its primary competitors)

**Correct Answer:** C (Higher than if it used the method of its primary competitors)

**Full Explanation:**

**Goodwill Methods:**

| Method | Standard | Goodwill Recognized | NCI Includes Goodwill? |
|--------|----------|--------------------|-----------------------|
| **Partial** | IFRS (optional) | Acquirer's share only | NO |
| **Full** | US GAAP (required) | 100% of entity | YES |

**Impact on Balance Sheet:**

| Item | Partial Goodwill | Full Goodwill |
|------|------------------|---------------|
| Goodwill (Asset) | Lower | Higher |
| NCI (Equity) | Lower | Higher |
| Total Equity | **Lower** | **Higher** |
| Total Debt | Same | Same |

**D/E Ratio Analysis:**
> D/E = Total Debt / Total Equity

- Argon (IFRS, partial): Lower equity → **Higher D/E**
- Competitors (US GAAP, full): Higher equity → **Lower D/E**

**Why C is Correct:**
Partial goodwill results in lower NCI (minority interest), which means lower total equity, which means **higher D/E ratio**.

**Why You Got It Wrong:**
You may have thought goodwill method only affects assets, not equity. But the NCI component of equity is directly affected.

**Key Insight:**
> Partial goodwill → Lower NCI → Lower equity → Higher D/E
> Full goodwill → Higher NCI → Higher equity → Lower D/E

---

## Practice Questions (Answered Correctly)

### Q1 — REIT NAVPS Calculation (Correct Answer: B, $74)

**Full Vignette Context:**
Hansen reviews the client's investment in Maipo Valley Group, a retail REIT located in the US.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Last-12-month pro forma cash NOI | $240 million |
| Next-12-month growth in NOI | $36 million |
| Cash and equivalents | $10 million |
| Accounts receivable | $25 million |
| Prepaid/Other assets | $15 million |
| Land held for future development | $800 million |
| Total debt | $600 million |
| Market capitalization | $2,250 million |
| Shares outstanding | 50 million |
| Capitalization rate | 8.0% |

**NAVPS Calculation:**

**Step 1: Calculate Next-12-Month NOI**
> Next NOI = $240M + $36M = **$276M**

**Step 2: Capitalize Operating Real Estate**
> Operating RE Value = $276M / 8% = **$3,450M**

**Step 3: Add Other Assets**
> Cash + AR + Prepaid = $10M + $25M + $15M = $50M
> Land = $800M
> Total Other Assets = **$850M**

**Step 4: Calculate Gross Asset Value**
> GAV = $3,450M + $850M = **$4,300M**

**Step 5: Subtract Debt**
> NAV = $4,300M − $600M = **$3,700M**

**Step 6: Calculate NAVPS**
> NAVPS = $3,700M / 50M shares = **$74**

**Key Formula:**
> NAVPS = (Capitalized NOI + Other Assets − Debt) / Shares

**Common Errors:**
- Using cost of equity instead of cap rate → $63
- Forgetting to subtract debt → $86

---

### Q18 — Justified P/B Ratio (Correct Answer: B, 1.08)

**Full Vignette Context:**
Georgiou determines Rummidge's justified P/B ratio based on forecasts using the Gordon growth model.

**Given:**
- Average ROE (past 7 years) = 9.5% (used as forecast)
- Required return on equity (r) = 9.0%
- Dividend payout ratio = 75%

**Calculation:**

**Step 1: Calculate Retention Rate**
> b = 1 − Payout = 1 − 0.75 = **25%**

**Step 2: Calculate Sustainable Growth Rate**
> g = b × ROE = 0.25 × 9.5% = **2.375%**

**Step 3: Apply Justified P/B Formula**
> Justified P/B = (ROE − g) / (r − g)
> Justified P/B = (9.5% − 2.375%) / (9.0% − 2.375%)
> Justified P/B = 7.125% / 6.625%
> Justified P/B = **1.08**

**Key Formula:**
> Justified P/B = (ROE − g) / (r − g)
> where g = (1 − Payout) × ROE

**Common Error:**
Using payout ratio instead of retention rate:
> Wrong g = 0.75 × 9.5% = 7.125%
> Wrong P/B = 1.27

---

### Q23 — ETF Holding Period Cost (Correct Answer: A, zTrak is lower)

**Full Vignette Context:**
Boyer compares the characteristics of two smart beta ETFs:

**Exhibit 2:**
| Metric | zTrak | xShares |
|--------|-------|---------|
| Commission (one-way) | 5 bps | 10 bps |
| Bid–ask spread | 15 bps | 10 bps |
| Annual management fee | 20 bps | 15 bps |

**3-Month Holding Period Cost Formula:**
> Cost = (2 × Commission) + Spread + (Management Fee × 3/12)

**zTrak:**
> = (2 × 5) + 15 + (20 × 0.25)
> = 10 + 15 + 5
> = **30 bps**

**xShares:**
> = (2 × 10) + 10 + (15 × 0.25)
> = 20 + 10 + 3.75
> = **33.75 bps**

**zTrak has LOWER 3-month cost (30 < 33.75)**

**Key Points:**
- Commission: Multiply by 2 (round trip)
- Spread: Count once (pay on buy at ask, sell at bid)
- Fee: Pro-rate for holding period

---

### Q31 — Out-of-Sample Forecasting Performance (Correct Answer: C, AR(2) is better)

**Full Vignette Context:**
Hardie uses regression statistics to compare the forecasting performance of two AR models.

**Exhibit 1:**
| Metric | AR(1) | AR(2) |
|--------|-------|-------|
| R-squared | 0.907 | 0.905 |
| Standard error | 0.027 | 0.027 |
| **RMSE** | **0.032** | **0.030** |

**Which Model Has Better Out-of-Sample Performance?**

Use **Root Mean Squared Error (RMSE)** for out-of-sample comparison.

> AR(2) RMSE (0.030) < AR(1) RMSE (0.032)
> **AR(2) is better**

**Key Points:**
- **R-squared:** In-sample fit (higher = better IN-SAMPLE)
- **Standard error:** In-sample (lower = better IN-SAMPLE)
- **RMSE:** OUT-OF-SAMPLE (lower = better forecasting)

For forecasting, always use RMSE!

---

### Q33 — Growth Accounting / TFP Calculation (Correct Answer: A, 1.1%)

**Full Vignette Context:**
Nod calculates the contribution of total factor productivity to economic growth for Country A.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Share of capital in GDP (α) | 45.0% |
| Growth rate of capital (ΔK/K) | 4.5% |
| Growth rate of labor (ΔL/L) | 6.5% |
| Growth rate of output (ΔY/Y) | 6.7% |

**Growth Accounting Equation:**
> ΔY/Y = ΔA/A + α(ΔK/K) + (1 − α)(ΔL/L)

**Solve for TFP Growth (ΔA/A):**
> ΔA/A = ΔY/Y − α(ΔK/K) − (1 − α)(ΔL/L)
> ΔA/A = 6.7% − (0.45 × 4.5%) − (0.55 × 6.5%)
> ΔA/A = 6.7% − 2.025% − 3.575%
> ΔA/A = **1.1%**

**Key Formula:**
> TFP Growth = Output Growth − Weighted Input Growth

---

### Q35 — Endogenous Growth Theory (Correct Answer: C)

**Full Vignette Context:**
Over the next two years, Nod expects an increase in the saving rate in Country A, resulting in increased investment in research and development targeting more efficient production methods. He concludes that this will lead to a **permanently higher per capita GDP growth rate** in the future, with **no diminishing returns to capital**.

**Question:**
Nod's conclusion is most consistent with which growth theory?

**Answer: C (Endogenous Growth Theory)**

**Why Endogenous Growth:**
- **No diminishing returns to capital** ✓
- **Permanent** increase in growth rate from R&D ✓
- Higher saving rate → permanently higher growth ✓

**Why NOT Neoclassical:**
Neoclassical assumes diminishing returns to capital. Capital deepening can't sustain permanent growth once steady state is reached.

**Why NOT Classical:**
Classical predicts technology leads to larger population, not higher per capita income.

**Growth Theories Summary:**

| Theory | Diminishing Returns? | R&D Effect on Growth |
|--------|---------------------|---------------------|
| Classical | Yes | Temporary |
| Neoclassical | Yes | Temporary |
| **Endogenous** | **No** | **Permanent** |

---

## Summary by Topic

| Topic | Questions Missed | Notes |
|-------|------------------|-------|
| Equity Valuation | 3 | H-model formula, RI implied growth, model selection |
| FSA | 2 | Equity method adjustments, partial vs full goodwill |
| Alternatives | 1 | Commodity factor influences |
| Ethics | 1 | IPO allocation disclosure |

**Total Missed: 8 (but +1 for Q7 typo = 7 actual mistakes)**

---

## Key Formulas to Memorize

**REIT NAVPS:**
> NAVPS = (NOI/Cap Rate + Other Assets − Debt) / Shares

**H-Model:**
> V₀ = [D₀(1 + gL) + D₀H(gS − gL)] / (r − gL)
> Note: Use H directly, NOT H/2!

**Justified P/B:**
> P/B = (ROE − g) / (r − g)
> where g = (1 − Payout) × ROE

**Single-Stage RI Implied Growth:**
> g = r − [(ROE − r) / (P/B − 1)]

**Equity Method — Year-End Balance:**
> = Purchase Price + Share of NI − FV Adjustments

**ETF Holding Cost:**
> = (2 × Commission) + Spread + (Fee × Period/12)

**Growth Accounting (TFP):**
> TFP = Output Growth − α(Capital Growth) − (1−α)(Labor Growth)

---

## Key Concepts to Remember

**Weather affects ALL commodity sectors:**
- Energy (heating/cooling demand)
- Agriculture (crop yields)
- Livestock (animal health)

**Residual Income Model — Use When:**
- Terminal value is uncertain
- NOT when ROE is volatile or debt is being refinanced

**H-Model:**
- H is the half-life (already halved)
- Don't divide H by 2 again

**Fair Dealing:**
- Disclose allocation policies to ALL clients
- Family accounts are OK if fee-paying and treated equally

**Partial vs Full Goodwill:**
- Partial → Lower equity → Higher D/E
- Full → Higher equity → Lower D/E

**You're at 82%. That's passing territory. Keep this energy.**
