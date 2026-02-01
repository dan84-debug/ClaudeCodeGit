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

### Q1 — Credit Migration Expected Return (Part 1)

**Question:**
A bond has YTM of 1.0% and modified duration of 4.5. Using the transition matrix and expected spread changes, calculate the expected 1-year total return under credit migration.

**Your Answer:** –0.14% (only calculated expected price return)

**Correct Answer:** 0.86%

**Explanation:**
Expected total return = **YTM + Expected Price Return**

You correctly calculated the expected price return of –0.14%, but forgot to add the YTM.

- Expected price return: –0.14%
- YTM: +1.00%
- **Total return: 0.86%**

**Key Formula:**
> Expected Total Return = YTM + Σ(Probability × –Duration × Spread Change)

Use ROW of current rating from transition matrix for probabilities.

---

### Q2 — ABS Credit Analysis Approaches (Part 1)

**Question:**
A commercial ABS is collateralized by short-term loans to small US retailers. The loan pool is granular and homogeneous. Which credit analysis approach is most suitable?

**Your Answer:** Portfolio-based

**Correct Answer:** Statistics-based

**Explanation:**
| Pool Characteristics | Approach |
|---------------------|----------|
| Small + Heterogeneous | Loan-by-loan |
| Medium-term + Dynamic | Portfolio-based |
| Short-term + Granular + Homogeneous | **Statistics-based** |

The key triggers were "short-term," "granular," and "homogeneous" — all pointing to statistics-based.

---

### Q3 — CDS Cheapest-to-Deliver (Part 1)

**Question:**
Jackson holds $20M Bond X and bought $20M notional CDS protection. Upon default, Bond X trades at 40% and Bond Y trades at 35%. What are total proceeds?

**Your Answer:** $20 million

**Correct Answer:** $21 million

**Explanation:**
- Bond X value: $20M × 40% = $8M
- CDS payoff uses **cheapest-to-deliver** (Bond Y at 35%)
- CDS payoff: $20M × (1 – 35%) = $20M × 65% = $13M
- **Total: $8M + $13M = $21M**

**Key Concept:**
CTD = bond with LOWEST market value. Protection buyer benefits from delivering the cheapest bond.

---

### Q21 — Net Stable Funding Ratio (Part 2)

**Question:**
Which of the following is a component of NSFR?

**Your Answer:** [Incorrect option]

**Correct Answer:** [Based on NSFR components]

**Explanation:**
- **Numerator (Available Stable Funding):** Capital, long-term debt, stable deposits
- **Denominator (Required Stable Funding):** Loans, illiquid assets

Increase in long-term debt → higher NSFR
Increase in loans → lower NSFR

---

### Q34 — Rolling Down the Yield Curve (Part 1)

**Question:**
Given Eng's expectation for unchanged spot rates, what is the first-year return on a 3-year zero-coupon bond?

**Your Answer:** 0.75% (the 1-year spot rate)

**Correct Answer:** 1.95%

**Explanation:**
If spot curve is unchanged, the bond "rolls down" to a shorter maturity. The return equals the **forward rate for that period**, not the spot rate.

3-year bond held for 1 year earns **f(2,1) = 1.95%**

**Key Concept:**
> Rolling yield = forward rate for the period, not the current spot rate

---

### Q35 — Yield Curve Theories (Part 1)

**Question:**
Client 1's restriction (buy only bonds ≤3 years) is most consistent with which theory?

**Your Answer:** Preferred habitat theory

**Correct Answer:** Segmented markets theory

**Explanation:**
| Theory | Key Feature |
|--------|-------------|
| Segmented Markets | Investors CANNOT/WILL NOT leave their maturity segment regardless of returns |
| Preferred Habitat | Investors WILL leave for sufficient premium |

Client is restricted and cannot deviate — that's segmented markets, not preferred habitat.

---

## Financial Statement Analysis

### Q6 — Current Rate Method Translation (Part 1)

**Question:**
Salto's revenue was USD 120M and COGS was USD 65M. Average rate = 43.26, historical inventory rate = 42.81. What is translated gross profit using current rate method?

**Your Answer:** 2,409 (used historical rate for COGS)

**Correct Answer:** 2,379

**Explanation:**
Under **current rate method**, BOTH revenue and COGS use the **average rate**:

> Gross Profit = (120M – 65M) × 43.26 = 55M × 43.26 = **2,379**

You used temporal method logic (historical rate for COGS), but the question specified current rate method.

| Method | Revenue | COGS |
|--------|---------|------|
| Current Rate | Average | Average |
| Temporal | Average | Historical |

---

### Q8 — Hyperinflation Translation IFRS (Part 1)

**Question:**
Under IFRS, how should Celeste translate the hyperinflationary subsidiary's financial statements?

**Your Answer:** Use average exchange rate for income statement

