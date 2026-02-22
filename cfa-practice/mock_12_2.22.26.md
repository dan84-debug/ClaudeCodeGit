# CFA Level II Mock Exam 12 — Incorrect Questions Review

**Score: 34/44 (77%)**
**Date: February 22, 2026**

---

## Table of Contents

1. [Credit Analysis / Fixed Income](#credit-analysis--fixed-income)
2. [Derivatives](#derivatives)
3. [Equity Valuation](#equity-valuation)
4. [Financial Statement Analysis](#financial-statement-analysis)
5. [Ethics](#ethics)
6. [Quantitative Methods](#quantitative-methods)

**Practice Questions (Answered Correctly):**
- Q4: Hedging Pressure Hypothesis
- Q11: CDS Trade P&L
- Q23: Stock-Based Compensation Tax Effects

---

## Credit Analysis / Fixed Income

### Q10 — Credit Spread from CVA

**Full Vignette Context:**
Fabiano Arlandi, a portfolio manager, is analyzing the term structure of credit spreads for three companies.

Arlandi determines the credit spread of Company A's zero-coupon bond over a default-risk-free government bond, given the following information:
- The bond has a remaining maturity of **5 years** and a face value of **100**
- The default-risk-free discount rate is **4%** and the government yield curve is flat
- The credit valuation adjustment (CVA) is **2.924**
- Arlandi assumes there is no interest rate volatility

**Question:**
The credit spread for Company A's zero-coupon bond is closest to:

A. 0.15%
B. 0.72%
C. 0.76%

**Your Answer:** B (0.72%)

**Correct Answer:** C (0.76%)

**Full Explanation:**

**Step 1: Calculate PV of Default-Risk-Free Bond**
> PV_rf = FV / (1 + r)^n
> PV_rf = 100 / (1.04)^5
> PV_rf = 100 / 1.2167
> PV_rf = **82.1927**

**Step 2: Subtract CVA to Get Corporate Bond Value**
> PV_corp = PV_rf − CVA
> PV_corp = 82.1927 − 2.924
> PV_corp = **79.2687**

**Step 3: Calculate Corporate Bond Yield**
> (FV / PV_corp)^(1/n) − 1 = Yield
> (100 / 79.2687)^0.2 − 1
> (1.2615)^0.2 − 1
> = **4.756%**

**Step 4: Calculate Credit Spread**
> Credit Spread = Corporate Yield − Risk-Free Rate
> Credit Spread = 4.756% − 4.00%
> Credit Spread = **0.756% ≈ 0.76%**

**Why You Got It Wrong (Answer B = 0.72%):**
You **ADDED** the CVA instead of **SUBTRACTING** it, then reversed the spread calculation:

Wrong calculation:
> PV_corp = 82.1927 + 2.924 = 85.1167 (WRONG — should subtract)
> Yield = (100/85.1167)^0.2 − 1 = 3.2754%
> Spread = 4.00% − 3.2754% = 0.72% (WRONG — reversed)

**Key Concept:**
- CVA represents the **loss** due to credit risk
- CVA is **subtracted** from risk-free value to get risky bond value
- Lower price → Higher yield → Positive credit spread

**Formula:**
> Corporate Bond Value = Risk-Free Bond Value − CVA
> Credit Spread = Corporate Yield − Risk-Free Yield

---

### Q43 — Monte Carlo Drift Adjustment

**Full Vignette Context:**
Alice Kent, a fixed-income analyst, wants to develop a more flexible model than the binomial tree. She uses the Monte Carlo method to simulate various potential interest rate paths, with a 30-year default-free coupon-paying bond as the benchmark bond. After the initial simulation of the paths, she customizes the model by **adding a constant to all interest rates on all paths** to ensure that the average present value for the benchmark bond equals its current market price.

**Question:**
The technique used by Kent to customize the Monte Carlo model is best described as:

A. Making a drift adjustment
B. Implementing mean reversion
C. Benchmarking the term structure

**Your Answer:** C (Benchmarking the term structure)

**Correct Answer:** A (Making a drift adjustment)

**Full Explanation:**

**What Kent Did:**
> Added a **constant** to **all interest rates** on **all paths**

This is the definition of a **drift adjustment**.

**Monte Carlo Model Customization Techniques:**

| Technique | Description | Kent's Action? |
|-----------|-------------|----------------|
| **Drift Adjustment** | Add constant to all rates on all paths | **YES** |
| Mean Reversion | Set upper/lower bounds; rates move toward forward curve | NO |
| Benchmarking | Using current spot curve as reference | NO (this is what she's calibrating TO) |

**Why A is Correct:**
The drift term is a constant added to ensure model prices match market prices. When this technique is used, the model is said to be **drift adjusted**.

**Why C is Wrong:**
"Benchmarking the term structure" means using the current spot curve as the reference. That's what Kent is trying to MATCH, not the technique she's using to match it.

**Why B is Wrong:**
Mean reversion involves setting bounds so rates trend toward implied forward rates over time. Kent isn't setting bounds — she's adding a flat constant.

**Key Terminology:**
> **Drift adjustment** = Adding a constant to all simulated rates to calibrate model to market prices

---

## Derivatives

### Q26 — Equity Swap Cash Flow (Negative Return)

**Full Vignette Context:**
Elaine Azul is evaluating longer-term solutions to reduce Green's exposure to his firm's stock. One approach is to enter into a 3-year equity swap. The proposed equity swap has:
- Semiannual reset
- 30/360 day count
- 2.5% annual fixed rate
- $2 million notional principal

**Question:**
If Green's stock has a **−4.5% return** (not annualized) over the next six months, the proposed equity swap's net cash flow to Green on its first payment date would be:

A. −$65,000
B. $115,000
C. $140,000

**Your Answer:** A (−$65,000)

**Correct Answer:** B ($115,000)

**Full Explanation:**

**Equity Swap Structure:**
Green wants to REDUCE exposure to his stock → He **receives fixed, pays equity return**

**Step 1: Calculate Fixed Leg (Green Receives)**
> Fixed Payment = Notional × (Annual Rate / 2)
> Fixed Payment = $2,000,000 × (0.025 / 2)
> Fixed Payment = $2,000,000 × 0.0125
> Fixed Payment = **+$25,000**

**Step 2: Calculate Equity Leg (Green Pays)**
> Equity Payment = Notional × Equity Return
> Equity Payment = $2,000,000 × (−0.045)
> Equity Payment = **−$90,000**

**But wait — paying a NEGATIVE amount = RECEIVING money!**

**Step 3: Calculate Net Cash Flow**
> Net = Fixed Received + (−Equity Paid)
> Net = $25,000 − (−$90,000)
> Net = $25,000 + $90,000
> Net = **$115,000**

**Why You Got It Wrong (Answer A = −$65,000):**
You treated the negative equity return as an **outflow** rather than an **inflow**:

Wrong logic:
> Receive Fixed: +$25,000
> "Pay" Equity: −$90,000 (treated as outflow)
> Net: $25,000 − $90,000 = −$65,000 ✗

**Correct logic:**
When equity return is **negative**, the equity payer actually **receives** money because:
- The stock went DOWN
- Green was supposed to PAY the equity return
- A negative return means the counterparty pays Green

**Key Insight:**
> In equity swaps, "pay equity" with negative return = RECEIVE cash
> Net CF = Fixed Received − (Equity Return × Notional)
> Net CF = $25,000 − (−4.5% × $2M) = $25,000 + $90,000 = $115,000

---

### Q28 — Interest Rate Swap Valuation

**Full Vignette Context:**
Two years ago, White entered into a local market $7 million 5-year interest rate swap with annual resets (30/360 day count), **receiving the fixed rate of 1.36%** and paying the MRR. Azul determines the value of the swap today using the relevant spot rate data in Exhibit 2.

**Exhibit 2:**
| Maturity | Spot Rate | Present Value Factor |
|----------|-----------|---------------------|
| 1 year | 0.262% | 0.9974 |
| 2 years | 0.672% | 0.9867 |
| 3 years | 0.956% | 0.9721 |

**Question:**
The current value of White's interest rate swap is closest to:

A. −$148,338
B. $86,130
C. $151,062

**Your Answer:** C ($151,062)

**Correct Answer:** B ($86,130)

**Full Explanation:**

**Swap Valuation Formula (Receive Fixed):**
> Value = NA × (FS₀ − FS_t) × Σ(PV Factors)

Where:
- NA = Notional = $7,000,000
- FS₀ = Original fixed rate = 1.36%
- FS_t = Current market fixed rate (to be calculated)
- Σ(PV Factors) = Sum of PV factors for remaining life

**Step 1: Calculate Sum of PV Factors**
> Σ(PV) = 0.9974 + 0.9867 + 0.9721 = **2.9562**

**Step 2: Calculate Current Fixed Swap Rate (FS_t)**
> FS_t = (1 − Last PV Factor) / Σ(PV Factors)
> FS_t = (1 − 0.9721) / 2.9562
> FS_t = 0.0279 / 2.9562
> FS_t = **0.009438 = 0.9438%**

**Step 3: Calculate Swap Value**
> Value = $7,000,000 × (0.0136 − 0.009438) × 2.9562
> Value = $7,000,000 × 0.004162 × 2.9562
> Value = **$86,130**

**Why You Got It Wrong (Answer C = $151,062):**
You calculated FS_t incorrectly as the simple average of spot rates:

Wrong calculation:
> FS_t = (0.262% + 0.672% + 0.956%) / 3 = 0.63%
> Value = $7M × (1.36% − 0.63%) × 2.9562 = $151,062 ✗

**Why A is Wrong (−$148,338):**
Answer A uses PV factors for years 3, 4, and 5 instead of years 1, 2, and 3.

**Key Formula:**
> Current Fixed Rate = (1 − PV_final) / Σ(All PV Factors)
> Swap Value = Notional × (Original Rate − Current Rate) × Σ(PV Factors)

---

## Equity Valuation

### Q22 — Insurance Combined Ratio

**Full Vignette Context:**
Gordon evaluates the performance of a property and casualty insurance company, Bronx Insurance Company. She calculates the company's combined ratio for the most recent year using the information (in $ millions) presented in Exhibit 2.

**Exhibit 2:**
| Item | Amount ($ millions) |
|------|---------------------|
| Net premiums written | 3,600 |
| Net premiums earned | 3,200 |
| Loss and loss adjustment expenses | 2,300 |
| Underwriting expenses | 990 |
| Dividends paid to policyholders | 100 |

**Question:**
The combined ratio for Bronx Insurance is closest to:

A. 91%
B. 99%
C. 103%

**Your Answer:** A (91%)

**Correct Answer:** B (99%)

**Full Explanation:**

**Combined Ratio Formula:**
> Combined Ratio = Loss Ratio + Underwriting Expense Ratio

**Step 1: Calculate Loss and Loss Adjustment Expense Ratio**
> Loss Ratio = Loss & LAE / **Net Premiums EARNED**
> Loss Ratio = 2,300 / 3,200
> Loss Ratio = **71.875%**

**Step 2: Calculate Underwriting Expense Ratio**
> Expense Ratio = Underwriting Expenses / **Net Premiums WRITTEN**
> Expense Ratio = 990 / 3,600
> Expense Ratio = **27.5%**

**Step 3: Calculate Combined Ratio**
> Combined Ratio = 71.875% + 27.5%
> Combined Ratio = **99.375% ≈ 99%**

**Why You Got It Wrong (Answer A = 91%):**
You used Net Premiums WRITTEN for BOTH ratios:

Wrong calculation:
> Loss Ratio = 2,300 / 3,600 = 63.9% (WRONG denominator!)
> Expense Ratio = 990 / 3,600 = 27.5%
> Combined = 63.9% + 27.5% = 91.4%

**Why C is Wrong (103%):**
Answer C is the **Combined Ratio AFTER Dividends**:
> Dividend Ratio = 100 / 3,200 = 3.125%
> Combined After Dividends = 99.4% + 3.125% = 102.5% ≈ 103%

**Key Formula Memory Aid:**
| Ratio | Numerator | Denominator |
|-------|-----------|-------------|
| Loss Ratio | Losses | Premiums **EARNED** |
| Expense Ratio | Expenses | Premiums **WRITTEN** |

> "Losses are EARNED, Expenses are WRITTEN"

---

## Financial Statement Analysis

### Q20 — Market Manipulation Standards

**Full Vignette Context:**
Susan Li, CFA, an equity research analyst with Maipo Canyon Investment Bank (MCIB), specializes in identifying companies that are likely takeover candidates.

MCIB's proprietary model predicts that a takeover of Godoggo Corporation is highly likely. In a recent report, Li assigned a "Buy" recommendation to Godoggo's stock. Based on the report, one of MCIB's portfolio managers buys a large number of shares in Godoggo for his fund. **He subsequently promotes the stock in several online chat rooms by stating, "I have purchased Godoggo stock because our internal research indicates that it is highly likely to be taken over."** A week later, the price of Godoggo's stock has doubled and the portfolio manager subsequently sells all the shares of the stock in his fund.

**Question:**
Are the portfolio manager's actions with regard to Godoggo shares a violation of the Standard relating to market manipulation?

A. No
B. Yes, because he engaged in transaction-based market manipulation
C. Yes, because he engaged in information-based market manipulation

**Your Answer:** C (Yes, information-based manipulation)

**Correct Answer:** A (No)

**Full Explanation:**

**Standard II(B) Market Manipulation — Two Types:**

| Type | Definition | Did PM Do This? |
|------|------------|-----------------|
| Transaction-based | Artificial trades to affect price/volume | NO — bought based on legitimate research |
| Information-based | Spreading FALSE rumors to induce trading | NO — stated true opinion based on report |

**Why There's NO Violation:**

**1. The Purchase Was Legitimate:**
- PM bought based on Li's research report
- This is a valid investment reason
- Not an attempt to artificially inflate price

**2. The Online Promotion Was Not False:**
- PM stated he bought the stock ✓ (true)
- PM said internal research supports it ✓ (true)
- PM expressed an opinion based on actual analysis ✓

**3. The Subsequent Sale Was Legitimate:**
- Stock doubled — taking profits is normal
- PM had valid reason to buy AND sell

**Why C is Wrong:**
Information-based manipulation requires **spreading FALSE rumors**. The PM:
- Stated facts (he did buy, research does exist)
- Expressed legitimate opinion (takeover likely)
- Did NOT fabricate information

**Why B is Wrong:**
Transaction-based manipulation requires trades designed to **artificially affect prices**. The PM:
- Bought based on fundamental research
- Did not engage in wash trades or painting the tape

**Key Distinction:**
> Sharing TRUE information/opinions ≠ Manipulation
> Manipulation requires FALSE statements or artificial transactions

**This is a tricky question because the fact pattern LOOKS suspicious, but the Standards focus on whether information was FALSE, not whether someone profited.**

---

## Ethics

## Quantitative Methods

### Q33 — F-Test for Joint Significance

**Full Vignette Context:**
Sarah Kendall develops a model with three factors to explain weekly returns. She estimates the model for silver and platinum returns using 624 weekly observations.

Kendall gathers the model output for silver returns and tests whether the model explains RET with any statistical significance. She uses the partial ANOVA table results in Exhibit 1 and notes that the critical value of the F-statistic is 3.813 at the 1% significance level and 2.619 at the 5% significance level.

**Exhibit 1:**
| Source | Degrees of Freedom | Sum of Squares | Mean Squares |
|--------|-------------------|----------------|--------------|
| Regression | 3 | 0.0453 | 0.0151 |
| Residual | 620 | 0.9512 | 0.0015 |
| Total | 623 | 0.9965 | --- |

**Question:**
Do the independent variables jointly contribute to the explanation of silver returns?

A. No
B. Yes, at the 5% significance level only
C. Yes, at both the 5% and 1% significance levels

**Your Answer:** B (Yes, at 5% only)

**Correct Answer:** C (Yes, at both 5% and 1%)

**Full Explanation:**

**F-Test Formula:**
> F = MSR / MSE
> F = Mean Square Regression / Mean Square Error

**Calculation:**
> F = 0.0151 / 0.0015
> F = **10.07**

**Compare to Critical Values:**
| Significance Level | Critical Value | F-stat (10.07) > Critical? |
|-------------------|----------------|---------------------------|
| 5% | 2.619 | **YES** (10.07 > 2.619) |
| 1% | 3.813 | **YES** (10.07 > 3.813) |

**Conclusion:** Reject H₀ at BOTH significance levels → Variables jointly significant at both 5% AND 1%

**Why You Got It Wrong:**
You may have calculated F incorrectly. Common errors:

| Wrong Calculation | Result |
|-------------------|--------|
| SSR / MSR = 0.0453 / 0.0151 | 3.0 (between critical values) |
| MSE / MSR = 0.0015 / 0.0151 | 0.1 (not significant) |

**Key Formula:**
> F = MSR / MSE (not SSR, not reversed!)

---

### Q34 — Model Misspecification Tests

**Full Vignette Context:**
Kendall considers platinum returns. After running the model, she tests for model misspecification. The variance inflation factor for each of the independent variables is **close to 1.00**, and the **Breusch–Godfrey test fails to reject the null hypothesis**.

**Question:**
Does the testing of the platinum return model indicate model misspecification?

A. No
B. Yes, because there is evidence of multicollinearity
C. Yes, because there is evidence of serial correlation

**Your Answer:** C (Yes, serial correlation)

**Correct Answer:** A (No)

**Full Explanation:**

**Test Results Analysis:**

| Test | Result | Interpretation |
|------|--------|----------------|
| VIF ≈ 1.00 | Low | NO multicollinearity (VIF > 5 = problem) |
| Breusch-Godfrey | Fail to reject H₀ | NO serial correlation |

**Breusch-Godfrey Test:**
- H₀: No serial correlation in residuals
- **Fail to reject H₀** → No evidence of serial correlation
- This is GOOD — no misspecification

**VIF (Variance Inflation Factor):**
- VIF ≈ 1 → No multicollinearity
- VIF > 5 → Investigate multicollinearity
- VIF > 10 → Serious multicollinearity problem

**Why You Got It Wrong:**
You may have confused "fail to reject H₀" with "reject H₀":
- **Fail to reject H₀** = No serial correlation (no problem)
- **Reject H₀** = Serial correlation exists (problem)

**Key Rule:**
> Breusch-Godfrey: Fail to reject = NO serial correlation = GOOD
> VIF close to 1 = NO multicollinearity = GOOD

---

### Q35 — Model Selection: AIC vs BIC vs R²

**Full Vignette Context:**
Kendall considers alternate model specifications. Her objective is to select the **most parsimonious, best-fitting model**. Kendall evaluates several goodness-of-fit measures.

**Exhibit 2:**
| Model | Factors | AIC | BIC | R² |
|-------|---------|-----|-----|-----|
| 1 | FSI | 5.134 | **5.141** | 0.098 |
| 2 | FSI, GPR | **5.132** | 5.153 | 0.103 |
| 3 | FSI, GPR, EPU | 5.139 | 5.160 | **0.106** |

**Question:**
Which of the models for platinum returns should Kendall select based on her objective?

A. Model 1
B. Model 2
C. Model 3

**Your Answer:** C (Model 3)

**Correct Answer:** A (Model 1)

**Full Explanation:**

**Kendall's Objective:** "Most parsimonious, best-fitting model"
- **Parsimonious** = Simplest model that fits well
- **Best-fitting** = Lowest information criterion

**Model Selection Criteria:**

| Criterion | Purpose | Lower = Better? | Penalizes Complexity? |
|-----------|---------|-----------------|----------------------|
| **BIC** | Best fit + parsimony | Yes | **Heavily** |
| AIC | Prediction | Yes | Moderately |
| R² | Explained variance | No (higher better) | **No** |

**For Parsimony + Best Fit → Use BIC**

**BIC Values:**
- Model 1: **5.141** ← LOWEST
- Model 2: 5.153
- Model 3: 5.160

**Model 1 has the lowest BIC → Select Model 1**

**Why You Got It Wrong:**
You selected Model 3 based on highest R². But:
- R² always increases with more variables
- R² doesn't penalize complexity
- R² leads to overfitting

**Why B is Wrong:**
Model 2 has the lowest AIC (5.132), which is better for **prediction** purposes. But the question asks for **parsimony** + fit, which requires BIC.

**Key Selection Rules:**
| Objective | Use |
|-----------|-----|
| Best fit + Parsimony | **BIC** |
| Best prediction | AIC |
| Just explained variance | R² (but risk overfitting) |

---

### Q36 — Machine Learning Algorithm Selection

**Full Vignette Context:**
As a result of her firm investing in new data sources and technology, Kendall gains access to a wide range of new inputs that could be used to model the commodity market. She decides to utilize this dataset in a machine-learning algorithm with the goal of **predicting commodity returns from the complex non-linear data**.

**Question:**
Which of the following machine-learning algorithms is best suited to Kendall's goal?

A. Neural networks
B. Support vector machine
C. Principal components analysis

**Your Answer:** B (Support vector machine)

**Correct Answer:** A (Neural networks)

**Full Explanation:**

**Kendall's Goal:**
1. **Prediction** of returns
2. **Complex non-linear** data

**ML Algorithm Selection:**

| Algorithm | Best For | Linear or Non-linear? |
|-----------|----------|----------------------|
| **Neural Networks** | **Prediction + Non-linear** | Non-linear |
| Support Vector Machine | Classification + Linear | Linear |
| PCA | Dimension reduction | N/A |

**Why A (Neural Networks) is Correct:**
- Goal is **prediction** (numerical output) ✓
- Data is **non-linear** ✓
- Neural networks handle complex patterns ✓

**Why B (SVM) is Wrong:**
- SVM is for **classification** (categorical output), not prediction
- SVM works best with **linear** data
- Kendall wants to PREDICT returns, not CLASSIFY

**Why C (PCA) is Wrong:**
- PCA reduces dimensionality
- PCA doesn't predict — it summarizes/transforms data
- Would be preprocessing step, not final model

**ML Decision Tree:**
```
Is the goal prediction or classification?
├── Prediction (numerical)
│   ├── Linear data → Penalized regression, LASSO
│   └── Non-linear data → CART, Random Forest, NEURAL NETWORKS
└── Classification (categorical)
    ├── Linear data → SVM, K-nearest neighbor
    └── Non-linear data → Random Forest
```

---

## Practice Questions (Answered Correctly)

### Q4 — Hedging Pressure Hypothesis (Correct Answer: B)

**Full Vignette Context:**
Hansen observes that Crescent's returns in the natural gas sector behaved differently from the other two sectors over the past five years. Hansen gathers prior-year price information for the natural gas market.

**Exhibit 2:**
| Trade Date | Spot Price | June Futures | July Futures | August Futures |
|------------|------------|--------------|--------------|----------------|
| 28 May | 1.795 | 1.957 | 2.418 | 2.793 |
| 26 June | 1.795 | 1.795 | 2.338 | 2.546 |

**Question:**
Under the hedging pressure hypothesis, the prices in Exhibit 2 indicate:

A. Excess demand for price protection by producers
B. Excess demand for price protection by consumers
C. Balanced demand for price protection

**Answer: B (Excess demand for price protection by consumers)**

**Explanation:**
The futures curve is in **CONTANGO** (futures price > spot price, increasing with maturity).

**Hedging Pressure Hypothesis:**
| Curve Shape | What It Indicates |
|-------------|-------------------|
| Backwardation (futures < spot) | Producers seeking protection (selling forward) |
| **Contango (futures > spot)** | **Consumers seeking protection (buying forward)** |
| Flat | Balanced hedging demand |

Consumers (buyers) are worried about future availability → bid up futures prices → contango.

---

### Q11 — CDS Trade P&L Calculation (Correct Answer: A, $481,000 loss)

**Full Vignette Context:**
Three months ago, Arlandi **bought** $10 million of 5-year protection on Company B through a CDS contract with a **duration of 3.7 years**. The CDS credit spread has since **narrowed from 350 bps to 220 bps** currently. Arlandi closes out the trade by selling the CDS contract.

**Question:**
The estimated loss on the CDS trade on Company B is closest to:

**Calculation:**
> P&L = Change in Spread × Duration × Notional
> P&L = (220 bps − 350 bps) × 3.7 × $10,000,000
> P&L = (−130 bps) × 3.7 × $10,000,000
> P&L = (−0.013) × 3.7 × $10,000,000
> P&L = **−$481,000** (LOSS)

**Why It's a Loss:**
- Arlandi **bought protection** (bet on spreads widening)
- Spreads **narrowed** (credit improved)
- Protection buyer loses when spreads narrow

**Formula:**
> CDS P&L = Δ Spread × Duration × Notional
> Bought protection + spreads narrow = LOSS

---

### Q23 — Stock-Based Compensation Tax Effects (Correct Answer: A, tax shortfall)

**Full Vignette Context:**
Bronx Insurance has a restricted stock unit (RSU) plan for employees. On the grant date at the beginning of the first year, the share price was **$6.00 per RSU**. At the end of the second year, the share price was **$5.00 per RSU**. Settlement for the RSUs is made at the end of each year.

**Question:**
During the second year of the RSU plan, Bronx Insurance incurred:

A. A tax shortfall
B. An excess tax benefit
C. Neither

**Answer: A (Tax shortfall)**

**Explanation:**

| Scenario | Stock Price Movement | Tax Effect |
|----------|---------------------|------------|
| Price ↑ (vest > grant) | Tax deduction > Book expense | **Excess tax benefit** |
| **Price ↓ (vest < grant)** | **Tax deduction < Book expense** | **Tax shortfall** |

- Grant price: $6.00
- Settlement price: $5.00
- Price went **DOWN**
- Tax deduction based on $5.00 < Book expense based on $6.00
- Result: **Tax shortfall** (higher taxable income, higher tax expense)

---

## Summary by Topic

| Topic | Questions Missed | Priority |
|-------|------------------|----------|
| Quantitative Methods | 4 | HIGH |
| Derivatives | 2 | HIGH |
| Fixed Income / Credit | 2 | MEDIUM |
| FSA / Insurance | 1 | MEDIUM |
| Ethics | 1 | MEDIUM |

---

## Key Formulas to Memorize

**Credit Spread from CVA:**
> Corporate Value = Risk-Free Value − CVA
> Spread = Corporate Yield − Risk-Free Yield

**Equity Swap (Receive Fixed, Pay Equity):**
> Net CF = Fixed Received − (Equity Return × Notional)
> Negative equity return → PAY becomes RECEIVE

**Interest Rate Swap Valuation:**
> Current Fixed Rate = (1 − PV_final) / Σ(PV Factors)
> Value = Notional × (Original − Current Rate) × Σ(PV)

**Insurance Combined Ratio:**
> Loss Ratio = Losses / Premiums **EARNED**
> Expense Ratio = Expenses / Premiums **WRITTEN**
> Combined = Loss Ratio + Expense Ratio

**F-Test:**
> F = MSR / MSE (Mean Square Regression / Mean Square Error)

**Model Selection:**
> Parsimony + Fit → BIC (lower = better)
> Prediction → AIC (lower = better)

**CDS P&L:**
> P&L = Δ Spread × Duration × Notional

---

## Key Concepts to Remember

**CVA:** SUBTRACT from risk-free value (represents credit loss)

**Equity Swap Negative Return:** Paying negative = receiving positive

**Swap Fixed Rate:** Use PV factor formula, not average of spot rates

**Insurance Ratios:** Different denominators (earned vs written)

**Market Manipulation:** Requires FALSE information or artificial trades

**Breusch-Godfrey:** Fail to reject H₀ = NO serial correlation (good)

**BIC vs AIC:** BIC for parsimony, AIC for prediction

**Neural Networks:** Best for non-linear prediction
