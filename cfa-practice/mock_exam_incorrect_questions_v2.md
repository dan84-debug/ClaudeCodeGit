# CFA Level II Mock Exam — Incorrect Questions Review

**Score: 56/88 (64%)**
**Date: January 2026**

---

## Table of Contents

1. [Fixed Income / Credit](#fixed-income--credit)
2. [Financial Statement Analysis](#financial-statement-analysis)
3. [Equity Valuation](#equity-valuation)
4. [Derivatives](#derivatives)
5. [Portfolio Management](#portfolio-management)
6. [Economics](#economics)
7. [Quantitative Methods](#quantitative-methods)
8. [Alternatives](#alternatives)
9. [Ethics](#ethics)

---

## Fixed Income / Credit

### Q1 — Credit Migration Expected Return

**Full Vignette Context:**
Mark Jackson is a credit portfolio manager reviewing several positions. He holds an A-rated bond issued by Don Vallejo, a large US tequila producer. The bond has a YTM of 1.0% and a modified duration of 4.5. He computes its expected 1-year total return under a credit rating migration scenario based on:

- 1-year credit transition matrix (probabilities for A-rated bond)
- Expected credit spread changes for each migration

**Transition Matrix (Row A):**
| To Rating | Probability |
|-----------|-------------|
| AAA | 2% |
| AA | 3% |
| A | 88% |
| BBB | 2% |
| BB | 2% |
| B | 2% |
| CCC | 1% |

**Expected Spread Changes:**
| Rating | Spread Change (bps) |
|--------|---------------------|
| AAA | -50 |
| AA | -30 |
| A | 0 |
| BBB | +40 |
| BB | +60 |
| B | +80 |
| CCC | +150 |

**Question:**
The expected 1-year total return for the Don Vallejo A-rated bond under Jackson's credit migration scenario is closest to:

A. –0.14%
B. 0.86%
C. 0.95%

**Your Answer:** A (–0.14%)

**Correct Answer:** B (0.86%)

**Full Explanation:**
The expected total return is the sum of the YTM and the expected percentage change in bond value.

Step 1: Calculate price return for each migration using: Price Return = –Duration × Spread Change

| Migration | Calculation | Price Return |
|-----------|-------------|--------------|
| A → AAA | –4.5 × –0.50% | +2.25% |
| A → AA | –4.5 × –0.30% | +1.35% |
| A → A | –4.5 × 0% | 0% |
| A → BBB | –4.5 × +0.40% | –1.80% |
| A → BB | –4.5 × +0.60% | –2.70% |
| A → B | –4.5 × +0.80% | –3.60% |
| A → CCC | –4.5 × +1.50% | –6.75% |

Step 2: Probability-weight using ROW A from transition matrix:

Expected Price Return = (2.25% × 0.02) + (1.35% × 0.03) + (0% × 0.88) + (–1.80% × 0.02) + (–2.70% × 0.02) + (–3.60% × 0.02) + (–6.75% × 0.01)
= 0.045% + 0.0405% + 0% – 0.036% – 0.054% – 0.072% – 0.0675%
= **–0.144%**

Step 3: Add YTM to get total return:

**Total Return = –0.144% + 1.0% = 0.856% ≈ 0.86%**

**Why You Got It Wrong:**
You calculated the expected price return correctly (–0.14%) but forgot to add the YTM (1.0%). Choice A is the trap answer for people who forget that total return includes both yield and price change.

**Key Formula:**
> Expected Total Return = YTM + Σ(Probability × –Duration × Spread Change)

**Critical Reminders:**
- Use ROW of current rating from transition matrix for probabilities
- Choice C (0.95%) uses COLUMN instead of ROW — wrong!

---

### Q2 — ABS Credit Analysis Approaches

**Full Vignette Context:**
Jackson performs a credit analysis for a commercial ABS collateralized by short-term loans to small US retailers. He notes that the loan pool is granular and homogeneous. Jackson considers three approaches: loan-by-loan, portfolio-based, or statistics-based.

**Question:**
The most suitable approach for the credit analysis of the commercial ABS is:

A. Loan-by-loan
B. Portfolio-based
C. Statistics-based

**Your Answer:** B (Portfolio-based)

**Correct Answer:** C (Statistics-based)

**Full Explanation:**
The question gives three key characteristics:
1. **Short-term** loans — pool is fairly static, not dynamic
2. **Granular** — many small loans
3. **Homogeneous** — loans are similar to each other

| Pool Characteristics | Approach | When to Use |
|---------------------|----------|-------------|
| Small + Heterogeneous | Loan-by-loan | Few loans, each unique — worth analyzing individually |
| Medium-term + Dynamic | Portfolio-based | Pool changes over time, loans added/removed |
| Short-term + Granular + Homogeneous | **Statistics-based** | Many similar loans, aggregate stats are meaningful |

**Why You Got It Wrong:**
Portfolio-based would be correct if the pool were medium-term and dynamic (changing composition). But "short-term" means the pool is fairly static, and "granular + homogeneous" means individual loan analysis isn't necessary — pool-level statistics suffice.

**Why Each Answer:**
- A (Loan-by-loan): Incorrect — too time-consuming for granular, homogeneous pool
- B (Portfolio-based): Incorrect — this is for dynamic pools that change over time
- C (Statistics-based): Correct — pool statistics suffice for short-term, granular, homogeneous assets

---

### Q3 — CDS Cheapest-to-Deliver

**Full Vignette Context:**
Jackson owns $20 million face value of Bond X issued by Electric Motors, Incorporated. Jackson recently bought protection using a $20 million notional CDS on Electric Motors. Two bonds can be delivered to settle the CDS upon a credit event: Bond X and Bond Y.

Electric Motors declares bankruptcy, triggering a credit event. Upon default:
- Bond X trades at 40% of face value
- Bond Y trades at 35% of face value

**Question:**
At settlement of the Electric Motors CDS, the total proceeds from Jackson's Bond X and CDS positions are:

A. $19 million
B. $20 million
C. $21 million

**Your Answer:** B ($20 million)

**Correct Answer:** C ($21 million)

**Full Explanation:**

Jackson's position:
- Owns Bond X ($20M face value)
- Bought CDS protection ($20M notional)

Upon default:

**Step 1: Value of Bond X position**
> $20M × 40% = $8 million

**Step 2: CDS payoff (based on cheapest-to-deliver)**
The CDS payoff is based on the cheapest-to-deliver bond, which is the bond with the LOWEST market value (highest loss).

- Bond X: 40% of par → Loss = 60%
- Bond Y: 35% of par → Loss = 65% ← **CTD (lower price = higher loss)**

> CDS Payoff = Notional × (1 – Recovery Rate of CTD)
> CDS Payoff = $20M × (1 – 35%) = $20M × 65% = $13 million

**Step 3: Total proceeds**
> $8M + $13M = **$21 million**

**Why You Got It Wrong:**
You used Bond X's recovery rate (40%) for the CDS payoff instead of the CTD Bond Y's recovery rate (35%). Answer B ($20M) results from:
- Bond X: $20M × 40% = $8M
- CDS (using wrong bond): $20M × 60% = $12M
- Total: $8M + $12M = $20M ← Incorrect

**Key Concept:**
The protection buyer benefits from delivering (or referencing) the cheapest-to-deliver bond because a lower recovery rate means a higher CDS payoff. Even though Jackson owns Bond X, the CDS payoff is calculated using the CTD bond.

---

### Q21 — Net Stable Funding Ratio (NSFR)

**Full Vignette Context:**
An analyst is evaluating a bank's liquidity position using regulatory ratios including the Net Stable Funding Ratio.

**Question:**
Which of the following would most likely increase a bank's NSFR?

**Your Answer:** [Selected wrong component]

**Correct Answer:** Increase in long-term debt

**Full Explanation:**

**NSFR Formula:**
> NSFR = Available Stable Funding (ASF) / Required Stable Funding (RSF)

**Numerator (Available Stable Funding):**
- Tier 1 and Tier 2 capital
- Long-term debt (> 1 year)
- Stable retail deposits

**Denominator (Required Stable Funding):**
- Loans and advances
- Illiquid assets
- Off-balance sheet exposures

| Action | Effect on NSFR |
|--------|----------------|
| Increase long-term debt | ↑ ASF → Higher NSFR |
| Increase loans | ↑ RSF → Lower NSFR |
| Increase stable deposits | ↑ ASF → Higher NSFR |
| Sell illiquid assets | ↓ RSF → Higher NSFR |

---

### Q34 — Rolling Down the Yield Curve

**Full Vignette Context:**
Michael Eng manages institutional client portfolios of US Treasury securities. He expects that spot rates one year from now will be the same as they are today. Eng implements a strategy of rolling down the yield curve.

**Given:**
| Spot Rate | 1-year Implied Forward Rate |
|-----------|----------------------------|
| r(1) = 0.75% | f(0,1) = 0.75% |
| r(2) = 1.20% | f(1,1) = 1.65% |
| r(3) = 1.45% | f(2,1) = 1.95% |
| r(4) = 1.65% | f(3,1) = 2.25% |

**Question:**
Given Eng's expectation for spot rates, the first-year return on a 3-year zero-coupon bond is closest to:

A. 0.75%
B. 1.45%
C. 1.95%

**Your Answer:** A (0.75%)

**Correct Answer:** C (1.95%)

**Full Explanation:**

If Eng expects the spot curve to remain unchanged, a 3-year zero-coupon bond will "roll down" to become a 2-year bond after one year.

**Mathematical Proof:**

Price today (3-year zero):
> P₀ = 1 / (1.0145)³ = 0.957732

Price in 1 year (now a 2-year zero, if spot curve unchanged):
> P₁ = 1 / (1.0120)² = 0.976425

First-year return:
> Return = (0.976425 / 0.957732) – 1 = 1.95%

This equals **f(2,1) = 1.95%** — the 1-year forward rate starting in year 2.

**Why You Got It Wrong:**
You selected the 1-year spot rate (0.75%), which would be the return on a 1-year bond, not a 3-year bond rolling down.

**Key Concept:**
> When the yield curve is unchanged, a bond's return equals the forward rate for that period.

| Bond Maturity | Held for 1 Year | Return Equals |
|---------------|-----------------|---------------|
| 3-year | Becomes 2-year | f(2,1) |
| 4-year | Becomes 3-year | f(3,1) |

---

### Q35 — Yield Curve Theories

**Full Vignette Context:**
Client 1 restricts Eng to buy only bonds with maturities of three years or less. Even though Eng expects the return of 5-year maturity bonds to be superior to that of 3-year maturity bonds, he continues to invest in 3-year maturities for Client 1's portfolio.

**Question:**
Client 1's restriction regarding the securities Eng can purchase is most consistent with the assumptions underlying the:

A. Preferred habitat theory
B. Liquidity preference theory
C. Segmented markets theory

**Your Answer:** A (Preferred habitat theory)

**Correct Answer:** C (Segmented markets theory)

**Full Explanation:**

| Theory | Key Assumption | Will Investor Deviate? |
|--------|----------------|------------------------|
| **Segmented Markets** | Investors are unwilling OR unable to invest outside their preferred maturity | **NO** — cannot deviate regardless of returns |
| **Preferred Habitat** | Investors have preferred maturities but WILL deviate for sufficient premium | **YES** — will leave for enough extra return |
| **Liquidity Preference** | Investors demand premium for longer maturities due to interest rate risk | N/A — about risk premium, not restrictions |

**Why You Got It Wrong:**
Preferred habitat says investors WILL leave their preferred maturity for sufficient returns. But Client 1 has a hard restriction — Eng CANNOT buy 5-year bonds even though he expects superior returns. This absolute restriction (unable to deviate) is segmented markets, not preferred habitat.

**Key Distinction:**
- **Preferred Habitat:** "I prefer short-term, but I'll go long if you pay me enough"
- **Segmented Markets:** "I can ONLY invest in short-term, period"

---

## Financial Statement Analysis

### Q6 — Current Rate Method Translation

**Full Vignette Context:**
Serrana Romano analyzes Celeste S.A., a Uruguayan corporation reporting under IFRS. Celeste has a subsidiary Salto Corp. in the US.

Celeste translates Salto's financial statements using the **current rate method**. In the most recent year:
- Salto's revenue: USD 120 million
- Salto's cost of sales: USD 65 million
- Average exchange rate: 43.26 UYU/USD
- Average rate for inventory purchases: 42.81 UYU/USD

**Question:**
Salto's contribution to Celeste's consolidated gross profit (in UYU millions) is closest to:

A. 2,379
B. 2,409
C. 2,455

**Your Answer:** B (2,409)

**Correct Answer:** A (2,379)

**Full Explanation:**

Under the **current rate method**, ALL income statement items (including COGS) are translated at the **average rate**:

> Gross Profit = (Revenue – COGS) × Average Rate
> Gross Profit = (USD 120M – USD 65M) × 43.26
> Gross Profit = USD 55M × 43.26 = **UYU 2,379.3M**

**Why You Got It Wrong:**
You used the historical rate (42.81) for COGS, which is the **temporal method** treatment:

> Temporal method: Revenue × Average – COGS × Historical
> = (120M × 43.26) – (65M × 42.81) = 5,191.2 – 2,782.65 = 2,408.55 ≈ 2,409 ← Wrong method

**Translation Method Summary:**
| Item | Current Rate Method | Temporal Method |
|------|--------------------|-----------------| 
| Revenue | Average rate | Average rate |
| COGS | **Average rate** | **Historical rate** |
| Depreciation | Average rate | Historical rate |
| Assets/Liabilities | Current rate | Varies by type |

---

### Q8 — Hyperinflation Translation (IFRS)

**Full Vignette Context:**
Celeste has recently acquired a new subsidiary that operates in a country with a highly inflationary economy. In compliance with IFRS, the subsidiary prepares financial statements restated for inflation in the local currency. Romano evaluates the translation method.

**Question:**
Is Romano correct about the method that Celeste should use to translate the new subsidiary's financial statements?

A. Yes
B. No, because Celeste should use the temporal method
C. No, because Celeste should use the average exchange rate for the income statement

**Your Answer:** C (Use average rate for I/S)

**Correct Answer:** A (Yes — use current rate for everything)

**Full Explanation:**

**IFRS Hyperinflation — Two-Step Process:**

**Step 1:** Restate local currency financial statements for inflation using IAS 29 procedures

**Step 2:** Translate ALL items (both balance sheet AND income statement) at the **current end-of-period exchange rate**

| Item | Translation Rate |
|------|------------------|
| All balance sheet items | Current rate |
| All income statement items | **Current rate** (NOT average) |

**Why You Got It Wrong:**
Under normal current rate method, the income statement uses average rate. But after hyperinflation restatement, everything is already in current purchasing power terms, so using average rate would distort the numbers. Everything uses the current rate.

**Contrast with US GAAP:**
US GAAP doesn't use this two-step process. Instead, for hyperinflationary subsidiaries, just use the **temporal method** (treat parent's currency as functional currency).

| Standard | Hyperinflation Treatment |
|----------|--------------------------|
| IFRS | Restate for inflation → Translate all at current rate |
| US GAAP | Use temporal method |

---

### Q22 — Stock-Based Compensation Tax Effects

**Full Vignette Context:**
An analyst is evaluating a company's stock-based compensation and its tax effects. The company's stock price at vest date exceeds the grant-date stock price.

**Question:**
The excess tax benefit from stock-based compensation most likely results in:

**Your Answer:** [Selected wrong effect]

**Correct Answer:** Decreases income tax expense

**Full Explanation:**

**Tax Deduction vs Book Expense:**
- **Book expense:** Based on grant-date fair value
- **Tax deduction:** Based on intrinsic value at exercise/vest (market price – strike price)

**When market price at vest > grant-date price:**
> Tax deduction > Book expense
> This creates an **EXCESS tax benefit**
> **Decreases tax expense** (tax windfall)

**When market price at vest < grant-date price:**
> Tax deduction < Book expense
> This creates a **tax shortfall**
> **Increases tax expense**

**Example:**
- Grant-date stock price: $50 (book expense basis)
- Vest-date stock price: $70 (tax deduction basis)
- Tax deduction ($70) > Book expense ($50)
- Excess = $20 × tax rate = tax benefit → reduces tax expense

---

### Q23 — DB Pension Expense (US GAAP)

**Full Vignette Context:**
An analyst is calculating pension expense for a company reporting under US GAAP.

Given:
- Current service cost: $200
- Interest cost on obligation: $2,940 (= 7% × $42,000 beginning obligation)
- Expected return on plan assets: $3,120 (= 8% × $39,000 beginning assets)
- Actual return on plan assets: $2,700

**Question:**
Under US GAAP, the pension expense recognized in profit or loss is closest to:

**Your Answer:** [Used actual return instead of expected return]

**Correct Answer:** $20 (= 200 + 2,940 – 3,120)

**Full Explanation:**

**US GAAP Pension Expense (P&L):**
> Current Service Cost + Interest Cost – **Expected** Return on Plan Assets + Amortizations

**Calculation:**
> $200 + $2,940 – $3,120 = **$20**

**Why You Got It Wrong:**
You likely used the actual return ($2,700) instead of the expected return ($3,120):
> Wrong: $200 + $2,940 – $2,700 = $440

**Critical Distinction — GAAP vs IFRS:**

| Component | US GAAP | IFRS |
|-----------|---------|------|
| Service Cost | P&L | P&L |
| Interest on Obligation | P&L (gross) | Combined as "Net Interest" |
| Return on Assets | P&L (**Expected** return) | Combined in Net Interest (uses **discount rate**) |
| Actual vs Expected Difference | OCI (with corridor amortization) | OCI (no amortization) |

**US GAAP uses management's expected return rate, which can differ from the discount rate.**

---

### Q24 — Full vs Partial Goodwill

**Full Vignette Context:**
Apex recently announced that it will purchase an 80% interest in Beast Electronics for $24 million and will gain control over Beast. Apex reports under US GAAP.

Given:
- Purchase price for 80%: $24 million
- Fair value of Beast's identifiable net assets: $25 million
- Fair value of entire Beast company: $30 million

**Question:**
As a result of its purchase of Beast, Apex should recognize goodwill of:

A. $4 million
B. $5 million
C. $6 million

**Your Answer:** A ($4 million)

**Correct Answer:** B ($5 million)

**Full Explanation:**

**US GAAP requires the FULL GOODWILL method:**

> Full Goodwill = Fair Value of Entire Entity – Fair Value of Identifiable Net Assets
> Full Goodwill = $30M – $25M = **$5 million**

**What you calculated (Partial Goodwill):**
> Partial Goodwill = Consideration Paid – (% Acquired × FV of Net Assets)
> Partial Goodwill = $24M – (80% × $25M) = $24M – $20M = $4M ← **Not allowed under US GAAP**

| Standard | Method Allowed | Formula |
|----------|----------------|---------|
| **US GAAP** | **Full only** | FV of entity – FV of net assets |
| **IFRS** | Choice of full or partial | Either formula |

**Why It Matters:**
Full goodwill recognizes goodwill attributable to BOTH the parent (80%) AND the noncontrolling interest (20%). Partial goodwill only recognizes the parent's share.

---

## Equity Valuation

### Q5 — Forward vs Trailing P/E

**Full Vignette Context:**
An analyst observes that a company's forward P/E ratio is lower than its trailing P/E ratio.

**Question:**
The relationship between forward and trailing P/E most likely indicates that:

**Your Answer:** [Incorrect interpretation]

**Correct Answer:** Earnings are expected to RISE

**Full Explanation:**

**P/E = Price / EPS**

| Ratio | Denominator |
|-------|-------------|
| Trailing P/E | Past 12 months EPS |
| Forward P/E | Next 12 months expected EPS |

**If Forward P/E < Trailing P/E:**
> Forward denominator (expected EPS) > Trailing denominator (past EPS)
> **Earnings are RISING**

**If Forward P/E > Trailing P/E:**
> Forward denominator (expected EPS) < Trailing denominator (past EPS)
> **Earnings are FALLING**

**Memory Trick:**
> "Lower forward P/E = Higher expected earnings = Good news"

---

### Q10 — Target Payout Adjustment Model

**Full Vignette Context:**
An analyst uses the target payout adjustment model to forecast dividends.

Given:
- Previous dividend: $2.00
- Expected EPS: $5.00
- Target payout ratio: 50%
- Adjustment factor: 0.25 (adjusts over 4 years)

**Question:**
The expected dividend increase is closest to:

**Your Answer:** [Calculation error]

**Correct Answer:** Use the formula iteratively

**Full Explanation:**

**Target Payout Adjustment Model Formula:**
> Expected Dividend Increase = (Expected EPS × Target Payout – Previous Dividend) × Adjustment Factor

**Calculation:**
> Target Dividend = $5.00 × 50% = $2.50
> Gap = $2.50 – $2.00 = $0.50
> Expected Increase = $0.50 × 0.25 = **$0.125**
> New Dividend = $2.00 + $0.125 = **$2.125**

**Key Points:**
- Adjustment factor = 1 / Number of years to reach target
- Companies don't jump immediately to target — they adjust gradually
- Calculate year by year for multi-year forecasts

---

### Q27 — Residual Income Persistence

**Full Vignette Context:**
An analyst is evaluating a company's residual income sustainability. The preliminary report uses a persistence factor of 0.12, one-quarter of the industry average of 0.48.

**Question:**
Relative to the industry, the persistence factor used in the preliminary report on PrimaNet is most consistent with the firm having:

A. Lower levels of dividend payouts
B. Lower levels of accounting returns
C. Higher levels of accounting accruals

**Your Answer:** B (Lower levels of accounting returns)

**Correct Answer:** C (Higher levels of accounting accruals)

**Full Explanation:**

**What causes LOWER persistence (ω closer to 0)?**
| Factor | Effect on Persistence |
|--------|----------------------|
| High dividend payout | ↓ Lower |
| **Extreme** ROE (very high or very low) | ↓ Lower |
| **High** accounting accruals | ↓ Lower |

**What causes HIGHER persistence (ω closer to 1)?**
| Factor | Effect on Persistence |
|--------|----------------------|
| Low dividend payout | ↑ Higher |
| Moderate/normal ROE | ↑ Higher |
| Low accounting accruals | ↑ Higher |

**Why You Got It Wrong:**
"Lower levels of accounting returns" (low ROE) would actually suggest MORE persistence, not less. It's **EXTREME** levels of ROE (either very high or very low) that reduce persistence because extreme ROE tends to mean-revert.

High accruals suggest lower earnings quality and less sustainable residual income — hence lower persistence.

---

### Q28 — Finite-Horizon Residual Income Model

**Full Vignette Context:**
An analyst uses a finite-horizon multistage residual income model to value PrimaNet.

Given:
- Current book value per share: €18.50
- PV of residual income Year 1: €2.25
- PV of residual income Year 2: €2.00
- Forecasted book value at end of Year 2: €23.75
- Forecasted market price at end of Year 2: €26.50
- Cost of equity: 12.8%
- WACC: 6.5%

**Question:**
Based on the finite-horizon multistage residual income model, PrimaNet's intrinsic value per share is closest to:

A. €24.91
B. €25.17
C. €25.50

**Your Answer:** B (€25.17)

**Correct Answer:** A (€24.91)

**Full Explanation:**

**Finite-Horizon RI Model:**
> V₀ = B₀ + Σ PV(RI) + PV(Terminal Premium)

**Terminal Premium = Market Price – Book Value at Horizon**
> Premium = €26.50 – €23.75 = €2.75

**Discount at cost of equity (NOT WACC):**
> PV of Premium = €2.75 / (1.128)² = €2.75 / 1.272 = **€2.16**

**Total Value:**
> V₀ = €18.50 + €2.25 + €2.00 + €2.16 = **€24.91**

**Why You Got It Wrong:**
You used WACC (6.5%) instead of cost of equity (12.8%) to discount the terminal premium:
> Wrong: €2.75 / (1.065)² = €2.75 / 1.134 = €2.42
> Wrong total: €18.50 + €2.25 + €2.00 + €2.42 = €25.17

**Key Rule:**
> For equity valuation models (including RI), discount at **cost of equity**, not WACC.

---

### Q31 — Two-Stage FCFE Valuation

**Full Vignette Context:**
An analyst uses a two-stage FCFE model to value a company's equity. The first stage involves high growth, and the second stage is a terminal value.

**Question:**
Calculate the equity value using the two-stage FCFE model.

**Your Answer:** [Discounting error]

**Correct Answer:** Properly discount terminal value back to today

**Full Explanation:**

**Two-Stage FCFE Model:**
> Value = Σ PV(FCFE during high growth) + PV(Terminal Value)

**Critical Points:**
1. Terminal Value is calculated at the END of the high growth period
2. Terminal Value must be discounted back to TODAY
3. Use **cost of equity** for FCFE (not WACC — that's for FCFF)

**Common Errors:**
- Forgetting to discount terminal value back additional years
- Using WACC instead of cost of equity
- Calculating terminal value at wrong point in time

---

## Derivatives

### Q2 — Putable Bond Binomial Valuation

**Full Vignette Context:**
Julie Wu considers an American-style put option on Wilbo Corporation that matures in two years. She values it with a two-period binomial model.

Given:
- Current share price: $100
- Exercise price: $98
- Risk-free rate: 5% (annual)
- Risk-neutral probability: 0.625
- Up factor: 1.20, Down factor: 0.80
- Stock prices at T=1: S+ = $120, S- = $80
- Stock prices at T=2: S++ = $144, S+- = $96, S-- = $64

**Question:**
Using the two-period binomial option pricing model, the value of the American put on Wilbo Corporation is closest to:

A. $5.19
B. $6.85
C. $12.90

**Your Answer:** A ($5.19) — the European put value

**Correct Answer:** B ($6.85)

**Full Explanation:**

**Step 1: Calculate put values at T=2**
| Node | Stock Price | Put Value (max[0, X-S]) |
|------|-------------|-------------------------|
| S++ | $144 | max[0, 98-144] = $0 |
| S+- | $96 | max[0, 98-96] = $2 |
| S-- | $64 | max[0, 98-64] = $34 |

**Step 2: Calculate continuation values at T=1**

At S+ = $120:
> Continuation = [0.625(0) + 0.375(2)] / 1.05 = $0.7143
> Exercise value = max[0, 98-120] = $0
> Value at node = max[$0.7143, $0] = **$0.7143** (don't exercise)

At S- = $80:
> Continuation = [0.625(2) + 0.375(34)] / 1.05 = $13.3333
> Exercise value = max[0, 98-80] = **$18**
> Value at node = max[$13.3333, $18] = **$18** (EXERCISE EARLY!)

**Step 3: Calculate value at T=0**
> V₀ = [0.625(0.7143) + 0.375(18)] / 1.05
> V₀ = [0.446 + 6.75] / 1.05 = 7.196 / 1.05 = **$6.85**

**Why You Got It Wrong:**
You calculated the European put value ($5.19), which doesn't consider early exercise. At the down node (S- = $80), it's optimal to exercise early because $18 > $13.33.

**Key Concept:**
For American options, at EACH node compare:
- Continuation value (PV of expected future values)
- Exercise value (intrinsic value)

Take the HIGHER of the two.

---

### Q18 — Covered Interest Rate Parity Forward

**Full Vignette Context:**
Bernard calculates the 6-month forward USD/NZD rate implied by covered interest rate parity.

Given:
- 6-month annualized MRR in US: 0.50%
- 6-month annualized MRR in New Zealand: 1.00%
- Spot USD/NZD: 0.6808

**Question:**
Based on covered interest rate parity, the 6-month forward USD/NZD exchange rate is closest to:

A. 0.6774
B. 0.6791
C. 0.6825

**Your Answer:** A (0.6774)

**Correct Answer:** B (0.6791)

**Full Explanation:**

**CIP Forward Formula:**
> F = S × (1 + r_price × days/360) / (1 + r_base × days/360)

For USD/NZD:
- USD is the price currency (numerator)
- NZD is the base currency (denominator)

**Critical Step: Adjust annual rates to 6-month rates**
> 6-month US rate = 0.50% / 2 = 0.25%
> 6-month NZ rate = 1.00% / 2 = 0.50%

**Calculation:**
> F = 0.6808 × (1 + 0.0025) / (1 + 0.005)
> F = 0.6808 × (1.0025) / (1.005)
> F = 0.6808 × 0.99751 = **0.6791**

**Why You Got It Wrong:**
You used the full annual rates without dividing by 2:
> Wrong: F = 0.6808 × (1.005) / (1.01) = 0.6774

**Key Rule:**
> Always adjust interest rates to match the forward period!

---

### Q26 — Currency Swap Fixed Rate

**Full Vignette Context:**
An analyst calculates the fixed rate on a currency swap at initiation.

**Question:**
The fixed interest rate on the swap is closest to:

**Your Answer:** [Calculation error with PV factors]

**Correct Answer:** Use correct PV factor formula

**Full Explanation:**

**Swap Fixed Rate Formula:**
> Fixed Rate = (1 – PV_final) / Σ(PV factors) × (1/Accrual period)

**Key Points:**
- Use the PV factor for the FINAL payment date in the numerator
- Sum ALL PV factors in the denominator
- Annualize based on payment frequency

---

### Q28 — Forward Contract Value at Time t

**Full Vignette Context:**
An analyst values an existing forward contract partway through its life.

**Question:**
The value of the forward contract at time t is closest to:

**Your Answer:** [Used wrong time period]

**Correct Answer:** Use time REMAINING for discounting

**Full Explanation:**

**Forward Value Formula:**
> V_t = S_t – F₀ / (1 + r)^(T-t)

Where:
- S_t = spot price at time t
- F₀ = original forward price
- (T-t) = time REMAINING until maturity

**Common Error:**
Using time elapsed instead of time remaining. If a 9-month forward has 3 months remaining, discount for 0.25 years, not 0.5 years.

---

## Portfolio Management

### Q15 — VaR Types

**Full Vignette Context:**
A risk manager is evaluating different VaR measures for portfolio risk assessment.

**Question:**
Which type of VaR measures the change in portfolio VaR from adding or changing a position?

**Your Answer:** [Selected wrong VaR type]

**Correct Answer:** Incremental VaR

**Full Explanation:**

| VaR Type | Definition | Use Case |
|----------|------------|----------|
| **Incremental VaR** | Change in VaR from adding/changing a position | Evaluate impact of trade decisions |
| Marginal VaR | Per-unit change in VaR for small position change | Sensitivity analysis |
| Component VaR | Contribution of position to total portfolio VaR | Risk attribution |
| Conditional VaR (CVaR/ES) | Expected loss given VaR is exceeded | Tail risk measurement |
| Relative VaR | VaR relative to benchmark | Active risk measurement |

**Memory Trick:**
- **Incremental** = "What if I INCREMENT (add/change) this position?"
- **Component** = "What COMPONENT of total risk does this represent?"
- **Conditional** = "What's the expected loss CONDITIONAL on exceeding VaR?"

---

### Q31 — Information Coefficient and Active Weights

**Full Vignette Context:**
Souza uses the fundamental law of active management. He analyzes what actions would result in smaller optimal active weights.

**Question:**
Which of the following would most likely result in Souza's desired change of optimal active weights (smaller weights)?

A. Decrease in both IC and target active risk
B. Increase in IC and decrease in target active risk
C. Decrease in IC and increase in target active risk

**Your Answer:** A

**Correct Answer:** B

**Full Explanation:**

**Optimal Active Weight Relationships:**
| Factor | Effect on Active Weights |
|--------|--------------------------|
| Higher IC (Information Coefficient) | **Smaller** weights |
| Lower IC | Larger weights |
| Higher target active risk | Larger weights |
| **Lower target active risk** | **Smaller** weights |

**Why higher IC → smaller weights?**
When you're more skilled at forecasting (higher IC), you don't need extreme bets to generate alpha. Your forecasts are more reliable, so moderate positions suffice.

**Why lower target risk → smaller weights?**
If you want less active risk, you take smaller deviations from benchmark weights.

**For SMALLER weights, you need:**
> Higher IC AND/OR Lower target active risk

Answer B (Increase IC + Decrease target risk) accomplishes both.

---

### Q32 — Transfer Coefficient

**Full Vignette Context:**
A prospective client has equity portfolio guidelines that restrict the maximum overweights and underweights on industry sectors.

**Question:**
The most likely effect of the prospective client's equity portfolio guidelines is a reduction in:

A. Breadth
B. Transfer coefficient
C. Information coefficient

**Your Answer:** A (Breadth)

**Correct Answer:** B (Transfer coefficient)

**Full Explanation:**

| Component | Definition | Affected by Constraints? |
|-----------|------------|--------------------------|
| IC | Forecasting skill/accuracy | No — skill doesn't change |
| **TC** | Ability to implement forecasts | **Yes — constraints limit implementation** |
| Breadth | Number of independent decisions | No — can still make same number of decisions |

**Transfer Coefficient (TC):**
Measures how well you can translate your forecasts into actual portfolio weights. Constraints on maximum over/underweights directly reduce your ability to implement forecasts, lowering TC.

**Why not Breadth?**
Breadth is the number of independent bets. Weight limits don't reduce how many decisions you make — they limit how much you can act on each decision.

---

## Economics

### Q13 — Neoclassical Steady-State Growth

**Full Vignette Context:**
Podlasky reviews macroeconomic data for Country A:

| Indicator | Country A |
|-----------|-----------|
| Labor force growth | 0.9% |
| Labor cost in total factor cost | 55.2% |
| Labor productivity growth | 3.5% |
| TFP growth | 2.1% |

**Question:**
Based on the neoclassical model, the steady-state growth rate for Country A is closest to:

A. 3.8%
B. 4.7%
C. 5.6%

**Your Answer:** C (5.6%)

**Correct Answer:** B (4.7%)

**Full Explanation:**

**Neoclassical Steady-State Growth Formula:**
> ΔY/Y = θ/(1-α) + n

Where:
- θ = TFP growth = 2.1%
- (1-α) = Labor's share = 55.2% = 0.552
- n = Labor force growth = 0.9%

**Calculation:**
> ΔY/Y = 2.1% / 0.552 + 0.9%
> ΔY/Y = 3.804% + 0.9%
> ΔY/Y = **4.7%**

**Why You Got It Wrong:**
You divided by capital share (1 - 0.552 = 0.448) instead of labor share:
> Wrong: 2.1% / 0.448 + 0.9% = 4.69% + 0.9% = 5.6%

**Common Mistakes:**
| Mistake | Result |
|---------|--------|
| θ + n directly | 3.0% |
| Divide by capital share instead of labor share | 5.6% |
| Forget to add n | 3.8% |

**Remember:** Divide TFP by LABOR share, then ADD labor force growth.

---

### Q20 — Currency Crisis Warning Signs

**Full Vignette Context:**
Bernard is concerned about a currency crisis in Country B. She notes:

- Condition 1: Slight decline of foreign investment in equity market
- Condition 2: Broad money growth and decline in M2/bank reserves ratio
- Condition 3: Sizable decline in FX reserves relative to daily turnover

**Question:**
Which condition is most likely a warning sign of a currency crisis?

A. Condition 1
B. Condition 2
C. Condition 3

**Your Answer:** B (Condition 2)

**Correct Answer:** C (Condition 3)

**Full Explanation:**

**Currency Crisis Warning Signs:**
| Indicator | Warning Sign | Country B |
|-----------|--------------|-----------|
| Foreign investment | Large INFLOWS precede crisis | Slight decline — NOT a warning |
| M2/Bank reserves | RISING ratio | Declining — NOT a warning |
| **FX reserves** | **Declining precipitously** | **Sizable decline — WARNING!** |

**Why Condition 2 is wrong:**
Studies show M2/bank reserves ratio tends to **RISE** before a crisis (indicating monetary expansion), not decline. Country B shows a decline, which is actually the opposite of a warning sign.

**Why Condition 3 is correct:**
Declining FX reserves (especially relative to daily FX turnover) is a classic warning sign. It indicates the central bank is burning through reserves to defend the currency.

---

## Quantitative Methods

### Q37 — Cointegration Testing

**Full Vignette Context:**
Silva studies whether private construction spending (PRIV) and public construction spending (PUBL) are cointegrated. She tests three null hypotheses:

- H1: ln(PRIV_t) has a unit root
- H2: ln(PUBL_t) has a unit root
- H3: Error term of regression between ln(PRIV_t) and ln(PUBL_t) has a unit root

**Question:**
The time series ln(PRIV_t) and ln(PUBL_t) are cointegrated if the tests performed by Silva:

A. Reject only Null Hypothesis 3
B. Reject all three null hypotheses
C. Fail to reject all three null hypotheses

**Your Answer:** C (Fail to reject all three)

**Correct Answer:** A (Reject only H3)

**Full Explanation:**

**Cointegration Requirements:**
| Hypothesis | Required Result | Why |
|------------|-----------------|-----|
| H1: Series 1 has unit root | **FAIL to reject** | Series 1 must be non-stationary (has unit root) |
| H2: Series 2 has unit root | **FAIL to reject** | Series 2 must be non-stationary (has unit root) |
| H3: Residuals have unit root | **REJECT** | Residuals must be stationary (no unit root) |

**Cointegration means:**
Two non-stationary series that combine to form a stationary series. The individual series wander randomly (have unit roots), but their linear combination is stable (no unit root in residuals).

**Five Possible Scenarios:**
| Scenario | H1 (Series 1) | H2 (Series 2) | H3 (Residuals) | Result |
|----------|---------------|---------------|----------------|--------|
| 1 | Reject | Reject | — | Not cointegrated (both stationary) |
| 2 | Fail | Reject | — | Not cointegrated |
| 3 | Reject | Fail | — | Not cointegrated |
| **4** | **Fail** | **Fail** | **Reject** | **COINTEGRATED** |
| 5 | Fail | Fail | Fail | Not cointegrated |

---

### Q39 — ARCH Testing

**Full Vignette Context:**
Silva estimates an AR(1) model for public construction spending. She calculates residuals (ε) and squared residuals (ε²) and runs two regressions:

- Residual Regression 1: ε_t = a₀ + a₁ε_{t-1} + u_t → t-stat for a₁ = 0.70
- Residual Regression 2: ε²_t = a₀ + a₁ε²_{t-1} + u_t → t-stat for a₁ = 2.94

Critical value: 1.97

**Question:**
Do the estimates indicate the AR(1) model is misspecified?

A. No
B. Yes, because there is evidence of significant serial correlation
C. Yes, because there is evidence of ARCH

**Your Answer:** A (No)

**Correct Answer:** C (Yes, ARCH)

**Full Explanation:**

**Two Different Tests:**

| Regression | What it Tests | t-stat | Critical | Result |
|------------|---------------|--------|----------|--------|
| Regression 1 (ε on lagged ε) | Serial correlation | 0.70 | 1.97 | NOT significant |
| **Regression 2 (ε² on lagged ε²)** | **ARCH** | **2.94** | 1.97 | **SIGNIFICANT** |

**ARCH Test (Engle):**
Regress squared residuals on lagged squared residuals. If the coefficient is significant, the model exhibits Autoregressive Conditional Heteroskedasticity — the variance of errors is not constant.

> 2.94 > 1.97 → Reject null → ARCH is present → Model is misspecified

**Why You Got It Wrong:**
You may have only looked at Regression 1 (serial correlation test) which showed no problem. But Regression 2 (ARCH test) shows significant conditional heteroskedasticity.

---

### Q40 — Feature Selection (Machine Learning)

**Full Vignette Context:**
Silva develops a sentiment indicator using text data from real estate listings. After preparing the data, she performs feature selection to remove noise features and select tokens that occur more often in a particular class.

**Question:**
To perform feature selection, Silva should select tokens with the:

A. Lowest term frequency (TF)
B. Highest mutual information (MI)
C. Highest document frequency (DF)

**Your Answer:** C (Highest DF)

**Correct Answer:** B (Highest MI)

**Full Explanation:**

| Measure | Definition | Action |
|---------|------------|--------|
| High TF | Token appears frequently in a document | **Remove** — likely stop words |
| High DF | Token appears in many documents | **Remove** — no discriminating power |
| **High MI** | Token strongly associated with one class | **KEEP** — good classifier |
| Low TF/DF | Token is rare | **Remove** — noise/overfitting risk |

**Mutual Information (MI):**
Measures how much a token contributes to classifying text into categories.
- MI = 0: Token is equally distributed across all classes (useless)
- MI → 1: Token appears mostly in one specific class (valuable)

**Why You Got It Wrong:**
High document frequency means the token appears everywhere — it has no discriminating power. "The" appears in every document but tells you nothing about the class.

---

## Alternatives

### Q42 — Commodity Futures Total Return

**Full Vignette Context:**
An analyst calculates the total return on a commodity futures position.

**Question:**
The total return on the commodity futures investment is closest to:

**Your Answer:** [Missing return components]

**Correct Answer:** Include all three components

**Full Explanation:**

**Commodity Futures Total Return:**
> Total Return = Price Return + Roll Return + Collateral Return

| Component | Formula | Description |
|-----------|---------|-------------|
| **Price Return** | (Spot_end – Spot_begin) / Spot_begin | Change in spot price |
| **Roll Return** | (Near price – Far price) / Near price | Gain/loss from rolling contracts |
| **Collateral Return** | Risk-free rate × (Period/12) | Interest on margin/collateral |

**Roll Return:**
- **Backwardation** (near > far): Positive roll return
- **Contango** (near < far): Negative roll return

**Example:**
- Price return: +5%
- Roll return: +2% (backwardation)
- Collateral return: +1%
- **Total return: 8%**

---

## Ethics

### Q33 — Performance Presentation (Terminated Accounts)

**Full Vignette Context:**
Diana Brown, CFA, is the compliance officer at an investment firm. The firm terminated several accounts during the year and is preparing performance presentations.

**Question:**
Regarding performance presentation for composites that included terminated accounts, Brown most likely:

**Your Answer:** [Incomplete understanding of requirement]

**Correct Answer:** Must disclose the dates accounts were terminated

**Full Explanation:**

**Standard III(D) Performance Presentation:**

Terminated accounts:
- **CAN** be included in composite performance calculations
- **MUST** disclose the **dates** of termination
- Omitting termination dates = **VIOLATION** (even if returns are included)

**Why Dates Matter:**
Without termination dates, the performance could be misleading. Someone might think the composite still includes those accounts, or not understand when/why accounts left.

**Common Mistake:**
Thinking you can just include the returns without any disclosure about when accounts terminated.

---

### Q34 — Fair Dealing (IPO Allocation)

**Full Vignette Context:**
Brown's firm receives a hot IPO allocation. The firm must decide how to allocate shares across client accounts.

**Question:**
To comply with Standard III(B) Fair Dealing, the IPO shares should be allocated:

**Your Answer:** [Excluded certain account types]

**Correct Answer:** Pro-rata to ALL suitable accounts

**Full Explanation:**

**Standard III(B) Fair Dealing — IPO Allocation:**

Must allocate fairly to **ALL** suitable accounts:
- ✓ Discretionary accounts
- ✓ **Non-discretionary accounts** (if client has given prior indication of interest)
- ✓ **Family accounts**
- ✓ Non-family accounts
- ✓ Fee-paying and non-fee-paying accounts (treat equally)

**Violation:**
Excluding any category of accounts (like family or non-discretionary) from a pro-rata allocation.

**Why Non-Discretionary Accounts?**
If the client has expressed interest in IPOs (standing order or prior indication), they should be included. The "non-discretionary" label doesn't exclude them from fair treatment.

---

### Q44 — Priority of Transactions

**Full Vignette Context:**
Michael Denton, CFA, founded WestLedge Financial. He recommends Bio13 to his client Hunter after performing due diligence. Denton also informs Hunter that he plans to buy Bio13 shares in his own personal account but has determined that Bio13 is not suitable for any of his other clients.

Hunter asks Denton to delay purchasing Bio13 shares in Hunter's account for 30 days, at which time his annual bonus will be deposited into the account.

Denton immediately buys shares of Bio13 in his own account, and his purchase temporarily increases the price of the shares. Thirty days later, Denton purchases shares of Bio13 in Hunter's account.

**Question:**
Did Denton comply with the Standards when purchasing Bio13 shares in his personal account?

A. Yes
B. No, he violated the Standard relating to market manipulation
C. No, he violated the Standard relating to priority of transactions

**Your Answer:** C (Violated priority of transactions)

**Correct Answer:** A (Yes, no violation)

**Full Explanation:**

**Standard VI(B) Priority of Transactions:**
> Investment transactions for clients and employers must have priority over investment transactions in which a Member or Candidate is the beneficial owner.

**Why This is NOT a Violation:**

1. **Hunter explicitly requested the delay** — He told Denton to wait 30 days for his bonus to be deposited. The client voluntarily chose not to trade immediately.

2. **Denton did not trade "ahead" of the client** — Front-running requires trading ahead of a client order that exists. Hunter had no standing order; he requested a future purchase.

3. **No client disadvantage** — Denton's personal purchase caused only a temporary price increase. By the time Hunter's trade occurred 30 days later, the price was determined by subsequent market factors, not Denton's earlier trade.

4. **Bio13 not suitable for other clients** — Denton determined Bio13 wasn't suitable for anyone else, so there was no obligation to other clients.

**Key Distinction:**
- **Front-running (violation):** Trading ahead of a pending client order to benefit from anticipated price movement
- **This situation (no violation):** Client voluntarily delayed their trade; no pending order existed

**Why B is Wrong:**
Market manipulation requires intent to mislead market participants. Denton's trade was a legitimate personal investment, and the temporary price impact is normal market mechanics, not manipulation.

---

## Summary by Topic

| Topic | Questions Missed | Priority Level |
|-------|------------------|----------------|
| Fixed Income/Credit | 6 | HIGH |
| FSA | 5 | HIGH |
| Equity | 5 | HIGH |
| Derivatives | 4 | MEDIUM |
| PM | 3 | MEDIUM |
| Economics | 2 | MEDIUM |
| Quant | 3 | MEDIUM |
| Alternatives | 1 | LOW |
| Ethics | 3 | MEDIUM |

---

## Key Formulas to Memorize

**Credit Migration Return:**
> Total Return = YTM + Σ(Probability × –Duration × Spread Change)

**Neoclassical Steady-State Growth:**
> ΔY/Y = θ/(1-α) + n

**CIP Forward Rate:**
> F = S × (1 + r_price × period) / (1 + r_base × period)

**Full Goodwill:**
> Goodwill = FV of Entity – FV of Net Assets

**US GAAP Pension Expense:**
> Service Cost + Interest Cost – Expected Return + Amortizations

**Finite-Horizon RI:**
> V₀ = B₀ + Σ PV(RI) + (P_T – B_T)/(1+r)^T

**Commodity Total Return:**
> Price Return + Roll Return + Collateral Return

