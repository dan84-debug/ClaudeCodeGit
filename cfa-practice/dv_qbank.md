# CFA — Derivatives & Currency Management Q-Bank

**Questions: 153** (110 multiple choice, 43 essays; Option strategies/Greeks/volatility 57, Futures/swaps/forwards on rates and equity 43, Currency management 53) · **Compiled:** Oct 17, 2026
**Format:** each question has a short **Context** block (only what it needs) right above it. Full vignettes are in the **Appendix**. Source tags: DA-# = option strategies paste, DB-# = futures/swaps paste, DC-# = currency management paste.
**Math:** every numeric answer was recomputed and matches the key unless flagged. Where the key's formula images were blank, I recomputed the numbers myself; those are listed in the flags table.

---

## Flags (items I could not verify or that look off in the source key)

| Q | Issue |
|---|---|
| Q13 [DA-13] | The key rounds the net cost to $4.26 and gives breakevens of $63.24/$71.76. The premiums sum to $4.25, so the exact breakevens are $63.25/$71.75. The answer isn't affected. |
| Q15 [DA-15] | The key says '$1.64 per contract'; the figures are per share. |
| Q17 [DA-17] | The key's quote convention ('BRL/USD call = right to buy USD') is non-standard; follow the key's definitions: the hedge is to be long USD / short BRL. |
| Q22 [DA-22] | The exhibit gives different implied vols for calls and puts at the same strike (e.g., 12.26 vs 16.44 at 11,600), which is unusual for European options with the same strike and expiry. I followed the key's reading. |
| Q23 [DA-23] | Exhibit 3 describes vega as 'the rate of the change in underlying prices'. Vega is the sensitivity of option value to volatility. I followed the key's answer. |
| Q24 [DA-24] | The exhibit's middle strike prints as '$6'; the calculation uses $60 (the at-the-money strike). |
| Q25 [DA-25] | The key's figures cover the option legs only. The collar's share position is excluded. Including the stock bought at $60.25 (a −$12.75 loss), the collar would be about −$2.52 and Strategy 3 about −$10.25, so Strategy 1 is still best, but the profits quoted are option-only. |
| Q81 [DB-24] | The key's probability formula and result did not paste. The 80% comes from my calculation using range midpoints, the same method the key uses in DB-28 (86%); the key's own figure is unverified. |
| Q87 [DB-30] | The key's explanation text refers to 'a beta of 1.21' in places; the exhibit and the calculation use 1.20. |
| Q91 [DB-34] | The key rounds the PV factor to 0.971 (giving $43,998,437.50). Unrounded 1/1.03 = 0.970874 gives $43,992,718. Both ≈ $44 million. |
| Q99 [DB-42] | Exact FTSE count is 150.7, which rounds to 151; the key says 150. The question text says 'Exhibit 2' but the futures data is in Exhibit 1. Choices B and C numbers can't be reproduced from the exhibit. |
| Q100 [DB-43] | The key's formula for DB-43 did not paste. The 84% is my calculation (it matches the key's answer); here the current rate 1.88% is used directly as the base. |
| Q134 [DC-34] | The stem says Delgado trades 'against' the forward rate bias, yet the key's two strategies (carry trade, trade the forward rate bias) are the same trade and are the opposite of trading against the bias; the key itself notes trading against the bias would mean buying USD at a premium. Wording in the stem/key is inconsistent; I give the key's answer as is. |
| Q148 [DC-48] | Key shows the result as 0.0858; unrounded I get 0.08585 (8.59%). Direction and answer unaffected. |
| Q153 [DC-53] | The key's reasoning focuses on Strategy 1; for Strategy 2 it says the premium is pocketed and the option expires worthless, which doesn't clearly show how that strategy fails the 'exploit the view' test (the 2.5642 forecast is inside the 2.5669 short call strike). The answer (C) is per the key; I couldn't verify the Strategy 2 explanation. |

---

## Table of Contents

| Group | Topic | Questions |
|---|---|---|
| DA1 | Nuñes (Covered Call, Protective Put, Collar, Spreads, Straddle, Calendar) | Q1–Q10 |
| DA2 | Singh / Hopewell (Protection Strategies, Straddle, Spreads, Gamma) | Q11–Q16 |
| DA3 | Ngoc / Ahlim (BRL Hedge, PSÔL Protective Put and Bull Call Spread, Implied Volatility) | Q17–Q23 |
| DA4 | Voruganti / Maverik (Seagull, Strategy Comparison, Long Straddle) | Q24–Q26 |
| DA5 | Reddy / CFT (Protection Strategy, Straddle and Strangle, Gamma and Collar Delta) | Q27–Q30 |
| DA6 | Navarro / RCKL (Synthetic Short, Greeks, Calendar Spread, Risk Reversal) | Q31–Q34 |
| DA7 | Armitage / LAMS (Bear Spread, Calendar Spreads, Skew vs Smile) | Q35–Q38 |
| DA8 | Manetti / WTML (Put–Call Parity, Covered Call, Delta, Put Purchase) | Q39–Q42 |
| Standalone | Standalone — Option Strategies, Greeks, Volatility | Q43–Q57 |
| Standalone | Standalone — Swap Duration Adjustment | Q58 |
| DB1 | Global Mega (Futures Hedging, Equitizing Cash, Equity Swaps, Variance Swaps, Fed Funds, Basis) | Q59–Q65 |
| Standalone | Standalone — Futures Hedging | Q66–Q67 |
| DB2 | Uff / Chehalis Fund (Equity Beta With Futures, Swap Duration, Tactical Rebalancing) | Q68–Q70 |
| DB3 | Wyalusing / Tioga (Pay-Floating Swap, Cross-Currency Basis Swap) | Q71–Q72 |
| Standalone | Standalone — Cross-Currency Basis Swaps | Q73–Q74 |
| DB4 | Southern Sloth Sanctuary (Equitizing Cash, Currency Futures) | Q75–Q76 |
| Standalone | Standalone — Futures, Equity Swaps, Variance Swaps, Fed Funds | Q77–Q81 |
| DB5 | Lee / Pliny Elder (Swap Duration, Variance Swap, Equity Swap, Fed Funds) | Q82–Q85 |
| DB6 | Khan / Poly (Asset Allocation Shifts With Futures, Equity Swap, CTD) | Q86–Q89 |
| DB7 | Murphy / Deamon (Swaps, Variance Swaps, Rebalancing With Futures) | Q90–Q93 |
| DB8 | Tryon / Washington Heights (Futures Hedges, Equitizing, Tail Hedge, Equity Swap) | Q94–Q97 |
| DB9 | Stuyvesant / Tribeca (Hedged Foreign Bonds, Futures Conversion, Fed Funds Probability) | Q98–Q100 |
| DC1 | Gupta (Currency Return, Hedging Costs, Overlay, Active Approaches) | Q101–Q106 |
| DC2 | Guten Investments (Currency Returns, Correlation, Overlay Programs) | Q107–Q112 |
| DC3 | Darden / Colgate & McIntire (Currency Contribution, Strategy Selection) | Q113–Q115 |
| DC4 | Wilson / Lee (Discretionary Hedging, Overlay and Strategic Positioning) | Q116–Q117 |
| Standalone | Standalone — Currency Strategy for a Sovereign Wealth Fund | Q118 |
| DC5 | Jiang (Futures Margin, NDF, Carry Trade, EM Currencies) | Q119–Q122 |
| Standalone | Standalone — Speculators vs Hedgers in Volatility | Q123 |
| DC6 | Murimi / Konev (Volatility Strategy, Technical Analysis) | Q124–Q125 |
| DC7 | Portfolio B Fund Manager (Static vs Dynamic Hedge) | Q126–Q127 |
| DC8 | Björk (Rebalancing Hedges, Option Collar, Roll Yield, Cross-Hedge) | Q128–Q131 |
| DC9 | Delgado / Rivera (Hedge Instruments, Rolling Cash Flow, Roll Yield) | Q132–Q134 |
| Standalone | Standalone — Emerging Market Return Distributions | Q135 |
| DC10 | Nadela (Carry Trade, Bull Spread, Technical vs Fundamental) | Q136–Q138 |
| DC11 | Tong / WCP (Volatility, Negative Carry, Minimum-Variance Hedge) | Q139–Q141 |
| DC12 | HNW / Testa (Hedge Close-Out, Roll Yield, NDFs, Direct Hedge) | Q142–Q147 |
| DC13 | Campos / Sabanai (Currency Return, Carry, Volatility Options, Hedge Ratios) | Q148–Q153 |

---

# DA1 — Nuñes (Covered Call, Protective Put, Collar, Spreads, Straddle, Calendar)

*Full vignette: Appendix → DA1*

### Q1 — Synthetic Long Put [DA-1]

**Context (DA1):**
Strategy 1: constructing a synthetic long put position in IZD.

**Question:**
Strategy 1 would require Nuñes to buy:

A. shares of IZD.
B. a put option on IZD.
C. a call option on IZD.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Buying the shares would create a long stock position; the synthetic put needs a *short* stock position.
- **B is wrong.** Buying the put would be the real put, not a synthetic one.
- **C is correct.** **Buy a call option.** Synthetic long put = long call + short the shares.

**Key Principle:**
> Put-call parity: long put = long call + short stock (+ bond).

### Q2 — Covered Call Breakeven Region [DA-2]

**Context (DA1):**
Strategy 2: buy 100 IZD shares at €93.93 and write the April €95.00 call (premium €2.67).

**Question:**
Based on Exhibit 1, Nuñes should expect Strategy 2 to be least profitable if the share price of IZD at option expiration is:

A. less than €91.26.
B. between €91.26 and €95.00.
C. more than €95.00.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Below €91.26.** Covered call breakeven = S₀ − c₀ = 93.93 − 2.67 = €91.26. Below it, the strategy loses; above it, it gains.
- **B is wrong.** Between 91.26 and 95.00 the strategy is profitable (rising share price, call not exercised).
- **C is wrong.** Above 95.00 the gain is capped at its maximum, so it's the most profitable region.

**Key Principle:**
> Covered call: breakeven = S₀ − c₀; max profit = X − S₀ + c₀; loss limited to S₀ − c₀ (shares to zero).

### Q3 — Covered Call Breakeven (€97.50 Strike) [DA-3]

**Context (DA1):**
Strategy 3: covered call using the April €97.50 call (premium €1.68); IZD at €93.93.

**Question:**
Based on Exhibit 1, the breakeven share price of Strategy 3 is closest to:

A. €92.25.
B. €95.61.
C. €95.82.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **€92.25.** S₀ − c₀ = 93.93 − 1.68 = 92.25.
- **B is wrong.** €95.61 = 93.93 + 1.68 (adds instead of subtracts the premium).
- **C is wrong.** The key doesn't explain €95.82. *(My reconstruction: 97.50 − 1.68 = 95.82, subtracting the premium from the strike.)*

**Key Principle:**
> Covered call breakeven = S₀ − c₀.

### Q4 — Protective Put Maximum Loss [DA-4]

**Context (DA1):**
Strategy 4: protective put in QWY (share €28.49) using the April €25.00 put (premium €0.50).

**Question:**
Based on Exhibit 1, the maximum loss per share that would be incurred by implementing Strategy 4 is:

A. €2.99.
B. €3.99.
C. unlimited.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** €2.99: the key doesn't explain it. *(My reconstruction: 28.49 − 25.00 − 0.50 = 2.99, subtracting the premium.)*
- **B is correct.** **€3.99.** Max loss = S₀ − X + p₀ = 28.49 − 25.00 + 0.50 = 3.99.
- **C is wrong.** Unlimited is wrong: the put caps the loss.

**Key Principle:**
> Protective put: max loss = S₀ − X + p₀; breakeven = S₀ + p₀; unlimited upside.

### Q5 — Identifying the Collar [DA-5]

**Context (DA1):**
Strategy 5: buy 100 QWY shares, buy the April €24.00 put, write the April €31.00 call.

**Question:**
Strategy 5 is best described as a:

A. collar.
B. straddle.
C. bear spread.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Collar:** long shares + long OTM put (below price) + short OTM call (above price).
- **B is wrong.** A straddle is a long call and long put at the same strike.
- **C is wrong.** A bear spread is two puts (or two calls) with different strikes, no shares.

**Key Principle:**
> Collar = stock + long put (low strike) + short call (high strike).

### Q6 — Collar Maximum Profit [DA-6]

**Context (DA1):**
Strategy 5 (collar): QWY €28.49; April €24.00 put at €0.35; April €31.00 call at €0.32.

**Question:**
Based on Exhibit 1, Strategy 5 offers:

A. unlimited upside.
B. a maximum profit of €2.48 per share.
C. protection against losses if QWY’s share price falls below €28.14.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Upside is capped at the call strike, so it isn't unlimited.
- **B is correct.** **€2.48.** Max gain (share ≥ €31.00) = (X₂ − S₀) − p₀ + c₀ = (31.00 − 28.49) − 0.35 + 0.32 = 2.48.
- **C is wrong.** The key doesn't explain €28.14. *(My check: the collar's breakeven is S₀ + p₀ − c₀ = 28.49 + 0.35 − 0.32 = €28.52, not 28.14.)*

**Key Principle:**
> Collar: max profit = (X_call − S₀) − p + c; max loss = S₀ − X_put + p − c.

### Q7 — Bear Put Spread Breakeven [DA-7]

**Context (DA1):**
Strategy 6: bear spread in QWY: buy the April €31.00 put (€3.00), sell the April €25.00 put (€0.50).

**Question:**
Based on Exhibit 1, the breakeven share price for Strategy 6 is closest to:

A. €22.50.
B. €28.50.
C. €33.50.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The key doesn't explain €22.50. *(My reconstruction: 25.00 − 2.50.)*
- **B is correct.** **€28.50.** Breakeven = X_H − (p_H − p_L) = 31.00 − (3.00 − 0.50) = 28.50.
- **C is wrong.** The key doesn't explain €33.50. *(My reconstruction: 31.00 + 2.50.)*

**Key Principle:**
> Bear put spread: long high-strike put, short low-strike put; BE = X_H − net debit.

### Q8 — Short Straddle Maximum Gain [DA-8]

**Context (DA1):**
Strategy 7: write April €75.00 call (€2.54) and April €75.00 put (€3.22) on XDF.

**Question:**
Based on Exhibit 1, the maximum gain per share that could be earned if Strategy 7 is implemented is:

A. €5.74.
B. €5.76.
C. unlimited.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The key doesn't explain €5.74.
- **B is correct.** **€5.76.** Max gain = c₀ + p₀ = 2.54 + 3.22 = 5.76 when the share finishes at €75.00.
- **C is wrong.** A short straddle's gain is capped at the premiums received; its loss is unlimited.

**Key Principle:**
> Short straddle: max gain = both premiums (at X); upside loss unlimited.

### Q9 — Calendar Spread View [DA-9]

**Context (DA1):**
Strategy 8: write the February €80 call (€0.23) and buy the December €80 call (€2.47) on XDF.

**Question:**
Based on Exhibit 1, the best explanation for Nuñes to implement Strategy 8 would be that, between the February and December expiration dates, she expects the share price of XDF to:

A. decrease.
B. remain unchanged.
C. increase.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** A decline would leave both calls worthless; the long December call is the bet.
- **B is wrong.** Unchanged throughout would not generate a gain on the December call.
- **C is correct.** **Increase.** A long calendar spread: she expects XDF to stay flat until the February call expires, then rise above €80 so the December call gains.

**Key Principle:**
> Long calendar spread: short near-term option, long longer-term option; view is flat near term then move.

### Q10 — Strategy for a Binary Merger Decision [DA-10]

**Context (DA1):**
Antitrust ruling on an XDF merger is due next week; the share should move sharply up or down.

**Question:**
Over the past few months, Nuñes and Pereira have followed news reports on a proposed merger between XDF and one of its competitors. A government antitrust committee is currently reviewing the potential merger. Pereira expects the share price to move sharply upward or downward depending on whether the committee decides to approve or reject the merger next week. Pereira asks Nuñes to recommend an option trade that might allow the firm to benefit from a significant move in the XDF share price regardless of the direction of the move.

The option trade that Nuñes should recommend relating to the government committee’s decision is a:

A. collar.
B. bull spread.
C. long straddle.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** A collar is a hedge on a stock holding, not a volatility bet.
- **B is wrong.** A bull spread profits only from a rise.
- **C is correct.** **Long straddle:** long call and long put at the same strike profits from a big move in either direction.

**Key Principle:**
> Big move, unknown direction → long straddle.

# DA2 — Singh / Hopewell (Protection Strategies, Straddle, Spreads, Gamma)

*Full vignette: Appendix → DA2*

### Q11 — Protection While Staying Invested [DA-11]

**Context (DA2):**
Hopewell wants to stay invested in Walnut but protect against a short-term decline over three months.

**Question:**
The option strategy Singh is most likely to recommend to Hopewell is a:

A. collar.
B. covered call.
C. protective put.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** A collar also limits upside; the goal is to keep upside potential. *(My reading.)*
- **B is wrong.** A covered call only gives a small cushion (the premium) and caps the upside. *(My reading.)*
- **C is correct.** **Protective put:** downside protection while keeping the upside.

**Key Principle:**
> Protect downside, keep upside → protective put.

### Q12 — Strategy for Big Move, Unknown Direction [DA-12]

**Context (DA2):**
French has no Walnut position and expects a large move after earnings in two weeks, direction unknown.

**Question:**
The option strategy that Singh is most likely to recommend to French is a:

A. straddle.
B. bull spread.
C. collar.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Straddle.** Buy a call and put at the same strike (near-the-money $67.50).
- **B is wrong.** A bull spread needs a view that the stock rises.
- **C is wrong.** A collar is a hedging strategy for shareholders.

**Key Principle:**
> Long straddle bets on volatility exceeding market expectations.

### Q13 — Long Straddle Profit Region [DA-13]

**Context (DA2):**
**Walnut current stock price: $67.79.** European options, 106 days to expiry.

| Strike | Call price | Call delta | Put price | Put delta |
|---|---|---|---|---|
| $55.00 | $12.83 | 1.00 | $0.24 | −0.05 |
| $65.00 | $3.65 | 0.91 | $1.34 | −0.29 |
| $67.50 | $1.99 | 0.63 | $2.26 | −0.42 |
| $70.00 | $0.91 | 0.37 | $3.70 | −0.55 |
| $80.00 | $0.03 | 0.02 | $12.95 | −0.76 |

Strategy 1: long straddle at the $67.50 strike.

**Question:**
Based on Exhibit 1, Strategy 1 is profitable when the share price at expiration is closest to:

A. $63.00.
B. $65.24.
C. $69.49.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **$63.00.** Net cost = 1.99 + 2.26 = $4.25. Breakevens ≈ 67.50 ± 4.25 = $63.25 and $71.75. At $63.00 (below the lower breakeven) the straddle is profitable.
- **B is wrong.** $65.24 lies between the breakevens (loss).
- **C is wrong.** $69.49 lies between the breakevens (loss).

**Flag:** The key rounds the net cost to $4.26 and gives breakevens of $63.24/$71.76. The premiums sum to $4.25, so the exact breakevens are $63.25/$71.75. The answer isn't affected.

**Key Principle:**
> Long straddle: BE = X ± (c + p); max loss = c + p; max profit unlimited on the upside.

### Q14 — Bull Call Spread Maximum Profit [DA-14]

**Context (DA2):**
**Walnut current stock price: $67.79.** European options, 106 days to expiry.

| Strike | Call price | Call delta | Put price | Put delta |
|---|---|---|---|---|
| $55.00 | $12.83 | 1.00 | $0.24 | −0.05 |
| $65.00 | $3.65 | 0.91 | $1.34 | −0.29 |
| $67.50 | $1.99 | 0.63 | $2.26 | −0.42 |
| $70.00 | $0.91 | 0.37 | $3.70 | −0.55 |
| $80.00 | $0.03 | 0.02 | $12.95 | −0.76 |

Strategy 2: bull call spread using the $65 and $70 strikes.

**Question:**
Based on Exhibit 1, the maximum profit, on a per share basis, from investing in Strategy 2, is closest to:

A. $2.26.
B. $2.74.
C. $5.00.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **$2.26.** Net cost = 3.65 − 0.91 = 2.74. Max payoff 70 − 65 = 5.00. Max profit = 5.00 − 2.74 = 2.26.
- **B is wrong.** $2.74 is the net debit (the maximum loss).
- **C is wrong.** $5.00 is the spread width before deducting the cost.

**Key Principle:**
> Bull call spread: max profit = (X_H − X_L) − net debit; max loss = net debit.

### Q15 — Bear Put Spread Profit at $66 [DA-15]

**Context (DA2):**
**Walnut current stock price: $67.79.** European options, 106 days to expiry.

| Strike | Call price | Call delta | Put price | Put delta |
|---|---|---|---|---|
| $55.00 | $12.83 | 1.00 | $0.24 | −0.05 |
| $65.00 | $3.65 | 0.91 | $1.34 | −0.29 |
| $67.50 | $1.99 | 0.63 | $2.26 | −0.42 |
| $70.00 | $0.91 | 0.37 | $3.70 | −0.55 |
| $80.00 | $0.03 | 0.02 | $12.95 | −0.76 |

Strategy 3: bear put spread using the $65 and $70 strikes; share price at expiration $66.

**Question:**
Based on Exhibit 1, and assuming the market price of Walnut’s shares at expiration is $66, the profit or loss, on a per share basis, from investing in Strategy 3, is closest to:

A. $2.36.
B. $1.64.
C. $2.64.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** $2.36 is the net cost.
- **B is correct.** **$1.64.** Net cost = 3.70 − 1.34 = 2.36. At $66 the $70 put is worth 4.00; the $65 put expires worthless. Profit = 4.00 − 2.36 = $1.64 per share.
- **C is wrong.** The key doesn't explain $2.64. *(My reconstruction: 5.00 − 2.36 = 2.64, the maximum profit, which requires a price at or below $65.)*

**Flag:** The key says '$1.64 per contract'; the figures are per share.

**Key Principle:**
> Bear put spread: long high-strike put, short low-strike put; max profit = width − net debit.

### Q16 — Option With the Largest Gamma [DA-16]

**Context (DA2):**
**Walnut current stock price: $67.79.** European options, 106 days to expiry.

| Strike | Call price | Call delta | Put price | Put delta |
|---|---|---|---|---|
| $55.00 | $12.83 | 1.00 | $0.24 | −0.05 |
| $65.00 | $3.65 | 0.91 | $1.34 | −0.29 |
| $67.50 | $1.99 | 0.63 | $2.26 | −0.42 |
| $70.00 | $0.91 | 0.37 | $3.70 | −0.55 |
| $80.00 | $0.03 | 0.02 | $12.95 | −0.76 |

**Question:**
Based on the data in Exhibit 1, Singh would advise Tills that the call option with the largest gamma would have a strike price closest to:

A. $ 55.00.
B. $ 67.50.
C. $ 80.00.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Deep in-the-money ($55; delta 1.00) has near-zero gamma.
- **B is correct.** **$67.50.** It is closest to at the money (stock $67.79). Gamma is largest for at-the-money options (and near expiration).
- **C is wrong.** Deep out-of-the-money ($80; delta 0.02) has near-zero gamma.

**Key Principle:**
> Gamma peaks at the money, especially near expiry; it falls toward zero deep ITM/OTM.

# DA3 — Ngoc / Ahlim (BRL Hedge, PSÔL Protective Put and Bull Call Spread, Implied Volatility)

*Full vignette: Appendix → DA3*

### Q17 — Hedging a BRL Balance to Buy USD Property [DA-17]

**Context (DA3):**
Ahlim (US-based) holds a large BRL balance and will pay US$750,000 in six months. He worries BRL will weaken against USD.

**Question:**
Which of the following positions would best mitigate Ahlim’s concern regarding the purchase of his vacation home in six months?