**Correct Answer:** Use current exchange rate for income statement

**Explanation:**
IFRS Hyperinflation (Two-Step):
1. Restate for inflation (IAS 29)
2. Translate ALL items at **current end-of-period rate**

After restatement, everything — BS and IS — uses current rate, NOT average.

---

### Q22 — SBC Excess Tax Benefit (Part 2)

**Question:**
What is the impact of excess tax benefit from stock-based compensation on tax expense?

**Your Answer:** [Incorrect]

**Correct Answer:** Decreases tax expense

**Explanation:**
If market price at vest > grant price:
- Tax deduction > Book expense
- **Excess tax benefit → Decreases tax expense**

If market price at vest < grant price:
- Tax deduction < Book expense
- Tax shortfall → Increases tax expense

---

### Q23 — DB Pension Expense US GAAP (Part 2)

**Question:**
Calculate pension expense under US GAAP.

**Your Answer:** [Used actual return instead of expected return]

**Correct Answer:** Service Cost + Interest Cost – Expected Return on Plan Assets

**Explanation:**
**US GAAP Pension Expense:**
> Current Service Cost + Interest Cost – **Expected** Return + Amortizations

**IFRS Pension Expense:**
> Service Cost + Net Interest (uses same discount rate for both)

Key difference: US GAAP uses management's **expected return** (can differ from discount rate), not actual return. Actual vs expected difference goes to OCI.

---

### Q24 — Full vs Partial Goodwill (Part 1)

**Question:**
Apex (US GAAP) acquires 80% of Beast for $24M. FV of Beast's net assets = $25M, FV of entire Beast = $30M. How much goodwill?

**Your Answer:** $4 million (partial goodwill)

**Correct Answer:** $5 million (full goodwill)

**Explanation:**
| Standard | Method |
|----------|--------|
| US GAAP | **Full goodwill only** |
| IFRS | Choice of full or partial |

**Full Goodwill:** $30M – $25M = **$5M**
**Partial Goodwill:** $24M – (80% × $25M) = $4M ← Not allowed under US GAAP

---

## Equity Valuation

### Q5 — Forward vs Trailing P/E (Part 2)

**Question:**
Interpret forward vs trailing P/E relationship.

**Your Answer:** [Incorrect interpretation]

**Correct Answer:**
- Forward P/E < Trailing P/E → Earnings are **RISING**
- Forward P/E > Trailing P/E → Earnings are **FALLING**

**Logic:** Forward uses next year's (higher) expected earnings in denominator → lower ratio.

---

### Q10 — Target Payout Adjustment Model (Part 2)

**Question:**
Calculate expected dividend using target payout adjustment model.

**Your Answer:** [Calculation error]

**Correct Answer:**

**Formula:**
> Expected Div Increase = (Expected EPS × Target Payout – Previous Div) × Adjustment Factor

Where Adjustment Factor = 1 / Number of years to adjust

Calculate year by year iteratively.

---

### Q27 — Residual Income Persistence (Part 1)

**Question:**
Relative to industry, what does a low persistence factor indicate?

**Your Answer:** Lower levels of accounting returns

**Correct Answer:** Higher levels of accounting accruals

**Explanation:**
**Lower persistence (ω → 0) caused by:**
- High dividend payout
- **Extreme** levels of ROE (not low)
- **High** accounting accruals

**Higher persistence (ω → 1) caused by:**
- Low dividend payout
- Normal/moderate ROE
- Low accruals

---

### Q28 — Finite-Horizon Residual Income (Part 1)

**Question:**
Calculate intrinsic value using finite-horizon RI model.

**Your Answer:** $25.17 (used WACC to discount terminal premium)

**Correct Answer:** $24.91

**Formula:**
> V₀ = B₀ + Σ PV(RI) + (P_T – B_T)/(1+r)^T

- Use **cost of equity**, NOT WACC
- Terminal premium = Market price – Book value at horizon

---

### Q31 — Two-Stage FCFE Valuation (Part 2)

**Question:**
Calculate equity value using two-stage FCFE model.

**Your Answer:** [Calculation error with discounting]

**Correct Answer:**

**Key Points:**
- Value = Σ PV(FCFE during high growth) + PV(Terminal Value)
- Terminal Value calculated at END of high growth period
- Discount at **cost of equity** (NOT WACC) for FCFE models
- Make sure to discount Terminal Value back to today

---

## Derivatives

### Q2 — Putable Bond Binomial Valuation (Part 2)

**Question:**
Value an American put option on Wilbo Corporation using two-period binomial model.

**Your Answer:** $5.19 (European put value)

**Correct Answer:** $6.85

**Explanation:**
At each node, compare:
- Continuation value (PV of expected future values)
- Exercise value (X – S)

If exercise value > continuation value → **exercise early**

