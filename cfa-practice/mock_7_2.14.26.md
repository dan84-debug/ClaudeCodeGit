# CFA Level II Mock Exam 7 — Incorrect Questions Review

**Score: 31/44 (70%)**
**Date: February 14, 2026**

---

## Table of Contents

1. [Derivatives](#derivatives)
2. [Equity Valuation](#equity-valuation)
3. [Portfolio Management / Alternatives](#portfolio-management--alternatives)
4. [Financial Statement Analysis](#financial-statement-analysis)
5. [Economics / Currency](#economics--currency)
6. [Ethics](#ethics)
7. [Additional Questions from Other Mocks](#additional-questions-from-other-mocks)

---

## Derivatives

### Q3 — Bond Forward Price (Requested for Inclusion)

**Full Vignette Context:**
Lucy Wang is a derivatives trader for a South African broker-dealer. All of her firm's trades are in South African rand (ZAR) and use a 30/360 day count convention.

Next, Wang determines the no-arbitrage price of a bond forward contract. She uses information from Exhibit 2 and an annualized risk-free rate of 3.7%.

**Exhibit 2:**
| Item | Value |
|------|-------|
| Quoted bond price without accrued interest (% of par) | 105.0 |
| Future value of coupon interest (% of par) | 4.51 |
| Accrued interest at contract initiation (% of par) | 3.00 |
| Accrued interest at contract expiration (% of par) | 0.75 |
| Time to forward contract expiration | 90 days |
| Conversion factor | 1.0 |

**Question:**
The no-arbitrage bond forward price (as a percentage of par) is closest to:

A. 99.2
B. 103.7
C. 108.4

**Correct Answer:** B (103.7)

**Full Explanation:**

**Bond Forward Price Formula:**
> F₀ = FV(S₀) − AI_T − FVCI
> F₀ = FV[B₀ + AI₀] − AI_T − FVCI

Where:
- F₀ = Forward price
- B₀ = Quoted bond price (clean price) = 105.0
- AI₀ = Accrued interest at initiation = 3.00
- AI_T = Accrued interest at expiration = 0.75
- FVCI = Future value of coupon interest = 4.51
- r = Risk-free rate = 3.7%
- T = Time to expiration = 90 days = 90/360 = 0.25 years

**Step 1: Calculate Full Price at Initiation (Dirty Price)**
> S₀ = B₀ + AI₀ = 105.0 + 3.00 = 108.00

**Step 2: Calculate Future Value of Spot Price**
> FV(S₀) = S₀ × (1 + r)^T
> FV(S₀) = 108.00 × (1.037)^(90/360)
> FV(S₀) = 108.00 × (1.037)^0.25
> FV(S₀) = 108.00 × 1.00912
> FV(S₀) = 108.985

**Step 3: Calculate Forward Price**
> F₀ = FV(S₀) − AI_T − FVCI
> F₀ = 108.985 − 0.75 − 4.51
> F₀ = 108.985 − 5.26
> F₀ = **103.73 ≈ 103.7**

**Why A is Wrong:**
Answer A (99.2) uses wrong signs for AI₀ (subtracts instead of adds) and AI_T (adds instead of subtracts):
> Wrong: F₀ = [(1.037)^0.25 × (105 − 3.00)] + 0.75 − 4.51
> Wrong: F₀ = [1.00912 × 102.00] − 3.76 = 99.17

**Why C is Wrong:**
Answer C (108.4) ignores FVCI entirely:
> Wrong: F₀ = [(1.037)^0.25 × (105 + 3.00)] − 0.75
> Wrong: F₀ = 108.985 − 0.75 = 108.24

**Key Concepts:**
1. **Start with dirty price** (clean + accrued interest at initiation)
2. **Grow to future value** at risk-free rate
3. **Subtract accrued interest at expiration** (buyer pays this separately)
4. **Subtract future value of coupons** (seller receives these, not buyer)

---

## Equity Valuation

### Q7 — FCFF vs FCFE Model Selection

**Full Vignette Context:**
Charlene Norberg is an analyst for a sell-side firm. She is building valuation models for several publicly traded firms.

Next, Norberg values another firm, Firm B, which has consistently been paying dividends. The firm has a large cash balance with a growing retained earnings balance. Norberg believes that Firm B is a takeover target because it offers synergies to one of its main competitors. If a takeover does occur, Norberg expects the new owner will likely change Firm B's dividend payout and will issue debt to maintain its capital expenditures. Norberg evaluates the potential takeover from the acquirer's perspective.

**Question:**
Which of the following is the most appropriate model to value Firm B?

A. DDM
B. FCFE
C. FCFF

**Your Answer:** B (FCFE)

**Correct Answer:** C (FCFF)

**Full Explanation:**

**When to Use Each Model:**

| Model | Best Used When |
|-------|---------------|
| **DDM** | Dividends are predictable and stable; no change in control expected |
| **FCFE** | Capital structure is stable; dividends differ from capacity to pay |
| **FCFF** | Capital structure is changing; evaluating from acquirer's perspective |

**Why FCFF is Correct for Firm B:**

1. **Takeover situation** — Acquirer's perspective requires looking at cash flows available to ALL capital providers

2. **Capital structure will change** — New owner will issue debt, changing the debt/equity mix

3. **Dividend policy will change** — Makes dividend-based models unreliable

4. **FCFF advantages with changing capital structure:**
   - FCFF growth reflects fundamentals more clearly than FCFE when leverage fluctuates
   - WACC is less sensitive to capital structure changes than cost of equity
   - FCFF represents what an acquirer can access and redistribute

**Why FCFE is Wrong:**
- FCFE is affected by net borrowing decisions
- When capital structure changes, historical FCFE growth rates become less meaningful
- Required return on equity is more sensitive to leverage changes than WACC
- Difficult to justify a constant discount rate when leverage is changing

**Why DDM is Wrong:**
- Dividends will change after acquisition
- Current dividend policy doesn't reflect future payout under new ownership
- Growing cash and retained earnings suggest dividends don't reflect capacity to pay

**Key Principle:**
> For acquisitions with expected capital structure changes, use FCFF because it represents the total cash available to all stakeholders before financing decisions.

---

### Q8 — Investment Value vs Intrinsic Value

**Full Vignette Context:**
Charlene Norberg is an analyst for a sell-side firm. She is building valuation models for several publicly traded firms.

Norberg values Firm B, which she believes is a takeover target because it offers synergies to one of its main competitors. If a takeover does occur, Norberg expects the new owner will likely change Firm B's dividend payout and will issue debt to maintain its capital expenditures. Norberg evaluates the potential takeover from the acquirer's perspective.

**Question:**
Which of the following definitions of value would be most relevant for Norberg's valuation estimate for Firm B?

A. Intrinsic value
B. Investment value
C. Fair market value

**Your Answer:** C (Fair market value)

**Correct Answer:** B (Investment value)

**Full Explanation:**

**Types of Value:**

| Value Type | Definition | When Used |
|------------|------------|-----------|
| **Intrinsic Value** | PV of expected future cash flows; going-concern value | Standard valuation, no special buyer |
| **Investment Value** | Value to a SPECIFIC buyer considering synergies | Acquisitions with buyer-specific benefits |
| **Fair Market Value** | Price between willing buyer and seller, no compulsion | Market transactions, tax purposes |

**Why Investment Value is Correct:**

The vignette states:
- Firm B offers **synergies** to a specific competitor
- Norberg evaluates from the **acquirer's perspective**

Investment value captures:
- Synergy benefits specific to this acquirer
- Operating improvements only this buyer can achieve
- Strategic value beyond standalone cash flows

**Formula Concept:**
> Investment Value = Intrinsic Value + Value of Synergies

**Why Intrinsic Value is Wrong:**
- Intrinsic value assumes going-concern, standalone operation
- Doesn't capture synergies specific to the acquirer
- Under efficient markets, intrinsic value ≈ market price

**Why Fair Market Value is Wrong:**
- Fair market value assumes no compulsion and no special advantages
- Doesn't account for buyer-specific synergies
- Transaction price in a takeover will likely EXCEED fair market value due to synergies

**Key Distinction:**
- **Intrinsic value:** What the company is worth to ANY owner
- **Investment value:** What the company is worth to THIS SPECIFIC owner

---

### Q17 — Normalized EPS (Average ROE Method)

**Full Vignette Context:**
Amanda Mond, a junior analyst, is valuing two consumer cyclical companies: Delong and Gruseb.

Delong is a growing company in a cyclical industry with volatile earnings. Mond summarizes Delong's book value per share (BVPS) and ROE for the most recent year in Exhibit 1. She compares these metrics to their respective averages over the most recent business cycle and over the long term. She then normalizes Delong's EPS using the average ROE method.

**Exhibit 1:**
| Metric | Most Recent Year | Average Over Most Recent Business Cycle | Long-Term Historical Average |
|--------|------------------|----------------------------------------|------------------------------|
| BVPS | EUR 11.2 | EUR 10.5 | EUR 9.6 |
| ROE | 15.0% | 16.0% | 17.5% |

**Question:**
Based on the average ROE method, Delong's normalized EPS is closest to:

A. EUR 1.68
B. EUR 1.79
C. EUR 1.96

**Your Answer:** C (EUR 1.96)

**Correct Answer:** B (EUR 1.79)

**Full Explanation:**

**Average ROE Method Formula:**
> Normalized EPS = Average ROE (over business cycle) × Current BVPS

**Calculation:**
> Normalized EPS = 16.0% × EUR 11.2
> Normalized EPS = 0.16 × 11.2
> Normalized EPS = **EUR 1.79**

**Why You Got It Wrong:**
You used the LONG-TERM historical average ROE (17.5%) instead of the average ROE over the MOST RECENT BUSINESS CYCLE (16.0%):
> Wrong: 17.5% × EUR 11.2 = EUR 1.96

**Why A is Wrong:**
Answer A (EUR 1.68) results from multiple possible errors:
- Using average BVPS × average ROE: 16.0% × EUR 10.5 = EUR 1.68
- Or using current values: 15.0% × EUR 11.2 = EUR 1.68
- Or using long-term values: 17.5% × EUR 9.6 = EUR 1.68

**Key Concept:**
The average ROE method uses:
- **Average ROE from most recent business cycle** — captures normalized profitability
- **CURRENT book value per share** — reflects current company size

This combination provides normalized earnings that account for both typical profitability AND current scale.

---

### Q18 — Justified Trailing P/E

**Full Vignette Context:**
Amanda Mond, a junior analyst, is valuing Delong, a growing company in a cyclical industry.

Mond uses the following forecasted fundamentals to calculate Delong's justified trailing P/E:
- Dividend payout ratio of 46%
- ROE of 15%
- Required rate of return of 10.8%

**Question:**
Based on Mond's forecasted fundamentals, Delong's justified trailing P/E is closest to:

A. 14.8
B. 17.0
C. 18.4

**Your Answer:** B (17.0)

**Correct Answer:** C (18.4)

**Full Explanation:**

**Step 1: Identify Variables**
- Dividend payout ratio = 46%
- **Retention rate (b) = 1 − 0.46 = 0.54** (NOT 0.46!)
- ROE = 15%
- Required return (r) = 10.8%

**Step 2: Calculate Sustainable Growth Rate**
> g = b × ROE
> g = 0.54 × 15% = 8.1%

**Step 3: Apply Justified TRAILING P/E Formula**
> P₀/E₀ = (1 − b)(1 + g) / (r − g)
> P₀/E₀ = (0.46)(1.081) / (0.108 − 0.081)
> P₀/E₀ = 0.4973 / 0.027
> P₀/E₀ = **18.42 ≈ 18.4**

**Why You Got It Wrong:**
You calculated the FORWARD P/E instead of TRAILING P/E:

**Forward P/E Formula (what you used):**
> P₀/E₁ = (1 − b) / (r − g)
> P₀/E₁ = 0.46 / 0.027 = 17.04 ≈ 17.0

**Why A is Wrong:**
Answer A (14.8) uses payout ratio AS the retention rate (confusing them):
> Wrong b = 0.46 (should be retention, not payout)
> Wrong g = 0.46 × 15% = 6.9%
> Wrong P/E = (1 − 0.46)(1.069) / (0.108 − 0.069) = 14.8

**Key Distinction:**

| P/E Type | Formula | Note |
|----------|---------|------|
| **Trailing P/E** | (1 − b)(1 + g) / (r − g) | Based on PAST earnings (E₀) |
| **Forward P/E** | (1 − b) / (r − g) | Based on NEXT year earnings (E₁) |

The (1 + g) factor in trailing P/E converts E₀ to its relationship with current price.

---

## Portfolio Management / Alternatives

### Q13 — Calendar Spread Definition

**Full Vignette Context:**
Ross Wyman is a portfolio manager for a family office. He plans to add commodities to his client's holdings and meets with Tina Becker, a commodity advisor.

Wyman and Becker discuss the current market prices for three commodities, summarized in Exhibit 1.

**Exhibit 1:**
| Item | Commodity 1 | Commodity 2 | Commodity 3 |
|------|-------------|-------------|-------------|
| Spot price | $1,688 | $830 | $87.20 |
| Near-term futures price | $1,688 | $835 | $85.90 |
| Farther-term futures price | $1,707 | $835 | $84.60 |

**Question:**
Based on current market prices, which commodity has a negative calendar spread?

A. Commodity 1
B. Commodity 2
C. Commodity 3

**Your Answer:** C (Commodity 3)

**Correct Answer:** A (Commodity 1)

**Full Explanation:**

**Calendar Spread Definition:**
> Calendar Spread = Near-term Futures Price − Farther-term Futures Price

**NOT to be confused with Basis:**
> Basis = Spot Price − Futures Price

**Calculations:**

| Commodity | Near-term | Farther-term | Calendar Spread |
|-----------|-----------|--------------|-----------------|
| **Commodity 1** | $1,688 | $1,707 | $1,688 − $1,707 = **−$19** |
| Commodity 2 | $835 | $835 | $835 − $835 = $0 |
| Commodity 3 | $85.90 | $84.60 | $85.90 − $84.60 = **+$1.30** |

**Only Commodity 1 has a NEGATIVE calendar spread!**

**Why You Got It Wrong:**
You likely reversed the formula (Farther-term − Near-term) or confused calendar spread with basis.

If you calculated: $84.60 − $85.90 = −$1.30, you reversed the formula.

**Key Distinctions:**

| Term | Formula | Interpretation |
|------|---------|----------------|
| Calendar Spread | Near − Far | Negative = Contango, Positive = Backwardation |
| Basis | Spot − Futures | Negative = Contango, Positive = Backwardation |

**Market Structure:**
- **Commodity 1:** Contango (negative calendar spread, futures curve slopes upward)
- **Commodity 2:** Flat
- **Commodity 3:** Backwardation (positive calendar spread, futures curve slopes downward)

---

### Q14 — Theory of Storage vs Insurance Theory

**Full Vignette Context:**
Ross Wyman is a portfolio manager for a family office. He plans to add commodities to his client's holdings and meets with Tina Becker, a commodity advisor.

Becker provides additional information about Commodity 3. She notes that:
- Hedging demand by consumers currently exceeds hedging demand by producers
- The convenience yield exceeds direct storage costs

**Exhibit 1 shows Commodity 3 is in backwardation:**
- Spot: $87.20
- Near-term futures: $85.90
- Farther-term futures: $84.60

**Question:**
Based on Exhibit 1 and Becker's additional information, the shape of the futures price curve of Commodity 3 is most consistent with the:

A. Insurance theory
B. Theory of storage
C. Hedging pressure hypothesis

**Your Answer:** C (Hedging pressure hypothesis)

**Correct Answer:** B (Theory of storage)

**Full Explanation:**

**Three Theories of Futures Curve Shape:**

| Theory | What Determines Shape | Backwardation Condition |
|--------|----------------------|------------------------|
| **Theory of Storage** | Storage costs vs convenience yield | Convenience yield > Storage costs |
| **Insurance Theory** | Producer vs consumer hedging | Producer hedging > Consumer hedging |
| **Hedging Pressure Hypothesis** | Net hedging pressure | Producer hedging > Consumer hedging |

**Commodity 3 Facts:**
1. **In backwardation** (futures prices decline with maturity)
2. **Convenience yield > Storage costs** ✓
3. **Consumer hedging > Producer hedging** ✗

**Analysis:**

**Theory of Storage Formula:**
> Futures Price = Spot Price + Storage Costs − Convenience Yield

When Convenience Yield > Storage Costs:
> Futures Price < Spot Price = **Backwardation** ✓

This matches Commodity 3!

**Why Insurance Theory and Hedging Pressure Hypothesis are Wrong:**

Both theories predict:
- **Backwardation** when PRODUCER hedging > Consumer hedging
- **Contango** when Consumer hedging > Producer hedging

The vignette states consumer hedging > producer hedging, which these theories would predict leads to CONTANGO, not backwardation.

**But Commodity 3 is in BACKWARDATION** — contradicting insurance theory and hedging pressure hypothesis!

**Conclusion:**
The only theory consistent with the observed backwardation is the **Theory of Storage**, because convenience yield exceeds storage costs.

---

### Q16 — Commodity Index Selection (Rebalancing and Backwardation)

**Full Vignette Context:**
Ross Wyman is a portfolio manager for a family office. He plans to add commodities to his client's holdings.

Wyman also considers investing in a commodity index. His objective is to select the index that provides the largest contribution to performance based on the following two expectations:
- Trending commodity markets, where outperforming assets continue to go up in price and underperforming assets continue to drift lower
- No changes in the shapes of forward curves, with some markets currently in backwardation and others in contango

**Question:**
Based on his objective regarding the commodity index investment, Wyman should select an index that:

A. Rebalances frequently and contains a large percentage of constituents in backwardation
B. Rebalances frequently and contains a small percentage of constituents in backwardation
C. Rebalances infrequently and contains a large percentage of constituents in backwardation

**Your Answer:** B (Frequent rebalancing, small % backwardation)

**Correct Answer:** C (Infrequent rebalancing, large % backwardation)

**Full Explanation:**

**Two Factors to Consider:**

**Factor 1: Rebalancing Frequency in Trending Markets**

| Market Condition | Better Rebalancing | Why |
|-----------------|-------------------|-----|
| **Trending** | **Infrequent** | Let winners run, don't buy losers |
| Mean-reverting | Frequent | Sell high, buy low |

In trending markets:
- Frequent rebalancing SELLS outperformers (which will continue rising)
- Frequent rebalancing BUYS underperformers (which will continue falling)
- This **hurts** performance in trending markets

**Factor 2: Backwardation and Roll Return**

| Curve Shape | Roll Return | Effect on Performance |
|-------------|-------------|----------------------|
| **Backwardation** | **Positive** | Improves returns |
| Contango | Negative | Hurts returns |

**Roll Return Formula:**
> Roll Return = (Near-term Price − Farther-term Price) / Near-term Price

In backwardation (near > far): Roll return is POSITIVE
In contango (near < far): Roll return is NEGATIVE

**Optimal Choice:**
- **Infrequent rebalancing** — Let trends continue
- **Large % in backwardation** — Maximize positive roll return

---

### Q30 — ETF Holding Period Cost

**Full Vignette Context:**
Marietjie Granger works for a South African equity fund manager specializing in ETFs. She is evaluating several potential ETF investments and the use of factor models in investment decision-making.

Granger wants to make a 6-month tactical investment in ETF X-Ray. She determines the expected holding period cost using the following information:
- Bid-ask spread: 0.15%
- One-way commission: 0.10%
- Annual management fee: 0.20%

**Question:**
The expected holding period cost for Granger's investment in ETF X-Ray is closest to:

A. 0.45%
B. 0.55%
C. 0.60%

**Your Answer:** B (0.55%)

**Correct Answer:** A (0.45%)

**Full Explanation:**

**ETF Holding Period Cost Formula:**
> Holding Period Cost = Round-trip Trading Cost + Management Fee for Period

**Round-trip Trading Cost:**
> Round-trip = (One-way Commission × 2) + (½ × Bid-ask Spread × 2)
> Round-trip = (One-way Commission × 2) + Bid-ask Spread

**Calculation:**

| Component | Calculation | Value |
|-----------|-------------|-------|
| Round-trip commission | 0.10% × 2 | 0.20% |
| Bid-ask spread | ½ × 0.15% × 2 = 0.15% | 0.15% |
| Management fee (6 months) | 0.20% × (6/12) | 0.10% |
| **Total** | | **0.45%** |

**Why You Got It Wrong:**
You did not adjust the annual management fee for the 6-month holding period:
> Wrong: 0.20% + 0.15% + 0.20% = 0.55%

**Why C is Wrong:**
Answer C (0.60%) multiplies the full bid-ask spread by 2 instead of correctly accounting for it once:
> Wrong: (0.10% × 2) + (0.15% × 2) + (0.20% × 6/12)
> Wrong: 0.20% + 0.30% + 0.10% = 0.60%

**Key Concept:**
- Bid-ask spread is paid ONCE on the round trip (pay spread on buy OR sell, not both)
- Commission is paid TWICE (once to buy, once to sell)
- Management fee must be PRO-RATED for holding period

---

## Financial Statement Analysis

### Q22 — IFRS Impairment Loss Calculation

**Full Vignette Context:**
Dora Kriser, a financial analyst, is currently evaluating the intercompany investments and earnings quality of Delphine Industries, a large diversified consumer products company that reports under IFRS.

Kriser is concerned that recent industry changes may negatively affect one of Delphine's cash-generating units. She evaluates the following projections to determine the expected impairment loss under IFRS:

- Carrying value of cash-generating unit: €18,200,000
- Recoverable amount of cash-generating unit: €17,700,000
- Goodwill allocated to cash-generating unit: €300,000

**Question:**
Based on Kriser's projections, the expected impairment loss for Delphine's cash-generating unit is:

A. €200,000
B. €300,000
C. €500,000

**Your Answer:** A (€200,000)

**Correct Answer:** C (€500,000)

**Full Explanation:**

**IFRS Impairment Test:**
> Impairment Loss = Carrying Value − Recoverable Amount (if CV > RA)

**Calculation:**
> Impairment Loss = €18,200,000 − €17,700,000
> Impairment Loss = **€500,000**

**Allocation of Impairment Loss:**
1. **First:** Reduce goodwill to zero (€300,000)
2. **Then:** Allocate remaining loss (€200,000) pro-rata to other assets

But the TOTAL impairment loss recognized is still **€500,000**.

**Why You Got It Wrong:**
You may have calculated: Total Loss (€500,000) − Goodwill (€300,000) = €200,000

This €200,000 represents the loss allocated to OTHER assets after goodwill is written off, but the question asks for the TOTAL impairment loss, which is €500,000.

**Why B is Wrong:**
Answer B (€300,000) assumes the impairment is limited to goodwill. But the impairment loss is the FULL difference between carrying value and recoverable amount, regardless of goodwill balance.

**IFRS Impairment Process:**
1. Compare carrying value to recoverable amount
2. If CV > RA, impairment = CV − RA (the full difference)
3. Allocate loss: first to goodwill, then pro-rata to other assets

---

### Q24 — Interest Paid/Received Classification (IFRS vs US GAAP)

**Full Vignette Context:**
Dora Kriser, a financial analyst, is currently evaluating Delphine Industries, a large diversified consumer products company that reports under IFRS.

Kriser examines Delphine's statement of cash flows and observes that interest paid is classified as an operating activity and interest received is classified as an investing activity. She considers whether these cash flow classifications could affect comparisons with competitors that report under US GAAP.

**Question:**
Is Delphine's classification of interest paid and interest received consistent with competitors that report under US GAAP?

A. Yes
B. No, the classification of interest paid is not consistent
C. No, the classification of interest received is not consistent

**Your Answer:** A (Yes)

**Correct Answer:** C (No, the classification of interest received is not consistent)

**Full Explanation:**

**Cash Flow Classification Rules:**

| Item | IFRS | US GAAP |
|------|------|---------|
| Interest paid | Operating OR Financing | **Operating only** |
| Interest received | Operating OR Investing | **Operating only** |
| Dividends paid | Operating OR Financing | **Financing only** |
| Dividends received | Operating OR Investing | **Operating only** |

**Delphine's Classifications:**
- Interest paid → Operating ✓ (consistent with US GAAP)
- Interest received → Investing ✗ (NOT consistent with US GAAP)

**Analysis:**

| Item | Delphine (IFRS) | US GAAP Required | Consistent? |
|------|-----------------|------------------|-------------|
| Interest paid | Operating | Operating | **Yes** |
| Interest received | Investing | Operating | **No** |

**Why You Got It Wrong:**
You may have thought IFRS and US GAAP have the same flexibility, or didn't realize US GAAP REQUIRES interest received to be classified as operating.

**Key Distinction:**
- **IFRS:** Provides CHOICE for interest and dividends
- **US GAAP:** REQUIRES specific classifications (no choice)

**Memory Aid:**
> US GAAP: Interest (paid AND received) = ALWAYS Operating
> IFRS: Interest = Choice between Operating/Financing (paid) or Operating/Investing (received)

---

## Economics / Currency

### Q35 — Mark-to-Market Forward Contract Value

**Full Vignette Context:**
Jennifer Francis is a currency specialist helping clients manage their foreign exchange exposures. All currencies are quoted as the amount of the numerator currency per one unit of the denominator currency.

Nine months ago, Stephan Podowski bought EUR 20 million forward against the USD by entering into a 1-year forward contract at 1.1308 USD/EUR. He wants to calculate the mark-to-market value of this position today.

**Given:**
- Current USD/EUR spot rate: 1.1352/1.1355
- 90-day forward points: –14/–12
- Annualized 90-day MRR (Actual/360): 0.53% for USD, 0.77% for EUR

**Question:**
The mark-to-market value of Podowski's USD/EUR forward contract is closest to:

A. USD 59,921
B. USD 69,907
C. USD 115,847

**Your Answer:** C (USD 115,847)

**Correct Answer:** A (USD 59,921)

**Full Explanation:**

**Step 1: Determine the Offsetting Position**

Podowski BOUGHT EUR forward (long EUR, short USD). To offset, he must SELL EUR forward.

Since EUR is the base currency, use the **BID** side for selling EUR:
- Spot bid: 1.1352
- Forward points bid: –14 (negative means subtract)

**Step 2: Calculate All-in Forward Rate**
> All-in rate = Spot + Forward points/10,000
> All-in rate = 1.1352 + (–14/10,000)
> All-in rate = 1.1352 – 0.0014
> All-in rate = **1.1338 USD/EUR**

**Step 3: Calculate Cash Flow at Settlement**

Original contract: BUY EUR 20M at 1.1308 → Pay USD 22,616,000
Offsetting contract: SELL EUR 20M at 1.1338 → Receive USD 22,676,000

> Net cash flow = USD 22,676,000 – USD 22,616,000 = **USD 60,000**

**Step 4: Discount to Present Value**

Discount at USD rate (price currency) for 90 days:
> PV = USD 60,000 / [1 + 0.0053 × (90/360)]
> PV = USD 60,000 / [1 + 0.001325]
> PV = USD 60,000 / 1.001325
> PV = **USD 59,921**

**Why You Got It Wrong:**
You added the forward points instead of subtracting them (treated negative as positive):
> Wrong: All-in = 1.1352 – (–14/10,000) = 1.1352 + 0.0014 = 1.1366
> Wrong proceeds: 20M × 1.1366 = USD 22,732,000
> Wrong cash flow: 22,732,000 – 22,616,000 = USD 116,000
> Wrong PV: 116,000 / 1.001325 = USD 115,847

**Why B is Wrong:**
Answer B uses the OFFER rate instead of BID:
> Wrong: 1.1355 – 12/10,000 = 1.1343
> Wrong proceeds: 20M × 1.1343 = USD 22,686,000
> Wrong cash flow: 22,686,000 – 22,616,000 = USD 70,000
> Wrong PV: 70,000 / 1.001325 = USD 69,907

**Key Rules:**
- To offset LONG base currency: use BID (you're selling)
- To offset SHORT base currency: use OFFER (you're buying)
- Forward points are already signed (negative means subtract)

---

## Ethics

### Q28 — Departing Employee: Use of Employer's Model

**Full Vignette Context:**
Marcia Garrett is a research analyst at IGMA Investments. IGMA is a large investment firm that claims compliance with the Standards.

Garrett has accepted an offer to join a rival firm. While at IGMA, Garrett and a colleague developed a quantitative model that was used for industry and company analysis. Garrett considers if she can continue to use the model at her new firm.

**Question:**
Would Garrett violate the Standards if she uses the quantitative model at her new firm?

A. No
B. Yes, unless she receives permission from IGMA
C. Yes, unless she receives written permission from her colleague at IGMA

**Your Answer:** A (No)

**Correct Answer:** B (Yes, unless she receives permission from IGMA)

**Full Explanation:**

**Standard IV(A) Loyalty:**
Members and Candidates must act for the benefit of their employer and not deprive their employer of the advantage of their skills and abilities, divulge confidential information, or otherwise cause harm to their employer.

**Key Principle: Work Product Belongs to Employer**

Any models, research, or intellectual property developed during employment belongs to the EMPLOYER, not the employee — even if the employee created it.

**Why Garrett Needs IGMA's Permission:**
1. The model was developed while employed at IGMA
2. It was used for IGMA's business purposes
3. It is IGMA's property, not Garrett's personal property
4. Using it at a competitor without permission = **self-dealing**

**Self-Dealing Definition:**
Appropriating for one's own property a business opportunity or information belonging to one's employer.

**Why A is Wrong:**
The model belongs to IGMA regardless of who developed it. Garrett cannot simply take it to her new firm.

**Why C is Wrong:**
Permission from the COLLEAGUE is irrelevant. The model belongs to IGMA (the employer), not to individual employees. Only IGMA can authorize its use elsewhere.

**Key Takeaway:**
> Work product developed during employment = Employer's property
> Taking it to a new firm without permission = Violation

---

### Q39 — CDS Upfront Premium Payment

**Full Vignette Context:**
Liying Wang manages her firm's investment-grade bond portfolio. She considers purchasing a senior unsecured bond issued by AHM Manufacturing (the AHM01 bond) for the portfolio.

Wang purchases protection on the AHM01 bond using a single-name CDS. The counterparty for the transaction is XRM Bank. The CDS has:
- Standard annual coupon of 100 basis points
- Current market spread on AHM01 bonds is 150 basis points
- The initial value of the CDS contract is set to zero

**Question:**
The CDS protection that Wang purchases on the AHM01 bond requires:

A. No upfront payment
B. Wang to make an upfront payment
C. XRM Bank to make an upfront payment

**Your Answer:** A (No upfront payment)

**Correct Answer:** B (Wang to make an upfront payment)

**Full Explanation:**

**CDS Pricing Mechanism:**

CDS contracts trade with STANDARDIZED fixed coupons (typically 100 bps or 500 bps). But the FAIR VALUE of protection depends on the actual credit spread.

**This Case:**
- Standard coupon = 100 bps (what Wang will PAY annually)
- Market spread = 150 bps (what protection is WORTH)
- Protection worth 150 bps but only paying 100 bps annually

**Who Pays the Upfront Premium?**

| Situation | Who Pays Upfront |
|-----------|------------------|
| Market spread > Coupon | **Protection BUYER** pays upfront |
| Market spread < Coupon | Protection SELLER pays upfront |
| Market spread = Coupon | No upfront payment |

**Why Wang Must Pay:**
- Wang is getting protection worth 150 bps
- She's only paying 100 bps per year
- The 50 bps difference must be compensated upfront
- This sets the initial CDS value to ZERO

**Upfront Premium Approximation:**
> Upfront ≈ (Credit Spread − Coupon) × Duration
> Upfront ≈ (150 bps − 100 bps) × Duration = 50 bps × Duration

**Why A is Wrong:**
If there were no upfront payment with a below-market coupon, the protection seller would be giving away value for free.

**Why C is Wrong:**
XRM Bank (protection seller) is RECEIVING a coupon below fair value. They would only pay upfront if the coupon EXCEEDED the market spread.

**Key Concept:**
Upfront payments exist to set the CDS value to zero at inception when standardized coupons don't match market spreads.

---

## Additional Questions from Other Mocks

### Q10 — Covered Bonds: Benefits to Issuer (From Mock 6)

**Full Vignette Context:**
Nathan Moffet is a fixed-income portfolio manager analyzing the credit risk within a corporate bond portfolio.

Moffet learns that Company B plans to issue a covered bond. He considers the benefits of covered bonds from the perspective of the company.

A covered bond is a senior debt obligation of a financial institution that gives recourse to both the originator/issuer and a predetermined underlying collateral pool (the "cover pool"). The dual recourse to the issuing financial institution and the underlying asset pool has been a hallmark of covered bonds since their inception.

**Question:**
Which of the following is a benefit of the Company B bond from the perspective of the issuer?

A. The bond can have a higher credit rating than Company B's rating
B. Once fully collateralized, the bond is no longer an obligation of Company B
C. Any prepaid or non-performing assets in the cover pool do not have to be replaced

**Correct Answer:** A (The bond can have a higher credit rating than Company B's rating)

**Full Explanation:**

**What is a Covered Bond?**
A covered bond provides investors with dual recourse:
1. **Recourse to the issuer** — The financial institution remains obligated
2. **Recourse to the cover pool** — Collateral backing the bond

**Why A is Correct:**
Given the additional credit enhancements (dual recourse + dynamic cover pool), covered bonds typically:
- Have higher recovery rates
- Have lower default probabilities
- Receive credit ratings **several notches above** the issuing institution

**This benefits the issuer because:**
- Higher-rated bonds = Lower borrowing costs
- Wider investor base (some investors have rating requirements)
- Funding diversification

**Why B is Wrong:**
The covered bond is an **ongoing obligation** of Company B. The dual recourse feature means the issuer NEVER escapes liability — they must:
- Make payments even if cover pool falls short
- Maintain sufficient assets in the cover pool at all times

**Why C is Wrong:**
The cover pool is **dynamic**, not static. The issuer MUST:
- Replace any prepaid assets
- Replace any non-performing assets
- Ensure sufficient cash flows to bond maturity

This ongoing maintenance is a cost/obligation to the issuer, not a benefit.

**Key Characteristics of Covered Bonds:**

| Feature | Description |
|---------|-------------|
| Dual recourse | Investor claim on both issuer AND collateral |
| Dynamic cover pool | Issuer must maintain/replace assets |
| Higher rating | Often several notches above issuer rating |
| Ongoing obligation | Issuer liability continues throughout |

---

## Summary by Topic

| Topic | Questions Missed | Priority Level |
|-------|------------------|----------------|
| Equity Valuation | 4 | HIGH |
| Alternatives/Commodities | 3 | HIGH |
| Derivatives | 1 (included by request) | MEDIUM |
| FSA | 2 | MEDIUM |
| Currency | 1 | MEDIUM |
| Ethics | 2 | MEDIUM |
| Fixed Income | 1 (included from other mock) | MEDIUM |

---

## Key Formulas to Memorize

**Bond Forward Price:**
> F₀ = FV[B₀ + AI₀] − AI_T − FVCI

**Normalized EPS (Average ROE Method):**
> Normalized EPS = Average ROE (business cycle) × Current BVPS

**Justified Trailing P/E:**
> P₀/E₀ = (1 − b)(1 + g) / (r − g)

**Justified Forward P/E:**
> P₀/E₁ = (1 − b) / (r − g)

**Calendar Spread:**
> Calendar Spread = Near-term Futures − Farther-term Futures

**Roll Return:**
> Roll Return = (Near − Far) / Near

**ETF Holding Period Cost:**
> Cost = (Commission × 2) + Bid-ask Spread + (Annual Fee × Holding Period)

**IFRS Impairment:**
> Impairment Loss = Carrying Value − Recoverable Amount

**Mark-to-Market Forward:**
> Value = PV of (Offsetting Forward Rate − Original Rate) × Notional

**CDS Upfront Premium:**
> Upfront ≈ (Credit Spread − Coupon) × Duration

---

## Key Concepts to Remember

**Model Selection for Acquisitions:**
- FCFF for changing capital structure
- Investment value captures synergies

**Commodity Theories:**
- Theory of Storage: Convenience yield vs storage costs
- Insurance/Hedging Pressure: Producer vs consumer hedging
- If hedging conditions contradict observed curve, storage theory applies

**Trailing vs Forward P/E:**
- Trailing includes (1 + g) factor
- b = retention rate = 1 − payout ratio (NOT payout ratio itself!)

**Cash Flow Classification:**
- US GAAP: Interest (paid/received) ALWAYS operating
- IFRS: Choice for interest classification

**Work Product Ownership:**
- Models developed at employer = Employer's property
- Need employer permission to use elsewhere