A. Sell an at-the-money six-month BRL/USD call option.
B. Purchase an at-the-money six-month USD/BRL put option.
C. Take a short position in a six-month BRL/USD futures contract.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Selling the call is wrong: *buying* the call (to buy USD) is the hedge.
- **B is correct.** **Buy an ATM six-month USD/BRL put** (the right to sell BRL, i.e., buy USD at today's rate). The key lists three hedges: buy an ATM BRL/USD call (to buy USD), buy an ATM USD/BRL put (to sell BRL), or go long BRL/USD futures (to buy USD).
- **C is wrong.** A *short* BRL/USD futures position is wrong: going *long* (to buy USD) is the hedge.

**Flag:** The key's quote convention ('BRL/USD call = right to buy USD') is non-standard; follow the key's definitions: the hedge is to be long USD / short BRL.

**Key Principle:**
> Hedge a future USD need against a weaker home asset currency by buying USD (long call on USD / put on BRL / long futures).

### Q18 — Protective Put Maximum Loss (PSÔL) [DA-18]

**Context (DA3):**
**Exhibit 1 — Selected PSÔL option prices (US$); stock $37.41.**

| Exercise price | Expiration | Call price | Put price |
|---|---|---|---|
| 35 | May | 3.00 | 1.81 |
| 40 | December | 6.50 | 10.25 |
| 50 | December | 4.25 | 20.50 |

Recommended: protective put at $35 (May) and a $40/$50 bull call spread (December).

**Question:**
Based on Exhibit 1, the maximum loss per share of Ngoc’s recommended PSÔL protective put position is:

A. $0.60.
B. $2.41.
C. $4.22.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** $0.60 subtracts the premium (37.41 − 35.00 − 1.81).
- **B is wrong.** $2.41 omits the premium (37.41 − 35.00).
- **C is correct.** **$4.22.** S₀ − X + p₀ = 37.41 − 35.00 + 1.81 = 4.22.

**Key Principle:**
> Protective put: max loss = S₀ − X + p₀.

### Q19 — Protective Put Breakeven (PSÔL) [DA-19]

**Context (DA3):**
**Exhibit 1 — Selected PSÔL option prices (US$); stock $37.41.**

| Exercise price | Expiration | Call price | Put price |
|---|---|---|---|
| 35 | May | 3.00 | 1.81 |
| 40 | December | 6.50 | 10.25 |
| 50 | December | 4.25 | 20.50 |

Recommended: protective put at $35 (May) and a $40/$50 bull call spread (December).

**Question:**
Based on Exhibit 1, the breakeven price per share of Ngoc’s recommended PSÔL protective put position is:

A. $35.60.
B. $36.81.
C. $39.22.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** $35.60 subtracts the premium (37.41 − 1.81).
- **B is wrong.** $36.81 adds the premium to the strike (35.00 + 1.81).
- **C is correct.** **$39.22.** S₀ + p₀ = 37.41 + 1.81.

**Key Principle:**
> Protective put breakeven = S₀ + p₀.

### Q20 — Bull Call Spread Maximum Profit (PSÔL) [DA-20]

**Context (DA3):**
**Exhibit 1 — Selected PSÔL option prices (US$); stock $37.41.**

| Exercise price | Expiration | Call price | Put price |
|---|---|---|---|
| 35 | May | 3.00 | 1.81 |
| 40 | December | 6.50 | 10.25 |
| 50 | December | 4.25 | 20.50 |

Recommended: protective put at $35 (May) and a $40/$50 bull call spread (December).

**Question:**
Based on Exhibit 1, the maximum profit per share of Ngoc’s recommended PSÔL bull call spread is:

A. $2.25.
B. $7.75.
C. $12.25.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** $2.25 is just the net premium.
- **B is correct.** **$7.75.** (50 − 40) − (6.50 − 4.25) = 10.00 − 2.25 = 7.75.
- **C is wrong.** $12.25 adds the net premium instead of subtracting it.

**Key Principle:**
> Bull call spread: max profit = (X_H − X_L) − (c_L − c_H).

### Q21 — Bull Call Spread Breakeven (PSÔL) [DA-21]

**Context (DA3):**
**Exhibit 1 — Selected PSÔL option prices (US$); stock $37.41.**

| Exercise price | Expiration | Call price | Put price |
|---|---|---|---|
| 35 | May | 3.00 | 1.81 |
| 40 | December | 6.50 | 10.25 |
| 50 | December | 4.25 | 20.50 |

Recommended: protective put at $35 (May) and a $40/$50 bull call spread (December).

**Question:**
Based on Exhibit 1, the breakeven price per share of Ngoc’s recommended PSÔL bull call spread is:

A. $42.25.
B. $47.75.
C. $52.25.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **$42.25.** X_L + (c_L − c_H) = 40 + 2.25.
- **B is wrong.** $47.75 subtracts the net premium from the high strike (50 − 2.25).
- **C is wrong.** $52.25 adds the net premium to the high strike (50 + 2.25).

**Key Principle:**
> Bull call spread breakeven = X_L + net debit.

### Q22 — Reading the Implied Volatility Pattern [DA-22]

**Context (DA3):**
**Exhibit 2 — One-month NIFTY 50 options (index 11,610; rupees).**

| Strike | Call price | Put price | Implied call vol | Implied put vol |
|---|---|---|---|---|
| 11,200 | 526.00 | 61.90 | 5.87 | 17.72 |
| 11,400 | 365.45 | 102.60 | 10.80 | 17.01 |
| 11,600 | 240.00 | 165.80 | 12.26 | 16.44 |
| 11,800 | 135.00 | 213.00 | 12.14 | 16.39 |
| 12,000 | 65.80 | 370.00 | 11.98 | 16.56 |

**Question:**
Based on Exhibit 2, the NIFTY 50 Index implied volatility data most likely indicate a:

A. risk reversal.
B. volatility skew.
C. volatility smile.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A risk reversal is a trading strategy (delta-hedged) on the relative volatility of calls and puts, not a pattern in the data.
- **B is correct.** **Volatility skew.** OTM puts have higher implied vol than ATM puts (17.72 vs 16.44) because of demand for portfolio insurance, while OTM calls have lower vol than ATM calls (11.98 vs 12.26).
- **C is wrong.** A smile needs both OTM calls and OTM puts to have higher vol than ATM.

**Flag:** The exhibit gives different implied vols for calls and puts at the same strike (e.g., 12.26 vs 16.44 at 11,600), which is unusual for European options with the same strike and expiry. I followed the key's reading.

**Key Principle:**
> Skew: OTM puts rich, OTM calls cheap. Smile: both wings higher than ATM.

### Q23 — Strategy Given a Volatility Forecast [DA-23]

**Context (DA3):**
Research report: neutral view on direction; the sensitivity to volatility (vega) is expected to increase; implied volatility of index options is expected to be above the consensus.

**Question:**
Based on Exhibit 3, which of the following NIFTY 50 Index option strategies should Ngoc recommend to Ahlim?

A. Buy a straddle.
B. Buy a call option.
C. Buy a calendar spread.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Buy a straddle** (buy the one-month 11,600 call and put): neutral direction, higher volatility expected.
- **B is wrong.** A long call fits a bullish view, not a neutral one.
- **C is wrong.** A long calendar spread assumes implied volatility stays unchanged until the near option expires.

**Flag:** Exhibit 3 describes vega as 'the rate of the change in underlying prices'. Vega is the sensitivity of option value to volatility. I followed the key's answer.

**Key Principle:**
> Neutral direction + volatility above consensus → long straddle.

# DA4 — Voruganti / Maverik (Seagull, Strategy Comparison, Long Straddle)

*Full vignette: Appendix → DA4*

### Q24 — Short Seagull Spread Cost [DA-24] (Essay)

**Context (DA4):**
Maverik holds 1 million WBIT shares at $60.25 and wants three-month protection at minimum cost via a short seagull spread.

| Call premium | Exercise price | Put premium |
|---|---|---|
| $9.23 | $55 | $0.71 |
| $3.26 | $60 | $3.11 |
| $0.84 | $65 | $8.21 |

**Question:**
Calculate the total cost of implementing a short seagull spread to hedge the WBIT position.

**Model Answer / Explanation:**

Short seagull = long ATM put + short OTM put + short OTM call.
- Pay the $60 put: $3.11
- Receive the $55 put: $0.71
- Receive the $65 call: $0.84

Cost per share = 3.11 − 0.71 − 0.84 = **$1.56**. Total = 1,000,000 × $1.56 = **$1,560,000**.

**Flag:** The exhibit's middle strike prints as '$6'; the calculation uses $60 (the at-the-money strike).

**Key Principle:**
> Short seagull = bear put spread + covered call: long ATM put, short lower put, short OTM call.

### Q25 — Most Profitable Strategy at $47.50 [DA-25] (Essay)

**Context (DA4):**
WBIT expires at $47.50. Strategy 1: collar using the $60 and $65 strikes. Strategy 2: bull call spread using the $55 and $65 strikes. Strategy 3: bear put spread using the $55 and $65 strikes. (Option prices as in DA-24.)

**Question:**
Determine which strategy is most profitable at expiration. Justify your response.

**Model Answer / Explanation:**

**Strategy 1 (collar)** is most profitable.
- **Strategy 1:** buy $60 put (3.11), sell $65 call (0.84): net premium 2.27. At 47.50 the put is worth 12.50 and the call expires worthless: profit = 12.50 − 2.27 = **$10.23**.
- **Strategy 2:** buy $55 call (9.23), sell $65 call (0.84): both calls expire worthless; loss = −(9.23 − 0.84) = **−$8.39**.
- **Strategy 3:** buy $65 put (8.21), sell $55 put (0.71): net premium 7.50. Payoff (65 − 47.50) − (55 − 47.50) = 10.00; profit = 10.00 − 7.50 = **$2.50**.

**Flag:** The key's figures cover the option legs only. The collar's share position is excluded. Including the stock bought at $60.25 (a −$12.75 loss), the collar would be about −$2.52 and Strategy 3 about −$10.25, so Strategy 1 is still best, but the profits quoted are option-only.

**Key Principle:**
> Compute each option payoff at the expiry price, then subtract the net premium.

### Q26 — ETH Long Straddle Maximum Loss and Breakeven [DA-26] (Essay)

**Context (DA4):**
ETH at $3,710; six-month options.

| Call premium | Exercise price | Put premium |
|---|---|---|
| $131.55 | $3,600 | $1.71 |
| $43.26 | $3,700 | $35.78 |
| $3.48 | $3,800 | $112.21 |

**Question:**
Calculate for the ETH at-the-money straddle: (i) the maximum loss and (ii) the upside breakeven price.

**Model Answer / Explanation:**

Use the $3,700 strike (ATM). Total premium = 43.26 + 35.78 = $79.04.
- **(i) Maximum loss = $79.04** (total premium paid).
- **(ii) Upside breakeven = 3,700 + 79.04 = $3,779.04** (downside breakeven $3,620.96).

**Key Principle:**
> Long straddle: max loss = c + p; BE = X ± (c + p).

# DA5 — Reddy / CFT (Protection Strategy, Straddle and Strangle, Gamma and Collar Delta)

*Full vignette: Appendix → DA5*

### Q27 — Best Strategy for Protection and Diversification [DA-27]

**Context (DA5):**
Reddy holds 50,000 CFT options (strike $8.50) and a concentrated position; CFT now $39.55. He wants downside protection and diversification at low cost and without a large short-term tax hit. Strategies: (1) long straddle with ATM options; (2) collar; (3) bear spread.

**Exhibit 1 — Six-month options**

| Call delta | Call premium | Exercise price | Put premium | Put delta |
|---|---|---|---|---|
| 0.685 | 3.11 | 38.50 | 1.76 | −0.359 |
| 0.522 | 2.40 | 39.50 | 2.22 | −0.504 |
| 0.337 | 1.81 | 40.50 | 2.83 | −0.613 |

**Question:**
The option strategy Ramos should most likely recommend to Reddy is:

A. Strategy 1.
B. Strategy 2.
C. Strategy 3.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A long straddle is expensive and *increases* exposure to CFT, so it doesn't diversify.
- **B is correct.** **Strategy 2 (collar).** It protects the downside and effectively lets Reddy sell near the current price, cheaply, in exchange for giving up upside.
- **C is wrong.** A bear spread is a directional bet; it protects less downside and is less cost-effective than a collar.

**Key Principle:**
> Concentrated holder wanting cheap downside protection → collar.

### Q28 — Straddle Cost [DA-28]

**Context (DA5):**
Reddy holds 50,000 CFT options (strike $8.50) and a concentrated position; CFT now $39.55. He wants downside protection and diversification at low cost and without a large short-term tax hit. Strategies: (1) long straddle with ATM options; (2) collar; (3) bear spread.

**Exhibit 1 — Six-month options**

| Call delta | Call premium | Exercise price | Put premium | Put delta |
|---|---|---|---|---|
| 0.685 | 3.11 | 38.50 | 1.76 | −0.359 |
| 0.522 | 2.40 | 39.50 | 2.22 | −0.504 |
| 0.337 | 1.81 | 40.50 | 2.83 | −0.613 |

**Question:**
The overall cost of implementing Strategy 1 is closest to:

A. $90,500.
B. $111,000.
C. $231,000.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** $90,500 = 1.81 × 50,000, the OTM call premium alone. *(My reconstruction.)*
- **B is wrong.** $111,000 = 2.22 × 50,000, the put premium alone.
- **C is correct.** **$231,000.** ATM strike $39.50: call 2.40 + put 2.22 = $4.62 per share; × 50,000 = $231,000.

**Key Principle:**
> Straddle cost = (c + p) × quantity, at the strike nearest the money.

### Q29 — Strangle Breakeven Percentage [DA-29]

**Context (DA5):**
Reddy holds 50,000 CFT options (strike $8.50) and a concentrated position; CFT now $39.55. He wants downside protection and diversification at low cost and without a large short-term tax hit. Strategies: (1) long straddle with ATM options; (2) collar; (3) bear spread.

**Exhibit 1 — Six-month options**

| Call delta | Call premium | Exercise price | Put premium | Put delta |
|---|---|---|---|---|
| 0.685 | 3.11 | 38.50 | 1.76 | −0.359 |
| 0.522 | 2.40 | 39.50 | 2.22 | −0.504 |
| 0.337 | 1.81 | 40.50 | 2.83 | −0.613 |

**Question:**
The percentage increase in the CFT share price at which a long strangle strategy would break even is closest to:

A. 4.58%.
B. 6.09%.
C. 11.4%.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** 4.58% = 1.81 ÷ 39.55 (the call premium over the price). *(My reconstruction.)*
- **B is wrong.** The key doesn't explain 6.09%.
- **C is correct.** **11.4%.** Strangle = OTM put ($38.50) 1.76 + OTM call ($40.50) 1.81 = $3.57. Upside breakeven = 40.50 + 3.57 = 44.07; 44.07 ÷ 39.55 − 1 = 11.4%.

**Key Principle:**
> Long strangle: BE = X_call + (c + p) and X_put − (c + p).

### Q30 — Gamma of a Straddle and Delta of a Collar [DA-30]

**Context (DA5):**
S1: The gamma of the long straddle will be close to zero if the share price remains constant. S2: The delta of the collar will be close to zero if the share price increases significantly.

**Question:**
Is either of Ramos’s statements most likely correct?

A. No
B. Yes, Statement 1 is correct
C. Yes, Statement 2 is correct

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Statement 2 is correct, so 'No' is wrong.
- **B is wrong.** Statement 1 is wrong: if the price stays put, the straddle stays ATM and its gamma is at its highest, not near zero.
- **C is correct.** **Only Statement 2 is correct.** Collar delta = stock delta + put delta − call delta. After a big rise the call delta ≈ 1 and put delta ≈ 0: 1 + 0 − 1 ≈ 0.

**Key Principle:**
> Collar delta → 0 after a large rally (call deep ITM offsets the stock). ATM options have the highest gamma.

# DA6 — Navarro / RCKL (Synthetic Short, Greeks, Calendar Spread, Risk Reversal)

*Full vignette: Appendix → DA6*

### Q31 — Synthetic Short Stock [DA-31]

**Context (DA6):**
Cho: buy a put and sell a call with the same strike and expiration. Navarro: sell a put and buy a call. Lyons: sell a call and a put.

**Question:**
Who is most likely correct regarding the creation of the synthetic short stock position?

A. Cho
B. Lyons
C. Navarro

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Cho.** Long put + short call (same strike/expiry) = synthetic short stock.
- **B is wrong.** Lyons: short call + short put is a short straddle.
- **C is wrong.** Navarro: long call + short put is a synthetic *long* stock.

**Key Principle:**
> Synthetic long = long call + short put. Synthetic short = long put + short call.

### Q32 — Delta, Vega and Theta of Hedged Short Positions [DA-32]

**Context (DA6):**
Navarro, Cho and Lyons discuss synthetic positions. Patel has shorted 500 shares of Company A at $117.43 and is bearish. Navarro suggests buying five June 120 call contracts or writing five June 115 put contracts.

**Exhibit 1 — Company A options, 25 March 2019**

| Option | Expiration | Strike | Price | Delta | Vega | Theta |
|---|---|---|---|---|---|---|
| Call | June 2019 | 120 | 3.65 | 0.439 | 0.221 | −0.027 |
| Put | June 2019 | 115 | 3.70 | −0.399 | 0.216 | −0.028 |

S1: the call position's delta is more bearish than the put position's. S2: stock + call is long vega (benefits from higher volatility); stock + put is short vega (benefits from lower volatility). S3: stock + call benefits from time decay; stock + put is exposed to it.

**Question:**
With respect to Company A, which of Navarro’s statements to Patel is most likely correct?

A. Statement 1
B. Statement 2
C. Statement 3

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Statement 1 is wrong. Short stock delta = −500. Long 5 calls: +500 × 0.439 = +219.5 → −280.5. Short 5 puts: −(−0.399 × 500) = +199.5 → −300.5. The put position is *more* bearish.
- **B is correct.** **Statement 2 is correct.** Short stock + long call is long vega; short stock + short put is short vega.
- **C is wrong.** Statement 3 is wrong. Short stock + long call has negative theta (exposed to decay); short stock + short put has positive theta (−(−0.028)) and benefits.

**Key Principle:**
> Long option = long gamma/vega, negative theta. Short option = the reverse.

### Q33 — Calendar Spread for Near-Term Stability, Long-Term Bearish [DA-33]

**Context (DA6):**
**Company B ($139.81):** June and November 2019 $140 calls and puts. Outlook: stable near term, bearish long term.

**Question:**
Based on Patel’s outlook for Company B and using the information in Exhibit 2, the most appropriate strategy that Lyons could recommend to Patel is:

A. buy the June 2019 call and buy the June 2019 put.
B. buy the June 2019 put and sell the November 2019 put.
C. buy the November 2019 put and sell the June 2019 put.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Buying a call and put at one strike is a straddle, which is directionally neutral.
- **B is wrong.** Buying June and selling November puts is a short calendar spread, for an expected big move, not a stable outlook.
- **C is correct.** **Buy the November put, sell the June put** (long calendar spread with puts): stable near term, bearish later.

**Key Principle:**
> Long calendar: short near-term, long longer-term, same strike. Short calendar: the reverse (expect a big move).

### Q34 — Cho's Statement on Skew and Risk Reversals [DA-34]

**Context (DA6):**
Cho: implied volatility generally increases for puts struck below the stock price and decreases for calls struck above it (skew); sometimes the reverse (smile); if put implied vol is too high relative to call implied vol, a long risk reversal is to short the OTM call and go long the OTM put.

**Question:**
In her statement to Patel, Cho is most likely correct regarding the:

A. volatility skew.
B. volatility smile.
C. risk-reversal strategy.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Volatility skew.** Cho described it correctly: OTM puts have higher implied vol than ATM, and OTM calls lower.
- **B is wrong.** Cho is wrong about the smile: a smile has *both* OTM calls and puts with higher implied volatility than ATM.
- **C is wrong.** Cho described a *short* risk reversal. With put vol too high, a long risk reversal is short the OTM put and long the OTM call.

**Key Principle:**
> Put vol rich vs calls → long risk reversal (short OTM put, long OTM call).

# DA7 — Armitage / LAMS (Bear Spread, Calendar Spreads, Skew vs Smile)

*Full vignette: Appendix → DA7*

### Q35 — Bear Spread at Minimum Cost [DA-35]

**Context (DA7):**
Kadakia expects XYZ ($117.43) to fall sharply, wants limited losses and minimum cost.

| Exercise | Call premium | Put premium |
|---|---|---|
| 115 | 5.40 | 2.85 |
| 120 | 2.70 | 5.22 |

Strategy 1: buy the Nov 120 call, sell the Nov 115 call. Strategy 2: buy the Nov 120 put, sell the Nov 115 put.

**Question:**
Are the strategies suggested by Dufu for Kadakia most likely correct?

A. No, Strategy 1 is incorrect
B. No, Strategy 2 is incorrect
C. Yes, both strategies are correct

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Strategy 1 is correct.
- **B is correct.** **Strategy 2 is incorrect.** Strategy 1 is a bear call spread with a net *inflow* of 5.40 − 2.70 = $2.70 (max profit 2.70, max loss 5 − 2.70 = 2.30). Strategy 2 is a bear put spread with a net outflow of 5.22 − 2.85 = $2.37 (max profit 2.63, max loss 2.37), so it doesn't minimize cost.
- **C is wrong.** Strategy 2 is wrong because of the initial cash outflow.

**Key Principle:**
> Bear spread: buy higher strike, sell lower strike. Calls give a credit; puts a debit.

### Q36 — Calendar Spread Statement [DA-36]

**Context (DA7):**
Minkoff: a calendar spread suits an expectation that prices move in a certain direction but not immediately; it takes advantage of time-value decay; it is appropriate only when implied volatility is expected to increase.

**Question:**
In her statement, Minkoff is least likely correct with regard to:

A. implied volatility.
B. the time value decay of options.
C. the direction and timing of a price move.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Implied volatility.** A long calendar spread suits stable markets or rising implied vol; a *short* calendar spread suits falling implied vol or a big, not-imminent move. So 'only when implied vol increases' is wrong.
- **B is wrong.** Minkoff is right about capturing time value.
- **C is wrong.** Minkoff is right about direction and timing.

**Key Principle:**
> Calendar spreads: long = stable market or rising vol; short = falling vol or big later move.

### Q37 — Skew vs Smile [DA-37]

**Context (DA7):**
Exhibit 2, ABC three-month implied volatilities: ATM 17.60; Put 80% 26.31; Put 90% 22.40; Call 110% 15.54; Call 120% 14.65. Armitage: the exhibit depicts a volatility smile; if put vol is too high vs call vol, enter a long risk reversal and delta hedge by selling the underlying.

**Question:**
In his statement to Calzada, Armitage is least likely correct with regard to:

A. delta hedging.
B. volatility smile.
C. long risk reversal.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Armitage is right that the position is delta hedged by selling the underlying.
- **B is correct.** **Volatility smile.** The exhibit is a *skew*: vol rises for OTM puts and falls for OTM calls. A smile is U-shaped.
- **C is wrong.** Armitage is right about a long risk reversal (sell the OTM put, buy the OTM call).

**Key Principle:**
> Skew = downward-sloping vol across strikes; smile = U-shape.

### Q38 — Strategies for a Range-Bound Market [DA-38]

**Context (DA7):**
Dufu: if implied vol is expected to fall, write a straddle; if it rises, enter a short risk reversal; if unchanged, buy calls and write puts on the index.

**Question:**
In her response to Calzada, Dufu is most likely correct about:

A. writing a straddle.
B. a short risk reversal trade.
C. buying calls and writing puts.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Writing a straddle** (narrow range, falling implied vol) is correct.
- **B is wrong.** A short risk reversal (sell the OTM call, buy the OTM put) is used to exploit a skew when call-implied vol looks too high relative to put-implied vol, not for a rising-vol view.
- **C is wrong.** Buying calls and writing puts is a bullish view with unchanged implied vol; the put sale lowers the cost of the calls. It isn't a range-bound strategy.

**Key Principle:**
> Range-bound + falling vol → short straddle.

# DA8 — Manetti / WTML (Put–Call Parity, Covered Call, Delta, Put Purchase)

*Full vignette: Appendix → DA8*

### Q39 — Synthetic Positions via Put–Call Parity [DA-39]

**Context (DA8):**
Example 1: a synthetic long stock = buy calls and sell puts, same strike and expiry. Example 2: a synthetic put = sell calls on the stock and short the stock.

**Question:**
Are the examples of synthetic positions provided by Manetti most likely correct?

A. No, example 1 is incorrect
B. No, example 2 is incorrect
C. Yes, both examples are correct

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Example 1 is correct.
- **B is correct.** **Example 2 is incorrect.** Put–call parity: p₀ = c₀ − S₀ + X/(1+r)ᵀ, so a synthetic put = **buy** a call + short the stock (not sell the call). Example 1 is correct: S₀ = c₀ − p₀ + X/(1+r)ᵀ.
- **C is wrong.** Example 2 is incorrect.

**Key Principle:**
> Parity: S + p = c + PV(X). Synthetic put = long call + short stock + bond.

### Q40 — Covered Call Statement Check [DA-40]

**Context (DA8):**
Manetti (WTML) trains analysts. A client owns 2,000 shares of Company A (no dividend), priced at $139.81, expects the price to stay stable and doesn't want to sell.

**Exhibit 1 — Company A options, 25 November 2019**

| Option | Expiration | Strike | Premium | Delta | Theta |
|---|---|---|---|---|---|
| Call | Feb 2020 | 140 | 5.40 | 0.510 | −0.035 |
| Call | Jul 2020 | 140 | 8.64 | 0.517 | −0.021 |
| Put | Feb 2020 | 140 | 6.15 | −0.508 | −0.034 |
| Put | Jul 2020 | 140 | 10.55 | −0.507 | −0.019 |

Fillizola suggests writing 20 Feb 2020 $140 call contracts (implied vol 21.05%). She says: if shares go to $140 and the call is exercised, she effectively sells at $145.40; if shares fall to $130, her effective sale price is $135.40; the strategy suits an expected volatility *higher* than 21.05%.

**Question:**
With regard to the strategy for Company A that Fillizola recommends, she is least likely correct regarding:

A. the expectation of volatility of the underlying.
B. the effective sale price if share prices move lower, to $130.
C. the effective sale price if share prices trend higher than $140.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Volatility expectation is wrong.** A covered call (short call, short vega) suits an expectation that volatility will be *lower* than the implied 21.05%.
- **B is wrong.** Correct: at $130 the effective price = 130 + 5.40 = $135.40.
- **C is wrong.** Correct: called away at $140; effective price = 140 + 5.40 = $145.40.

**Key Principle:**
> Covered call = short volatility. Effective sale price = strike + premium (if called away).

### Q41 — Position Delta of the Covered Call [DA-41]

**Context (DA8):**
Manetti (WTML) trains analysts. A client owns 2,000 shares of Company A (no dividend), priced at $139.81, expects the price to stay stable and doesn't want to sell.

**Exhibit 1 — Company A options, 25 November 2019**

| Option | Expiration | Strike | Premium | Delta | Theta |
|---|---|---|---|---|---|
| Call | Feb 2020 | 140 | 5.40 | 0.510 | −0.035 |
| Call | Jul 2020 | 140 | 8.64 | 0.517 | −0.021 |
| Put | Feb 2020 | 140 | 6.15 | −0.508 | −0.034 |
| Put | Jul 2020 | 140 | 10.55 | −0.507 | −0.019 |

**Question:**
If the client executes Fillizola’s suggested strategy at the current price, her position delta will most likely be the same as the position delta of a portfolio that is:

A. long 2,000 shares and short forward 980 shares.
B. long 1,020 shares and short forward 980 shares.
C. long 2,000 shares and short forward 1,020 shares.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** 2,000 − 980 = 1,020, not 980.
- **B is wrong.** 1,020 − 980 = 40, not 980.
- **C is correct.** **Long 2,000 shares, short forward 1,020 shares.** Covered call delta = (1 − 0.51) × 2,000 = 980. Forward delta = 1.0 for a non-dividend stock; 2,000 − 1,020 = 980.

**Key Principle:**
> Covered call delta = (1 − call delta) × shares. Forward on a non-dividend stock has delta 1.0.

### Q42 — Put Purchase Statement Check [DA-42]

**Context (DA8):**
Manetti (WTML) trains analysts. A client owns 2,000 shares of Company A (no dividend), priced at $139.81, expects the price to stay stable and doesn't want to sell.

**Exhibit 1 — Company A options, 25 November 2019**

| Option | Expiration | Strike | Premium | Delta | Theta |
|---|---|---|---|---|---|
| Call | Feb 2020 | 140 | 5.40 | 0.510 | −0.035 |
| Call | Jul 2020 | 140 | 8.64 | 0.517 | −0.021 |
| Put | Feb 2020 | 140 | 6.15 | −0.508 | −0.034 |
| Put | Jul 2020 | 140 | 10.55 | −0.507 | −0.019 |

Manetti: buy the Feb 2020 put because it's cheaper than the July put and has the lowest time decay; a lower-strike Feb put would be cheaper but riskier.

**Question:**
Is Manetti most likely correct with regard to the strategy of purchasing put options?

A. Yes, her strategy is correct
B. No, she is incorrect about the time decay of the option
C. No, she is incorrect about a strike price lower than $140

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The decay statement is wrong, so she isn't correct.
- **B is correct.** **Wrong about time decay.** The Feb put theta is −0.034; the July put's is −0.019, so July has the *lowest* time decay (though it's more expensive).
- **C is wrong.** She is right about the lower strike: cheaper but a greater risk of loss because protection starts lower.

**Key Principle:**
> Longer-dated options cost more but decay more slowly (smaller negative theta).

# Standalone — Option Strategies, Greeks, Volatility

### Q43 — Synthetic Long Forward [DA-43]

**Question:**
A non-dividend-paying stock is currently trading at $50 per share. Which of the following option combinations could be used to create a synthetic long forward position in the stock?

A. Buy a $50 strike call and sell a $50 strike put with the same maturity
B. Buy a $50 strike put and sell a $50 strike call with the same maturity
C. Buy a $50 strike call and buy a $50 strike put with the same maturity

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Buy a $50 call and sell a $50 put** (same maturity): long call + short put = synthetic long forward.
- **B is wrong.** Long put + short call is a synthetic *short* forward.
- **C is wrong.** Buying both is a long straddle (profits from large moves either way).

**Key Principle:**
> Long call + short put = long forward; long put + short call = short forward.

### Q44 — Long Put + Short Call Payoff [DA-44]

**Question:**
An investor who buys a put option on a stock and sells a call option with the same strike price and maturity will realize the same payoff as:

A. a covered call position.
B. a long forward position.
C. a short forward position.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** A covered call has an asymmetric payoff and needs the stock.
- **B is wrong.** A long forward would be long call, short put.
- **C is correct.** **Short forward.** Buying a put and selling a call at the same strike and maturity replicates a short forward.

**Key Principle:**
> Long put + short call = short forward.

### Q45 — Risk of a Covered Call for a Yield Enhancer [DA-45]

**Question:**
An investor has a long position in a stock that he intends to hold for the long term. He sells call options on the stock to enhance his yield. The risk exposure for this covered call position is most likely:

A. the loss of upside exposure only.
B. limited protection from downside moves only.
C. both the loss of upside exposure and limited protection from downside moves.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Loss of upside only.** The investor gives up capital gains above the strike. For a long-term holder seeking yield, the premium's limited downside cushion is a net gain, not a risk.
- **B is wrong.** Limited downside protection isn't the risk exposure; downside exposure to the shares remains by intent.
- **C is wrong.** The downside cushion is a benefit, not a risk, for a yield-seeking long-term holder.

**Key Principle:**
> Covered call risk: gives up upside beyond the strike; downside exposure to the stock remains.

### Q46 — Covered Call Profit at Expiration [DA-46]

**Context:**
Stock $12.15; sell a $13.00 call at $1.25; stock ends at $14.30.

**Question:**
An investor owns shares of a stock priced at $12.15. She enters a covered call position using an option with a strike price of $13.00 trading at a premium of $1.25. When the option expires the shares are trading at $14.30. The profit at expiration is:

A. $0.90.
B. $2.10.
C. $3.40.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** $0.90 = 14.30 − 1.25 − 12.15 (subtracts the premium).
- **B is correct.** **$2.10.** Profit = S_T − max(S_T − X, 0) + c₀ − S₀ = 14.30 − 1.30 + 1.25 − 12.15 = 2.10.
- **C is wrong.** $3.40 = 14.30 + 1.25 − 12.15 (ignores the strike, i.e., the capped gain).

**Key Principle:**
> Covered call profit = S_T − max(S_T − X, 0) + c₀ − S₀ (max profit = X − S₀ + c₀).

### Q47 — Protective Put Breakeven [DA-47]

**Context:**
Six-month protective put, strike $75, 100 shares at $80, put premium $4.

**Question:**
An investor buys a 6-month protective put with a strike price of $75 on 100 shares of a stock trading at $80 per share. The put premium is $4 per share. The breakeven stock price on this position is:

A. $71.
B. $76.
C. $84.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** $71 = 75 − 4 (strike minus premium).
- **B is wrong.** $76 = 80 − 4 (subtracts the premium).
- **C is correct.** **$84.** S₀ + p₀ = 80 + 4.

**Key Principle:**
> Protective put breakeven = S₀ + p₀.

### Q48 — Lowering Position Delta [DA-48]

**Context:**
Long 100 shares of a non-dividend-paying stock.

**Question:**
An investor who is long 100 shares of a non-dividend-paying stock wants to reduce the delta of his position. Which of the following transactions would result in the lowest delta?

A. Shorting futures for 100 shares
B. Buying at-the-money put options for 100 shares
C. Selling at-the-money call options for 100 shares

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Short futures on 100 shares.** Futures on a non-dividend stock have delta ±1.0, so 1.0 − 1.0 = 0.
- **B is wrong.** Buying ATM puts adds ≈ −0.5 per share, leaving a position delta of about 50.
- **C is wrong.** Selling ATM calls also adds ≈ −0.5 per share, leaving about 50.

**Key Principle:**
> Delta: stock +1; short futures −1; ATM put ≈ −0.5; ATM short call ≈ −0.5.

### Q49 — Short Stock: Buying a Call vs Writing a Put [DA-49]

**Question:**
An investor holds a short stock position and is considering a temporary position adjustment using options on the same number of shares. Compared to writing a put option, buying a call option would cause the combined position to:

A. be exposed to potentially unlimited losses.
B. benefit from a reduction in implied volatility.
C. benefit from an increase in implied volatility.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** The call's payoff offsets losses as the price rises, so losses aren't unlimited.
- **B is wrong.** Writing the put (not buying the call) would benefit from a drop in implied vol.
- **C is correct.** **Benefit from an increase in implied volatility** (long option = long vega).

**Key Principle:**
> Long options: long vega. Short options: short vega.

### Q50 — Bull Call Spread Maximum Profit [DA-50]

**Context:**
Buy the October 40 call at $4.75; write the October 48 call at $2.30.

**Question:**
An investor establishes a bull call spread by buying an October 40 call for $4.75 and writing an October 48 call for $2.30. The maximum profit for this spread is:

A. $3.25.
B. $5.55.
C. $8.00.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** $3.25 = 8.00 − 4.75 (ignores the credit from the short call).
- **B is correct.** **$5.55.** Net cost = 4.75 − 2.30 = 2.45; max value = 48 − 40 = 8.00; max profit = 8.00 − 2.45 = 5.55.
- **C is wrong.** $8.00 is the maximum value at expiration, not profit.

**Key Principle:**
> Bull call spread max profit = width − net debit.

### Q51 — Where a Bear Put Spread Loses Most [DA-51]

**Question:**
The maximum loss on a bear put spread occurs when the underlying asset price at expiration is:

A. less than or equal to the lower strike price.
B. between the two strike prices.
C. greater than or equal to the higher strike price.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** At or below the lower strike the spread earns its maximum profit.
- **B is wrong.** Between the strikes the loss is less than the net cost.
- **C is correct.** **At or above the higher strike.** Both puts expire worthless and the net cost is lost.

**Key Principle:**
> Bear put spread: max loss = net debit (at/above X_H); max profit = width − net debit (at/below X_L).

### Q52 — Motivation for a Long Calendar Spread [DA-52]

**Question:**
A primary motivation behind a long calendar spread with equal notional amounts is to:

A. take advantage of time decay.
B. profit from a decrease in implied volatility.
C. profit from a large move in either direction.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Take advantage of time decay** (the short near-term option decays faster than the long longer-term option).
- **B is wrong.** Falling implied vol helps a *short* calendar spread.
- **C is wrong.** A large move in either direction helps a *short* calendar spread.

