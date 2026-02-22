# CFA Level II Mock Exam 10 — Incorrect Questions Review

**Score: 27/44 (61%)** *(28/44 = 64% including Q26 typo)*
**Date: February 21, 2026**
**Source: 2026 CFA LII Mock 3 Session 2**

---

## Table of Contents

1. [Ethics](#ethics)
2. [Equity Valuation](#equity-valuation)
3. [Financial Statement Analysis](#financial-statement-analysis)
4. [Derivatives](#derivatives)
5. [Portfolio Management](#portfolio-management)
6. [Economics](#economics)
7. [Private Equity / Alternative Investments](#private-equity--alternative-investments)

---

## Ethics

### Q3 — Duty of Loyalty During Notice Period

**Full Vignette Context:**
Alice Chan, CFA is a senior partner at a large investment bank which has adopted the CFA Institute Code of Ethics and Standards of Professional Conduct. Alex Berg is her supervisor.

Chan provides her resignation to Berg, effective in 10 business days. Chan expects to remain at the bank during the notice period to transition her client portfolios and to ensure that she leaves the bank on good terms. However, after reviewing the bank's standard policy for an employee's departure, Chan realizes that she must notify her clients and provide an alternative contact person. Accordingly, on the same day that she submits her resignation notice, Chan contacts all of her clients, informing them of her planned departure and providing Berg's contact information. If clients ask about her departure, Chan informs them she is starting her own firm. **Immediately after contacting her clients, Chan updates her social media profile, which includes personal and professional contacts and information on the product offerings of her new firm.**

**Question:**
With regard to informing her clients of her planned departure and updating her social media profile, did Chan violate the Standards?

A. No
B. Yes, because of the timing of her updating her social media accounts
C. Yes, because of the timing of when she informed clients that she was starting her own firm

**Your Answer:** A (No)

**Correct Answer:** B (Yes, because of the timing of her updating her social media accounts)

**Full Explanation:**

**Standard IV(A) Loyalty to Employer:**
While still employed, members must act for the benefit of their employer and not cause harm to the employer.

**Analysis of Chan's Actions:**

| Action | Violation? | Why |
|--------|-----------|-----|
| Notifying clients of departure | **NO** | Followed employer's policy |
| Telling clients about new firm (if asked) | **NO** | Responding honestly to direct questions |
| **Updating social media with new firm info** | **YES** | Promotes new firm while still employed |

**Why Updating Social Media is a Violation:**
- Chan is still in her notice period (still employed)
- Publicly posting product offerings of her new firm:
  - Promotes her competing business
  - Could cause confusion among clients
  - Is detrimental to current employer
  - Gives her new firm an unfair advantage

**Why A is Wrong:**
The social media update IS a violation. While notifying clients per employer policy is fine, actively promoting a competing firm's products while still employed is not.

**Why C is Wrong:**
Telling clients she's starting her own firm (when asked) is NOT a violation because:
- She followed employer's notification policy
- She was responding honestly to direct questions
- She didn't proactively solicit clients

**Key Principle:**
> During notice period: Follow employer policies, but do NOT actively promote competing business

---

## Equity Valuation

### Q6 — Two-Stage FCFF Valuation

**Full Vignette Context:**
Emily Silva is an equity analyst working at a US-based investment consulting firm. She values the equity of four publicly traded firms.

Silva estimates the intrinsic value of Firm A's equity based on a declining growth two-stage model. The market value of Firm A's debt is $450 million. Firm A's cost of equity is 12%, and its WACC is 10%. Exhibit 2 shows Silva's projections of Firm A's FCFF (in $ millions) for the next three years. Silva assumes that FCFF will grow at a constant annual rate of 3% after Year 3.

**Exhibit 2:**
| Year | Projected FCFF ($ millions) |
|------|----------------------------|
| 1 | 160 |
| 2 | 180 |
| 3 | 190 |

**Question:**
The intrinsic value of Firm A's equity (in $ millions), as estimated by Silva, should be closest to:

A. 1,519
B. 2,087
C. 2,537

**Your Answer:** C (2,537)

**Correct Answer:** B (2,087)

**Full Explanation:**

**Two-Stage FCFF Valuation:**

**Step 1: Calculate PV of Projected FCFF (Years 1-3)**

Use **WACC** (10%) as the discount rate for FCFF:

| Year | FCFF | PV Factor | PV |
|------|------|-----------|-----|
| 1 | $160M | 1/1.10 = 0.9091 | $145.45M |
| 2 | $180M | 1/1.10² = 0.8264 | $148.76M |
| 3 | $190M | 1/1.10³ = 0.7513 | $142.75M |
| **Total** | | | **$436.96M** |

**Step 2: Calculate Terminal Value at End of Year 3**

> FCFF₄ = FCFF₃ × (1 + g) = $190M × 1.03 = $195.7M

> TV₃ = FCFF₄ / (WACC − g) = $195.7M / (0.10 − 0.03) = $195.7M / 0.07 = **$2,795.71M**

**Step 3: Calculate PV of Terminal Value**

> PV(TV₃) = $2,795.71M / (1.10)³ = $2,795.71M / 1.331 = **$2,100.46M**

**Step 4: Calculate Firm Value**

> Firm Value = PV(FCFF) + PV(TV) = $436.96M + $2,100.46M = **$2,537.43M**

**Step 5: Calculate EQUITY Value**

> **Equity Value = Firm Value − Market Value of Debt**
> Equity Value = $2,537.43M − $450M = **$2,087.43M ≈ $2,087M**

**Why You Got It Wrong:**
You calculated the FIRM value ($2,537M) but forgot to **subtract debt** to get EQUITY value.

**Why A is Wrong ($1,519M):**
Answer A uses cost of equity (12%) instead of WACC (10%) to discount FCFF. For FCFF valuation, always use WACC.

**Key Rules:**
| Model | Cash Flow | Discount Rate | Result |
|-------|-----------|---------------|--------|
| FCFF | Free cash flow to firm | **WACC** | Firm value (subtract debt for equity) |
| FCFE | Free cash flow to equity | Cost of equity | Equity value directly |

---

### Q8 — Pairs Trade Valuation Approach

**Full Vignette Context:**
Another client asks Silva to evaluate a pairs trade that involves two publicly traded firms, Firm C and Firm D. Both firms operate in the copper mining industry. They are both profitable and close competitors. In addition to owning copper reserves, both firms manufacture electrical wires. The electrical wire segment comprises approximately one-third of each firm's revenues. For the pairs trade, Silva wants to evaluate which firm to buy and which firm to sell using an appropriate valuation approach.

**Question:**
Which of the following valuation approaches is the most appropriate for Silva to use when evaluating the pairs trade involving Firm C and Firm D?

A. A P/E-based comparables valuation
B. An asset-based valuation adjusted for conglomerate discount
C. A price-to-EBITDA-based comparables valuation adjusted for lack of marketability discount

**Your Answer:** B (Asset-based valuation adjusted for conglomerate discount)

**Correct Answer:** A (A P/E-based comparables valuation)

**Full Explanation:**

**What is a Pairs Trade?**
A pairs trade is a relative value strategy:
- Buy the relatively **undervalued** stock
- Short the relatively **overvalued** stock
- Profit from convergence regardless of market direction

**Valuation Approach Selection:**

| Approach | Appropriate for Pairs Trade? | Why |
|----------|------------------------------|-----|
| **P/E Comparables** | **YES** | Identifies relative mispricing |
| Asset-based | NO | Better for liquidation, not relative value |
| P/EBITDA with DLOM | NO | DLOM applies to private firms, not public |

**Why P/E Comparables is Correct:**
- Pairs trading requires identifying **relative mispricing**
- Both firms are similar (same industry, profitable, close competitors)
- Relative valuation (P/E multiples) directly compares the two firms
- Can identify which is cheap vs expensive relative to fundamentals

**Why B is Wrong (Asset-based + Conglomerate Discount):**
1. **Asset-based approach:** Better for liquidation scenarios, not ongoing operations
2. **Conglomerate discount:** Applies to companies with **unrelated** business segments
   - Firm C and D have related segments (copper mining + electrical wires from copper)
   - Both segments are in the same value chain
   - Not a conglomerate situation

**Why C is Wrong (P/EBITDA + DLOM):**
- **DLOM (Discount for Lack of Marketability):** Applies to **private** firms
- Both Firm C and Firm D are **publicly traded**
- No marketability discount needed for liquid public stocks

**Key Principle:**
> Pairs trade = Relative value strategy → Use relative valuation (comparables)

---

### Q36 — FCFE Coverage Ratio

**Full Vignette Context:**
Emery also covers Etaphi Company. He calculates Etaphi's FCFE coverage ratio using the financial information (in $ millions) in Exhibit 2.

**Exhibit 2:**
| Item | Value ($ millions) |
|------|-------------------|
| Net interest paid | 6 |
| Dividends paid | 76 |
| Share issuance proceeds | 12 |
| FCFE | 89 |

**Question:**
Etaphi's FCFE coverage ratio is closest to:

A. 1.17
B. 1.27
C. 1.39

**Your Answer:** B (1.27)

**Correct Answer:** A (1.17)

**Full Explanation:**

**FCFE Coverage Ratio Formula:**
> FCFE Coverage Ratio = FCFE / (Dividends + Share Repurchases)

**Key Point:** Share ISSUANCE is NOT included — only share REPURCHASES

**Calculation:**
> FCFE Coverage = $89M / $76M = **1.17**

**Why You Got It Wrong (Answer B = 1.27):**
You incorrectly included share issuance proceeds and/or net interest paid:

Wrong calculation:
> Wrong = $89M / ($76M − $12M + $6M) = $89M / $70M = 1.27

**Why C is Wrong (1.39):**
Answer C incorrectly SUBTRACTS share issuance:
> Wrong = $89M / ($76M − $12M) = $89M / $64M = 1.39

**What Goes in the Denominator:**

| Include | Exclude |
|---------|---------|
| Dividends paid | Share issuance proceeds |
| Share repurchases | Net interest paid |
| | Other financing activities |

**Key Rule:**
> FCFE Coverage = FCFE / (Dividends + Repurchases)
> Share ISSUANCE is a source of funds, not a use — don't include it!

---

## Financial Statement Analysis

### Q21 — Foreign Currency Transaction Gain/Loss Timing

**Full Vignette Context:**
Jennifer Lee is analyzing the performance of Belle, a global consumer products company. Belle is located in the eurozone and uses the EUR as its functional and presentation currency. Belle reports under IFRS and has a 31 December year end.

Lee gathers the information about EUR/GBP exchange rates (amount of EUR per 1 GBP) in Exhibit 1.

**Exhibit 1:**
| Date | EUR/GBP Exchange Rate |
|------|----------------------|
| 16 November, most recent year | 1.186 |
| 31 December, most recent year | 1.176 |
| 18 January, current year | 1.193 |

Lee notes that Belle purchased inventory for GBP 500,000 from an unaffiliated UK company on 16 November of the most recent year. The transaction was settled on 18 January of the current year.

**Question:**
As a result of the inventory purchase, Belle should recognize a foreign currency transaction loss of:

A. EUR 8,500 in the current year
B. EUR 5,000 in the most recent year
C. EUR 3,500 in the current year

**Your Answer:** B (EUR 5,000 loss in the most recent year)

**Correct Answer:** A (EUR 8,500 loss in the current year)

**Full Explanation:**

**Timeline of Events:**

| Date | Event | Rate | EUR Amount |
|------|-------|------|------------|
| Nov 16 | Purchase (payable created) | 1.186 | GBP 500K × 1.186 = **EUR 593,000** |
| Dec 31 | Year-end revaluation | 1.176 | GBP 500K × 1.176 = **EUR 588,000** |
| Jan 18 | Settlement (payment) | 1.193 | GBP 500K × 1.193 = **EUR 596,500** |

**Step 1: Most Recent Year (Nov 16 → Dec 31)**
- Payable started at EUR 593,000
- Payable at year-end: EUR 588,000
- Change: EUR 588,000 − EUR 593,000 = **−EUR 5,000**
- GBP weakened → payable decreased → **GAIN of EUR 5,000** (not a loss!)

**Step 2: Current Year (Dec 31 → Jan 18)**
- Payable at start of year: EUR 588,000
- Actual payment: EUR 596,500
- Change: EUR 596,500 − EUR 588,000 = **+EUR 8,500**
- GBP strengthened → paid more → **LOSS of EUR 8,500**

**Why You Got It Wrong:**
You said EUR 5,000 **LOSS** in the most recent year, but:
1. The EUR 5,000 was a **GAIN** (not loss) because the payable decreased
2. The question asks about the **LOSS**, which occurs in the current year

**Summary:**
| Year | Amount | Gain or Loss |
|------|--------|--------------|
| Most recent year | EUR 5,000 | **GAIN** |
| **Current year** | **EUR 8,500** | **LOSS** |

**Why C is Wrong (EUR 3,500 current year):**
EUR 3,500 is the NET loss from transaction date to settlement:
> EUR 596,500 − EUR 593,000 = EUR 3,500 net loss

But this ignores the year-end cutoff. Each year recognizes its own portion.

**Key Principle:**
> Unsettled foreign currency payables/receivables are revalued at each balance sheet date. Gains/losses are recognized in the period they occur.

---

### Q23 — Cumulative Translation Adjustment Location

**Full Vignette Context:**
Belle uses the current rate method to translate its subsidiaries' financial statements. In contrast, Belle's primary competitor uses the temporal method to translate its subsidiaries' financial statements. Lee considers how each company should report its cumulative translation adjustment under the method used.

**Question:**
Belle should report its cumulative translation adjustment as:

A. A component of non-operating income
B. A component of other operating income
C. A separate component of stockholders' equity

**Your Answer:** A (A component of non-operating income)

**Correct Answer:** C (A separate component of stockholders' equity)

**Full Explanation:**

**Translation Adjustment Location by Method:**

| Translation Method | Where Translation Adjustment Goes |
|-------------------|----------------------------------|
| **Current Rate Method** | **Stockholders' Equity (OCI/CTA)** |
| Temporal Method | Income Statement (P&L) |

**Belle uses the Current Rate Method:**
- All assets and liabilities translated at current rate
- Income statement at average rate
- Translation adjustment → **Cumulative Translation Adjustment (CTA)**
- CTA is reported in **stockholders' equity** as part of AOCI

**Why You Got It Wrong:**
You confused translation adjustments (balance sheet) with transaction gains/losses (income statement).

- **Translation adjustment** (Current Rate): Goes to equity
- **Transaction gain/loss** (from settling payables/receivables): Goes to income statement

**Why A and B are Wrong:**
- Both A and B place the adjustment in the income statement
- This would be correct for the **temporal method**, not current rate method
- Also, A and B describe treatment of **transaction** gains/losses, not **translation** adjustments

**Memory Aid:**

| Method | Functional Currency | Translation Adjustment |
|--------|--------------------|-----------------------|
| Current Rate | Local currency | **Equity (CTA)** |
| Temporal | Parent's currency | **Income Statement** |

---

## Derivatives

### Q27 — Greeks: Key Risks for Dealers vs Speculators

**Full Vignette Context:**
Thomas Edel explains to portfolio manager Anton Uder about the effects of unusual option trading volumes on markets. Recently, discussion on a popular social media site promoted heavy purchases of short-term far out-of-the money call options on New Optics Technology stock. Unlike in equities markets where there is a seller for every buyer, option contracts can be created by options dealers selling directly to speculators. They are able to do so by simultaneously delta hedging their own positions.

**Exhibit 1:**
| Information | USD Price |
|-------------|-----------|
| Stock price 2 weeks before expiry | 47 |
| 90 Call price 2 weeks before expiry | 0.15 |
| Delta_c 2 weeks before expiry | 0.057 |
| Stock price 1 week before expiry | 90 |
| Stock price at expiry | 140 |

Edel explains: "Option prices are sensitive to the 'Greeks' — delta, gamma, theta, vega and rho, which are risk measures. The same measure can simultaneously represent different types of risks to different market participants, such as **options dealers** and **speculators**."

**Question:**
The Greek letters representing the greatest risks to the two groups of market participants cited by Uder are most likely:

A. Delta and rho
B. Vega and delta
C. Gamma and theta

**Your Answer:** B (Vega and delta)

**Correct Answer:** C (Gamma and theta)

**Full Explanation:**

**Key Risks by Market Participant:**

| Participant | Primary Risk | Greek | Why |
|-------------|-------------|-------|-----|
| **Options Dealers** | Becoming unhedged | **Gamma** | Large price moves break delta hedge |
| **Speculators (buyers)** | Time decay | **Theta** | Option value erodes as expiry approaches |

**Gamma Risk (Dealers):**
- Dealers delta-hedge by buying stock when selling calls
- Delta changes as stock price moves (gamma effect)
- **Large price moves** cause delta to change rapidly
- Dealers must constantly rebalance, incurring costs
- In the New Optics example: stock went from $47 → $90 → $140
- This massive move would cause significant gamma risk

**Theta Risk (Speculators):**
- Speculators bought far OTM calls ($90 strike when stock was $47)
- These options had mostly time value
- **Every day that passes**, time value decreases
- If stock doesn't move, option value decays to zero
- Theta is the "enemy" of option buyers

**Why B is Wrong (Vega and Delta):**
- **Vega:** Sensitivity to volatility changes — affects both parties but not the PRIMARY risk for dealers who hedge
- **Delta:** Yes, dealers care about delta, but they HEDGE delta. The risk is when the hedge BREAKS (gamma)

**Why A is Wrong (Delta and Rho):**
- **Rho:** Sensitivity to interest rates — minimal impact for short-term options
- Not a significant risk for either party in this scenario

**Memory Aid:**
> **Dealers worry about Gamma** (hedge breaking)
> **Speculators worry about Theta** (time decay)

---

### Q28 — Options Strategy Profit Calculation

**Full Vignette Context:**
Edel and Uder discuss New Optics Technology options. The stock experienced massive price movement due to a short squeeze.

**Exhibit 1:**
| Information | USD Price |
|-------------|-----------|
| Stock price 2 weeks before expiry | $47 |
| 90 Call price 2 weeks before expiry | $0.15 |
| 90 Put price 2 weeks before expiry | $42.97 |
| Stock price at expiry | $140 |

**Question:**
According to the data in Exhibit 1, the position resulting in the greatest USD profit beginning two weeks to expiry would most likely have been realized initiating a position combining:

A. Long calls and long puts
B. Long puts and long stocks
C. Long calls and short stocks

**Your Answer:** A (Long calls and long puts)

**Correct Answer:** B (Long puts and long stocks)

**Full Explanation:**

**Calculate Profit for Each Strategy:**

**Strategy A: Long Calls + Long Puts (Straddle-like)**

| Position | Cost | Payoff at Expiry | Profit |
|----------|------|------------------|--------|
| Long 90 Call | $0.15 | max(0, 140−90) = $50 | $50 − $0.15 = **$49.85** |
| Long 90 Put | $42.97 | max(0, 90−140) = $0 | $0 − $42.97 = **−$42.97** |
| **Total** | | | **$6.88** |

**Strategy B: Long Puts + Long Stock**

| Position | Cost | Payoff at Expiry | Profit |
|----------|------|------------------|--------|
| Long Stock | $47 | $140 | $140 − $47 = **$93.00** |
| Long 90 Put | $42.97 | max(0, 90−140) = $0 | $0 − $42.97 = **−$42.97** |
| **Total** | | | **$50.03** |

**Strategy C: Long Calls + Short Stock**

Per the answer feedback:
- Stock loss from $47 to $90 (below strike) = $43 loss
- Call value at expiry = $50 − $0.15 = $49.85
- Net = $49.85 − $43 = **$6.85**

**Profit Ranking:**
1. **Strategy B (Long Puts + Long Stock): $50.03** ← HIGHEST
2. Strategy A (Long Calls + Long Puts): $6.88
3. Strategy C (Long Calls + Short Stock): $6.85

**Why B is Best:**
- Long stock captures the entire $93 gain ($47 → $140)
- Put expires worthless (cost $42.97, worth $0)
- Net profit: $93 − $42.97 = **$50.03**

**Why You Got A Wrong:**
The put cost ($42.97) wipes out most of the call's gain ($49.85), leaving only $6.88 profit.

---

## Portfolio Management

### Q29 — Value Added from Asset Allocation

**Full Vignette Context:**
Imane Kabbaj is the CIO of the Dynamo Fund. Kabbaj reviews the performance of the Dynamo Fund for the past year and focuses on the decomposition of the value added from asset allocation and security selection. Exhibit 1 reflects the return generated by the fund in each asset class compared to the relevant benchmark.

**Exhibit 1:**
| Asset Class | Fund Return | Fund Allocation | Benchmark Return | Strategic Asset Allocation |
|-------------|-------------|-----------------|------------------|---------------------------|
| Equities | −16% | 50% | −20% | 60% |
| Bonds | −12% | 50% | −10% | 40% |

**Question:**
For the Dynamo Fund, the value added from asset allocation over the past year was:

A. Less than the value added from security selection
B. Equal to the value added from security selection
C. Greater than the value added from security selection

**Your Answer:** A (Less than the value added from security selection)

**Correct Answer:** B (Equal to the value added from security selection)

**Full Explanation:**

**Active Return Decomposition Formula:**
> R_A = (Δw_stocks × R_B,stocks + Δw_bonds × R_B,bonds) + (w_P,stocks × R_A,stocks + w_P,bonds × R_A,bonds)
>
> R_A = **Asset Allocation** + **Security Selection**

**Step 1: Calculate Value Added from Asset Allocation**

| Asset | Weight Differential | × Benchmark Return | = Contribution |
|-------|--------------------|--------------------|----------------|
| Equities | 50% − 60% = **−10%** | × (−20%) | = **+2.0%** |
| Bonds | 50% − 40% = **+10%** | × (−10%) | = **−1.0%** |
| **Total** | | | **+1.0%** |

Interpretation: Underweighting equities (which fell 20%) added 2%. Overweighting bonds (which fell 10%) cost 1%. Net: +1%.

**Step 2: Calculate Value Added from Security Selection**

| Asset | Portfolio Weight | × Active Return | = Contribution |
|-------|-----------------|-----------------|----------------|
| Equities | 50% | × (−16% − (−20%)) = +4% | = **+2.0%** |
| Bonds | 50% | × (−12% − (−10%)) = −2% | = **−1.0%** |
| **Total** | | | **+1.0%** |

Interpretation: Equities beat benchmark by 4% (−16% vs −20%). Bonds lagged by 2% (−12% vs −10%).

**Comparison:**
- Asset Allocation: **+1.0%**
- Security Selection: **+1.0%**
- **They are EQUAL!**

**Why You Got It Wrong:**
You may have used an incorrect formula or calculation order. The key is:
- Asset allocation uses **benchmark returns** × weight differentials
- Security selection uses **portfolio weights** × return differentials

---

### Q30 — Optimal Active Risk Allocation

**Full Vignette Context:**
Kabbaj's goal for the fund's equity exposure is to maximize the Sharpe ratio by optimizing the allocation to active equity risk. She intends to invest in a combination of an active stock selection strategy and its benchmark, a global equity index. Based on the information in Exhibit 2, Kabbaj calculates the weight that should be allocated to the global equity index benchmark portfolio to achieve her goal.

**Exhibit 2:**
| Metric | Active Stock Selection Strategy | Global Equity Index |
|--------|--------------------------------|---------------------|
| Standard deviation of returns | 23% | 15% |
| Sharpe ratio | 0.47 | 0.53 |
| Active risk | 9% | --- |
| Information ratio | 0.27 | --- |

**Question:**
To achieve her goal for the equity exposure, the weight that Kabbaj should allocate to the global equity index benchmark portfolio is closest to:

A. −30%
B. 15%
C. 100%

**Your Answer:** A (−30%)

**Correct Answer:** B (15%)

**Full Explanation:**

**Optimal Active Risk Formula:**
> σ*(R_A) = (IR / SR_B) × σ_B

Where:
- IR = Information ratio of active strategy = 0.27
- SR_B = Sharpe ratio of benchmark = 0.53
- σ_B = Standard deviation of benchmark = 15%

**Step 1: Calculate Optimal Active Risk**
> σ*(R_A) = (0.27 / 0.53) × 15%
> σ*(R_A) = 0.5094 × 15%
> σ*(R_A) = **7.64%**

**Step 2: Determine Weight on Active Strategy**

Current active risk = 9%
Optimal active risk = 7.64%

> Weight on Active = Optimal Active Risk / Current Active Risk
> Weight on Active = 7.64% / 9% = **0.85 = 85%**

**Step 3: Calculate Weight on Benchmark**
> Weight on Benchmark = 1 − Weight on Active
> Weight on Benchmark = 1 − 0.85 = **0.15 = 15%**

**Why You Got It Wrong (Answer A = −30%):**
You used the **active strategy's standard deviation (23%)** instead of the **benchmark's standard deviation (15%)**:

Wrong calculation:
> σ*(R_A) = (0.27 / 0.53) × 23% = 11.72%
> Weight on Active = 11.72% / 9% = 1.30 = 130%
> Weight on Benchmark = 1 − 1.30 = −0.30 = −30%

**Key Formula Reminder:**
> Optimal active risk uses **BENCHMARK** standard deviation, not active strategy's

---

### Q31 — Bond Risk Premium for Inflation Uncertainty

**Full Vignette Context:**
Kabbaj analyzes the information in Exhibit 3, which shows the yields on corporate bonds, conventional government bonds, and inflation-linked government bonds issued in Country A with the same maturity, along with inflation expectations. She analyzes the bond risk premium to determine the market's confidence in inflation expectations being realized through the business cycle.

**Exhibit 3:**
| Item | Value |
|------|-------|
| Corporate bond yield | 6.28% |
| Conventional government bond yield | 5.66% |
| Inflation-linked government bond yield | 2.32% |
| Survey-based inflation expectation | 2.80% |

**Question:**
The bond risk premium for uncertainty about future inflation in Country A is closest to:

A. 0.54%
B. 1.16%
C. 2.86%

**Your Answer:** C (2.86%)

**Correct Answer:** A (0.54%)

**Full Explanation:**

**Bond Risk Premium Formula:**
> BRP = Conventional Gov't Yield − Inflation-Linked Yield − Expected Inflation

**Calculation:**
> BRP = 5.66% − 2.32% − 2.80%
> BRP = **0.54%**

**Decomposition of Conventional Government Bond Yield:**
| Component | Value | Source |
|-----------|-------|--------|
| Real rate (risk-free) | 2.32% | Inflation-linked bond yield |
| Expected inflation | 2.80% | Survey-based expectation |
| **Inflation uncertainty premium** | **0.54%** | Residual (BRP) |
| **Total** | **5.66%** | Conventional gov't yield |

**Why You Got It Wrong (Answer C = 2.86%):**
You calculated: 5.66% − 2.80% = 2.86%

This gives you (Real rate + BRP), not just BRP. You forgot to subtract the inflation-linked yield.

**Why B is Wrong (1.16%):**
Answer B uses CORPORATE bond yield instead of government bond yield:
> Wrong: 6.28% − 2.32% − 2.80% = 1.16%

This includes the credit risk premium, not just inflation uncertainty.

**Key Concept:**
The bond risk premium (for inflation uncertainty) is what remains after accounting for:
1. Real return (proxied by inflation-linked bond)
2. Expected inflation (from surveys)

---

## Economics

### Q37 — Types of Economic Convergence

**Full Vignette Context:**
Amine Ling manages a multi-asset portfolio that invests in the stocks and bonds of Country A and Country B.

**Country A:**
Country A is a developing economy and its population growth rate will continue to be higher than that in developed economies. Country A's long-term goal is to accelerate economic growth so that its level of per capita income will eventually match that of developed economies. **Country A intends to implement trade policies and develop legal, political, and economic institutions of developed countries to support this goal.**

**Question:**
The type of convergence occurring if Country A achieves its long-term goal is best referred to as:

A. Club convergence
B. Absolute convergence
C. Conditional convergence

**Your Answer:** C (Conditional convergence)

**Correct Answer:** A (Club convergence)

**Full Explanation:**

**Types of Convergence:**

| Type | Definition | Key Characteristic |
|------|------------|-------------------|
| **Absolute** | All countries converge to same income level | Regardless of characteristics |
| **Conditional** | Countries converge to their own steady state | Based on savings rate, population growth |
| **Club** | Countries converge IF they have right institutions | Must "join the club" |

**Why Club Convergence is Correct:**
The vignette states Country A will:
- "Implement trade policies of developed countries"
- "Develop legal, political, and economic institutions"

This describes **joining the club** of developed nations by adopting their institutional frameworks. Club convergence theory says:
- Only countries with the right institutions can converge
- Poor countries can join if they make necessary institutional changes
- Country A is doing exactly this

**Why C (Conditional) is Wrong:**
Conditional convergence says countries converge to their **own** steady state based on:
- Savings rate
- Population growth rate
- Production function

Country A has **higher population growth** than developed economies, so under conditional convergence, it would converge to a **different** (lower) steady state, not match developed country income levels.

**Why B (Absolute) is Wrong:**
Absolute convergence assumes **all** countries automatically converge regardless of characteristics. But:
- Country A is actively making institutional changes
- The vignette emphasizes the importance of these changes
- This contradicts the "regardless of characteristics" assumption

**Key Distinction:**
> **Club convergence:** "You can join if you adopt our institutions"
> **Conditional convergence:** "You'll reach your own steady state based on your fundamentals"

---

### Q38 — Permanent vs Temporary GDP Growth Factors

**Full Vignette Context:**
Ling researches Country B's labor market. She expects that in the next decade, Country B will experience the following changes:

- **Change 1:** The unemployment rate will decline
- **Change 2:** The female labor force participation rate will rise
- **Change 3:** A greater proportion of the workforce will receive on-the-job training

**Question:**
Which expected change in Country B's labor market will most likely contribute to a permanent increase in its potential GDP growth?

A. Change 1
B. Change 2
C. Change 3

**Your Answer:** B (Female labor force participation rate will rise)

**Correct Answer:** C (Greater proportion receives on-the-job training)

**Full Explanation:**

**Permanent vs Temporary Growth Effects:**

| Change | Effect Type | Why |
|--------|-------------|-----|
| Declining unemployment | **Temporary** | One-time shift to higher employment level |
| Rising female participation | **Temporary** | One-time shift to higher labor force level |
| **On-the-job training** | **Permanent** | Continuous improvement in labor quality |

**Why Change 3 (Training) is Permanent:**
- Better-educated workers are more **productive**
- More skills lead to more **innovation**
- This can result in ongoing **technological progress**
- The effect compounds over time

**Why Change 2 (Female Participation) is Temporary:**
- Rising participation increases the **level** of the labor force
- But participation rates eventually stabilize (can't exceed 100%)
- This is a **one-time transition** to a higher level
- Growth rate returns to normal after transition

**Why Change 1 (Unemployment) is Temporary:**
- Lower unemployment means more workers are employed
- But this is just **better utilization** of existing labor supply
- Not a permanent increase in growth rate
- Unemployment has a natural floor (can't go negative)

**Analogy:**
- **Level effect:** Filling a bucket to a new, higher level (temporary growth)
- **Growth rate effect:** Increasing the rate at which water flows into the bucket (permanent growth)

Training increases the **flow rate** (permanent), while participation and employment changes just raise the **water level** (temporary).

---

### Q39 — Potential GDP Growth Rate Calculation

**Full Vignette Context:**
Ling estimates the potential GDP growth rate of Country B based on the labor productivity growth accounting equation and using her forecast of long-term growth rates in Exhibit 1.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Growth rate of labor force | −1.7% |
| Growth in total hours worked | −1.6% |
| Growth rate of labor productivity | 2.4% |
| Growth rate of total factor productivity | 0.8% |

**Question:**
Based on the labor productivity growth accounting equation, the potential GDP growth rate of Country B is:

A. −0.9%
B. 0.7%
C. 1.5%

**Your Answer:** A (−0.9%)

**Correct Answer:** B (0.7%)

**Full Explanation:**

**Labor Productivity Growth Accounting Equation:**
> Growth rate of Potential GDP = Growth rate of Labor Force + Growth rate of Labor Productivity

**Calculation:**
> Potential GDP Growth = (−1.7%) + 2.4%
> Potential GDP Growth = **0.7%**

**Why You Got It Wrong (Answer A = −0.9%):**
You included "Growth in total hours worked" in the calculation:

Wrong calculation:
> −1.6% + (−1.7%) + 2.4% = −0.9%

**Extraneous Information:**
The question says to use the "labor productivity growth accounting equation," which is:
> GDP Growth = Labor Force Growth + Labor Productivity Growth

The following are NOT needed:
- Growth in total hours worked (−1.6%): Already captured in labor force growth
- Growth rate of TFP (0.8%): Used in a different growth accounting framework

**Why C is Wrong (1.5%):**
Answer C includes TFP:
> −1.7% + 2.4% + 0.8% = 1.5%

But TFP is not part of the labor productivity growth accounting equation.

**Key Formula:**
> Potential GDP Growth = Labor Force Growth + Labor Productivity Growth

---

## Private Equity / Alternative Investments

### Q42 — Expanded CAPM Required Return

**Full Vignette Context:**
Joel Dlamini, a private equity fund manager, is evaluating several potential investment opportunities for his portfolio.

**Romala Enterprises:**
Dlamini uses the information in Exhibit 1 and the expanded CAPM to calculate Romala's required return on equity. For this calculation, he concludes that an industry risk premium is not relevant for Romala.

**Exhibit 1:**
| Item | Value |
|------|-------|
| Estimated beta | 1.5 |
| Risk-free rate | 3.5% |
| Equity risk premium | 5.0% |
| Small stock risk premium | 2.0% |
| Company-specific risk premium | 1.0% |

**Question:**
The required return on equity for Romala using the expanded CAPM is closest to:

A. 11.5%
B. 12.0%
C. 14.0%

**Your Answer:** B (12.0%)

**Correct Answer:** C (14.0%)

**Full Explanation:**

**Expanded CAPM Formula:**
> r_e = r_f + β(ERP) + Small Stock Premium + Company-Specific Premium

**Calculation:**
> r_e = 3.5% + (1.5 × 5.0%) + 2.0% + 1.0%
> r_e = 3.5% + 7.5% + 2.0% + 1.0%
> r_e = **14.0%**

**Why You Got It Wrong (Answer B = 12.0%):**
You **omitted the small stock risk premium**:

Wrong calculation:
> r_e = 3.5% + (1.5 × 5.0%) + 1.0%
> r_e = 3.5% + 7.5% + 1.0% = 12.0%

**Why A is Wrong (11.5%):**
Answer A does NOT adjust ERP for beta (adds components linearly):
> Wrong: 3.5% + 5.0% + 2.0% + 1.0% = 11.5%

**Key Points:**
1. Beta only applies to the **market risk premium (ERP)**
2. Size and company-specific premiums are **added directly** (not multiplied by beta)
3. These premiums compensate for risks not captured by beta

**Expanded CAPM Components:**
| Component | Applies Beta? |
|-----------|---------------|
| Risk-free rate | No |
| Equity risk premium | **Yes** (× β) |
| Small stock premium | No |
| Company-specific premium | No |
| Industry risk premium | No (not applicable here) |

---

### Q43 — DLOC and DLOM Calculation

**Full Vignette Context:**
Dlamini plans to acquire a **non-controlling minority interest** in Romala. He determines Romala has an unadjusted equity value of $900 million. He estimates the discount for lack of marketability to be 15% and the control premium to be 10%. Dlamini calculates the current equity value of Romala by making adjustments for lack of control and lack of marketability.

**Question:**
Romala's adjusted equity value (in $ millions) is closest to:

A. 683
B. 689
C. 695

**Your Answer:** B (689)

**Correct Answer:** C (695)

**Full Explanation:**

**Step 1: Calculate Discount for Lack of Control (DLOC)**

DLOC is derived from the control premium:
> DLOC = 1 − [1 / (1 + Control Premium)]
> DLOC = 1 − [1 / (1 + 0.10)]
> DLOC = 1 − [1 / 1.10]
> DLOC = 1 − 0.9091
> DLOC = **9.09%**

**Step 2: Calculate Total Discount**

Total discount combines DLOC and DLOM multiplicatively:
> Total Discount = 1 − [(1 − DLOC) × (1 − DLOM)]
> Total Discount = 1 − [(1 − 0.0909) × (1 − 0.15)]
> Total Discount = 1 − [0.9091 × 0.85]
> Total Discount = 1 − 0.7727
> Total Discount = **22.73%**

**Step 3: Calculate Adjusted Equity Value**
> Adjusted Value = Unadjusted Value × (1 − Total Discount)
> Adjusted Value = $900M × (1 − 0.2273)
> Adjusted Value = $900M × 0.7727
> Adjusted Value = **$695.4M ≈ $695M**

**Why You Got It Wrong (Answer B = $689M):**
You used the control premium directly as the DLOC (10%) instead of converting it:

Wrong calculation:
> Wrong Total Discount = 1 − [(1 − 0.10) × (1 − 0.15)]
> Wrong Total Discount = 1 − [0.90 × 0.85] = 1 − 0.765 = 23.5%
> Wrong Adjusted Value = $900M × (1 − 0.235) = $689M

**Why A is Wrong ($683M):**
Answer A **adds** DLOC and DLOM instead of multiplicatively combining:
> Wrong: Total Discount = 9.09% + 15% = 24.09%
> Wrong: $900M × (1 − 0.2409) = $683M

**Key Formula:**
> DLOC = 1 − [1 / (1 + Control Premium)]
> Total Discount = 1 − [(1 − DLOC) × (1 − DLOM)]

**Remember:**
- Control premium ≠ DLOC (must convert)
- Discounts combine multiplicatively, not additively

---

## Summary by Topic

| Topic | Questions Missed | Priority Level |
|-------|------------------|----------------|
| Portfolio Management | 3 | HIGH |
| Economics | 3 | HIGH |
| Equity Valuation | 3 | HIGH |
| Private Equity | 2 | HIGH |
| Derivatives | 2 | MEDIUM |
| FSA | 2 | MEDIUM |
| Ethics | 1 | MEDIUM |

---

## Key Formulas to Memorize

**FCFF to Equity Value:**
> Equity Value = Firm Value − Debt

**FCFE Coverage Ratio:**
> Coverage = FCFE / (Dividends + Repurchases)
> Do NOT include share issuance!

**Optimal Active Risk:**
> σ*(R_A) = (IR / SR_B) × σ_B ← Use BENCHMARK σ!

**Bond Risk Premium:**
> BRP = Conventional Yield − Inflation-Linked Yield − Expected Inflation

**Labor Productivity Growth Accounting:**
> GDP Growth = Labor Force Growth + Labor Productivity Growth

**Expanded CAPM:**
> r_e = r_f + β(ERP) + Size Premium + Company-Specific Premium

**DLOC from Control Premium:**
> DLOC = 1 − [1 / (1 + Control Premium)]

**Total Discount:**
> Total Discount = 1 − [(1 − DLOC) × (1 − DLOM)]

**Asset Allocation Value Added:**
> = Σ [(Portfolio Weight − Benchmark Weight) × Benchmark Return]

**Security Selection Value Added:**
> = Σ [Portfolio Weight × (Portfolio Return − Benchmark Return)]

---

## Key Concepts to Remember

**Ethics During Notice Period:**
- Follow employer policies
- Do NOT actively promote competing business

**FCFF vs FCFE:**
- FCFF → Firm value (subtract debt for equity)
- Discount FCFF at WACC, FCFE at cost of equity

**Translation Methods:**
- Current rate → CTA goes to equity
- Temporal → Translation adjustment goes to I/S

**Greeks:**
- Gamma = Dealer risk (hedge breaking)
- Theta = Speculator risk (time decay)

**Convergence Types:**
- Club = Institutional changes required
- Conditional = Based on fundamentals
- Absolute = All countries converge regardless

**Permanent GDP Growth:**
- Training/education = Permanent
- Participation/employment = Temporary (level shift)
