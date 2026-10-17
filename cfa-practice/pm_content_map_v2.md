# CFA Level III — Content Map v2

Compiled Oct 17, 2026. Covers the 5 content sections (Ethics excluded): Asset Allocation, Derivatives and Risk Management, Performance Measurement, Portfolio Construction, Portfolio Management Pathway.

**What changed from v1:** every formula now defines all its terms. The topics your q-banks hit hardest are expanded into full "Know cold" blocks (tables, worked patterns, trap lists). Thin topics stay short, under "Also tested".

**How to use it:** each module has the same layout.
- **Bank weight:** how many bank questions touch each topic. A bigger number means study it first. It counts questions, not exam weight.
- **Know cold:** the high-frequency material. Aim to not need the textbook for these.
- **Also tested:** lower-frequency points, one line each.
- **Formulas:** every symbol defined.
- **Glossary:** one-line definitions.

**How it was built:** facts were checked against the textbook PDFs in the project (contents, tables, worked examples) and against the answer keys in your banks. Where a point comes only from a bank's answer key and not the book, it says "bank key". Worked numbers are ones I recomputed from the bank or book. If something isn't here, I couldn't verify it.

**Coverage limits**
- This is a map, not a replacement for a module. Subsections your banks never touched are mostly not listed.
- Modules with no bank questions are outlined from the book only: Portfolio Construction LM7 (SWF case) and PM Pathway LM8 (endowment case).
- Q-numbers refer to each bank's own numbering; the tags (EQ, FI, AL, WM, IN, TR, PA, PB, GP, DA, DB, DC, QA–QG) match the bank files.
- Some answer keys look shaky and are flagged where used (for example the EM debt thresholds in CME LM2 come from the bank key, not the book).

## Module index

| Section | Module | Bank | Qs |
|---|---|---|---|
| 1 Asset Allocation | LM1 CME Part 1: Framework and Macro | cme_qbank | 105 across LM1–2 |
| 1 Asset Allocation | LM2 CME Part 2: Forecasting Asset Class Returns | cme_qbank | (in the 105) |
| 1 Asset Allocation | LM3 Overview of Asset Allocation | aa_qbank | 134 across LM3–5 |
| 1 Asset Allocation | LM4 Principles of Asset Allocation | aa_qbank | (in the 134) |
| 1 Asset Allocation | LM5 AA with Real-World Constraints | aa_qbank | (in the 134) |
| 2 Derivatives | LM1 Options Strategies | dv_qbank (DA) | 57 |
| 2 Derivatives | LM2 Swaps, Forwards, Futures | dv_qbank (DB) | 43 |
| 2 Derivatives | LM3 Currency Management | dv_qbank (DC) | 53 |
| 3 Performance | LM1 Portfolio Performance Evaluation | pm_qbank (PA) | 53 |
| 3 Performance | LM2 Investment Manager Selection | pm_qbank (PB) | 67 |
| 3 Performance | LM3 GIPS | pm_qbank (GP) | 46 |
| 4 Portfolio Construction | LM1 Equity PM | pc_qbank (EQ) | 24 |
| 4 Portfolio Construction | LM2 Fixed-Income PM | pc_qbank (FI) | 35 |
| 4 Portfolio Construction | LM3 Alternatives | pc_qbank (AL) | 49 |
| 4 Portfolio Construction | LM4 Private Wealth | pc_qbank (WM) | 35 |
| 4 Portfolio Construction | LM5 Institutional Investors | pc_qbank (IN) | 47 |
| 4 Portfolio Construction | LM6 Trading Costs and Electronic Markets | pc_qbank (TR) | 32 |
| 4 Portfolio Construction | LM7 Case: SWF | none | 0 |
| 5 PM Pathway | LM1 Index-Based Equity | pw_qbank (QA) | 36 |
| 5 PM Pathway | LM2 Active Equity: Strategies | pw_qbank (QB) | 57 |
| 5 PM Pathway | LM3 Active Equity: Portfolio Construction | pw_qbank (QC) | 55 |
| 5 PM Pathway | LM4 LDI and Index-Based Fixed Income | pw_qbank (QD) | 58 |
| 5 PM Pathway | LM5 Yield Curve Strategies | pw_qbank (QE) | 40 |
| 5 PM Pathway | LM6 Credit Strategies | pw_qbank (QF) | 82 |
| 5 PM Pathway | LM7 Trade Strategy and Execution | pw_qbank (QG) | 58 |
| 5 PM Pathway | LM8 Case: Endowment | none | 0 |

---

# SECTION 1 — Asset Allocation (cme_qbank 105 Qs + aa_qbank 134 Qs)

Book: 5 modules. LM1–LM2 are Capital Market Expectations (cme_qbank); LM3–LM5 are Asset Allocation (aa_qbank). Question counts below are how many bank questions touch each topic, so you can see what gets hit hardest.

## LM1 — Capital Market Expectations, Part 1: Framework and Macro (cme_qbank)

**Bank weight:** business cycle / yield curve / policy mix / shocks ≈ 25 Qs (the biggest block) · CME process, data problems and biases ≈ 12 · Taylor rule 4 · inflation/deflation positioning 4 · forecasting approaches 6.

### Know cold

**1. Business cycle phase → rates, curve, policy, assets.** The single most-tested table. Identify the phase from the clues, then recall the asset implication.

| Phase | Short rates | Yield curve | Policy | Assets |
|---|---|---|---|---|
| Initial recovery | low, bottoming | steep (steepest on the cusp of recovery) | stimulative | best phase for equities with early expansion; cyclicals, small caps, high yield and EM attract investors |
| Early expansion | moving up | short end steepens, back end flattens, overall flattening | withdrawing stimulus (less stimulative) | equities still favorable |
| Late expansion (late upswing) | above average and rising | flattening from the longest maturities inward | becoming restrictive | stocks rise but with high volatility; cyclicals may underperform; inflation hedges (commodities) outperform |
| Slowdown | at or near the **peak** | flat to inverted | tight | interest-sensitive and "quality" stable-earnings stocks do best; market may fall; bond yields top out, then start falling |
| Contraction | falling | steepens substantially | progressively more stimulative | credit spreads widen and stay wide until a trough; stocks fall early, then usually rise before recovery is visible |

- Short rates peak in **slowdown** (not early expansion). Buy equities approaching the trough: multiples and expected earnings growth are low and about to rise, term and credit premiums are high.
- Inflation and short rates are procyclical: inflation accelerates late in the cycle once the output gap has closed and decelerates when a large output gap pushes down wages and prices (recession and early recovery).
- Trap pairs: curve "steepens substantially" + spreads widening = **contraction**, not slowdown. Rates above average and rising + policy becoming restrictive = **late** expansion.

**2. Policy mix and the yield curve.** Persistent policies affect the *level* of rates; the cycle drives the *slope*.
- Loose fiscal (big deficits) raises real rates (private sector must save more or foreign capital must be attracted); tight fiscal lowers them. Persistently loose monetary raises actual and expected inflation (holding nominal rates down is self-defeating); persistently tight monetary lowers inflation and so nominal rates.

| | Fiscal loose | Fiscal tight |
|---|---|---|
| **Monetary loose** | high real + high inflation = **high** nominal | low real + high inflation = **mid** nominal |
| **Monetary tight** | high real + low inflation = **mid** nominal | low real + low inflation = **low** nominal |

- A "mid" cell means the net effect on nominal rates is ambiguous (could be higher or lower). Bank Q11 (loose monetary, tight fiscal) answer is "either high or low", which matches this table.
- Slope of the curve = expected path of short rates + a maturity (term) premium. Easing in a contraction steepens the curve. Debt-management and bond-supply effects on the curve are real but temporary, and falling private borrowing offsets added government supply.
- Pro-growth policy (less bureaucracy, tax incentives for training/human capital, transfers that stabilize disposable income, progressive taxes that act as automatic stabilizers) raises or supports trend growth. Significant, unexpected, persistent policy change acts as an exogenous shock to the expected trend rate.

**3. Fixed exchange rate trilemma and rate linkages.** A country cannot simultaneously have a **fixed exchange rate, free capital flows and independent monetary policy**: pick two. It is about monetary (not fiscal) independence.
- Two countries share the same default-free yield curve only if capital mobility is perfect **and** the peg is credible forever. Add capital controls → rates can diverge. Let the currency float → independent policy; rates diverge and the link becomes expectational (higher rates where the currency is expected to depreciate). Credibility lost → yield differentials appear.
- Peg at risk and the weak-side currency falling → that country's bond yields **rise** (not drop). A currency that is undervalued and expected to rise → that country's bond yields are lower than the other's. Real yields can differ but tend to move together.
- Hot money: inflows → central bank buys FX and sells government securities (sterilizing); outflows → sells FX and buys government securities. Inflows also tempt firms to fund long-term investment with short-term money. Support to a currency ranks private equity (most committed) > public equity > debt (least; it must be serviced/refinanced, so a debt-heavy country is most vulnerable to a currency crisis).
- Net exports identity: higher government spending/lower taxes lowers the government balance, so with private net saving unchanged **net exports fall**.

**4. Taylor rule (4 calculation Qs; the traps are the whole point).**
- Real target rate = r_neutral + 0.5(Ŷe − Ŷtrend) + 0.5(πe − πtarget). Nominal target = that real rate + πe.
- Traps: (a) start from the **neutral** rate, not the current policy rate; (b) if only nominal GDP growth is given, expected real GDP growth = nominal growth − inflation; (c) keep the 0.5 weights on both gaps; (d) gap = expected minus trend/target (not the reverse); (e) ignore irrelevant rows such as earnings growth; (f) don't forget to add πe for the nominal version.

**5. Equity return build-up and trend growth.**
- Equity return = nominal GDP growth + Δ(profit share of GDP) + Δ(P/E) + dividend yield. Nominal GDP growth = Δlabor input + Δlabor productivity + inflation. Historical growth/inflation figures in the vignette are distractors.
- Long-run growth in total equity value is linked to GDP growth, because profit share and P/E cannot keep rising or falling forever.
- Higher trend growth from **productivity** → faster long-run earnings growth (good for equities) and somewhat higher real rates (bad for existing bonds). Developing economies need bigger adjustments to historical trend growth than developed ones (faster structural change).
- Exogenous shocks: oil shocks and financial crises are the two most common macro shocks. Financial crises hurt long-run growth most; natural disasters can raise long-run growth if capacity is replaced with more efficient capacity; geopolitical shocks can raise or lower growth. A country that cut oil to under 25% of its energy supply is least exposed to an oil shock.

**6. Forecasting approaches (economy).**

| Approach | Strengths | Weaknesses |
|---|---|---|
| Leading indicators (composite index, diffusion index) | simplest, few variables, focus on turning points | data revised (look-ahead bias), false signals, over-fitting in sample, close to binary guidance |
| Econometric model | consistent and disciplined, quantifies impact of exogenous variable changes, handles many variables | complex and time-consuming, needs forecasts of exogenous inputs, mis-specification (relationships change), false sense of precision, poor at turning points |
| Checklist | most flexible, widest data, limited complexity | subjective, no consistency across items or over time, time-consuming |

- A structural model plus a diffusion index inherits both "false precision" and "false signals".

**7. Biases and data problems (about 12 Qs).** Match the vignette behavior to the right name.

| Name | What it is | Typical vignette |
|---|---|---|
| Anchoring | disproportionate weight on the **first** information or number, then insufficient adjustment | initial estimate dominates |
| Status quo | forecasts perpetuate recent observations / avoid change | refuses to underweight after a strong quarter |
| Confirmation (confirming-evidence trap) | seek and overweight evidence that supports the preferred view | one-sided evidence |
| Overconfidence | overestimating forecast accuracy, ignoring bad scenarios | |
| Prudence | tempering forecasts so they do not look extreme; overcautious | expects a big correction but issues a "neutral" outlook; skews to lower return estimates "as a safety measure" |
| Availability (recallability) | influenced by vivid or recent events | career started in a crash, now overly cautious |
| Survivorship | data contains only surviving firms | index whose members fail or merge out |
| Data mining | repeated searching until something is "significant" | fix: economic rationale + out-of-sample test |
| Time period | sample window not representative | |
| Regime change / nonstationarity | longer data may mix regimes with different statistics | |

- Classic distractor: a description of "memory of dramatic events" is **availability**, not anchoring; a description of "overweight supporting evidence" is **confirmation**, not prudence.
- Smoothed/appraisal data: volatility **and correlations** are both biased **down** (so diversification looks better than it is); true variance > observed.
- High-frequency (daily) data improve precision of variances, covariances and correlations but **not** the mean, and are more sensitive to asynchronism.
- Ex post risk can be a biased measure of ex ante risk (survey projections more volatile than realized data).
- Correlation ≠ causation: A predicts B, B predicts A, C drives both, or it is spurious. Ignoring conditioning information (e.g., beta and market premium differ in expansion vs recession) overstates unconditional expected returns.
- Negative rates: hard to justify a negative rate as the risk-free building block; historical data and models even less reliable (statistical models often fail outside the conditions they were calibrated on); relationships such as the yield curve are distorted by other policies (QE).

**8. Inflation / deflation positioning.**
- Persistent **deflation**: high-quality bonds up (purchasing power of cash flows rises, but lower-quality credit is impaired); real estate down (rents and values fall, worst for low-quality properties that must cut rents); asset-intensive, commodity-producing and leveraged firms hurt; cash unattractive (short rates fall) unless a zero lower bound makes it attractive.
- Inflation above the expected range hurts **bonds**; inflation inside the expected range is not a drag on equities. The bank key accepts that equities do well once inflation returns to the expected level.

### Also tested
- CME's purpose: inputs to strategic and tactical allocation; **internal consistency** (cross-sectional across asset classes and intertemporal across horizons) matters more than accuracy on any one asset class.
- Seven steps: (1) specify expectations needed and horizons, (2) research the historical record, (3) specify methods/models and information needs, (4) determine best sources, (5) interpret the current environment, (6) **provide and document** the expectations, (7) **monitor** outcomes vs forecasts and feed back. Bank trap: steps 1–5 can be done; steps 6 and 7 are the usual "missing steps".
- Measurement problems: transcription errors, changing definitions and calculations, lack of timeliness, asynchronous observations, fat tails and skewness.
- Cycle information is most useful over horizons that match expansion/contraction phases; monetary policy aims to be countercyclical, fiscal policy has automatic stabilizers.

### Formulas
- **Equity return (macro):** R = g_NGDP + Δ(E/GDP) + Δ(P/E) + D/P, where g_NGDP = nominal GDP growth = Δlabor input + Δlabor productivity + inflation; Δ(E/GDP) = change in profit share; Δ(P/E) = valuation change; D/P = dividend yield.
- **Taylor rule:** r* = r_neutral + 0.5(Ŷe − Ŷtrend) + 0.5(πe − πtarget); i* = r* + πe, where r_neutral = neutral real policy rate, Ŷe = expected real GDP growth, Ŷtrend = trend real GDP growth, πe = expected inflation, πtarget = central bank target inflation, i* = nominal policy rate.
- **National income identity:** (X − M) = (S − I) + (T − G), where X − M = net exports, S − I = private saving minus investment, T − G = government balance (taxes minus spending).

### Glossary
- **Automatic stabilizers:** transfers and progressive taxes that cushion income in downturns and take more in upturns. **Hot money:** short-term capital chasing rates or currency moves. **Nonstationarity:** statistical properties differ across parts of the data series. **Output gap:** actual minus potential output. **Diffusion index:** share of leading indicators that are rising.

## LM2 — Capital Market Expectations, Part 2: Forecasting Asset Class Returns (cme_qbank)

**Bank weight:** equity returns (Grinold–Kroner, Singer–Terhaar, ERP) ≈ 14 Qs · fixed income and EM debt ≈ 12 · real estate ≈ 9 · currency/FX ≈ 9 · VCV / shrinkage / ARCH ≈ 5.

### Know cold

**1. Grinold–Kroner (calculation shows up repeatedly).**
- E[Re] ≈ D/P − %ΔS + %ΔE + %ΔP/E, where D/P = dividend yield, %ΔS = change in shares outstanding (negative when the firm repurchases), %ΔE = nominal earnings growth, %ΔP/E = repricing return.
- Build the pieces: income return = D/P − %ΔS (**net repurchases add** to return); nominal earnings growth = real earnings growth (real GDP growth plus any stated premium) + inflation; repricing = (expected P/E − **current** P/E) ÷ current P/E (not an older starting P/E).
- Typical wrong answers: subtracting repurchases, ignoring inflation, using the risk-free rate (a distractor), starting repricing from the wrong P/E.
- Very-long-run plausible assumptions: %ΔE = nominal GDP growth, %ΔS = 0, %ΔP/E = 0. A perpetual 2% net repurchase would eventually eliminate all shares; a perpetually rising P/E implies an unbounded price per unit of earnings.
- Equity risk premium: **historical** = historical equity return − historical government bond yield; **expected** = Grinold–Kroner expected return − **current** government yield (not the historical average).