**Key Principle:**
> Long calendar: benefits from time decay, a stable market or rising implied vol.

### Q53 — Reading a Rise in Put Skew [DA-53]

**Question:**
An analyst observes increasing levels of implied volatility accompanied by sharp increases in the volatility skew of put options. Should this be interpreted as a change in market sentiment?

A. No
B. Yes, it indicates increased bullish sentiment
C. Yes, it indicates increased bearish sentiment

**Correct Answer:** C

**Explanation:**

- **A is wrong.** It does indicate a change in sentiment.
- **B is wrong.** Bullish sentiment would show up in increased *call* skew.
- **C is correct.** **Yes, increased bearish sentiment.** Hedgers buy puts, pushing up put prices and implied vol; a sharp rise in skew with higher overall implied vol signals bearish sentiment.

**Key Principle:**
> Rising put skew + rising implied vol → bearish sentiment.

### Q54 — Term Structure in a Sell-Off [DA-54]

**Question:**
When equity markets experience large sell-offs, the term structure of implied volatility for equity index options typically:

A. flattens.
B. inverts.
C. steepens.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The key says stress results in backwardation, not merely a flattening.
- **B is correct.** **Inverts.** In stress, demand for short-dated options pushes short-term implied vols above long-term.
- **C is wrong.** Steepening is the normal-market pattern (longer-term vols higher).

**Key Principle:**
> Market stress → inverted (backwardated) implied-vol term structure.

### Q55 — Strategy to Buy a Stock at a Lower Price When Vol Is High [DA-55]

**Question:**
An investor has a stock on his watchlist for purchase at a lower price. The stock's options currently trade with high levels of implied volatility. The most appropriate option strategy is to:

A. buy a straddle.
B. write put options.
C. enter a long calendar spread.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A long straddle suits implied vol too low and a big move expected.
- **B is correct.** **Write puts** at the target price. With elevated implied vol the put premium is rich, so the effective purchase price is below the strike by the premium.
- **C is wrong.** A long calendar spread profits from rising vol and is not suited to already-high vol.

**Key Principle:**
> Want to buy lower + vol high → sell puts (cash-secured put).

### Q56 — Bullish View With Stable Volatility [DA-56]

**Question:**
Which of the following long option strategies is most appropriate for an investor who is bullish and does not expect implied volatilities to change?

A. Straddle
B. Risk reversal
C. Calendar spread

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A long straddle is costly and needs a large move; a bullish investor doesn't need the put.
- **B is correct.** **Risk reversal** (long calls, short puts): bullish, lowers cost, suits stable volatility.
- **C is wrong.** A calendar spread is better for a neutral view.

**Key Principle:**
> Bullish + unchanged vol → long risk reversal.

### Q57 — Short Straddle Breakevens [DA-57]

**Context:**
Short ATM straddle on a $100 stock: put $6, call $8.

**Question:**
An investor enters a short at-the-money spot straddle on a stock that is trading at $100 using a put option priced at $6 and a call option priced at $8. The breakeven prices for this straddle are:

A. $86 and $114.
B. $92 and $106.
C. $94 and $108.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **$86 and $114.** Premiums received = 14; breakevens = 100 ± 14.
- **B is wrong.** *(My reconstruction.)* $92/$106 = 100 − 8 / 100 + 6: wrong premium on each side.
- **C is wrong.** *(My reconstruction.)* $94/$108 = 100 − 6 / 100 + 8: premiums assigned to the wrong sides.

**Key Principle:**
> Straddle breakevens = K ± (c + p).

# Standalone — Swap Duration Adjustment

### Q58 — Swap Notional to Raise Portfolio Duration [DB-1]

**Context:**
€30 million bond portfolio, modified duration 3, target 5; enter a receive-fixed swap with notional €20 million.

**Question:**
A European bond portfolio manager wants to increase the modified duration of his €30 million portfolio from 3 to 5. She would most likely enter a receive-fixed interest rate swap that has principal notional of €20 million and:

A. a modified duration of 2.
B. a modified duration of 3.
C. a modified duration of 4.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** MD of 2 would only lift the combined duration to 3 + 20m × 2/30m = 4.33. *(My check.)*
- **B is correct.** **Modified duration of 3.** 30m × 3 + 20m × MD_swap = 30m × 5, so MD_swap = (5 − 3) × 30m / 20m = 3.
- **C is wrong.** MD of 4 would give 3 + 20m × 4/30m = 5.67, overshooting the target. *(My check.)*

**Key Principle:**
> MV_P × MD_P + N_S × MD_S = MV_P × MD_T → N_S × MD_S = MV_P (MD_T − MD_P).

# DB1 — Global Mega (Futures Hedging, Equitizing Cash, Equity Swaps, Variance Swaps, Fed Funds, Basis)

*Full vignette: Appendix → DB1*

### Q59 — Futures to Fully Hedge a Treasury Portfolio [DB-2]

**Context (DB1):**
Monatize (asset manager) is advised by Global Mega's Regan and Whitacre on two portfolios.

**Portfolio A (US Treasuries) and the Treasury futures contract / CTD bond**

| | Portfolio A | Futures / CTD |
|---|---|---|
| Market value / price | $143,234,000 | 145.20 |
| Modified duration | 9.10 | 8.75 |
| Basis point value | $130,342.94 | $127.05 |
| Conversion factor | | 0.72382 |
| Contract size | | $100,000 |

**Portfolio B:** $100,000,000 equity portfolio indexed to the S&P 500 with $4,800,000 excess cash. S&P 500 futures price 3,300, multiplier $250, beta 1.00.

**Question:**
Based on Exhibit 1, the number of Treasury futures contracts Whitacre should sell to fully hedge Portfolio A is closest to:

A. 650.
B. 743.
C. 1,026.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** 650 = 130,342.94 / 145.20 × 0.72382 (uses the price instead of BPV_CTD).
- **B is correct.** **743.** BPVHR = (BPV_P / BPV_CTD) × CF = (130,342.94 / 127.05) × 0.72382 = 742.6 ≈ 743 contracts to sell.
- **C is wrong.** 1,026 = 130,342.94 / 127.05 (omits the conversion factor).

**Key Principle:**
> Number of futures (full hedge) = (BPV_P / BPV_CTD) × CF.

### Q60 — Futures to Cut Duration to 3.10 [DB-3]

**Context (DB1):**
Monatize (asset manager) is advised by Global Mega's Regan and Whitacre on two portfolios.

**Portfolio A (US Treasuries) and the Treasury futures contract / CTD bond**

| | Portfolio A | Futures / CTD |
|---|---|---|
| Market value / price | $143,234,000 | 145.20 |
| Modified duration | 9.10 | 8.75 |
| Basis point value | $130,342.94 | $127.05 |
| Conversion factor | | 0.72382 |
| Contract size | | $100,000 |

**Portfolio B:** $100,000,000 equity portfolio indexed to the S&P 500 with $4,800,000 excess cash. S&P 500 futures price 3,300, multiplier $250, beta 1.00.

Monatize decides to cut Portfolio A's modified duration to 3.10 rather than fully hedge (flat curve).

**Question:**
Based on Exhibit 1, the number of Treasury futures contracts Whitacre should sell to achieve Monetize’s objective with respect to Portfolio A is closest to:

A. 490.
B. 518.
C. 676.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **490.** BPV_T = 3.10 × 0.0001 × 143,234,000 = 44,402.54. BPVHR = ((44,402.54 − 130,342.94) / 127.05) × 0.72382 = −489.6 → sell 490 contracts.
- **B is wrong.** 518 subtracts 6.00 from the CTD's duration instead of the portfolio's in BPV_T: ((8.75 − 6.00) × 143,234,000 × 0.0001 − 130,342.94)/127.05 × 0.72382 = −518.
- **C is wrong.** 676 omits the conversion factor: −85,940.40 / 127.05 = −676.

**Key Principle:**
> Partial duration change: N = ((BPV_T − BPV_P) / BPV_CTD) × CF, with BPV_T = MD_T × 0.0001 × MV_P. Negative → sell.

### Q61 — Equitizing Excess Cash With Index Futures [DB-4]

**Context (DB1):**
Monatize (asset manager) is advised by Global Mega's Regan and Whitacre on two portfolios.

**Portfolio A (US Treasuries) and the Treasury futures contract / CTD bond**

| | Portfolio A | Futures / CTD |
|---|---|---|
| Market value / price | $143,234,000 | 145.20 |
| Modified duration | 9.10 | 8.75 |
| Basis point value | $130,342.94 | $127.05 |
| Conversion factor | | 0.72382 |
| Contract size | | $100,000 |

**Portfolio B:** $100,000,000 equity portfolio indexed to the S&P 500 with $4,800,000 excess cash. S&P 500 futures price 3,300, multiplier $250, beta 1.00.

**Question:**
The number of S&P 500 futures contracts that Whitacre should buy to equitize Portfolio B’s excess cash position is closest to:

A. 6.
B. 121.
C. 1,455.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **6.** Futures value = 3,300 × $250 = $825,000. N = (4,800,000 / 825,000) × (1.00 − 0)/1.00 = 5.8 ≈ 6.
- **B is wrong.** 121 = 100,000,000 / 825,000 (uses the whole portfolio, not the excess cash).
- **C is wrong.** 1,455 = 4,800,000 / 3,300 (uses the quoted price, not price × multiplier).

**Key Principle:**
> Equitize cash: N = (β_T − β_S)/β_f × (S/F), with F = price × multiplier.

### Q62 — Properties of a Total Return Equity Swap [DB-5]

**Context (DB1):**
Regan first suggests a total return equity swap: Monatize pays the S&P 500 return and receives a fixed rate, for a fee.

**Question:**
The derivative product first suggested by Regan as a potential hedge strategy for Portfolio B:

A. is a relatively liquid contract.
B. eliminates counterparty credit risk.
C. allows Monatize to keep voting rights on its equity portfolio.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Equity swaps are relatively illiquid.
- **B is wrong.** They are OTC, so each party bears counterparty risk (usually collateralized to reduce it).
- **C is correct.** **Lets Monatize keep voting rights** on the stock portfolio (the swap doesn't transfer the shares).

**Key Principle:**
> Equity swap: OTC, illiquid, counterparty risk; keeps ownership and voting rights.

### Q63 — Value of a Variance Swap After Five Months [DB-6]

**Context (DB1):**
Long $1,000,000 vega notional of a one-year variance swap on the S&P 500, strike 15%. Over five months: realized vol 20%; a new seven-month swap has fair strike 18%; annual rate 1.50%.

**Question:**
Based on the CFO’s set of assumptions, the gain on the purchase of the variance swap on the S&P 500 in five months would be closest to:

A. $4,317,775.
B. $4,355,556.
C. $4,736,334.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **$4,317,775.** Variance notional = 1,000,000 / (2 × 15) = 33,333.33. PV factor = 1/(1 + 0.015 × 7/12) = 0.991326. Value = 33,333.33 × 0.991326 × [(5/12) × 400 + (7/12) × 324 − 225] = 33,333.33 × 0.991326 × 130.67 = $4,317,775 (gain for the long).
- **B is wrong.** $4,355,556 omits the PV factor (0.991326).
- **C is wrong.** $4,736,334 switches realized and implied variances: (5/12 × 324 + 7/12 × 400 − 225) × 33,333.33 × 0.991326.

**Key Principle:**
> Variance swap value = N_var × PV × [(t/T) × RealizedVol² + ((T−t)/T) × ImpliedVol² − K²]; N_var = vega notional / (2K).

### Q64 — Fed Funds Futures Statements [DB-7]

**Context (DB1):**
S1: end-of-month activity by large institutions induces 'dips' in the effective fed funds rate. S2: probabilities inferred from fed funds futures usually have strong predictive power, especially longer term. S3: fed funds futures are tied to the Fed's target rate.

**Question:**
Which of Whitacre’s three statements about fed funds futures is correct?

A. Statement 1
B. Statement 2
C. Statement 3

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Statement 1 is correct.** End-of-month dips in the effective rate bias the probability calculations; data providers smooth them.
- **B is wrong.** Statement 2 is wrong: the inferred probabilities usually don't have strong predictive power, especially long term.
- **C is wrong.** Statement 3 is wrong: the contracts are tied to the *effective* fed funds rate (average monthly), not the Fed's target.

**Key Principle:**
> Fed funds futures price the effective (not target) rate; EOM dips bias it; weak long-term predictive power.

### Q65 — Bond Futures Basis Arbitrage [DB-8]

**Context (DB1):**
S4: if the basis is positive, a trader profits by 'selling the basis'. S5: if the basis is negative, a trader profits by selling the bond and buying the futures.

**Question:**
Which of Whitacre’s two statements regarding bond futures arbitrage is correct?

A. Only Statement 4
B. Only Statement 5
C. Both Statement 4 and Statement 5

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Only Statement 4.** Positive basis → sell the basis: sell the bond, buy the futures.
- **B is wrong.** Statement 5 is wrong: with a negative basis, 'buy the basis': buy the bond and short the futures.
- **C is wrong.** Statement 5 is wrong.

**Key Principle:**
> Positive basis → sell bond/buy futures. Negative basis → buy bond/short futures.

# Standalone — Futures Hedging

### Q66 — Hedging a Long 10-Year Treasury [DB-9]

**Question:**
A US bond portfolio manager wants to hedge a long position in a 10-year Treasury bond against a potential rise in domestic interest rates. He would most likely:

A. sell fixed-income (bond) futures.
B. enter a receive-fixed 10-year interest rate swap.
C. sell a strip of 90-day Eurodollar futures contracts.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Sell bond futures.** The hedging instrument should match the bond's maturity.
- **B is wrong.** A receive-fixed swap loses value when rates rise, so it doesn't hedge a long bond.
- **C is wrong.** 90-day Eurodollar futures have limited maturities and suit short-term exposures.

**Key Principle:**
> Long bond → sell (short) bond futures; match the instrument's maturity to the exposure.

### Q67 — Locking In a Future Loan Rate [DB-10]

**Context:**
Canadian PE firm will take a three-month bridge loan in six months. It sells interest rate futures at 98.05; in six months the loan rate is 2.70% and the hedge is unwound at 97.30.

**Question:**
The CIO of a Canadian private equity company wants to lock in the interest on a three-month “bridge” loan his firm will take out in six months to complete an LBO deal. He sells the relevant interest rate futures contracts at 98.05. In six-months’ time, he initiates the loan at 2.70% and unwinds the hedge at 97.30. The effective interest rate on the loan is:

A. 0.75%.
B. 1.95%.
C. 2.70%.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** 0.75% is the futures gain alone.
- **B is correct.** **1.95%.** Futures gain = 98.05 − 97.30 = 0.75 (75 bp). Effective rate = 2.70% − 0.75% = 1.95%.
- **C is wrong.** 2.70% ignores the hedge gain.

**Key Principle:**
> Short rate futures hedge for a future borrower: effective rate = loan rate − futures gain.

# DB2 — Uff / Chehalis Fund (Equity Beta With Futures, Swap Duration, Tactical Rebalancing)

*Full vignette: Appendix → DB2*

### Q68 — Futures to Raise Equity Beta [DB-11] (Essay)

**Context (DB2):**
Uff (Chehalis Fund) uses derivatives for tactical strategies.

**Exhibit 1 — Equity allocation and futures:** equity allocation €168,300,000; current beta 0.9; target beta 1.2; futures contract value €45,000; futures beta 1.0.

**Question:**
Determine the number of equity index futures contracts Uff should use to reach the target beta, and whether to buy or sell them.

**Model Answer / Explanation:**

N_f = ((β_T − β_S)/β_f) × (S/F) = ((1.2 − 0.9)/1.0) × (168,300,000 / 45,000) = 0.3 × 3,740 = **1,122**. Positive, so **buy 1,122** contracts.

**Key Principle:**
> Beta change with futures: N = ((β_T − β_S)/β_f) × S/F; positive = buy.

### Q69 — Swap Notional to Reduce Bond Duration [DB-12] (Essay)

**Context (DB2):**
Uff expects rates to rise and wants to cut the bond allocation's modified duration without selling bonds, using a pay-fixed/receive-floating swap.

**Exhibit 2:** bond allocation €90,100,000; current MD 7.8000; target MD 5.0000; swap modified duration for fixed-rate payer −2.4848.

**Question:**
Determine the required notional principal for the interest rate swap.

**Model Answer / Explanation:**

MV_P × MD_P + N_S × MD_S = MV_P × MD_T
N_S = MV_P (MD_T − MD_P)/MD_S = 90,100,000 × (5.0 − 7.8)/(−2.4848) = **€101,529,298** (three-year par pay-fixed, receive-floating swap).

**Key Principle:**
> Pay-fixed swap has negative duration: N_S = MV_P (MD_T − MD_P) / MD_S.

### Q70 — Tactical Rebalancing With Equity and Bond Futures [DB-13] (Essay)

**Context (DB2):**
Current equities €201,384,000 (69.56%), bonds €88,126,000 (30.44%); target equities €188,181,500 (65%), bonds €101,328,500 (35%); total €289,510,000.

**Exhibit 4:** equity beta 1.28; bond modified duration 4.59; equity index futures contract value €35,000, beta 1.00; BPV of CTD bond €91.26; CF 0.733194.

**Question:**
Determine how many equity index and bond futures contracts Uff should use to rebalance to the target allocation, and whether to buy or sell them.

**Model Answer / Explanation:**

**Equities:** reduce by €13,202,500 (= 201,384,000 − 188,181,500). Target beta 0: N_f = ((0 − 1.28)/1.00) × (13,202,500 / 35,000) = **−483** → **sell 483** equity index futures.

**Bonds:** increase by €13,202,500 (from a notional cash position, BPV_P = 0). BPV_T = 4.59 × 0.0001 × 13,202,500 = €6,060. BPVHR = ((6,060 − 0)/91.26) × 0.733194 = 48.7 → **buy 49** bond futures.

**Key Principle:**
> Synthetic rebalance: sell equity futures with β_T = 0; buy bond futures with BPV_P = 0 and BPV_T = MD_T × 0.0001 × amount.

# DB3 — Wyalusing / Tioga (Pay-Floating Swap, Cross-Currency Basis Swap)

*Full vignette: Appendix → DB3*

### Q71 — Constructing a Pay-Floating Swap to Convert Fixed Debt [DB-14] (Essay)

**Context (DB3):**
Wyalusing issued fixed-rate coupon bonds in Canada one year ago. The CFO expects Canadian rates to fall and stay low for three years and wants to use a par interest rate swap to convert the fixed coupon payments into floating-rate payments.

**Question:**
Explain how to construct the swap with regard to (i) tenor, (ii) cash flows, (iii) notional value and (iv) settlement dates.

**Model Answer / Explanation:**

- **(i) Tenor:** three years, the period over which rates are expected to stay low.
- **(ii) Cash flows:** Wyalusing **receives fixed** and **pays floating**. Receiving fixed on the swap offsets the fixed bond coupons it pays, leaving floating-rate-based obligations. Reference rate and fixed rate are set at inception.
- **(iii) Notional:** set so that the fixed payments received equal the bond's fixed coupon payments.
- **(iv) Settlement dates:** the same dates as the bond's coupon payments.

**Key Principle:**
> Convert fixed debt to floating: receive fixed/pay floating, notional and dates matched to the bond.

### Q72 — Cross-Currency Basis Swap Cash Flows [DB-15] (Essay)

**Context (DB3):**
Wyalusing will borrow in CAD for a US plant but make interest payments in USD, using a cross-currency basis swap.

**Question:**
Describe, from Wyalusing's perspective, the swap's cash flows at inception, periodic cash flows and cash flows at maturity.

**Model Answer / Explanation:**

- **At inception:** Wyalusing pays the CAD notional and receives USD at the USD/CAD rate agreed at inception.
- **Periodic:** Wyalusing receives CAD interest and pays USD interest. Both are on floating reference rates; the CAD side includes the quoted basis (CAD floating rate minus the basis, applied to the CAD notional), and the USD payment uses the inception exchange rate.
- **At maturity:** Wyalusing receives the CAD notional and pays USD at the inception exchange rate. These flows are the inverse of inception.

**Key Principle:**
> Cross-currency basis swap: notionals exchanged at inception and maturity at one fixed rate; floating interest each currency, basis added to one leg.

# Standalone — Cross-Currency Basis Swaps

### Q73 — Notional Exchange in a Cross-Currency Basis Swap [DB-16]

**Question:**
A US institutional investor in search of yield decides to buy Italian government bonds for her portfolio but wants to hedge against the risk of exchange rate fluctuations. She enters a cross-currency basis swap, with the same payment dates as the bonds, where at inception she delivers US dollars in exchange for euros for use in purchasing the Italian bonds. The notional principals on the swap are most likely exchanged:

A. at inception only.
B. at maturity only.
C. both at inception and at maturity.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Exchange only at inception would leave the currency exposure unhedged at maturity.
- **B is wrong.** Exchange only at maturity wouldn't provide the foreign currency needed at inception.
- **C is correct.** **Both at inception and at maturity**, at a single exchange rate.

**Key Principle:**
> Cross-currency basis swap exchanges notionals at both ends.

### Q74 — Positive Basis for Lending USD [DB-17]

**Context:**
Demand for USD is strong relative to EUR, so there is a positive basis for 'lending' USD. The US investor hedges Italian bonds with the swap.

**Question:**
Continuing from the previous question, assume demand for US dollars is strong relative to demand for euros, so there is a positive basis for “lending” US dollars. By hedging the position in Italian government bonds with the currency basis swap, the US investor will most likely increase the periodic net interest payments received from the swap counterparty in:

A. euros only.
B. US dollars only.
C. both euros and US dollars.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The basis affects the USD leg, not the euro payments.
- **B is correct.** **USD only.** The positive basis is included in the net periodic interest the counterparty pays to the investor, in USD.
- **C is wrong.** Only the USD interest is increased.

**Key Principle:**
> Strong USD demand → positive basis paid to those who lend USD via the swap.

# DB4 — Southern Sloth Sanctuary (Equitizing Cash, Currency Futures)

*Full vignette: Appendix → DB4*

### Q75 — Equitizing LLD Cash With Futures [DB-18] (Essay)

**Context (DB4):**
Sanctuary received LLD1,000,000 to equitize via Lushland 100 futures: quoted price 1,247; multiplier LLD200; beta 1.00.

**Question:**
Determine the number of futures contracts the CFO should buy to equitize the excess cash position.

**Model Answer / Explanation:**

Futures value = 1,247 × 200 = LLD249,400. N_f = (1.00 − 0)/1.00 × 1,000,000/249,400 = 4.01 → **buy 4** contracts.

**Key Principle:**
> Equitize cash: N = (β_T/β_f) × cash / (price × multiplier).

### Q76 — Hedging a JPY Receivable With Futures [DB-19] (Essay)

**Context (DB4):**
The Sanctuary has a binding contract to sell Japanese land for JPY500,000,000 in 30 days; the CFO wants to hedge JPY depreciation with futures, hedge ratio 1.

**Question:**
Describe a strategy to implement the CFO's desired hedge.

**Model Answer / Explanation:**

**Sell JPY futures** with the closest expiry to the expected JPY inflow, locking in the current LLD/JPY rate. The number of contracts = JPY500,000,000 ÷ the JPY futures contract value. With a hedge ratio of 1, futures and spot price changes are equal over the life of the contract, so the hedge is fully effective (the Sanctuary receives any depreciation of JPY on the futures and pays any appreciation).

**Key Principle:**
> Foreign-currency receivable → sell foreign-currency futures; N = exposure / contract size × hedge ratio.

# Standalone — Futures, Equity Swaps, Variance Swaps, Fed Funds

### Q77 — Shifting Large-Cap to Small-Cap With Futures [DB-20]

**Question:**
An equity portfolio manager is invested 100% in US large-cap stocks, but he wants to reduce the current allocation by 20%, to 80%, and allocate 20% to US small caps. He decides not to sell the stocks because of the high transaction costs. Rather, he will use S&P 500 Index futures and Russell 2000 Index futures for achieving the desired exposure in, respectively, US large caps and small caps. To achieve the new allocation, he will for an equivalent of 20% of the portfolio value:

A. purchase Russell 2000 futures only.
B. purchase Russell 2000 futures and sell S&P 500 futures.
C. sell Russell 2000 futures and purchase S&P 500 futures.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Buying only Russell 2000 futures would add small-cap exposure without reducing large-cap exposure.
- **B is correct.** **Buy Russell 2000 futures and sell S&P 500 futures** for 20% of the portfolio value each.
- **C is wrong.** Reversed: that would increase large-cap and short small-cap.

**Key Principle:**
> Asset allocation shift with futures: sell futures on the asset class to reduce, buy futures on the one to increase.

### Q78 — VIX Carry Roll-Down Trade [DB-21]

**Context:**
VIX 13.50; front-month futures 14.10; second-month futures 15.40 (upward sloping). Curve shape assumed constant over three months.

**Question:**
A volatility trader observes that the VIX term structure is upward sloping. In particular, the VIX is at 13.50, the front-month futures contract trades at 14.10, and the second-month futures contract trades at 15.40. Assuming the shape of the VIX term structure will remain constant over the next three-month period, the trader decides to implement a trade that would profit from the VIX carry roll down. She will most likely purchase the:

A. VIX and sell the VIX second-month futures.
B. VIX and sell the VIX front-month futures.
C. VIX front-month futures and sell the VIX second-month futures.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** You can't trade the VIX itself directly; trades use futures or options.
- **B is wrong.** You can't trade the VIX itself directly.
- **C is correct.** **Buy the front-month and sell the second-month VIX futures.** The spread (1.30) narrows toward the front-month-to-spot gap (0.60) as futures converge to spot, earning roll-down gains.

**Key Principle:**
> Contango + stable vol: VIX futures roll down toward spot; trade is a calendar spread in the futures.

### Q79 — Structuring an Equity Swap for a Concentrated Holder [DB-22] (Essay)

**Context:**
The CEO owns 100 million shares at €30 and wants to sell 10% of his position and earn a floating rate, via an equity swap.

**Question:**
Explain how to structure such a swap.

**Model Answer / Explanation:**

He **pays the total return on 10 million shares** (10% of his holding) and **receives a floating rate** (e.g., the market reference rate) on a notional of **€300 million** (€30 × 10 million shares).

**Key Principle:**
> Pay equity / receive floating synthetically sells the stock and earns the floating rate.

### Q80 — Rebalancing Allocation Using Swaps [DB-23] (Essay)

**Context:**
$30 million account: one-third stocks, two-thirds bonds. Target 50/50, and within stocks 60% domestic / 40% foreign (currently 70/30); bonds all domestic corporate. Reference rate assumed flat.

**Question:**
Explain how swaps can be used to implement this adjustment.

**Model Answer / Explanation:**

Current: $10 million stocks ($7 million domestic, $3 million foreign) and $20 million bonds. Target: $15 million stocks ($9 million domestic, $6 million foreign) and $15 million bonds.

Using swaps against the market reference rate:
1. **Receive** the return on **$2 million** of a domestic equity index and **$3 million** of a foreign equity index.
2. **Pay** the return on **$5 million** of a domestic corporate bond index.

The reference-rate flows on the equity swaps (paid) and the bond swap (received) net to zero because the notionals sum to the same $5 million.

**Key Principle:**
> Receive equity/pay bond (vs MRR) shifts allocation toward equities synthetically.

### Q81 — Fed Funds Futures Probability of a Hike [DB-24] (Essay)

**Context:**
The fed funds futures contract expiring after the next FOMC meeting is priced at 97.175. The target range is 2.50%–2.75%.

**Question:**
Explain how the information can be used and calculate the probability of a 25 bp increase in the target range.

**Model Answer / Explanation:**

Implied effective fed funds rate = 100 − 97.175 = **2.825%** (the expected average rate for the month).

Current target midpoint = (2.50 + 2.75)/2 = 2.625%. After a 25 bp hike the range is 2.75%–3.00% (midpoint 2.875%).

Probability of a hike = (2.825 − 2.625)/(2.875 − 2.625) = 0.200/0.250 = **80%**.

**Flag:** The key's probability formula and result did not paste. The 80% comes from my calculation using range midpoints, the same method the key uses in DB-28 (86%); the key's own figure is unverified.

**Key Principle:**
> Probability of move = (implied rate − current rate) / (rate after move − current rate).

# DB5 — Lee / Pliny Elder (Swap Duration, Variance Swap, Equity Swap, Fed Funds)

*Full vignette: Appendix → DB5*

### Q82 — Swap Notional for Client A's Duration Target [DB-25] (Essay)

**Context (DB5):**
Client A holds a $10 million Treasury portfolio, modified duration 5.8, target 6.2, via a pay-floating/receive-fixed 1-year swap with modified duration 1.25.

**Question:**
Calculate the notional principal for the interest rate swap.

**Model Answer / Explanation:**

10m × 5.8 + N_S × 1.25 = 10m × 6.2, so N_S = 10m × (6.2 − 5.8)/1.25 = **$3,200,000**.

**Key Principle:**
> N_S = MV_P × (MD_T − MD_P)/MD_S.

### Q83 — Variance Swap Settlement [DB-26] (Essay)

**Context (DB5):**
Client B bought $90,000 vega notional of a 1-year variance swap on the Russell 2000 at a 15% strike a year ago; realized volatility was 17%.

**Question:**
Calculate the settlement amount at expiration and whether Client B pays or receives.

**Model Answer / Explanation:**

Variance notional = 90,000/(2 × 15) = $3,000. Realized variance 17² = 289; strike variance 15² = 225.
Settlement = 3,000 × (289 − 225) = **$192,000**. Client B is long and realized vol exceeded the strike, so Client B **receives** $192,000.

**Key Principle:**
> Variance swap payoff = N_var × (realized variance − strike variance); N_var = vega notional/(2K).

### Q84 — Equity Swap Gain/Loss for Client C [DB-27] (Essay)

**Context (DB5):**
Client C swaps the total return on 80,000 Kiwi shares ($21.50) for a floating rate of 1.00% (annualized) for three months; Kiwi pays a $0.25 dividend and the price falls 2%.

**Question:**
Calculate the gain or loss to Client C at expiration of the equity swap.

**Model Answer / Explanation:**

Stock total return = (21.50 × 0.98 − 21.50 + 0.25)/21.50 = −0.18/21.50 = −0.8372%. Floating return = 1.00%/4 = 0.25%.
Client C pays the equity leg, receives the floating leg: gain = (21.50 × 80,000) × (0.25% − (−0.8372%)) = 1,720,000 × 1.0872% = **$18,700** received from the counterparty.

**Key Principle:**
> Equity payer gains when the stock's total return is below the floating rate.

### Q85 — Probability of a 25 bp Cut [DB-28] (Essay)

**Context (DB5):**
Fed funds futures price 98.09; target range 2.00%–2.25%.

**Question:**
Calculate the probability of a 25 bp rate cut at the next FOMC meeting.

**Model Answer / Explanation:**

Implied FFE rate = 100 − 98.09 = 1.91%. Current midpoint = 2.125%; midpoint after a cut = 1.875%.
Probability = (1.91 − 2.125)/(1.875 − 2.125) = −0.215/−0.250 = **86%**.

**Key Principle:**
> Probability = (implied rate − current)/(rate after move − current).

# DB6 — Khan / Poly (Asset Allocation Shifts With Futures, Equity Swap, CTD)

*Full vignette: Appendix → DB6*

### Q86 — Bond Futures to Shift 15% Into Bonds [DB-29]

**Context (DB6):**
Acme Generators holds $200 million: 65% equities, 35% bonds. It wants to move 15% of the portfolio from equities to bonds with index futures.

**Exhibit 1**

| Equity portfolio (65%) | | Bond portfolio (35%) | |
|---|---|---|---|
| Current beta | 1.20 | Current modified duration | 5.85 |
| Equity index futures price | 12,500 | Bond index futures price | 113.75 |
| Equity futures multiplier | $10 | Bond futures contract size | $100,000 |
| Equity futures beta | 1.00 | BPV of CTD bond | $99.72 |
| | | Conversion factor | 0.9546 |

**Question:**
To achieve the desired bond allocation, Acme Generators should:

A. buy 168 bond index futures contracts.
B. sell 176 bond index futures contracts.
C. buy 176 bond index futures contracts.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Buy 168.** Move $30 million (15% of $200m) into bonds. BPV_T = 5.85 × 0.0001 × 30,000,000 = 17,550. N = (17,550/99.72) × 0.9546 = 168 contracts.
- **B is wrong.** Selling is the wrong direction; 176 = 17,550/99.72 (omits the conversion factor).
- **C is wrong.** 176 omits the conversion factor (17,550/99.72 = 176).

**Key Principle:**
> Add bond exposure synthetically: buy N = (BPV_T / BPV_CTD) × CF.

### Q87 — Equity Futures to Cut 15% From Equities [DB-30]

**Context (DB6):**
Acme Generators holds $200 million: 65% equities, 35% bonds. It wants to move 15% of the portfolio from equities to bonds with index futures.

**Exhibit 1**

| Equity portfolio (65%) | | Bond portfolio (35%) | |
|---|---|---|---|
| Current beta | 1.20 | Current modified duration | 5.85 |
| Equity index futures price | 12,500 | Bond index futures price | 113.75 |
| Equity futures multiplier | $10 | Bond futures contract size | $100,000 |
| Equity futures beta | 1.00 | BPV of CTD bond | $99.72 |
| | | Conversion factor | 0.9546 |

**Question:**
To achieve the desired equity allocation, Acme Generators should:

A. buy 240 equity index futures contracts.
B. sell 288 equity index futures contracts.
C. sell 576 equity index futures contracts.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** 240 = 30,000,000/125,000 (ignores the 1.20 beta).
- **B is correct.** **Sell 288.** N = ((0 − 1.20)/1.00) × (30,000,000/(12,500 × 10)) = −288.
- **C is wrong.** The key doesn't explain 576. *(Twice 288.)*

**Flag:** The key's explanation text refers to 'a beta of 1.21' in places; the exhibit and the calculation use 1.20.

**Key Principle:**
> Cut equity exposure: N = −(β_S/β_f) × S/F.

### Q88 — Equity Swap Settlement for Beryl [DB-31]

**Context (DB6):**
Beryl swaps 40% of its $500 million QQQ position (notional $200 million) at SOFR − 50 bp, semiannual settlement. The QQQ position falls to $480 million; annual SOFR for the first period is 4.50%.

**Question:**
At the first settlement date for the equity swap, Beryl Hedge Fund would:

A. pay $24,000,000.
B. receive $12,000,000.
C. receive $24,000,000.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The key doesn't explain 'pay $24,000,000'.
- **B is correct.** **Receive $12,000,000.** Floating: 200m × (4.50% − 0.50%) × 180/360 = $4,000,000 received. Equity return = (480 − 500)/500 = −4%, so Beryl receives 4% × 200m = $8,000,000 on the equity leg. Net received = $12,000,000.
- **C is wrong.** The key doesn't explain 'receive $24,000,000'.

**Key Principle:**
> Equity payer receives the floating leg and the equity decline; pays equity gains.

### Q89 — Cheapest-to-Deliver Bond [DB-32]

**Context (DB6):**
Futures settlement price $135.74; contract size $100,000.

| | Bond A | Bond B | Bond C |
|---|---|---|---|
| Cash dirty price | 131.25 | 134.50 | 138.75 |
| Conversion factor | 0.8925 | 0.9375 | 0.9525 |

**Question:**
The cheapest-to-deliver bond for Gem Insurance is:

A. Bond A.
B. Bond B.
C. Bond C.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Bond A's loss is −10,102.05.
- **B is correct.** **Bond B.** Amount received = 135.74/100 × CF × 100,000 and bond cost = dirty price/100 × 100,000: A: 121,147.95 − 131,250 = −10,102.05; **B: 127,256.25 − 134,500 = −7,243.75**; C: 129,292.35 − 138,750 = −9,457.65. B has the smallest loss.
- **C is wrong.** Bond C's loss is −9,457.65.

**Key Principle:**
> CTD = bond maximizing (futures price × CF × size) − dirty price cost.

# DB7 — Murphy / Deamon (Swaps, Variance Swaps, Rebalancing With Futures)

*Full vignette: Appendix → DB7*

### Q90 — Swap Notional for Casey [DB-33]

**Context (DB7):**
Murphy reviews Tanya Casey (bonds $10 million, modified duration 7.50, target 5.25, swap duration −3.00; buys a one-year variance swap on the S&P 500) and Aaron Schouler (rebalancing to beginning-of-year weights).

**Exhibit 1 (Casey):** vega notional $10,000,000; strike 16%; annual rate 6.0%. After six months realized vol is 21%; a new six-month swap has fair strike 19%.

**Exhibit 2 (Schouler):** equity beta 1.35; bond MD 6.50; equity futures price 20,000, multiplier $10, beta 1.00; bond futures price 118.50, size $100,000; CTD BPV $98.57; CF 0.9785. Beginning of year: equities $75m, bonds $50m; end of year: equities $115m, bonds $55m.

**Question:**
The notional principal of the interest rate swap to reduce the modified duration of Casey’s bond allocation is closest to:

A. $5.0 million.
B. $7.5 million.
C. $10.0 million.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The key doesn't explain $5.0 million.
- **B is correct.** **$7.5 million.** 10m × 7.50 + N_S × (−3.00) = 10m × 5.25, so N_S = (5.25 − 7.50)/(−3.00) × 10m = $7.5m.
- **C is wrong.** The key doesn't explain $10.0 million.

**Key Principle:**
> N_S = MV_P × (MD_T − MD_P)/MD_S.

### Q91 — Variance Swap Value After Six Months [DB-34]

**Context (DB7):**
Murphy reviews Tanya Casey (bonds $10 million, modified duration 7.50, target 5.25, swap duration −3.00; buys a one-year variance swap on the S&P 500) and Aaron Schouler (rebalancing to beginning-of-year weights).

**Exhibit 1 (Casey):** vega notional $10,000,000; strike 16%; annual rate 6.0%. After six months realized vol is 21%; a new six-month swap has fair strike 19%.

**Exhibit 2 (Schouler):** equity beta 1.35; bond MD 6.50; equity futures price 20,000, multiplier $10, beta 1.00; bond futures price 118.50, size $100,000; CTD BPV $98.57; CF 0.9785. Beginning of year: equities $75m, bonds $50m; end of year: equities $115m, bonds $55m.

**Question:**
The value of the variance swap six months after initiation is closest to:

A. $44 million.
B. $62 million.
C. $86 million.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **≈$44 million.** Variance notional = 10,000,000/(2 × 16) = 312,500. PV factor = 1/(1 + 0.06 × 0.5) = 0.9709. Value = 312,500 × 0.9709 × [(6/12) × 441 + (6/12) × 361 − 256] = 312,500 × 0.9709 × 145 ≈ $44.0 million (long gains).
- **B is wrong.** The key doesn't explain $62 million.
- **C is wrong.** The key doesn't explain $86 million.

**Flag:** The key rounds the PV factor to 0.971 (giving $43,998,437.50). Unrounded 1/1.03 = 0.970874 gives $43,992,718. Both ≈ $44 million.

**Key Principle:**
> Same variance swap valuation formula; PV factor discounts for the remaining life.

### Q92 — Equity Futures to Rebalance Schouler [DB-35]

**Context (DB7):**
Murphy reviews Tanya Casey (bonds $10 million, modified duration 7.50, target 5.25, swap duration −3.00; buys a one-year variance swap on the S&P 500) and Aaron Schouler (rebalancing to beginning-of-year weights).

**Exhibit 1 (Casey):** vega notional $10,000,000; strike 16%; annual rate 6.0%. After six months realized vol is 21%; a new six-month swap has fair strike 19%.

**Exhibit 2 (Schouler):** equity beta 1.35; bond MD 6.50; equity futures price 20,000, multiplier $10, beta 1.00; bond futures price 118.50, size $100,000; CTD BPV $98.57; CF 0.9785. Beginning of year: equities $75m, bonds $50m; end of year: equities $115m, bonds $55m.

**Question:**
To rebalance Schouler’s equity allocation to the beginning-of-year percentage, he should:

A. buy 84 equity index futures contracts.
B. sell 84 equity index futures contracts.
C. sell 88 equity index futures contracts.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Buying is the wrong direction.
- **B is wrong.** 84 isn't the equity result; 84 is the bond futures count (DB-36).
- **C is correct.** **Sell 88.** Beginning weights 60/40; end-of-year total $170m, so the target equity is 60% × 170m = $102m vs $115m now: sell $13m. N = ((0 − 1.35)/1.00) × (13,000,000/(20,000 × 10)) = −87.75 ≈ −88.

**Key Principle:**
> Rebalance to target weights: compute the dollar shift, then futures with β_T = 0 (sell) or BPV method (buy).

### Q93 — Bond Futures to Rebalance Schouler [DB-36]

**Context (DB7):**
Murphy reviews Tanya Casey (bonds $10 million, modified duration 7.50, target 5.25, swap duration −3.00; buys a one-year variance swap on the S&P 500) and Aaron Schouler (rebalancing to beginning-of-year weights).

**Exhibit 1 (Casey):** vega notional $10,000,000; strike 16%; annual rate 6.0%. After six months realized vol is 21%; a new six-month swap has fair strike 19%.

**Exhibit 2 (Schouler):** equity beta 1.35; bond MD 6.50; equity futures price 20,000, multiplier $10, beta 1.00; bond futures price 118.50, size $100,000; CTD BPV $98.57; CF 0.9785. Beginning of year: equities $75m, bonds $50m; end of year: equities $115m, bonds $55m.

**Question:**
To rebalance Schouler’s bond allocation to the beginning-of-year percentage, he should:

A. buy 84 bond index futures contracts.
B. sell 84 bond index futures contracts.
C. buy 88 bond index futures contracts.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Buy 84.** Target bonds = 40% × 170m = $68m vs $55m: add $13m. BPV_T = 6.5 × 0.0001 × 13,000,000 = 8,450. N = (8,450/98.57) × 0.9785 = 83.9 ≈ 84.
- **B is wrong.** Selling is the wrong direction.
- **C is wrong.** 88 is the equity futures count (DB-35).

**Key Principle:**
> Buy bond futures to add bond exposure: N = (BPV_T / BPV_CTD) × CF.

# DB8 — Tryon / Washington Heights (Futures Hedges, Equitizing, Tail Hedge, Equity Swap)

*Full vignette: Appendix → DB8*

### Q94 — Treasury Futures to Hedge a Corporate Bond Portfolio [DB-37]

**Context (DB8):**
Tryon (Washington Heights hedge fund) has four trade ideas.

Trade 1 idea: hedge a US$10 million corporate bond portfolio (modified duration 7.5) with Treasury futures: contract size US$100,000, price 144.20, modified duration 8.3, conversion factor 0.7455.
Trade 2 idea: express a positive view on EM equities with US$10 million via BOVESPA futures (price R$104,465, multiplier 1, BRL/USD 4.20; BOVESPA beta 1.15 to EM; target EM beta 1.0).
Trade 3 idea: a tail hedge on equity holdings while the VIX futures curve is in contango. Trade 1: long back-end VIX futures, gross notional = portfolio value. Trade 2: sell a rolling series of OTM puts on VIX futures. Trade 3: long a variance swap with vega notional equal to potential equity loss.
Trade 4 idea: hedge 10,000 Inwood Industries shares (US$100.00) for five quarters without selling, using total return equity swaps.

**Question:**
The number of Treasury futures contracts Tryon needs to hedge the interest rate exposure in the corporate bond portfolio is closest to:

A. 47.
B. 54.
C. 63.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **47.** BPV_P = 7.50 × 0.0001 × 10,000,000 = 7,500. BPV of the futures = 8.30 × 0.0001 × (144.20/100 × 100,000) = 119.69. N = (7,500/119.69) × 0.7455 = 46.7 ≈ 47 (sell).
- **B is wrong.** 54 uses a duration of 8.6: 8,600/119.69 × 0.7455 = 53.57.
- **C is wrong.** 63 omits the conversion factor: 7,500/119.69 = 62.66.

**Key Principle:**
> N = (BPV_P / BPV_futures) × CF; BPV = MD × 0.0001 × market value.

### Q95 — BOVESPA Futures to Equitize EM Exposure [DB-38]

**Context (DB8):**
Tryon (Washington Heights hedge fund) has four trade ideas.

Trade 1 idea: hedge a US$10 million corporate bond portfolio (modified duration 7.5) with Treasury futures: contract size US$100,000, price 144.20, modified duration 8.3, conversion factor 0.7455.
Trade 2 idea: express a positive view on EM equities with US$10 million via BOVESPA futures (price R$104,465, multiplier 1, BRL/USD 4.20; BOVESPA beta 1.15 to EM; target EM beta 1.0).
Trade 3 idea: a tail hedge on equity holdings while the VIX futures curve is in contango. Trade 1: long back-end VIX futures, gross notional = portfolio value. Trade 2: sell a rolling series of OTM puts on VIX futures. Trade 3: long a variance swap with vega notional equal to potential equity loss.
Trade 4 idea: hedge 10,000 Inwood Industries shares (US$100.00) for five quarters without selling, using total return equity swaps.

**Question:**
The number of BOVESPA futures contracts Tryon would have to buy to express the view on emerging markets is closest to:

A. 350.
B. 402.
C. 462.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **350.** US$10m × 4.20 = R$42m. N = (β_T − β_S)/β_f × S/F = (1.0 − 0)/1.15 × 42,000,000/104,465 = 349.6 ≈ 350 (buy).
- **B is wrong.** 402 = 42,000,000/104,465 with no beta adjustment.
- **C is wrong.** 462 = 402 × 1.15 (adjusts the wrong way).

**Key Principle:**
> Divide by the futures beta when the contract is more sensitive than the target; convert currency first.

### Q96 — Choosing a Tail Hedge in Contango [DB-39]

**Context (DB8):**
Tryon (Washington Heights hedge fund) has four trade ideas.

Trade 1 idea: hedge a US$10 million corporate bond portfolio (modified duration 7.5) with Treasury futures: contract size US$100,000, price 144.20, modified duration 8.3, conversion factor 0.7455.
Trade 2 idea: express a positive view on EM equities with US$10 million via BOVESPA futures (price R$104,465, multiplier 1, BRL/USD 4.20; BOVESPA beta 1.15 to EM; target EM beta 1.0).
Trade 3 idea: a tail hedge on equity holdings while the VIX futures curve is in contango. Trade 1: long back-end VIX futures, gross notional = portfolio value. Trade 2: sell a rolling series of OTM puts on VIX futures. Trade 3: long a variance swap with vega notional equal to potential equity loss.
Trade 4 idea: hedge 10,000 Inwood Industries shares (US$100.00) for five quarters without selling, using total return equity swaps.

**Question:**
Which trade is Tryon most likely to implement to establish his equity market hedge?

A. Trade 1
B. Trade 2
C. Trade 3

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Trade 1 (long back-month VIX futures) suffers roll-down losses in contango as futures converge down to spot.
- **B is wrong.** Trade 2 (selling OTM VIX puts) profits from falling or stable volatility, the opposite of a hedge; buying calls would hedge instead.
- **C is correct.** **Trade 3 (long a variance swap).** Convexity: payoffs grow as realized vol rises, which suits hedging a long equity portfolio.

**Key Principle:**
> Tail hedge: long variance (convex) or long VIX calls; long VIX futures bleeds in contango.

### Q97 — Equity Swap to Hedge Inwood Without Selling [DB-40]

**Context (DB8):**
Tryon (Washington Heights hedge fund) has four trade ideas.

Trade 1 idea: hedge a US$10 million corporate bond portfolio (modified duration 7.5) with Treasury futures: contract size US$100,000, price 144.20, modified duration 8.3, conversion factor 0.7455.
Trade 2 idea: express a positive view on EM equities with US$10 million via BOVESPA futures (price R$104,465, multiplier 1, BRL/USD 4.20; BOVESPA beta 1.15 to EM; target EM beta 1.0).
Trade 3 idea: a tail hedge on equity holdings while the VIX futures curve is in contango. Trade 1: long back-end VIX futures, gross notional = portfolio value. Trade 2: sell a rolling series of OTM puts on VIX futures. Trade 3: long a variance swap with vega notional equal to potential equity loss.
Trade 4 idea: hedge 10,000 Inwood Industries shares (US$100.00) for five quarters without selling, using total return equity swaps.

**Question:**
Which type of total return swap is Tryon most likely to use given his view on Inwood stock equity? Buy a one-year:

A. cash-settled total return payer swap.
B. cash-settled total return receiver swap.
C. physically settled total return payer swap.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Cash-settled total return payer swap.** Tryon pays the stock's return and receives any depreciation in cash, keeping the shares.
- **B is wrong.** A receiver swap adds long exposure to Inwood and doesn't hedge.
- **C is wrong.** Physical settlement doesn't fit because he wants to keep the shares.

**Key Principle:**
> Hedge a held stock: pay total return (payer swap), cash settled.

# DB9 — Stuyvesant / Tribeca (Hedged Foreign Bonds, Futures Conversion, Fed Funds Probability)

*Full vignette: Appendix → DB9*

### Q98 — Hedged Japanese Bonds vs Treasuries [DB-41]

**Context (DB9):**
Stuyvesant (Tribeca Company's pension treasurer) is evaluating trades.

**Bond trade:** sell US$10 million of one-year US Treasuries (1.75%) and buy one-year Japanese government bonds (−0.40%), fully hedging currency. Spot YEN/USD 106.85; one-year forward 104.15; cross-currency swap basis −0.63.

**Equity trade:** move £10 million from a UK equity fund (beta to FTSE 1.1) to a US$8 million S&P 500 index fund using futures during a one-month transition.

| Exhibit 1 — Equity futures | |
|---|---|
| S&P 500 E-Mini one-month price | US$3,000 |
| S&P 500 E-Mini multiplier | US$50 |
| FTSE IDX one-month price | £7,300 |
| FTSE IDX multiplier | £10 |
| UK fund beta to FTSE | 1.1 |

**Fed:** current federal funds rate 1.88%; Fed funds futures priced at 98.33.

**Question:**
Does Stuyvesant’s proposal to buy Japanese bonds mostlikely increase the yield on the portfolio?

A. Yes, it increases the yield
B. No, because the yen appreciation does not compensate for the lower Japanese rate
C. No, because the basis would further erode the return on the Japanese government bonds

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Yes, it increases the yield.** US$10,000 × 106.85 = ¥1,068,500; × (1 − 0.0040) = ¥1,064,226 after one year; ÷ 104.15 = US$10,218.20, a 2.18% return vs 1.75% on Treasuries. The negative yen basis makes the forward conversion more favorable.
- **B is wrong.** The forward reflects both interest rate parity and the basis; the negative yen basis helps.
- **C is wrong.** The investor benefits from the negative yen basis: it improves the forward rate into USD.

**Key Principle:**
> Hedged foreign bond return includes the currency basis; negative yen basis boosts a USD investor's hedged return.

### Q99 — Converting UK Equity Risk to US Equity Risk With Futures [DB-42]

**Context (DB9):**
Stuyvesant (Tribeca Company's pension treasurer) is evaluating trades.

**Bond trade:** sell US$10 million of one-year US Treasuries (1.75%) and buy one-year Japanese government bonds (−0.40%), fully hedging currency. Spot YEN/USD 106.85; one-year forward 104.15; cross-currency swap basis −0.63.

**Equity trade:** move £10 million from a UK equity fund (beta to FTSE 1.1) to a US$8 million S&P 500 index fund using futures during a one-month transition.

| Exhibit 1 — Equity futures | |
|---|---|
| S&P 500 E-Mini one-month price | US$3,000 |
| S&P 500 E-Mini multiplier | US$50 |
| FTSE IDX one-month price | £7,300 |
| FTSE IDX multiplier | £10 |
| UK fund beta to FTSE | 1.1 |

**Fed:** current federal funds rate 1.88%; Fed funds futures priced at 98.33.

**Question:**
Based on the data in Exhibit 2, what equity futures trades would Stuyvesant most likely implement to achieve her target equity risk exposures?

A. Sell 150 FTSE IDX futures contracts and buy 53 S&P 500 E-mini futures contracts
B. Sell 110 FTSE IDX futures contracts and buy 74 S&P 500 E-mini futures contracts.
C. Sell 110 FTSE IDX futures contracts and buy 67 S&P 500 E-mini futures contracts.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Sell 150 FTSE and buy 53 S&P 500 E-minis.** FTSE: N = ((0 − 1.1)/1.0) × (10,000,000/(7,300 × 10)) = −150.7. S&P: N = (1.0 − 0)/1.0 × 8,000,000/(3,000 × 50) = 53.3.
- **B is wrong.** The key says it uses betas of 1 for FTSE and 1.1 for the S&P contract (wrong way round). I couldn't reproduce 110 and 74 exactly.
- **C is wrong.** The key says it doesn't adjust the FTSE trade for the 1.1 beta; I couldn't reproduce 110 and 67 exactly.

**Flag:** Exact FTSE count is 150.7, which rounds to 151; the key says 150. The question text says 'Exhibit 2' but the futures data is in Exhibit 1. Choices B and C numbers can't be reproduced from the exhibit.

**Key Principle:**
> Convert exposure: sell futures with β_T = 0 on the old market (adjust for fund beta), buy futures to the new target beta.

### Q100 — Probability of a Rate Cut From Fed Funds Futures [DB-43]

**Context (DB9):**
Stuyvesant (Tribeca Company's pension treasurer) is evaluating trades.

**Bond trade:** sell US$10 million of one-year US Treasuries (1.75%) and buy one-year Japanese government bonds (−0.40%), fully hedging currency. Spot YEN/USD 106.85; one-year forward 104.15; cross-currency swap basis −0.63.

**Equity trade:** move £10 million from a UK equity fund (beta to FTSE 1.1) to a US$8 million S&P 500 index fund using futures during a one-month transition.

| Exhibit 1 — Equity futures | |
|---|---|
| S&P 500 E-Mini one-month price | US$3,000 |
| S&P 500 E-Mini multiplier | US$50 |
| FTSE IDX one-month price | £7,300 |
| FTSE IDX multiplier | £10 |
| UK fund beta to FTSE | 1.1 |

**Fed:** current federal funds rate 1.88%; Fed funds futures priced at 98.33.

**Question:**
Which statement will Stuyvesant most likely make to the committee regarding expectations for the upcoming FOMC meeting? There is a(n):

A. 84% probability of a 25 bp cut in the federal funds rate at the next meeting.
B. 98% probability of a 25 bp hike in the federal funds rate at the next meeting.
C. 100% probability of a 21 bp cut in the federal funds rate at the next meeting.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **84% probability of a 25 bp cut.** Implied rate = 100 − 98.33 = 1.67%. Current 1.88%; after a 25 bp cut 1.63%. Probability = (1.67 − 1.88)/(1.63 − 1.88) = 0.21/0.25 = 84%.
- **B is wrong.** 98% = 1.63/1.67, an invalid calculation.
- **C is wrong.** 21 bp is just 1.88 − 1.67, ignoring probability.

**Flag:** The key's formula for DB-43 did not paste. The 84% is my calculation (it matches the key's answer); here the current rate 1.88% is used directly as the base.

**Key Principle:**
> P(cut) = (implied − current)/(after-cut − current).

# DC1 — Gupta (Currency Return, Hedging Costs, Overlay, Active Approaches)

*Full vignette: Appendix → DC1*

### Q101 — Direction of USD Against GBP (Portfolio A) [DC-1] (Essay)

**Context (DC1):**
Gupta evaluates two US-managed portfolios measured in USD. Portfolio A holds GBP bonds (19.5% domestic-currency return); Portfolio B holds EUR bonds (0% domestic-currency return). Portfolio A's foreign-currency return is 15%.

**Question:**
Analyze the movement of the USD against the foreign currency for Portfolio A (appreciated or depreciated). Justify your choice.

**Model Answer / Explanation:**

**The USD depreciated against the GBP.** The 19.5% domestic-currency return exceeds the 15% foreign-currency return, so the currency must have added return.

R_DC = (1 + R_FC)(1 + R_FX) − 1 → (1.15)(1 + R_FX) − 1 = 19.5% → **R_FX = +3.91%**. With the USD as the price currency (USD/GBP), the positive R_FX means the GBP appreciated, i.e., the USD depreciated.

**Key Principle:**
> R_DC = (1 + R_FC)(1 + R_FX) − 1, with R_FX = change in the foreign currency measured in domestic currency (domestic = price currency).

### Q102 — Foreign-Currency Return of Portfolio B [DC-2] (Essay)

**Context (DC1):**
Gupta evaluates two US-managed portfolios measured in USD. Portfolio A holds GBP bonds (19.5% domestic-currency return); Portfolio B holds EUR bonds (0% domestic-currency return). The EUR appreciated 5% against the USD.

**Question:**
Analyze the foreign-currency return for Portfolio B (positive or negative). Justify your choice.

**Model Answer / Explanation:**

**Negative.** The domestic return is 0% and the EUR appreciated 5%, so the EUR return must have been negative to offset the gain.

(1 + R_FC)(1 + 5%) − 1 = 0% → **R_FC = −4.76%**.

**Key Principle:**
> Flat domestic return with foreign currency up → foreign-currency return is negative.

### Q103 — Trading Costs of a 100% Hedge [DC-3] (Essay)

**Context (DC1):**
Portfolio B's manager is evaluating an internally managed 100% foreign-currency hedged strategy.

**Question:**
Discuss two forms of trading costs associated with this currency management strategy.

**Model Answer / Explanation:**

Any two of:
- **Bid/offer spreads:** dealers earn the spread; keeping a 100% hedge needs frequent rebalancing, and 'churning' the hedge adds costs and erodes the benefit.
- **Option premiums:** a long option requires an upfront payment, an unrecoverable cost if it expires out of the money.
- **Rolling forwards:** forwards mature and must be rolled with FX swaps, generating cash flows (spot moves plus roll yield) that may require raising cash and become costlier as rates rise.
- **Infrastructure/overhead:** personnel and technology needed to trade can be a significant share of costs.

**Key Principle:**
> Hedging costs: trading costs (spreads, premiums, rolling, infrastructure) and opportunity costs.

### Q104 — Opportunity Cost of a Full Hedge [DC-4] (Essay)

**Context (DC1):**
Gupta: *"We need to seriously consider the potential costs associated with favorable currency rate movements, given that a 100% hedge-ratio strategy is being applied."*

**Question:**
Explain Gupta's statement in light of the strategic choices in currency management.

**Model Answer / Explanation:**

Hedging costs are **trading costs** and **opportunity costs**. Gupta is referring to the **opportunity cost** of the 100% hedge: the forgone benefit of favorable currency moves. Accepting some currency risk could enhance return; a complete hedge eliminates that possibility.

**Key Principle:**
> Full hedge removes currency risk and also any gain from favorable currency moves (opportunity cost).

### Q105 — Earning Currency Alpha Without In-House Expertise [DC-5] (Essay)

**Context (DC1):**
Portfolio A's IPS allows directional currency views. The manager can fully hedge internally but lacks expertise to generate currency alpha.

**Question:**
Recommend a solution that gives the manager the opportunity to earn currency alpha through active FX management.

**Model Answer / Explanation:**

Set up a **currency overlay program**: outsource currency exposure management to a **specialist sub-advisor**. That separates the hedging function (**currency beta**, done internally) from active currency management (**currency alpha**, done externally by an FX specialist).

**Key Principle:**
> Currency overlay: internal beta hedging, external alpha via a specialist.

### Q106 — Matching Statements to Active Currency Approaches [DC-6] (Essay)

**Context (DC1):**
Three of Gupta's statements: (1) traders think it isn't necessary to examine current account deficits, inflation and interest rates because current exchange rates already reflect market views; (2) the six-month interest rate in India is 8% vs 1% in the US: a yield pick-up opportunity; (3) the overlay manager estimates fair value expecting spot rates to converge to long-run equilibrium values from parity conditions.

**Question:**
Evaluate each statement and select the active currency approach it best describes (carry trade, technical analysis, economic fundamentals). Justify each.

**Model Answer / Explanation:**

1. **Technical analysis.** Technicians believe historical prices already contain all relevant information on future moves, so looking at macro data isn't needed.
2. **Carry trade.** Borrow the low-yield currency (USD at 1%) and invest in the high-yield currency (INR at 8%).
3. **Economic fundamentals.** Exchange rates are driven by modelable economic relationships; the approach estimates fair value and expects spot rates to converge to equilibrium implied by parity conditions.

**Key Principle:**
> Technical = price history. Carry = borrow low-yield, hold high-yield. Fundamental = fair value from economics/parity.

# DC2 — Guten Investments (Currency Returns, Correlation, Overlay Programs)

*Full vignette: Appendix → DC2*

### Q107 — Which Foreign Assets Gained From Currency Moves (EUR Investor) [DC-7]

**Context (DC2):**
Guten Investments (Germany, EUR reporting currency) invests in Swiss, UK and US markets.

**Exhibit 1 — Exchange rates**

| | One year ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR) | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

The USD/EUR rate is the amount of USD needed to buy one EUR. Ostermann expects the correlation between USD-asset foreign-currency returns and FX movements to rise from +0.50 to +0.80 (foreign-currency return forecast unchanged). She believes currency markets are efficient and that long-run gains from active currency management aren't achievable after costs. Umlauf Management provides overlay programs: it uses fundamentals for most hedging, and, when directed by clients, options and trading strategies to unbundle and trade the Greeks.

**Exhibit 2 — Clients**

| Client | Currency objective |
|---|---|
| Adele Kastner: HNW, low risk tolerance | Keep currency exposures close or equal to the benchmark so domestic return = foreign-currency return |
| Braunt Pensionskasse: pension fund, moderate risk | Limited discretion: actual currency exposures may vary ±5% from neutral |
| Franz Trading GmbH: exporter, high risk | Discretion to add alpha |

**Question:**
Based on Exhibit 1, the domestic-currency return over the last year (measured in EUR terms) was higher than the foreign-currency return for:

A. USD-denominated assets.
B. GBP-denominated assets.
C. CHF-denominated assets.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** USD/EUR rose (1.1330 → 1.1550): the EUR appreciated, the USD depreciated, so R_DC < R_FC.
- **B is wrong.** GBP/EUR rose (0.8445 → 0.8550): the EUR appreciated, the GBP depreciated, so R_DC < R_FC.
- **C is correct.** **CHF-denominated assets.** For a EUR investor, a foreign currency appreciates when the quoted X/EUR rate *falls*. Only CHF/EUR fell (1.0875 → 1.0780), so the CHF appreciated and R_DC > R_FC.

**Key Principle:**
> Market quotes X/EUR have the EUR as base. If X/EUR falls, the foreign currency X appreciated vs EUR → boosts the EUR return.

### Q108 — Effect of Higher Correlation on Expected Return [DC-8]

**Context (DC2):**
Guten Investments (Germany, EUR reporting currency) invests in Swiss, UK and US markets.

**Exhibit 1 — Exchange rates**

| | One year ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR) | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

The USD/EUR rate is the amount of USD needed to buy one EUR. Ostermann expects the correlation between USD-asset foreign-currency returns and FX movements to rise from +0.50 to +0.80 (foreign-currency return forecast unchanged). She believes currency markets are efficient and that long-run gains from active currency management aren't achievable after costs. Umlauf Management provides overlay programs: it uses fundamentals for most hedging, and, when directed by clients, options and trading strategies to unbundle and trade the Greeks.

**Exhibit 2 — Clients**

| Client | Currency objective |
|---|---|
| Adele Kastner: HNW, low risk tolerance | Keep currency exposures close or equal to the benchmark so domestic return = foreign-currency return |
| Braunt Pensionskasse: pension fund, moderate risk | Limited discretion: actual currency exposures may vary ±5% from neutral |
| Franz Trading GmbH: exporter, high risk | Discretion to add alpha |

**Question:**
Based on Ostermann’s correlation forecast, the expected domestic-currency return (measured in EUR terms) on USD-denominated assets will most likely:

A. increase.
B. decrease.
C. remain unchanged.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Higher correlation raises risk, not expected return.
- **B is wrong.** Higher correlation doesn't lower expected return.
- **C is correct.** **Remain unchanged.** Correlation affects the *risk* of domestic-currency return (σ²(R_DC) ≈ σ²(R_FC) + σ²(R_FX) + 2σ(R_FC)σ(R_FX)ρ), not its expected level, given an unchanged foreign-currency return forecast.

**Key Principle:**
> Higher correlation between asset return and FX raises domestic-currency return variance; expected return unchanged.

### Q109 — Hedge Ratio Under Efficient-Currency Views [DC-9]

**Context (DC2):**
Guten Investments (Germany, EUR reporting currency) invests in Swiss, UK and US markets.

**Exhibit 1 — Exchange rates**

| | One year ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR) | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