At T=1 when S = $80:
- Continuation value = $13.33
- Exercise value = $98 – $80 = $18
- $18 > $13.33 → **Exercise!**

Working back: ($0.7143 × 0.625 + $18 × 0.375) / 1.05 = **$6.85**

---

### Q18 — Covered Interest Rate Parity (Part 2)

**Question:**
Calculate 6-month forward USD/NZD rate. Spot = 0.6808, US 6-month rate = 0.50% annual, NZ 6-month rate = 1.00% annual.

**Your Answer:** 0.6774 (used annual rates without adjusting)

**Correct Answer:** 0.6791

**Formula:**
> F = S × (1 + r_price × days/360) / (1 + r_base × days/360)

**For 6-month forward, divide annual rates by 2:**
> F = 0.6808 × (1 + 0.0025) / (1 + 0.005) = **0.6791**

---

### Q26 — Currency Swap Fixed Rate (Part 2)

**Question:**
Calculate the fixed interest rate on a currency swap at initiation.

**Your Answer:** [Calculation error]

**Correct Answer:**

**Formula:**
> Fixed Rate = (1 – PV_final) / Σ(PV factors)

Use PV factor for FINAL payment date in numerator.
Annualize by multiplying by payment frequency.

---

### Q28 — Forward Contract Value at Time t (Part 2)

**Question:**
Calculate the value of a forward contract at time t.

**Your Answer:** [Used wrong time period for discounting]

**Correct Answer:**

**Formula:**
> V_t = S_t – F₀/(1+r)^(T-t)

Use **TIME REMAINING** (T–t), not time elapsed.
If 3 months remain on 9-month forward, discount for 0.25 years.

---

## Portfolio Management

### Q15 — Incremental VaR (Part 2)

**Question:**
Which type of VaR measures the change in portfolio VaR from changing a position size?

**Your Answer:** [Confused with another VaR type]

**Correct Answer:** Incremental VaR

**Definitions:**
| VaR Type | Definition |
|----------|------------|
| **Incremental VaR** | Change in VaR from changing position size |
| Marginal VaR | Per-unit change in VaR for small position change |
| Component VaR | Contribution of a position to total portfolio VaR |
| Conditional VaR | Expected loss given that loss exceeds VaR |

---

### Q31 — Information Coefficient and Active Weights (Part 1)

**Question:**
Which would result in smaller optimal active weights?

**Your Answer:** Decrease in both IC and target active risk

**Correct Answer:** Increase in IC and decrease in target active risk

**Explanation:**
| Factor | Effect on Optimal Active Weights |
|--------|----------------------------------|
| Higher IC | **Smaller** weights (more confident forecasts need less extreme bets) |
| Higher target active risk | **Larger** weights |
| Lower target active risk | **Smaller** weights |

---

### Q32 — Transfer Coefficient (Part 1)

**Question:**
What is the effect of the prospective client's equity portfolio guidelines restricting maximum over/underweights?

**Your Answer:** Reduces breadth

**Correct Answer:** Reduces transfer coefficient

**Explanation:**
- **Breadth** = number of independent decisions (not affected by weight limits)
- **Transfer coefficient** = how well forecasts translate into actual portfolio weights

Constraints on weights reduce your ability to implement forecasts → lower TC.

---

## Economics

### Q13 — Neoclassical Steady-State Growth (Part 1)

**Question:**
Calculate steady-state growth rate. TFP growth = 2.1%, labor share = 55.2%, labor force growth = 0.9%.

**Your Answer:** 5.6% (divided by capital share instead of labor share)

**Correct Answer:** 4.7%

**Formula:**
> ΔY/Y = θ/(1–α) + n

**Calculation:**
> 2.1% / 0.552 + 0.9% = 3.8% + 0.9% = **4.7%**

Common mistakes:
- Adding directly (θ + n = 3.0%) ❌
- Dividing by capital share ❌
- Forgetting to add labor force growth (= 3.8%) ❌

---

### Q20 — Currency Crisis Warning Signs (Part 2)

**Question:**
Which condition is most likely a warning sign of currency crisis?

**Your Answer:** Broad money growth with declining M2/bank reserves ratio

**Correct Answer:** Sizable decline in FX reserves relative to daily turnover

**Warning Signs:**
- **Declining FX reserves** ✓
- Large capital **INFLOWS** (not outflows) preceding crisis
- **RISING** M2/bank reserves ratio

**NOT Warning Signs:**
- Slight decline in foreign equity investment
- Declining M2/reserves ratio

---

## Quantitative Methods

### Q37 — Cointegration Testing (Part 1 & Part 2)

**Question:**
For two time series to be cointegrated, which null hypotheses must be rejected?

**Your Answer:** Fail to reject all three / Reject all three

**Correct Answer:** Reject ONLY the null hypothesis that residuals have a unit root (H3)

