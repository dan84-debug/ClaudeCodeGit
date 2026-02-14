# CFA Level II Mock Exam 6 — Incorrect Questions Review

**Score: 34/44 (77%)**
**Date: February 14, 2026**

---

## Table of Contents

1. [Equity Valuation](#equity-valuation)
2. [Fixed Income / Credit](#fixed-income--credit)
3. [Financial Statement Analysis](#financial-statement-analysis)
4. [Portfolio Management](#portfolio-management)
5. [Derivatives](#derivatives)
6. [Ethics](#ethics)

---

## Equity Valuation

### Q2 — Multistage Residual Income Terminal Value

**Full Vignette Context:**
Victoria Lazslo is an analyst valuing three firms held in client portfolios.

Firm A owns a chain of regional dental offices and has no debt. Lazslo initially selects a single-stage residual income model to estimate the intrinsic value of Firm A's stock and compiles the data in Exhibit 1.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Constant long-term growth rate | 9.6% |
| Constant long-term ROE | 16.0% |
| Market price per share | $220.00 |
| Book value per share | $166.00 |
| Cost of equity | 12.5% |

Lazslo also considers the possibility that after Year 10 Firm A's ROE will exhibit mean reversion. She uses a multistage residual income model to value Firm A's stock and estimates residual income in Year 10 to be $8.38 per share, with a persistence factor of 0.7.

**Question:**
Based on Lazslo's multistage residual income model, the present value of the estimated terminal value of Firm A's stock is closest to:

A. $6.07
B. $6.83
C. $9.68

**Your Answer:** A ($6.07)

**Correct Answer:** B ($6.83)

**Full Explanation:**

The terminal value at the end of the forecast horizon (T) is estimated as the terminal-year residual income discounted in perpetuity. Based on the residual income model in which residual income fades over time:

**Formula:**
> PV of Terminal Value = RI_T / [(1 + r - ω) × (1 + r)^(T-1)]

Where:
- RI_T = Residual income in Year T = $8.38
- r = Required return (cost of equity) = 12.5% = 0.125
- ω = Persistence factor = 0.7
- T = Terminal year = 10

**Calculation:**
> PV of Terminal Value = $8.38 / [(1 + 0.125 - 0.7) × (1.125)^(10-1)]
> PV of Terminal Value = $8.38 / [(0.425) × (1.125)^9]
> PV of Terminal Value = $8.38 / [0.425 × 2.8760]
> PV of Terminal Value = $8.38 / 1.2223
> PV of Terminal Value = **$6.86 ≈ $6.83**

**Why You Got It Wrong:**
You discounted for 10 years instead of 9 years (T-1). The terminal value is calculated AT the end of Year 10, so we discount back 9 years to get to today (Year 1).

Your calculation:
> Wrong: $8.38 / [(0.425) × (1.125)^10] = $8.38 / 1.38 = $6.07

**Key Concept:**
When using the persistence factor model for terminal value, discount for (T-1) periods, not T periods. The formula capitalizes residual income at end of Year T, then brings it back to present.

**Why C is Wrong:**
Answer C ($9.68) does not include the required return in the capitalization rate:
> Wrong: $8.38 / [(1 - 0.7) × (1.125)^9] = $8.38 / [0.3 × 2.876] = $9.68

---

### Q3 — Residual Income with Other Comprehensive Income

**Full Vignette Context:**
Victoria Lazslo is an analyst valuing three firms held in client portfolios.

Firm B is a distributor of building supplies. Firm B's year-end (Year 0) book value of equity is $111 per share and its cost of equity is 12%. Lazslo forecasts financial data for the next two years in Exhibit 2.

**Exhibit 2:**
| Item | Year 1 | Year 2 |
|------|--------|--------|
| Net income | $26.25 | $31.56 |
| Dividends | $3.80 | $4.57 |
| Other comprehensive income | $0.00 | $2.75 |

**Question:**
Firm B's per-share residual income for Year 2 is closest to:

A. $14.73
B. $15.55
C. $18.30

**Your Answer:** B ($15.55)

**Correct Answer:** C ($18.30)

**Full Explanation:**

**Residual Income Formula:**
> RI = Comprehensive Income – (Cost of Equity × Beginning Book Value)

The residual income model assumes **clean surplus accounting**, meaning all changes to book value flow through the income statement. However, some items (Other Comprehensive Income) bypass the income statement but still affect book value. Therefore, we must **add OCI to net income** when calculating residual income.

**Step 1: Calculate Book Value at End of Year 1 (Beginning of Year 2)**
> BV_1 = BV_0 + Net Income_1 – Dividends_1 + OCI_1
> BV_1 = $111.00 + $26.25 – $3.80 + $0.00
> BV_1 = **$133.45**

**Step 2: Calculate Comprehensive Income for Year 2**
> Comprehensive Income_2 = Net Income_2 + OCI_2
> Comprehensive Income_2 = $31.56 + $2.75 = **$34.31**

**Step 3: Calculate Residual Income for Year 2**
> RI_2 = Comprehensive Income_2 – (r × BV_1)
> RI_2 = $34.31 – (12% × $133.45)
> RI_2 = $34.31 – $16.01
> RI_2 = **$18.30**

**Why You Got It Wrong:**
You did not adjust net income for other comprehensive income:
> Wrong: RI_2 = $31.56 – (12% × $133.45) = $31.56 – $16.01 = $15.55

**Why A is Wrong:**
Answer A ($14.73) uses END-of-Year 2 book value instead of BEGINNING-of-Year 2:
> BV_2 = $133.45 + $31.56 – $4.57 + $2.75 = $163.19
> Wrong: RI_2 = $34.31 – (12% × $163.19) = $34.31 – $19.58 = $14.73

**Key Concept:**
- Use **BEGINNING** of period book value for equity charge
- Include **OCI** in income for clean surplus compliance
- Residual Income = (NI + OCI) – (r × Beginning BV)

---

### Q31 — Capital Structure Change and FCFF

**Full Vignette Context:**
Clara Connor, an advisor for Newbridge Investments, is valuing three publicly traded firms: Lismore Corp., Omega Pipeline, and Slane Industries.

Omega Pipeline is a US-based company operating a network of oil and gas pipelines. Connor is concerned about increasing awareness of the environmental and social impacts these pipelines have on their surrounding communities. She believes these concerns are not fully reflected in Omega's current share price and that an ESG equity risk premium should be incorporated in the discount rate. Using a two-stage model and the assumptions provided in Exhibit 2, Connor determines the company value of Omega.

**Exhibit 2:**
| Item | Value |
|------|-------|
| FCFF for both Year 1 and Year 2 | $1,850 million |
| Expected long-term FCFF annual growth rate starting in Year 3 | 3.0% |
| Pretax cost of Omega's debt | 6.0% |
| Debt-to-assets ratio | 40% |
| Risk-free rate | 3.5% |
| Market equity risk premium | 5.5% |
| ESG equity risk premium | 0.9% |
| Omega's equity beta | 1.4 |
| Corporate tax rate | 25% |

Soon after Connor completes her valuation of Omega, the company announces it will issue debt to buy back equity during the next year (Year 1). Connor considers how this capital structure change would impact her FCFF forecasts.

**Question:**
After incorporating Omega's capital structure change, Connor's FCFF forecasts would most likely be:

A. Lower
B. Unchanged
C. Higher

**Your Answer:** A (Lower)

**Correct Answer:** B (Unchanged)

**Full Explanation:**

**Key Concept: FCFF is Independent of Capital Structure**

FCFF (Free Cash Flow to the Firm) represents the cash flow available to ALL providers of capital (both debt and equity holders) BEFORE any financing decisions are made.

**FCFF Definition:**
> FCFF = EBIT(1 – Tax rate) + Depreciation – Capital Expenditures – Change in Working Capital

Or equivalently:
> FCFF = CFO + Interest(1 – Tax rate) – Fixed Capital Investment

**Why Capital Structure Changes Don't Affect FCFF:**

1. **FCFF is calculated BEFORE payments to capital providers** — Interest payments are added back in the FCFF calculation
2. **Debt issuance is a financing activity** — It affects how FCFF is distributed, not the FCFF itself
3. **Share repurchases are financing activities** — They don't change operating cash flows

**What DOES Change with Higher Leverage:**

| Item | Effect |
|------|--------|
| FCFF | **Unchanged** |
| FCFE | Changes — higher in year of debt issuance, lower thereafter due to interest |
| WACC | Changes — different weighting of debt/equity |
| Firm Value (if WACC changes) | May change |

**Why You Got It Wrong:**
You may have confused FCFF with FCFE (Free Cash Flow to Equity). FCFE is affected by capital structure:
- Year of debt issuance: FCFE increases by amount borrowed
- Subsequent years: FCFE decreases by after-tax interest expense

But FCFF remains constant because it measures cash flows to the entire firm before financing decisions.

**Memory Aid:**
> "FCFF is what the business generates; capital structure is how you divide it up."

---

## Fixed Income / Credit

### Q9 — Bond Default Return Calculation

**Full Vignette Context:**
Nathan Moffet is a fixed-income portfolio manager analyzing the credit risk within a corporate bond portfolio.

Moffet purchases a senior unsecured bond issued by Company A at a price of $105.35. The bond has the following characteristics:
- An 8% annual-pay coupon, a face value of $100, and no embedded options
- Three years remain to maturity and a coupon has just been paid

Moffet collects information on the bond in Exhibit 1, which provides end-of-period data. He uses the information to consider a base case scenario where the bond defaults at the end of Year 3.

**Exhibit 1:**
| Year | Exposure | Recovery | Loss Given Default | Probability of Default | Expected Loss | Discount Factor | PV of Expected Loss |
|------|----------|----------|-------------------|----------------------|---------------|-----------------|---------------------|
| 1 | $117.57 | $47.03 | $70.54 | 5.00% | $3.53 | 0.9709 | $3.43 |
| 2 | $112.85 | $45.14 | $67.71 | 4.75% | $3.22 | 0.9426 | $3.04 |
| 3 | $108.00 | $43.20 | $64.80 | 4.51% | $2.92 | 0.9151 | $2.67 |
| Sum | --- | --- | --- | 14.26% | $9.67 | --- | $9.14 |

**Question:**
Under his base case scenario, the annualized return on Moffet's Company A bond investment would be closest to:

A. –19.57%
B. –15.45%
C. –9.29%

**Your Answer:** B (–15.45%)

**Correct Answer:** A (–19.57%)

**Full Explanation:**

If default occurs at the end of Year 3, the bondholder receives:
- **Year 1:** $8 coupon payment
- **Year 2:** $8 coupon payment
- **Year 3:** Recovery value of $43.20 (from Exhibit 1)

**Important:** The Year 3 recovery value of $43.20 ALREADY includes any accrued coupon. The exposure of $108 represents principal + accrued coupon, and the recovery is 40% of that exposure. Do NOT add an additional coupon in Year 3.

**IRR Calculation:**
Solve for IRR in:
> $105.35 = $8/(1 + IRR) + $8/(1 + IRR)² + $43.20/(1 + IRR)³

Using financial calculator or iteration:
> **IRR = –19.57%**

**Why You Got It Wrong:**
You added an extra $8 coupon payment in Year 3:
> Wrong: $105.35 = $8/(1 + IRR) + $8/(1 + IRR)² + ($43.20 + $8)/(1 + IRR)³
> Wrong IRR = –15.45%

**Why C is Wrong:**
Answer C uses the Loss Given Default ($64.80) instead of the Recovery value ($43.20):
> Wrong: $105.35 = $8/(1 + IRR) + $8/(1 + IRR)² + $64.80/(1 + IRR)³
> Wrong IRR = –9.29%

**Key Concept:**
- **Exposure** = Principal + Accrued Interest (what creditors are owed)
- **Recovery** = Exposure × Recovery Rate (what creditors actually receive)
- **Recovery already includes any accrued interest** — don't double-count coupons

---

### Q11 — CDS Settlement Methods

**Full Vignette Context:**
Nathan Moffet is a fixed-income portfolio manager analyzing the credit risk within a corporate bond portfolio.

Moffet owns $10 million of Bond 1, a 5-year senior unsecured bond issued by Company C. He recently bought credit protection on Company C using a $10 million notional value CDS. The CDS can be settled by physical or cash settlement and its reference obligation is Bond 1. Company C recently filed for bankruptcy and Moffet gathers the information in Exhibit 2 on its outstanding debt obligations.

**Exhibit 2:**
| Bond | Seniority | Tenor | Par Value | Current Price |
|------|-----------|-------|-----------|---------------|
| Bond 1 | Senior unsecured | 5 years | $100 | $40 |
| Bond 2 | Senior unsecured | 4 years | $100 | $35 |

**Question:**
Would the two settlement methods for the CDS on Company C result in the same total proceeds for Moffet?

A. Yes
B. No, cash settlement would result in higher total proceeds
C. No, physical settlement would result in higher total proceeds

**Your Answer:** A (Yes)

**Correct Answer:** B (No, cash settlement would result in higher total proceeds)

**Full Explanation:**

**Step 1: Identify the Cheapest-to-Deliver (CTD) Bond**

The CDS payoff is based on the **cheapest-to-deliver** bond, which is the bond with the same seniority trading at the LOWEST price (highest loss):
- Bond 1: 40% of par
- Bond 2: 35% of par ← **CTD** (lower price)

**Step 2: Calculate Proceeds Under Each Settlement Method**

**Cash Settlement:**
- CDS Payoff = Notional × (1 – Recovery Rate of CTD)
- CDS Payoff = $10M × (1 – 35%) = $10M × 65% = **$6.5 million**
- Sell Bond 1 at market: $10M × 40% = **$4.0 million**
- **Total Cash Settlement Proceeds = $6.5M + $4.0M = $10.5 million**

**Physical Settlement:**
- Moffet surrenders Bond 1 to CDS seller
- Receives notional amount in cash = **$10.0 million**

**Step 3: Compare**
| Settlement Method | Total Proceeds |
|-------------------|----------------|
| Cash Settlement | $10.5 million |
| Physical Settlement | $10.0 million |

**Cash settlement is $0.5 million better!**

**Why You Got It Wrong:**
You assumed both methods produce the same result. They only produce the same result when the bond held equals the CTD bond. Here, Moffet holds Bond 1 (40% recovery) but the CTD is Bond 2 (35% recovery).

**Key Concept:**
- **Physical settlement:** Deliver any eligible bond, receive par → Proceeds = Notional
- **Cash settlement:** Receive (Notional × LGD of CTD), keep your bond → May be better if you hold a higher-priced bond

The protection buyer benefits from cash settlement when they own a bond trading above the CTD price.

---

## Financial Statement Analysis

### Q18 — Current Rate Method Translation (Requested for Inclusion)

**Full Vignette Context:**
Herbert Erikson is examining the multinational operations of Obsidian AG, a eurozone company that reports under IFRS.

On 1 January of the most recent year, Obsidian formed two new subsidiaries: Ametrine, a UK-based company, and Citrine, a Poland-based company. Ametrine was consolidated using the current rate method, while Citrine was consolidated using the temporal method. The GBP and the Polish zloty (PLN) steadily strengthened against the EUR throughout the year. All of the combined PP&E, and a major portion of the inventory that was sold during the year, were acquired when the companies were formed. Both companies were profitable and had positive shareholders' equity in their first year of operations.

**Question:**
On 31 December of the most recent year, after translating Ametrine, Obsidian should have reported a:

A. Foreign exchange loss on its consolidated income statement
B. Positive translation adjustment on its consolidated balance sheet
C. Negative translation adjustment on its consolidated balance sheet

**Correct Answer:** B (Positive translation adjustment on its consolidated balance sheet)

**Full Explanation:**

**Current Rate Method — Key Points:**
- Used when subsidiary's functional currency is its LOCAL currency
- Translation adjustment goes to **OCI/Equity** (NOT income statement)
- Creates **Net Asset Exposure** (Assets > Liabilities = net long position in foreign currency)

**Balance Sheet Exposure Under Current Rate Method:**
> Net Asset Exposure = Total Assets (translated at current rate) − Total Liabilities (translated at current rate)

Since Ametrine has positive shareholders' equity:
> Assets > Liabilities → Net Asset Exposure

**Effect of Foreign Currency Strengthening:**

| Scenario | Effect on Translation Adjustment |
|----------|----------------------------------|
| Foreign currency strengthens + Net asset exposure | **Positive** (gain in equity) |
| Foreign currency strengthens + Net liability exposure | Negative (loss in equity) |
| Foreign currency weakens + Net asset exposure | Negative (loss in equity) |
| Foreign currency weakens + Net liability exposure | Positive (gain in equity) |

**This Case:**
- GBP strengthened against EUR
- Ametrine has positive equity (net asset exposure)
- Result: **Positive translation adjustment** in stockholders' equity

**Why A is Wrong:**
Under the current rate method, translation gains/losses go to OCI on the balance sheet, NOT to the income statement. (Temporal method reports gains/losses in the income statement.)

**Why C is Wrong:**
With a net asset exposure and strengthening foreign currency, the adjustment is positive, not negative.

**Key Distinction:**
| Method | Where Translation Gain/Loss Reported |
|--------|-------------------------------------|
| Current Rate | Balance sheet (OCI/Equity) |
| Temporal | Income statement |

---

### Q19 — Temporal Method Gross Profit Margin (Requested for Inclusion)

**Full Vignette Context:**
Herbert Erikson is examining the multinational operations of Obsidian AG, a eurozone company that reports under IFRS.

On 1 January of the most recent year, Obsidian formed two new subsidiaries: Ametrine, a UK-based company, and Citrine, a Poland-based company. Ametrine was consolidated using the current rate method, while Citrine was consolidated using the temporal method. The GBP and the Polish zloty (PLN) steadily strengthened against the EUR throughout the year. All of the combined PP&E, and a major portion of the inventory that was sold during the year, were acquired when the companies were formed. Both companies were profitable and had positive shareholders' equity in their first year of operations.

**Question:**
Citrine's gross profit margin on 31 December of the most recent year was:

A. Lower after translation
B. The same after translation
C. Higher after translation

**Correct Answer:** C (Higher after translation)

**Full Explanation:**

**Temporal Method Translation Rules:**

| Income Statement Item | Exchange Rate Used |
|----------------------|-------------------|
| Revenue | Average rate |
| COGS (from inventory) | **Historical rate** |
| Depreciation (from PP&E) | Historical rate |
| Other expenses | Average rate |

**Key Insight:** COGS is translated at the HISTORICAL rate (when inventory was acquired), while revenue is translated at the AVERAGE rate.

**Effect When Foreign Currency Strengthens:**

When the PLN strengthens steadily throughout the year:
- Historical rate (at formation, Jan 1) < Average rate < Current rate (Dec 31)
- Revenue translated at higher average rate = Higher EUR revenue
- COGS translated at lower historical rate = Lower EUR COGS

**Gross Profit Margin Calculation:**
> GPM = (Revenue − COGS) / Revenue

| In Local Currency (PLN) | After Translation (EUR) |
|------------------------|------------------------|
| Revenue at average rate | Higher relative value |
| COGS at historical rate | Lower relative value |
| Gross Profit | Higher |
| GPM | **Higher** |

**Example (Illustrative):**
- PLN Revenue: 1,000 PLN
- PLN COGS: 600 PLN
- PLN GPM: (1,000 - 600)/1,000 = 40%

If Historical rate = 0.20 EUR/PLN, Average rate = 0.25 EUR/PLN:
- EUR Revenue: 1,000 × 0.25 = 250 EUR
- EUR COGS: 600 × 0.20 = 120 EUR
- EUR GPM: (250 - 120)/250 = 52% > 40%

**Why A and B are Wrong:**
- With strengthening currency under temporal method, COGS is translated at the lower historical rate
- This makes COGS relatively smaller compared to revenue
- Result: Higher gross profit margin after translation

**Key Concept:**
Under temporal method with strengthening foreign currency, GPM increases because COGS (historical rate) doesn't increase as much as revenue (average rate).

---

## Portfolio Management

### Q22 — Maximum Sharpe Ratio with Active Portfolio (Requested for Inclusion)

**Full Vignette Context:**
Juan Bolton is a fixed-income analyst at an investment firm. He is analyzing the firm's actively managed funds and examining macroeconomic data.

Bolton analyzes two actively managed funds, Fund X and Fund Y. He compiles data regarding the performance of the funds and their benchmark in Exhibit 1. Fund X's expected active risk is 1.3% and Fund Y's ex ante information ratio is 0.27. The risk-free rate is 2.3%.

**Exhibit 1:**
| Metric | Fund X | Fund Y | Benchmark |
|--------|--------|--------|-----------|
| Expected annual return | 6.7% | 6.5% | 6.2% |
| Standard deviation of returns | 8.9% | 8.6% | 8.3% |

**Question:**
The maximum Sharpe ratio that can be achieved by combining Fund Y and the benchmark portfolio is closest to:

A. 0.29
B. 0.54
C. 0.74

**Correct Answer:** B (0.54)

**Full Explanation:**

**Key Relationship:**
An important property in active management theory is that the squared Sharpe ratio of an optimal combination of an actively managed portfolio and the benchmark equals:

> SR²_Combined = SR²_Benchmark + IR²

Therefore:
> SR_Combined = √(SR²_Benchmark + IR²)

**Step 1: Calculate Benchmark Sharpe Ratio**
> SR_B = (E(R_B) − R_f) / σ_B
> SR_B = (6.2% − 2.3%) / 8.3%
> SR_B = 3.9% / 8.3%
> SR_B = **0.4699**

**Step 2: Get Fund Y's Information Ratio**
Given: IR_Y = 0.27

**Step 3: Calculate Maximum Combined Sharpe Ratio**
> SR_C = √(SR²_B + IR²_Y)
> SR_C = √(0.4699² + 0.27²)
> SR_C = √(0.2208 + 0.0729)
> SR_C = √0.2937
> SR_C = **0.542 ≈ 0.54**

**Why A is Wrong:**
Answer A (0.29) fails to take the square root:
> Wrong: SR²_B + IR²_Y = 0.2208 + 0.0729 = 0.2937 ≈ 0.29

**Why C is Wrong:**
Answer C (0.74) simply adds the Sharpe ratio and IR linearly:
> Wrong: SR_B + IR_Y = 0.4699 + 0.27 = 0.74

**Key Formula:**
> Maximum SR = √(SR²_Benchmark + IR²_Active)

This formula shows that adding an actively managed portfolio to a benchmark portfolio can improve the overall Sharpe ratio, with the improvement depending on the information ratio of the active manager.

---

## Derivatives

### Q33 — Two-Period Binomial Option Valuation

**Full Vignette Context:**
Qiu Tian is a hedge fund manager evaluating options on several equities. She begins with Tara Corp., a non-dividend-paying stock priced in Indian rupees (INR). Tian is bullish on Tara stock and values European-style Tara call options using a two-period binomial model and information from Exhibit 1.

**Exhibit 1:**
| Parameter | Value |
|-----------|-------|
| Current stock price | INR 10 |
| Time to option expiration | 2 years |
| Risk-free rate (annual) | 5.0% |
| Option strike price | INR 12 |
| Up factor per period | 1.50 |
| Down factor per period | 0.67 |

**Stock Price Tree:**
```
                    S++ = 10 × 1.50 × 1.50 = INR 22.50
                   /
        S+ = INR 15.00
       /           \
S₀ = INR 10         S+- = S-+ = 10 × 1.50 × 0.67 = INR 10.05
       \           /
        S- = INR 6.70
                   \
                    S-- = 10 × 0.67 × 0.67 = INR 4.49
```

**Question:**
Using the two-period binomial option pricing model, the no-arbitrage value of the Tara call option is closest to:

A. INR 1.31
B. INR 2.00
C. INR 2.80

**Your Answer:** A (INR 1.31)

**Correct Answer:** B (INR 2.00)

**Full Explanation:**

**Step 1: Calculate Risk-Neutral Probability (π)**
> π = (1 + r − d) / (u − d)
> π = (1.05 − 0.67) / (1.50 − 0.67)
> π = 0.38 / 0.83
> π = **0.4578**
> (1 − π) = 0.5422

**Step 2: Build the Stock Price Tree**
| Node | Calculation | Stock Price |
|------|-------------|-------------|
| S₀ | Given | INR 10.00 |
| S+ | 10 × 1.50 | INR 15.00 |
| S- | 10 × 0.67 | INR 6.70 |
| S++ | 10 × 1.50² | INR 22.50 |
| S+- = S-+ | 10 × 1.50 × 0.67 | INR 10.05 |
| S-- | 10 × 0.67² | INR 4.49 |

**Step 3: Calculate Call Option Values at T=2 (Expiration)**
> c = max(0, S − X) where X = 12

| Node | Stock Price | Call Value |
|------|-------------|------------|
| c++ | INR 22.50 | max(0, 22.50 − 12) = **INR 10.50** |
| c+- | INR 10.05 | max(0, 10.05 − 12) = **INR 0** |
| c-- | INR 4.49 | max(0, 4.49 − 12) = **INR 0** |

**Step 4: Calculate Call Option Values at T=1**

At node c+ (stock at 15):
> c+ = [π × c++ + (1−π) × c+-] / (1 + r)
> c+ = [0.4578 × 10.50 + 0.5422 × 0] / 1.05
> c+ = 4.807 / 1.05
> c+ = **INR 4.578**

At node c- (stock at 6.70):
> c- = [π × c+- + (1−π) × c--] / (1 + r)
> c- = [0.4578 × 0 + 0.5422 × 0] / 1.05
> c- = **INR 0**

**Step 5: Calculate Call Option Value at T=0**
> c₀ = [π × c+ + (1−π) × c-] / (1 + r)
> c₀ = [0.4578 × 4.578 + 0.5422 × 0] / 1.05
> c₀ = 2.096 / 1.05
> c₀ = **INR 2.00**

**Alternative One-Step Formula:**
> c₀ = [π²×c++ + 2π(1−π)×c+- + (1−π)²×c--] / (1+r)²
> c₀ = [0.4578² × 10.50 + 2 × 0.4578 × 0.5422 × 0 + 0.5422² × 0] / 1.05²
> c₀ = [0.2096 × 10.50 + 0 + 0] / 1.1025
> c₀ = 2.201 / 1.1025
> c₀ = **INR 2.00**

**Why You Got It Wrong:**
You used a single-period model instead of a two-period model:
> Wrong (1-period): c+ = max(0, 15−12) = 3, c- = max(0, 6.70−12) = 0
> Wrong: c₀ = [0.4578 × 3 + 0.5422 × 0] / 1.05 = 1.31

**Why C is Wrong:**
Answer C swaps u and d in the probability formula:
> Wrong π = (1.05 − 1.50)/(0.67 − 1.50) = 0.5422
> This gives c₀ = INR 2.80

**Key Concepts:**
1. Use two-period model: calculate values at T=2, work backwards to T=1, then to T=0
2. Risk-neutral probability: π = (1 + r − d)/(u − d)
3. Each step: discount expected value at risk-free rate

---

## Ethics

### Q40 — Fair Dealing: Family Account Allocation

**Full Vignette Context:**
Michael Lee is a portfolio manager at Skylark Advisory, a small financial advisory firm serving individual clients. He holds degrees in law and finance and has recently passed Level I of the CFA exam. Skylark has adopted the Standards.

Like most employees, Lee maintains his retirement portfolio with Skylark. His adult sister also has a fee-paying account with Skylark which is managed in the same manner as other clients. Recently, Prexel Funds offered a limited number of shares in the previously closed Prexel Commodity Strategies Fund (PCSF) to Skylark. The demand for PCSF shares from Skylark's suitable clients far exceeded the limited supply available. To avoid any conflict of interest, Lee did not allocate any shares to himself, or his sister.

**Question:**
Did Lee violate the Standard relating to fair dealing in his allocation of PCSF shares?

A. No
B. Yes, because he should have allocated shares to his sister's account
C. Yes, because he should have allocated shares to both his sister's and to his account

**Your Answer:** A (No)

**Correct Answer:** B (Yes, because he should have allocated shares to his sister's account)

**Full Explanation:**

**Standard III(B) Fair Dealing:**
Members and Candidates must deal fairly and objectively with all clients when providing investment analysis, making investment recommendations, taking investment action, or engaging in other professional activities.

**Key Principle for Oversubscribed IPOs/Limited Offerings:**

| Account Type | Treatment for Oversubscribed Offerings |
|--------------|---------------------------------------|
| Member's own account | **EXCLUDE** — forgo to free up shares for clients |
| Family accounts managed like other clients | **INCLUDE** — must not be excluded from allocation |
| All other suitable client accounts | **INCLUDE** — pro-rata allocation |

**Why Lee Violated the Standard:**

1. **Sister's account is managed like other clients** — The vignette explicitly states her account "is managed in the same manner as other clients"

2. **Family accounts shouldn't be excluded** — According to the Standards, if family-member accounts are managed similarly to other client accounts, they should NOT be excluded from buying shares in limited offerings

3. **Lee was correct to exclude himself** — Members should forgo personal allocations in oversubscribed offerings to free up shares for clients

**The Standard States:**
> "If the investment professional's family-member accounts are managed similarly to the accounts of other clients of the firm, however, the family-member accounts should not be excluded from buying such shares."

**Why A is Wrong:**
Lee did violate the Standard by excluding his sister. The fact that she is family doesn't justify excluding her if her account is managed like other clients.

**Why C is Wrong:**
Lee was correct to exclude HIS OWN account. Members should forgo personal allocations in oversubscribed situations. But this doesn't extend to properly managed family accounts.

**Key Distinction:**
- **Member's personal account:** EXCLUDE from oversubscribed offerings
- **Family accounts managed as regular clients:** INCLUDE in allocation

---

### Q41 — Priority of Transactions: IPO Allocation

**Full Vignette Context:**
Carl Hirayo, CFA, recently joined Summit Investments as a portfolio manager. Hirayo plans to participate in Tarragon Petroleum's IPO for both his personal account and his clients' accounts. He obtains preclearance for his own participation because the IPO is not fully subscribed at that time. The offering turns out to be fully subscribed at the time of issue and Summit receives all requested shares. Hirayo allocates these shares on a pro rata basis among his subscribing clients and his own account.

**Question:**
With respect to the IPO, does Hirayo violate the Standard relating to priority of transactions?

A. No
B. Yes, because he allocates shares to himself
C. Yes, because he applied for the IPO for his personal account

**Your Answer:** B (Yes, because he allocates shares to himself)

**Correct Answer:** A (No)

**Full Explanation:**

**Standard VI(B) Priority of Transactions:**
Investment transactions for clients and employers must have priority over investment transactions in which a Member or Candidate is the beneficial owner.

**Key Facts:**
1. IPO was NOT fully subscribed when Hirayo obtained preclearance
2. Summit received ALL requested shares (100% fill)
3. Hirayo allocated shares PRO RATA among all subscribing accounts (including his own)
4. **No client was disadvantaged**

**Why This is NOT a Violation:**

| Factor | Analysis |
|--------|----------|
| Did clients get less? | **No** — Summit received 100% of requested shares |
| Were clients harmed? | **No** — all clients received their full allocation |
| Was allocation fair? | **Yes** — pro rata among all subscribers |
| Did Hirayo benefit at clients' expense? | **No** — everyone got their requested shares |

**The Standard Prohibits:**
> "Members and candidates should not benefit from the position that their clients occupy in the marketplace—through preferred trading, the allocation of limited offerings, or oversubscription."

**Why This Case is Different:**
- The IPO was NOT oversubscribed for Summit (they got all shares requested)
- Hirayo received preclearance before the IPO became hot
- Pro rata allocation is fair dealing
- No client received less than they wanted

**Why B is Wrong:**
Receiving shares in your personal account is not automatically a violation. The violation occurs when you benefit AT THE EXPENSE of clients. Here, clients received full allocations.

**Why C is Wrong:**
Applying for personal participation in an IPO is permitted. The preclearance process exists specifically to allow this when appropriate.

**Key Concept:**
Priority of transactions requires that clients not be disadvantaged. If all clients receive their full requested allocation, the member can also receive their allocation without violating the Standard.

---

### Q43 — Disclosure of Conflicts: Compensation Arrangements

**Full Vignette Context:**
Carl Hirayo, CFA, recently joined Summit Investments as a portfolio manager.

Hirayo will receive a $60,000 performance bonus from Summit if his monthly portfolio performance exceeds that of Summit's other portfolios. He discloses the bonus arrangement to his existing clients but not to prospective clients. Separately, Hirayo will receive a $12,000 reward from Summit after he successfully brought in 20 clients from his previous employer. This reward is paid by Summit and is not charged to clients. Hirayo does not disclose this reward arrangement to the clients that he brought over.

**Question:**
In relation to his compensation, Hirayo violates the Standards when he fails to disclose:

A. The $60,000 bonus only
B. The $12,000 reward only
C. Both the $60,000 bonus and the $12,000 reward

**Your Answer:** C (Both)

**Correct Answer:** A (The $60,000 bonus only)

**Full Explanation:**

**Standard VI(A) Disclosure of Conflicts:**
Members and Candidates must make full and fair disclosure of all matters that could reasonably be expected to impair their independence and objectivity or interfere with respective duties to their clients, prospective clients, and employer.

**Analysis of Each Compensation:**

**$60,000 Performance Bonus:**
| Factor | Analysis |
|--------|----------|
| Creates conflict? | **YES** — incentivizes outperforming other portfolios |
| Could affect client interests? | **YES** — may take excessive risk or front-run other clients |
| Disclosed to existing clients? | YES |
| Disclosed to prospective clients? | **NO — VIOLATION** |

**$12,000 Client Recruitment Reward:**
| Factor | Analysis |
|--------|----------|
| Is this a referral fee? | **NO** — paid by employer, not third party |
| Charged to clients? | **NO** — paid by Summit |
| Creates conflict with clients? | **NO** — one-time payment for past action |
| Required to disclose? | **NO** |

**Why the $60,000 Bonus Must Be Disclosed:**
- Bonus based on relative performance creates incentive conflicts
- May encourage excessive risk-taking
- May create conflicts between portfolios
- **Must be disclosed to ALL clients, including prospective clients**

**Why the $12,000 Reward Does NOT Require Disclosure:**
- **NOT a referral fee** — Standard VI(C) Referral Fees applies to compensation from THIRD PARTIES for recommendations
- Paid by Summit (employer), not by clients or outside parties
- Does not create ongoing conflict of interest
- Clients are not charged this amount

**Standard VI(C) Referral Fees Definition:**
> "Referral fees are any compensation, consideration, or benefit received from or paid to others for the recommendation of products or services."

The $12,000 is compensation from the employer, not "from others" for recommendations.

**Why B is Wrong:**
The $12,000 is not a referral fee because it's paid by the employer (Summit), not received from a third party. It doesn't create a conflict that impairs judgment about client interests.

**Why C is Wrong:**
Only the $60,000 bonus creates a conflict requiring disclosure. The $12,000 reward is simply employer compensation for business development.

---

### Q44 — Record Retention Policy

**Full Vignette Context:**
Summit's management team decides to further strengthen its record retention policy. The current policy has the following notable provisions:

- **Provision 1:** Client meeting notes must be preserved in electronic form; hence, any hard copies must be digitized.
- **Provision 2:** Informal blog posts and short message form posts sourced from the internet do not need to be preserved.
- **Provision 3:** Research reports and all supporting documents have a retention period of three years.

**Question:**
To comply with the Standards, which provision in Summit's record retention policy should be amended?

A. Provision 1
B. Provision 2
C. Provision 3

**Your Answer:** C (Provision 3)

**Correct Answer:** B (Provision 2)

**Full Explanation:**

**Standard V(C) Record Retention:**
Members and Candidates must develop and maintain appropriate records to support their investment analyses, recommendations, actions, and other investment-related communications with clients and prospective clients.

**Analysis of Each Provision:**

**Provision 1 (Electronic Form):**
| Requirement | Standard's Position |
|-------------|---------------------|
| Records may be kept in electronic form | ✓ **Compliant** |
| Records may be kept in hard copy | Also permitted |
| Digitizing hard copies | Acceptable |

**Provision 2 (Blog Posts/Social Media):**
| Requirement | Standard's Position |
|-------------|---------------------|
| Informal blog posts don't need preservation | ✗ **NON-COMPLIANT** |
| Short message posts don't need preservation | ✗ **NON-COMPLIANT** |

**The Standard explicitly states:**
> "The nature or format of the information does not remove a member's or candidate's responsibility to maintain a record of information used in his or her analysis or communicated to clients."

> "Examples of non-print media formats that should be retained include, but are not limited to, e-mails, text messages, blog posts, and Twitter posts."

**Provision 3 (Three-Year Retention):**
| Requirement | Standard's Position |
|-------------|---------------------|
| Firm sets 3-year retention period | ✓ **Compliant** |
| CFA Institute recommends 7 years | Only in ABSENCE of firm policy |

**The Standard states:**
> "Firms may also implement policies detailing the applicable time frame for retaining research and client communication records. Fulfilling such regulatory and firm requirements satisfies the requirements of Standard V(C)."

**Why A is Wrong:**
Electronic storage is perfectly acceptable. Records can be maintained in either hard copy or electronic form.

**Why C is Wrong:**
The 7-year retention period is only a RECOMMENDATION that applies when there is NO firm policy. Since Summit has a policy (3 years), that policy governs.

**Why B is Correct:**
Blog posts and social media communications MUST be retained. The format (informal, short, online) does not exempt these records from retention requirements.

**Key Concept:**
ALL investment-related communications must be retained, regardless of format:
- Emails ✓
- Text messages ✓
- Blog posts ✓
- Twitter/social media posts ✓
- Formal reports ✓
- Informal notes ✓

---

## Summary by Topic

| Topic | Questions Missed | Priority Level |
|-------|------------------|----------------|
| Equity Valuation | 3 | HIGH |
| Fixed Income/Credit | 2 | HIGH |
| Ethics | 4 | HIGH |
| Portfolio Management | 1 | MEDIUM |
| Derivatives | 1 | MEDIUM |
| FSA | 2 (included by request) | MEDIUM |

---

## Key Formulas to Memorize

**Multistage RI Terminal Value with Persistence:**
> PV of TV = RI_T / [(1 + r − ω) × (1 + r)^(T−1)]

**Residual Income with OCI:**
> RI = (Net Income + OCI) − (r × Beginning Book Value)

**Maximum Sharpe Ratio (Combining Active + Benchmark):**
> SR_Combined = √(SR²_Benchmark + IR²_Active)

**Risk-Neutral Probability:**
> π = (1 + r − d) / (u − d)

**Two-Period Binomial Call:**
> c₀ = [π²×c++ + 2π(1−π)×c+- + (1−π)²×c--] / (1+r)²

**CDS Cash Settlement Proceeds:**
> Total = (Notional × LGD_CTD) + (Bond Value at Market)

**CDS Physical Settlement Proceeds:**
> Total = Notional (deliver bond, receive par)

---

## Key Concepts to Remember

**FCFF vs FCFE and Capital Structure:**
- FCFF is UNCHANGED by capital structure changes
- FCFE is AFFECTED by leverage changes

**Translation Methods:**
- Current rate: Translation adjustment → OCI/Equity
- Temporal: Translation gain/loss → Income Statement
- Temporal + strengthening currency → Higher GPM (COGS at lower historical rate)

**Fair Dealing for Family Accounts:**
- Member's own account: EXCLUDE from oversubscribed offerings
- Family accounts managed as clients: INCLUDE in allocation

**Record Retention:**
- ALL formats must be retained (including social media)
- Firm policy governs retention period
- 7-year recommendation only applies without firm policy