The USD/EUR rate is the amount of USD needed to buy one EUR. Ostermann expects the correlation between USD-asset foreign-currency returns and FX movements to rise from +0.50 to +0.80 (foreign-currency return forecast unchanged). She believes currency markets are efficient and that long-run gains from active currency management aren't achievable after costs. Umlauf Management provides overlay programs: it uses fundamentals for most hedging, and, when directed by clients, options and trading strategies to unbundle and trade the Greeks.

**Exhibit 2 — Clients**

| Client | Currency objective |
|---|---|
| Adele Kastner: HNW, low risk tolerance | Keep currency exposures close or equal to the benchmark so domestic return = foreign-currency return |
| Braunt Pensionskasse: pension fund, moderate risk | Limited discretion: actual currency exposures may vary ±5% from neutral |
| Franz Trading GmbH: exporter, high risk | Discretion to add alpha |

**Question:**
Based on Ostermann’s views regarding active currency management, the percentage of currency exposure in her discretionary accounts that is hedged is most likely:

A. 0%.
B. 50%.
C. 100%.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **0%.** If currency markets are efficient, hedging and active trading are costs with little expected benefit; with a long horizon and few liquidity needs, she is most likely to forgo hedging.
- **B is wrong.** A 50% hedge is not supported: if currency markets are efficient, a partial hedge pays hedging costs for no expected gain.
- **C is wrong.** A 100% hedge adds costs without expected compensation under her view.

**Key Principle:**
> Efficient currency markets + long horizon → no hedge (avoid hedging costs).

### Q110 — Approach Umlauf Is Least Likely to Use [DC-10]

**Context (DC2):**
Guten Investments (Germany, EUR reporting currency) invests in Swiss, UK and US markets.

**Exhibit 1 — Exchange rates**

| | One year ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR) | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

The USD/EUR rate is the amount of USD needed to buy one EUR. Ostermann expects the correlation between USD-asset foreign-currency returns and FX movements to rise from +0.50 to +0.80 (foreign-currency return forecast unchanged). She believes currency markets are efficient and that long-run gains from active currency management aren't achievable after costs. Umlauf Management provides overlay programs: it uses fundamentals for most hedging, and, when directed by clients, options and trading strategies to unbundle and trade the Greeks.

**Exhibit 2 — Clients**

| Client | Currency objective |
|---|---|
| Adele Kastner: HNW, low risk tolerance | Keep currency exposures close or equal to the benchmark so domestic return = foreign-currency return |
| Braunt Pensionskasse: pension fund, moderate risk | Limited discretion: actual currency exposures may vary ±5% from neutral |
| Franz Trading GmbH: exporter, high risk | Discretion to add alpha |

**Question:**
The active currency management approach that Umlauf Management is least likely to employ is based on:

A. volatility trading.
B. technical analysis.
C. economic fundamentals.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Umlauf unbundles the Greeks with options: volatility trading.
- **B is correct.** **Technical analysis.** Umlauf uses economic fundamentals and, on client direction, volatility trading, not technical analysis.
- **C is wrong.** Umlauf bases its market view on fundamentals.

**Key Principle:**
> Active currency approaches: economic fundamentals, technical, carry, volatility trading.

### Q111 — Overlay for Limited Discretion [DC-11]

**Context (DC2):**
Guten Investments (Germany, EUR reporting currency) invests in Swiss, UK and US markets.

**Exhibit 1 — Exchange rates**

| | One year ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR) | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

The USD/EUR rate is the amount of USD needed to buy one EUR. Ostermann expects the correlation between USD-asset foreign-currency returns and FX movements to rise from +0.50 to +0.80 (foreign-currency return forecast unchanged). She believes currency markets are efficient and that long-run gains from active currency management aren't achievable after costs. Umlauf Management provides overlay programs: it uses fundamentals for most hedging, and, when directed by clients, options and trading strategies to unbundle and trade the Greeks.

**Exhibit 2 — Clients**

| Client | Currency objective |
|---|---|
| Adele Kastner: HNW, low risk tolerance | Keep currency exposures close or equal to the benchmark so domestic return = foreign-currency return |
| Braunt Pensionskasse: pension fund, moderate risk | Limited discretion: actual currency exposures may vary ±5% from neutral |
| Franz Trading GmbH: exporter, high risk | Discretion to add alpha |

**Question:**
Based on Exhibit 2, the currency overlay program most appropriate for Braunt Pensionskasse would:

A. be fully passive.
B. allow limited directional views.
C. actively manage foreign exchange as an asset class.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A fully passive overlay would remove any alpha from currency moves; it fits full hedging.
- **B is correct.** **Allow limited directional views** within pre-set bounds, using only currencies already in the portfolio.
- **C is wrong.** 'FX as an asset class' takes positions in any currency pair, more currency risk than Braunt wants.

**Key Principle:**
> Overlay spectrum: passive hedge → limited directional views → FX as an asset class.

### Q112 — Client Who Benefits From an Extra Overlay Manager [DC-12]

**Context (DC2):**
Guten Investments (Germany, EUR reporting currency) invests in Swiss, UK and US markets.

**Exhibit 1 — Exchange rates**

| | One year ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR) | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

The USD/EUR rate is the amount of USD needed to buy one EUR. Ostermann expects the correlation between USD-asset foreign-currency returns and FX movements to rise from +0.50 to +0.80 (foreign-currency return forecast unchanged). She believes currency markets are efficient and that long-run gains from active currency management aren't achievable after costs. Umlauf Management provides overlay programs: it uses fundamentals for most hedging, and, when directed by clients, options and trading strategies to unbundle and trade the Greeks.

**Exhibit 2 — Clients**

| Client | Currency objective |
|---|---|
| Adele Kastner: HNW, low risk tolerance | Keep currency exposures close or equal to the benchmark so domestic return = foreign-currency return |
| Braunt Pensionskasse: pension fund, moderate risk | Limited discretion: actual currency exposures may vary ±5% from neutral |
| Franz Trading GmbH: exporter, high risk | Discretion to add alpha |

**Question:**
Based on Exhibit 2, the client most likely to benefit from the introduction of an additional overlay manager is:

A. Adele Kastner.
B. Braunt Pensionskasse.
C. Franz Trading GmbH.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Kastner is more likely to use a fully passive overlay.
- **B is wrong.** Braunt is more likely to use limited directional views.
- **C is correct.** **Franz Trading GmbH.** Its objective is to add alpha with discretion ('FX as an asset class'), so another overlay manager's strategies add value.

**Key Principle:**
> Alpha-seeking, high-risk-tolerance client benefits from multiple active overlay managers.

# DC3 — Darden / Colgate & McIntire (Currency Contribution, Strategy Selection)

*Full vignette: Appendix → DC3*

### Q113 — Contribution of Currency to a Multi-Asset Portfolio's Return [DC-13] (Essay)

**Context (DC3):**
Bhatt's US-managed (USD) account returned 7.0% last year. Weights/asset returns/currency returns: US 50% / 10.0% / NA; Eurozone 25% / 5.0% / 2.0%; Japan 25% / −3.0% / 4.0%.

**Question:**
Calculate the contribution of foreign currency to the account's total return. Show your calculations.

**Model Answer / Explanation:**

**Currency contributed ≈ 1.5%.**

R_DC = Σ w_i R_FC,i + Σ w_i R_FX,i + Σ w_i (R_FC,i × R_FX,i)

- Weighted asset return: 0.50(10.0%) + 0.25(5.0%) + 0.25(−3.0%) = **5.5%**
- Weighted currency return: 0.50(0%) + 0.25(2.0%) + 0.25(4.0%) = **1.5%**
- Weighted cross-product: 0.25(5.0% × 2.0%) + 0.25(−3.0% × 4.0%) = **−0.005%**

Contribution of currency = 7.0% − 5.5% = 1.5%, or 1.5% + (−0.005%) = 1.495% ≈ **1.5%**.

**Key Principle:**
> Currency contribution = total domestic return − weighted asset return = weighted currency return + weighted cross-product.

### Q114 — Strategy for a Client With ±25% Discretion [DC-14] (Essay)

**Context (DC3):**
Bhatt's IPS allows capturing USD/INR opportunities within ±25% of neutral (100% of the portfolio valued in USD). C&M has a currency overlay team.

**Question:**
Determine the most appropriate currency management strategy (passive hedging, discretionary hedging, active currency management). Justify.

**Model Answer / Explanation:**

**Active currency management.**
- The manager is expected to take currency risk for profit, with the primary goal of adding alpha. Discretionary hedging's primary duty is protecting the portfolio, with alpha secondary and within limited bounds.
- ±25% from neutral is wide discretion, which points to active management over protection.
- Passive hedging is rules-based and removes all discretion (exposures close to the benchmark), which doesn't fit.
- Discretionary hedging fits limited discretion; ±25% is more than limited.

**Key Principle:**
> Spectrum by discretion: passive (none) → discretionary hedging (limited bounds, protection primary) → active (alpha primary) → overlay → FX as an asset class.

### Q115 — Forward Strategy for a Bullish USD View Within IPS Bounds [DC-15] (Essay)

**Context (DC3):**
C&M expects the USD to appreciate vs the INR (interest and inflation differentials stable). Portfolio: USD 10,000,000. Neutral = 100% hedge; IPS allows ±25% around neutral.

**Question:**
Recommend the trading strategy C&M should implement. Justify.

**Model Answer / Explanation:**

**Under-hedge**: sell USD forward against INR at a hedge ratio of **no less than 75%** of the USD 10,000,000 (i.e., between 75% and 100%).

- A hedge ratio below neutral (100%) leaves some unhedged USD exposure, which is expected to appreciate vs the INR, capturing that return.
- A 100% hedge would eliminate the alpha opportunity.
- 75% is the floor set by the IPS (100% − 25%).

**Key Principle:**
> Expect the exposure (foreign) currency to **appreciate** → under-hedge (less than neutral), within IPS bounds; expect it to depreciate → over-hedge, within IPS bounds.

# DC4 — Wilson / Lee (Discretionary Hedging, Overlay and Strategic Positioning)

*Full vignette: Appendix → DC4*

### Q116 — Approach for a Portfolio With a ±3% Hedge Band [DC-16] (Essay)

**Context (DC4):**
Wilson (Australian) prefers a neutral benchmark over a rules-based approach. IPS: hedge ratio between 97% and 103%. Portfolio currently in its flat natural neutral position because Lee lacks market conviction. Lee is a generalist managing many portfolios.

**Question:**
Identify the most likely approach (passive hedging, discretionary hedging, active currency management, currency overlay) and give two reasons.

**Model Answer / Explanation:**

**Discretionary hedging.**
1. The portfolio is at its neutral position because Lee has no market conviction: consistent with discretionary hedging.
2. The 97–103% band gives some discretion, with exposures allowed to vary ±3% around neutral.

Why not the others:
- **Passive:** the ±3% band is discretion, and passive is rules-based (Wilson prefers otherwise).
- **Active:** a 3% band is too limited; the discretionary hedger's primary duty is protection, whereas active management takes currency risk for profit.
- **Overlay:** the band is too small for active overlay; overlays are typically run by FX-specialist sub-advisers (Lee is a generalist); overlays allow directional views and Lee has none.

**Key Principle:**
> Narrow band around neutral, protection first → discretionary hedging.

### Q117 — Attribute That Supports Overlay as Strategic Positioning [DC-17] (Essay)

**Context (DC4):**
Wilson's IPS is revised: FX becomes a separate asset class and Lee hires an external FX sub-adviser for a currency overlay program.

**Question:**
Discuss a key attribute of the overlay that would increase the likelihood it is allowed in terms of strategic portfolio positioning.

**Model Answer / Explanation:**

**Low correlation (ideally uncorrelated) with the other asset classes and alpha programs in the portfolio.** With FX treated as its own asset class, the more the overlay's alpha is uncorrelated with the rest of the portfolio, the more it adds diversification and the more likely it fits strategic positioning.

**Key Principle:**
> Overlay alpha should be uncorrelated with other portfolio return sources.

# Standalone — Currency Strategy for a Sovereign Wealth Fund

### Q118 — Strategy for a Long-Horizon Sovereign Wealth Fund [DC-18]

**Question:**
Kalila Al-Khalili has been hired as a consultant to a Middle Eastern sovereign wealth fund. The fund’s oversight committee has asked her to examine the fund’s financial characteristics and recommend an appropriate currency management strategy given the fund’s Investment Policy Statement. After a thorough study of the fund and its finances, Al-Khalili reaches the following conclusions:

The fund’s mandate is focused on the long-term development of the country, and the royal family (who are very influential on the fund’s oversight committee) are prepared to take a long-term perspective on the fund’s investments.

The fund’s strategic asset allocation is tilted towards equity rather than fixed-income assets.

Both its fixed-income and equity portfolios have a sizeable exposure to emerging market assets.

Currently, about 90% of exchange rate exposures are hedged although the IPS allows a range of hedge ratios.

Liquidity needs of the fund are minimal, since the government is running a balanced budget and is unlikely to need to dip into the fund in the near term to cover fiscal deficits. Indeed, the expected lifetime of country’s large oil reserves has been greatly extended by recent discoveries, and substantial oil royalties are expected to persist into the future.

Based on her investigation, Al-Khalili would most likely recommend:

A. active currency management.
B. a hedging ratio closer to 100%.
C. a narrow discretionary band for currency exposures.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Active currency management.** Long horizon, minimal liquidity needs, equity-tilted SAA (equity portfolios are typically hedged less than bond portfolios), and large EM exposure (higher yields → carry; volatile exchange rates) all support active management.
- **B is wrong.** The fund's characteristics don't argue for a conservative strategy; a hedge ratio closer to 100% is not supported.
- **C is wrong.** A narrow discretionary band is a more conservative design; the fund's profile suits more active management.

**Key Principle:**
> Long horizon + low liquidity needs + equity tilt + EM exposure → more active currency management.

# DC5 — Jiang (Futures Margin, NDF, Carry Trade, EM Currencies)

*Full vignette: Appendix → DC5*

### Q119 — Key Consideration When Hedging With Futures [DC-19]

**Context (DC5):**
Subscriber 1: French national holding USD 700,000, will repatriate to France and wants to hedge the EUR value with currency futures.

**Question:**
For Subscriber 1, the most significant factor to consider would be:

A. margin requirements.
B. transaction costs of using futures contracts.
C. different quoting conventions for future contracts.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Margin requirements.** Futures require initial margin plus daily mark-to-market, so margin calls can force liquidation if liquidity is short. Most forwards have neither (though CSAs are changing this for large institutions).
- **B is wrong.** Futures have low transaction costs.
- **C is wrong.** Whether the EUR is the price or base currency in the quote doesn't affect the hedging process (CME quotes USD/EUR, with EUR as base).

**Key Principle:**
> Futures hedges: initial margin + daily variation margin → liquidity risk.

### Q120 — Speculating on a KRW Depreciation With Capital Controls [DC-20]

**Context (DC5):**
Subscriber 2 expects the KRW/USD rate to rise (KRW depreciation) and volatility to increase. KRW is subject to capital controls.

**Question:**
For Subscriber 2, and assuming all of the choices relate to the KRW/USD exchange rate, the best way to implement the trading strategy would be to:

A. write a straddle.
B. buy a put option.
C. use a long NDF position.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** A straddle is for a view on volatility, not direction. The subscriber expects the rate to rise, and writing it (short straddle) would suit low expected volatility, contradicting the expected volatility increase.
- **B is wrong.** A put on KRW/USD profits from a fall in the rate, the opposite of the view; higher volatility also makes it more expensive.
- **C is correct.** **Long NDF position.** Expecting KRW/USD to increase means a long forward on the base currency (USD); with capital controls, an NDF is used. (The retail version is a contract for differences.)

**Key Principle:**
> Currency with capital controls → NDF. Long base currency (USD) forward profits if price-currency (KRW) depreciates.

### Q121 — Development That Favors a Carry Trade [DC-21]

**Context (DC5):**
Subscriber 3 plans to borrow USD, convert to INR and invest in INR bonds unhedged, expecting persistently higher Indian rates.

**Question:**
Which of the following market developments would be most favorable for Subscriber 3’s trading plan?

A. A narrower interest rate differential.
B. A higher forward premium for INR/USD.
C. Higher volatility in INR/USD spot rate movements.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A narrower differential reduces the carry and the compensation for unhedged currency risk.
- **B is correct.** **A higher forward premium for INR/USD.** The carry trade profits from the forward rate bias: buy currencies at a forward discount and sell those at a forward premium. A higher forward premium on the USD (the low-yield currency, and the base in INR/USD) reflects a wider interest rate differential in India's favor.
- **C is wrong.** Higher spot volatility is bad for carry trades (riskier; rapid moves are associated with panicked unwinds).

**Key Principle:**
> Carry trade wants a wide interest differential and low volatility.

### Q122 — Emerging Market Currency Trading Opportunities [DC-22]

**Context (DC5):**
Subscriber 4 asks whether EM currency trading offers more opportunities for superior returns via active management than DM currency trading.

**Question:**
Jiang’s best response to Subscriber 4 would be that active trading in trading in emerging market currencies:

A. typically leads to return distributions that are positively skewed.
B. should not lead to higher returns because FX markets are efficient.
C. often leads to higher returns through carry trades, but comes with higher risks and trading costs.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Carry trade return distributions are typically negatively skewed (event risk, pegs re-set, panicked unwinds).
- **B is wrong.** Even if FX markets are efficient, higher returns can reflect risk premia for unhedged currency risk and a favorable interest differential; the question is risk-adjusted return.
- **C is correct.** **Often higher returns through carry trades, but with higher risks and trading costs.** EM currencies are often the investment currencies in carry trades (higher yields); stressed markets bring panicked unwinds, illiquidity, wider bid/offer spreads, and leverage magnifies losses.

**Key Principle:**
> Carry returns: positive carry, negative skew, crash risk.

# Standalone — Speculators vs Hedgers in Volatility

### Q123 — Speculative vs Hedger Views on Volatility [DC-23] (Essay)

**Context:**
Overlay manager statements: (1) several traders benefit because most options expire out of the money, so they are net short volatility; (2) traders wanting to minimize the impact of unanticipated price volatility are net long volatility.

**Question:**
Identify which statement best explains the view of a speculative volatility trader and which a hedger. Justify.

**Model Answer / Explanation:**

- **Statement 1 = speculative volatility trader.** If markets are expected to stay stable, the speculator is net short volatility: most options expire out of the money, so the writer keeps the premium as compensation for accepting volatility risk. (If a rise in volatility were expected, the speculator would go long.)
- **Statement 2 = hedger.** Hedgers buy protection from unanticipated price volatility; that is a long option position, like paying an insurance premium.

**Key Principle:**
> Speculators can be short or long volatility; hedgers are net long volatility.

# DC6 — Murimi / Konev (Volatility Strategy, Technical Analysis)

*Full vignette: Appendix → DC6*

### Q124 — Volatility Strategy for an 'FX as an Asset Class' Client [DC-24] (Essay)

**Context (DC6):**
Murimi (overlay manager, technician) serves institutions seeking to address currency risk; Konev is a hedge fund manager focused on option trading, wanting an 'FX as an asset class' approach for speculative gains and believing the long-term USD strength is peaking.

**Question:**
Describe how a volatility-based strategy for Konev would contrast with Murimi's other institutional investors.

**Model Answer / Explanation:**

- **Konev:** a speculator seeking gains (here on USD weakness). 'FX as an asset class' lets Murimi take exposure in any currency pair with value to capture. His volatility strategy would typically be **net short volatility**, earning the premium for absorbing volatility risk (options mostly expire out of the money).
- **Other institutional clients:** hedgers minimizing risk, typically **net long volatility** to buy protection from unanticipated volatility, so they are exposed to the time decay of the option's time value.

Volatility is cyclical: long calm periods punctuated by spikes. Ideally a short-volatility trader would flip to long ahead of spikes, but these are hard to time.

**Key Principle:**
> Speculators: typically net short vol (collect premium). Hedgers: net long vol (pay time decay).

### Q125 — Technical Analysis in Designing a Volatility Strategy [DC-25] (Essay)

**Context (DC6):**
Murimi is a market technician; Konev believes the long-term strength of the USD is peaking.

**Question:**
Discuss how Murimi can use her technical skills to devise the strategy.

**Model Answer / Explanation:**

Technicians hold that (1) historical prices help project future moves, (2) historical price patterns tend to repeat and reveal profitable trades, and (3) analysis seeks where prices *will* trade, not where they should.

Murimi can use this to **time entry and exit points**. She can identify patterns in USD price history (overbought/oversold, trends stretched in one direction and vulnerable to reversal) to position USD trades and capture volatility shifts associated with the turning point (USD peaking).

**Key Principle:**
> Technical analysis: timing of turning points, entries and exits from price patterns.

# DC7 — Portfolio B Fund Manager (Static vs Dynamic Hedge)

*Full vignette: Appendix → DC7*

### Q126 — Why a Static Matched Hedge Eventually Leaves Currency Risk [DC-26] (Essay)

**Context (DC7):**
Portfolio B manager: a full hedge is a simple match of current market value of foreign-currency exposure with an equal, offsetting forward.

**Question:**
Explain how this hedge will eventually expose the portfolio to currency risk.

**Model Answer / Explanation:**

Foreign-asset market values change with market conditions, but the forward's notional is fixed. A **static hedge** accumulates unwanted currency exposure as asset values drift: the forward notional no longer matches the portfolio's foreign-currency value, creating a mismatch (currency risk). The manager generally has to rebalance, i.e., use a **dynamic hedge**.

**Key Principle:**
> Static hedge → growing mismatch as asset values change. Dynamic hedge needed.

### Q127 — Dynamic Hedging and Its Main Disadvantage [DC-27] (Essay)

**Context (DC7):**
Same Portfolio B situation.

**Question:**
Recommend an alternative that keeps the hedge ratio near target. Identify its main disadvantage.

**Model Answer / Explanation:**

**Dynamic hedging**: rebalance periodically, adjusting the size, number and maturities of the foreign-currency contracts.

**Disadvantage:** higher **transaction costs** than a static hedge.

**Key Principle:**
> Dynamic hedge keeps hedge ratio near target but costs more to maintain.

# DC8 — Björk (Rebalancing Hedges, Option Collar, Roll Yield, Cross-Hedge)

*Full vignette: Appendix → DC8*

### Q128 — Rebalancing a Forward Hedge After Asset Decline [DC-28]

**Context (DC8):**
Björk (SEK reporting) hedges GBP assets with a short GBP 100,000,000 forward (SEK/GBP spot 10.6875), maturing Dec 1. Assets have declined by GBP 7,000,000.

**Question:**
To rebalance the SEK/GBP hedge, and assuming all instruments are based on SEK/GBP, Björk would buy:

A. GBP 7,000,000 spot.
B. GBP 7,000,000 forward to December 1.
C. SEK 74,812,500 forward to December 1.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** A spot purchase would not reduce the forward position's net size; the offset has to be in the forward.
- **B is correct.** **Buy GBP 7,000,000 forward to December 1.** The exposure fell by GBP 7m, so the short forward must shrink; buying GBP forward nets the short to GBP 93m.
- **C is wrong.** That sells GBP (buys SEK). Also, SEK 74,812,500 uses the spot rate (7,000,000 × 10.6875); the forward amount depends on the forward rate.

**Key Principle:**
> Asset value falls → reduce the hedge: take an offsetting forward at the same maturity.

### Q129 — Option Hedge to Reduce Cost With a Limited-Upside View [DC-29]

**Context (DC8):**
Björk holds CHF assets, wants some profit potential, lower hedging cost, and sees limited upside for SEK/CHF.

**Question:**
Given her investment goals and market view, and assuming all options are based on SEK/CHF, the best strategy for Björk to manage the fund’s CHF exposure would be to buy an:

A. ATM call option.
B. ITM call option and write an OTM call option.
C. OTM put option and write an OTM call option.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** An ATM call doesn't protect against a fall in SEK/CHF, and ATM is expensive.
- **B is wrong.** The long ITM call is expensive and gives no protection against a fall in SEK/CHF.
- **C is correct.** **Buy an OTM put and write an OTM call.** The fund fears CHF depreciation, a fall in SEK/CHF; the put protects, and the written OTM call finances it (the view is that the call expires worthless). This is a collar / short risk reversal.

**Key Principle:**
> Foreign-asset holder protects with a put on the foreign currency; sell an OTM call to cut cost (collar).

### Q130 — Effect of a Forward Premium on a Rolling Hedge [DC-30]

**Context (DC8):**
Riksbank tightening moved SEK/EUR forward points to a premium; EUR exposures are hedged with forwards.

**Question:**
Given the recent movement in the forward premium for the SEK/EUR rate, Björk can expect that the hedge will experience higher:

A. basis risk.
B. roll yield.
C. premia income.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The hedge is in the same currency; basis (spot-forward gap) converges to zero near maturity when rolled.
- **B is correct.** **Higher roll yield.** She sells EUR forward at a higher all-in forward rate and, with a contango forward curve, closes out at a lower rate (all else equal).
- **C is wrong.** Forwards don't earn premia; writing options does.

**Key Principle:**
> Forward premium on the currency being sold forward → positive roll yield for the hedger.

### Q131 — Key Risk of a Cross-Hedge [DC-31]

**Context (DC8):**
Björk considers hedging Latin American exposures with forwards on the MXN, which is correlated with those currencies vs SEK but more liquid.

**Question:**
The most important risk to Björk’s Latin American currency hedge would be changes in:

A. forward points.
B. exchange rate volatility.
C. cross-currency correlations.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** Forward points are not the key risk to a cross-hedge.
- **B is wrong.** Volatility is not the main driver of cross-hedge effectiveness; correlation is.
- **C is correct.** **Cross-currency correlations.** A cross hedge has basis risk: if the correlation between the hedged currency and the hedging instrument changes, the hedge fails.

**Key Principle:**
> Cross-hedge = basis risk from changing correlations.