**Cointegration Requirements:**
1. **FAIL to reject** H1: Series 1 has unit root (it does have one)
2. **FAIL to reject** H2: Series 2 has unit root (it does have one)
3. **REJECT** H3: Residuals have unit root (residuals are stationary)

Both series non-stationary + their combination is stationary = cointegrated

---

### Q39 — ARCH Testing (Part 1)

**Question:**
Do the residual regression parameters indicate the AR(1) model is misspecified?

**Your Answer:** No

**Correct Answer:** Yes, because there is evidence of ARCH

**ARCH Test:**
Regress **squared residuals** on lagged squared residuals:
> ε²_t = a₀ + a₁ε²_{t-1} + u_t

If a₁ is significant → model has ARCH (conditional heteroskedasticity)

The t-stat for Residual Regression 2 (squared residuals) was 2.94 > 1.97 critical value → ARCH present → model misspecified.

**Note:** Residual Regression 1 (regular residuals) tests serial correlation, which was NOT significant (t=0.70).

---

### Q40 — Mutual Information Feature Selection (Part 1)

**Question:**
For text classification, Silva should select tokens with the:

**Your Answer:** Highest document frequency (DF)

**Correct Answer:** Highest mutual information (MI)

**Explanation:**
| Measure | What to do |
|---------|------------|
| High TF (term frequency) | Remove — noise/stop words |
| High DF (document frequency) | Remove — appears everywhere, no discriminating power |
| **High MI (mutual information)** | **Keep** — discriminates between classes |

MI measures how much a token contributes to classifying text. High MI = token appears mostly in one class.

---

## Alternatives

### Q42 — Commodity Futures Total Return (Part 2)

**Question:**
Calculate the total return on a commodity futures position.

**Your Answer:** [Missing components]

**Correct Answer:**

**Formula:**
> Total Return = Price Return + Roll Return + Collateral Return

| Component | Definition |
|-----------|------------|
| Price Return | Change in spot price |
| Roll Return | Gain/loss from rolling contracts = (Near price – Far price) / Near price |
| Collateral Return | Interest earned on margin = Risk-free rate × (holding period/12) |

Roll return is **positive** in backwardation (near > far), **negative** in contango.

---

## Ethics

### Q33 — Performance Presentation / Terminated Accounts (Part 2)

**Question:**
What are the disclosure requirements for terminated accounts in composite performance?

**Your Answer:** [Incomplete understanding]

**Correct Answer:** Terminated accounts MAY be included in composite performance, but firm MUST disclose the termination **dates**. Omitting dates = violation even if returns are included.

---

### Q34 — Fair Dealing / IPO Allocation (Part 2)

**Question:**
How should IPO shares be allocated across accounts?

**Your Answer:** [Excluded certain account types]

**Correct Answer:** Allocate **pro-rata to ALL suitable accounts**:
- Discretionary accounts ✓
- Non-discretionary accounts ✓
- Family accounts ✓
- Non-family accounts ✓

Excluding non-discretionary or family accounts = violation of Standard III(B) Fair Dealing.

---

### Q44 — Priority of Transactions (Part 1)

**Question:**
Denton buys Bio13 in his personal account immediately. His client Hunter asked to delay purchase for 30 days. Did Denton violate Standard VI(B)?

**Your Answer:** Yes, violated priority of transactions

**Correct Answer:** No violation

**Explanation:**
Standard VI(B) Priority of Transactions requires client trades have priority over personal trades. However:

- Hunter **explicitly requested** the delay
- Denton's purchase caused only **temporary** price impact
- Hunter was **not disadvantaged** — 30 days later, price determined by market factors

No front-running occurred because the client voluntarily delayed.

---

## Summary by Topic

| Topic | Questions Missed | Key Concepts to Review |
|-------|------------------|------------------------|
| Fixed Income/Credit | 6 | Credit migration returns, CTD, ABS approaches, yield curve theories |
| FSA | 5 | Translation methods, hyperinflation, pension accounting, goodwill |
| Equity | 5 | P/E interpretation, RI persistence, multi-stage models |
| Derivatives | 4 | American options, CIP forwards, swap rates |
| PM | 3 | VaR types, fundamental law components |
| Economics | 2 | Steady-state growth, currency crisis |
| Quant | 3 | Cointegration, ARCH, ML feature selection |
| Alternatives | 1 | Commodity futures returns |
| Ethics | 3 | Performance presentation, fair dealing, priority of transactions |

---

## Priority Study Areas

Based on frequency and point value:

1. **FSA** — Translation methods, pension accounting (IFRS vs GAAP)
2. **Fixed Income** — Credit analysis, yield curve strategies
3. **Equity** — Residual income models, multi-stage valuation
4. **Derivatives** — Forward/swap valuation, binomial for American options
5. **Quant** — Cointegration testing, ARCH