**2. Singer–Terhaar (international CAPM with partial integration).**
- Fully integrated risk premium = σ × ρ × Sharpe_GIM, where σ = asset volatility, ρ = correlation with the global investable market (GIM), Sharpe_GIM = RP_GIM ÷ σ_GIM. Fully segmented = σ × Sharpe (asset's own).
- Blend: RP = integration × integrated RP + (1 − integration) × segmented RP. Then add the illiquidity premium if given, then the **risk-free rate** to get the expected return.
- Worked pattern from the bank (real estate): 16% × 0.34 × 0.36 = 1.96% integrated; 16% × 0.36 = 5.76% segmented; 0.6 × 1.96 + 0.4 × 5.76 = 3.48%; + 3.1% rf = 6.58%.
- Traps: reversing the weights; stopping before adding rf or the illiquidity premium; "perfectly integrated" means use only the integrated RP; using the covariance as if it were a Sharpe ratio.
- **Integration ↑ → required return ↓ → prices adjust up → delivered return higher than previously expected** → shift capital toward the market that is becoming more integrated (funded from a market whose integration is unchanged). A market becoming more segmented has a higher required return, so prices fall and delivered return is lower than expected: don't add.
- A higher expected return on an industry may only be compensation for higher systematic risk; you cannot call it "attractive on valuation" without an independent fair-value estimate.
- Beta = Cov(Ri, RM) ÷ Var(RM) — divide by the *market's* variance (Var of the GIM), not the asset's own.

**3. Fixed-income building blocks and horizon math.**
- E(R) = default-free short rate + term premium + credit premium + liquidity premium. Only the short-term default-free rate is (potentially) observable; term and credit premiums cannot be read straight from spreads.
- Which premium dominates: 2y/10y sovereign spread in a developed country = **term premium**; a corporate over its own sovereign = credit + liquidity. A downgrade raises the credit premium; a widening of sovereign vs next-best government agency yield signals a higher liquidity premium; tightening raises the default-free rate. All three push required return up.
- Equal-weighted portfolio problems: compute each bond's return (rf + the premiums it carries) and average; spread over the 1-year bond is the average of the premiums.
- **Horizon vs Macaulay duration (Q62):** after a one-time rate shift on a flat curve, if the horizon = Macaulay duration the price loss offsets the extra reinvestment income, so realized return ≈ the starting YTM. Horizon shorter than duration → price loss dominates (lower return); longer → reinvestment gain dominates (higher).
- Term premium rises when high growth and inflation are driven by aggregate **supply** (bonds then correlate positively with growth, so they do not hedge recessions) and because higher inflation brings more inflation uncertainty.
- DCF/YTM is the only method precise enough for trading individual bonds; YTM improves as a forecast when reinvestment and horizon valuation are included.

**4. Emerging-market debt and equity risks.**
- EM debt risk = **ability to pay** (economic: fiscal discipline, foreign borrowing, tax base, industry concentration, capital flight) and **willingness to pay** (political/legal: weak property rights and contract enforcement, instability). Willingness to pay is the extra risk vs developed debt; currency and interest-rate risk exist in both.
- Warning thresholds used by the bank key (the vignette itself didn't state them): fiscal deficit > 4% of GDP · debt > 70% of GDP · current-account deficit > 4% of GDP (a persistent deficit above ~4% suggests weak competitiveness) · FX reserves < 100% of short-term external debt. A country failing all of them is not buyable without further scrutiny. Ratio math: debt/GDP = (short + medium/long-term external debt) ÷ GDP; reserves ÷ short-term debt.
- "All EM and frontier debt carries the same risk" is wrong: many EM countries are healthy.
- EM **equity** adds **corporate governance risk** on top of the economic, political and legal risks debt holders face: expropriation by insiders, dominant holders or the state; misuse of assets; weak disclosure and accounting; regulatory uncertainty, nationalization. A falling per-capita income is a political-risk flag; a credible move to IFRS is a positive.

**5. Real estate.**
- Long-run E(R) = cap rate + NOI growth (≈ nominal GDP growth). One-year or finite horizon: E(R) = cap rate + NOI growth − %ΔCap rate. **Falling cap rate → higher values → adds to return.** Worked: 4.6% + (2.0% real + 2.5% inflation) − (4.5 − 4.6)/4.6 = 11.3%.
- Cap rate = NOI ÷ property value. It is *not* the cash-flow yield (some operating income may be reinvested). Cap rate < discount rate (discount rate = cap rate + growth). Higher cap rates for riskier, lower-quality, worse-location property.
- Premiums: a real-estate investment contains **term** (fixed-term lease, bond-like), **credit** (tenant risk), **equity** (property value and rent/vacancy uncertainty), and liquidity premiums; so its risk premium sits between corporate bonds and equities.
- Data problems: infrequent trades → appraisals; heterogeneous assets; appraisal smoothing → volatility understated, correlations distorted. When forecasting, unsmooth the data (otherwise it distorts every asset class in the equilibrium model), add a liquidity premium (equilibrium models assume full liquidity), and remember local-jurisdiction returns track local factors.
- REITs: look like stocks over short horizons (do not diversify an equity portfolio over a year), more like direct real estate over multi-year horizons.
- Private-real-estate smoothing model: observed return = weighted average of current true return and previous observed return → true variance > observed.

**6. Currency forecasting.**
- Two lenses: **trade in goods and services** (net trade flows relative to larger financing flows, inflation differentials/PPP, sustainability of current-account imbalances) and **capital flows** (capital chases the highest risk-adjusted return: relative short rates and term, credit, equity and liquidity premiums; hot money; FX as the adjustment mechanism). Trade flows are small relative to financing flows, so capital flows tend to matter more.
- PPP: expected %ΔFX ≈ inflation differential; the **higher-inflation** currency depreciates. Poor over short and medium horizons, better over multi-year horizons. If inflation exceeded others' by 5%/yr and the FX didn't move, the currency is **overvalued**.
- Rising current-account deficit (secular trend) → higher required returns, lower asset prices → shift capital to countries with rising surpluses or narrowing deficits.
- Direction for a stronger currency: lower inflation, higher/rising short rates, higher growth, FDI-friendly laws and inflows (FDI signals long-term commitment), current-account surplus, lower debt/GDP.

**7. Covariance estimation, shrinkage, ARCH.**
- Sample VCV is **unbiased and consistent** but unreliable when assets are many: rule of thumb ≥ 10 observations per asset (20 assets → 200; ten years of monthly data = 120 is too few). Distinct covariances = N(N−1)/2 (200 assets → 19,900; N × K = 800 factor sensitivities is what a 4-factor model estimates; N² double counts).
- Factor models impose structure and cut parameters; risk: portfolios that falsely appear riskless if an asset is fully explained by the factors or factors are redundant.
- **Shrinkage** = weighted average of the sample (historical) estimate and a structured target (factor-based); it improves efficiency (lower mean squared error). Weighting two matrices by analyst belief (e.g., historical more than factor-based) is shrinkage, not "historical" or "time series" estimation.
- **ARCH:** variance modeled as a function of its own recent history/recent shocks; captures volatility clustering; shocks arise from unexpectedly large or small returns; extends to multiple assets (can estimate a VCV matrix).

### Formulas
- **Grinold–Kroner:** E[Re] = D/P − %ΔS + %ΔE + %ΔP/E, with %ΔE = real earnings growth + inflation; %ΔP/E = (P/E_expected − P/E_current) ÷ P/E_current.
- **Singer–Terhaar:** RP = IntegrationLevel × (σ × ρ × Sharpe_GIM) + (1 − IntegrationLevel) × (σ × Sharpe_asset); E(R) = RP + illiquidity premium (if any) + rf; Sharpe_GIM = (R_GIM − rf) ÷ σ_GIM.
- **Beta:** β = Cov(Ri, RM) ÷ Var(RM).
- **Real estate:** E(R) = NOI/Value + NOI growth − %ΔCap rate (long run: drop the cap-rate term).
- **Equity risk premium:** E(R_equity) − current government bond yield.
- **Distinct covariances:** N(N − 1)/2 (N = number of assets).
- **PPP:** expected %ΔS ≈ π_domestic − π_foreign (S in domestic price of foreign currency, so a higher domestic inflation → foreign currency appreciates, domestic depreciates).

### Glossary
- **GIM:** global investable market portfolio. **Cap rate:** NOI ÷ value. **NOI:** net operating income. **Shrinkage:** blend of a sample estimate and a target. **Volatility clustering:** high-vol periods follow high-vol periods. **Sterilization:** central bank offsets FX intervention's effect on domestic liquidity. **Uncovered interest rate parity:** high-yield currencies should depreciate by the yield gap (fails empirically; carry trades earn on average).

---

## LM3 — Overview of Asset Allocation (aa_qbank)

**Bank weight:** governance and IPS review ≈ 15 Qs · economic balance sheet 8 · asset-class specification and factors ≈ 10 · the three approaches (classification Qs spread through the bank) · behavioral biases 8.

### Know cold

**1. The three approaches (identify from the risk measure).**

| Approach | Risk is defined as | Core idea | Who uses it |
|---|---|---|---|
| Asset-only | volatility of portfolio return | efficient use of asset risk (MVO, Sharpe ratio) | institutions and individuals |
| Liability-relative | **shortfall**: assets insufficient to pay obligations | fund the liabilities, then invest the surplus for growth | institutions with liabilities (DB plans, insurers, banks) |
| Goals-based | **probability of failing each goal** | one sub-portfolio (module) per goal, each with its own horizon and required success rate | individuals; also institutions that segment by line of business |

- Question patterns: "volatility as primary risk" → asset-only; "insufficient assets to pay obligations" → liability-relative; "multiple objectives, each with its own probability of success" → goals-based. "Efficient use of asset risk" is always asset-only.
- Individuals have all three approaches available; goals-based is the natural fit when they have several distinct goals.

**2. Economic balance sheet.**
- Economic net worth = (financial assets + **extended assets**) − (financial liabilities + **extended liabilities**).
- Extended assets: human capital, PV of expected pension income, PV of expected inheritances. Extended liabilities: PV of lifetime consumption and PV of each goal (education, gifts).
- Traps seen: home is an asset and the mortgage a liability; **restricted shares still count as an asset**; for an endowment, the balance sheet compares available funds and pledges (including a new gift) vs current and future obligations and any new project.
- Link to risk: check the **correlation between financial assets and human capital** (employer stock plus employer salary doubles up exposure). A large, bond-like human capital stream gives greater risk capacity in the financial portfolio. When optimizing on economic wealth, constrain non-tradable assets at their current weights.

**3. Governance and the IPS (about 15 Qs; appears in every vignette type).**
- Governance = who decides what: articulate objectives, allocate **decision rights** by expertise/capacity, set the process for IPS and SAA approval, build the reporting framework, audit periodically. Elements to recall: clear decision rights, expertise, continuity, periodic audits.
- **Governance ≠ management**; governance applies to individuals as well as institutions.
- When many external managers are used, governance resources become the binding constraint.
- IPS/SAA **review triggers: changes in goals, constraints, or beliefs** (a changed time horizon, e.g., early retirement, is a constraint change; a change in liabilities/liquidity need changes the strategic allocation). A glide path (target-date fund) pre-schedules changes by milestone.

**4. Asset class specification (five criteria) and factors.**
- A good asset class is **homogeneous** (similar attributes within; mixing bonds with real estate fails this), **mutually exclusive**, **diversifying** (no pairwise correlation above about 0.95, and not collinear with a linear combination of other classes), contains a **preponderance of world investable wealth**, and has the **capacity to absorb a meaningful portion** of the portfolio (liquidity, transaction costs).
- Too many narrow classes → overlapping risk sources and unreliable inputs. Overlapping risk factors across classes → use a multifactor risk model.
- An asset class is a market-beta premium; a strategy is skill (alpha).
- Risk factors: systematic, earn a premium, **not directly investable**; factor portfolios are self-financing long/short, with low correlation to the market and to each other (like factors in a multifactor model; based on observed premiums/anomalies).
- Global market portfolio (GMP) is the neutral starting point; typical investor deviations are home-country bias, value, small cap, EM tilts.

**5. Behavioral biases (also important in LM5).** Loss aversion/disposition (sell winners early, hold losers), mental accounting (separate buckets; goals-based accommodates it), availability (vivid experience), representativeness/recency (extrapolate recent returns), illusion of control (concentrated employer stock), endowment effect (value what you own), framing. Details in LM5.

### Also tested
- Two passive/active dimensions: how the SAA is managed (static vs tactical/dynamic) and how each asset class is implemented (active vs passive).
- Risk budgeting basics: decide which risks and how much; active risk can be budgeted at the overall level (vs SAA) and by asset class (vs benchmark).
- Rebalancing frameworks: calendar vs range-based (fixed width, percentage, volatility-based); range-based gives tighter control.

### Formulas
- **Economic net worth** = (FA + HC + other extended assets) − (FL + PV of consumption + PV of goals), where FA = financial assets, HC = human capital, FL = financial liabilities.
- **Funding ratio** = MV of assets ÷ PV of liabilities; **surplus** = assets − liabilities.

### Glossary
- **IPS:** investment policy statement. **SAA:** strategic asset allocation (long-term policy weights). **Extended assets/liabilities:** items beyond market-tradable holdings (human capital, PV of goals). **Risk budgeting:** deciding how much of each risk to take and where.

## LM4 — Principles of Asset Allocation (aa_qbank; heaviest module)

**Bank weight:** asset-only models (MVO, reverse optimization, Black–Litterman, resampling, heuristics) ≈ 24 Qs · goals-based ≈ 14 · liability-relative ≈ 13 · rebalancing ranges ≈ 8 · safety-first / Monte Carlo ≈ 8 · risk budgeting ≈ 7.

### Know cold

**1. MVO and its remedies (24 Qs).**
- Utility: U = E(R) − 0.005 × λ × σ² with σ expressed in percent (equivalently E(R) − ½λσ² with σ in decimals). Compute U for every candidate; a high risk-aversion λ does not automatically mean the lowest-risk portfolio wins, but at λ = 8 variance is heavily penalized and the low-risk allocation can win despite the lowest return. Surplus optimization is the same formula on surplus return and surplus variance.
- Efficient frontier slope falls from left to right; kinks are corner portfolios. Typical constraints: weights sum to 1, long-only. To compare candidate MVO portfolios for a target return, combine each with the risk-free asset: the **highest Sharpe** delivers the target with the least risk.
- Criticisms: highly **input-sensitive** (especially expected returns) → **concentrated** allocations; single period; ignores skew/kurtosis, liabilities, taxes and costs.
- Remedies and how to recognize them:
  - **Reverse optimization**: inputs are market-cap weights + covariances + risk aversion; output is *implied* expected returns (CAPM-like: Rf + β × market premium). Opposite of MVO (returns in, weights out).
  - **Black–Litterman**: reverse-optimization returns tilted by the investor's views. Allocation close to market weights with a view overlay = B-L.
  - **Resampling**: average many MVO runs on resampled inputs; criticisms: still inherits the input error, over-diversifies riskier allocations, complex. Concentrated, far-from-market weights = plain MVO on historical inputs.
  - Weight constraints, and non-normal/downside optimization.
- Illiquid assets in MVO: indexes misstate risk and return (smoothing), no cheap passive vehicles, idiosyncratic risk not diversified by liquid proxies, the vehicle differs from the asset class; they do carry a return premium and diversification.

**2. Risk budgeting and risk parity (7 Qs).**
- MCTR_i (marginal contribution to total risk) = β_i × σ_p; ACTR_i (absolute contribution) = w_i × MCTR_i; ACTRs sum to portfolio volatility.
- Optimal risk budget: (R_i − Rf) ÷ MCTR_i is the **same for every asset and equals the portfolio's Sharpe ratio**. Given two assets with equal ratios you can back out Rf.
- Risk parity: every asset contributes equally to risk, w_i × Cov(r_i, r_p) ÷ σ_p² = 1/n, so low-risk assets get higher weights.

**3. Liability-relative approaches (13 Qs).**
- Liability characteristics: fixed vs contingent cash flows, legal vs quasi-liabilities (obligation vs mission-driven), duration/convexity, drivers (inflation, rates, salary growth), timing and longevity, regulation.
- PV of liabilities rises with higher salary growth, a **lower** discount rate, and earlier payments (older participants). For an underfunded plan equal dollar declines in assets and liabilities **lower** the funding ratio.
- Which method:
  - **Surplus optimization**: single period, works at any funding ratio (including underfunded conservative plans).
  - **Hedging / return-seeking (two-portfolio)**: needs a funding ratio ≥ 1 or new contributions, and a hedge that matches the liability drivers (nominal bonds don't hedge inflation-linked liabilities → basis risk). The hedging portfolio is sized at PV of liabilities; the rest (surplus) is return-seeking. An overfunded plan with a fixed obligation that wants certainty, or a frozen plan with fixed liabilities (can be fully hedged), fits this.
  - **Integrated asset–liability (ALM)**: multi-period, liabilities changing, capital adequacy or funding-path goals (banks, insurers, underfunded plans with multi-year contribution targets).
- Sponsor risks only matter if correlated with plan assets/contributions. Overfunded plan + risk of sponsor distress → de-risk (more bonds). Sharpe ratio alone isn't the objective for a liability-driven plan.

**4. Goals-based approach (14 Qs).**
- Build **modules** (sub-portfolios) with different horizons and required success probabilities; assign each goal to the module that fits its horizon/priority.
- The grid gives each module a **minimum expected return** at each success probability. Higher minimum expected return = higher discount rate = lower PV = **lower funding cost**; so pick the module with the highest minimum return for the required success rate.
- Module weight = PV of its goal ÷ total assets; leftover assets (surplus) go to the aspirational module chosen for excess capital.
- Required growth rate for a goal = (goal ÷ current assets)^(1/n) − 1; compare to each module's return at the required success rate, then blend.
- Risk capacity of a sub-portfolio is set by the horizon until the money is needed (not the beneficiary's lifetime). Lower priority + long horizon → more risk. Near and critical → conservative and liquid; long-horizon endowment goal → highest growth among options.
- Goal types: cash-flow goals have identifiable amounts and dates; "labeled" goals name features (minimal risk, capital preservation, maintaining purchasing power, long-term growth).
- Individuals' risk: probability of failure; minimum-expectation assumptions set the discount rate.

**5. Heuristics.** 60/40; "120 − age" in equities (age-driven risk tolerance); 1/N (ignores asset characteristics); risk parity; the **endowment (Yale) model** = alternatives + active management + illiquidity premium + long horizon (needs scale, expertise, tolerance for cost and illiquidity); Norway model = passive public markets (+ ESG); Canada model = internal management and alternatives. Heuristics are not optimizations.

**6. Rebalancing ranges (corridors).** Balance the cost of drifting against transaction costs.

| Wider range | Narrower range |
|---|---|
| higher transaction costs | lower correlation with the rest of the portfolio |
| higher correlation with the rest of the portfolio | **higher volatility of the rest** of the portfolio |
| taxes (taxable account) | mean-reversion beliefs |
| momentum/trend beliefs | greater risk aversion |
| in practice higher own volatility or illiquid/heavily taxed holdings (to limit trading) | |

- After-tax range = pre-tax range ÷ (1 − t), so taxable accounts rebalance less often.
- Rebalancing earns a diversification return, short-volatility return, and liquidity-supply return.

**7. Safety-first and Monte Carlo (8 Qs).**
- SFRatio = [E(Rp) − R_L] ÷ σp; R_L = required withdrawal ÷ portfolio value (threshold return); **pick the highest**. It is Roy's criterion. Compare with Sharpe (uses Rf) and Treynor (uses β): the same numbers give different rankings.
- Use **Monte Carlo** for path dependence, ongoing cash flows, rebalancing costs/taxes, non-normal returns and multi-period shortfall probability; MVO is single period.

### Formulas
- **MVO utility:** U = E(R) − 0.005·λ·σ², where E(R) = expected return (%), λ = risk-aversion coefficient, σ = standard deviation (%). Surplus version: E(R_surplus) and σ_surplus.
- **Safety-first ratio:** SFRatio = (E(Rp) − R_L) ÷ σp, where Rp = portfolio return, R_L = threshold return, σp = portfolio SD.
- **Risk budgeting:** MCTR_i = β_i × σ_p; ACTR_i = w_i × MCTR_i; optimal when (R_i − Rf) ÷ MCTR_i is equal across assets (β_i = beta of asset i to the portfolio, σ_p = portfolio SD, w_i = weight, Rf = risk-free rate).
- **Reverse optimization:** implied E(R_i) = Rf + β_i × (R_M − Rf), where β_i = beta to the market-cap-weighted portfolio.
- **Goals-based:** funding cost = PV of goal discounted at the module's minimum expected return; module weight = PV(goal) ÷ total assets; required growth = (goal ÷ current)^(1/n) − 1 (n = years).
- **After-tax rebalancing range** = pre-tax range ÷ (1 − t), t = tax rate.

### Glossary
- **MCTR:** change in portfolio risk per unit increase in an asset's weight. **ACTR:** an asset's share of total risk in volatility units. **Surplus:** assets − liabilities. **Hedging portfolio:** liability-matching assets. **Return-seeking portfolio:** surplus invested for growth. **Corner portfolio:** a kink on the efficient frontier. **Basis risk:** hedge not tracking the liability driver.

## LM5 — Asset Allocation with Real-World Constraints (aa_qbank)

**Bank weight:** taxes and asset location ≈ 9 Qs · tactical allocation ≈ 10 · constraints, liquidity and asset size ≈ 8 · behavioral biases ≈ 8.

### Know cold

**1. Constraints.** Time horizon, liquidity, taxes, regulation, asset size, and unique circumstances.
- **Liquidity**: stress-test cash needs; larger need → more liquid assets; a lower spending rate or lower liquidity need → can hold more illiquid assets; weaker finances → more liquidity, fewer illiquid alternatives.
- **Asset size**: too small → cannot diversify or meet fund minimums (check the position size vs the fund's AUM and minimums); too large → hard to deploy in active strategies, trading costs. Large owners get cost savings, fee negotiation, bigger private allocations; small owners are nimbler.
- **Time horizon**: changes in human capital or liabilities (early retirement, new scholarship) are constraint changes that trigger an SAA review. **Regulation**: insurers, pensions, endowments/foundations, SWFs differ.

**2. Taxes and asset location (9 Qs).**
- Tax burden ranking: **interest (highest) > dividends > long-term capital gains (lowest, deferred)**.
- Location: tax-efficient equity (and low-turnover/passive) in **taxable** accounts; bonds and active/high-turnover strategies in **tax-advantaged** accounts. Exception: money needed soon stays in an accessible (taxable) account.
- After-tax allocation: adjust expected returns and standard deviations (taxes lower the mean and mute dispersion); **correlations are unchanged**. After-tax optimization trims tax-inefficient assets (e.g., high-yield bonds) unless diversification justifies their cost.
- Raising liquidity: sell from the lowest-taxed source first (long-term gains before ordinary income/short-term gains).
- Rebalancing in a taxable account → wider range (pre-tax range ÷ (1 − t)).

**3. Tactical asset allocation (10 Qs).**
- SAA = long-term policy weights; **tactical** = short-term deviations from SAA to add value, inside IPS limits; **dynamic** = long-term, multi-period active shifts.
- **Discretionary** TAA = qualitative judgment (e.g., political/economic events; requires belief in manager skill). **Systematic** TAA = rules-based quantitative signals (value, momentum, moving-average crossovers).
- Implementation: overweight positive-forecast classes and underweight negative ones, but first check each current weight against its policy limit. Bet size is constrained by ranges around targets, a tracking-error budget, or a risk range.
- Evaluate against the SAA/policy portfolio: value added = Σ (w_TAA − w_SAA) × asset return; compare via **Sharpe ratio** on the efficient-frontier chart (more return isn't enough if risk-adjusted return falls). Costs: trading, taxes, risk concentration.

**4. Behavioral biases (8 Qs).**

| Bias | Pattern |
|---|---|
| Loss aversion (disposition) | avoids any loss; sells winners early, holds losers; frame risk as probability of shortfall; fund high-priority goals with low-risk assets |
| Mental accounting | separate buckets; reluctance to sell founder stock "because it made the wealth" (also endowment effect); goals-based sub-portfolios accommodate it |
| Representativeness / recency | extrapolates recent returns; picks managers on short-term past performance; use policy ranges |
| Availability | vivid personal experience drives probability estimates (e.g., aversion to EM equity) |
| Illusion of control | concentrated employer stock |
| Familiarity / home bias | start from the global market portfolio |
| Framing | show multiple risk/reward views |

- Larger, formal fixes: documented process, policy ranges, goals-based modules.

**5. Revising the SAA.** Triggered by changes in goals, constraints or beliefs; the usual exam item asks you to classify the cause. Overfunded plan with sponsor distress risk → de-risk; underfunded plan → integrated approach.

### Formulas
- **TAA value added** = Σ (w_TAA,i − w_SAA,i) × R_i, where w_TAA,i = tactical weight, w_SAA,i = strategic weight, R_i = period return of asset class i.
- **After-tax range** = pre-tax range ÷ (1 − t).

### Glossary
- **Asset location:** which account holds which asset. **Glide path:** pre-set shift in allocation over time. **Disposition effect:** selling winners and holding losers. **Tracking-error budget:** the maximum active risk allowed vs policy.

---

# SECTION 2 — Derivatives and Risk Management (dv_qbank, 153 Qs)

Book: 3 modules. Bank tags: DA = LM1, DB = LM2, DC = LM3. Question counts are topic counts from the bank.

## LM1 — Options Strategies (DA, 57 Qs)

**Bank weight:** strategy payoffs / breakevens / selection by view ≈ 46 Qs (by far the largest topic) · Greeks 7 · implied volatility (skew, smile, term structure) 5.

### Know cold

**1. Strategy sheet.** Terms: S₀ = stock price now; S_T = price at expiration; X = strike; X_L, X_H = lower/higher strikes; c, p = call and put premiums (paid when long, received when short). All figures are profit per share at expiration, premiums included.

| Strategy | Construction | View / use | Max gain | Max loss | Breakeven |
|---|---|---|---|---|---|
| Covered call | long stock + short call at X | neutral to mildly bullish; yield enhancement; exit at a target price; **short volatility** | X − S₀ + c | S₀ − c (stock to zero) | S₀ − c |
| Protective put | long stock + long put at X | keep upside, limit downside; costly if rolled continuously | unlimited | S₀ − X + p | S₀ + p |
| Collar | long stock + long put (X_L) + short call (X_H) | concentrated holder wanting cheap protection; can be zero-cost | X_H − S₀ + c − p | S₀ − X_L + p − c | — |
| Bull call spread | long call X_L, short call X_H | moderately bullish, cheaper than a single call | (X_H − X_L) − debit | debit = c(X_L) − c(X_H) | X_L + debit |
| Bear put spread | long put X_H, short put X_L | moderately bearish | (X_H − X_L) − debit | debit = p(X_H) − p(X_L) | X_H − debit |
| Long straddle | long call + long put, same X | big move, unknown direction; vol expected above consensus | unlimited (upside); down to X − (c+p) | c + p | X ± (c + p) |
| Short straddle | short call + short put, same X | range-bound market, falling vol | c + p (at X) | unlimited upside | X ± (c + p) |
| Long strangle | long OTM put (X_P) + long OTM call (X_C) | like a straddle but cheaper, needs a bigger move | unlimited | c + p | X_P − (c+p) and X_C + (c+p) |
| Long calendar | short near-term, **long longer-term**, same strike | flat near term, then a move (or rising implied vol); profits from time decay | — | — | — |
| Risk reversal (long) | long OTM call + short OTM put | bullish, stable vol, lower cost; use when put vol is rich vs call vol | — | — | — |

- Short calendar = the reverse: expects a big move or falling implied volatility. A long calendar is *not* a bet on a large move in either direction.
- **Bear spread: buy the higher strike, sell the lower strike.** With calls it is a net credit; with puts it is a net debit, so the call version is cheaper ("minimum cost" questions).
- Short seagull = bear put spread + covered call (long ATM put, short lower put, short OTM call). Seagulls and collars cut hedging cost by selling options, at the price of giving up protection (or upside) beyond the short strike.
- Option payoffs to compute for "most profitable at $X" questions: payoff at expiry of each leg, then subtract the **net premium**.
- Cash-secured put: want to buy a stock lower and vol is high → write puts (effective purchase price = strike − premium). Long straddle suits vol that is too low and a big move expected.

**2. Synthetics and put–call parity.**
- S₀ + p = c + X/(1 + r)^T, where r = risk-free rate and T = time to expiration in years (X/(1 + r)^T = PV of the strike). So: long put = long call + short stock + lend PV(X); long call = long stock + long put − borrow PV(X); long stock = long call + short put + lend PV(X).
- **Synthetic long forward = long call + short put** (same strike/expiry); **synthetic short forward = long put + short call** (a "long put + short call" payoff question = short forward). A forward on a non-dividend stock has delta 1.
- Writing puts has the same payoff shape as a covered call.

**3. Greeks.**
- **Delta**: price change per $1 move in the underlying. Stock +1; long call 0 to +1; long put −1 to 0; ATM ≈ ±0.5. Position delta = Σ(number × delta). **Covered call delta = (1 − call delta) × shares.** A collar's delta → 0 after a large rally (deep ITM short call offsets the stock).
- **Gamma**: change in delta; **highest at the money, especially near expiry**, falling toward zero deep ITM/OTM.
- **Vega**: price change per 1-point change in implied vol; long options = long vega, short options = short vega (buying a call vs writing a put against a short stock → the call benefits from rising implied vol).
- **Theta**: time decay per day; long options negative; longer-dated options cost more but decay more slowly (smaller negative theta).
- Long option = long gamma, long vega, negative theta; short option = the reverse. Short stock + long call has negative theta; short stock + short put has positive theta and is more bearish in delta terms.

**4. Implied volatility.**
- **Skew** (equities): OTM puts carry higher IV than ATM, OTM calls lower (downward-sloping across strikes). **Smile**: both OTM wings above ATM.
- Rising put skew with rising overall IV = increased **bearish** sentiment (hedgers buying puts); bullish sentiment would show in call skew.
- Term structure normally slopes up; in a sell-off it **inverts** (backwardation: short-dated IV above long-dated).
- Put vol rich vs calls → long risk reversal (short OTM put, long OTM call). Selecting a strategy needs both a directional view and a view on implied volatility.

### Also tested
- Hedging a future USD need when your assets are in BRL: buy USD (long call on USD / put on BRL / long futures).
- Option price vs strategy: a covered call still has full downside exposure to the stock; it only gives up the upside beyond the strike (the call buyer gets it).

### Glossary
- **Debit/credit:** net premium paid/received. **Moneyness:** ITM/ATM/OTM relative to the strike. **Skew vs smile:** shape of IV across strikes. **Backwardation (vol term structure):** near-term IV above far-term.

## LM2 — Swaps, Forwards, and Futures Strategies (DB, 43 Qs)

**Bank weight:** futures hedging and synthetic allocation (bond BPV, equity beta, equitizing, currency futures) ≈ 17 Qs · equity swaps 6 · duration management with swaps 5 · variance swaps and VIX 5 · cross-currency basis swaps 4 · Fed funds futures 4 · bond futures basis / CTD 2.

### Know cold

**1. Terms used below.** MV_P = market value of the portfolio; MD = modified duration (P = current portfolio, T = target, S = swap, CTD = cheapest-to-deliver bond); BPV = basis point value = MD × MV × 0.0001 (dollar change for a 1 bp yield move); CF = conversion factor; β = beta (S = current, T = target, f = futures); S = dollar value of the equity portfolio; F = futures price × contract multiplier.

**2. Duration management with swaps.**
- Pay-fixed swap = short a fixed-rate bond + long floating: it has **negative duration** and lowers portfolio duration; receive-fixed adds duration.
- Notional needed: N_S = MV_P × (MD_T − MD_P) ÷ MD_S. Derivation: MV_P × MD_P + N_S × MD_S = MV_P × MD_T. Remember MD_S is negative for a pay-fixed swap.
- To convert fixed-rate debt to floating you receive fixed and pay floating (notional and dates matched to the bond).

**3. Bond futures hedging (BPV method).**
- Full hedge (BPV_T = 0): N_f = −(BPV_P ÷ BPV_CTD) × CF. Partial/target change: N_f = ((BPV_T − BPV_P) ÷ BPV_CTD) × CF, where BPV_T = MD_T × MV_P × 0.0001. **Negative = sell.**
- Long bond → sell bond futures; match the futures maturity to the exposure. Future borrower locks in a rate by shorting rate futures (effective rate = loan rate − futures gain). Adding bond exposure synthetically: buy N = (BPV_T ÷ BPV_CTD) × CF.
- **CTD** = the deliverable with the lowest (quoted price − futures price × CF). **Basis arbitrage:** positive basis → sell the bond and buy futures; negative → the reverse.

**4. Equity futures: beta, equitizing, allocation shifts.**
- N_f = ((β_T − β_S) ÷ β_f) × (S ÷ F); positive = buy. To set beta to zero (hedge/exit), β_T = 0 → sell. **Equitizing cash:** β_S = 0 so N_f = (β_T ÷ β_f) × cash ÷ F.
- Tactical shift of 15% from equities to bonds: sell equity futures (β_T = 0 on that amount), buy bond futures using the BPV method. Convert large-cap to small-cap: sell futures on what you are reducing, buy futures on what you are increasing.
- Futures on a different or foreign market: divide by that futures' beta if more sensitive than the target; convert currencies first (e.g., BOVESPA in BRL vs a USD target). To move UK equity exposure to US: sell FTSE futures to take the UK fund's beta (1.1) to zero, buy S&P futures to the new target.

**5. Equity swaps.**
- Total-return equity swap: OTC, illiquid, counterparty risk; the holder keeps legal ownership and voting rights. Structures: receive equity/pay fixed, receive equity/pay floating, equity-for-equity (and TRS passes through dividends).
- **Payer of equity return** (e.g., a CEO hedging or partially "selling" stock without selling): pays total return on the shares, receives floating on a notional = share price × shares; gains when the stock's total return is below the floating rate.
- Receive equity / pay bond or floating shifts allocation toward equities synthetically; pay equity/receive floating shifts away.

**6. Volatility derivatives.**
- **Variance swap:** pays on realized variance vs strike variance. Variance notional N_var = vega notional ÷ (2K) (K = strike in vol points). Settlement = N_var × (realized variance − K²). Mid-life value = N_var × PV × [(t/T) × RealizedVol² + ((T−t)/T) × ImpliedVol² − K²], where t = time elapsed, T = swap life, PV = discount factor for the remaining life. Convex in volatility, so a long variance swap is a good **tail hedge** for long equity.
- **VIX:** cannot be traded directly (use futures/options; options are priced off VIX futures). Contango (upward-sloping curve) with a stable curve → **buy front-month, sell second-month** VIX futures to earn roll-down. In contango, long back-month VIX futures bleeds; selling OTM VIX puts profits from falling/stable vol (not a hedge). Hedge with long variance or long VIX calls.

**7. Fed funds futures and market-implied probabilities.**
- Implied rate = 100 − futures price. Probability of a move = (implied rate − current rate) ÷ (rate after the move − current rate). Futures price the *effective* rate (month-end dips bias it); weak long-term predictive power.

**8. Cross-currency basis swaps.**
- Notionals are exchanged at inception and again at maturity at one fixed rate; each leg pays floating in its currency; the **basis** is added to one leg. Used to borrow in the cheaper currency and swap, or hedge foreign bond cash flows.
- Strong USD demand → positive basis for "lending" USD; a USD investor hedging euro bonds receives more interest in **USD only**. A negative yen basis improves the forward rate for a USD investor, so hedged Japanese bonds can beat Treasuries (bank example: ¥ bond return after the basis 2.18% vs 1.75% on Treasuries).

### Formulas (terms as above)
- Swap notional: N_S = MV_P × (MD_T − MD_P) ÷ MD_S.
- BPV = MD × MV × 0.0001. Bond futures: N_f = ((BPV_T − BPV_P) ÷ BPV_CTD) × CF.
- Equity futures: N_f = ((β_T − β_S) ÷ β_f) × (S ÷ F).
- Variance swap: N_var = vega notional ÷ (2K); settlement = N_var × (σ²_realized − K²).
- Fed funds: P(move) = (100 − price − current rate) ÷ (rate after move − current rate).

### Glossary
- **BPV:** price change for a 1 bp yield move. **CTD:** cheapest-to-deliver bond. **Conversion factor:** standardizes deliverable bonds to the contract. **Basis (bond):** quoted price − futures price × CF. **TRS:** total return swap. **Equitization:** giving cash equity exposure through derivatives. **Roll-down (VIX):** futures converge to a lower spot.

## LM3 — Currency Management: An Introduction (DC, 53 Qs)

**Bank weight:** currency management strategies / spectrum ≈ 17 Qs · FX hedging mechanics (static/dynamic, forwards, rolling, cross-hedge, options) ≈ 13 · carry / forward rate bias / roll yield / EM currencies ≈ 7 · currency return and risk ≈ 6 · volatility trading 5 · NDFs 2 · min-variance hedge 1.

### Know cold

**1. Currency return and risk.**
- Quote convention is price/base (P/B): the first currency is the price, the second the base. R_DC = (1 + R_FC)(1 + R_FX) − 1, where R_DC = return in domestic currency, R_FC = foreign-currency asset return, R_FX = % change of the **foreign currency measured in domestic currency** (domestic = price currency). If the quote is X/EUR and it falls, X appreciated vs EUR, which boosts a EUR investor's return.
- Multi-asset: R_DC = Σ wᵢ(1 + R_FC,i)(1 + R_FX,i) − 1 with weights on initial domestic values. **Currency contribution** = total domestic return − Σ wᵢR_FC,i (equals weighted FX return plus the cross-product).
- Risk: σ²(R_DC) ≈ σ²(R_FC) + σ²(R_FX) + 2·σ(R_FC)·σ(R_FX)·ρ. A **higher** correlation between asset return and FX raises variance with no change in expected return; a **negative** asset–currency correlation means you should leave some exposure unhedged.
- Flat domestic return with the foreign currency up implies a negative foreign-currency return.

**2. The strategy spectrum (identify from the IPS discretion).**

| Approach | Discretion | Primary goal |
|---|---|---|
| Passive hedging | none; rules-based, exposures at the benchmark/neutral | remove currency risk |
| Discretionary hedging | limited band (e.g., ±3% around neutral, hedge ratio 97–103%) | protection first, alpha secondary |
| Active currency management | wide discretion (e.g., ±25% around neutral) | add alpha |
| Currency overlay | managed separately, often by FX specialists; alpha should be **uncorrelated** with other return sources; internal beta hedging with external alpha | strategic positioning, directional views |
| FX as an asset class | largest discretion | alpha, high risk tolerance |

- Efficient-currency-market view with a long horizon → don't hedge (avoid hedging costs). An alpha-seeking, high-risk-tolerance client or a long-horizon SWF with low liquidity needs and EM exposure is a candidate for more active management.
- View → positioning within IPS bounds: expect the exposure currency to **appreciate** → **under-hedge** (e.g., ratio no lower than 75% when IPS allows ±25%); expect it to **depreciate** → over-hedge.
- Full hedge costs: trading costs (spreads, premiums, rolling, infrastructure) and **opportunity cost** (also gives up favorable currency moves).

**3. Active approaches (classify the statement).**
- **Economic fundamentals**: fair value from economics and parity conditions; spot converges to equilibrium. **Technical**: price history, support/resistance, trends, timing entries/exits ("history already reflects everything"). **Carry**: borrow low-yield, hold high-yield. **Volatility trading**: view on the distribution, not the direction.
- Higher inflation → currency depreciation; higher real rates → appreciation; higher risk premium or lower demand → depreciation.

**4. Carry, forward rate bias and roll yield.**
- Carry trade (a violation of uncovered interest rate parity) = trading the **forward rate bias**: sell the currency at a forward premium (low-yield), buy the one at a discount (high-yield). Fund in the lowest-yield currency, invest in the highest, prefer **low implied vol** and a wide yield gap. Return pattern: positive carry, **negative skew, crash risk**; main risks are unwinds and leverage. A **negative carry** trade (borrow high-yield, invest low-yield) works only if the low-yield currency appreciates by more than the yield gap.
- **Roll yield** on a short (selling) hedge: selling a currency at a **forward premium** = positive roll yield; at a forward discount = negative. Risk-neutral hedge ratio: short hedge earns the forward premium plus any expected spot depreciation, so hedge more when both are positive (bank example: AUD at +2.27% premium, expected −3.28% → over-hedge; CHF at −2.64% discount, expected +1.32% → don't hedge).

**5. Hedge mechanics.**
- **Forwards**: large, customized, no margin; static hedge matched to the exposure drifts out of line as asset values change (growing mismatch) → **dynamic hedge** keeps the ratio near target at higher cost. If the asset falls, reduce the hedge with an offsetting forward at the same maturity.
- **Futures**: smaller size (private wealth), but initial and daily variation margin → liquidity risk.
- **Rolling/closing a forward**: transact in the opposite direction on the other side of the bid–offer on the base currency; discount the net settlement at the interest rate of the currency in which the cash flow is paid.
- **Options**: lower opportunity cost, pay a premium. Cost-reduction structures: over/under-hedge, OTM protective put, collar/risk reversal (sell an OTM call to fund the put), put spread, seagull. A put on X/Y (base Y) profits if the exchange rate (base-currency value) falls.
- **Cross-hedge/macro hedge**: basis risk from unstable correlations. For two long, highly correlated exposures, hedge each directly. Forwards on the exposed currency carry little basis risk.
- **NDFs**: for currencies with capital controls; cash-settled in a freely convertible currency; lower credit risk through net settlement; pricing can deviate from covered interest parity. Long USD NDF vs KRW profits if KRW depreciates.
- **Minimum-variance hedge ratio** h = ρ(R_DC, R_FX) × σ(R_DC) ÷ σ(R_FX); hedge notional = h × exposure.

**6. Volatility trading in FX.** Speculators are typically net short volatility (collect premium, time decay in their favor) or long; hedgers are net long volatility. Turmoil → be net long vol. Expecting higher vol → long straddle/strangle; lower → short. Use the correct sign when the question says an option position is "inconsistent" with a view.

**7. EM currencies.** Fat tails and negative skew, so VaR and Sharpe computed over a stable track record overstate quality; extra liquidity/convertibility issues and higher costs; NDFs are the tool.

### Formulas
- R_DC = (1 + R_FC)(1 + R_FX) − 1; multi-asset R_DC = Σ wᵢ(1 + R_FC,i)(1 + R_FX,i) − 1.
- σ²(R_DC) ≈ σ²(R_FC) + σ²(R_FX) + 2σ(R_FC)σ(R_FX)ρ (ρ = correlation between R_FC and R_FX).
- All-in forward = spot + forward points ÷ 10,000 (four-decimal quotes). Forward premium/discount = (forward − spot) ÷ spot.
- Minimum-variance hedge ratio: h = ρ × σ(R_DC) ÷ σ(R_FX). Hedge notional = h × exposure.
- Carry gain ≈ yield difference if the exchange rate is unchanged.

### Glossary
- **Roll yield:** gain or loss from rolling a hedge because of forward points. **Overlay:** separate currency program run apart from asset managers. **Seagull:** collar-like structure with an extra short option. **NDF:** non-deliverable forward. **Forward rate bias:** high-yield currencies tend not to depreciate by the forward discount.

---

# SECTION 3 — Performance Measurement (pm_qbank, 166 Qs)

Book: 3 modules. Bank tags: PA = LM1, PB = LM2, GP = LM3. Question counts are topic counts from the bank.

## LM1 — Portfolio Performance Evaluation (PA, 53 Qs)

**Bank weight:** return attribution (Brinson family, holdings/returns/transactions-based, fixed income) ≈ 21 Qs · risk-adjusted measures, capture ratios, drawdown ≈ 18 · benchmarks and misfit ≈ 9 · risk and factor attribution ≈ 6 · framework 3.

### Know cold

**1. Framework.**
- **Measurement** = what happened (returns); **attribution** = how/why it happened (which decisions); **appraisal** = was it skill (judging the quality of the manager's decisions). **Risk is part of all three**, not only appraisal.
- Effective attribution mirrors the manager's investment process, quantifies the active decisions, and fully explains the excess return (reconciles to total).
- **Macro attribution** = decisions of the asset owner (allocation across asset classes and managers). **Micro attribution** = the portfolio manager's own decisions (allocation within, security selection).
- Risk attribution follows the mandate: benchmark-relative mandate → sources of **tracking risk**; absolute mandate → sources of **volatility**. A top-down benchmarked manager's tracking risk comes from allocation and selection decisions.

**2. Three attribution methods (accuracy and effort rise together).**

| Method | Data used | Strengths / limits | Pick when |
|---|---|---|---|
| Returns-based | portfolio returns regressed on factors/indexes | easiest and least accurate | no holdings data |
| Holdings-based | beginning (and end) holdings | best for low turnover; misses trades between snapshots (a "trading effect"/residual accumulates over long periods) | passive or low turnover |
| Transactions-based | holdings + every trade + costs | most accurate, reconciles to the actual return, hardest | active, high turnover, rich data |

**3. Brinson attribution (the largest calculation block).** Terms: w_i, W_i = portfolio and benchmark weight in segment i; R_i, B_i = portfolio and benchmark return in segment i; B = total benchmark return.
- **Allocation (Brinson–Fachler)** = (w_i − W_i) × (B_i − B). **Allocation (BHB)** = (w_i − W_i) × B_i. **Selection** = W_i × (R_i − B_i). **Interaction** = (w_i − W_i) × (R_i − B_i). **Selection + interaction** = w_i × (R_i − B_i). Active return = allocation + selection + interaction, summed over segments.
- **BF sign rule** (leader = segment benchmark return above the total benchmark return): overweight a leader (+), overweight a laggard (−), underweight a laggard (+), underweight a leader (−). BHB differs: it multiplies by B_i itself, so overweighting any segment with a positive return looks good, even if it lagged the total benchmark.
- Judge a **weighting decision by the allocation effect alone**; selection + interaction measures the stock-picking decision. "Segment decision went wrong" = overweighted a segment whose benchmark lagged, or underweighted one that led.

**4. Factor-based and fixed-income attribution.**
- Factor tilt = portfolio sensitivity − benchmark sensitivity. Contribution to active return = (portfolio − benchmark sensitivity) × factor return. Adding exposure to a factor helped only if that factor's return was positive. In a Carhart read: negative HML = growth tilt, negative SMB = large-cap tilt, negative WML = anti-momentum.
- Style return = benchmark return − market return; active return = portfolio − benchmark. So P − M = (B − M) + (P − B) = style + active.
- Fixed income: **duration effect** = impact of a parallel yield shift; **curve effect** = impact of the shape change. Example from the bank: portfolio overweighted long maturities, yields rose, and the long bucket's curve effect was positive → long yields rose less than short yields → the curve **flattened**.

**5. Risk-adjusted measures (appraisal).**
- **Sharpe** = (R_P − R_F) ÷ σ_P (uses total SD, ex post, treats up and down volatility alike).
- **Sortino** = (R_P − MAR) ÷ target semideviation (TSD). Solve for TSD = (R_P − MAR) ÷ Sortino. Preferred because MAR is investor-specific and only downside counts; suits asymmetric distributions and capital preservation; choose it when the mandate has a return target above the risk-free rate.
- **Information ratio** (appraisal ratio) = (R_P − R_B) ÷ tracking error; risk-adjusted evidence of skill.
- **Capture ratios.** Upside capture = manager geometric mean ÷ benchmark geometric mean over periods when the benchmark was up; downside capture = same over benchmark-down periods. **CR = UC ÷ DC**, so DC = UC ÷ CR. CR > 1 → positive asymmetry (convex); CR < 1 → negative asymmetry (concave, like negative gamma); CR = 1 symmetric. Upside capture < 100% = lags in up markets; downside capture > 100% = lags in down markets.
- **Drawdown.** Maximum drawdown = largest peak-to-trough loss; drawdown duration = from the start of the decline until full recovery (decline + recovery). Near-retirees favor smaller, shorter drawdowns and low downside capture.
- Limits: short and noisy data, assumptions about the distribution, backward-looking.

**6. Benchmarks.**
- Valid-benchmark traits (SAMURAI): **S**pecified in advance, **A**ppropriate (consistent with the manager's style/area), **M**easurable (returns reported frequently), **U**nambiguous, **R**eflective of current investment opinions, **A**ccountable, **I**nvestable (replicable and holdable, gross of fees). Example in the bank: a frequently rebalanced cap-weighted bond index with daily returns and foreign bonds, used for a domestic-only fund, is measurable but neither investable nor appropriate.
- A good benchmark has **no correlation between the manager's active return and the style return**.
- Types: absolute-return (e.g., Euribor + 4% = a minimum target return), manager universe (peer group benchmarking), asset-based indexes, liability-based (DB plan; older workforce → more nominal bonds, younger → more equity, inflation-indexed benefits → real-return bonds).
- **Benchmark misfit:** normal portfolio ≠ investor benchmark. Misfit active return = normal portfolio return − investor benchmark return; mismeasured active return = (manager − normal portfolio) + misfit.
- Hard-to-benchmark alternatives: hedge funds (unique strategies so no peer group, self-reported data, illiquid and subjectively priced assets); real estate indexes (subset of the universe, appraisal-based, ignore illiquidity and transaction costs); also private equity, commodities, distressed.

### Formulas (terms above)
- Sharpe = (R_P − R_F) ÷ σ_P, where R_P = portfolio return, R_F = risk-free rate, σ_P = SD of portfolio returns.
- Sortino = (R_P − MAR) ÷ TSD, where MAR = minimum acceptable return and TSD = target semideviation (SD of returns below MAR).
- Information ratio = (R_P − R_B) ÷ TE, where R_B = benchmark return, TE = tracking error (SD of active return).
- CR = UC ÷ DC; UC and DC are geometric-mean ratios (manager ÷ benchmark) over benchmark-up and benchmark-down periods.
- BF allocation (w − W)(B_i − B); BHB allocation (w − W)B_i; selection W(R − B_i); interaction (w − W)(R − B_i), where w, W = portfolio and benchmark weight in the segment; R, B_i = portfolio and benchmark return in the segment; B = total benchmark return.

### Glossary
- **Normal portfolio:** the manager's typical holdings/benchmark proxy. **Tracking error:** SD of portfolio minus benchmark returns. **Convex/concave payoff:** gains more than it loses vs. loses more than it gains. **Factor tilt:** active factor exposure.

## LM2 — Investment Manager Selection (PB, 67 Qs)

**Bank weight:** fee structures and performance-based fees ≈ 23 Qs (largest) · selection process, due diligence, Type I/II ≈ 21 · style analysis 8 · investment vehicles 8 · behavioral biases in teams 3.

### Know cold

**1. Selection process.**
- Before searching: decide to outsource, write the IPS, set the asset allocation. Define the **universe** by role + benchmark + third-party categories (don't screen on past performance).
- **Quantitative** review: attribution/appraisal, capture ratios, drawdown. **Qualitative**: **investment due diligence** (philosophy, process, people, portfolio) and **operational due diligence** (firm, infrastructure, back office, vehicle and terms). For repeatable skill, assess the investment *process*.
- Process stages: signal creation (idea generation) → signal capture (implementation) → portfolio construction → monitoring.
- **Philosophy** is the foundation: clearly and consistently articulated, passive vs active coherent, **not changed in response to performance**, process consistent with it, personnel able to execute it. A repeatable inefficiency is large relative to the capital chasing it, recurring, and worth exploiting net of costs. A style change plus untrained staff = repeatability risk.
- Personnel: experience, depth, key-person risk, turnover, compensation alignment. Isolated, explainable events are consistent with adhering to the process; loss of key people or compliance breaches are not.
- Portfolio construction: turnover should match the signal frequency; hard stops raise turnover; capacity matters (positions must be adjusted as AUM grows).

**2. Type I and Type II errors.**
- **Type I** = hire (or retain) a manager who then underperforms: explicit, visible, painful (regret). **Type II** = fail to hire (or fire) a skilled manager who then outperforms: an opportunity cost that is hard to measure.
- Investors worry more about Type I because it is transparent and brings regret; a **wide gap between skilled and unskilled return distributions** makes missing skill (Type II) costlier.
- Classify outcomes: hired then underperformed = Type I; skipped/fired then outperformed = Type II.

**3. Style analysis.**

| | Returns-based (RBSA) | Holdings-based (HBSA) |
|---|---|---|
| Direction | top-down (regress returns on style indexes) | bottom-up (aggregate holdings' characteristics) |
| Data | easy to get; no window dressing; comparable; works for complex strategies | needs full holdings; a snapshot (window dressing; stale pricing understates illiquid risk) |
| Limits | imprecise, assumes a constant average portfolio; weak for illiquid assets and short histories | works best with low turnover, liquid, simple holdings |

- Style analysis should match the stated philosophy; a mismatch suggests the process may not be repeatable. **Style drift** = moving outside the stated mandate (asset class, cap range, cash). Style analysis is most useful with liquid, frequently priced holdings.

**4. Behavioral biases in investment teams.** **Authority bias** (defer to the expert or senior), **groupthink** (harmony over dissent; closed-mindedness, confirmation bias), **aversion to complexity** (attention on trivia, "bike-shedding"). Check team size, structure and decision-making.

**5. Vehicles.**
- **SMA**: transparency, liquidity, customization to the IPS, tax management (large unrealized gains in a taxable account → SMA), direct legal ownership; higher cost. **Pooled**: lower cost, lower tracking risk, less investor interference.
- Liquidity ranking: ETFs > open-end funds > closed-end funds > hedge funds (lockups/gates) > private equity. **Hard lock** = no redemptions during the period; **soft lock** = redemption allowed with a fee (paid into the fund). Limited liquidity lets the fund hold illiquid assets but reduces investor flexibility.

**6. Fees (23 Qs; know the three structures and the calculations).** Terms: base fee = minimum fee; sharing = % of performance paid to the manager; active return = portfolio return − benchmark; cap = maximum annual fee.

| Structure | Fee rule |
|---|---|
| AUM (management) fee | % of assets; shifts the mean return, does not change return volatility; cheaper as assets grow; weak performance incentive; closet-indexing concern |
| Symmetric | base + sharing × performance (positive **or negative**); best alignment; highest manager bankruptcy exposure; negative performance restrains risk taking |
| Bonus-style (asymmetric) | **higher of** base or base + sharing × positive performance, optionally capped; floor at the base fee; **greatest incentive to add risk when uncapped**; ≈ a call option on active return (cap = short call at the maximum) |
| High-water mark (add-on) | no sharing until prior losses are recovered; protects the client |

- Worked patterns from the bank: Billed fee = base + sharing × (gross active − base), when active > base; net active = gross active − billed fee (base 0.20%, sharing 25%: gross 0.75% → fee 0.3375%, net 0.41%). Bonus-style floor: a negative-return year charges only the base (Red Grass 2017: 1.00%). Apply the **cap after** computing base + sharing (Blue Water: 0.5 + 0.2 × 12 = 2.90% → capped at 2.50%). **High-water mark:** subtract prior losses from the current return first, then subtract base, then share (ABC Year 3: 23 − 4 = 19%; fee 2.50 + 0.10 × (19 − 2.5) = 4.15%).
- Performance fees change realized volatility, aligning incentives but encouraging risk taking and misestimated risk; bonus-style fees create asymmetric net returns, so **standard deviation understates downside risk**. Prefer more linear compensation to reduce incentives to change risk at inflection points.

### Formulas (terms above)
- Billed fee = base + sharing × (gross active return − base); net active return = gross active return − billed fee (subject to cap).
- Bonus-style fee = max[base, base + sharing × positive performance], then min with the cap. Symmetric fee = base + sharing × (performance − base) (negative when performance is negative).
- High-water mark adjusted return = current return − prior unrecovered losses.

### Glossary
- **Type I/II error:** hiring an unskilled manager / missing a skilled one. **Signal capture:** turning a signal into trades. **SMA:** separately managed account. **Lockup/gate:** redemption restrictions. **Hurdle:** performance level before sharing applies.

## LM3 — Overview of the Global Investment Performance Standards (GP, 46 Qs)

**Bank weight:** composite construction ≈ 17 Qs · return calculation ≈ 10 · verification 6 · presentation and disclosure 5 · firm definition and objectives 4 · valuation 3 · portability 1.

### Know cold

**1. Who claims compliance and what it means.**
- **Firm** = the broadest definition (an entity held out to the public as a distinct business); a division or subsidiary is its own firm only if it is held out as a distinct entity (e.g., separately registered). Only investment management firms and asset owners that manage assets on a discretionary basis **and compete for business** may claim compliance (consultants, software vendors and custodians cannot). Compliance is **firm-wide**; a single composite cannot be "in compliance".
- GIPS gives **comparability**, not guaranteed accuracy and not CFA Institute approval. When GIPS conflicts with law, follow the law and disclose it. Discretion must be defined in writing and applied consistently.
- Five objectives: promote investor interests and confidence; accurate and consistent data; one global standard; fair global competition; global self-regulation by the industry.

**2. Composite construction (the biggest GIPS block).**
- **Composite** = portfolios managed under a similar mandate/objective/strategy. **All actual, fee-paying, discretionary portfolios belong in at least one composite**; non-discretionary portfolios are in none (but stay in total firm assets). Non-fee-paying discretionary portfolios may be included with disclosure; seed-money portfolios can be included from inception. A portfolio that fits several composite definitions goes in all of them.
- A portfolio whose **client restrictions prevent the strategy from being implemented** (e.g., trade pre-approval) is non-discretionary. Portfolios below a documented composite minimum are non-discretionary for that composite; changes to a minimum are not applied retroactively, and removed portfolios keep their prior history in the composite.
- New portfolios are added in a timely, consistent manner per policy; terminated portfolios stay through the last full period under management. Switching a portfolio between composites needs a documented mandate change, and history stays with the original composite.
- There is **no minimum number** of portfolios; composites that are too broad show wide dispersion, too many composites add cost, tiny composites and confidentiality risk. You **may not link simulated/model/backtested performance to actual performance**.

**3. Return calculation.**
- **Time-weighted return (TWR) is required.** Portfolios are valued **monthly** (private-market portfolios quarterly) and on the date of every **large cash flow**, as defined by the firm for each composite; the policy is documented and applied without exception. Sub-period returns are **geometrically linked** (Modified Dietz is allowed for a sub-period). A non-large flow can be handled with a daily-weighted method.
- **Money-weighted return** only when the firm controls the external cash flows **and** (the portfolio is closed-end, fixed life or fixed commitment, **or** illiquid investments are a significant part of the strategy); annualized since-inception MWR calculated at least annually, valued at least annually.
- Periods of less than one year are **not annualized**. **Cash and equivalents are always included**, even if another firm manages them. Returns are after transaction costs (commissions, exchange fees/taxes, bid–offer spreads); gross-of-fee returns deduct direct trading expenses only (custody fees are not trading costs).
- **Valuation:** fair value plus a documented valuation policy (GAAP-style accounting is not required). Hierarchy: identical investments with quoted prices in active markets → similar investments in active markets → quotes in inactive markets → observable market inputs → subjective (unobservable) inputs.
- Composite return = asset-weighted average of portfolio returns, with beginning-value weights or beginning value plus weighted cash flows (the latter ≈ aggregate method).

**4. Presentation (GIPS Composite Report, TWR).**
- At least **5 years** of annual returns (or since inception if shorter), extended each year to **10**; more than 10 is not required, and you cannot drop poor early years.
- Required: composite and benchmark annual returns for all years; number of portfolios (if six or more); composite assets; total firm assets; **internal dispersion** for each year if the composite has six or more portfolios for the full year; and, where monthly returns exist, the **three-year annualized ex post standard deviation** of both composite and benchmark at each annual period end.
- Dispersion measures: standard deviation (comparable), asset-weighted SD, high–low range (skewed by outliers), interquartile range (robust to outliers).
- **Portability:** a past record can be linked to the new firm only if (1) substantially all decision makers moved, (2) the process stays substantially intact and independent, (3) records support the performance, and (4) there is no break in the track record. With a break, and the first three met, the past record can represent the new firm's history but cannot be linked. One-year grace period for non-compliant assets acquired.

**5. Verification.** Third-party assurance on whether the firm's policies and procedures are designed in compliance with GIPS and implemented **firm-wide** (recordkeeping, policies, definition of the firm, completeness of the composite and pooled-fund lists, total firm assets calculation). A verification report covers the **whole firm only**; assurance on one composite is a *performance examination*, not verification. Verification does not guarantee a specific composite's accuracy.

### Formulas
- **Modified Dietz** = (EMV − BMV − CF) ÷ (BMV + Σ CFᵢ × wᵢ), where EMV = ending market value, BMV = beginning market value, CF = net external cash flow (total), CFᵢ = individual flow, wᵢ = (days remaining in the period after the flow) ÷ (days in the period). An end-of-day flow on day 10 of a 30-day month has w = 20/30.
- **TWR with large flows:** revalue at each large flow, compute the sub-period returns, link: (1 + r₁)(1 + r₂)…(1 + rₙ) − 1.
- **Composite return** = Σ (portfolio weight × portfolio return), weight = beginning value ÷ composite beginning value (or Modified Dietz denominator for the BMV + flows version).

### Glossary
- **Composite:** group of portfolios with a common strategy. **Discretion:** ability to implement the strategy without client restrictions. **Total firm assets:** all discretionary and non-discretionary assets of the firm. **Internal dispersion:** spread of portfolio returns within a composite. **Ex post SD:** realized standard deviation. **Performance examination:** verification-like review of one composite.

---

# SECTION 4 — Portfolio Construction (pc_qbank, 222 Qs)

Book: 7 modules. Bank tags: EQ = LM1, FI = LM2, AL = LM3, WM = LM4, IN = LM5, TR = LM6. LM7 (SWF case study) has no tag; its Qs sit inside IN. Question counts are topic counts from the bank.

## LM1 — Overview of Equity Portfolio Management (EQ, 24 Qs)

**Bank weight:** equity indexes / passive vs active / HHI 9 · universe segmentation, ESG, engagement 8 · income enhancement (lending, options, dividend capture) and fees 7.

### Know cold

**1. Segmentation: match the description to the dimension it actually uses.**

| Dimension | Example | Weakness |
|---|---|---|
| Economic activity (sector/industry) | oil producers + transport | multi-industry companies are hard to classify |
| Size / style | "new, fast-growing, aggressive" = **small-cap growth** (check size *and* style) | — |
| Geography | many countries | domicile ≠ revenue exposure; adds currency risk |

- Style cues in a vignette: **value** = high yield, low P/E, low P/B (these plus low beta are the client's preferences in EQ2). **Growth** = high P/E, high EPS growth, momentum. **Large cap** = liquidity.

**2. Indexes and benchmarks.**
- A usable benchmark is rule-based, transparent, investable. **Free-float adjustment improves investability** (counts only tradable shares), so "float adjustment lowers liquidity" is false. **Buffering** reduces turnover at reconstitution.
- Benchmark must match the mandate (global equity exposure → global equity index, not a country index).
- Weighting schemes: **cap-weighted** = large-cap bias, concentration, low turnover, adjusts automatically. **Equal-weighted** = small-cap bias, frequent rebalancing, least concentrated. **Price-weighted** = equal number of shares. **Fundamental** = weights from fundamentals.
- Rebalancing = restoring weights; reconstitution = adding/deleting constituents.
- **HHI** measures concentration; **effective number of stocks = 1/HHI**. A portfolio with more effective stocks than its benchmark is less concentrated. Equal weights across N stocks: HHI = 1/N, effective N = N.

**3. Active vs index.**
- Index fund: tracks benchmark, low turnover, minimal rebalancing, fits investors who believe markets are efficient and want low fees / tax minimization. Index funds face predatory-trading cost around reconstitution; active funds face higher research/management costs.
- Active + "eliminate key-person risk" conflict; active + ESG screening fits; index + tax minimization fits. Questions asking "when should an advisor NOT use…" test this.
- It is a spectrum, not binary: confidence in outperforming, client preference, benchmark suitability, risks/costs, taxes.

**4. Income enhancement.**
- **Securities lending:** income = lending fee + return on reinvested cash collateral; the borrower pays "manufactured" dividends back to the lender. Index funds worry less than active funds about the effect of short selling.
- **Covered call:** long stock + short call = premium income, capped upside, no extra cash needed. **Cash-covered put** needs cash set aside.
- **Dividend capture:** buy before the ex-date, hold through the ex-date, then sell.

**5. Fees.** Management fee = % of AUM. **Performance fee** = incentive above a hurdle, usually with a high-water mark (EQ1 example: 15% of appreciation above a 7% threshold plus HWM).

**6. ESG approaches.** **Negative/exclusionary** (exclude), **positive/best-in-class** (select the best), **thematic** (one theme or sector). In an IPS, ESG preferences go in **constraints / other preferences**, not in asset-class choice and not in objectives.

**7. Shareholder engagement.** Voting rights are a primary tool. **Conflict of interest** (manager holds stock of a company that is also a client/investor) vs **free rider** (benefits from others' engagement without paying). Pros: stronger governance culture. Cons: benefits hard to quantify, selective-disclosure risk, short-termism pressure.

**8. Diversification.** Correlations rise in a crisis → diversification benefit falls. Adding bonds does not guarantee lower short-term risk because correlations are unstable.

**9. Trading costs (EQ3 exhibit).** Explicit = commissions + exchange fees + transaction taxes + regulatory fees (28 + 4 + 8 + 2 = **42 bps**). Implicit = market impact + delay + bid-offer spread (13 + 5 + 7 = 25 bps).

### Also tested
- Roles of equities: capital appreciation, dividend income, diversification, inflation hedge.

### Formulas
- HHI = Σ wᵢ², where wᵢ = weight of stock i (weights sum to 1).
- Effective number of stocks = 1 / HHI.

### Glossary
- **Free float:** shares actually available to the public. **Buffering:** a band around cutoffs so names don't flip in and out. **Reconstitution:** index rebuilds its constituent list. **Manufactured dividend:** payment the borrower makes to the lender equal to the dividend. **High-water mark:** fee only on gains above the prior peak value. **Free rider:** gets the benefit of others' activism without paying for it.

## LM2 — Overview of Fixed-Income Portfolio Management (FI, 35 Qs)

**Bank weight:** mandates, liquidity, taxes, derivatives, inflation 18 · expected return / rolling yield / price effects / leverage 11 · liability-based mandates, immunization, duration, ladders 6.

### Know cold

**1. Expected return decomposition (the most-tested calculation).**

| Piece | Calculation |
|---|---|
| Coupon income | coupon ÷ current price |
| + Rolldown return | (expected end price − current price) ÷ current price (assumes an **unchanged yield curve**) |
| = **Rolling yield** | coupon income + rolldown |
| + Benchmark-yield view | −MD × Δy + ½ × C × (Δy)² |
| + Spread view | −MD × Δspread + ½ × C × (Δspread)² |
| + Currency | given |

- Worked patterns (from the bank): premium bond 117 → 114 with coupon 3.63 → 3.10% − 2.56% = **0.54%** rolling yield (a premium bond has **negative** rolldown; the trap is adding the loss). Portfolio with coupon 2.25 on price 98.45, end price 98.62, MD 5.19, C 22, Δy +0.15%, Δspread +0.13%, FX +0.65% → 2.46% − 0.78% − 0.67% + 0.65% = **1.66%**.
- Traps: forgetting to **square** Δ in the convexity term (spread term too); dropping the minus sign on duration; widening hurts, narrowing helps.

**2. Leverage.** Leveraged return = rI + (V_B / V_E) × (rI − r_B). Traps: dividing borrowed funds by **total assets** instead of **equity**; forgetting to subtract the cost of debt. Example: assets 136.33, equity 94.33, debt 42.00, rI 6.20%, borrowing 2.80% → **7.71%**. Leverage helps only when the return on assets exceeds the cost of debt. Ways to lever: futures, swaps, repos, structured notes, securities lending.

**3. Mandate classification.** Rank deviations from the benchmark: smallest (duration = benchmark, tiny sector deviations, tiny fee, small underperformance ≈ fee) = **pure indexing**; modest = **enhanced indexing** (small deviations, modest alpha, low tracking error); large duration/sector deviations and high turnover = **active**. Securities lending does not decide it. **Liability-based** = match asset cash flows to liability payments, minimize shortfall risk.

**4. Inflation protection.** Inflation-linked bonds protect **coupon and principal**; floaters protect **coupon only**. Coupon protection ≈ % floating + % inflation-linked. "**Always** hedges inflation" is the red flag. Floaters → income protection; fixed coupons → predictable liability funding.

**5. Duration and convexity.**
- Option-free → modified duration and convexity. **Embedded options → effective duration and effective convexity.**
- Convexity ranking: **barbell > ladder > bullet**. Higher yield volatility → convexity is worth more.
- Raising exposure of a fully invested portfolio without cash: **long bond futures or receive-fixed swap**. Payer (pay-fixed) swaps cut duration. Expect rates to fall → add duration.

**6. Liability types.**

| Type | Amount | Timing | Example | Duration tool |
|---|---|---|---|---|
| I | known | known | option-free fixed-rate bond | Macaulay, modified, money duration |
| II | known | uncertain | callable/putable bond, term life policy | effective duration |
| III | uncertain | known | FRN, inflation-protected | effective duration |
| IV | uncertain | uncertain | property & casualty insurance | effective duration |

- **Structural risk** (non-parallel shifts/twists) is reduced by minimizing **dispersion** of cash flows, i.e., minimizing the convexity statistic.
- **Cash flow matching** = high-quality zeros/fixed bonds matching amount and timing of liabilities; a motive can be **accounting defeasance** (assets and debt removed from the balance sheet).
- **Contingent immunization** = active management while a surplus exists; switch to immunization if the surplus runs out.
- **Ladder:** diversification over the yield curve and over time; balances reinvestment risk and price risk; more convexity than a bullet; built-in liquidity; bond ETFs can build ladders (liquidity, default-risk diversification, lower cost).

**7. Liquidity premium.** Rises with: lower credit quality, smaller issue, longer maturity, longer time since issuance, less outstanding. Falls with benchmark status and repo-collateral use. Less liquid → wider bid–ask, higher yield.

**8. Taxes.** Tax-exempt investors trade on investment views. Taxable investors: favor capital gains over interest, defer gains, harvest losses to offset gains, sometimes skip a trade because of tax. Pass-through funds distribute realized gains each year.

**9. Funds / ETFs / TRS.** Bond funds: diversification, liquidity, lower transaction costs, but fees. Mutual fund at NAV with a lag; ETF intraday. TRS: less cash, counterparty risk, access to hard-to-hold assets.

### Also tested
- Roles of bonds: diversification (low correlation with equities), regular cash flows, inflation hedging.
- Spread duration and duration times spread: spread changes tend to be proportional.

### Formulas
- Rolling yield = coupon ÷ P₀ + (P₁ − P₀) ÷ P₀, where P₀ = current price, P₁ = expected end price (unchanged curve).
- Price effect ≈ −MD × Δy + ½ × C × (Δy)², where MD = modified duration, C = convexity, Δy = expected change in yield (use Δspread for the spread view).
- Leveraged return = rI + (V_B ÷ V_E)(rI − r_B), where rI = return on invested assets, V_B = borrowed funds, V_E = equity, r_B = cost of borrowing.
- Portfolio MD = Σ MDⱼ × (MVⱼ ÷ MV), where MVⱼ = market value of holding j, MV = portfolio market value.

### Glossary
- **Rolldown:** price gain/loss as a bond ages along an unchanged curve. **Dispersion:** variance of cash-flow timing around the portfolio's duration. **Defeasance:** removing assets and debt from the balance sheet by setting aside high-quality securities. **Bullet / barbell / ladder:** concentrated at one maturity / two extremes / spread evenly. **Effective duration:** price sensitivity from re-pricing under shifted curves (needed with uncertain cash flows).

## LM3 — Asset Allocation to Alternative Investments (AL, 49 Qs)

**Bank weight:** private-investment structure, liquidity planning, NAV, monitoring 21 · functional roles / expected behavior 12 · allocation approach (traditional vs risk-based, MVO vs CVaR) 12 · vehicles and due diligence 4.

### Know cold

**1. Functional roles (4): capital growth, income generation, risk diversification, safety.**
- Private equity = capital growth / return enhancer with an illiquidity premium; limited diversification vs public equity. Expected return ranking: **PE > hedge funds > bonds**.
- Public equity diversifier ranking: **absolute-return hedge funds (high) > equity L/S, PE, private RE (moderate)**. Short-biased strategies lower beta, add some alpha.
- Inflation hedge + low equity correlation → **real assets (commodities)**. PE and hedge funds correlate more with public equity. Timber: low equity correlation plus biological growth and land appreciation (passes a two-role test).
- **Public real estate behaves like equity** (high correlation and beta), so it is not a fixed-income replacement.
- Replacing IG bonds with PE raises expected return **and** volatility and diversifies public equity less.
- Bonds are still the strongest volatility reducer but cost the most in meeting a long-term return target; hedge funds cut less volatility with a smaller return hit.
- Regime mapping: high growth + moderate inflation → high-yield bonds / equity; high inflation (or rising inflation) → real assets.

**2. Traditional (regime/role-based) vs risk-factor approach.**

| | Traditional | Risk-factor |
|---|---|---|
| Idea | classify by role / regime | describe all assets by common risk factors (equity, size, value, liquidity, duration, inflation, credit spread, currency) |
| Pros | intuitive, easy to communicate, cheaper, fits a basic investment committee with low overhead | doesn't group by a few characteristics; one framework across public and private |
| Cons | **overestimates diversification, obscures risk drivers** | sensitive to look-back window, unstable sensitivities, weaker explanatory power for private assets; needs more resources |

- Bank key (Q94): factor-model R² roughly 0.8–1.0 for public assets vs 0.3–0.7 for alternatives.

**3. Why reported alternative statistics mislead.** Appraisal-based / smoothed returns **understate volatility and correlation** (both biased low) → unsmooth before using. **MVO overallocates to alternatives** (understated risk, normality assumed); position limits are a patch. Normality is an assumption for *all* asset classes. **Downside / tail concern → mean–CVaR** (CVaR = average loss in the tail; the covenant test in AL2 uses CVaR, not VaR). Transaction-priced bonds are measured more accurately than appraisal-priced PE.

**4. Private-investment mechanics.**
- **Blind pool** + lagged, less detailed reporting = limited transparency (the concern for a public pension that must report publicly). Demanding full holdings transparency from PE / private credit GPs is unrealistic; governance and expertise requests are fine.
- **Capital calls / distributions:** unpredictable. In a downturn calls can speed up, distributions slow, fund lives extend. Early-retirement payouts + illiquid alternatives = **liquidity risk**.
- **J-curve** early negative returns. **Secondaries:** seasoned portfolio, smaller J-curve, shorter remaining life.
- Liquidity planning: reach and hold the target allocation, meet calls, plan for the unexpected. Hold committed-but-uncalled capital in a liquid proxy (REITs for real estate).
- Lock-ups: hedge funds months to a year; private investments 10+ years. Hedge funds also have independent administrators and limited holdings disclosure; private RE reports per investment.
- **IRR vs MOIC:** never rely on one. Bank key: fast capital return → emphasize MOIC; slow capital return → emphasize IRR. MOIC ignores timing; IRR depends on cash-flow timing.

**5. Vehicles.**

| Vehicle | Key points |
|---|---|
| Limited partnership | full strategy implementation; alignment via GP capital |
| Separately managed account | no GP co-investment; large minimums |
| Fund of funds | simpler reporting and calls, extra fee layer, less customization; fits a small investor with no in-house team |
| UCITS / public funds | liquid but restricted by regulation |
| Public REIT | fits a taxable investor with low overhead |
| Direct LP vs FOF | LP: customization, but passive |

- Hedge funds held mostly by tax-exempt investors are tax-inefficient; angel investing needs in-house resources (bank key).

**6. Monitoring PE / real estate managers (7 items, asked repeatedly):** key-person risk, alignment of interests, style drift, risk management, client/asset turnover, client profile, service providers. Monitor against program goals and beyond IRR; peer benchmarks and custom proxies are weak; others' flows can hurt you in illiquid pooled vehicles; start monitoring before full investment.

### Also tested
- Alternatives' limited transparency and "bets on specific inefficiencies"; top managers are capacity constrained; liquidity cost is manageable with a liquid remainder.
- Monte Carlo for skewed / fat-tailed regimes and the probability of missing goals.
- Evaluating alternatives: compare appraisal-based fund returns to market-based indexes carefully (smoothing biases risk and correlation).

### Formulas
- NAV_t = NAV_{t−1} × (1 + G) + contributions − distributions, where G = expected growth rate, contributions = capital called, distributions = payouts. Flows occur at period end, **after** growth; the distribution rate applies to the **grown** NAV.
- Worked: NAV₀ €25.0m, G 11%, distribution 18% → distribution = 25.0 × 1.11 × 18% = €4.995m; NAV = 27.75 − 4.995 = **€22.755m**.
- MOIC = total value (distributions + remaining NAV) ÷ paid-in capital.

### Glossary
- **CVaR:** expected loss given the loss exceeds VaR. **Commitment pacing:** scheduling commitments so calls and distributions net sensibly. **Unsmoothing:** removing serial correlation from appraisal-based returns. **UCITS:** European regulated fund structure with liquidity/diversification limits.

## LM4 — An Overview of Private Wealth Management (WM, 35 Qs)

**Bank weight:** life cycle / human capital / balance sheet 14 · IPS, goals, risk tolerance 11 · taxes and after-tax returns 10.

### Know cold

**1. Wealth life cycle (7 stages).**

| Stage | Ages | Key point |
|---|---|---|
| Education | 0–25 | dependent, little capital |
| Early career | 25–35 | young, debt, saving begins; large human capital |
| Career development | 35–50 | income growth; human capital is a large share of wealth |
| Peak accumulation | 50–60 | max earnings; retirement income planning and tax minimization |
| Pre-retirement | 60–65 | **total wealth peaks**; max career income |
| Early retirement | 65–75 | most active retirement; still take appropriate risk to grow assets; decumulation begins |
| Late retirement | 75+ | **longevity risk** (outliving resources) is the main issue |

- **Human capital** = PV of expected future labor income, discounted at the **nominal risk-free rate + a premium for income (occupational) risk**; adjusted for survival and wage growth. It **falls** over time; financial capital rises to compensate; total wealth is preserved.
- Earner with stable income (government job) can hold **more** equity; entrepreneur with risky income holds **more** fixed income. A young earner with large human capital can still hold equity but should diversify away from employer/industry risk.
- **Economic balance sheet:** assets (financial capital + human capital) = liabilities (debt, PV of consumption, bequests) + **surplus** (replaces "net worth").
- Retirement ≠ decumulation if the portfolio keeps compounding; decumulation starts when she spends or gives wealth away.

**2. Wealth measures.**
- **Investable wealth** = readily available financial assets; excludes transaction accounts (checking), residence, business, vehicles, DB entitlements.
- Investable net worth = savings + taxable + tax-advantaged − short-term personal debt. Worked: 100 + 200 + 150 − 25 = **425** (checking, vehicles, residence, business assets/liabilities all excluded).
- **Gini coefficient:** 0 = perfect equality, 1 = perfect inequality. 0.50 is **more** unequal than 0.35.

**3. Goals and IPS.**
- IPS parameters: objectives (return, risk), constraints (liquidity, horizon, tax, legal, unique), asset-class / other preferences (incl. ESG). Often-missing background: tax status of accounts, pension and other income.
- **Risk tolerance = ability (capacity, objective) + willingness (perception, subjective)**; it can differ by goal. Long horizon + acceptance of spending shortfall → higher risk tolerance for that goal.
- **Planned goal** = quantified amount and timing; **unplanned** = amount and/or timing uncertain (e.g., medical). Primary objective = quantified, time-specific, needed; secondary = the rest.
- Capital sufficiency fails → revise or prioritize goals. Quantify vague goals (education, apartment) to test consistency with retirement.
- Rebalancing: **time-based** = calendar; **threshold-based** = deviation triggers, more responsive to volatility.

**4. Taxes.**
- **Accrual tax:** paid periodically (annually) → tax drag **compounds**. **Deferred tax:** postponed to the end (capital gains) → tax drag equals roughly the tax rate; more tax-efficient even at the same rate.
- **Tax drag** = share of potential investment growth consumed by taxes. It exceeds the tax rate under accrual taxation and rises with return and horizon.
- Worked: EUR100,000, 7%, 20 years, 20% tax. Accrual: FV = 100,000 × [1 + 0.07 × 0.8]²⁰ = EUR297,357 vs untaxed 386,968 → drag **31%**. Deferred: FV = 329,576 → drag **20%**.
- Worked: 6%, 30 years, 15% annual tax, initial $200,000 → untaxed 1,148,698, taxed 889,429 → drag = 259,269 ÷ 948,698 = **27.3%** (traps: dividing by the untaxed ending value gives 22.6%; by the taxed ending value 29.2%).
- Erosion of inflation-adjusted value (WM5): $10m, 11% pretax, 25% tax, 3% inflation, 10 years → real FV untaxed 21.13m − real FV after tax 16.44m = **$4.69m**. Keep inflation in both legs.
- After-tax real return: 6% nominal, 30% tax, 2% inflation → 1.042 ÷ 1.02 − 1 = **2.2%** (traps: 3.9% = pretax real; 4.2% = after-tax nominal).
- **Average tax rate = total tax ÷ income** (marginal ≠ average). Worked (book): tax 400,000 + 50% × (1,500,000 − 1,000,000) = 650,000 → **43.33%**. Exclude tax-deferred account income when computing the Desais' rate.
- **Basis** = original cost; capital gains tax applies to selling price − basis. Lower long-term capital gains rates give a second benefit.

### Also tested
- Distributions vs income shortfall: after-tax income = yield × (1 − tax) × value. Real value of nominal income = X ÷ (1 + π)^T; pension is indexed, business income isn't.
- Compare after-tax terminal values before deciding to sell half a portfolio.

### Formulas
- Investable net worth = savings + taxable + tax-advantaged − short-term personal debt.
- After-tax FV (accrual) = V × [1 + R(1 − t)]^T, where V = initial value, R = pretax return, t = tax rate, T = years.
- After-tax FV at sale (deferred) = V(1 + g)ⁿ − [V(1 + g)ⁿ − B] × t, where g = annual growth, n = years, B = cost basis, t = capital gains tax rate.
- Tax drag = (untaxed FV − taxed FV) ÷ (untaxed FV − initial investment).
- After-tax real return = [1 + r(1 − t)] ÷ (1 + π) − 1, where r = pretax nominal return, t = tax rate, π = inflation.
- Average tax rate = total tax ÷ income.

### Glossary
- **Longevity risk:** outliving your resources. **Decumulation:** drawing the portfolio down. **Capital sufficiency:** whether assets can fund goals. **Lorenz curve:** cumulative wealth vs cumulative households (Gini compares it with the equality line).

## LM5 — Portfolio Management for Institutional Investors (IN, 47 Qs)

**Bank weight:** DB pension plans 20 · institutional investment models 12 · endowments and foundations 8 · banks, insurers, SWFs 7.

### Know cold

**1. Four investment models (match the profile; tested in nearly every vignette).**

| Model | Profile | Pros / cons |
|---|---|---|
| **Norway** | public equity + fixed income (e.g., 60/40), largely passive, few or no alternatives, tight tracking error | low cost, transparent, low manager risk, simple; **limited alpha** |
| **Endowment** | high alternatives, significant active management, **external** managers | alpha potential; costly, hard to access top managers, hard for very small (access) or very large (footprint) investors |
| **Canada** | high alternatives, **internal** management; reference portfolio (passive public mix), total portfolio approach, active management | needs scale (internal team) |
| **LDI** | liabilities drive the portfolio; maximize surplus return, manage surplus volatility; long-duration bonds, sometimes a hedging + return-generating split | for DB plans, insurers, banks |

- Alts-heavy + active: **external → Endowment; internal → Canada**. Small investors can't meet minimums/staff needs → outsource. Large investors face diseconomies of scale (hard to deploy into capacity-constrained strategies). Endowment model suits long horizon, high risk tolerance, small liquidity needs, skill sourcing alternatives.

**2. DB pension plans.**
- **Liability up** with: more service years, higher salary, longer life expectancy, **lower turnover (more vesting)**, **lower discount rate**. Liability down with higher discount rate / higher turnover. The discount rate reflects **high-quality bond yields**, not expected asset returns.
- **Liquidity needs up** with: older workforce, more retirees relative to actives, ability to switch/withdraw (early-retirement, lump-sum options).
- **Risk tolerance:**

| Higher | Lower |
|---|---|
| overfunded / surplus | underfunded |
| strong, profitable sponsor with low debt | weak sponsor |
| plan small relative to sponsor | plan large relative to sponsor |
| low correlation of sponsor results with plan assets | high correlation (e.g., employer stock in plan) |
| young workforce, mostly actives, high turnover | older workforce / retirees; early-retirement or lump-sum features |

- Required return ≥ liability discount rate; don't double count inflation and salary growth. Older workforce → shorter liability duration, more liquidity, lower risk tolerance.
- Accounting: under ASC 715 the funded status goes on the sponsor's balance sheet (asset if overfunded, liability if underfunded) → shareholders care about DB plans. Surplus can come from forfeitures by unvested leavers.
- **DB vs DC:** DB = employer bears investment and longevity risk; DC = employee bears them. DC sponsor's fiduciary duty = suitable options and providers and education, not guaranteeing outcomes.
- Trend: allocations moved from equities toward alternatives.

**3. Endowments and foundations.**
- Objective: **real return ≥ spending rate (+ costs)**, in perpetuity (intergenerational equity). Nominal = real + inflation. Common target about 5%–5.5% real; typical spending 4%–6% gross, 2%–4% net of gifts.
- Two-step IPS test: (1) does the portfolio's expected real return meet spending? (2) among those that pass, which fits staff, size, and manager access? Required nominal return = real objective + inflation; compare with the weighted expected return of each proposal.
- Risk tolerance **up** with: small share of university budget, debt access, strong inflows, low effective spending.
- US foundations: annual net spending **at least 5%** of assets → more liquidity need than a university endowment.
- Spending rule: Spending_{t+1} = w × [Spending_t × (1 + inflation)] + (1 − w) × spending rate × average AUM, where w = weight on prior spending. w = 1 → constant growth; w = 0 → market value rule (pro-cyclical); between → hybrid.

**4. Sovereign wealth funds (no defined liabilities → no ALM).**

| Type | Objective | Liquidity / allocation |
|---|---|---|
| Budget stabilization | insulate budget from commodity shocks | **most liquid**, mainly bonds and cash |
| Development | fund priority socio-economic projects (infrastructure) | limited universe |
| Savings | share wealth across generations | low liquidity need; equities and alternatives |
| Reserve | cut negative carry of reserves / earn more | equities and alternatives plus a bond slice |
| Pension reserve | meet future pension-related liabilities | long term; equities and alternatives |

- Santiago Principles = voluntary transparency / self-regulation. Typically tax free at home.

**5. Banks and insurers.**
- Liabilities are contractual and measurable → investment strategy is mainly **LDI**. Objective: pay claims with extremely high probability; manage liquidity and risk of the securities portfolio relative to loans and deposits; manage volatility of shareholder capital. Liquidity ratios (NSFR/LCR-type) apply to banks; statutory accounting and reporting to insurers and banks.
- **Asset-sensitive bank:** non-interest-bearing, rate-insensitive funding + floating-rate loans → margins and equity **rise** as rates rise.
- A = L + E. Leverage multiplies asset duration in the equity duration formula.

### Also tested
- Pension stakeholders: employer, employees, retirees, unions, management, board, shareholders. Characteristic that is similar across the target client universe (e.g., scale) matters least for segmentation.
- Choosing an allocation: compute each proposal's weighted expected return; pick the one at or above the requirement.

### Formulas
- Bank equity duration D_E = (A ÷ E) × D_A − (A ÷ E − 1) × D_L × (Δi ÷ Δy), where A = assets, E = equity, D_A, D_L = modified durations of assets and liabilities, Δi ÷ Δy = change in liability yield per change in asset yield.
- Worked (book): E/A = 9%, D_A 2.0, D_L 1.5, Δi/Δy 0.85 → (11.11 × 2) − (10.11 × 1.5 × 0.85) = **9.33**; a +50 bp asset yield move → −0.5% × 9.33 = **−4.67%** change in equity value. At E/A = 10% → 8.53; with D_A cut to 1.75 → 6.03.
- Endowment real return objective ≈ spending rate (+ costs); nominal objective = real objective + inflation.
- DB required return ≥ liability discount rate.

### Glossary
- **Funded status:** plan assets vs liabilities (surplus or deficit). **Intergenerational equity:** fair treatment of current and future beneficiaries. **Reference portfolio:** passive public-market mix used as a cheap, risk-equivalent benchmark (Canada model). **Total portfolio approach:** manage the whole fund's risk exposures as individual investments change. **Vesting:** employee's right to a benefit.

## LM6 — Trading Costs and Electronic Markets (TR, 32 Qs)

**Bank weight:** trading-cost math (spreads, VWAP, implementation shortfall) 13 · market structure / electronic trading / fragmentation 12 · manipulation and HFT strategies 7.

### Know cold

**1. Cost measures: each uses a different benchmark price.**

| Method | Benchmark | Notes |
|---|---|---|
| Effective spread | midquote **at time of trade/order entry** | = 2 × absolute distance of trade price from midpoint; buy: 2(price − mid), sell: 2(mid − price). **Average** the per-trade values (don't sum). Misleading for orders with price improvement or split/delayed fills. |
| VWAP cost | volume-weighted average price over the interval (includes others' trades) | buy: trade VWAP − benchmark VWAP; sell: benchmark VWAP − trade VWAP; × shares. **Biased toward zero** when your trades are a big share of volume (a lone buyer shows zero cost), so it tends to be lower than IS. |
| Implementation shortfall (IS) | **decision (arrival/strike) price** = midquote when the decision was made | paper portfolio − actual portfolio; captures explicit costs + market impact + delay + opportunity cost |

- Inside (market) spread = best ask − best bid across all dealers; ≤ every dealer's own spread.
- Market impact = price change caused by the earlier trades. A market sell order walks down the bid side of the book.
- Worked (book): BYYP trades at 41.50 (mid 41.475) and 41.75 (mid 41.74) → effective spreads 0.05 and 0.02 → average **0.035**.
- Delay cost = price moves away while the order waits; opportunity cost = gain missed on the unfilled part.

**2. Electronic trading.**
- Pros: cost and operational efficiency, no human bias, speed, unlimited attention; narrower spreads from dealer competition; larger effect on equities than bonds (bonds still mostly OTC).
- **Fragmentation:** same instrument trades on many venues. Responses: liquidity aggregators ("super books"), **smart order routing**, searching for liquidity across venues and across time.
- **Latency** = delay between event and action. Reduce with fast communication (shorter distance, collocation) and fast computation (precompute, avoid interpreted languages).
- Order → advanced order → tactic → algorithm (increasing complexity).
- Machine learning works with abundant repeated data and fails in unusual / high-volatility regimes.
- **Systemic risks:** runaway algorithms, fat-finger errors, overlarge orders, malicious order streams. Controls: testing, access controls and peer review of code, broker surveillance (no naked access), marketable limit orders, halts / circuit breakers.

**3. HFT strategies and abuse: classify by what the trader does.**

| Behavior | Label |
|---|---|
| Trades ahead of **liquidity demanders** (large orders being sliced) | **front running** (order anticipation) |
| Trades ahead of **liquidity suppliers** (standing orders); long position relies on standing bids to exit, risk = bids disappear | **quote matching** |
| Buys an undervalued instrument, sells a similar overvalued one across markets | electronic arbitrage |
| Shows exposed limit orders then cancels within about a second | **flickering quotes** |
| Improves quotes when spreads are wide | **leapfrogging** |
| Exposed fake orders + hidden real order on the opposite side | **spoofing (layering)** |
| Trades among commonly controlled accounts to fake activity | **wash trading** |
| Dissemination of false information | **rumormongering** (validate news before acting) |
| Buys to push price up, drawing momentum traders in, then sells to them | **bluffing** (trading for market impact) |

- Structural change that fits "keep the speed advantage": trade halts; **random delays and call markets remove it**.

### Formulas
- Inside spread = best ask − best bid.
- Effective spread (buy) = 2 × (trade price − midpoint); (sell) = 2 × (midpoint − trade price); midpoint = (bid + ask) ÷ 2 at order entry.
- VWAP cost estimate (sell) = (benchmark VWAP − trade VWAP) × shares; (buy) = (trade VWAP − benchmark VWAP) × shares.
- IS = (paper-portfolio value at decision price) − (actual portfolio value), including explicit and implicit costs.

### Glossary
- **Explicit costs:** commissions, fees, taxes. **Implicit costs:** market impact, delay, spread, opportunity. **Price improvement:** fill better than the quote. **Collocation:** placing servers at the exchange. **Hidden order:** order not displayed to the market.

## LM7 — Case Study: Institutional (SWF)

**Bank coverage:** none dedicated; the SWF-type and institutional-model items sit under LM5. Outline below is from the book only.

- **Main risk for long-term institutional investors:** not having enough liquidity in a major downturn to meet obligations **and** rebalance. Liquidity needs rise in a crisis while sources dry up; the risk grows with illiquid allocations. Semi-liquid assets (hedge funds) can have gates and lock-ups; public equity is liquid but selling after a crash may be unattractive.
- **Illiquid assets:** drawdown structure with unknown call/distribution schedule (hold enough liquid assets for calls), stale or appraisal-based pricing with lagged response to public markets.
- **Risk management scope:** aim is to avoid an existential threat; top-down, portfolio-level; market and liquidity risk interact. Due diligence goes beyond performance: character of decision makers, business ethics, team experience, operations, risk practices, auditors, fees, fund structure, custodians. Monitoring continues after investing.
- **Horizon phases:** an accumulation phase (little liquidity need) then a decumulation phase (withdrawals begin) change horizon, liquidity, and risk tolerance.
- **Case (R-SWF, a savings fund, USD 50bn):** investment committee reviews risks of a direct airport infrastructure deal and a direct PE stake in a beverage manufacturer. Guideline answer on ERM: **strength** = a dedicated IC meeting to discuss risks with senior management input; **weaknesses** = little effort to quantify risks or agree specific actions, no scenario analysis (base / optimistic / pessimistic), no pre-agreed mitigation or hedging plan, too little weight on reputational and ESG risk.
- Topics named in the book's contents without bank coverage: universal ownership, externalities, material environmental and social issues.

---

# SECTION 5 — Portfolio Management Pathway (pw_qbank, 386 Qs)

Book: 8 modules. Bank tags: QA = LM1, QB = LM2, QC = LM3, QD = LM4, QE = LM5, QF = LM6, QG = LM7. LM8 (endowment case) has no tag. Question counts are topic counts from the bank.

## LM1 — Index-Based Equity Strategies (QA, 36 Qs)

**Bank weight:** replication, tracking error, ETF vs mutual fund 15 · factor-based / smart beta vs cap-weighting 10 · index requirements and benchmark selection (incl. HHI) 4 · sector / factor attribution 4 · equity index futures 3 · ETFs vs mutual funds 1.

### Know cold

**1. Index requirements and benchmark choice.** Investable index = rule-based + transparent + investable; **float adjustment and buffering improve investability**. Match the benchmark to the client's characteristics: large cap = liquid; value = high yield, low P/E, low P/B; growth = high P/E; positive Size and Value loadings = small-cap value. Price-weighted index = one share of each stock (splits change weights).

**2. Replication ladder.**

| Method | What it is | Tradeoff |
|---|---|---|
| Full replication | hold every index security at index weight | lowest tracking error; costly for large indexes |
| Stratified sampling | split index into **mutually exclusive, exhaustive** strata, sample each | simple, fewer securities, cheaper |
| Optimization | match factor exposures with a model that accounts for **covariances** | sophisticated; fewer holdings than the index |
| Blended | sampling + optimization | e.g., low-volatility Europe funds with fewer holdings and low tracking error |

**3. Tracking error (TE).** TE = volatility of (portfolio return − index return). Drivers: coverage of index holdings (fewer names → more TE), **cash drag**, fees, rebalancing / reconstitution frequency, pricing-time mismatches. Positive excess return of an index fund comes from securities lending income (and from cash drag in a down market). High TE with high excess return suggests luck, not skill.
- ETF shows higher published TE than the mutual fund when ETF price (US close) and index (primary-market close) are struck at different times.
- ETF investors pay bid–ask spreads and brokerage; mutual-fund investors transact at NAV. ETFs: shortable, marginable, intraday.

**4. Securities lending.** Income offsets fund costs and adds to excess return; risks are counterparty and collateral.

**5. Equity index futures.**
- **Equitizing cash:** contracts = (allocation × cash) ÷ (futures price × multiplier). A futures overlay is the cheapest way to rebalance toward policy weights after a correction or to avoid cash drag after an inflow.
- Risk: **basis risk** (futures vs index differences, e.g., dividends, mismatches). No listed derivatives and can't hold constituents → OTC equity index swap (receive index return, pay reference rate + spread).

**6. Factor-based vs cap-weighting.**
- Single-factor strategies **concentrate risk**; they are transparent and replicable (crowding). Fundamental weighting targets mispricing.
- Types: **return-oriented** (momentum, value), **risk-oriented** (low volatility, quality, large cap, volatility-weighted), **diversification-oriented** (equal weight). Overweighting low volatility = risk-oriented.
- Attribution: factor-weighting effect = Σ (w_p,f − w_b,f) × factor return; security selection = weight × (R_p − R_b); share from factor weighting = factor-weight effect ÷ total active effect. Simple sector attribution: underweighting a positive-return sector hurts.

### Formulas
- HHI = Σ wᵢ² (wᵢ = index weight of stock i); effective number of stocks = 1 ÷ HHI; N equal weights → HHI = 1/N.
- Futures contracts to equitize = (target allocation × cash) ÷ (futures price × multiplier).
- Active factor effect = Σ (w_p,f − w_b,f) × R_f, where w_p,f, w_b,f = portfolio / benchmark weight in factor f, R_f = factor return.

### Glossary
- **Buffering:** band that delays constituent changes. **Cash drag:** return dilution from uninvested cash. **Stratified sampling:** sample from non-overlapping subgroups. **Equitization:** futures/swaps to give cash equity exposure.

## LM2 — Active Equity Investing: Strategies (QB, 57 Qs)

**Bank weight:** classifying approaches (fundamental, quant, top-down, bottom-up, relative value, GARP, activism, event-driven) 25 · quantitative methods (factors, back-testing, stat arb, IC) 19 · style analysis 8 · activism 3 · biases 2.

### Know cold

**1. Fundamental vs quantitative.**

| | Fundamental | Quantitative |
|---|---|---|
| Decisions | discretionary, subjective | systematic, rules-based, minimal discretion |
| Breadth | few names, deep company analysis | many names, portfolio-level risk, optimizer |
| Forecasts | future earnings / cash flows of firms | factor returns, using historical data |
| Rebalancing | **event-driven** (price vs target, fundamentals change) | regular intervals / optimizer |
| Typical biases | confirmation, loss aversion, illusion of control | look-ahead, survivorship, data mining / overfitting |

- Bottom-up = security-level analysis (GARP, value, growth picking). Top-down = macro, country, sector, demographics, policy, style rotation by economic cycle. Overlay (e.g., currency) = top-down add-on to a bottom-up portfolio.
- Fundamental process: universe → screen → industry / financial analysis → forecast → valuation → portfolio → rebalance. Quant process: thesis → data → back-test → out-of-sample test → portfolio construction with risk models (covariances) and optimizer.

**2. Fundamental screens: match the stock to the label.**
- **Relative value:** multiple well below sector / industry average. **Income:** high, sustainable dividend yield at fair value. **Deep value:** extremely low absolute multiples (investigate why). **GARP:** low **PEG** with growth above the sector's. **Contrarian:** trade against sentiment. **High-quality value:** intrinsic value + financial strength + profitability.
- **Value trap** risk is highest for backward-looking, screen-based value processes.
- **Event-driven:** short / medium-term corporate-event inefficiencies; distressed control / reorganizations are long-horizon.
- **Statistical arbitrage / pairs:** similar businesses, **current divergence + mean-reverting ratio + high correlation**, no fundamental change. Key risk = divergence is permanent → stop-loss.

**3. Shareholder activism.** Tactics (book): board seats, letters / meetings with management, proxy contests, AGM proposals, balance-sheet restructuring (buybacks, dividends), realigning pay with share price, legal action for breach of fiduciary duty, coordinating with other shareholders, media campaigns, breaking up conglomerates. Soft end → hard end: constructive engagement → proposals → proxy fights / legal action. Management defenses: multi-class shares, poison pill, staggered board, charter / bylaw provisions. Stakes usually < 10%. Typical targets (bank): slow growth, negative momentum, weak governance, **single-class** shares.

**4. Quant mechanics.**
- **IC** = correlation between factor score at t and return at t+1 (timing matters). **Factor-mimicking portfolio** = theoretical long/short, dollar-neutral, unit exposure to one factor. Hedged factor portfolio: long best quantile, short worst.
- **Look-ahead bias:** using data not yet known (e.g., year-end statements before release); fix with point-in-time / initially reported (unrevised) data. **Survivorship bias:** back-test universe excludes failed firms.
- Back-test pitfalls: survivorship, look-ahead, data mining / overfitting, transaction costs, turnover constraints, availability of positions.
- Momentum: winners keep winning over about 2–12 months; value: cheap outperforms. Momentum drawback: crash / tail risk.
- Bias fixes: illusion of control → diversification and trading rules; confirmation → seek contradictory views; loss aversion → stop-losses.

**5. Style analysis.**
- **Holdings-based:** aggregate stock attributes bottom-up; more data, deeper, generally more accurate. **Returns-based:** regress fund returns on style indexes; easier, less detailed; use when holdings aren't disclosed. Adding a factor changes both classifications. Complex / non-standard hedge funds → classify by self-identification (prospectus).
- Morningstar: growth score − value score → growth / core / value. Lipper: sum of Z-scores → value / core / growth, so the two can classify the same fund differently.
- Gaps between stated style and portfolio characteristics vs the index need follow-up with the manager.

### Formulas
- PEG = P/E ÷ expected EPS growth. IC = corr(factor score_t, return_{t+1}).

### Glossary
- **Value trap:** cheap for a reason and stays cheap. **Dollar neutral:** long and short market values equal. **Point-in-time data:** values as they were known on the date. **Quantile:** a fixed-fraction slice of a ranked list.

## LM3 — Active Equity Investing: Portfolio Construction (QC, 55 Qs)

**Bank weight:** active share and active risk 13 · approaches and building blocks 13 · fundamental law (IC, TC, breadth) 9 · implementation, constraints, capacity, trading costs 8 · factor-model attribution of return and variance 6 · risk measures 4 · variance contribution by asset 1.

### Know cold

**1. Four building blocks:** (1) overweight / underweight **rewarded factors** (Market, Size, Value, Momentum), (2) **alpha skills** (timing factors, securities, markets), (3) **position sizing**, (4) **breadth of expertise** (independent decisions). Approach pairs: systematic vs discretionary, bottom-up vs top-down, benchmark-aware vs agnostic. Discretionary bottom-up = concentrated, security-specific (high idiosyncratic risk); systematic = rules, broad universe, diversified, balanced factors. Security-specific factors = bottom-up.

**2. Fundamental law.** E(R_A) = TC × IC × √BR × σ_A.
- **IC** (forecast accuracy → research process), **TC** (ability to implement without constraint → portfolio construction; unconstrained = 1; constraints such as no shorting, caps, turnover lower it), **BR** (number of **independent** decisions per year → *not* the number of securities).
- Book example: σ_A 6%, TC 0.25, IC 0.10 → 15 bps per independent decision; ≈ 40 independent decisions for 1%.
- Breadth rearranged: BR = [E(R_A) ÷ (TC × IC × σ_A)]². Return scales with √BR, so **doubling return needs 4× breadth**. More independent decisions → performance is more reliable evidence of skill.

**3. Active share vs active risk (most-tested pair).**

| Metric | Meaning | Key properties |
|---|---|---|
| Active share = ½ Σ\|w_p − w_b\| | how different holdings are from the benchmark (0 to 1) | depends only on total absolute active weights; **ignores correlations** |
| Active risk (tracking error) | volatility of active return = factor-exposure risk + idiosyncratic risk | reflects correlations; the manager can't fully control it |

- Same active share, **higher active risk** → sector / factor bets rather than security-level bets (a within-sector pair offsets risk; a cross-sector pair adds active risk).
- **High active share + low active risk** = diversified stock picker / multi-factor; **low + low** = closet indexer; high active risk = concentrated, sector or factor bets.
- If factor exposure is neutralized, active risk comes entirely from active share. More securities and lower idiosyncratic risk shrink the active-share contribution to active risk.
- Cash lowers absolute risk but **raises** active risk and active share; concentration raises both.
- **Risk-efficient** = high active share for low active risk (if risk is similar, prefer higher active share).
- Profiles: stock picker = high security risk, tight sector limits; sector rotator = loose sector limits; multi-factor = low security risk, low active risk. High active share + high idiosyncratic risk + low R² → stock picking; high R² → factor betting.

**4. Attribution with a factor model.** Return from factor f = β_f × factor return; **alpha = actual (excess) return − Σ β_f × factor return**; share of return from alpha = alpha ÷ total return. Variance contribution: factor f = β_f × Σⱼ βⱼ Cov(f, j); asset i = wᵢ × Σⱼ wⱼ Cov(i, j); share = contribution ÷ portfolio variance. Active return = Σ (w_p,i − w_b,i) × Rᵢ.

**5. Implementation and capacity.**
- **Binding position constraint = the one that gives the smallest dollar position.** Days to build a position = max position ÷ (ADV × participation limit).
- Market impact rises with trade size vs ADV; large AUM in small caps is hardest. Slippage rises with AUM, falls with market cap / liquidity. Higher AUM is supported by more holdings, lower idiosyncratic risk, larger / more liquid stocks. In the QC4 example AUM growth showed up as 18 → 40 positions, higher Size beta (small-cap tilt), turnover 40% → 20%, factor drift and higher implicit costs that limit alpha.
- Constraints scaling active weights → diminishing returns, lower information ratio. Long-short: **gross exposure = longs + |shorts|**, net = longs − |shorts|; long-only has the most capacity but caps underweights; long-short can use both long and short insights.

**6. Risk measures.** Drawdown = peak-to-trough loss before recovery. "No more than 60% negative deviations" constrains **skewness**. CVaR = average loss beyond VaR.

### Formulas
- E(R_A) = TC × IC × √BR × σ_A, where σ_A = active risk (tracking error).
- Active share = ½ Σ |w_p,i − w_b,i|, where w_p,i, w_b,i = portfolio / benchmark weight of security i.
- Alpha = R − Σ β_f × R_f, where β_f = factor exposure, R_f = factor return (use excess returns).
- Position limit = smallest of: allowed % of ADV × dollar ADV (dollar ADV = market cap × % traded per day); % of AUM limit × AUM; index-weight multiple × index weight × AUM.

### Glossary
- **Closet indexer:** low active share, charges active fees. **Idiosyncratic risk:** security-specific, not explained by factors. **Alpha decay:** loss of value of a signal over time. **ADV:** average daily volume.

## LM4 — Liability-Driven and Index-Based Strategies (QD, 58 Qs)

**Bank weight:** LDI and immunization (single and multiple liabilities, futures overlay, structural risk) 42 · passive bond management (indexing methods, ETFs, TRS) 11 · bond benchmarks 5. This is the heaviest calculation module.

### Know cold

**1. Liability classification (same table as portfolio construction LM2):** Type I known amount, known date; II known amount, uncertain date; III uncertain amount, known date; IV both uncertain. **LDI** = liabilities first; **ALM** = both sides.

**2. Immunization = lock in a return over a horizon.** It locks in the **cash flow yield** (IRR of portfolio cash flows). Parallel shifts are handled by duration matching; **non-parallel shifts / twists = structural risk**; assuming parallel shifts is **model risk**.

| | Single liability | Multiple liabilities |
|---|---|---|
| Value | asset MV ≥ liability PV | asset MV ≥ liability PV |
| Duration | **Macaulay duration = horizon** (not average maturity); rebalance as it drifts | match **money duration (BPV)**, closest available (slightly above or below is fine) |
| Dispersion / convexity | **minimum convexity** | asset dispersion and convexity **≥ liabilities'**, but as low as possible |

- Structural risk ranking: **bullet < ladder < barbell** (barbell = highest dispersion and convexity). For equal durations choose the lowest convexity (single liability) or the lowest convexity above the liabilities' (multiple).
- Zero-coupon matching: no price or reinvestment risk, but availability is limited; zeros held to maturity need no rebalancing. Cash flow matching avoids yield-curve and reinvestment risk but is hard to implement. Duration matching with corporates is usually cheaper than cash-flow matching with Treasuries.
- Immunized portfolio: price and reinvestment effects offset after a rate change.

**3. Futures overlay for a BPV gap.**
- N_f = (BPV_L − BPV_A) ÷ BPV_f; positive = buy, negative = sell. BPV_f = BPV_CTD ÷ conversion factor.
- Asset money duration > liability → **short** futures; < liability → **long**.
- **Under-hedged** (asset duration above liability) = bet rates **fall**; **over-hedged** = bet rates **rise**. To raise surplus when rates are expected to fall, leave asset BPV above liability BPV.
- DB plan with assets short of liability duration: receive-fixed swaps. Hedging against falling rates while expecting a rise → **receiver swaption** (keeps upside); swaption collar (buy receiver, write payer) lowers cost.
- LDI risks: model risk, **spread risk** (asset, liability and hedge yields don't move equally), counterparty credit risk (reduced by exchange trading or CSA collateral), asset liquidity risk.

**4. Bond indexing and benchmarks.**
- **Pure indexing** = full replication (costly / infeasible for broad bond indexes). **Enhanced indexing** = representative sample matching risk factors; modest added return, low tracking error, lower cost, customizable (e.g., ESG), but higher TE and more risk analysis. Broad indexes: enhanced indexing / stratified sampling.
- **TRS** gives synthetic index exposure OTC (low cash outlay, access to hard-to-reach assets; counterparty risk); also passive rate + credit exposure on a corporate index. ETF: liquidity, but bond ETFs can trade at persistent discounts to NAV; mutual funds transact at end-of-day NAV. Small portfolios: pooled funds or TRS beat direct sampling.
- Value-weighted bond index gives more weight to the biggest borrowers. Bonds trade infrequently → matrix pricing.
- Benchmark: match **duration and currency** to the portfolio / horizon and credit risk to risk tolerance; blend sub-benchmarks if needed. Custom benchmark: clear rules, investable, daily valuation, history, turnover data. Ladder = diversification over time + liquidity management.

### Formulas
- Money duration = MD × MV; BPV = money duration × 0.0001, where MD = modified duration, MV = market value.
- N_f = (BPV_L − BPV_A) ÷ BPV_f, where L = liabilities, A = assets, f = futures contract.
- Surplus = assets ÷ liabilities − 1.

### Glossary
- **Cash flow yield:** IRR of the portfolio's cash flows. **Money duration:** duration × value, in currency terms. **CTD / CF:** cheapest-to-deliver bond / its conversion factor. **Receiver swaption:** option to receive fixed. **Dispersion:** spread of cash-flow timing around duration.

## LM5 — Yield Curve Strategies (QE, 40 Qs)

**Bank weight:** duration / convexity price math and positioning 11 · curve trades (steepener, flattener, butterfly) 8 · rolldown and total expected return 6 · key rate durations 5 · currency effects and carry 4 · bond options / swaptions 4 · static-curve strategies 3.

### Know cold

**1. Price change.** %ΔPV ≈ −MD × ΔY + ½ × C × (ΔY)². Include the convexity term for large moves. Higher duration and convexity → larger gains when yields fall; lower duration → smaller loss when yields rise. Portfolio duration and convexity = market-value-weighted averages. For equal duration, **barbell has more convexity (and lower yield) than bullet**. Buying convexity costs yield; higher rate volatility favors convexity. Expect yields to rise → shorten duration.

**2. Curve moves and trades.**

| Move / view | Position |
|---|---|
| **Bear flattening** (short rates rise more) | short the short end (pay-fixed), long the long end |
| **Bull flattening** (long rates fall more) | add duration at the long end |
| **Bear steepening** (long rates rise more) | underweight long-end duration |
| **Steepener** | short long-end duration, long short-end duration; a duration-neutral **flattener loses when the curve steepens** |
| **Positive butterfly view** (expects butterfly spread to fall) | long the bullet (belly), short the barbell (wings) |

- Butterfly spread = −short yield + 2 × medium yield − long yield.

**3. Key rate durations (KRD).** Sum of KRDs = effective duration; first-order ΔPV ≈ −Σ KRD_k × ΔY_k. Position KRD_i = MD_i × (position_i ÷ portfolio value). Active KRD − index KRD shows the curve bet; offset negative differences with longs, positive differences with shorts / pay-fixed at the same tenors.

**4. Static curve, rolldown, riding the curve.**
- Static upward-sloping curve: **extend duration or lever** to earn carry and rolldown (receive-fixed swaps / long futures replicate it). **Rolldown return** = (expected price in 1 yr, unchanged curve − price today) ÷ price today; yield-view effect is separate. **Riding the yield curve** = buy longer than the horizon, sell before maturity; needs a stable upward-sloping curve.
- Bonds held to maturity are unaffected by interim yield changes; rolldown positions are exposed.
- **Total expected return** ≈ rolldown + yield-view price effect + currency effect.

**5. Options and embedded options.** Putable bond = long a put; callable = short a call. Bonds with embedded options (MBS) → **effective duration**. Receiver swaption = bet on lower rates; long puts / payer swaptions = bet on higher rates. Flattening upward-sloping curve: receiver swaption (long end) + put (short end) (bank key).

**6. Currency.** R_DC = (1 + R_FC)(1 + R_FX) − 1 (R_FX = change in the foreign currency in **domestic** terms). **Forward rate bias:** carry from high-yield currencies persists (against parity). Cross-currency carry realized return = rolled local return × FX conversion − funding cost.

### Formulas
- %ΔPV ≈ −MD × ΔY + ½ × C × (ΔY)², where MD = modified duration, C = convexity, ΔY = yield change.
- Butterfly spread = −y_short + 2·y_medium − y_long.
- Rolldown = (P₁ − P₀) ÷ P₀, where P₁ = expected price in 1 year on an unchanged curve, P₀ = price today.
- R_DC = (1 + R_FC)(1 + R_FX) − 1, where R_DC = domestic-currency return, R_FC = foreign-currency return, R_FX = FX change.
- KRD_i = MD_i × (position_i ÷ portfolio value).

### Glossary
- **Bullet / barbell:** cash flows concentrated at one maturity / split between short and long. **Rolldown:** pull-to-par along an unchanged curve. **Empirical duration:** regression estimate of price vs yield changes. **Carry:** income earned from holding the position.

## LM6 — Fixed-Income Active Management: Credit Strategies (QF, 82 Qs)

**Bank weight (largest module):** credit strategies (top-down vs bottom-up, liquidity, structured products, positioning, international) 51 · spread measures (G, I, Z, ASW, OAS) and excess spread 13 · CDS / CDX 11 · VaR and tail risk 6 · empirical vs effective duration (inside the 51).

### Know cold

**1. Credit risk and spread.** Credit spread ≈ POD × LGD; LGD = 1 − recovery rate, so **lower recovery → higher LGD → wider spread**. Yield spread = credit + liquidity components (hard to separate). Spread changes for low-rated bonds are proportional.
- Ratios: higher **coverage** → lower POD; higher **leverage or volatility** → higher POD. Leverage ratios matter for IG, coverage ratios for HY (volatile when cash flows vary).
- Models: **structural** (asset value vs liabilities); **reduced-form** (observable company ratios + macro variables).

**2. Credit cycle (book exhibit).**

| | Early expansion | Late expansion | Peak | Contraction |
|---|---|---|---|---|
| Defaults | peak | falling | stable | rising |
| Spread level | stable | falling | rising | peak |
| Spread slope | stable for high grade, inverted for low ratings | steeper for both | steeper for both | flatter for high grade, inverted for low ratings |

- Upward-sloping credit curve = low near-term default probability rising over time. HY curves invert in a downturn (short-end spreads rise most). Distressed bonds trade on price, so curve shape is unreliable. Spreads between rating categories narrow in strong growth, widen when growth is expected to slow.

**3. Spread measures.**

| Measure | Definition | Notes |
|---|---|---|
| Yield spread | bond yield − nearest on-the-run government yield | equals G-spread if the government curve is flat; > G-spread when the benchmark has a shorter maturity and the curve slopes up |
| **G-spread** | YTM − **interpolated** government yield | security level (bank key) |
| **I-spread** | YTM − interpolated **swap** rate | a point on the swap curve, option-free only |
| ASW | spread over swap curve that equates bond price to par on an asset swap | |
| **Z-spread** | constant spread over the whole **spot** curve | option-free only; Z-spread for an option-free bond = its OAS |
| **OAS** | Z-spread with option value removed (Z-spread − OAS = option cost) | best for comparing bonds with and without options, portfolio level (bank key); model dependent. Callable: lower OAS → more likely to be called |

**4. Excess return and excess spread.**
- Instantaneous excess return = −SpreadDur × ΔSpread. E[ExcessSpread] ≈ Spread₀ × t − SpreadDur × ΔSpread − POD × LGD. Stable spreads: excess ≈ OAS − POD × LGD (relative value = spread vs expected loss).
- Total price effect: −MD × ΔYield − SpreadDur × ΔSpread.
- Underweight the rating category with the lowest expected excess spread. Widening hurts long-spread-duration, low-quality bonds most.

**5. CDS and CDX.**
- Upfront (% notional) ≈ EffSpreadDur × (CDS spread − fixed coupon); buyer pays when spread > coupon. CDS price ≈ 100 − (spread − coupon) × EffSpreadDur. **Protection buyer gains when spreads widen**, loses when they tighten.
- Positioning table:

| View | Trade |
|---|---|
| IG credit curve steepening | buy long-tenor protection, sell short-tenor (duration-match notionals) |
| Late cycle | CDS curve flattening |
| Economic slowdown / HY hurt more than IG | buy HY protection, sell IG protection (short HY, long IG) |
| Underweight a sector | sell index protection, buy sector-subindex protection |
| Credit roll-down (upward-sloping curve) | synthetic = sell protection on the longer maturity |

**6. Strategy by view.** Stable spreads / curves: add spread duration or lower credit quality. Expect widening: shorten spread duration, move up in quality, buy protection, covered bonds (dual recourse) over lower-rated ABS tranches. Recovery with fewer defaults: add credit risk (lower-rated tranches), overweight the region / quality with most tightening. **Flight to quality:** government yields fall, HY spreads rise; IG spreads and rates are negatively correlated.
- IG risk = spread (migration) risk; HY risk = default loss.
- Top-down = macro factors; bottom-up = issuer-specific. Macro factors are not portfolio risk measures (KRD is). Effective duration covers parallel shifts; use KRD for curve reshaping.

**7. Liquidity, tail risk, structured, international.**
- Liquidity highest right after issue and fades with seasoning; outflows hit HY spreads harder; wider bid–ask raises trading costs. Illiquid positions → buy-and-hold sleeve; tactical sleeve → liquid instruments (ETFs, CDS, on-the-run). Liquid alternatives to cash bonds: CDS / CDX, bond ETFs.
- Tail risk: diversification is cheap mitigation; CDS effective but costly; option-based index protection costs premium, which lowers excess spread. Parametric VaR assumes normality; options → Monte Carlo or historical. **Incremental VaR** = change in portfolio VaR from adding a position.
- Structured: CLO of floating-rate loans benefits from rising rates; MBS = short volatility; higher default correlation → mezzanine up relative to senior (bank key).
- International / EM: foreign yield pickup must be net of hedging cost; sovereign ceiling, legal differences, regional credit cycles; EM: external debt / GDP, reserves / GDP, lower quality, commodity concentration, weaker creditor rights; fixed FX regimes are risky; high yields reflect expected depreciation.

### Formulas
- Credit spread ≈ POD × LGD; LGD = 1 − RR (POD = probability of default, RR = recovery rate).
- E[ExcessSpread] ≈ Spread₀ × t − SpreadDur × ΔSpread − POD × LGD (t = holding period in years; SpreadDur = spread duration).
- Upfront ≈ EffSpreadDur × (CDS spread − coupon). MTM on bought protection ≈ EffSpreadDur × (new spread − old spread) × notional.
- Parametric VaR (bond) = MV × MD × (σ_yield × z × √t), where σ_yield = yield volatility, z = 2.33 at 99% one-tailed, t = horizon in years.

### Glossary
- **POD / LGD:** probability of default / loss given default. **Spread duration:** price sensitivity to spread changes. **CDX:** index of CDS. **Covered bond:** dual recourse (cover pool plus issuer). **Sovereign ceiling:** issuers rarely rated above their sovereign.

## LM7 — Trade Strategy and Execution (QG, 58 Qs)

**Bank weight:** trade-cost measurement (IS, delay, arrival, market-adjusted) 23 · algorithms, venues, instruments 13 · strategy selection (urgency, size, liquidity) 11 · benchmarks 6 · governance 5.

### Know cold

**1. Strategy selection.**
- Motives: short-term alpha → urgent; long-term alpha (slow alpha decay) → patient; risk management / hedging; liquidity-driven (client flows, index reconstitution → trade at the closing price); compliance-driven trades are low urgency.
- Inputs: **order** (side, size, % of ADV), **security** (type, alpha, volatility, liquidity), **market** (volume, spreads, volatility), **user** (risk aversion → more urgency). Larger orders → longer horizon.
- **Higher urgency → lower execution risk, higher market impact** (and the reverse). Market impact = adverse price move caused by your own trade; execution risk = adverse move from fundamentals, proxied by volatility.

**2. Benchmarks.**

| Type | Benchmark | Use |
|---|---|---|
| Pre-trade | **arrival / decision price** | alpha or mispricing trades, urgency; also to minimize trading cost |
| Intraday | **VWAP** (participate with volume; rebalancing with buys and sells) / **TWAP** (exclude outliers, volume uncertainty) | no short-term price view |
| Post-trade | **closing price** | index funds, funds valued at the close |

- Don't use the opening price as the benchmark if trading in the opening auction (your trade moves it).

**3. Algorithms.**

| Type | When |
|---|---|
| **Scheduled** (VWAP / TWAP / POV) | liquid security, small order (about ≤ 5–10% of volume), **no adverse price view**, minimize impact, tolerate a longer execution |
| **Liquidity-seeking** | large orders needing speed without impact, information-leakage concern, thin or episodic liquidity (sweeps books, uses dark pools) |
| **Arrival price** | expect prices to move unfavorably; front-loaded; short-term alpha (e.g., order < 15% of volume) |
| Smart order router / dark aggregators | SOR = small orders, best venue; dark aggregators = large orders with leakage concern |

- Dark pools: no pre-trade transparency, trades are still reported after execution, execution less certain.
- By market: small FX / exchange-traded derivative trades via **DMA**; ETD transparent with algos in futures; OTC = lower liquidity, larger trades; fixed income: **RFQs / broker risk trades** for large urgent trades, high-touch agency for large non-urgent; futures with no closing auction → VWAP / TWAP into the close. Equitization after an inflow: futures / ETFs as a temporary bridge.

**4. Cost measurement (all use the decision, arrival or benchmark price).**
- **Basic IS** = execution cost + opportunity cost + fees. **Expanded IS** = **delay + trading (execution) + opportunity + fees**.
- Execution cost (buy) = Σ sⱼpⱼ − Σ sⱼp_d (shares filled); **opportunity cost** = unfilled shares × (final price − decision price); **delay cost** = side × executed shares × (arrival price − decision price). With zero fills: all cost is opportunity cost.
- **Arrival cost (bp)** = side × (avg execution − arrival) ÷ arrival × 10⁴; side = +1 buy, −1 sell. VWAP cost (bp) = side × (avg price − VWAP) ÷ VWAP × 10⁴.
- **Market-adjusted cost = arrival cost − β × index cost**; index cost = side × (index VWAP − index at arrival) ÷ index at arrival. A rising market flatters a buy's market-adjusted cost.
- IS in bp = IS ÷ (order shares × decision price) × 10⁴.

**5. Governance.** Best execution = trade-off among price, cost, speed, likelihood of execution, size; it varies by asset class and venue. Trade policy: approved broker list, regular review, fair pro-rata allocation, consistent trade-error handling (report to compliance, log, resolve without harm to the client).

### Formulas
- Basic IS = execution cost + opportunity cost + fees; expanded IS = delay + trading + opportunity + fees.
- Execution cost (buy) = Σ sⱼpⱼ − Σ sⱼp_d, where sⱼ = shares filled in fill j, pⱼ = fill price, p_d = decision price (reverse the sign for a sell).
- Opportunity cost = (S − Σ sⱼ)(p_n − p_d), where S = order size, p_n = final (closing) price.
- Delay cost = side × Σ sⱼ × (p_a − p_d), where p_a = arrival price, side = +1 buy / −1 sell.
- Arrival cost (bp) = side × (avg execution − p_a) ÷ p_a × 10⁴; VWAP cost (bp) = side × (avg price − VWAP) ÷ VWAP × 10⁴.
- Market-adjusted cost = arrival cost − β × index cost, where β = beta of the stock to the index and index cost = side × (index VWAP − index at arrival) ÷ index at arrival.
- IS (bp) = IS ÷ (S × p_d) × 10⁴.

### Glossary
- **Alpha decay:** rate a signal's value fades. **POV:** percentage-of-volume. **DMA:** direct market access. **RFQ:** request for quote. **Slippage:** gap between decision/benchmark price and fill price.

## LM8 — Case Study: Institutional (Endowment, QUINCO)

**Bank coverage:** none; related items sit in the asset allocation and portfolio construction banks. Outline from the book only.

- **Liquidity can deteriorate in stress** because: capital calls exceed distributions (private weight rises), **gates** on hedge-fund / real-estate vehicles, and the **smoothing effect** (lagged private valuations raise their weight and cut the weight of liquid assets).
- **Tools:** model expected inflows and outflows over several horizons, normal and stress; set a **liquidity budget** (minimum liquidity by time-to-cash category); regular stress tests (historical and hypothetical); monitor the liquidity profile; make sure a rebalancing mechanism exists before adding illiquid assets (illiquid assets have very high rebalancing costs; in the case the fund could not rebalance its fixed-income allocation back to target).
- **Case facts:** liquidity profile of the proposed allocation vs current: the proposal moves about 5% from liquid to illiquid, increasing the illiquid share in every scenario (e.g., high-stress illiquid 42% current vs 50% proposed).
- **Spending policy:** the geometric-smoothing (Yale-type) rule is countercyclical: lower spending in strong markets, **higher spending in a protracted weak market**, which worsens liquidity needs in downturns. Donor inflows also drop in stress. Selling risk assets after sharp drawdowns is undesirable for valuation. Access to top private managers is competitive, so timing is flexible.