# DC9 — Delgado / Rivera (Hedge Instruments, Rolling Cash Flow, Roll Yield)

*Full vignette: Appendix → DC9*

### Q132 — Hedge Instrument Choice: Static/Dynamic, Forward/Futures [DC-32] (Essay)

**Context (DC9):**
Rivera's USD 2.5m portfolio (EUR reporting currency). IPS requires rebalancing at least monthly; Rivera and Delgado are risk averse; choice is between one-month forwards and futures.

**Question:**
Determine the most appropriate combination (static forward, static futures, dynamic forward, dynamic futures). Justify.

**Model Answer / Explanation:**

**Dynamic forward hedge.**

*Dynamic vs static:*
1. Both Rivera and Delgado are risk averse.
2. The IPS requires monthly rebalancing.
A static hedge avoids transaction costs but accumulates a mismatch between asset value and forward notional (pure currency risk). More risk aversion → more frequent rebalancing back to the neutral hedge ratio; the frequency is a cost–benefit trade-off (risk aversion, market view, IPS).

*Forward vs futures:*
1. Forwards are more flexible (currency pair, settlement date, amount).
2. Forwards are simpler administratively (no margin requirements), lowering costs.
3. OTC forwards are more liquid for large sizes (daily volume dwarfs futures).

**Key Principle:**
> Risk-averse + frequent rebalancing → dynamic; large, customized, no margin → forwards.

### Q133 — Net Cash Flow When Rolling a Forward Hedge (Bid/Offer) [DC-33] (Essay)

**Context (DC9):**
Rivera's hedge was perfectly hedged a month ago (sold USD 2,500,000 one month forward vs EUR). Time to roll.

| | One month ago | Today |
|---|---|---|
| Portfolio value (USD) | 2,500,000 | 2,650,000 |
| USD/EUR spot (bid–offer) | 1.1713/1.1714 | 1.1575/1.1576 |
| One-month forward points (bid–offer) | 9/10 | 6/7 |

**Question:**
Calculate the net cash flow (in euros) today to maintain the desired hedge.

**Model Answer / Explanation:**

**Net outflow of EUR 27,449.18.**

1. *Original forward (sold USD, i.e., bought EUR base currency)* uses the offer, with the points from a month ago: 1.1714 + 10/10,000 = **1.1724**. USD 2,500,000 / 1.1724 = **EUR 2,132,378.03** inflow.
2. *Offset: buy USD at today's spot*, i.e., sell EUR at the bid: USD 2,500,000 / 1.1575 = **EUR 2,159,827.21** outflow.
3. Net = 2,132,378.03 − 2,159,827.21 = **−EUR 27,449.18**.

Then enter a new forward to sell USD 2,650,000, with no cash flow today.

**Key Principle:**
> Closing out a forward: transact in the opposite direction at today's spot, using bid/offer on the base currency (EUR) correctly.

### Q134 — Strategies That Earn Positive Roll Yield [DC-34] (Essay)

**Context (DC9):**
USD trades at a forward premium and US rates are lower than Spanish rates. Delgado 'recommends trading against the forward rate bias' to earn a positive roll yield.

**Question:**
Identify two strategies Delgado should use to earn a positive roll yield and the steps for each.

**Model Answer / Explanation:**

1. **Carry trade:** buy (invest in) the high-yield currency and sell (borrow) the low-yield currency.
2. **Trade the forward rate bias:** buy (invest in) the currency at a forward discount and sell (borrow) the currency at a forward premium.

The USD (base) is at a forward premium, so the hedge requires selling USD forward, producing a positive roll yield. The carry trade is equivalent to trading *the* forward rate bias (not against it).

**Flag:** The stem says Delgado trades 'against' the forward rate bias, yet the key's two strategies (carry trade, trade the forward rate bias) are the same trade and are the opposite of trading against the bias; the key itself notes trading against the bias would mean buying USD at a premium. Wording in the stem/key is inconsistent; I give the key's answer as is.

**Key Principle:**
> Carry trade ≡ trading the forward rate bias: sell the forward-premium (low-yield) currency, buy the forward-discount (high-yield) one.

# Standalone — Emerging Market Return Distributions

### Q135 — Return Distributions: Emerging vs Developed Currencies [DC-35] (Essay)

**Context:**
CCM runs a 3-year 'model' EM currency portfolio using its developed-market approach; its standard deviation, Sharpe ratio and VaR look good, but markets have been stable throughout.

**Question:**
Evaluate the application of EM and DM return probability distributions to CCM's new product.

**Model Answer / Explanation:**

- EM currency trades face frequent extreme events, so EM return distributions have **fatter tails** than the normal distributions customarily used for DM, and a pronounced **negative skew**.
- Tools that assume normality (VaR, Sharpe ratio) can be misleading in extreme conditions and understate risk; apparent outperformance during stable periods can vanish into deep losses faster than investors can react.
- Short-term stability gives false confidence and encourages over-positioning on the illusion of normal returns.
- CCM should **not assume normality** for the model EM portfolio; it should assume fat-tailed, negatively skewed returns.

**Key Principle:**
> EM currencies: fat tails + negative skew → VaR/Sharpe on a stable-period track record overstate quality.

# DC10 — Nadela (Carry Trade, Bull Spread, Technical vs Fundamental)

*Full vignette: Appendix → DC10*

### Q136 — Constructing a CNY/USD Carry Trade [DC-36] (Essay)

**Context (DC10):**
US yield 2.211%; China annual yield 5.667%.

**Question:**
Construct a CNY/USD carry trade and explain two risks.

**Model Answer / Explanation:**

**Construction:** borrow in USD (low yield, 2.211%) and invest in CNY (high yield, 5.667%). Carry = 5.667% − 2.211% = **3.456%** (before any currency move).

**Risks (any two):**
- High-yielding currencies are typically from higher-risk countries.
- In global crises, funds flee high-risk currencies for low-risk ones, causing carry trade unwinds.
- Leverage can produce large losses quickly.

**Key Principle:**
> Carry trade: borrow low-yield, invest high-yield; risks are crash/unwind and leverage.

### Q137 — Bull Call Spread on BRL/USD: Max Gain and Breakeven [DC-37] (Essay)

**Context (DC10):**
Call prices by strike: $5.00 → $1.95; $5.50 → $1.70; $6.00 → $1.50; $6.50 → $1.10; $7.00 → $0.75. Build a $5.00/$6.00 spread.

**Question:**
Calculate the maximum gain and breakeven price per contract.

**Model Answer / Explanation:**

Buy the $5.00 call (−$1.95), write the $6.00 call (+$1.50): net premium paid = **$0.45**.

- **Max gain** = (6.00 − 5.00) − 0.45 = **$0.55**
- **Breakeven** = 5.00 + 0.45 = **$5.45**

**Key Principle:**
> Bull call spread: max gain = strike difference − net premium; breakeven = lower strike + net premium.

### Q138 — Which of Beth's Statements Is Correct [DC-38] (Essay)

**Context (DC10):**
Statements: (1) Technical analysis projects moves by examining current interest rates, inflation and risk premium differentials. (2) Expansionary monetary policy in India has contributed to INR appreciation. (3) A long CNY/USD put would profit from a depreciation of the USD against the CNY.

**Question:**
Identify the statement most likely correct and justify with one reason.

**Model Answer / Explanation:**

**Statement 3.** The USD is the base currency of CNY/USD, so buying a put on the rate profits when the USD depreciates.

- Statement 1 is wrong: technical analysis uses historical price data, not economic fundamentals.
- Statement 2 is wrong: expansionary policy lowers real rates, so the INR should depreciate.

**Key Principle:**
> Put on X/Y profits if the rate (base-currency value) falls.

# DC11 — Tong / WCP (Volatility, Negative Carry, Minimum-Variance Hedge)

*Full vignette: Appendix → DC11*

### Q139 — Peters' Recommendations: Volatility and Inflation [DC-39] (Essay)

**Context (DC11):**
Recommendation 1: use options to move from net short to net long volatility given recent pandemic turmoil. Recommendation 2: Germany's inflation is rising rapidly, so increase exposure to Germany to benefit from the expected currency depreciation.

**Question:**
Identify which recommendation is most likely correct and justify.

**Model Answer / Explanation:**

**Recommendation 1.** In stable conditions traders are often net short volatility (most options expire out of the money; writers keep the premium). In unstable conditions, traders go net long volatility to hedge uncertainty.

Recommendation 2 is wrong: rising German inflation depreciates the currency, lowering the value of German investments, so exposure should be **reduced**, not increased.

**Key Principle:**
> Turmoil → net long vol. Higher inflation → currency depreciation → reduce that exposure.

### Q140 — Constructing a Negative Carry Trade (MXN/USD) [DC-40] (Essay)

**Context (DC11):**
US 1-yr yield 2.21%; MXN 1-yr yield 4.50%; MXN/USD spot 18.90; 1-yr forward 19.72.

**Question:**
Construct a negative carry trade using MXN/USD.

**Model Answer / Explanation:**

A negative carry trade borrows at the high rate and invests at the low rate, profiting only if the low-yield currency appreciates enough.

- Borrow MXN at 4.50%, invest in USD at 2.21%: net borrowing cost = 4.50% − 2.21% = **2.29%**.
- Exchange rate return = (19.72 − 18.90) / 18.90 = **4.34%**, which exceeds the net cost, so the trade is profitable: 4.34% − 2.29% ≈ **2.05%** (my subtraction; the key states only that the 4.34% exceeds the 2.29%).

**Key Principle:**
> Negative carry: borrow high-yield, invest low-yield; works only if the low-yield currency appreciates by more than the yield gap.

### Q141 — Minimum-Variance Hedge of HKD Exposure [DC-41] (Essay)

**Context (DC11):**
JI (GBP reporting) holds HKD 185m of assets. σ(R_GBP) = 5.10%; σ(R_HKD) = 2.73%; σ(R_GBP/HKD) = 3.61%; ρ(R_GBP; R_GBP/HKD) = 0.26.

**Question:**
Construct a minimum-variance hedge using a forward contract.

**Model Answer / Explanation:**

h = ρ(R_GBP; R_GBP/HKD) × σ(R_GBP) / σ(R_GBP/HKD) = 0.26 × (5.10% / 3.61%) = **0.367**

Hedge position = 0.367 × HKD 185m = **HKD 67.95m**.

Direction: short HKD. The market quote is HKD/GBP, so go **long HKD/GBP** (buy GBP), i.e., **short a GBP/HKD forward** with notional HKD 67.95m.

**Key Principle:**
> Min-variance hedge ratio h = ρ × σ(asset return in domestic currency) / σ(FX return); hedge = h × exposure.

# DC12 — HNW / Testa (Hedge Close-Out, Roll Yield, NDFs, Direct Hedge)

*Full vignette: Appendix → DC12*

### Q142 — IPS Element Behind the Initial Unhedged-Upside Position [DC-42]

**Context (DC12):**
Testa's IPS: investment process is the primary return driver; not overly risk averse; major currencies only; exposure ≤ 6 months; rebalance if currency loses > 3% of initial exposure monthly; options only on strong views for a profitable hedge; no income/liquidity needs; minimize hedging costs. Spanish position fully hedged at purchase in 2009.

**Question:**
In terms of the objectives and constraints that were incorporated into Testa’s IPS, the one that best explains the initial euro exposure of the Spanish investment in 2009 is the one related to his:

A. risk aversion.
B. return objective.
C. liquidity constraint.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Testa is not overly risk averse; the focus is the return from his process.
- **B is correct.** **Return objective.** His return is meant to come from his investment process (stock selection). The position was fully hedged despite a forecast euro appreciation; there was no attempt to exploit the currency view.
- **C is wrong.** The position had no liquidity or income needs.

**Key Principle:**
> Currency hedged to isolate the return from the stock-selection process.

### Q143 — Reason Consistent With Expected EUR Appreciation [DC-43]

**Context (DC12):**
HNW forecasts EUR appreciation vs USD. Reasons: (1) real interest rates higher in euro countries; (2) potential defaults of euro countries lead to IMF/ECB support; (3) US trade deficit with euro countries continues to decline.

**Question:**
Which of Testa’s reasons for the future course of the USD/EUR exchange rate in 2009 is most consistent with HNW’s assessment?

A. Reason 1
B. Reason 2
C. Reason 3

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Reason 1.** Higher euro real rates attract foreign investment and raise demand for the euro.
- **B is wrong.** Potential defaults raise the foreign risk premium on the euro (the USD is less risky), which should depreciate the euro.
- **C is wrong.** A declining US deficit means lower US demand for euros, weakening the euro.

**Key Principle:**
> Higher real rates → currency appreciation; higher risk premium or lower demand → depreciation.

### Q144 — Cash Outflow to Close Out a Forward After 3 Months [DC-44]

**Context (DC12):**
200,000 shares × EUR 90 = EUR 18m hedged with a 6-month forward sold at bid. Three months later, close out. Spot 1.3935/1.3983 → 1.4106/1.4210; 6m fwd points at initiation −19.0/−18.3; 3m fwd points three months later −21.6/−21.0; USD MRR 1.266%.

**Question:**
Using Exhibit 1, if the Spanish shares had been sold after three months, the cash outflow (in US dollars) required to close out the forward contract would have been closest to:

A. 489,182.
B. 489,850.
C. 491,400.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Discounts with the EUR MRR (1.814%) instead of the USD rate; the cash flow is in USD.
- **B is correct.** **USD 489,850.** Original forward (sell EUR at bid): 1.3935 − 19/10,000 = 1.3916. Close-out forward (buy EUR at offer): 1.4210 − 21/10,000 = 1.4189. Settlement = EUR 18m × (1.4189 − 1.3916) = USD 491,400; discount 3 months at the USD MRR: 491,400 / (1 + 0.01266 × 90/360) = **USD 489,850**.
- **C is wrong.** Undiscounted settlement amount.

**Key Principle:**
> Forward close-out: opposite forward at the other side of the market; discount the net USD settlement at the USD rate (the currency of the cash flow).

### Q145 — Roll Yield on the Rolled EUR Hedge [DC-45]

**Context (DC12):**
The hedge sells EUR (base currency) forward; the EUR trades at a forward discount (negative points). The EUR appreciated by the time of the roll.

**Question:**
If the 2009 forward hedge had been rolled forward at its maturity, using Exhibit 1, the roll yield would most likely have been:

A. negative, but the currency change made it less negative.
B. positive, but the currency change reduced some of this effect.
C. negative, and the currency change made it even more negative.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** The currency appreciation makes it more, not less, negative.
- **B is wrong.** Roll yield is negative for a hedger selling a base currency at a forward discount.
- **C is correct.** **Negative, and the currency change made it even more negative.** Selling a base currency at a discount means selling low and buying back higher at settlement (negative roll yield); the EUR's appreciation makes the buy-back price even higher.

**Key Principle:**
> Selling a currency at a forward discount = negative roll yield; spot appreciation of it worsens the hedge result.

### Q146 — Least Accurate Statement About NDFs [DC-46]

**Context (DC12):**
Fournier on NDFs: (pricing) may differ from arbitrage-implied; (credit risk) greater than outright forwards because central banks in developing countries are weaker; (settlement) cash settled in the non-controlled currency.

**Question:**
Which of Fournier’s 2014 comments about non-deliverable forwards (NDFs) is least accurate? The one concerning:

A. pricing.
B. credit risk.
C. settlement.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** Accurate: capital controls break covered interest parity arbitrage, so NDF pricing can differ.
- **B is correct.** **Credit risk is the inaccurate comment.** Credit risk relates to counterparty risk, not the central bank, and is **lower** than outright forwards since the notional isn't exchanged; only the net change is settled.
- **C is wrong.** Accurate: the controlled currency can't be delivered; NDFs are cash settled in the non-controlled currency.

**Key Principle:**
> NDFs: cash settled in the freely convertible currency; lower credit risk (net settlement); pricing can deviate from CIP.

### Q147 — Hedging Two Long, Highly Correlated Currency Exposures [DC-47]

**Context (DC12):**
Testa holds roughly equal USD-sized long positions in a New Zealand firm and an Australian firm; USD/AUD vs USD/NZD correlation ≈ 0.85; he wants to minimize FX exposure.

**Question:**
The most appropriate hedging strategy for the 2015 positions, in keeping with Testa’s wishes, is based on a:

A. direct hedge on each currency separately.
B. cross-hedge of the two currencies in the portfolio.
C. minimum-variance hedge of the two currencies in the portfolio.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Direct hedge on each currency.** Both positions are long, so both currencies are sold forward; the correlation doesn't help.
- **B is wrong.** A cross-hedge/minimum-variance hedge exploits correlation when one asset is long and the other short.
- **C is wrong.** A minimum-variance hedge doesn't need long/short positions, but the biggest risk reduction, which Testa wants, comes from the direct hedge.

**Key Principle:**
> Both long, minimize exposure → hedge each currency directly.

# DC13 — Campos / Sabanai (Currency Return, Carry, Volatility Options, Hedge Ratios)

*Full vignette: Appendix → DC13*

### Q148 — Domestic-Currency Return of a Two-Country Portfolio [DC-48]

**Context (DC13):**
Dias's foreign assets (BRL reporting): UK 83.4m→86.0m GBP, BRL/GBP 3.8729→4.1025; Germany 55m→51m EUR, BRL/EUR 3.0359→3.5142.

**Question:**
Based on the information provided in Exhibit 1, the domestic currency value of Dias’s foreign investments most likely:

A. decreased because of changes in the domestic currency value of foreign asset holdings.
B. increased because of changes in the domestic currency value of foreign asset holdings.
C. increased because of changes in the domestic currency value of UK assets but decreased because of changes in the domestic currency value of German assets.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** The portfolio's BRL value, and both holdings' BRL values, increased.
- **B is correct.** **Increased because of changes in the domestic-currency value of both holdings.** Weights (initial BRL value): UK 0.659, Germany 0.341.
R_DC = 0.659 × (86.0/83.4)(4.1025/3.8729) + 0.341 × (51/55)(3.5142/3.0359) − 1 = 0.659(1.0923) + 0.341(1.0734) − 1 ≈ **+8.6%**. Both the UK and German holdings rose in BRL terms.
- **C is wrong.** The German holding's *EUR* value declined (55m → 51m) but its BRL value rose because the EUR appreciated.

**Flag:** Key shows the result as 0.0858; unrounded I get 0.08585 (8.59%). Direction and answer unaffected.

**Key Principle:**
> R_DC (multi-asset) = Σ w_i (1 + R_FC,i)(1 + R_FX,i) − 1, with weights on initial domestic values.

### Q149 — Correlations and Overlay Value-Add [DC-49]

**Context (DC13):**
Traldi: in the short run, if foreign asset and foreign currency returns are negatively correlated, hedge all exposure; a fully hedged overlay with separate alpha adds value only if the alpha has a high correlation with Brazilian equities/bonds.

**Question:**
In her response regarding hedging foreign currency exposure in Dias’s portfolio, Traldi is most likely:

A. correct about the correlations and the currency overlay program.
B. incorrect about the correlations and the currency overlay program.
C. incorrect about the correlations, but correct about the currency overlay program.

**Correct Answer:** B

**Explanation:**

- **A is wrong.** She's wrong on both points.
- **B is correct.** **Incorrect on both.** With negative correlation, some currency exposure is desirable for diversification, so no need to hedge it all. An overlay adds value only if currency alpha has a **low** correlation with the other asset classes.
- **C is wrong.** She's wrong on the overlay point too: alpha must be low-correlated, not high.

**Key Principle:**
> Negative asset–currency correlation → leave some exposure unhedged. Overlay alpha should be low-correlation.

### Q150 — Choosing Funding and Investment Currencies [DC-50]

**Context (DC13):**
1-yr yields: US 0.05%, UK 0.40%, Eurozone 0.11%. Implied vol: USD/GBP 5.50%, GBP/EUR 7.50%, USD/EUR 9.50%.

**Question:**
Based on the information in Exhibit 2, it would be best for Sabanai to implement a carry trade for BC by borrowing in:

A. USD and investing in GBP.
B. GBP and investing in USD.
C. EUR and investing in GBP.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Borrow USD, invest GBP.** Widest yield spread (UK highest, US lowest), and USD/GBP has the lowest implied volatility (best for a carry trade).
- **B is wrong.** Reverses the trade: borrows the high-yield currency.
- **C is wrong.** The eurozone yield is higher than the US yield, so EUR is not the best funding currency; GBP/EUR vol is also higher.

**Key Principle:**
> Carry: fund in the lowest-yield currency, invest in the highest, prefer low implied volatility.

### Q151 — Option Position Inconsistent With Expected Rising Volatility [DC-51]

**Context (DC13):**
Peixaria expects USD/EUR to become more volatile and wants an options strategy to profit.

**Question:**
In regard to using USD/EUR options, Peixaria is least likely to recommend a strategy to go:

A. long an equal number of 25-delta puts and calls.
B. long an equal number of 50-delta puts and calls.
C. short an equal number of 15-delta puts and calls.

**Correct Answer:** C

**Explanation:**

- **A is wrong.** A long 25-delta strangle is appropriate and cheaper than a 50-delta one (OTM options).
- **B is wrong.** A long 50-delta strangle (straddle) is appropriate for expected high volatility.
- **C is correct.** **Short an equal number of 15-delta puts and calls** (a short strangle) profits when volatility is low; inconsistent with the view.

**Key Principle:**
> Expect higher vol → long straddle/strangle; expect lower vol → short.

### Q152 — Risk-Neutral Hedge Ratios for AUD and CHF [DC-52]

**Context (DC13):**
FB is long AUD and CHF equities (BRL reporting).

| Pair | Spot | 6m forward | 6m forecast spot | Fwd prem/disc | Spot change |
|---|---|---|---|---|---|
| BRL/AUD | 2.1046 | 2.1523 | 2.0355 | 2.27% | −3.28% |
| BRL/CHF | 2.5309 | 2.4641 | 2.5642 | −2.64% | 1.32% |

**Question:**
Based on the information provided in Exhibit 3, the most appropriate risk neutral strategy is for FB to:

A. over-hedge AUD and not hedge CHF.
B. under-hedge AUD and over-hedge CHF.
C. under-hedge CHF and not hedge AUD.

**Correct Answer:** A

**Explanation:**

- **A is correct.** **Over-hedge AUD, don't hedge CHF.** AUD trades at a 2.27% forward premium (positive roll yield on a short hedge) and is expected to depreciate 3.28% (short gains); so hedge more than 100%. CHF trades at a −2.64% forward discount (negative roll yield on a short) and is expected to appreciate 1.32% (short loses); so don't hedge.
- **B is wrong.** Under-hedging AUD and over-hedging CHF is the reverse of what both the roll yield and the forecast imply.
- **C is wrong.** Under-hedging CHF and not hedging AUD ignores AUD's expected depreciation and positive roll yield.

**Key Principle:**
> Short hedge earns the forward premium (roll yield) plus any expected spot depreciation; hedge more when both are positive.

### Q153 — Do the Option Structures Exploit Views and Cut Hedging Cost? [DC-53]

**Context (DC13):**
Strategy 1 (AUD, exposure BRL/AUD): long put K=2.1046, short put K=2.1006, short call K=2.1456. Strategy 2 (CHF, BRL/CHF): long put K=2.5309, short put K=2.5049, short call K=2.5669. Forecasts: BRL/AUD 2.0355, BRL/CHF 2.5642.

**Question:**
Is Campos most likely correct that Strategy 1 and Strategy 2 will accomplish the goals of exploiting market views and reducing hedging costs?

A. Yes
B. No, she is incorrect about reducing hedging costs
C. No, she is incorrect about exploiting market views

**Correct Answer:** C

**Explanation:**

- **A is wrong.** The costs are reduced, but the structures don't accommodate the market views.
- **B is wrong.** She is right about reducing hedging costs: the short put and short call generate premium.
- **C is correct.** **No: she is wrong about exploiting market views.** Both structures reduce cost via premiums from the short options. But Strategy 1 (a short seagull on AUD) protects only down to 2.1006 (where the short put offsets the hedge), not to the forecast 2.0355; and in Strategy 2 the premium is pocketed if the rate doesn't reach the 2.5669 short call strike.

**Flag:** The key's reasoning focuses on Strategy 1; for Strategy 2 it says the premium is pocketed and the option expires worthless, which doesn't clearly show how that strategy fails the 'exploit the view' test (the 2.5642 forecast is inside the 2.5669 short call strike). The answer (C) is per the key; I couldn't verify the Strategy 2 explanation.

**Key Principle:**
> Seagull/collar structures cut cost by selling options but give up protection (or upside) beyond the short strike.

---

## Summary by Topic

| Topic | Questions | Count |
|---|---|---|
| Option strategies (covered call, protective put, collar, spreads, straddles/strangles, calendar, synthetics) | Q1–Q15, Q18–Q21, Q23–Q29, Q31, Q33, Q35–Q36, Q38–Q40, Q43–Q47, Q50–Q52, Q55–Q57, Q137, Q153 | 46 |
| Option Greeks (delta, gamma, vega, theta) and position delta | Q16, Q30, Q32, Q41–Q42, Q48–Q49 | 7 |
| Implied volatility: skew, smile, term structure, risk reversals | Q22, Q34, Q37, Q53–Q54 | 5 |
| FX hedging with options/futures (equity-side use) | Q17 | 1 |
| Duration management with swaps | Q58, Q69, Q71, Q82, Q90 | 5 |
| Futures hedging and synthetic allocation (bond BPV, equity beta, equitizing cash, currency futures) | Q59–Q61, Q66–Q68, Q70, Q75–Q77, Q86–Q87, Q92–Q95, Q99 | 17 |
| Equity swaps | Q62, Q79–Q80, Q84, Q88, Q97 | 6 |
| Variance swaps and volatility (VIX) trades | Q63, Q78, Q83, Q91, Q96 | 5 |
| Fed funds futures and rate probabilities | Q64, Q81, Q85, Q100 | 4 |
| Bond futures basis and cheapest-to-deliver | Q65, Q89 | 2 |
| Cross-currency basis swaps | Q72–Q74, Q98 | 4 |
| Currency return decomposition and risk | Q101–Q102, Q107–Q108, Q113, Q148 | 6 |
| Currency management strategies (passive, discretionary, active, overlay, FX as an asset class) | Q103–Q106, Q109–Q112, Q114–Q118, Q138, Q142–Q143, Q149 | 17 |
| Volatility trading in FX | Q123–Q125, Q139, Q151 | 5 |
| FX hedging mechanics (static/dynamic, forwards, rolling, cross-hedge, options) | Q119, Q126–Q133, Q144–Q145, Q147, Q152 | 13 |
| Carry trade, forward rate bias, roll yield, EM currency distributions | Q121–Q122, Q134–Q136, Q140, Q150 | 7 |
| Minimum-variance hedge ratio | Q141 | 1 |
| Non-deliverable forwards | Q120, Q146 | 2 |

---

## Formulas Used in This Bank

**Terms:** S₀ = stock price now · S_T = stock price at expiration · X = strike · C₀, P₀ = call and put premiums paid/received · r = risk-free rate · T = time to expiration · MV_P = market value of the portfolio · MD = modified duration (P = portfolio, T = target, S = swap, CTD = cheapest-to-deliver) · BPV = basis point value = MD × MV × 0.0001 · CF = conversion factor · β = beta (S = current, T = target, f = futures) · F = futures price × contract multiplier.

**Option strategies (profit per share at expiration, premiums included)**
> Covered call (long stock, short call): breakeven = S₀ − C₀; max gain = X − S₀ + C₀; max loss = S₀ − C₀ (stock to zero)
> Protective put (long stock, long put): breakeven = S₀ + P₀; max loss = S₀ + P₀ − X
> Collar (long stock, long put at X_L, short call at X_H): max gain = X_H − S₀ + C₀ − P₀; max loss = S₀ − X_L + P₀ − C₀
> Bull call spread (long call X_L, short call X_H): net premium = C(X_L) − C(X_H); max loss = net premium; max gain = (X_H − X_L) − net premium; breakeven = X_L + net premium
> Bear put spread (long put X_H, short put X_L): net premium = P(X_H) − P(X_L); max loss = net premium; max gain = (X_H − X_L) − net premium; breakeven = X_H − net premium
> Long straddle (same X call + put): cost = C₀ + P₀; breakevens = X ± (C₀ + P₀); max loss = C₀ + P₀. Short straddle is the mirror image.
> Long strangle (put at X_P, call at X_C): cost = C₀ + P₀; breakevens = X_P − cost and X_C + cost

**Put–call parity and synthetics**
> S₀ + P₀ = C₀ + X/(1 + r)^T
> Synthetic long call = long stock + long put − borrow PV(X); synthetic long put = long call + short stock + lend PV(X); synthetic long stock = long call + short put + lend PV(X); synthetic forward = long call + short put

**Greeks**
> Delta: option price change ≈ delta × stock price change. Stock = +1; long call 0 to +1; long put −1 to 0; ATM ≈ ±0.5
> Position delta = Σ (number of options × delta); covered call delta = (1 − call delta) × shares
> Gamma = change in delta per $1 move (largest at the money, near expiry). Vega = price change per 1-point change in implied volatility. Theta = price change per day (long options: negative)

**Swap-based duration adjustment**
> N_S = MV_P × (MD_T − MD_P) / MD_S, where N_S is the swap notional (a pay-fixed swap has negative MD_S and lowers duration)

**Futures hedging and synthetic exposure**
> Treasury futures (BPV method): N_f = ((BPV_T − BPV_P) / BPV_CTD) × CF; BPV_T = MD_T × MV_P × 0.0001; negative = sell. Full hedge (BPV_T = 0): N_f = −(BPV_P / BPV_CTD) × CF
> Equity futures: N_f = ((β_T − β_S) / β_f) × (S / F); positive = buy. Equitizing cash: β_S = 0, so N_f = (β_T / β_f) × cash / F
> Cheapest-to-deliver: the deliverable with the lowest (quoted price − futures price × CF)
> Bond futures basis arbitrage: positive basis → sell the bond, buy the futures; negative → the reverse

**Variance swap**
> Variance notional N_var = vega notional / (2K), K = strike (in volatility points)
> Settlement = N_var × (realized variance − K²)
> Mid-life value = N_var × PV × [(t/T) × RealizedVol² + ((T − t)/T) × ImpliedVol² − K²], t = time elapsed, T = swap life, PV = discount factor for remaining life

