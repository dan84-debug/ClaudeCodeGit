# CFA Level II Mock Exam — Incorrect Questions Review

**Combined Scores:**
- Mock 1 (January 2026): 56/88 (64%)
- Mock 2 (February 2026 - Axiom/Lonza): 30/44 (68%)
- Mock 3 (February 2026 - Buttery/Aoun): 37/44 (84%)
- **Total: 123/176 (70%)**

**Date Updated: February 7, 2026**

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
10. [Corporate Issuers](#corporate-issuers)

---

## Fixed Income / Credit

### Q1 — Credit Migration Expected Return (Mock 1)

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

### Q2 — ABS Credit Analysis Approaches (Mock 1)

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

---

### Q3 — CDS Cheapest-to-Deliver (Mock 1)

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
You used Bond X's recovery rate (40%) for the CDS payoff instead of the CTD Bond Y's recovery rate (35%).

---

### Q21 — Net Stable Funding Ratio (Mock 1)

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

### Q34 — Rolling Down the Yield Curve (Mock 1)

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

---

### Q35 — Yield Curve Theories (Mock 1)

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

### Q17 — Yield Curve Theory (Mock 3 - Xiao Li)

**Full Vignette Context:**
Xiao Li is a private wealth manager reviewing the term structure of interest rates. Li observes that lender and borrower preferences strongly influence yield curve shape, especially for longer-term maturities. Li has detected that the curve has a persistent dip at the 10-year maturity, and that investors in 10-year bonds are not willing to shift to 8- or 12-year bonds even when yields in those maturities are relatively high.

**Question:**
Li's observations about the shape of the yield curve are most consistent with the:

A. preferred habitat theory
B. liquidity preference theory
C. segmented markets theory

**Your Answer:** A (preferred habitat theory)

**Correct Answer:** C (segmented markets theory)

**Full Explanation:**

**Key Distinction:**
- **Segmented Markets:** Investors will NOT move outside their preferred maturity, regardless of yield differentials
- **Preferred Habitat:** Investors have preferences but WILL move for sufficient yield premium

Li's observation states investors are "not willing to shift to 8- or 12-year bonds even when yields in those maturities are relatively high." This absolute unwillingness to move — even for higher yields — is the hallmark of **segmented markets theory**.

| Theory | Investor Behavior |
|--------|-------------------|
| Segmented Markets | Locked into specific maturity segments |
| Preferred Habitat | Will leave preferred segment for enough return |
| Liquidity Preference | Demand premium for longer maturities |

**Why You Got It Wrong:**
Preferred habitat allows investors to move for sufficient premium. The key phrase "not willing to shift... even when yields... are relatively high" indicates absolute restriction, not a preference that can be overcome.

---

### Q18 — Bond Valuation Forward Rate Forecast (Mock 3 - Xiao Li)

**Full Vignette Context:**
Li uses the spot curve to compute forward rates. He forecasts that in three years the 2-year spot rate will equal 2.20% (the current 2-year spot rate), but that the remainder of the spot rate curve will be consistent with current forward rates. Li evaluates what his forecast implies about the valuation of a 5-year zero-coupon bond today.

**Exhibit 1 - Spot Rates:**
| Maturity | Spot Rate |
|----------|-----------|
| 1-year | 2.02% |
| 2-year | 2.20% |
| 3-year | 2.38% |
| 4-year | 2.52% |
| 5-year | 2.64% |

**Question:**
Given his forecast, Li should consider a 5-year zero-coupon bond today to be:

A. undervalued
B. fairly valued
C. overvalued

**Your Answer:** B (fairly valued)

**Correct Answer:** A (undervalued)

**Full Explanation:**

**Key Insight:**
Li forecasts the future 2-year spot rate (in 3 years) will be 2.20%, which is LOWER than the implied forward rate calculated from the current spot curve.

**The Logic:**
- Current bond pricing uses implied forward rates
- If actual future spot rates will be LOWER than implied forwards → bond cash flows are currently being discounted at too-high rates
- Therefore, the bond is currently **UNDERVALUED**

**Why Undervalued:**
1. Bond cash flows are discounted at rates implied by current curve
2. If future rates will be lower than implied, future discounting will be less severe
3. Bond's actual future value will be higher than currently priced
4. **Today's price is too low = undervalued**

**Why You Got It Wrong:**
A bond is fairly valued only if future spot rates equal implied forward rates. Li's forecast of a lower future rate means the bond is underpriced today.

---

### Q20 — Key Rate Duration and Volatility (Mock 3 - Xiao Li)

**Full Vignette Context:**
Li studies the characteristics and effects of yield curve volatility. He uses the 3.25% monthly standard deviation of the 15-year government-bond yield to estimate an annual yield volatility of 11.26%. Li also calculates key rate durations for various maturities. He concludes that the higher key rate durations associated with longer-term rates leads to higher long-term annualized term structure volatility.

**Question:**
Are Li's calculation and conclusion related to key rate duration and term structure volatility correct?

A. Yes
B. No, only his annualized volatility estimate is correct
C. No, only his conclusion related to key rate duration and term structure volatility is correct

**Your Answer:** A (Yes)

**Correct Answer:** B (No, only his annualized volatility estimate is correct)

**Full Explanation:**

**Checking the Volatility Calculation:**
> Annual volatility = Monthly volatility × √12
> = 3.25% × √12 = 3.25% × 3.464 = **11.26%** ✓ Correct

**Checking the Key Rate Duration Conclusion:**
Li's conclusion is INCORRECT because:
- While longer-term securities DO have higher key rate durations
- The volatility term structure typically shows **short-term rates are MORE volatile** than long-term rates
- Key rate duration measures price sensitivity to yield changes, NOT the propensity of rates to be volatile

**The Error:**
Li conflated two different concepts:
1. Key rate duration (price sensitivity) — higher for longer maturities
2. Yield volatility — typically higher for shorter maturities

**Why You Got It Wrong:**
The calculation was correct, but the conclusion about term structure volatility was wrong. Short-term rates are generally more volatile than long-term rates, despite long-term bonds having higher key rate durations.

---

### Q17 — Callable Bond Binomial Valuation (Mock 2 - Plessinger)

**Full Vignette Context:**
Sandra Plessinger is evaluating several bonds for the fixed-income portfolios she manages. She considers a 2-year, default-free Bond A with a 5% annual pay coupon that is callable at par ($100) at the end of year 1.

**Exhibit 1 - Binomial Interest Rate Tree:**
- Year 0: 2%
- Year 1: 6.09% (up) or 4.08% (down)

Risk-neutral probability = 50%, Interest rate volatility = 20%

**Question:**
Based on the binomial interest rate tree, the value of Bond A is closest to:

A. $102.44
B. $102.87
C. $103.37

**Your Answer:** B ($102.87)

**Correct Answer:** A ($102.44)

**Full Explanation:**

We start at the end of the tree and work backwards, recognizing that if the value exceeds 100, it is optimal to call the bond at par (call when rate < 5% coupon).

**Step 1: Calculate values at Year 1**

At rate of 6.09% (up node):
> Bond value = 105/1.0609 = 98.97 (no call since value < 100)

At rate of 4.08% (down node):
> Bond value = 105/1.0408 = 100.88 → **Bond is called at par = $100**

**Step 2: Work backwards to Year 0**

With Year 0 rate of 2%, discount Year 1 values (plus $5 coupon):
> Upper path: (98.97 + 5)/1.02 = 101.93
> Lower path: (100 + 5)/1.02 = 102.94

**Step 3: Calculate probability-weighted average**
> Value = 0.50 × 101.93 + 0.50 × 102.94 = **$102.44**

**Why You Got It Wrong:**
You calculated $102.87, which is the value WITHOUT considering the call option. At the down node in Year 1, the bond value of 100.88 exceeds the call price of 100, so the issuer calls it.

**Why Each Answer:**
- A ($102.44): Correct — properly accounts for bond being called
- B ($102.87): Incorrect — values bond as if non-callable
- C ($103.37): Incorrect — treats the option as a put instead of call

---

### Q18 — Putable Bond Effective Convexity (Mock 2 - Plessinger)

**Full Vignette Context:**
Plessinger also considers Bond B, a 5% annual pay coupon bond that is putable at par ($100) at the end of year 1.

**Question:**
The effective convexity of Bond B:

A. cannot be negative
B. will become negative if the rate in Year 1 is less than the bond's coupon
C. will become negative if the rate in Year 1 is greater than the bond's coupon

**Your Answer:** C (will become negative if rate > coupon)

**Correct Answer:** A (cannot be negative)

**Full Explanation:**

**Key Concept: Putable vs Callable Convexity**

| Bond Type | Convexity Behavior |
|-----------|-------------------|
| Option-free bond | Always positive convexity |
| **Callable bond** | Can become **negative** when rates fall (issuer likely to call) |
| **Putable bond** | **Always positive** — put option reinforces positive convexity |

**Why Putable Bonds Cannot Have Negative Convexity:**

The put option provides a FLOOR on the bond's price without limiting price appreciation:
- If rates FALL → bond price rises → put is out-of-the-money → positive convexity
- If rates RISE → bond price would fall → put provides floor at par → limits downside

**Why You Got It Wrong:**
You confused putable bonds with callable bonds. Callable bonds can have negative convexity because the call limits upside. Putable bonds have the opposite — the put limits downside while preserving upside.

---

### Q19 — OAS and Interest Rate Volatility (Mock 2 - Plessinger)

**Full Vignette Context:**
Plessinger evaluates a 3-year maturity, callable investment-grade corporate bond with an OAS of 51 bps. She considers the impact on OAS if the bond's price is unchanged and interest rate volatility increases from 20% to 25%.

**Question:**
Under Plessinger's scenario, the OAS of the corporate bond will:

A. decrease
B. not change
C. increase

**Your Answer:** C (increase)

**Correct Answer:** A (decrease)

**Full Explanation:**

**Key Relationship:**
> Z-Spread = OAS + Option Cost

For a callable bond:
- Z-spread is fixed (determined by bond's price relative to benchmark)
- Option cost = value of embedded call option

**When volatility increases:**
- Higher volatility → higher option value → higher option cost
- If price unchanged, Z-spread is unchanged
- Since Z-spread = OAS + Option Cost, and Option Cost ↑...
- **OAS must DECREASE**

**Example:**
| Scenario | Z-Spread | Option Cost | OAS |
|----------|----------|-------------|-----|
| Before (20% vol) | 100 bps | 49 bps | 51 bps |
| After (25% vol) | 100 bps | 60 bps | 40 bps |

**Why You Got It Wrong:**
You thought higher volatility would increase OAS. But OAS is what remains AFTER removing option cost. When option cost goes up and Z-spread stays constant, OAS must go down.

---

### Q20 — Capped Floating Rate Bond (Mock 2 - Plessinger)

**Full Vignette Context:**
Plessinger analyzes a 3-year, default-free capped floating rate bond with par value of $100. The bond pays an annual coupon equal to the 1-year reference rate, set in arrears, and capped at 5.0%.

**Interest Rate Tree shows rates exceeding 5% at:**
- Year 1 up node: 6.09%
- Year 2 up-up node: 7.32%

**Question:**
The value of the capped floating rate bond is:

A. less than its par value
B. equal to its par value
C. greater than its par value

**Your Answer:** B (equal to par)

**Correct Answer:** A (less than par)

**Full Explanation:**

**Key Concept: Uncapped vs Capped Floaters**

| Bond Type | Value at Reset |
|-----------|---------------|
| Uncapped floater | Always equals par at each reset date |
| **Capped floater** | **Less than par** when rates can exceed the cap |

**Why the Capped Floater is Worth Less Than Par:**

At nodes where rates exceed 5% cap:
- Bondholder receives only 5% instead of actual rate
- This lost interest reduces the bond's value below par

**Why You Got It Wrong:**
You confused this with an uncapped floater. The cap of 5% hurts the bondholder when rates exceed 5%, reducing the bond's value.

---

### Q31 — CDS Upfront Premium (Mock 2 - Kehoe)

**Full Vignette Context:**
Cathryn Kehoe is the senior credit analyst for a pension fund. The fund owns $5 million of a 7-year senior unsecured bond issued by Gonk Industries. Kehoe recommends buying $5 million of credit protection using a 5-year CDS.

**Exhibit 2 - CDS Data:**
| Item | Value |
|------|-------|
| Credit spread | 4.0% |
| Duration | 4.5 years |
| Coupon rate | 5.0% |

**Question:**
The upfront premium the fund would receive for purchasing the CDS protection on Gonk Industries is closest to:

A. $200,000
B. $225,000
C. $250,000

**Your Answer:** C ($250,000)

**Correct Answer:** B ($225,000)

**Full Explanation:**

**CDS Upfront Premium Formula:**
> Upfront Premium ≈ (Credit Spread – Fixed Coupon) × Duration × Notional

**Calculation:**
> Upfront Premium % = (4.0% – 5.0%) × 4.5 = –4.5%
> Upfront Premium $ = –4.5% × $5,000,000 = **–$225,000**

The negative sign indicates the protection SELLER pays the upfront premium to the protection BUYER.

**Why the Seller Pays:**
- Fixed coupon (5.0%) exceeds current credit spread (4.0%)
- Protection buyer will "overpay" through running coupon
- Seller compensates with upfront payment

**Why You Got It Wrong:**
You used maturity (5 years) instead of duration (4.5 years):
> Wrong: (4.0% – 5.0%) × 5.0 × $5M = –$250,000

**Key Rule:** Use CDS DURATION, not maturity, for upfront premium calculation.

---

### Q33 — Real Yields and GDP/Inflation (Mock 2 - Chu)

**Full Vignette Context:**
Martin Chu examines potential impact of GDP growth and inflation on default-free government bond yields in Countries A, B, and C.

**Exhibit 1:**
| Country | Forecast Change in Nominal GDP Growth | Forecast Change in Inflation |
|---------|--------------------------------------|------------------------------|
| A | +50 bps | +10 bps |
| B | +65 bps | +30 bps |
| C | –40 bps | +12 bps |

**Question:**
Based on Chu's forecasts, which bond market should experience the largest increase in real yields?

A. Country A
B. Country B
C. Country C

**Your Answer:** B (Country B)

**Correct Answer:** A (Country A)

**Full Explanation:**

**Real GDP Growth = Nominal GDP Growth – Inflation**

| Country | Nominal GDP Change | Inflation Change | Real GDP Change |
|---------|-------------------|------------------|-----------------|
| **A** | +50 bps | +10 bps | **+40 bps** |
| B | +65 bps | +30 bps | +35 bps |
| C | –40 bps | +12 bps | –52 bps |

Country A has the largest increase in real GDP growth (+40 bps), which leads to the largest increase in real yields.

**Why You Got It Wrong:**
You looked at nominal GDP growth (B has highest at +65 bps) instead of REAL GDP growth. Higher inflation partially offsets nominal growth.

---

### Q34 — Breakeven Inflation (Mock 2 - Chu)

**Full Vignette Context:**
In Country D, the YTM of zero-coupon inflation-protected bonds is 0.8% for 1-year and 1.0% for 2-year. The YTM of a 2-year zero-coupon nominal bond is 3.0%.

**Question:**
The expected 2-year average inflation rate in Country D is most likely:

A. less than 2%
B. equal to 2%
C. greater than 2%

**Your Answer:** B (equal to 2%)

**Correct Answer:** A (less than 2%)

**Full Explanation:**

**Breakeven Inflation (BEI):**
> BEI = Nominal Yield – Real Yield = 3.0% – 1.0% = 2.0%

**But BEI ≠ Expected Inflation!**

> BEI = Expected Inflation + Inflation Risk Premium

The nominal bond yield includes a risk premium for inflation uncertainty. Therefore:
> Expected Inflation = BEI – Inflation Risk Premium
> Expected Inflation < 2.0%

**Why You Got It Wrong:**
You equated breakeven inflation with expected inflation. The BEI of 2% overestimates expected inflation because it includes an inflation risk premium.

---
## Financial Statement Analysis

### Q6 — Current Rate Method Translation (Mock 1)

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

---

### Q8 — Hyperinflation Translation IFRS (Mock 1)

**Full Vignette Context:**
Celeste has acquired a subsidiary in a hyperinflationary economy. Under IFRS, the subsidiary prepares inflation-adjusted statements.

**Question:**
Is Romano correct about using the current rate for translating the hyperinflationary subsidiary?

A. Yes
B. No, because Celeste should use the temporal method
C. No, because Celeste should use the average exchange rate for the income statement

**Your Answer:** C (Use average rate for I/S)

**Correct Answer:** A (Yes — use current rate for everything)

**Full Explanation:**

**IFRS Hyperinflation — Two-Step Process:**

**Step 1:** Restate local currency financials for inflation (IAS 29)
**Step 2:** Translate ALL items at **current end-of-period rate**

| Item | Translation Rate |
|------|------------------|
| All balance sheet items | Current rate |
| All income statement items | **Current rate** (NOT average) |

**Why You Got It Wrong:**
Under normal current rate method, I/S uses average rate. But after hyperinflation restatement, everything is in current purchasing power terms, so current rate is used for everything.

**IFRS vs US GAAP:**
| Standard | Hyperinflation Treatment |
|----------|--------------------------|
| IFRS | Restate for inflation → Translate all at current rate |
| US GAAP | Use temporal method |

---

### Q22 — Stock-Based Compensation Tax Effects (Mock 1)

**Full Vignette Context:**
An analyst evaluates stock-based compensation tax effects. The stock price at vest date exceeds grant-date price.

**Question:**
The excess tax benefit from stock-based compensation most likely results in:

**Your Answer:** [Selected wrong effect]

**Correct Answer:** Decreases income tax expense

**Full Explanation:**

**Tax Deduction vs Book Expense:**
- **Book expense:** Based on grant-date fair value
- **Tax deduction:** Based on intrinsic value at exercise/vest

**When vest price > grant price:**
> Tax deduction > Book expense → **Excess tax benefit** → **Decreases tax expense**

**When vest price < grant price:**
> Tax deduction < Book expense → Tax shortfall → Increases tax expense

---

### Q23 — DB Pension Expense US GAAP (Mock 1)

**Full Vignette Context:**
Given:
- Current service cost: $200
- Interest cost: $2,940 (7% × $42,000)
- Expected return on plan assets: $3,120 (8% × $39,000)
- Actual return: $2,700

**Question:**
Under US GAAP, pension expense recognized in P&L is closest to:

**Your Answer:** [Used actual return]

**Correct Answer:** $20 (= 200 + 2,940 – 3,120)

**Full Explanation:**

**US GAAP Pension Expense:**
> Service Cost + Interest Cost – **Expected** Return + Amortizations
> $200 + $2,940 – $3,120 = **$20**

**Why You Got It Wrong:**
You used actual return ($2,700) instead of expected return ($3,120):
> Wrong: $200 + $2,940 – $2,700 = $440

**Key Distinction:**
| Component | US GAAP | IFRS |
|-----------|---------|------|
| Return on Assets | **Expected** return | Discount rate (net interest) |
| Difference | OCI (amortized) | OCI (no amortization) |

---

### Q24 — Full vs Partial Goodwill (Mock 1)

**Full Vignette Context:**
Apex purchases 80% of Beast Electronics for $24 million. Apex reports under US GAAP.

Given:
- Purchase price for 80%: $24 million
- FV of Beast's identifiable net assets: $25 million
- FV of entire Beast company: $30 million

**Question:**
Apex should recognize goodwill of:

A. $4 million
B. $5 million
C. $6 million

**Your Answer:** A ($4 million)

**Correct Answer:** B ($5 million)

**Full Explanation:**

**US GAAP requires FULL GOODWILL:**

> Full Goodwill = FV of Entire Entity – FV of Net Assets
> Full Goodwill = $30M – $25M = **$5 million**

**What you calculated (Partial Goodwill):**
> Partial = Consideration – (% × FV Net Assets)
> Partial = $24M – (80% × $25M) = $4M ← **Not allowed under US GAAP**

| Standard | Method |
|----------|--------|
| **US GAAP** | **Full goodwill only** |
| IFRS | Choice of full or partial |

---

### Q6 — Stock Options Compensation Expense (Mock 2 - Lonza)

**Full Vignette Context:**
Lonza granted 4 million stock options to employees on January 1. Options vest 3 years after grant, expire 6 years after grant. Fair value per option: EUR 1.8 at grant date.

**Question:**
For the current year, Lonza's compensation expense related to stock options will be:

A. EUR 1.2 million
B. EUR 2.4 million
C. EUR 7.2 million

**Your Answer:** A (EUR 1.2 million)

**Correct Answer:** B (EUR 2.4 million)

**Full Explanation:**

**Stock Option Expense Formula:**
> Annual Expense = (Options × FV per Option) / Vesting Period

**Calculation:**
> Total FV = 4 million × EUR 1.8 = EUR 7.2 million
> Annual Expense = EUR 7.2M / 3 years = **EUR 2.4 million**

**Why Each Answer:**
| Answer | Calculation | Error |
|--------|-------------|-------|
| A (1.2M) | 7.2M / 6 | Used expiry term instead of vesting period |
| **B (2.4M)** | 7.2M / 3 | **Correct** |
| C (7.2M) | 4M × 1.8 | Didn't divide by vesting period |

**Why You Got It Wrong:**
You divided by 6 years (expiry) instead of 3 years (vesting). Expense is recognized over the SERVICE period, not total option life.

---

### Q3 — Temporal Method Ratio Analysis (Mock 3 - Buttery Ranch)

**Full Vignette Context:**
Alex Tay analyzes Buttery Ranch International. Subsidiary Creamy Meadows uses Indonesian Rupiah (IDR). Buttery uses temporal method.

**Exchange Rates (Exhibit 2):**
| Date | IDR per USD |
|------|-------------|
| 1 January | 15,000 |
| Average | 14,700 |
| Weighted avg for inventory | 14,700 |
| 31 December | 14,000 |

**Question:**
Which ratio for Creamy most likely remains unchanged after translation?

A. Current ratio
B. COGS to sales ratio
C. Sales to receivables ratio

**Your Answer:** A (Current ratio)

**Correct Answer:** B (COGS to sales ratio)

**Full Explanation:**

**Temporal Method Rates:**
| Item | Rate |
|------|------|
| Sales | Average (14,700) |
| COGS | Historical when inventory purchased (14,700) |
| Receivables | Current (14,000) |
| Inventory | Historical (14,700) |

**Analysis:**
| Ratio | Num Rate | Denom Rate | Unchanged? |
|-------|----------|------------|------------|
| Current ratio | Mixed | Current | NO |
| **COGS/Sales** | **14,700** | **14,700** | **YES** |
| Sales/Receivables | 14,700 | 14,000 | NO |

**Why You Got It Wrong:**
Current ratio has mixed rates in numerator (inventory at historical, cash at current), so it changes after translation.

---

### Q21 — SPE Consolidation (Mock 3 - McAndrew)

**Full Vignette Context:**
Acme considers two options to raise EUR 40 million:
- Option 1: Borrow directly against EUR 50M receivables
- Option 2: Create SPE, invest EUR 10M, SPE borrows EUR 40M to buy receivables

Acme will influence SPE's policy and absorb any losses.

**Question:**
Acme's consolidated debt-to-assets ratio would most likely be:

A. lower under Option 1 compared to Option 2
B. the same under either option
C. higher under Option 1 compared to Option 2

**Your Answer:** A (lower under Option 1)

**Correct Answer:** B (same under either)

**Full Explanation:**

**IFRS Consolidation (IFRS 10, SIC-12):**

SPE must be consolidated when:
1. Ability to influence financial/operating policy ✓
2. Exposed to variable returns ✓

Both conditions met → **SPE must be consolidated**

**Result:** Consolidated statements look identical under both options:
- Debt increases by EUR 40M
- Receivables unchanged (sold to consolidated entity)

**Why You Got It Wrong:**
You thought SPE structure keeps debt "off balance sheet." But IFRS requires consolidation when control exists.

---

### Q22 — Accounting Warning Signs (Mock 3 - McAndrew)

**Full Vignette Context:**
McAndrew makes observations about Acme:
- Observation 1: Receivables growth < Revenue growth
- Observation 2: Management compensation tied to financial results
- Observation 3: Depreciable lives shorter than peers

**Question:**
Which is most likely a warning sign for overstated net income?

A. Observation 1
B. Observation 2
C. Observation 3

**Your Answer:** A (Receivables < Revenue growth)

**Correct Answer:** B (Compensation tied to results)

**Full Explanation:**

| Observation | Warning Sign? | Why |
|-------------|---------------|-----|
| 1: Receivables < Revenue | **NO** | This is GOOD — quality revenue |
| **2: Comp tied to results** | **YES** | Creates manipulation incentive |
| 3: Shorter lives | **NO** | CONSERVATIVE — accelerates expense |

**Why You Got It Wrong:**
Receivables growing FASTER than revenue would be a warning (poor collection or aggressive recognition). Slower growth is positive.

**Warning Signs:**
| Indicator | Warning Version |
|-----------|-----------------|
| Receivables vs Revenue | Receivables > Revenue growth |
| Depreciable lives | LONGER than peers |
| Comp structure | Tied to financial results |

---

## Equity Valuation

### Q5 — Forward vs Trailing P/E (Mock 1)

**Full Vignette Context:**
An analyst observes a company's forward P/E is lower than trailing P/E.

**Question:**
This relationship indicates:

**Your Answer:** [Incorrect interpretation]

**Correct Answer:** Earnings are expected to RISE

**Full Explanation:**

**P/E = Price / EPS**

| Ratio | Denominator |
|-------|-------------|
| Trailing P/E | Past 12 months EPS |
| Forward P/E | Next 12 months expected EPS |

**If Forward P/E < Trailing P/E:**
> Forward denominator > Trailing denominator
> **Earnings are RISING**

**Memory Trick:**
> Lower forward P/E = Higher expected earnings = Good news

---

### Q10 — Target Payout Adjustment Model (Mock 1)

**Full Vignette Context:**
Given:
- Previous dividend: $2.00
- Expected EPS: $5.00
- Target payout: 50%
- Adjustment factor: 0.25

**Question:**
The expected dividend increase is closest to:

**Your Answer:** [Calculation error]

**Correct Answer:** $0.125

**Full Explanation:**

**Formula:**
> Increase = (Expected EPS × Target Payout – Previous Div) × Adjustment Factor

**Calculation:**
> Target Dividend = $5.00 × 50% = $2.50
> Gap = $2.50 – $2.00 = $0.50
> Expected Increase = $0.50 × 0.25 = **$0.125**
> New Dividend = $2.00 + $0.125 = **$2.125**

---

### Q27 — Residual Income Persistence (Mock 1)

**Full Vignette Context:**
A company has persistence factor of 0.12, one-quarter of industry average (0.48).

**Question:**
This low persistence is most consistent with:

A. Lower dividend payouts
B. Lower accounting returns
C. Higher accounting accruals

**Your Answer:** B (Lower accounting returns)

**Correct Answer:** C (Higher accounting accruals)

**Full Explanation:**

**Lower Persistence (ω → 0) Caused By:**
| Factor | Effect |
|--------|--------|
| High dividend payout | ↓ Lower |
| **Extreme** ROE | ↓ Lower |
| **High accruals** | ↓ Lower |

**Why You Got It Wrong:**
"Lower" ROE doesn't reduce persistence — **extreme** ROE (very high OR very low) does. High accruals suggest low earnings quality → lower persistence.

---

### Q28 — Finite-Horizon RI Model (Mock 1)

**Full Vignette Context:**
Given:
- Current book value: €18.50
- PV of RI Year 1: €2.25
- PV of RI Year 2: €2.00
- Book value end of Year 2: €23.75
- Market price end of Year 2: €26.50
- Cost of equity: 12.8%
- WACC: 6.5%

**Question:**
PrimaNet's intrinsic value per share is closest to:

A. €24.91
B. €25.17
C. €25.50

**Your Answer:** B (€25.17)

**Correct Answer:** A (€24.91)

**Full Explanation:**

**Formula:**
> V₀ = B₀ + Σ PV(RI) + PV(Terminal Premium)

**Terminal Premium:**
> = Market Price – Book Value = €26.50 – €23.75 = €2.75

**Discount at COST OF EQUITY:**
> PV = €2.75 / (1.128)² = €2.75 / 1.272 = **€2.16**

**Total:**
> V₀ = €18.50 + €2.25 + €2.00 + €2.16 = **€24.91**

**Why You Got It Wrong:**
You used WACC (6.5%) instead of cost of equity (12.8%):
> Wrong: €2.75 / (1.065)² = €2.42 → Total €25.17

**Key Rule:**
> Equity valuation models use **cost of equity**, not WACC.

---

### Q29 — FCFF vs FCFE Model Selection (Mock 2 - McCormick)

**Full Vignette Context:**
Firm A:
- Consistently positive FCFE past decade
- Starting aggressive debt-financed growth
- Highly fluctuating net borrowing expected
- Growth 25-35% declining to 2%

**Question:**
Most appropriate valuation approach:

A. Two-stage FCFE model
B. Three-stage FCFE model
C. Three-stage FCFF model

**Your Answer:** A (Two-stage FCFE)

**Correct Answer:** C (Three-stage FCFF)

**Full Explanation:**

**Two Considerations:**

1. **Number of Stages:** Growth has THREE phases:
   - High growth (25-35%)
   - Declining growth (transition)
   - Stable growth (2%)

2. **FCFF vs FCFE:** When capital structure changes significantly → use FCFF
   - "Highly fluctuating net borrowing" = changing leverage
   - FCFE unreliable with volatile debt

| Answer | Problem |
|--------|---------|
| A (2-stage FCFE) | Wrong stages AND wrong cash flow |
| B (3-stage FCFE) | Right stages but wrong for changing leverage |
| **C (3-stage FCFF)** | **Correct** |

---

## Derivatives

### Q2 — American Put Binomial Valuation (Mock 1)

**Full Vignette Context:**
American put on Wilbo Corporation, 2-year maturity.
- Current price: $100
- Exercise price: $98
- Risk-free rate: 5%
- Risk-neutral probability: 0.625
- Up factor: 1.20, Down factor: 0.80
- S+ = $120, S- = $80
- S++ = $144, S+- = $96, S-- = $64

**Question:**
Value of American put is closest to:

A. $5.19
B. $6.85
C. $12.90

**Your Answer:** A ($5.19)

**Correct Answer:** B ($6.85)

**Full Explanation:**

**Step 1: Put values at T=2**
| Node | Stock | Put Value |
|------|-------|-----------|
| S++ | $144 | max[0, 98-144] = $0 |
| S+- | $96 | max[0, 98-96] = $2 |
| S-- | $64 | max[0, 98-64] = $34 |

**Step 2: Values at T=1**

At S+ = $120:
> Continuation = [0.625(0) + 0.375(2)] / 1.05 = $0.71
> Exercise = max[0, 98-120] = $0
> Value = max[$0.71, $0] = **$0.71**

At S- = $80:
> Continuation = [0.625(2) + 0.375(34)] / 1.05 = $13.33
> Exercise = max[0, 98-80] = **$18**
> Value = max[$13.33, $18] = **$18** (EARLY EXERCISE!)

**Step 3: Value at T=0**
> V₀ = [0.625(0.71) + 0.375(18)] / 1.05 = **$6.85**

**Why You Got It Wrong:**
$5.19 is the European put value (no early exercise). At S- = $80, early exercise gives $18 > $13.33 continuation value.

---

### Q18 — Covered Interest Parity Forward (Mock 1)

**Full Vignette Context:**
Given:
- 6-month annualized US rate: 0.50%
- 6-month annualized NZ rate: 1.00%
- Spot USD/NZD: 0.6808

**Question:**
6-month forward USD/NZD is closest to:

A. 0.6774
B. 0.6791
C. 0.6825

**Your Answer:** A (0.6774)

**Correct Answer:** B (0.6791)

**Full Explanation:**

**CIP Formula:**
> F = S × (1 + r_price × period) / (1 + r_base × period)

**Adjust rates for 6 months:**
> US rate = 0.50% / 2 = 0.25%
> NZ rate = 1.00% / 2 = 0.50%

**Calculation:**
> F = 0.6808 × (1.0025) / (1.005) = **0.6791**

**Why You Got It Wrong:**
You used full annual rates:
> Wrong: 0.6808 × (1.005) / (1.01) = 0.6774

**Key Rule:** Adjust rates to match forward period!

---

### Q34 — FRA No-Arbitrage Rate (Mock 2 - Knizek)

**Full Vignette Context:**
Knizek wants to lock in 6-month rate starting in 1 month.

**US Rates:**
| Maturity | Rate |
|----------|------|
| 1-month | 0.60% |
| 6-month | 0.81% |
| 7-month | 0.87% |

**Question:**
The no-arbitrage FRA rate is closest to:

A. 0.71%
B. 0.91%
C. 1.12%

**Your Answer:** A (0.71%)

**Correct Answer:** B (0.91%)

**Full Explanation:**

**This is a 1 × 7 FRA** (starts month 1, ends month 7)

**Formula:**
> FRA = {[1 + L₇ × (210/360)] / [1 + L₁ × (30/360)] – 1} / (180/360)

**Calculation:**
> = {[1 + 0.0087 × (210/360)] / [1 + 0.0060 × (30/360)] – 1} / 0.5
> = {1.005075 / 1.0005 – 1} / 0.5
> = 0.004573 / 0.5 = **0.91%**

**Why You Got It Wrong:**
You used 6-month rate (0.81%) instead of 7-month rate (0.87%).

---

### Q35 — Reverse Carry Arbitrage (Mock 2 - Knizek)

**Full Vignette Context:**
Knizek finds bond forward price below fair value.

**Question:**
To exploit arbitrage, in addition to buying forward, Knizek should:

A. borrow and buy the underlying
B. borrow and short sell the underlying
C. short sell underlying and invest proceeds at risk-free rate

**Your Answer:** A (borrow and buy)

**Correct Answer:** C (short sell and invest)

**Full Explanation:**

**When Forward Price < Fair Value:**

| Step | Action |
|------|--------|
| 1 | Buy forward (done) |
| 2 | **Short sell** underlying |
| 3 | **Invest** proceeds at risk-free rate |

**Logic:**
- Forward is "cheap" → buy it
- Spot is "expensive" → sell it (short)
- Invest cash proceeds until forward settlement

**Why You Got It Wrong:**
"Borrow and buy" is for when forward is OVERPRICED. When underpriced, do the reverse.

---

### Q36 — Forward MTM Value (Mock 2 - Knizek)

**Full Vignette Context:**
3 months after entering forward:
- Current forward bid: 108.15
- Original forward price: 109.30
- 3-month rate: 0.65%
- Position: 100 contracts × 100,000 PLN

**Question:**
Fair value of forward position is closest to:

A. –114,800
B. –105,200
C. +114,800

**Your Answer:** C (+114,800)

**Correct Answer:** A (–114,800)

**Full Explanation:**

**Formula:**
> V_t = PV[F_t – F₀]

**Calculation:**
> V_t = (108.15 – 109.30) / (1 + 0.0065)^(3/12)
> = –1.15 / 1.00162 = –1.148%

**Total position:**
> = –1.148% × 100 contracts × 100,000 PLN = **–114,800 PLN**

**Why You Got It Wrong:**
You subtracted in wrong order. Long forward LOSES when price falls.

---
## Portfolio Management

### Q15 — VaR Types (Mock 1)

**Full Vignette Context:**
A risk manager evaluates different VaR measures.

**Question:**
Which VaR measures change in portfolio VaR from adding/changing a position?

**Your Answer:** [Wrong type]

**Correct Answer:** Incremental VaR

**Full Explanation:**

| VaR Type | Definition |
|----------|------------|
| **Incremental VaR** | Change from adding/changing position |
| Marginal VaR | Per-unit change for small position change |
| Component VaR | Contribution to total portfolio VaR |
| CVaR/ES | Expected loss given VaR exceeded |

**Memory Trick:**
> "Incremental" = What if I INCREMENT this position?

---

### Q31 — Information Coefficient and Active Weights (Mock 1)

**Full Vignette Context:**
Souza wants smaller optimal active weights.

**Question:**
Which would result in smaller weights?

A. Decrease IC and target active risk
B. Increase IC and decrease target active risk
C. Decrease IC and increase target active risk

**Your Answer:** A

**Correct Answer:** B

**Full Explanation:**

| Factor | Effect on Weights |
|--------|-------------------|
| Higher IC | **Smaller** weights |
| Lower target risk | **Smaller** weights |

**For smaller weights:** Need higher IC AND/OR lower target risk.

Answer B achieves both.

**Why higher IC → smaller weights?**
More skill means you don't need extreme bets to generate alpha.

---

### Q32 — Transfer Coefficient (Mock 1)

**Full Vignette Context:**
Client has constraints on sector over/underweights.

**Question:**
Constraints most likely reduce:

A. Breadth
B. Transfer coefficient
C. Information coefficient

**Your Answer:** A (Breadth)

**Correct Answer:** B (Transfer coefficient)

**Full Explanation:**

| Component | Affected by Constraints? |
|-----------|-------------------------|
| IC | No — skill unchanged |
| **TC** | **Yes — limits implementation** |
| Breadth | No — same number of decisions |

**TC** measures how well you translate forecasts into weights. Constraints directly limit implementation ability.

---

### Q9 — Backtesting Rolling Windows (Mock 2 - Grap)

**Full Vignette Context:**
Grap backtests 10-factor strategy with risk parity weighting:
- Monthly rebalancing
- 12-month lookback for factor ranking

**Question:**
Grap's model will require:

A. Non-overlapping rolling windows
B. Two iterations of rolling-window procedure
C. 13-month in-sample period

**Your Answer:** A (Non-overlapping)

**Correct Answer:** B (Two iterations)

**Full Explanation:**

**Why TWO Iterations:**

1. **Iteration 1:** Construct factor portfolios
   - Rank stocks, form long/short portfolios

2. **Iteration 2:** Calculate risk parity weights
   - Estimate covariance matrix
   - Compute risk parity weights

Both must use only historical data to avoid look-ahead bias.

**Why Not A:**
Rolling windows SHOULD overlap for monthly rebalancing. Each window shares 11 months with previous.

---

### Q11 — Annual Parametric VaR (Mock 2 - Grap)

**Full Vignette Context:**
Strategy has:
- Monthly mean return: 0.5%
- Monthly std dev: 7.1%
- 5% VaR = 1.65 std dev below mean

**Question:**
Annual 5% VaR is closest to:

A. 11.2%
B. 34.6%
C. 38.8%

**Your Answer:** A (11.2%)

**Correct Answer:** B (34.6%)

**Full Explanation:**

**Step 1: Annualize parameters**
> Annual return = 12 × 0.5% = 6.0%
> Annual std dev = √12 × 7.1% = 24.6%

**Step 2: Calculate VaR**
> VaR = –[6.0% – 1.65 × 24.6%]
> = –[6.0% – 40.6%] = **34.6%**

**Why Each Answer:**
| Answer | Error |
|--------|-------|
| A (11.2%) | Monthly VaR, not annualized |
| **B (34.6%)** | **Correct** |
| C (38.8%) | Incorrectly annualized monthly VaR |

**Why You Got It Wrong:**
You calculated monthly VaR. Must annualize parameters FIRST, then calculate VaR.

---

### Q12 — Maximum Drawdown (Mock 2 - Grap)

**Full Vignette Context:**
Grap needs complementary risk measure for equity market-neutral strategy benchmarked against cash.

**Question:**
Which risk measure should Grap use?

A. Relative VaR
B. Surplus at risk
C. Maximum drawdown

**Your Answer:** A (Relative VaR)

**Correct Answer:** C (Maximum drawdown)

**Full Explanation:**

| Measure | Appropriate For |
|---------|-----------------|
| Relative VaR | Tracking error vs benchmark |
| Surplus at risk | Pension fund surplus |
| **Max drawdown** | **Hedge fund downside risk** |

**Why Not Relative VaR:**
With cash benchmark (zero volatility), relative VaR = regular VaR. No additional information.

**Why Max Drawdown:**
For market-neutral strategies, max drawdown captures worst peak-to-trough decline — key for absolute return assessment.

---

### Q13 — ETF Holding Period Cost (Mock 2 - Li)

**Full Vignette Context:**
ETF 1:
- Annual management fee: 0.50%
- One-way commission: 0.10%
- Bid-ask spread: 0.20%

**Question:**
1-year holding period cost is:

A. 0.80%
B. 0.90%
C. 1.10%

**Your Answer:** A (0.80%)

**Correct Answer:** B (0.90%)

**Full Explanation:**

**Round-trip Trading Cost:**
> = (One-way commission × 2) + (½ × Bid-ask × 2)
> = (0.10% × 2) + (0.20%)
> = 0.20% + 0.20% = 0.40%

**Total Cost:**
> = 0.40% + 0.50% = **0.90%**

**Why You Got It Wrong:**
You used one-way commission (0.10%) instead of round-trip (0.20%).

---

## Economics

### Q13 — Neoclassical Steady-State Growth (Mock 1)

**Full Vignette Context:**
Country A data:
| Indicator | Value |
|-----------|-------|
| Labor force growth | 0.9% |
| Labor share | 55.2% |
| TFP growth | 2.1% |

**Question:**
Steady-state growth rate is closest to:

A. 3.8%
B. 4.7%
C. 5.6%

**Your Answer:** C (5.6%)

**Correct Answer:** B (4.7%)

**Full Explanation:**

**Formula:**
> ΔY/Y = θ/(1-α) + n

Where:
- θ = TFP = 2.1%
- (1-α) = Labor share = 55.2%
- n = Labor growth = 0.9%

**Calculation:**
> = 2.1% / 0.552 + 0.9%
> = 3.80% + 0.9% = **4.7%**

**Why You Got It Wrong:**
You divided by capital share (44.8%) instead of labor share (55.2%):
> Wrong: 2.1% / 0.448 + 0.9% = 5.6%

---

### Q20 — Currency Crisis Warning Signs (Mock 1)

**Full Vignette Context:**
Country B conditions:
1. Slight decline in foreign equity investment
2. Broad money growth with declining M2/bank reserves
3. Sizable decline in FX reserves

**Question:**
Which is most likely a warning sign?

A. Condition 1
B. Condition 2
C. Condition 3

**Your Answer:** B

**Correct Answer:** C (Condition 3)

**Full Explanation:**

| Condition | Warning Sign? | Why |
|-----------|---------------|-----|
| 1: Declining foreign investment | NO | Large INFLOWS precede crises |
| 2: Declining M2/reserves | NO | RISING ratio is warning |
| **3: Declining FX reserves** | **YES** | Central bank defending currency |

**Why You Got It Wrong:**
M2/reserves tends to RISE before crises. Declining ratio is opposite of warning sign.

---

### Q10 — Economic Growth Points (Mock 3 - Smith)

**Full Vignette Context:**
Team Green presents points on growth:
- Point 1: R&D spending → positive short-run growth
- Point 2: TFP = capital deepening + labor productivity
- Point 3: Investment impact depends on existing capital stock

**Question:**
Which point is correct?

A. Point 1
B. Point 2
C. Point 3

**Your Answer:** B (Point 2)

**Correct Answer:** C (Point 3)

**Full Explanation:**

| Point | Correct? | Why |
|-------|----------|-----|
| 1 | NO | R&D may cause short-term disruption (creative destruction) |
| 2 | NO | Formula backwards: Labor prod = capital deepening + TFP |
| **3** | **YES** | Low capital stock → larger investment impact |

**Why Point 2 is Wrong:**
Correct relationship:
> Labor Productivity = Capital Deepening + TFP

TFP is a RESIDUAL, not a sum.

---

### Q11 — Convergence Theory (Mock 3 - Smith)

**Full Vignette Context:**
Team Purple concludes externalities from human capital is most important determinant of convergence.

**Question:**
Which convergence concept is compatible?

A. Non-convergence
B. Absolute convergence
C. Conditional convergence

**Your Answer:** B (Absolute convergence)

**Correct Answer:** A (Non-convergence)

**Full Explanation:**

When human capital externalities are large:
- Production function becomes LINEAR
- Eliminates diminishing returns
- No force pushing toward convergence

| Theory | Production Function | Prediction |
|--------|---------------------|------------|
| Absolute | Diminishing returns | All converge |
| Conditional | Diminishing returns | Same parameters converge |
| **Non-convergence** | **Constant returns** | **Rich stay ahead** |

**Why You Got It Wrong:**
Absolute convergence requires diminishing returns. Large externalities offset diminishing returns → non-convergence.

---

### Q12 — Trade Opening Effects (Mock 3 - Smith)

**Full Vignette Context:**
Team Orange descriptions of trade opening:
1. Capital exporters grow above steady state
2. Developed countries run trade deficits
3. High K/L countries have lower investment returns

**Question:**
Which is consistent with neoclassical model?

A. Description 1
B. Description 2
C. Description 3

**Your Answer:** B (Description 2)

**Correct Answer:** C (Description 3)

**Full Explanation:**

| Description | Correct? | Why |
|-------------|----------|-----|
| 1 | NO | Capital outflows → growth BELOW steady state |
| 2 | NO | Capital exporters run SURPLUSES |
| **3** | **YES** | High K/L → diminishing MPK → lower returns |

**Why Description 2 is Wrong:**
Capital exports → Trade SURPLUS (not deficit)
> Capital outflow = Financial account deficit = Current account surplus

---

## Quantitative Methods

### Q37 — Cointegration Testing (Mock 1)

**Full Vignette Context:**
Silva tests:
- H1: ln(PRIV) has unit root
- H2: ln(PUBL) has unit root
- H3: Error term has unit root

**Question:**
Series are cointegrated if:

A. Reject only H3
B. Reject all three
C. Fail to reject all three

**Your Answer:** C (Fail to reject all)

**Correct Answer:** A (Reject only H3)

**Full Explanation:**

**Cointegration Requirements:**
| Hypothesis | Required Result |
|------------|-----------------|
| H1: Series 1 unit root | **Fail to reject** (non-stationary) |
| H2: Series 2 unit root | **Fail to reject** (non-stationary) |
| H3: Residuals unit root | **REJECT** (stationary) |

**Cointegration means:** Two non-stationary series combine to form stationary series.

---

### Q39 — ARCH Testing (Mock 1)

**Full Vignette Context:**
Silva estimates AR(1) and runs:
- Regression 1: ε on lagged ε → t-stat = 0.70
- Regression 2: ε² on lagged ε² → t-stat = 2.94
- Critical value: 1.97

**Question:**
Is model misspecified?

A. No
B. Yes, serial correlation
C. Yes, ARCH

**Your Answer:** A (No)

**Correct Answer:** C (Yes, ARCH)

**Full Explanation:**

| Test | t-stat | Critical | Result |
|------|--------|----------|--------|
| Serial correlation (Reg 1) | 0.70 | 1.97 | Not significant |
| **ARCH (Reg 2)** | **2.94** | 1.97 | **Significant** |

**2.94 > 1.97 → ARCH present → Model misspecified**

**Why You Got It Wrong:**
You only checked Regression 1 (no serial correlation). Regression 2 shows significant ARCH.

---

### Q40 — Feature Selection (Mock 1)

**Full Vignette Context:**
Silva develops sentiment indicator, needs to select tokens that occur more in particular class.

**Question:**
Select tokens with:

A. Lowest TF
B. Highest MI
C. Highest DF

**Your Answer:** C (Highest DF)

**Correct Answer:** B (Highest MI)

**Full Explanation:**

| Measure | Definition | Action |
|---------|------------|--------|
| High TF | Frequent in document | Remove (stop words) |
| High DF | In many documents | Remove (no discrimination) |
| **High MI** | **Class-associated** | **KEEP (classifier)** |

**MI (Mutual Information):** Measures association with specific class.

**Why You Got It Wrong:**
High DF means token appears everywhere — no discriminating power.

---

### Q25 — ML Algorithm Selection (Mock 2 - Moreno)

**Full Vignette Context:**
Moreno classifies bond issuers by default probability. Issuers are not linearly separable. Wants algorithm that:
- Addresses non-linear separability
- Not prone to overfitting

**Question:**
Most suitable algorithm:

A. Non-linear SVM
B. Unconstrained CART
C. SVM with soft margin classification

**Your Answer:** A (Non-linear SVM)

**Correct Answer:** C (SVM with soft margin)

**Full Explanation:**

| Algorithm | Handles Non-linearity? | Overfitting Risk |
|-----------|------------------------|------------------|
| Non-linear SVM | Yes | **High** — complex boundaries |
| Unconstrained CART | Yes | **High** — can perfectly fit |
| **Soft margin SVM** | **Yes** | **Low** — penalty for misclassification |

**Soft margin classification:** Adds penalty for misclassified observations, optimizing trade-off between margin width and error.

---

### Q27 — R-squared Comparison (Mock 2 - Moreno)

**Full Vignette Context:**
Model 2: ROE ~ PROFIT + COVER
Model 3: ROE ~ PROFIT + COVER + QUICK

QUICK coefficient t-stat = 1.9204

**Question:**
Compared to Model 2, Model 3 has:

A. Lower R² and higher adjusted R²
B. Higher R² and lower adjusted R²
C. Higher R² and higher adjusted R²

**Your Answer:** A or B

**Correct Answer:** C (Higher R² and higher adjusted R²)

**Full Explanation:**

**Key Rules:**
1. Adding variable → R² always increases (or stays same)
2. If |t-stat| > 1.0 → Adjusted R² increases

**Analysis:**
- QUICK t-stat = 1.9204 > 1.0
- Therefore: R² ↑ AND Adjusted R² ↑

**Note:** Even though p-value > 0.05 (not significant at 5%), adjusted R² still increases because |t| > 1.

---

### Q28 — Residual Plot Interpretation (Mock 2 - Moreno)

**Full Vignette Context:**
Model 4: ROE ~ SALES
Residual plot shows variance increasing with SALES.

**Question:**
Most appropriate conclusion:

A. Unconditional heteroskedasticity
B. Non-linear relationship
C. F-test unreliable

**Your Answer:** A (Unconditional heteroskedasticity)

**Correct Answer:** C (F-test unreliable)

**Full Explanation:**

Variance increasing with independent variable = **Conditional heteroskedasticity**

**Effects:**
- F-test becomes unreliable
- t-statistics biased
- More Type I errors

**Why Not A:**
UNconditional heteroskedasticity means variance NOT correlated with X. Here variance IS correlated with SALES → CONDITIONAL.

---

### Q8 — Time Series Forecast (Mock 3 - Aoun)

**Full Vignette Context:**
Circuitcraft AR(2) model on first-differenced sales growth:
- Intercept: 0.0024
- Coefficient on (Δt-1): –0.2021
- Coefficient on (Δt-2): –0.5272

Recent data:
- Sales Growth₅₀ = 18.9%
- Sales Growth₄₉ = 2.0%
- Sales Growth₄₈ = –11.5%

**Question:**
1-period-ahead forecast is closest to:

A. –4.6%
B. 8.6%
C. 29.7%

**Your Answer:** A (–4.6%)

**Correct Answer:** B (8.6%)

**Full Explanation:**

**Model:**
> ΔSales Growth_t = 0.0024 – 0.2021 × ΔSG_{t-1} – 0.5272 × ΔSG_{t-2}

**Calculate changes:**
> ΔSG₅₀ = 18.9% – 2.0% = 16.9%
> ΔSG₄₉ = 2.0% – (–11.5%) = 13.5%

**Forecast change:**
> ΔSG₅₁ = 0.0024 – 0.2021(0.169) – 0.5272(0.135)
> = 0.24% – 3.42% – 7.12% = –10.3%

**Forecast level:**
> SG₅₁ = SG₅₀ + ΔSG₅₁ = 18.9% – 10.3% = **8.6%**

**Why You Got It Wrong:**
You may have used levels instead of changes in the formula.

---

## Alternatives

### Q42 — Commodity Futures Total Return (Mock 1)

**Full Vignette Context:**
Calculate total return on commodity futures.

**Question:**
Total return is closest to:

**Your Answer:** [Missing components]

**Correct Answer:** Include all three components

**Full Explanation:**

**Total Return:**
> = Price Return + Roll Return + Collateral Return

| Component | Formula |
|-----------|---------|
| Price Return | (Spot_end – Spot_begin) / Spot_begin |
| Roll Return | (Near – Far) / Near |
| Collateral Return | Risk-free rate × Period |

**Roll Return:**
- Backwardation (near > far): Positive
- Contango (near < far): Negative

---

### Q21 — Liquid Alternatives (Mock 2 - Chang)

**Full Vignette Context:**
Chang's requirements:
1. Lower incentive fee than traditional hedge funds
2. More frequent redemptions than traditional hedge funds

**Question:**
Do liquid alternatives meet requirements?

A. Yes
B. No, fail Requirement 1
C. No, fail Requirement 2

**Your Answer:** B or C

**Correct Answer:** A (Yes)

**Full Explanation:**

**Liquid Alternatives vs Traditional HFs:**

| Feature | Liquid Alts | Traditional HF |
|---------|-------------|----------------|
| Incentive fee | **None** (prohibited) | ~20% |
| Redemption | **Daily** | Periodic/lockup |

Both requirements met.

---

### Q22 — Multi-Strategy vs Fund of Funds (Mock 2 - Chang)

**Full Vignette Context:**
Comparing Strategy 1 (multi-strategy) vs Strategy 2 (fund of funds).

**Question:**
Compared to FoF, multi-strategy most likely has:

A. Higher returns
B. Lower leverage
C. Fewer gates on redemptions

**Your Answer:** B or C

**Correct Answer:** A (Higher returns)

**Full Explanation:**

| Feature | Multi-Strategy | FoF |
|---------|----------------|-----|
| **Returns** | **Higher** (but more volatile) | Lower |
| Leverage | **Higher** | Lower |
| Gates | Often has gates | Fewer gates |

Multi-strategy outperforms due to flexibility and faster tactical allocation.

---

### Q24 — Drawdown Objective (Mock 2 - Chang)

**Full Vignette Context:**
Pension plan wants to limit drawdowns when combined with stock/bond portfolio.

**Question:**
Best strategy for drawdown objective:

A. Event-driven
B. Global macro
C. Relative value

**Your Answer:** A or C

**Correct Answer:** B (Global macro)

**Full Explanation:**

**Strategies with Lowest Drawdowns When Combined:**
- Global macro ✓
- Systematic futures ✓
- Merger arbitrage ✓
- Equity market-neutral ✓

**High Drawdown Strategies:**
- Event-driven ✗
- Relative value ✗
- Long/short equity ✗

Global macro provides risk mitigation because it's:
- Not exposed to same risks
- Opportunistic
- Liquid during stress

---

### Q37 — Real Estate Index Choice (Mock 2 - Friso)

**Full Vignette Context:**
Friso uses appraisal-based real estate index for mean-variance optimization.

**Question:**
Friso's choice results in:

A. Understated volatility
B. Underestimated Sharpe ratio
C. Higher correlation with portfolio

**Your Answer:** B or C

**Correct Answer:** A (Understated volatility)

**Full Explanation:**

**Appraisal-Based Index Problems:**
| Issue | Effect |
|-------|--------|
| Appraisal lag | Smooths returns |
| **Volatility** | **Understated** |
| Sharpe ratio | **Overstated** (lower vol) |
| Correlation | **Lower** (lag reduces co-movement) |

---
## Ethics

### Q33 — Performance Presentation (Mock 1)

**Full Vignette Context:**
Diana Brown, CFA, is compliance officer. Firm terminated accounts during year.

**Question:**
Regarding terminated accounts in composites:

**Your Answer:** [Incomplete understanding]

**Correct Answer:** Must disclose termination dates

**Full Explanation:**

**Standard III(D) Performance Presentation:**
- CAN include terminated accounts in composite
- MUST disclose termination dates
- Omitting dates = VIOLATION

---

### Q34 — Fair Dealing IPO Allocation (Mock 1)

**Full Vignette Context:**
Firm receives hot IPO allocation.

**Question:**
To comply with Standard III(B), shares should be allocated:

**Your Answer:** [Excluded account types]

**Correct Answer:** Pro-rata to ALL suitable accounts

**Full Explanation:**

**Must Include:**
- ✓ Discretionary accounts
- ✓ Non-discretionary (with prior interest)
- ✓ Family accounts
- ✓ Fee-paying and non-fee-paying

Excluding any category = VIOLATION

---

### Q42 — Cromwell Recommendation (Mock 3 - Dines Ethics)

**Full Vignette Context:**
Mary Dines, CFA, is a senior portfolio manager. Dines informs client Kagan of premium services (direct access to senior research) at additional cost. Kagan declines premium services. Days later, Prism publishes a SELL recommendation on Cromwell Inc. Dines sets up calls for premium clients with the analyst but not for Kagan. The next day, Kagan calls Dines asking to BUY Cromwell shares. Dines knows Kagan is an expert in cybersecurity. She executes the buy order without informing him of the firm's recent recommendation change.

**Question:**
Does Dines violate the Standards in her actions related to Cromwell?

A. No
B. Yes, because of her actions related to the buy order for Kagan's account
C. Yes, because of her actions related to setting up calls with the senior analyst

**Your Answer:** A (No)

**Correct Answer:** B (Yes, violated with buy order)

**Full Explanation:**

**Standard III(B) Fair Dealing Analysis:**

**Setting up analyst calls (NOT a violation):**
- Premium clients pay extra for this service
- Kagan chose not to purchase premium services
- Dines waited until AFTER report publication to set up calls
- No advance information was provided

**Buy order execution (VIOLATION):**
- Client placed order CONTRARY to current firm recommendation
- Standard III(B) recommends: "If clients place orders contrary to a current recommendation, they should be advised of the changed recommendation before the order is accepted"
- Dines assumed Kagan's expertise meant he knew, but should have informed him
- Failing to disclose the sell recommendation before executing buy = **VIOLATION**

**Why You Got It Wrong:**
You focused on the analyst calls (which were handled correctly) and assumed Kagan's expertise justified not informing him. But the Standard requires disclosure of contrary recommendations regardless of client expertise.

---

### Q44 — Priority of Transactions (Mock 1)

**Full Vignette Context:**
Denton recommends Bio13 to Hunter. Hunter requests 30-day delay. Denton buys personally immediately, then executes Hunter's order 30 days later.

**Question:**
Did Denton violate Standards?

A. Yes
B. No, violated market manipulation
C. No, violated priority of transactions

**Your Answer:** C (Violated priority)

**Correct Answer:** A (Yes, no violation)

**Full Explanation:**

**Why NO Violation:**

1. **Hunter requested delay** — client voluntarily chose not to trade
2. **No pending order** — front-running requires trading ahead of existing order
3. **Bio13 not suitable for others** — no obligation to other clients
4. **Price impact temporary** — no lasting disadvantage

**Key Distinction:**
- Front-running: Trading ahead of pending client order
- This case: Client requested future purchase; no order existed

---

### Q44 — Additional Compensation - Yacht (Mock 3 - Dines Ethics)

**Full Vignette Context:**
Kagan offers Dines a bonus equal to 1% of profits above 12% annual return target. Dines obtains written permission and accepts. Additionally, Kagan offers Dines use of his luxury yacht over the weekend. Dines uses the yacht but does not inform her employer as the offer is not related to the return target.

**Question:**
Does Dines violate the Standards with respect to either Kagan's bonus offer or the use of his yacht?

A. No
B. Yes, with respect to Kagan's bonus offer
C. Yes, with respect to the use of Kagan's yacht

**Your Answer:** A (No violation)

**Correct Answer:** C (Yes, yacht violates Standards)

**Full Explanation:**

**Bonus Arrangement (NO violation):**
- Dines obtained written permission from employer ✓
- Profit-sharing with clients is allowed if disclosed and approved
- Standard IV(B) Additional Compensation Arrangements satisfied

**Yacht Usage (VIOLATION):**
- Standard IV(B) requires disclosure of gifts/benefits that could create conflicts
- Using client's luxury yacht = valuable benefit
- Creates potential conflict to favor Kagan over other clients
- **Must be disclosed and approved by employer**
- Dines did NOT inform employer → VIOLATION

**Why "Not Related to Return Target" Doesn't Matter:**
The yacht usage creates an independent conflict of interest. The fact that it's unrelated to the performance bonus is irrelevant — ANY benefit from a client that could create conflicts must be disclosed.

**Why You Got It Wrong:**
You likely thought only the monetary bonus arrangement needed disclosure. But Standard IV(B) covers ALL compensation and benefits that might create conflicts, including non-monetary gifts like yacht usage.

---

## Corporate Issuers

### Q2 — Build-Up SCRP (Mock 2 - Axiom)

**Full Vignette Context:**
Pinku Singh estimates SCRP for Axiom using build-up approach:
- Cost of equity: 13.5%
- Market equity risk premium: 7.0%
- Industry risk premium: 0.0%
- Size premium: 1.2%
- Risk-free rate: 3.0%
- Beta: 1.5

**Question:**
The SCRP for Axiom is:

A. 2.3%
B. 3.0%
C. 3.5%

**Your Answer:** C (3.5%)

**Correct Answer:** A (2.3%)

**Full Explanation:**

**Build-Up Approach:**
> r_e = r_f + ERP + SP + SCRP

**Solving for SCRP:**
> SCRP = r_e – (r_f + ERP + SP)
> = 13.5% – (3.0% + 7.0% + 1.2%)
> = 13.5% – 11.2%
> = **2.3%**

**Why Each Answer:**
| Answer | Calculation | Error |
|--------|-------------|-------|
| **A (2.3%)** | 13.5% – 11.2% | **Correct** |
| B (3.0%) | 13.5% – (1.5 × 7.0%) | Used CAPM formula |
| C (3.5%) | 13.5% – (3.0% + 7.0%) | Forgot size premium |

**Why You Got It Wrong:**
You forgot to include the size premium (1.2%) in the build-up components.

---

## Summary by Topic

| Topic | Mock 1 | Mock 2 | Mock 3 | Total | Priority |
|-------|--------|--------|--------|-------|----------|
| Fixed Income/Credit | 6 | 7 | 3 | 16 | **HIGH** |
| FSA | 5 | 1 | 3 | 9 | **HIGH** |
| Equity | 5 | 1 | 0 | 6 | **HIGH** |
| Derivatives | 4 | 3 | 0 | 7 | **HIGH** |
| Portfolio Management | 3 | 5 | 1 | 9 | **HIGH** |
| Economics | 2 | 2 | 3 | 7 | MEDIUM |
| Quantitative Methods | 3 | 4 | 1 | 8 | **HIGH** |
| Alternatives | 1 | 4 | 0 | 5 | MEDIUM |
| Ethics | 3 | 0 | 2 | 5 | MEDIUM |
| Corporate Issuers | 0 | 1 | 0 | 1 | LOW |

---

## Key Formulas to Memorize

### Fixed Income

**Credit Migration Return:**
> Total Return = YTM + Σ(Probability × –Duration × Spread Change)

**OAS Relationship:**
> Z-Spread = OAS + Option Cost

**NSFR:**
> NSFR = Available Stable Funding / Required Stable Funding

### Financial Statement Analysis

**Current Rate Method:** All I/S items at average rate

**Temporal Method:** Monetary at current, Non-monetary at historical

**US GAAP Pension Expense:**
> Service Cost + Interest Cost – **Expected** Return + Amortizations

**Full Goodwill (US GAAP):**
> Goodwill = FV of Entity – FV of Net Assets

### Equity Valuation

**Finite-Horizon RI:**
> V₀ = B₀ + Σ PV(RI) + (P_T – B_T)/(1+r)^T

**Target Payout Adjustment:**
> Increase = (EPS × Target Payout – Prev Div) × Adjustment Factor

### Derivatives

**CIP Forward:**
> F = S × (1 + r_price × t) / (1 + r_base × t)

**Forward MTM:**
> V_t = PV[F_t – F₀]

**American Option:** Compare exercise vs continuation at each node

### Portfolio Management

**Annual VaR:**
> First annualize mean and std dev, THEN calculate VaR

**Holding Period Cost:**
> = Round-trip Trading Cost + Management Fee

### Economics

**Neoclassical Steady-State:**
> ΔY/Y = θ/(1-α) + n
> (Divide TFP by LABOR share)

**Real GDP Growth:**
> = Nominal GDP Growth – Inflation

### Quantitative Methods

**Cointegration:**
> Fail to reject unit root for series, REJECT for residuals

**ARCH Test:**
> Regress ε² on lagged ε²

**Adjusted R² Rule:**
> If |t-stat| > 1.0, adjusted R² increases when adding variable

### Corporate Issuers

**Build-Up SCRP:**
> SCRP = r_e – (r_f + ERP + Size Premium + Industry Premium)

---

## Common Mistake Patterns

### 1. Forgetting Components
- Credit migration: Forgot to add YTM
- Build-up: Forgot size premium
- Holding cost: Forgot round-trip commission
- Commodity returns: Missing roll or collateral return

### 2. Using Wrong Rate/Value
- Pension: Actual vs Expected return
- RI model: WACC vs Cost of equity
- FRA: Wrong maturity rate
- VaR: Monthly vs Annual

### 3. Wrong Direction/Sign
- Forward MTM: F_t – F₀ (not F₀ – F_t)
- Arbitrage: Reverse carry when forward underpriced
- OAS: Decreases when volatility increases

### 4. Method Confusion
- Translation: Current rate vs Temporal
- Goodwill: Full vs Partial
- Convergence: Diminishing vs Constant returns

### 5. Incomplete Analysis
- American options: Must check early exercise
- Callable bonds: Must apply call rule
- ARCH: Must check both regressions

---

## Study Priority List

### Must Master (Missed 5+ times across concepts):
1. Fixed Income — credit migration, OAS, binomial valuation
2. FSA — translation methods, pension accounting
3. Derivatives — forwards, FRAs, American options
4. Quant — cointegration, ARCH, ML algorithms
5. PM — VaR calculations, holding costs

### Review Thoroughly:
6. Economics — growth models, convergence
7. Alternatives — hedge fund strategies, real estate
8. Equity — RI model, FCFF/FCFE choice

### Light Review:
9. Ethics — priority of transactions nuances
10. Corporate Issuers — build-up approach
