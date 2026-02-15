# CFA Level II Mock Exam 8 — Incorrect Questions Review

**Score: 31/44 (70%)**
**Date: February 15, 2026**

---

## Table of Contents

1. [Quantitative Methods](#quantitative-methods)
2. [Fixed Income](#fixed-income)
3. [Ethics](#ethics)
4. [Corporate Issuers](#corporate-issuers)
5. [Equity Valuation](#equity-valuation)
6. [Financial Statement Analysis](#financial-statement-analysis)
7. [Alternatives](#alternatives)
8. [Derivatives](#derivatives)
9. [Portfolio Management](#portfolio-management)

---

## Quantitative Methods

### Q1 — Durbin-Watson Test for Serial Correlation

**Full Vignette Context:**
Bella Stone is an analyst covering Garnet Corp. To forecast the price of Garnet shares, she starts by examining related economic data and estimates a log-linear trend in the economic variable most relevant to her analysis. Stone evaluates whether the log-linear trend model suffers from serially correlated errors. The Durbin–Watson test statistic from the regression is 0.54 and the lower critical value for the Durbin–Watson statistic is dl = 1.25.

**Question:**
Based on the Durbin–Watson test, the errors in the economic variable's trend model are:

A. Negatively serially correlated
B. Not serially correlated
C. Positively serially correlated

**Your Answer:** A (Negatively serially correlated)

**Correct Answer:** C (Positively serially correlated)

**Full Explanation:**

**Durbin-Watson Test Decision Rules:**

The Durbin-Watson (DW) statistic ranges from 0 to 4:
- DW ≈ 2: No serial correlation
- DW < 2: Positive serial correlation
- DW > 2: Negative serial correlation

**Critical Value Decision Framework:**

| DW Statistic | Conclusion |
|--------------|------------|
| DW < d_L | **Positive** serial correlation (reject H₀) |
| d_L ≤ DW ≤ d_U | Inconclusive |
| d_U < DW < 4 - d_U | No serial correlation |
| 4 - d_U ≤ DW ≤ 4 - d_L | Inconclusive |
| DW > 4 - d_L | **Negative** serial correlation |

**This Case:**
- DW statistic = 0.54
- d_L = 1.25
- Since 0.54 < 1.25 → **Positive serial correlation**

**Why You Got It Wrong:**
You may have confused the interpretation. A LOW DW statistic (close to 0) indicates POSITIVE correlation, not negative. Negative serial correlation produces a HIGH DW statistic (close to 4).

**Memory Aid:**
> DW close to 0 → Positive correlation (errors move together)
> DW close to 4 → Negative correlation (errors alternate)
> DW close to 2 → No correlation

---

### Q2 — AR(1) Mean-Reverting Level

**Full Vignette Context:**
Bella Stone predicts Garnet's EPS using quarterly data in a first-order autoregressive model, AR(1). She tests for and rejects the presence of a unit root. The model estimation is presented in Exhibit 1. In the most recent quarter, EPS was $0.96. The critical t-statistic is 2.04.

**Exhibit 1:**
| Regression Statistics | Value |
|----------------------|-------|
| R² | 0.2059 |
| Standard error | 0.0856 |
| Observations | 32 |
| Durbin–Watson statistic | 1.56 |

| Coefficient | Value | Standard Error | t-Statistic |
|-------------|-------|----------------|-------------|
| Intercept | 0.4485 | 0.1457 | 3.08 |
| EPS_t-1 | 0.4541 | 0.1572 | 2.89 |

**Question:**
The 1-period-ahead forecast of Garnet's EPS is:

A. Below its mean-reverting level
B. Equal to its mean-reverting level
C. Above its mean-reverting level

**Your Answer:** A (Below its mean-reverting level)

**Correct Answer:** C (Above its mean-reverting level)

**Full Explanation:**

**AR(1) Model:**
> x_t+1 = b₀ + b₁x_t

**Mean-Reverting Level Formula:**
> x̄ = b₀ / (1 − b₁)

**Step 1: Calculate Mean-Reverting Level**
> x̄ = 0.4485 / (1 − 0.4541)
> x̄ = 0.4485 / 0.5459
> x̄ = **0.8216**

**Step 2: Compare Current Value to Mean-Reverting Level**
- Current EPS = $0.96
- Mean-reverting level = $0.8216
- Since 0.96 > 0.8216, current value is **ABOVE** the mean-reverting level

**Step 3: Predict Direction (not required but useful)**
Since current value > mean-reverting level:
- The series will tend to DECREASE toward the mean
- But the 1-period forecast will still be above the mean-reverting level

1-period forecast = 0.4485 + 0.4541 × 0.96 = 0.8844 > 0.8216 ✓

**Why You Got It Wrong:**
You may have used the wrong formula for mean-reverting level:
> Wrong: x̄ = b₀ / b₁ = 0.4485 / 0.4541 = 0.9877
> Then 0.96 < 0.9877 would suggest "below"

**Correct Formula:**
> x̄ = b₀ / (1 − b₁) — Note the (1 − b₁) in denominator!

**Key Concept:**
For a covariance-stationary AR(1) process with |b₁| < 1:
- If current value > mean-reverting level → series will decrease
- If current value < mean-reverting level → series will increase
- Series always reverts toward x̄ = b₀/(1 − b₁)

---

### Q4 — Confusion Matrix: Accuracy Calculation

**Full Vignette Context:**
Bella Stone evaluates if a model can properly classify the "Type" feature into "buy" or "sell," and examines the model training performance for validation of the model. She compiles the confusion matrix in Exhibit 3.

**Exhibit 3 — Confusion Matrix:**
|  | Actual: Buy (Class "1") | Actual: Sell (Class "0") |
|--|------------------------|-------------------------|
| **Predicted: Buy (Class "1")** | 70 | 40 |
| **Predicted: Sell (Class "0")** | 20 | 70 |

**Question:**
The confusion matrix indicates that model accuracy is closest to:

A. 0.64
B. 0.70
C. 0.78

**Your Answer:** A (0.64)

**Correct Answer:** B (0.70)

**Full Explanation:**

**Confusion Matrix Components:**

| Term | Definition | Value |
|------|------------|-------|
| True Positive (TP) | Predicted Buy, Actually Buy | 70 |
| False Positive (FP) | Predicted Buy, Actually Sell | 40 |
| True Negative (TN) | Predicted Sell, Actually Sell | 70 |
| False Negative (FN) | Predicted Sell, Actually Buy | 20 |
| **Total** | | **200** |

**Performance Metrics:**

| Metric | Formula | Calculation |
|--------|---------|-------------|
| **Accuracy** | (TP + TN) / Total | (70 + 70) / 200 = **0.70** |
| Precision | TP / (TP + FP) | 70 / 110 = 0.64 |
| Recall (Sensitivity) | TP / (TP + FN) | 70 / 90 = 0.78 |

**Why You Got It Wrong:**
You calculated **Precision** (0.64) instead of **Accuracy** (0.70).

- **Accuracy** = Correct predictions / Total predictions = (TP + TN) / All
- **Precision** = Correct positive predictions / All positive predictions = TP / (TP + FP)

**Why C is Wrong:**
Answer C (0.78) is **Recall** (Sensitivity), not Accuracy.

**Memory Aid:**
> **Accuracy:** How often is the model correct overall?
> **Precision:** When it predicts positive, how often is it right?
> **Recall:** Of all actual positives, how many did it catch?

---

## Fixed Income

### Q8 — Convertible Bond Minimum Value

**Full Vignette Context:**
Vilem Polti, a fixed-income analyst, is evaluating three default-free bonds in Country A and a convertible bond issued by ZXEL Corporation.

The convertible bond was initially sold at par ($1,000). The convertible bond pays a 3.00% annual fixed-rate coupon, has a conversion ratio of 23, and the price of ZXEL Corp. common stock is currently $47 per share. The underlying straight-bond value of the convertible bond is $990.

**Question:**
The minimum value of the ZXEL Corp. convertible bond is closest to:

A. $990
B. $1,000
C. $1,081

**Your Answer:** A ($990)

**Correct Answer:** C ($1,081)

**Full Explanation:**

**Convertible Bond Minimum Value Rule:**
> Minimum Value = MAX(Conversion Value, Straight Bond Value)

**Step 1: Calculate Conversion Value**
> Conversion Value = Share Price × Conversion Ratio
> Conversion Value = $47 × 23 = **$1,081**

**Step 2: Identify Straight Bond Value**
> Straight Bond Value = $990 (given)

**Step 3: Determine Minimum Value**
> Minimum Value = MAX($1,081, $990) = **$1,081**

**Why You Got It Wrong:**
You selected the straight bond value ($990) without comparing it to the conversion value ($1,081). The minimum value is the GREATER of the two floors.

**Why B is Wrong:**
$1,000 is the par value (also equals initial conversion price × conversion ratio), but this is not relevant to determining current minimum value.

**Key Concept:**
A convertible bond has TWO floors:
1. **Straight bond value** — Value as if no conversion feature
2. **Conversion value** — Value if converted immediately

The bondholder can always choose the more valuable option, so the minimum value is the higher floor.

**Convertible Bond Relationships:**
> Convertible Bond Value ≥ MAX(Conversion Value, Straight Bond Value)
> Conversion Premium = (Bond Price − Conversion Value) / Conversion Value

---

## Ethics

### Q12 — Disclosure of Conflicts: Board Position

**Full Vignette Context:**
Minah Lee, CFA, recently joined Caldecott Asset Management as a portfolio manager. Lee resides in a country where the securities laws and regulations are stricter than the Code and Standards. Caldecott is based in a neighboring country with securities laws and regulations that are less strict than the Code and Standards.

Lee joins the board of trustees at the local university. The position is unpaid but is likely to be time consuming in the first year. She also starts a position as an adjunct professor at the university. The compensation from the university includes government-mandated defined contributions to a retirement plan. Lee decides to allocate the retirement plan assets to a large diversified mutual fund managed by Caldecott's competitor. Lee obtained written approval from Caldecott for her compensation as an adjunct professor but did not disclose her board position and how the retirement plan assets are invested.

**Question:**
With respect to the university, does Lee violate the Standard relating to disclosure of conflicts?

A. No
B. Yes, by failing to disclose the retirement plan investment
C. Yes, by failing to disclose her position on the board of trustees

**Your Answer:** A (No)

**Correct Answer:** C (Yes, by failing to disclose her position on the board of trustees)

**Full Explanation:**

**Standard VI(A) Disclosure of Conflicts:**
Members and Candidates must make full and fair disclosure of all matters that could reasonably be expected to impair their independence and objectivity or interfere with respective duties to their clients, prospective clients, and employer.

**Analysis of Lee's Activities:**

| Activity | Disclosure Required? | Why? |
|----------|---------------------|------|
| Board of trustees position | **YES** | Time-consuming; may interfere with job duties |
| Retirement plan investment | NO | Personal investment in diversified fund; no conflict |

**Why the Board Position Requires Disclosure:**
- Lee acknowledges it will be "time consuming in the first year"
- Time spent on board duties could interfere with her responsibilities at Caldecott
- Even though unpaid, it creates a potential conflict with employer duties

**Why the Retirement Investment Does NOT Require Disclosure:**
- Investment in a large diversified mutual fund
- Not a concentrated position that creates conflicts
- No special relationship with the competitor fund
- Unless specifically required by employer policy

**Why You Got It Wrong:**
You may have thought that because the board position is unpaid, it doesn't create a conflict. However, the TIME commitment is what creates the potential interference with job duties, not the compensation.

**Key Principle:**
> Any outside activity that could INTERFERE with job duties requires disclosure, regardless of whether it's compensated.

---

## Corporate Issuers

### Q13 — Grinold-Kroner Model: Equity Risk Premium

**Full Vignette Context:**
Jessica Gunning is an analyst reviewing US-based GameDay Inc.'s cost of capital and corporate restructuring actions.

For GameDay's cost of capital, Gunning begins by determining GameDay's cost of equity and uses a macroeconomic model to estimate the equity risk premium (ERP). She forecasts the data shown in Exhibit 1 and applies the Grinold-Kroner model.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Risk-free rate | 3.0% |
| Inflation | 1.3% |
| Growth rate in P/E ratio | 0.0% |
| S&P 500 dividend yield | 1.8% |
| Percent change in shares outstanding | –0.2% |
| Real GDP growth | 2.6% |

**Question:**
Using the Grinold-Kroner model, the estimated ERP is:

A. 2.5%
B. 2.9%
C. 5.9%

**Your Answer:** C (5.9%)

**Correct Answer:** B (2.9%)

**Full Explanation:**

**Grinold-Kroner Model:**
> Expected Return = DY + Δ(P/E) + i + g − ΔS

Where:
- DY = Dividend yield
- Δ(P/E) = Expected growth in P/E ratio
- i = Expected inflation
- g = Expected real earnings growth (proxy: real GDP growth)
- ΔS = Expected change in shares outstanding

**Equity Risk Premium:**
> ERP = Expected Return − Risk-free Rate

**Step 1: Calculate Expected Return**
> Expected Return = 1.8% + 0.0% + 1.3% + 2.6% − (−0.2%)
> Expected Return = 1.8% + 0.0% + 1.3% + 2.6% + 0.2%
> Expected Return = **5.9%**

**Step 2: Calculate ERP**
> ERP = 5.9% − 3.0% = **2.9%**

**Why You Got It Wrong:**
You calculated the Expected Return (5.9%) but forgot to subtract the risk-free rate to get the ERP.

> ERP ≠ Expected Return
> ERP = Expected Return − Risk-free Rate

**Why A is Wrong:**
Answer A (2.5%) adds the change in shares instead of subtracting it:
> Wrong: 1.8% + 0% + 1.3% + 2.6% + (−0.2%) − 3.0% = 2.5%

**Key Formula (with signs):**
> ERP = [DY + Δ(P/E) + i + g − ΔS] − Rf

**Note on Share Repurchases:**
- When ΔS is negative (shares decreasing due to buybacks), it ADDS to expected return
- This is because remaining shareholders benefit from the buyback
- Formula: SUBTRACT ΔS, so −(−0.2%) = +0.2%

---

## Equity Valuation

### Q19 — Segmented Markets Theory (Requested for Inclusion)

**Full Vignette Context:**
Stephen Russo is a treasury analyst at Central Finance Inc., which specializes in financing equipment and real estate. Russo and his manager, Ericka Patry, meet to discuss anticipated changes to interest rates and the potential impact on Central Finance's portfolio.

Patry and Russo discuss the term structure of interest rates. Russo accepts the theory that yields are solely a function of the supply and demand for funds at a particular maturity.

**Question:**
The term structure theory that Russo accepts is best described as the:

A. Local expectations theory
B. Liquidity preference theory
C. Segmented markets theory

**Correct Answer:** C (Segmented markets theory)

**Full Explanation:**

**Term Structure Theories:**

| Theory | Key Assumption |
|--------|---------------|
| **Segmented Markets** | Yields determined by supply/demand at EACH maturity independently |
| Pure Expectations | Forward rates = Expected future spot rates |
| Local Expectations | Expected return = Risk-free rate for short periods |
| Liquidity Preference | Investors require premium for longer maturities |
| Preferred Habitat | Investors prefer certain maturities but will move for sufficient premium |

**Segmented Markets Theory:**
- Each maturity segment is an independent market
- Yields are "solely a function of supply and demand for funds of a particular maturity"
- No substitution between maturities
- Lenders and borrowers are restricted to specific maturity segments

**Why This Matches Russo's View:**
The vignette states: "Russo accepts the theory that yields are solely a function of the supply and demand for funds at a particular maturity."

This is the exact definition of segmented markets theory.

**Why A is Wrong:**
Local expectations theory says expected return equals the risk-free rate over short periods (no-arbitrage assumption). It doesn't focus on supply/demand at specific maturities.

**Why B is Wrong:**
Liquidity preference theory says investors require a premium for longer maturities due to interest rate risk. It's about risk premiums, not independent supply/demand.

---

### Q21 — Sustainable Net Sales Growth Components

**Full Vignette Context:**
Joao Viniciu is an equity analyst researching Pedra S.A., a Brazilian multinational corporation. Pedra reports under IFRS with a fiscal year end of 31 December. Its reporting currency is the Brazilian Real (BRL).

Viniciu analyzes the sustainability of net sales growth for each of Pedra's geographic segments. Exhibit 1 shows the components of total net sales growth for each of these segments.

**Exhibit 1:**
| Geographic Segment | Volume Growth | Price Growth | FX Contribution | Total Net Sales Growth |
|-------------------|---------------|--------------|-----------------|----------------------|
| Europe | 4.6% | 1.9% | 1.4% | 7.9% |
| Americas | 0.7% | 1.1% | 4.3% | 6.1% |
| Asia Pacific | 3.6% | 2.1% | 1.8% | 7.5% |

**Question:**
Based on the components of total net sales growth, which of Pedra's geographic segments has the lowest sustainable growth rate?

A. Europe
B. Americas
C. Asia Pacific

**Correct Answer:** B (Americas)

**Full Explanation:**

**Sustainability of Growth Components:**

| Component | Sustainability | Why |
|-----------|---------------|-----|
| Volume Growth | **HIGH** | Management control; real demand |
| Price Growth | **HIGH** | Management control; pricing power |
| FX Contribution | **LOW** | No control; currency fluctuations |

**Calculate Sustainable Components (Volume + Price):**

| Segment | Volume + Price | FX | Sustainable Growth |
|---------|---------------|----|--------------------|
| Europe | 4.6% + 1.9% = **6.5%** | 1.4% | High sustainability |
| **Americas** | 0.7% + 1.1% = **1.8%** | 4.3% | **Lowest sustainability** |
| Asia Pacific | 3.6% + 2.1% = **5.7%** | 1.8% | Medium sustainability |

**Americas has:**
- Lowest sustainable growth (Volume + Price = 1.8%)
- Highest FX contribution (4.3%)
- Most of its growth comes from currency effects, not real growth

**Key Insight:**
Growth from volume and price changes is more sustainable because management can influence these factors. FX-driven growth is temporary and reverses when currencies move.

---

### Q22 — Foreign Currency Transaction Gain/Loss

**Full Vignette Context:**
Joao Viniciu is an equity analyst researching Pedra S.A., a Brazilian multinational corporation.

For his research, Viniciu uses the BRL/USD exchange rate information for the most recent year as shown in Exhibit 2.

**Exhibit 2:**
| Date | BRL/USD |
|------|---------|
| 1 January | 5.07 |
| 1 November | 5.53 |
| 31 December | 5.45 |
| Average for the year | 5.26 |

On 1 November of the most recent year, Pedra purchased imported goods worth USD 3.2 million on credit from an unaffiliated US supplier. The amount payable for these imported goods by Pedra was still outstanding as of 31 December.

**Question:**
For the most recent year, Pedra's purchase of imported goods resulted in a foreign exchange:

A. Loss of BRL 256,000
B. Gain of BRL 256,000
C. Gain of BRL 864,000

**Your Answer:** A (Loss of BRL 256,000)

**Correct Answer:** B (Gain of BRL 256,000)

**Full Explanation:**

**Key Facts:**
- Pedra (Brazilian company) owes USD 3.2 million
- Payable recorded on Nov 1 at 5.53 BRL/USD
- Year-end rate is 5.45 BRL/USD
- USD weakened (fewer BRL needed per USD)

**Step 1: Calculate Initial Payable (Nov 1)**
> BRL Payable = USD 3.2M × 5.53 = BRL 17,696,000

**Step 2: Calculate Year-End Payable (Dec 31)**
> BRL Payable = USD 3.2M × 5.45 = BRL 17,440,000

**Step 3: Calculate FX Gain/Loss**
> Change = BRL 17,440,000 − BRL 17,696,000 = **−BRL 256,000**

The payable DECREASED by BRL 256,000 → This is a **GAIN** for Pedra!

**Formula:**
> FX Result = −Liability × (Ending Rate − Beginning Rate)
> FX Result = −USD 3.2M × (5.45 − 5.53)
> FX Result = −USD 3.2M × (−0.08)
> FX Result = **+BRL 256,000 (GAIN)**

**Why You Got It Wrong:**
You may have reversed the sign. When a liability DECREASES in home currency terms, it's a GAIN, not a loss.

**Logic:**
- Pedra owes USD, which must be repaid in USD
- The USD weakened against BRL
- It now takes FEWER BRL to buy the USD needed to pay
- Pedra benefits → GAIN

**Key Rule:**
| Position | Currency Strengthens | Currency Weakens |
|----------|---------------------|------------------|
| Asset in FC | Gain | Loss |
| Liability in FC | Loss | **Gain** |

---

### Q23 — Current Rate Method and Ratios

**Full Vignette Context:**
Carro Corp. is one of Pedra's wholly-owned US-based subsidiaries. Pedra translates Carro's financial statements using the current rate method based on the rates in Exhibit 2. Carro's only non-monetary assets are inventory and fixed assets, while all of its liabilities are monetary. Carro's inventory and fixed assets were purchased at a BRL/USD rate of 5.24. Viniciu analyzes the effect of the translation method on Carro's debt-to-assets ratio for the most recent year.

**Question:**
After translation, Carro's debt-to-assets ratio at 31 December of the most recent year was:

A. Lower than it was before translation
B. The same as it was before translation
C. Higher than it was before translation

**Your Answer:** A (Lower than before translation)

**Correct Answer:** B (The same as before translation)

**Full Explanation:**

**Current Rate Method Translation Rules:**
| Item | Exchange Rate |
|------|---------------|
| All Assets | Current rate |
| All Liabilities | Current rate |
| Equity | Historical rates (mixed) |
| Income Statement | Average rate |

**Debt-to-Assets Ratio:**
> Debt-to-Assets = Total Debt / Total Assets

**Under Current Rate Method:**
- ALL assets translated at current rate (5.45)
- ALL liabilities translated at current rate (5.45)

**Before Translation (in USD):**
> Ratio = Debt (USD) / Assets (USD)

**After Translation (in BRL):**
> Ratio = [Debt (USD) × 5.45] / [Assets (USD) × 5.45]
> Ratio = Debt (USD) / Assets (USD)

**The ratio is UNCHANGED because both numerator and denominator are multiplied by the same exchange rate!**

**Why You Got It Wrong:**
You may have confused this with the temporal method, where:
- Non-monetary assets use historical rate
- Monetary liabilities use current rate
- This WOULD change the ratio

**Key Distinction:**

| Method | Effect on Debt/Assets |
|--------|----------------------|
| **Current Rate** | **Unchanged** (same rate for both) |
| Temporal | Changes (different rates) |

---

### Q24 — Translation Adjustment: Current Rate Method

**Full Vignette Context:**
Over the current year, Viniciu expects that Carro will maintain a stable net asset balance sheet exposure and that the BRL will weaken against the USD.

**Question:**
Based on Viniciu's expectations, the translation of Carro's financial statements in the current year will most likely result in a:

A. Translation loss in Pedra's income statement
B. Translation gain in Pedra's income statement
C. Positive translation adjustment in Pedra's shareholders' equity

**Your Answer:** B (Translation gain in income statement)

**Correct Answer:** C (Positive translation adjustment in shareholders' equity)

**Full Explanation:**

**Current Rate Method — Where Translation Adjustment Goes:**
> Translation adjustment → **OCI / Shareholders' Equity** (NOT income statement!)

**Translation Adjustment Direction:**

| Balance Sheet Exposure | Foreign Currency Strengthens | Foreign Currency Weakens |
|------------------------|------------------------------|--------------------------|
| Net Asset | Positive adjustment | Negative adjustment |
| Net Liability | Negative adjustment | Positive adjustment |

**This Case:**
- Carro has **net asset exposure** (positive equity)
- **BRL weakens against USD** → USD strengthens
- Foreign currency (USD) strengthens + Net asset exposure = **Positive adjustment**

**Why A and B are Wrong:**
Under the **current rate method**, translation adjustments go to OCI/equity, NOT the income statement.

Only under the **temporal method** do translation gains/losses flow through the income statement.

**Why You Got It Wrong:**
You identified the correct direction (gain) but wrong location (income statement instead of equity).

**Summary:**
| Method | Where G/L Goes |
|--------|---------------|
| Current Rate | OCI / Equity |
| Temporal | Income Statement |

---

## Financial Statement Analysis

### Q41 — Common Equity Tier 1 Capital Ratio

**Full Vignette Context:**
Darren Carter is a credit analyst reviewing Gowran Bank. The bank is subject to the Basel III regulatory framework and prepares its financial statements under IFRS.

Carter first considers Gowran's capital adequacy. For the most recent year end, Gowran reported Common Equity Tier 1 Capital of $15 billion and risk-weighted assets of $100 billion. Carter determines Gowran's pro forma year-end Common Equity Tier 1 Capital ratio to account for the following two events, which occurred after the most recent year end.

1. Gowran issued $1 billion of Additional Tier 1 Capital.
2. The regulator required Gowran to recognize an additional $3.5 billion of operational risk-weighted assets.

**Question:**
Gowran's pro forma Common Equity Tier 1 Capital ratio is closest to:

A. 14.5%
B. 15.0%
C. 15.5%

**Your Answer:** C (15.5%)

**Correct Answer:** A (14.5%)

**Full Explanation:**

**CET1 Ratio Formula:**
> CET1 Ratio = Common Equity Tier 1 Capital / Risk-Weighted Assets

**Analyze Each Event:**

**Event 1: Issued $1B Additional Tier 1 Capital**
- Additional Tier 1 ≠ Common Equity Tier 1
- This does NOT increase CET1 numerator
- CET1 Capital remains at $15 billion

**Event 2: Additional $3.5B Operational RWA**
- Increases denominator (Risk-Weighted Assets)
- New RWA = $100B + $3.5B = $103.5 billion

**Pro Forma Calculation:**
> CET1 Ratio = $15B / $103.5B = **14.49% ≈ 14.5%**

**Why You Got It Wrong:**
You added the Additional Tier 1 Capital to CET1:
> Wrong: ($15B + $1B) / ($100B + $3.5B) = $16B / $103.5B = 15.5%

**Key Distinction — Types of Capital:**

| Capital Type | Included in CET1? | Examples |
|--------------|-------------------|----------|
| **Common Equity Tier 1** | **YES** | Common stock, retained earnings, AOCI |
| Additional Tier 1 | NO | Preferred stock, hybrid instruments |
| Tier 2 | NO | Subordinated debt |

**Basel III Capital Hierarchy:**
> CET1 ⊂ Tier 1 ⊂ Total Capital

Additional Tier 1 + CET1 = Total Tier 1 (but this question asks specifically about CET1)

---

### Q42 — Allowance for Loan Losses Ratio (Requested for Inclusion)

**Full Vignette Context:**
Carter next assesses Gowran's asset quality by analyzing the adequacy of its allowance for loan losses. Specifically, he examines how the ratio of the bank's allowance for loan losses to non-performing loans changed during the most recent year based on the data (in millions) in Exhibit 1.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Non-performing loans at start of year | $2,000 |
| Non-performing loans at end of year | $2,400 |
| Allowance for loan losses at start of year | $1,500 |
| Provision for loan losses during the year | $500 |
| Charge-offs, net of recoveries, during the year | $200 |

**Question:**
Over the most recent year, the ratio of Gowran's allowances for loan losses to non-performing loans:

A. Decreased
B. Not changed
C. Increased

**Correct Answer:** B (Not changed)

**Full Explanation:**

**Step 1: Calculate Allowance at End of Year**

| Item | Amount |
|------|--------|
| Beginning Allowance | $1,500 |
| + Provision for loan losses | +$500 |
| − Net charge-offs | −$200 |
| **Ending Allowance** | **$1,800** |

**Step 2: Calculate Ratios**

| Period | Allowance | NPL | Ratio |
|--------|-----------|-----|-------|
| Start of Year | $1,500 | $2,000 | **0.75** |
| End of Year | $1,800 | $2,400 | **0.75** |

**The ratio is UNCHANGED at 0.75!**

**Key Relationships:**
- **Provision** = Income statement EXPENSE → INCREASES allowance
- **Charge-offs** = Writing off actual losses → DECREASES allowance
- **Recoveries** = Collecting previously charged-off amounts → INCREASES allowance

**Allowance Roll-Forward:**
> Ending Allowance = Beginning Allowance + Provision − Net Charge-offs

**Common Errors:**

| Error | Result |
|-------|--------|
| Subtracting provision | Ratio appears to decrease |
| Adding net charge-offs | Ratio appears to increase |

---

### Q44 — Stock-Based Compensation: Effect on Paid-in Capital

**Full Vignette Context:**
As part of its executive management compensation, Gowran also has a stock option plan (Plan B). Three years ago, Gowran granted executives 5 million at-the-money stock options with a three-year vesting period. On the grant date, Gowran's share price was $12 and the fair value of each option was $3. All of the options are now vested in the current year. Carter determines the effect on Gowran's paid-in capital on its balance sheet in the current year, assuming that 2 million of the stock options are exercised at the strike price of $12 and Gowran's share price is currently $18.

**Question:**
Based on Carter's assumptions regarding the exercise of the share options, paid-in capital on Gowran's balance sheet in the current year will increase by:

A. $24 million
B. $30 million
C. $42 million

**Your Answer:** C ($42 million)

**Correct Answer:** B ($30 million)

**Full Explanation:**

**Stock Option Accounting Overview:**

**During Vesting Period (Years 1-3):**
- Expense recognized: Total Fair Value / Vesting Period per year
- Dr. Compensation Expense
- Cr. Share-Based Compensation Reserve (Equity)

**Total Reserve Built Up:**
> 5 million options × $3 fair value = $15 million (in reserve after 3 years)

**At Exercise (2 million options exercised):**

**Source 1: Cash from Strike Price**
> 2 million options × $12 strike = **$24 million** → Paid-in Capital

**Source 2: Transfer from Compensation Reserve**
> 2 million options × $3 fair value = **$6 million** → Paid-in Capital

**Total Increase in Paid-in Capital:**
> $24 million + $6 million = **$30 million**

**Why You Got It Wrong:**
You used the current market price ($18) instead of the strike price ($12):
> Wrong: 2M × $18 + 2M × $3 = $36M + $6M = $42M

**Key Point:**
The exercise price is what the employee PAYS to the company. The current market price is irrelevant to the company's cash receipt.

**Journal Entry at Exercise:**
```
Dr. Cash                           $24 million (2M × $12)
Dr. Share-Based Compensation Reserve $6 million (2M × $3)
    Cr. Paid-in Capital                         $30 million
```

---

## Alternatives

### Q31 — Option Gamma: At-the-Money Maximum (Requested for Inclusion)

**Full Vignette Context:**
Judy West is a trader who is training a new hire, Alex Carter, on the application of option pricing models.

West next sets up a gamma hedging exercise. She shows Carter how to predict the change in call price for a given change in the underlying stock price for the three calls in Exhibit 2. All three calls have the same time to expiration. West explains how including gamma improves the accuracy of the prediction.

**Exhibit 2:**
| Item | Value |
|------|-------|
| Current stock price | $100 |
| Call 1 strike price | $90 |
| Call 2 strike price | $100 |
| Call 3 strike price | $110 |

**Question:**
Which option would have the largest gamma?

A. Call 1
B. Call 2
C. Call 3

**Correct Answer:** B (Call 2)

**Full Explanation:**

**Gamma Definition:**
> Gamma = Rate of change of delta with respect to stock price
> Gamma = ∂²C/∂S² (second derivative of option price)

**Gamma Characteristics:**

| Option Moneyness | Gamma Level |
|------------------|-------------|
| Deep in-the-money | Low |
| **At-the-money** | **HIGHEST** |
| Deep out-of-the-money | Low |

**Analysis of Each Call:**

| Call | Strike | Moneyness | Gamma |
|------|--------|-----------|-------|
| Call 1 | $90 | In-the-money (S > X) | Lower |
| **Call 2** | $100 | **At-the-money (S = X)** | **Highest** |
| Call 3 | $110 | Out-of-the-money (S < X) | Lower |

**Why ATM Options Have Highest Gamma:**
- ATM options are most sensitive to small price movements
- Small stock moves can shift option from ITM to OTM or vice versa
- Delta changes rapidly around the strike price
- This rapid delta change = high gamma

**Gamma and Delta Relationship:**
- Deep ITM: Delta ≈ 1, stable → Low gamma
- ATM: Delta ≈ 0.5, unstable → High gamma
- Deep OTM: Delta ≈ 0, stable → Low gamma

**Visual Concept:**
```
Gamma
  ^
  |       *
  |      * *
  |     *   *
  |    *     *
  |___*_______*___> Stock Price
     ITM  ATM  OTM
```

---

## Derivatives

### Q30 — Delta Hedging: Number of Shares to Buy

**Full Vignette Context:**
Judy West presents an example of delta hedging a short call position on 5,000 shares of an underlying stock. She asks Carter to determine the optimal number of shares of stock to buy to hedge the short call position.

**Exhibit 1:**
| Item | Value |
|------|-------|
| N(d₁) | 0.589 |
| N(d₂) | 0.505 |
| N(−d₁) | 0.411 |
| N(−d₂) | 0.495 |

**Question:**
The optimal number of shares that should be purchased to delta hedge the short call position is closest to:

A. 2,055
B. 2,525
C. 2,945

**Your Answer:** A (2,055)

**Correct Answer:** C (2,945)

**Full Explanation:**

**Delta Hedging Formula:**
> Number of Hedging Units = −Portfolio Delta / Delta of Hedging Instrument

**Step 1: Identify Call Delta**
For a call option (no dividends):
> Delta_call = N(d₁) = 0.589

**Step 2: Calculate Portfolio Delta**
Short 5,000 calls means:
> Portfolio Delta = −0.589 × 5,000 = **−2,945**

(Negative because SHORT calls)

**Step 3: Calculate Shares to Buy**
Hedging with shares (Delta of share = 1.0):
> Shares to Buy = −(−2,945) / 1.0 = **2,945 shares**

**Why You Got It Wrong:**
You used N(−d₁) = 0.411, which is the delta of a PUT option:
> Wrong: 0.411 × 5,000 = 2,055

**Why B is Wrong:**
Answer B uses N(d₂) instead of N(d₁):
> Wrong: 0.505 × 5,000 = 2,525

**Key Formulas:**

| Option Type | Delta Formula |
|-------------|---------------|
| **Call** | **Δ_c = N(d₁)** |
| Put | Δ_p = N(d₁) − 1 = −N(−d₁) |

**Delta Hedging Logic:**
- Short call has negative delta (loses value when stock rises)
- Buy shares (positive delta) to offset
- Net portfolio delta should equal zero

---

## Portfolio Management

### Q35 — Optimal Active Risk and Sharpe Ratio

**Full Vignette Context:**
Mary Navarro reviews the performance of an active portfolio that does not have any short-selling restrictions.

**Exhibit 1:**
| Metric | Portfolio | Benchmark |
|--------|-----------|-----------|
| Active return | 1.40% | --- |
| Active risk | 10.00% | --- |
| Standard deviation | 21% | 17% |
| Sharpe ratio | 0.29 | 0.28 |

Navarro believes that the realized performance statistics in Exhibit 1 are reasonable estimates for the future. She determines that the optimal level of active risk is 8.50% and investigates whether the Sharpe ratio of the active portfolio can be improved by combining investments in this portfolio and the benchmark.

**Question:**
Can Navarro improve the Sharpe ratio of the active portfolio by combining investments in this portfolio and the benchmark?

A. No
B. Yes, by taking a short position in the active portfolio and a long position in the benchmark
C. Yes, by taking a long position in the active portfolio and a short position in the benchmark

**Your Answer:** C (Long active, short benchmark)

**Correct Answer:** B (Short active, long benchmark)

**Full Explanation:**

**Step 1: Calculate Information Ratio**
> IR = Active Return / Active Risk
> IR = 1.40% / 10.00% = **0.14**

**Step 2: Calculate Optimal Active Risk**
> σ*_A = (IR / SR_B) × σ_B
> σ*_A = (0.14 / 0.28) × 17%
> σ*_A = 0.5 × 17% = **8.50%**

**Step 3: Compare Actual vs Optimal Active Risk**
- Actual active risk = 10.00%
- Optimal active risk = 8.50%
- **Actual > Optimal** → Too much active risk!

**Step 4: Determine Action**
Since actual active risk EXCEEDS optimal:
- Need to REDUCE active risk
- SHORT the active portfolio, LONG the benchmark
- This moves toward the optimal blend

**Why You Got It Wrong:**
You reversed the direction. Going long active/short benchmark would INCREASE active risk further from optimal.

**Key Rule:**
| Situation | Action |
|-----------|--------|
| Actual risk > Optimal | Short active, long benchmark |
| Actual risk < Optimal | Long active, short benchmark |

**Maximum Sharpe Ratio (for reference):**
> SR*_max = √(SR²_B + IR²)
> SR*_max = √(0.28² + 0.14²) = √(0.0784 + 0.0196) = √0.098 = 0.31

---

## Summary by Topic

| Topic | Questions Missed | Priority Level |
|-------|------------------|----------------|
| Quantitative Methods | 3 | HIGH |
| Equity/FSA | 5 | HIGH |
| Fixed Income | 1 | MEDIUM |
| Ethics | 1 | MEDIUM |
| Corporate Issuers | 1 | MEDIUM |
| Derivatives | 1 | MEDIUM |
| Portfolio Management | 1 | MEDIUM |

---

## Key Formulas to Memorize

**Durbin-Watson Interpretation:**
> DW < d_L → Positive serial correlation
> DW > 4 − d_L → Negative serial correlation

**AR(1) Mean-Reverting Level:**
> x̄ = b₀ / (1 − b₁)

**Confusion Matrix Accuracy:**
> Accuracy = (TP + TN) / (TP + TN + FP + FN)

**Grinold-Kroner ERP:**
> ERP = [DY + Δ(P/E) + i + g − ΔS] − Rf

**Convertible Bond Minimum:**
> Min Value = MAX(Conversion Value, Straight Bond Value)

**FX Transaction Result (Liability):**
> Result = −Liability × (End Rate − Begin Rate)

**CET1 Ratio:**
> CET1 Ratio = CET1 Capital / Risk-Weighted Assets

**Delta Hedge:**
> Shares = −Portfolio Delta / 1 = Call Delta × Number of Contracts

**Optimal Active Risk:**
> σ*_A = (IR / SR_B) × σ_B

---

## Key Concepts to Remember

**Serial Correlation:**
- Low DW (near 0) → Positive correlation
- High DW (near 4) → Negative correlation

**Mean Reversion:**
- Formula uses (1 − b₁) in denominator
- Current > Mean level → Expect decrease

**Current Rate Method:**
- Same rate for assets and liabilities → Ratios unchanged
- Translation adjustment → Equity (not I/S)

**Stock Compensation:**
- Use STRIKE price for cash calculation
- Transfer fair value from reserve to paid-in capital

**Delta Values:**
- Call delta = N(d₁)
- Put delta = −N(−d₁)

**Active Risk Optimization:**
- Too much risk → Short active, long benchmark
- Too little risk → Long active, short benchmark