**Fed funds futures**
> Implied rate = 100 − futures price
> P(move) = (implied rate − current rate) / (rate after the move − current rate)

**Currency return and risk**
> R_DC = (1 + R_FC)(1 + R_FX) − 1, R_FX = percent change of the foreign currency in domestic-currency terms (domestic = price currency)
> Multi-asset: R_DC = Σ wᵢR_FC,ᵢ + Σ wᵢR_FX,ᵢ + Σ wᵢ(R_FC,ᵢ × R_FX,ᵢ); currency contribution = R_DC − Σ wᵢR_FC,ᵢ
> σ²(R_DC) ≈ σ²(R_FC) + σ²(R_FX) + 2σ(R_FC)σ(R_FX)ρ, ρ = correlation of R_FC and R_FX
> Minimum-variance hedge ratio h = ρ(R_DC; R_FX) × σ(R_DC) / σ(R_FX); hedge notional = h × exposure
> All-in forward = spot + forward points / 10,000 (4-decimal quotes); sell the base currency at the bid, buy at the offer
> Forward premium/discount = (forward − spot) / spot; roll yield on a short hedge is positive when the hedged currency is at a forward premium
> Carry trade: borrow the low-yield currency, invest in the high-yield one; gain ≈ yield difference if the exchange rate is unchanged

---

# Appendix — Full Vignettes

## DA1 — Nuñes (Covered Call, Protective Put, Collar, Spreads, Straddle, Calendar)

Aline Nuñes, a junior analyst, works in the derivatives research division of an international securities firm. Nuñes’s supervisor, Cátia Pereira, asks her to conduct an analysis of various option trading strategies relating to shares of three companies: IZD, QWY, and XDF. On 1 February, Nuñes gathers selected option premium data on the companies, presented in Exhibit 1.

**Exhibit 1**
Share Price and Option Premiums as of 1 February (share prices and option premiums in €)

| Company | Share Price | Call Premium | Option Date/Strike | Put Premium |
|---|---|---|---|---|
|  |  | 9.45 | April/87.50 | 1.67 |
| IZD | 93.93 | 2.67 | April/95.00 | 4.49 |
|  |  | 1.68 | April/97.50 | 5.78 |
|  |  |  |  |  |
|  |  | 4.77 | April/24.00 | 0.35 |
| QWY | 28.49 | 3.96 | April/25.00 | 0.50 |
|  |  | 0.32 | April/31.00 | 3.00 |
|  |  |  |  |  |
|  |  | 0.23 | February/80.00 | 5.52 |
| XDF | 74.98 | 2.54 | April/75.00 | 3.22 |
|  |  | 2.47 | December/80.00 | 9.73 |

Nuñes considers the following option strategies relating to IZD:

Strategy 1: Constructing a synthetic long put position in IZD

Strategy 2: Buying 100 shares of IZD and writing the April €95.00 strike call option on IZD

Strategy 3: Implementing a covered call position in IZD using the April €97.50 strike option

Nuñes next reviews the following option strategies relating to QWY:

Strategy 4: Implementing a protective put position in QWY using the April €25.00 strike option

Strategy 5: Buying 100 shares of QWY, buying the April €24.00 strike put option, and writing the April €31.00 strike call option

Strategy 6: Implementing a bear spread in QWY using the April €25.00 and April €31.00 strike options

Finally, Nuñes considers two option strategies relating to XDF:

Strategy 7: Writing both the April €75.00 strike call option and the April €75.00 strike put option on XDF

Strategy 8: Writing the February €80.00 strike call option and buying the December €80.00 strike call option on XDF

## DA2 — Singh / Hopewell (Protection Strategies, Straddle, Spreads, Gamma)

Stanley Kumar Singh, CFA, is the risk manager at SKS Asset Management. He works with individual clients to manage their investment portfolios. One client, Sherman Hopewell, is worried about how short-term market fluctuations over the next three months might impact his equity position in Walnut Corporation. Although Hopewell is concerned about short-term downside price movements, he wants to remain invested in Walnut shares because he remains positive about its long-term performance. Hopewell has asked Singh to recommend an option strategy that will keep him invested in Walnut shares while protecting against a short-term price decline. Singh gathers the information in Exhibit 1 to explore various strategies to address Hopewell’s concerns.

Another client, Nigel French, is a trader who does not currently own shares of Walnut Corporation. French has told Singh that he believes that Walnut shares will experience a large move in price after the upcoming quarterly earnings release in two weeks. French also tells Singh, however, that he is unsure which direction the stock will move. French asks Singh to recommend an option strategy that would allow him to profit should the share price move in either direction.

A third client, Wanda Tills, does not currently own Walnut shares and has asked Singh to explain the profit potential of three strategies using options in Walnut: a long straddle, a bull call spread, and a bear put spread. In addition, Tills asks Singh to explain the gamma of a call option. In response, Singh prepares a memo to be shared with Tills that provides a discussion of gamma and presents his analysis on three option strategies:

Strategy 1: A long straddle position at the $67.50 strike option

Strategy 2: A bull call spread using the $65 and $70 strike options

Strategy 3: A bear put spread using the $65 and $70 strike options

**Exhibit 1**
Walnut Corporation Current Stock Price: $67.79

Walnut Corporation European Options

| Exercise Price | Market Call Price | Call Delta | Market Put Price | Put Delta |
|---|---|---|---|---|
| $55.00 | $12.83 | 1.00 | $0.24 | –0.05 |
| $65.00 | $3.65 | 0.91 | $1.34 | –0.29 |
| $67.50 | $1.99 | 0.63 | $2.26 | –0.42 |
| $70.00 | $0.91 | 0.37 | $3.70 | –0.55 |
| $80.00 | $0.03 | 0.02 | $12.95 | –0.76 |

Note: Each option has 106 days remaining until expiration.

## DA3 — Ngoc / Ahlim (BRL Hedge, PSÔL Protective Put and Bull Call Spread, Implied Volatility)

Anneke Ngoc is an analyst who works for an international bank, where she advises high-net-worth clients on option strategies. Ngoc prepares for a meeting with a US-based client, Mani Ahlim.

Ngoc notes that Ahlim recently inherited an account containing a large Brazilian real (BRL) cash balance. Ahlim intends to use the inherited funds to purchase a vacation home in the United States with an expected purchase price of US$750,000 in six months. Ahlim is concerned that the Brazilian real will weaken against the US dollar over the next six months. Ngoc considers potential hedge strategies to reduce the risk of a possible adverse currency movement over this time period.

Ahlim holds shares of Pselftarô Ltd. (PSÔL), which has a current share price of $37.41. Ahlim is bullish on PSÔL in the long term. He would like to add to his long position but is concerned about a moderate price decline after the quarterly earnings announcement next month, in April. Ngoc recommends a protective put position with a strike price of $35 using May options and a $40/$50 bull call spread using December options. Ngoc gathers selected PSÔL option prices for May and December, which are presented in Exhibit 1.

**Exhibit 1**
Selected PSÔL Option Prices (all prices in US dollars)

| Exercise Price | Expiration Month | Call Price | Put Price |
|---|---|---|---|
| 35 | May | 3.00 | 1.81 |
| 40 | December | 6.50 | 10.25 |
| 50 | December | 4.25 | 20.50 |

Ahlim also expresses interest in trading options on India’s NIFTY 50 (National Stock Exchange Fifty) Index. Ngoc gathers selected one-month option prices and implied volatility data, which are presented in Exhibit 2. India’s NIFTY 50 Index is currently trading at a level of 11,610.

**Exhibit 2**
Selected One-Month Option Prices and Implied Volatility Data: NIFTY 50 Index (all prices in Indian rupees)

| Exercise Price | Market Call Price | Market Put Price | Implied Call Volatility | Implied Put Volatility |
|---|---|---|---|---|
| 11,200 | 526.00 | 61.90 | 5.87 | 17.72 |
| 11,400 | 365.45 | 102.60 | 10.80 | 17.01 |
| 11,600 | 240.00 | 165.80 | 12.26 | 16.44 |
| 11,800 | 135.00 | 213.00 | 12.14 | 16.39 |
| 12,000 | 65.80 | 370.00 | 11.98 | 16.56 |

Ngoc reviews a research report that includes a one-month forecast of the NIFTY 50 Index. The report’s conclusions are presented in Exhibit 3.

**Exhibit 3**
Research Report Conclusions: NIFTY 50 Index
One-month forecast:

We have a neutral view on the direction of the index’s move over the next month.

The rate of the change in underlying prices (vega) is expected to increase.

The implied volatility of index options is expected to be above the consensus forecast.

Based on these conclusions, Ngoc considers various NIFTY 50 Index option strategies for Ahlim.

## DA4 — Voruganti / Maverik (Seagull, Strategy Comparison, Long Straddle)

Monica Voruganti is the head of Maverik Venture Capital LLC. Voruganti is conducting an annual review of Maverik’s overall exposure to various investments.

Maverik holds 1 million shares in White Rock’s Bitcoin ETF (WBIT), which is currently trading at $60.25. Voruganti believes that there will be more industry adoption of cryptocurrencies and blockchain technology in the future. Although bullish on the longer-term outlook, she is concerned about short-term volatility and would like to protect the WBIT position for the next three months while keeping the cost of the protection to a minimum. Voruganti believes a short seagull spread would be the cheapest form of protection. She gathers three-month WBIT option prices in Exhibit 1.

**Exhibit 1**

| Call Premium | Exercise Price | Put Premium |
|---|---|---|
| $9.23 | $55 | $0.71 |
| $3.26 | $6 | $3.11 |
| $0.84 | $65 | $8.21 |

Voruganti asks Liam Brothers, a quantitative portfolio analyst at Maverik, to recommend another suitable strategy to protect the WBIT position. Using the prices in Exhibit 1 and assuming an expiration price of $47.50, Brothers calculates the profit at expiration of the following strategies:

- **Strategy 1:** A collar using the $60 and $65 strikes
- **Strategy 2:** A bull call spread using the $55 and $65 strikes
- **Strategy 3:** A bear put spread using the $55 and $65 strikes

Voruganti and Brothers next discuss a possible investment in Ether (ETH) cryptocurrency, which is currently trading at $3,710. Ether’s technology is going through a major upgrade in the next six months, and Voruganti expects increased volatility as a result. She believes ETH will have a 25% price move, but she is uncertain about the direction of the move. Brothers collects the data in Exhibit 2 and recommends a long straddle using at-the-money options.

**Exhibit 2**

| Call Premium | Exercise Price | Put Premium |
|---|---|---|
| $131.55 | $3,600 | $1.71 |
| $43.26 | $3,700 | $35.78 |
| $3.48 | $3,800 | $112.21 |

## DA5 — Reddy / CFT (Protection Strategy, Straddle and Strangle, Gamma and Collar Delta)

Shiva Reddy is a cloud technology architect working for Confident Technologies (CFT). When he joined the company four years ago, Reddy received 50,000 CFT stock options at a strike price of $8.50. CFT was recently listed on the NASDAQ at $44.00 per share. Reddy is looking to hire an investment advisor to help him manage his investments and tax planning.

Reddy meets with Victor Ramos, an investment advisor at Algo Advisors. Reddy tells Ramos that he is unsure about the direction of future CFT stock moves with the recent volatility after the stock’s listing. Reddy is concerned about his concentrated position in a single stock and wants to protect against a drop in CFT’s stock price. Reddy also mentions his desire to diversify his position in CFT stock without incurring high costs or a large tax impact in the short term. Ramos explains the following three option strategies and presents the available six-month option prices in Exhibit 1. CFT’s current stock price is $39.55.

- **Strategy 1:** A long straddle using at-the-money options
- **Strategy 2:** A collar
- **Strategy 3:** A bear spread

**Exhibit 1**

| Call Delta | Call Premium | Exercise Price | Put Premium | Put Delta |
|---|---|---|---|---|
| 0.685 | 3.11 | 38.50 | 1.76 | –0.359 |
| 0.522 | 2.40 | 39.50 | 2.22 | –0.504 |
| 0.337 | 1.81 | 40.50 | 2.83 | –0.613 |

Reddy asks Ramos to explain how the underlying Greeks of these option strategies will change over time. Ramos expects that the implied volatilities of the options presented in Exhibit 1 will not change for the next six months and makes the following statements:

- **Statement 1:** The gamma of the long straddle will be close to zero if the underlying share price remains constant.
- **Statement 2:** The delta of the collar will be close to zero if the underlying share price increases significantly.

## DA6 — Navarro / RCKL (Synthetic Short, Greeks, Calendar Spread, Risk Reversal)

Cynthia Navarro is a managing director in the Derivatives Group at RCKL Partners, an investment management firm. Navarro specializes in advising the firm’s clients on the use of derivatives in their portfolio management strategies. Navarro is preparing to review the portfolio of one of the firm’s clients, Brina Patel. Janice Cho and Lauren Lyons, analysts in the Derivatives Group, have also been asked to attend the meeting.

Prior to discussing client portfolios, Navarro, Cho, and Lyons discuss ways to create synthetic long and short positions in a stock using call and put options. Cho states, “It is possible to create a synthetic short position by buying a put and selling a call on the stock with the same strike price and expiration.” Navarro states, “No, to create a synthetic short position you would sell a put and buy a call with the same strike and expiration date.” Lyons disagrees with both Navarro and Cho, stating that the correct combination is to sell a call and a put on the stock with the same strike price and expiration.

Patel is bearish on shares of Company A and has shorted 500 shares at $117.43. Patel has approached Navarro about advice on using options to hedge this short position. Option information for Company A is presented in Exhibit 1.

**Exhibit 1 Option Data for Company A, 25 March 2019**

| Option | Expiration | Strike | Price | Delta | Vega | Theta |
|---|---|---|---|---|---|---|
| Call | June 2019 | 120 | 3.65 | 0.439 | 0.221 | –0.027 |
| Put | June 2019 | 115 | 3.70 | –0.399 | 0.216 | –0.028 |

Navarro suggests that Patel buy five contracts of June 120 calls. Alternatively, she notes that Patel write five June 115 put contracts. Navarro then makes the following statements:

- **Statement 1:** “While the position deltas of the stock + call portfolio and the stock + put portfolio are bearish, the position delta of the call position would be more bearish than that of the put position.”
- **Statement 2:** “The stock + call portfolio is long vega and thus will benefit from increased volatility. However, the stock + put portfolio is short vega and thus will benefit from reduced volatility.”
- **Statement 3:** “The stock + call portfolio benefits from time decay, and the stock + put portfolio is exposed to time decay.”

Patel is also bearish on shares of Company B. Information for Company B is presented in Exhibit 2.

**Exhibit 2 Option Data for Company A, 25 March 2019, Current Share Price = $139.81**

| Option | Expiration | Strike | Price | Delta | Theta |
|---|---|---|---|---|---|
| Call | June 2019 | 140 | 5.40 | 0.510 | –0.035 |
| Call | November 2019 | 140 | 8.64 | 0.517 | –0.021 |
| Put | June 2019 | 140 | 6.15 | –0.508 | –0.034 |
| Put | November 2019 | 140 | 10.55 | –0.507 | –0.019 |

Lyons confirms Patel’s bearish outlook and states, “We expect the stock to remain stable in the near term, but in the long term, the outlook is bearish.” Patel asks Lyons to provide recommendations on an appropriate option strategy.

Patel has also asked for recommendations on other option strategies for her to consider. Cho notes that the implied volatility of an underlying stock is an important factor in the determination of the price of the option and states that it is possible to devise strategies based on volatility skew. She states,

Generally speaking, implied volatility increases for put options at strike prices that are lower than the current stock price, whereas implied volatilities decrease for call options for strike prices that are higher than the current stock price; this is called the volatility skew. However, sometimes implied volatility decreases for put options at strike prices that are lower than the current stock price, whereas implied volatilities increase for call options at strike prices that are higher than the current stock price; this is called the volatility smile. If you believe that the put-implied volatility was too high relative to the call-implied volatility, you could devise a long risk-reversal strategy by shorting the out-of-the-money call option and going long the out-of-the-money put option.

## DA7 — Armitage / LAMS (Bear Spread, Calendar Spreads, Skew vs Smile)

Duane Armitage is a portfolio manager at LAMS Group, an independent investment advisory firm that offers portfolio management and investment advice to individual investors and institutional clients. Armitage is meeting with assistant portfolio managers Jessica Dufu and Emily Minkoff to review portfolios of clients Neha Kadakia and Maria Calzada.

Kadakia has been following Company XYZ and expects the price of its shares to decline sharply over the next month. Kadakia would like to use options to profit from this decline but also would like to limit losses if the expected share price decline does not materialize. Kadakia also indicates that she would like to minimize the cost of establishing the option position. Option information for XYZ shares is presented in Exhibit 1.

Exhibit 1 November Expiration Option Information for Company XYZ: Current Share Price $117.43; Data as of 15 October 2019

| Exercise Price | Call Premium | Put Premium |
|---|---|---|
| 115 | 5.40 | 2.85 |
| 120 | 2.70 | 5.22 |

Dufu suggests that Kadakia can achieve her objective using either of the following strategies:

- **Strategy 1:** Purchase November 120 call options and sell November 115 call options.
- **Strategy 2:** Purchase November 120 put options and sell November 115 put options.

Minkoff states, “I think a better strategy would be for Kadakia to undertake a calendar spread strategy, which is appropriate when there is an expectation for share prices to move in a certain direction but not immediately. Such a strategy focuses on taking advantage of the time value decay of stock options; however, it is only appropriate when implied volatility is expected to increase.

Maria Calzada is a hedge fund manager and has asked Armitage for ideas on option trading strategies. Armitage suggests Calzada consider strategies built to profit from implied volatility and changes in implied volatilities. He presents implied volatilities by moneyness for Company ABC in Exhibit 2:

**Exhibit 2 Implied Volatilities by Moneyness: Three-Month Option for Company ABC**

| Stock | ATM | Put: 80% | Put: 90% | Call: 110% | Call: 120% |
|---|---|---|---|---|---|
| ABC | 17.60 | 26.31 | 22.40 | 15.54 | 14.65 |

Armitage then makes the following statement: “Exhibit 2 depicts what we call a volatility smile. If the put implied volatility is considered to be too high compared with the call-implied volatility, then one way to take advantage of this situation is to enter a long risk reversal and delta hedge the option position by selling the underlying asset.”

Calzada asks for recommendations on option strategies to implement if the market is expected to trade in a narrow range in the near term. Dufu responds, “The appropriate strategy in this scenario depends on your expectations for changes in implied volatility. If you expect a decrease in implied volatility, then you should write a straddle on the stock index. If your expectation is for implied volatility to increase, then you should enter a short risk reversal trade on the stock index. If your view is that implied volatility will remain unchanged, then you should buy call options and write put options on the stock index.”

## DA8 — Manetti / WTML (Put–Call Parity, Covered Call, Delta, Put Purchase)

Wendy Manetti is a risk manager at WTML Group, an investment management firm based in Miami. Manetti is running a training session for newly hired analysts, one of whom is Emily Fillizola.

Manetti begins the training session by noting that investors can modify the payoff profile of an investment position with synthetic derivative or equity positions. He provides the following examples:

Example 1: One can create a synthetic long position in a stock by purchasing calls and selling puts on this stock with the same strike and expiration date.

Example 2: A synthetic put option on a stock can be constructed by selling calls on the stock with the same strike and expiration date as the put and taking a short position on the stock.

Manetti presents the group with the option data for Company A in Exhibit 1. He describes the following scenario: “Assume a client owns 2,000 shares of Company A, which does not pay a dividend and is currently priced at $139.81. The client expects its price to remain stable over the next few months but does not want to sell the position".

**Exhibit 1 Option Data for Company A, 25 November 2019**

| Option | Expiration | Strike | Premium | Delta | Theta |
|---|---|---|---|---|---|
| Call | February 2020 | 140 | 5.40 | 0.510 | –0.035 |
| Call | July 2020 | 140 | 8.64 | 0.517 | –0.021 |
| Put | February 2020 | 140 | 6.15 | –0.508 | –0.034 |
| Put | July 2020 | 140 | 10.55 | –0.507 | –0.019 |

Fillizola suggests that the client write 20 contracts of February 2020 call options with an exercise price of $140. The implied volatility of this option is 21.05%. Fillizola notes that if the share prices move to $140 and the option is called, the client would effectively sell her shares at $145.40. If, however, shares prices move lower to $130 her effective sale price would be $135.40. Fillizola notes that this strategy would be appropriate if the expected stock’s volatility is higher than the implied volatility of 21.05%.

Manetti states, “Now consider a situation in which a client owns shares of Company A and wants to protect against a sudden decline in share price. A strategy to consider is the purchase of put options. I might suggest that the client purchase the February 2020 put option because it is cheaper than the July 2020 option and has the lowest time decay. If it were possible to purchase a February put option with a strike price lower than $140, it would be cheaper, but there would be a greater risk of loss in the position.”

## DB1 — Global Mega (Futures Hedging, Equitizing Cash, Equity Swaps, Variance Swaps, Fed Funds, Basis)

Global Mega (Global) is a diversified financial services firm. Yasuko Regan, senior trader, and Marcus Whitacre, junior trader, both work on the firm’s derivatives desk. Regan and Whitacre assist in structuring and implementing trades for clients in the financial services industry that have limited derivatives expertise. Regan and Whitacre are currently assisting one of Global’s clients—Monatize, an asset management firm—with two of its portfolios: Portfolio A and Portfolio B.

Portfolio A is a bond portfolio composed solely of US Treasury bonds. Monatize has asked Global to quote the number of Treasury futures contracts necessary to fully hedge this bond portfolio against a rise in interest rates. Exhibit 1 presents selected data on Portfolio A, the relevant Treasury futures contract, and the cheapest-to-deliver (CTD) bond.

**Exhibit 1**
Selected Data on Portfolio A, the Treasury Futures Contract, and the CTD Bond

| Portfolio A | | Futures Contract and CTD Bond | |
|---|---|---|---|
| Market value | $143,234,000 | Price | 145.20 |
| Modified duration | 9.10 | Modified duration | 8.75 |
| Basis point value | $130,342.94 | Basis point value | $127.05 |
| | | Conversion factor | 0.72382 |
| | | Contract size | $100,000 |

After an internal discussion, Monatize elects to not hedge Portfolio A but rather decrease the portfolio’s modified duration to 3.10. Regan asks Whitacre to compute the number of Treasury futures contracts to sell in order to achieve this objective. Regan tells Whitacre to assume the yield curve is flat.

Portfolio B is a $100,000,000 equity portfolio indexed to the S&P 500 Index, with excess cash of $4,800,000. Monatize is required to equitize its excess cash to be fully invested, and the firm directs Global to purchase futures contracts to do so. To replicate the return of Portfolio B’s target index, Whitacre purchases S&P 500 futures contracts, at a price of 3,300 per contract, that have a multiplier of $250 per index point and a beta of 1.00.

Monatize’s CFO and Regan discuss two potential hedging strategies for Portfolio B to protect against a hypothetical extreme sell-off in equities. Regan first suggests that Monatize could enter into a total return equity swap, whereby Monatize agrees to pay the return on the S&P 500 and receive a fixed interest rate at pre-specified dates in exchange for a fee.

Regan next suggests that Monatize could alternatively hedge Portfolio B using variance swaps. Monatize’s CFO asks Regan to calculate what the gain would be in five months on a purchase of $1,000,000 vega notional of a one-year variance swap on the S&P 500 at a strike of 15% (quoted as annual volatility), assuming the following:

Over the next five months, the S&P 500 experiences a realized volatility of 20%;

At the end of the five-month period, the fair strike of a new seven-month variance swap on the S&P 500 will be 18%; and

The annual interest rate is 1.50%.

Regan and Whitacre discuss the use of federal funds futures contracts to infer probabilities of future monetary policy changes. Whitacre makes the following three statements about fed funds futures contracts:

Statement 1:
Typical end-of-month activity by large financial and banking institutions often induces “dips” in the effective fed funds rate.

Statement 2:
Especially for the longer-term horizon, the probabilities inferred from the pricing of fed funds futures usually have strong predictive power.

Statement 3:
To derive probabilities of Federal Reserve interest rate actions, market participants look at the pricing of fed funds futures, which are tied to the Federal Reserve’s target fed funds rate.

Whitacre then proposes to Regan that Global explore opportunities in bond futures arbitrage. Whitacre makes the following two statements:

Statement 4:
If the basis is positive, a trader would make a profit by “selling the basis.”

Statement 5:
If the basis is negative, a trader would make a profit by selling the bond and buying the futures.

## DB2 — Uff / Chehalis Fund (Equity Beta With Futures, Swap Duration, Tactical Rebalancing)

Nisqually Uff is the portfolio manager for the Chehalis Fund (the Fund), which holds equities and bonds in its portfolio. Uff focuses on tactical portfolio strategies and uses derivatives to implement his strategies.

Uff has a positive short-term outlook for equities relative to bonds and decides to temporarily increase the beta of the portfolio’s equity allocation from 0.9 to 1.2. He will use three-month equity index futures contracts to adjust the beta. Exhibit 1 displays selected data for the Fund’s current equity allocation and the relevant futures contract.

**Exhibit 1**
Selected Data for the Fund’s Current Equity Allocation and Futures Contract

- **Current value of the Fund’s equity allocation:** €168,300,000
- **Current portfolio beta:** 0.9
- **Target portfolio beta:** 1.2
- **Index futures contract value:** €45,000
- **Beta of futures contract:** 1.0

## DB3 — Wyalusing / Tioga (Pay-Floating Swap, Cross-Currency Basis Swap)

Canawacta Tioga is the CFO for Wyalusing Corporation, a multinational manufacturing company based in Canada. One year ago, Wyalusing issued fixed-rate coupon bonds in Canada. Tioga now expects Canadian interest rates to fall and remain low for three years. During this three-year period, Tioga wants to use a par interest rate swap to effectively convert the fixed-rate bond coupon payments into floating-rate payments.

## DB4 — Southern Sloth Sanctuary (Equitizing Cash, Currency Futures)

Southern Sloth Sanctuary (Sanctuary) is a charitable organization that cares for orphaned and injured sloths from the rain forest in the country of Lushland. The organization is supported by both domestic and international contributions. The Sanctuary’s CFO typically invests any funds that are not immediately needed for short-term operational expenses into a domestic index fund that tracks the Lushland 100 stock index, which is denominated in Lushland dollars (LLD).

The Sanctuary just received a large contribution from a local benefactor in the amount of LLD1,000,000. These funds are not needed for short-term operational expenses. The CFO intends to equitize this excess cash position using futures contracts to replicate the return on the Lushland 100 stock index. Exhibit 1 shows selected data for the Lushland 100 Index futures contract.

**Exhibit 1**
Selected Data for Lushland 100 Index Futures Contract

- **Quoted price of futures contract:** 1,247
- **Contract multiplier:** LLD 200
- **Contract beta:** 1.00

## DB5 — Lee / Pliny Elder (Swap Duration, Variance Swap, Equity Swap, Fed Funds)

Feng Lee is a portfolio manager at Pliny Elder Investments, an asset management firm with institutional and high-net-worth clients. He is reviewing and analyzing the portfolios of three clients.

Client A

Client A holds a $10 million portfolio of fixed-rate US Treasury bonds with a modified duration of 5.8. Anticipating a decline in interest rates, Lee aims to increase the portfolio’s modified duration to 6.2 without purchasing additional bonds. To achieve this, she enters a 1-year interest rate swap, taking a long duration position by paying a floating rate and receiving a fixed rate. The swap has a modified duration of 1.25.

Client B

Lee routinely trades volatility strategies for Client B. One year ago, she bought $90,000 vega notional of a 1-year variance swap on the Russell 2000 index at a volatility strike of 15% (annualized) for Client B. At expiration, the 1-year realized volatility is 17% (annualized).

Client C

Client C holds 80,000 shares of Kiwi Aeronautics, a publicly traded company currently priced at $21.50 per share. Client C has held Kiwi shares for a long time and therefore has a very low cost basis. To mitigate downside risk while still holding the shares, Lee enters a three-month equity swap, exchanging the total return on 80,000 Kiwi shares for a floating interest rate currently at 1.00% (annualized). Over the swap term, Kiwi pays a dividend of $0.25 per share and the stock price declines by 2%.

Further, Lee is investigating current market expectations for a Federal Reserve rate action at the next Federal Open Market Committee (FOMC) meeting. The current federal funds rate target range is 2.00% to 2.25%. The current price for the fed funds futures contract expiring after the next FOMC meeting is 98.09. Lee determines the probability of a 25 bps interest rate cut at the next FOMC meeting based on current market expectations.

## DB6 — Khan / Poly (Asset Allocation Shifts With Futures, Equity Swap, CTD)

Kabir Khan is a senior portfolio strategist at Poly Institutional Advisors, a diversified global financial services firm. Khan is responsible for the creation and maintenance of clients’ investment policy statements and investment guidelines.

One of Khan’s clients, Acme Generators, holds a $200 million portfolio that is allocated 65% to equities and 35% to bonds. Due to an increase in interest rate volatility and concern about a potential recession, Acme Generators has developed a bearish view on stocks and wants to allocate a greater percentage of the portfolio to bonds. Khan recommends moving 15% of the overall portfolio from equities to bonds using index futures contracts and gathers the information presented in Exhibit 1.

**Exhibit 1**

| Equity Portfolio – 65% | | Bond Portfolio – 35% | |
|---|---|---|---|
| Current portfolio beta | 1.20 | Current modified duration | 5.85 |
| Equity index futures price | 12,500 | Bond index futures price | 113.75 |
| Equity index futures multiplier | $10 | Bond index futures contract size | $100,000 |
| Equity index futures beta | 1.00 | Basis point value of CTD bond | $99.72 |
| — | — | Conversion factor | 0.9546 |

Another client, Beryl Hedge Fund, holds a concentrated $500 million position in QQQ, an exchange-traded fund which closely tracks the NASDAQ 100 index of technology stocks in the US. QQQ has increased significantly in the last six months and Alex Fisher, CIO at Beryl Hedge Fund, believes that a market correction may occur soon.

Fisher is evaluating ways to hedge this concentrated QQQ position using derivatives. He decides to reduce 40% of the exposure to QQQ using an equity swap that is settled semiannually and in which Beryl can receive either a fixed or a floating interest rate. Khan recommends a floating-rate equity swap where the floating rate is equal to the swap offered floating rate (SOFR) minus 50 bps. After entering the equity swap, the value of the QQQ position declines to $480 million at the first settlement date. The annual SOFR for the first settlement date is 4.50%.

Another client, Gem Insurance, is an insurance company that actively manages its fixed-income portfolio to avoid mismatches between the assets and liabilities. Gem Insurance has sold $100 million of five-year US Treasury bond futures that are expiring soon. The Treasury bond futures contract size is $100,000 and the futures contract settlement price is $135.74. Gem Insurance asks Khan to identify which of the three bonds in Exhibit 2 is the cheapest-to-deliver against the futures contract.

**Exhibit 2**

|  | Bond A | Bond B | Bond C |
|---|---|---|---|
| Cash dirty price | 131.25 | 134.50 | 138.75 |
| Conversion factor | 0.8925 | 0.9375 | 0.9525 |

## DB7 — Murphy / Deamon (Swaps, Variance Swaps, Rebalancing With Futures)

Kevin Murphy is an investment advisor at Deamon Advisors. Murphy is conducting annual reviews with his clients to update their IPS and provide recommendations for hedging and rebalancing.

Murphy is meeting with one of his clients, Tanya Casey, a high-net-worth individual. Casey has a bond allocation of $10 million with a portfolio modified duration of 7.50. Casey is concerned that interest rates will increase and wants to reduce the duration of her bond allocation to 5.25. Murphy recommends using an interest rate swap with an estimated modified duration of –3.00.

For her equity allocation, Casey expects volatility to increase and asks Murphy to devise a strategy to benefit from this expected increase with minimal cost. Murphy recommends buying a variance swap on the S&P 500 Index and presents relevant data in Exhibit 1.

**Exhibit 1**

- **Vega notional of a one-year variance swap:** $10,000,000
- **Strike of variance swap (quoted as annual volatility):** 16%
- **Annual interest rate:** 6.0%

Six months after taking the long position in the variance swap, the S&P 500 Index has experienced realized volatility of 21%. On the same day, Murphy identifies a new six-month variance swap on the S&P 500 Index with a fair strike of 19%.

Another client, Aaron Schouler, is an entrepreneur and, as of the beginning of this year, had $75 million allocated to equities and $50 million allocated to bonds. Due to the technology sector’s strong relative performance, Schouler’s equity portfolio has increased to $115 million, and his bond allocation is worth $55 million at the end of the year. Schouler expresses an interest in rebalancing his portfolio to the same percentage allocation as it was at the beginning of the year. Murphy recommends doing this via equity and bond index futures and collects information related to Schouler and the selected index futures in Exhibit 2.

**Exhibit 2**

- **Current equity portfolio beta:** 1.35
- **Current bond portfolio modified duration:** 6.50
- **Equity index futures price:** 20,000
- **Equity index futures multiplier:** $10
- **Equity index futures beta:** 1.00
- **Bond index futures price:** 118.50
- **Bond index futures contract size:** $100,000
- **Basis point value of CTD bond:** $98.57
- **Conversion factor:** 0.9785

## DB8 — Tryon / Washington Heights (Futures Hedges, Equitizing, Tail Hedge, Equity Swap)

Ford Tryon is a portfolio manager with Washington Heights, LLC, a hedge fund that invests in equities and fixed-income securities in both cash and derivative instruments. Heights markets itself as a go-anywhere fund that can exploit opportunities across asset classes and geographies. The recent increase in financial market volatility has opened several new opportunities for Tryon to exploit. He has four new trade ideas to discuss with his team, which includes James Bennett, his trader, and Wright Park, an analyst.

Tryon’s first trade is to hedge the interest rate exposure in a US$10 million corporate bond portfolio that has a modified duration of 7.5 years. Although Park is comfortable with the credit exposure of the individual bond positions, Tryon believes interest rates will increase and erode the total return of the portfolio. He proposes hedging the portfolio using Treasury bond futures with a contract size of US$100,000, a price of US$144.20, a modified duration of 8.3 years, and a conversion factor of 0.7455.

Tryon and Bennett discuss their views on emerging market equities. The fund has no exposure to EMs, but they believe that imminent resolution of current global trade tensions will benefit valuations in the near term. They want to use the futures market to express their positive view, because it would take time for Park to do the necessary research and for Bennett to trade the US$10 million they would allocate to this sector. Bennett suggests a cash equitization strategy using futures on the BOVESPA, the Brazilian equity index, which historically has had a 1.15 beta to the broader EM, compared with his 1.0 target EM beta. Bennett gathers data for the BOVESPA futures contract, whose underlying is the BOVESPA Index. The contract price is R$104,465, with a multiplier of 1 and a BRL/USD spot rate of 4.20 (4.20 BRL per 1 USD).

Tryon is long several equity positions based on event-driven ideas that, over the next few quarters, are expected to have double-digit returns. He is concerned, however, that the equity market may decline as a result of lower corporate earnings. He believes investors are complacent as reflected in the historically low level of the volatility index (VIX). He wants to establish volatility exposure as a tail hedge for his holdings and notices the VIX futures curve is in contango. Tryon evaluates three potential trades to establish his hedge:

- **Trade 1:** Go long back-end month futures contracts on the VIX Index, with a gross notional equal to the portfolio market value.
- **Trade 2:** Sell a rolling series of out-of-the-money put options on VIX futures.
- **Trade 3:** Go long a variance swap, with vega notional equal to the potential equity portfolio loss.

The fund owns 10,000 shares of Inwood Industries, Inc., which is currently trading at US$100.00. Bennett believes that Inwood’s next five quarterly earnings reports will miss consensus estimates but, longer term, there is value in the equity given the company’s strong backlog of new products. The shares are very illiquid to trade, so Tryon wants to hedge the position over this time frame without selling the shares. Park suggests three total return equity swaps for Tryon to consider.

## DB9 — Stuyvesant / Tribeca (Hedged Foreign Bonds, Futures Conversion, Fed Funds Probability)

Chelsea Stuyvesant is treasurer of the Tribeca Company, where she is responsible for oversight of the defined benefit pension plan. She uses a number of outside investment firms to manage equity and fixed-income strategies for the plan but also implements some trades on her own. Her trades are focused on ensuring that asset allocation remains in line with the investment policy statement and that liabilities are hedged in a manner that reduces funded status volatility and therefore minimizes the impact on Tribeca’s financial results. Stuyvesant is due to provide an update to the plan’s investment committee at an upcoming meeting and prepares several slides to illustrate her recent trades.

The fixed-income assets of the plan include US$10 million invested in one-year US Treasury bonds. Stuyvesant’s evaluation of global bond and currency markets indicates that she can increase the yield on the portfolio by selling the Treasury bond position and buying Japanese government bonds of the same maturity. The data she uses for her assessment show that the US bonds pay 1.75% and Japanese bonds pay –0.40% annualized. She plans to fully hedge the currency risk. The YEN/USD spot rate is 106.85, the one-year YEN/USD forward rate is 104.15, and the one-year YEN/USD cross currency swap basis is –0.63.

Stuyvesant plans to transition £10 million from a UK equity fund to a US$8 million US index fund, which have benchmarks of the FTSE 100 Index and S&P 500 Index, respectively. The committee has been concerned that because of uncertainty surrounding Brexit, there could be downside risk to the UK fund, but the fund cannot be liquidated for one month. Stuyvesant proposes using equity futures contracts to convert the FTSE equity risk into S&P 500 equity risk during the transition. Her analysis, based on the data in Exhibit 1, focuses on the equity derivatives transactions because the currency risk is hedged separately as part of an overlay program.

**Exhibit 1 Equity Futures Data**

- **S&P 500 E-Mini Futures One-Month Contract Price:** US$3,000
- **S&P 500 E-Mini Futures Multiplier:** US$50
- **FTSE IDX One-Month Futures Contract Price:** £7,300
- **FTSE IDX Contract Multiplier:** £10
- **UK Fund to FTSE Beta:** 1.1

Stuyvesant also wants to be prepared to answer general questions from the committee on the economy and financial markets. One member always asks her view on what the Federal Reserve Board (Fed) rate move is expected to be at the upcoming Federal Open Market Committee (FOMC) meeting. Stuyvesant prefers to infer the likely move from the market pricing of Fed funds futures. The current federal funds rate is 1.88%, and the Fed futures contract is priced at 98.33.

## DC1 — Gupta (Currency Return, Hedging Costs, Overlay, Active Approaches)

Kamala Gupta, a currency management consultant, is hired to evaluate the performance of two portfolios. Portfolio A and Portfolio B are managed in the United States and performance is measured in terms of the US dollar (USD). Portfolio A consists of British pound (GBP) denominated bonds and Portfolio B holds euro (EUR) denominated bonds.

Gupta calculates a 19.5% domestic-currency return for Portfolio A and 0% domestic-currency return for Portfolio B.

## DC2 — Guten Investments (Currency Returns, Correlation, Overlay Programs)

Guten Investments GmbH, based in Germany and using the EUR as its reporting currency, is an asset management firm providing investment services for local high net worth and institutional investors seeking international exposures. The firm invests in the Swiss, UK, and US markets, after conducting fundamental research in order to select individual investments. Exhibit 1 presents recent information for exchange rates in these foreign markets.

**Exhibit 1**
Exchange Rate Data

|  | One Year Ago | Today |
|---|---|---|
| Euro-dollar (USD/EUR)* | 1.1330 | 1.1550 |
| Euro-sterling (GBP/EUR) | 0.8445 | 0.8550 |
| Euro-Swiss (CHF/EUR) | 1.0875 | 1.0780 |

\* The amount of USD required to buy one EUR

In prior years, the correlation between movements in the foreign-currency asset returns for the USD-denominated assets and movements in the exchange rate was estimated to be +0.50. After analyzing global financial markets, Konstanze Ostermann, a portfolio manager at Guten Investments, now expects that this correlation will increase to +0.80, although her forecast for foreign-currency asset returns is unchanged.

Ostermann believes that currency markets are efficient and hence that long-run gains cannot be achieved from active currency management, especially after netting out management and transaction costs. She uses this philosophy to guide hedging decisions for her discretionary accounts, unless instructed otherwise by the client.

Ostermann is aware, however, that some investors hold an alternative view on the merits of active currency management. Accordingly, their portfolios have different investment guidelines. For these accounts, Guten Investments employs a currency specialist firm, Umlauf Management, to provide currency overlay programs specific to each client’s investment objectives. For most hedging strategies, Umlauf Management develops a market view based on underlying fundamentals in exchange rates. However, when directed by clients, Umlauf Management uses options and a variety of trading strategies to unbundle all of the various risk factors (the “Greeks”) and trade them separately.

Ostermann conducts an annual review for three of her clients and gathers the summary information presented in Exhibit 2.

**Exhibit 2**
Select Clients at Guten Investments

| Client | Currency Management Objectives |
|---|---|
| Adele Kastner – A high net worth individual with a low risk tolerance. | Keep the portfolio’s currency exposures close, if not equal to, the benchmark so that the domestic-currency return is equal to the foreign-currency return. |
|  |  |
| Braunt Pensionskasse – A large private-company pension fund with a moderate risk tolerance. | Limited discretion which allows the actual portfolio currency risk exposures to vary plus-or-minus 5% from the neutral position. |
|  |  |
| Franz Trading GmbH – An exporting company with a high risk tolerance. | Discretion with respect to currency exposure is allowed in order to add alpha to the portfolio. |

## DC3 — Darden / Colgate & McIntire (Currency Contribution, Strategy Selection)

Mason Darden is an adviser at Colgate & McIntire (C&M), managing large-cap global equity separate accounts. C&M’s investment process restricts portfolio positions to companies based in the United States, Japan, and the eurozone. All C&M clients are US-domiciled, with client reporting in US dollars.

Darden manages Ravi Bhatt’s account, which had a total (US dollar) return of 7.0% last year. Darden must assess the contribution of foreign currency to the account’s total return. Exhibit 1 summarizes the account’s geographic portfolio weights, asset returns, and currency returns for last year.

**Exhibit 1**
Performance Data for Bhatt’s Portfolio Last Year

| Geography | Portfolio Weight | Asset Return | Currency Return |
|---|---|---|---|
| United States | 50% | 10.0% | NA |
| Eurozone | 25% | 5.0% | 2.0% |
| Japan | 25% | –3.0% | 4.0% |
| Total | 100% |  |  |

## DC4 — Wilson / Lee (Discretionary Hedging, Overlay and Strategic Positioning)

Wilson Manufacturing (Wilson) is an Australian institutional client of Ethan Lee, who manages a variety of portfolios across asset classes. Wilson prefers a neutral benchmark over a rules-based approach, with its investment policy statement (IPS) requiring a currency hedge ratio between 97% and 103% to protect against currency risk. Lee has assessed various currency management strategies for Wilson’s US dollar-denominated fixed-income portfolio to optimally locate it along the currency risk spectrum. The portfolio is currently in its flat natural neutral position because of Lee’s lack of market conviction.

## DC5 — Jiang (Futures Margin, NDF, Carry Trade, EM Currencies)

Li Jiang is an international economist operating a subscription website through which she offers financial advice on currency issues to retail investors. One morning she receives four subscriber e-mails seeking guidance.

Subscriber 1:
“As a French national now working in the United States, I hold US dollar-denominated assets currently valued at USD 700,000. The USD/EUR exchange rate has been quite volatile and now appears oversold based on historical price trends. With my American job ending soon, I will return to Europe. I want to protect the value of my USD holdings, measured in EUR terms, before I repatriate these funds back to France. To reduce my currency exposure I am going to use currency futures contracts. Can you explain the factors most relevant to implementing this strategy?”

Subscriber 2:
“I have observed that many of the overseas markets for Korean export goods are slowing, while the United States is experiencing a rise in exports. Both trends can combine to possibly affect the value of the won (KRW) relative to the US dollar. As a result, I am considering a speculative currency trade on the KRW/USD exchange rate. I also expect the volatility in this exchange rate to increase.”

Subscriber 3:
“India has relatively high interest rates compared to the United States and my market view is that this situation is likely to persist. As a retail investor actively trading currencies, I am considering borrowing in USD and converting to the Indian rupee (INR). I then intend to invest these funds in INR-denominated bonds, but without using a currency hedge.”

Subscriber 4:
“I was wondering if trading in emerging market currencies provides the more opportunities for superior returns through active management than trading in Developed Market currencies.”

## DC6 — Murimi / Konev (Volatility Strategy, Technical Analysis)

Renita Murimi is a currency overlay manager and market technician who serves institutional investors seeking to address currency-specific risks associated with investing in international assets. Her firm also provides volatility overlay programs. She is developing a volatility-based strategy for Emil Konev, a hedge fund manager focused on option trading. Konev seeks to implement an “FX as an asset class” approach distinct to his portfolio to realize speculative gains and believes the long-term strength of the US dollar is peaking.

## DC7 — Portfolio B Fund Manager (Static vs Dynamic Hedge)

The fund manager of Portfolio B believes that setting up a full currency hedge requires a simple matching of the current market value of the foreign-currency exposure in the portfolio with an equal and offsetting position in a forward contract.

## DC8 — Björk (Rebalancing Hedges, Option Collar, Roll Yield, Cross-Hedge)

Rika Björk runs the currency overlay program at a large Scandinavian investment fund, which uses the Swedish krona (SEK) as its reporting currency. She is managing the fund’s exposure to GBP-denominated assets, which are currently hedged with a GBP 100,000,000 forward contract (on the SEK/GBP cross rate, which is currently at 10.6875 spot). The maturity for the forward contract is December 1, which is still several months away. However, since the contract was initiated the value of the fund’s assets has declined by GBP 7,000,000. As a result, Björk wants to rebalance the hedge immediately.

Next Björk turns her attention to the fund’s Swiss franc (CHF) exposures. In order to maintain some profit potential Björk wants to hedge the exposure using a currency option, but at the same time, she wants to reduce hedging costs. She believes that there is limited upside for the SEK/CHF cross rate.

Björk then examines the fund’s EUR-denominated exposures. Due to recent monetary tightening by the Riksbank (the Swedish central bank) forward points for the SEK/EUR rate have swung to a premium. The fund’s EUR-denominated exposures are hedged with forward contracts.

Finally Björk turns her attention to the fund’s currency exposures in several emerging markets. The fund has large positions in several Latin American bond markets, but Björk does not feel that there is sufficient liquidity in the related foreign exchange derivatives to easily hedge the fund’s Latin American bond markets exposures. However, the exchange rates for these countries, measured against the SEK, are correlated with the MXN/SEK exchange rate. (The MXN is the Mexican peso, which is considered to be among the most liquid Latin American currencies). Björk considers using forward positions in the MXN to cross-hedge the fund’s Latin American currency exposures.

## DC9 — Delgado / Rivera (Hedge Instruments, Rolling Cash Flow, Roll Yield)

Rosario Delgado is an investment manager in Spain. Delgado’s client, Max Rivera, seeks assistance with his well-diversified investment portfolio denominated in US dollars.

Rivera’s reporting currency is the euro, and he is concerned about his US dollar exposure. His portfolio IPS requires monthly rebalancing, at a minimum. The portfolio’s market value is USD2.5 million. Given Rivera’s risk aversion, Delgado is considering a monthly hedge using either a one-month forward contract or one-month futures contract.

## DC10 — Nadela (Carry Trade, Bull Spread, Technical vs Fundamental)

Viaan Nadela, CFA, is a foreign exchange analyst at a US-based hedge fund that invests in emerging market currencies. Nadela has been asked to formulate a carry trade strategy. Exhibit 1 provides the details of the hedge fund’s exposure to emerging market currencies. The annual yield in the US is 2.211%.

**Exhibit 1**

| Country | Percentage of Overall Portfolio | Spot Rate | Six-Month Forward Rate | Annual Yield |
|---|---|---|---|---|
| Brazil | 20% | 5.41 BRL/USD | 5.71 BRL/USD | 1.562% |
| Russia | 25% | 74.15 RUB/USD | 74.85 RUB/USD | 3.255% |
| India | 25% | 74.50 INR/USD | 73.26 INR/USD | 2.356% |
| China | 30% | 6.46 CNY/USD | 6.37 CNY/USD | 5.667% |

The COVID-19 pandemic led many investors to flee from emerging market currencies due to concerns about exchange rate volatility. This flight to safety created several short positions in the Brazilian real against the US dollar, leading to the depreciation of the BRL. Zhang Lei, the hedge fund’s CEO, predicts that the Brazilian real will continue to depreciate and asks Nadela to create a bull spread using BRL/USD options from Exhibit 2.

**Exhibit 2**

| Strike | Call Option Price |
|---|---|
| $5.00 | $1.95 |
| $5.50 | $1.70 |
| $6.00 | $1.50 |
| $6.50 | $1.10 |
| $7.00 | $0.75 |

Nadela interviews a potential new hire, Camila Beth, and asks about her views on the future movements of the Indian and Chinese currencies. The newly elected government in India is promoting business growth through expansionary monetary policy. China continues to face pressure from developed countries over trade. However, China’s GDP is projected to grow at over 5%. Beth makes the following statements during her interview:

- **Statement 1:** Technical analysis involves projecting future exchange rate movements by examining current interest rates, inflation rates, and risk premium differentials.
- **Statement 2:** Implementation of expansionary monetary policy in India has contributed to the appreciation of the Indian rupee.
- **Statement 3:** A long CNY/USD put position would profit from a depreciation of the USD against the CNY.

## DC11 — Tong / WCP (Volatility, Negative Carry, Minimum-Variance Hedge)

Da-Shin Tong is a portfolio manager at Wise Currency Partners (WCP), a firm that provides research and advice on currency overlay strategies. Tong reviews each discretionary client’s IPS annually.

Arc Funds, a client of WCP, is domiciled in the United States and has several foreign currency exposures. Tong is meeting with Hannah Peters, chief economist at Arc Funds, to formulate market views. Peters makes the following recommendations to Tong.

- **Recommendation 1:** Traders should use currency options to move from net short volatility to net long volatility based on the recent economic turmoil created by the pandemic.
- **Recommendation 2:** As inflation in Germany is increasing rapidly, exposure to Germany should be increased to benefit from the expected depreciation in its currency.

They then examine data for selected USD currency pairs, as shown in Exhibit 1. Peters asks Tong to construct a negative carry trade using one of the currency pairs. The one-year interest rate in the United States is 2.21%.

**Exhibit 1**

| Country | Percentage of Portfolio | Currency Pair | Spot Rate | One-Year Yields | One-Year Implied Volatility | One-Year Forward Rate |
|---|---|---|---|---|---|---|
| Australia | 22% | AUD/USD | 1.3620 | 1.76% | 1.91% | 1.3612 |
| Germany | 30% | USD/EUR | 1.1866 | 2.19% | 0.30% | 1.1870 |
| Japan | 28% | JPY/USD | 109.68 | –0.17% | 1.53% | 106.92 |
| Mexico | 20% | MXN/USD | 18.90 | 4.50% | 9.25% | 19.72 |

Jackson Investments (JI), another client of WCP, is domiciled in the United Kingdom and uses the GBP as its reporting currency. The JI APAC Emerging Markets Fund has Hong Kong assets denominated in the Hong Kong dollar (HKD). Ashton Lloyd, the currency strategist at JI, is meeting with Tong to review emerging risks in the Asia-Pacific region and discuss hedging options. Lloyd is particularly worried about the Hang Seng Index’s recent one-week decline of 11% and asks Tong to evaluate hedging options for the Hong Kong dollar (HKD). Characteristics of the fund’s assets and the GBP and HKD are shown in Exhibit 2.

**Exhibit 2**

- **Fund assets:** HKD 185 million
- **Standard deviation of asset return in GBP σ(RGBP):** 5.10%
- **Standard deviation of asset return in HKD σ(RHKD):** 2.73%
- **Standard deviation of exchange rate return σ(RGBP/HKD):** 3.61%
- **Correlation ρ(RGBP; RGBP/HKD):** 0.26

## DC12 — HNW / Testa (Hedge Close-Out, Roll Yield, NDFs, Direct Hedge)

HNW Worldwide Inc. (HNW) is a wealth management company located in Chicago that specializes in very-high- and ultra-high-net worth clients. Pierre Fournier, a currency specialist at the company, is reviewing the file of a long-time client, Alex Testa, an American. Testa is a former engineer in the plastics industry who has been very successful in identifying potential takeover candidates during the consolidation of the plastics and packaging industry that has been occurring since about 2001.

As US opportunities declined in the plastics industry, Testa began to consider foreign investments. In the fall of 2008, he acquired a position in a South African plastics processor. Although the foreign currency return on the investment was impressive, his domestic return was substantially negative because of the foreign currency change against the US dollar.

Testa’s association with HNW began in 2009 as he was about to undertake a position in a Spanish packaging company. Fournier used Testa’s description of his investment process to develop an investment policy statement (IPS) for him, which included the following objectives and constraints:

Testa fully believed in his investment process, which was to be the primary focus in generating investment returns.

Testa was not overly risk averse.

Only the major currencies against the US dollar were likely to be used for the next several years.

Currency exposure would usually not extend beyond a six-month period.

Negative currency moves were to be rebalanced monthly if they exceeded 3% of the initial exposure.

Currency options could be used selectively—only if a strong market view was held when rebalancing a hedged position that had already proved profitable.

The anticipated positions would not have any associated income or liquidity requirements.

The cost of any hedging strategies used should be minimized and not materially affect the otherwise unhedged asset return.

In regard to the anticipated currency movements related to the Spanish packaging company investment, Fournier told Testa that HNW was forecasting that the euro was likely to appreciate against the US dollar in the next six months.

Testa agreed with HNW’s assessment of the future course of the USD/EUR exchange rate. His conclusion was derived from assessing various analysts’ reports and was centered on the following three reasons:

real interest rates were higher in euro-based countries,

the potential default of several euro-based countries from their excessive debt loads would lead to strong support measures from the IMF and the European Central Bank, and

the US balance of trade deficit with euro-based countries had continued to decline in the past several years and was expected to continue to decline.

The Spanish investment involved Testa acquiring 200,000 shares of a packaging company at EUR90 per share. He decided to fully hedge the position with a six-month USD/EUR forward contract. Details of the euro hedge at initiation and three months later are provided in Exhibit 1. Three months after the purchase, the shares had increased to EUR100 each, but Testa, believing that a still higher price was likely, maintained the position. He also indicated that he did not anticipate having to roll the hedge forward at its maturity. Both he and Fournier believed that further appreciation of the euro was quite likely, and the increase in the notional size of the position was hedged using currency options. They based their choices on the information provided in Exhibit 2.

**Exhibit 1 2009 Spot and Forward USD/EUR Quotes (Bid-Offer) and Annualized MRR Rates**

| Maturity | At Initiation | Three Months Later | At Maturity |
|---|---|---|---|
| Spot (USD/EUR) | 1.3935/1.3983 | 1.4106/1.4210 | 1.4189/1.4289 |
| 3-month forward | –8.1/–7.6 | –21.6/–21.0 |  |
| 6-month forward | –19.0/–18.3 | --- | –27.0/–26.2 |
| USD MRR | --- | 1.266% | --- |
| EUR MRR | --- | 1.814% | --- |

In 2014, Testa notified Fournier that he anticipated taking a position in a plastics producer located in India. Fournier warned him that the Indian rupee (INR) was a restricted currency and that currency management would not be as simple as in the other transactions handled previously. Fournier said that non-deliverable forwards (NDFs) on the rupee were available, as they were for the currencies of other developing countries. When asked how non-deliverable forwards differed from the contracts they had used in the past, Fournier responded:

NDFs are cash settled in the non-controlled currency of the currency pair,

NDFs have greater credit risk associated with them than outright forward contracts because the central banks in most developing countries are not as strong as they are in developed countries, and

the pricing of NDFs may differ from what is expected on the basis of arbitrage conditions.

In 2015, Testa informed Fournier that he had taken large positions in both a New Zealand firm and an Australian packaging firm. The positions were roughly equal in size in terms of the US dollar. Fournier informed Testa that the correlation between USD/AUD and USD/NZD was approximately 0.85. Given the size of the positions, Testa indicated that he wished to minimize any foreign exchange exposure.

## DC13 — Campos / Sabanai (Currency Return, Carry, Volatility Options, Hedge Ratios)

Marina Campos is a senior portfolio manager for Sabanai Investimentos in Sao Paulo, Brazil. Sabanai provides investment management and advisory services for high-net-worth and institutional clients. She is assisted by two portfolio analysts, Fabiana Traldi and Pedro Peixaria. Campos is meeting with Traldi and Peixaria to discuss the portfolios of three clients.

The first client is Gilvan Araujo Dias, a high-net-worth client who has given Sabanai responsibility for managing his foreign investments, which consist of equity investments in the United Kingdom and Germany. His other assets consist of equity and corporate bond investments in Brazil. Exhibit 1 summarizes information on Dias’s foreign portfolio holdings and exchange rates.

**Exhibit 1 Gilvan Araujo Dias, Information on Foreign Asset Holdings and Exchange Rates**

|  | UK Assets | German Assets | Spot Exchange Rates |  |
|---|---|---|---|---|
| Date | Value in GBP | Value in EUR | BRL/GBP | BRL/EUR |
| 1/1/2013 | 83,400,000 | 55,000,000 | 3.8729 | 3.0359 |
| 1/1/2014 | 86,000,000 | 51,000,000 | 4.1025 | 3.5142 |

Dias has asked whether it would be appropriate for him to hedge his foreign currency exposure. Campos raises the issue with Traldi and Peixaria. Traldi responds, “In the short run, if the correlation between foreign asset returns and foreign currency returns is negative, then there may be a need to hedge all foreign currency exposure. Alternatively, one could implement a currency overlay program in which the currency exposure is fully hedged, and currency alpha is generated separately. This currency overlay strategy will only be successful in adding value to the portfolio if the currency alpha has a high correlation with Brazilian equities and corporate bonds.”

The second client, BC Fundos de Pensao (BC), manages pension funds for numerous local companies and has currency exposure to the USD, the EUR, and the GBP. BC wants Sabanai to provide guidance on using active currency management strategies for the portfolios they manage. Peixaria has been assigned this task and has collected information on one-year yield levels in the United States, United Kingdom, and Eurozone, as well as one-year implied volatility for various currency pairs extracted from option pricing models. This information is provided in Exhibit 2.

**Exhibit 3 Spot and Forward Rates for AUD and CHF**
Panel A

| Country | One-Year Yield |
|---|---|
| United States | 0.05% |
| United Kingdom | 0.40% |
| Eurozone | 0.11% |

Panel B

| Currency Pair | One-Year Implied Volatility |
|---|---|
| USD/GBP | 5.50% |
| GBP/EUR | 7.50% |
| USD/EUR | 9.50% |

Peixaria indicates that his research suggests that the USD/EUR currency pair will become more volatile over the near term. He recommends that BC implement an options-based strategy using USD/EUR options to profit from the expected increase in volatility.

The third client is Fundo do Brasil (FB), a Brazilian sovereign wealth fund. FB has long equity positions in Australian and Swiss equities. Spot and forward market currency information for AUD and CHF is provided in Exhibit 3. FB managers have asked Campos for advice on whether it would be appropriate to hedge the currency exposure with forward contracts in AUD and CHF. Campos indicates that she will examine the use of forward contracts to hedge currency exposure.

**Exhibit 3 Spot and Forward Rates for AUD and CHF**

| Currency Pair | Currency Spot Rate | Six-Month Forward Rate | Six-Month Forecast Spot Rate |
|---|---|---|---|
| BRL/AUD | 2.1046 | 2.1523 | 2.0355 |
| BRL/CHF | 2.5309 | 2.4641 | 2.5642 |

Traldi suggests that the use of put options might be a better way to hedge currency exposure. Campos responds that there are better options-based strategies that can exploit market views and reduce hedging costs. She suggests the following strategies:

- **Strategy 1:** For AUD exposure, the appropriate strategy is to be long put options at a strike price of 2.1046, short put options with a strike price 2.1006, and short call options with a strike price of 2.1456.
- **Strategy 2:** For CHF exposure, the appropriate strategy is to be long put options at a strike price of 2.5309, short put options with a strike price 2.5049, and short call options with a strike price of 2.5669.

