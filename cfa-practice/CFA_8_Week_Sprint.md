# CFA Level II — 8-Weekend Error-Targeted Study Sprint

> **168 non-Ethics errors from 12 mock exams** mapped to exact curriculum sections extracted from 9 CFA PDFs.
> 15 Ethics errors excluded per plan design — review separately via Standards of Practice Handbook.
> Curriculum sources: quants.pdf, Econ.pdf, FSA.pdf, issuers.pdf, equiuty.pdf, FIX.pdf, derivs.pdf, alts.pdf, PM.pdf.

---

### Weekend 1: Quantitative Methods — Regression, Time Series & Machine Learning
*(24 errors across 4 sub-topics)*

* **Targeted Sub-Topics:**
    * **Multiple Regression Diagnostics & Model Selection** (8 errors) — Only looked at Regression 1 (serial correlation), missed Regression 2 (ARCH); Thought insignificant variable would lower adjusted R²; Confused conditional (variance varies with X) with unconditional (variance unrelated to X)
    * **Time Series, Unit Roots & Cointegration** (6 errors) — Thought all three should be rejected/failed; Confused first-differenced stationary series with random walk; Used levels instead of changes in the AR formula
    * **Machine Learning Algorithms & Validation** (8 errors) — Chose high DF (appears everywhere = useless) instead of high MI (discriminates classes); Chose non-linear SVM without considering overfitting; May have confused base error (random noise) with variance error (poor generalization from overfitting)
    * **Backtesting & Data Snooping** (2 errors) — Thought non-overlapping windows were required; Chose survivorship bias instead of data snooping. The vignette explicitly addresses look-ahead and survivorship bias (using point-in-time da
* **Curriculum Focus:**
    * quants.pdf — LM 1: Basics of Multiple Regression and Underlying Assumptions [Page 11], Section: "Assumptions Underlying Multiple Linear" [Page 18]; LM 2: Evaluating Regression Model Fit and Interpreting Model Results [Page 33], Sections: "Goodness Of Fit" [Page 34], "Testing Joint Hypotheses For Coefficients" [Page 41]; LM 3: Model Misspecification [Page 57], Sections: "Violations Of Regression Assumptions: Heteroskedasticity" [Page 63] (Code: Breusch–Pagan Test), "Violations Of Regression Assumptions: Serial Correlation" [Page 69] (Code: Breusch–Godfrey Test), "Violations Of Regression Assumptions: Multicollinearity" [Page 74]
    * quants.pdf — LM 5: Time-Series Analysis [Page 117], Sections: "Linear Trend Models" [Page 121], "Log-Linear Trend Models" [Page 124], "Ar Time-Series Models And Covariance-Stationary Series" [Page 130], "Mean Reversion And Multiperiod Forecasts" [Page 135], "Comparing Forecast Model Performance", "Random Walks" [Page 144], "The Unit Root Test Of Nonstationarity" [Page 148], "Regressions With More Than One Time Series" [Page 167]
    * quants.pdf — LM 6: Machine Learning [Page 205], Sections: "Evaluating Ml Algorithm Performance" [Page 211], "Support Vector Machine" [Page 219], "Classification And Regression Tree" [Page 222], "Ensemble Learning And Random Forest" [Page 226], "Neural Networks, Deep Learning Nets, And Reinforcement Learning" [Page 256], "Choosing An Appropriate Ml Algorithm" [Page 271]; LM 7: Big Data Projects [Page 283], Section: "Performance Evaluation" [Page 320]
    * PM.pdf — LM 6: Backtesting and Simulation [Page 321], Sections: "The Objectives Of Backtesting" [Page 322], "The Backtesting Process" [Page 323], "Common Problems In Backtesting" [Page 340]
* **CFAI Practice Problem Sets:**
    * quants.pdf — LM 1 Practice Problems (Questions 3–5: Q3 linearity/assumption violation, Q4 heteroskedasticity chart identification, Q5 multicollinearity/independence chart), LM 2 Practice Problems (Questions 1, 2, 3, 5: Q1 R² vs adjusted R², Q2 BIC model selection, Q3 AIC for prediction, Q5 F-test joint significance), LM 3 Practice Problems (Questions 1–4: Q1 Breusch-Pagan heteroskedasticity, Q2 Durbin-Watson/Breusch-Godfrey serial correlation, Q3–4 VIF interpretation and remedies)
    * quants.pdf — LM 5 Practice Problems (Questions 2, 5, 7, 8, 12, 13, 18–22, 27–30, 32, 34, 38, 47: Q2 log-linear trend prediction with exponentiation, Q5 AR first-difference one-step forecast, Q7 mean-reverting level b₀/(1−b₁), Q12–13 stationarity after first-differencing, Q18 mean-reversion calculation, Q19–20 AR chain-rule forecasting on first differences, Q22 Cisco log-linear AR forecast, Q27–30 Dickey-Fuller/unit root null/alternative, Q32 seasonal AR, Q34 cointegration long-run validity, Q38 cointegration residual test)
    * quants.pdf — LM 6 Practice Problems (Questions 7–10: Q7 bias-variance tradeoff/overfitting detection, Q8 ensemble learning with SVM, Q9–10 neural networks for non-linear regression; note: SVM soft vs. hard margin is text-only [Page 219] — no standalone EOC question), LM 7 Practice Problems (Questions 13–15, 28–30: Q13 Precision, Q14 F1 Score, Q15 Accuracy, Q28 F1 vs Precision vs Recall weighting, Q29 confusion matrix Type I error/Precision, Q30 accuracy at threshold)
    * PM.pdf — LM 6 Practice Problems (Questions 7, 9, 15: Q7 data snooping/selection bias from thousands of backtests, Q9 look-ahead bias elimination via reporting lag introduces stale data in rolling-window procedure, Q15 bootstrapping to handle rolling-window sample size constraints)
* **Flashcards (Rote Memorization):**
    * ARCH test: Regress squared residuals on lagged squared residuals
    * Serial correlation test: Regular residuals
    * |t| > 1.0 → Adj R² increases
    * Adding variable → R² always increases
    * Variance varies with X → Conditional heteroskedasticity
    * Heteroskedasticity → F-test and t-tests unreliable
    * Breusch-Pagan: H₀ = no conditional heteroskedasticity
    * Reject H₀ → heteroskedasticity present → use robust standard errors
    * Larger sample size fixes multicollinearity, NOT heteroskedasticity
    * DW < d_L → Positive serial correlation
    * DW > 4 − d_L → Negative serial correlation
    * DW ≈ 2 → No serial correlation
    * DW range: 0 to 4
    * F = MSR / MSE (Mean Square Regression / Mean Square Error)
    * Breusch-Godfrey: Fail to reject H0 = NO serial correlation
    * VIF close to 1 = NO multicollinearity; VIF > 5 = problem; VIF > 10 = serious
    * Parsimony + Fit → BIC (lower = better)
    * Prediction → AIC (lower = better)
    * R-squared always increases with more variables — does not penalize complexity
    * Cointegration: Both series have unit roots, residuals don't
    * Δŷ_t = b₀ + b₁Δy_(t-1) + b₂Δy_(t-2)
    * First difference inputs: Δy_t = SG_t - SG_(t-1)
    * Final forecast = Current level + Forecasted change
    * Mean-reverting level: x̄ = b₀ / (1 − b₁)
    * AR(1) forecast: x_t+1 = b₀ + b₁ × x_t

---

### Weekend 2: Economics — Growth Theories, Currency Dynamics & Inflation
*(15 errors across 3 sub-topics)*

* **Targeted Sub-Topics:**
    * **Growth Models, TFP & Convergence Theories** (9 errors) — Divided by capital share (0.448) instead of labor share (0.552); Thought absolute convergence applies regardless of returns; Got the TFP formula backwards
    * **Mundell-Fleming & Currency Forward Mark-to-Market** (2 errors) — Selected Country A — forgot that with high capital mobility, expansionary monetary policy causes depreciation through capital outflows; Added forward points instead of subtracting them. Forward points of −14 means SUBTRACT 0.0014 from spot. The negative sign is already built 
    * **Breakeven Inflation, Macro ERP & Currency Crisis** (4 errors) — Looked at nominal GDP instead of real GDP; Equated BEI with expected inflation; Calculated expected return (5.9%) but forgot to subtract the risk-free rate. ERP = Expected Return − Rf = 5.9% − 3.0% = 2.9%.
* **Curriculum Focus:**
    * Econ.pdf — LM 2: Economic Growth [Page 81], Sections: "Production Function And Growth" [Page 97], "Capital Deepening Vs. Technological" [Page 101], "Labor Supply" [Page 105], "Theories Of Growth" [Page 123], "Implications Of Neoclassical Model" [Page 130], "Extension Of Neoclassical Model" [Page 135], "Endogenous Growth Model" [Page 136], "Convergence Hypotheses" [Page 138], "Growth In An Open Economy" [Page 142]
    * Econ.pdf — LM 1: Currency Exchange Rates: Understanding Equilibrium Value [Page 3], Sections: "Monetary And Fiscal Policies" [Page 48], "The Mark-To-Market Value Of A Forward" [Page 16], "Forward Markets" [Page 13], "Capital Flows" [Page 44]
    * PM.pdf — LM 1: Economics and Investment Markets [Page 3], Sections: "Conventional Government Bonds And Break-Even Inflation Rates" [Page 32], "Equities And The Equity Risk Premium" [Page 59], "How Big Is The Equity Risk Premium?" [Page 66]; issuers.pdf — LM 3: Cost of Capital: Advanced Topics [Page 107], Section: "The Cost Of Equity (Required Return On" [Page 135]; Econ.pdf — LM 1, Section: "Warning Signs Of A Currency Crisis" [Page 58]
* **CFAI Practice Problem Sets:**
    * Econ.pdf — LM 2 Practice Problems (Questions 2, 4–6, 9, 16, 20, 21: Q2 TFP decomposition vs capital deepening, Q4 lower potential GDP → sovereign credit risk, Q5 TFP explains output gap between countries, Q6 aging demographics → lower potential GDP growth, Q9 club convergence requiring institutional reform, Q16 technology as most permanent growth factor, Q20 conditional convergence to same steady-state, Q21 neoclassical open economy yields no permanent growth boost)
    * Econ.pdf — LM 1 Practice Problems (Questions 8, 9, 17, 18: Q8 offsetting triangular arbitrage positions in base/price currency, Q9 mark-to-market forward with signed forward points and position offset calculation, Q17 Mundell-Fleming EM low capital mobility restrictive monetary+fiscal → appreciation, Q18 Mundell-Fleming DM high capital mobility expansionary fiscal → depreciation)
    * PM.pdf — LM 1 Practice Problems (Questions 3, 5, 13, 14: Q3 inflation uncertainty premium, Q5 BEI exceeds expected inflation due to risk premium, Q13 BEI direction indeterminate when expected inflation and uncertainty move opposite, Q14 BEI = expected inflation + uncertainty premium — not expected inflation alone); issuers.pdf — LM 3 Practice Problems (Question 4: Grinold-Kroner macroeconomic ERP build-up: DY + Δ(P/E) + i + g − ΔS − Rf); Econ.pdf — LM 1 Practice Problems (Question 20: rising broad money/declining FX reserves and overvalued exchange rate = currency crisis warning signs)
* **Flashcards (Rote Memorization):**
    * Steady-state = θ/(1-α) + n
    * Divide TFP by LABOR share, then ADD labor growth
    * Diminishing returns → Convergence possible
    * Constant returns → Non-convergence
    * Labor Prod = Capital Deepening + TFP
    * Low K → Higher marginal product of capital
    * Capital export → Trade surplus
    * High K/L → Low MPK → Low returns
    * Potential GDP Growth = Labor Force Growth + Labor Productivity Growth
    * Do NOT include TFP or total hours worked in this equation
    * DY/Y = DA/A + alpha(DK/K) + (1 - alpha)(DL/L)
    * TFP = Output Growth - alpha(Capital Growth) - (1 - alpha)(Labor Growth)
    * High capital mobility: Capital flows dominate → focus on interest rate effects
    * Low capital mobility: Trade flows dominate → focus on spending/import effects
    * Restrictive monetary + Restrictive fiscal (low mobility) = appreciation
    * To offset LONG base currency: use BID (selling)
    * To offset SHORT base currency: use OFFER (buying)
    * Forward points are already signed (negative = subtract)
    * Discount at price currency rate
    * Real GDP = Nominal GDP - Inflation
    * Higher real GDP growth → Higher real yields
    * BEI = Nominal yield - Real yield
    * BEI = Expected inflation + Risk premium
    * ERP = [DY + Δ(P/E) + i + g − ΔS] − Rf
    * Expected Return ≠ ERP

---

### Weekend 3: FSA Part I — Foreign Currency Translation & Intercorporate Investments
*(16 errors across 3 sub-topics)*

* **Targeted Sub-Topics:**
    * **Foreign Currency Translation (Current Rate vs Temporal)** (10 errors) — Used temporal method logic (historical rate for COGS) when question specified current rate method; Thought average rate applies to I/S under hyperinflation; Chose current ratio without analyzing which rates apply
    * **Intercorporate Investments & Goodwill** (4 errors) — Calculated partial goodwill ($4M) but US GAAP requires full goodwill; Common error: forgetting to amortize excess purchase price or using 100% of NI; Chose B (GBP 522.4M). Added the equipment depreciation adjustment (+0.4) instead of subtracting it (-0.4). When equipment is undervalued (FV
    * **Pension Accounting (IFRS vs US GAAP)** (2 errors) — Used actual return instead of expected return, or forgot a component; Used US GAAP treatment (only current service cost) instead of IFRS treatment (both current + past)
* **Curriculum Focus:**
    * FSA.pdf — LM 3: Multinational Operations, Sections: "Disclosures Related To Foreign Currency Transaction Gains And Losses", "Translation Of Foreign Currency Financial", "Translation Methods", "Illustration Of Translation Methods", "Translation Analytical Issues", "Translation In An Hyperinflationary", "Using Both Translation Methods", "Additional Disclosures On The Effects Of Foreign Currency"
    * FSA.pdf — LM 1: Intercorporate Investments, Sections: "Investments In Associates And Joint Ventures", "Amortization Of Excess Purchase Price, Fair Value Option, And Impairment", "Acquisition Method", "The Consolidation Process", "Additional Issues In Business Combinations That Impair Comparability"
    * FSA.pdf — LM 2: Employee Compensation: Post-Employment and Share-Based, Sections: "Financial Reporting For Post-Employment", "Financial Modeling And Valuation Considerations For Post-Employment"
* **CFAI Practice Problem Sets:**
    * FSA.pdf — LM 3 Practice Problems (current rate: all I/S at average rate, CTA to equity; temporal: monetary at current, non-monetary at historical, gain/loss to I/S; hyperinflation: IFRS restate-then-translate vs US GAAP temporal; ratio analysis under each method; transaction gain/loss timing and revaluation)
    * FSA.pdf — LM 1 Practice Problems (equity method carrying value with excess purchase price amortization, full vs partial goodwill, NCI effect on D/E ratio, only amortize depreciable excess)
    * FSA.pdf — LM 2 Practice Problems (US GAAP: Service + Interest − Expected Return ± Amortizations; IFRS: Service + Net Interest; current + past service cost classification)
* **Flashcards (Rote Memorization):**
    * Current Rate: All I/S items at average rate
    * Temporal: Monetary at current, non-monetary at historical
    * IFRS Hyperinflation: Restate → Translate all at current rate
    * US GAAP Hyperinflation: Use temporal method
    * Temporal: Sales and COGS often use same rate
    * Ratios unchanged when num and denom use same rate
    * Current rate method: Translation adjustment → OCI/Equity (balance sheet)
    * Temporal method: Translation gain/loss → Income statement
    * FC strengthens + net asset exposure = positive CTA
    * Temporal: Revenue at average rate, COGS at historical rate
    * Strengthening FC → Historical < Average → COGS grows less than Revenue
    * Result: Higher GPM after translation
    * FX Result on liability = −Liability × (End Rate − Begin Rate)
    * FC liability + FC weakens = Gain
    * FC liability + FC strengthens = Loss
    * FC asset + FC strengthens = Gain
    * Current rate: ALL assets and liabilities at current rate → ratios unchanged
    * Temporal: Different rates for monetary vs non-monetary → ratios change
    * Current rate: Translation adjustment → Equity (OCI)
    * Temporal: Translation gain/loss → Income statement
    * Current rate method: Translation adjustment → OCI/Equity
    * Net asset exposure + FC strengthens = Positive adjustment
    * Net liability exposure + FC strengthens = Negative adjustment
    * FX Gain/Loss = (New Rate - Old Rate) x Foreign Currency Amount
    * Payable decrease = GAIN; Payable increase = LOSS

---

### Weekend 4: FSA Part II — Compensation, Financial Institutions & Corporate Issuers
*(17 errors across 4 sub-topics)*

* **Targeted Sub-Topics:**
    * **Share-Based Compensation & Diluted EPS** (6 errors) — Divided by expiry term (6 years) instead of vesting period (3 years); Used current market price ($18) instead of strike price ($12). The company receives the strike price as cash, not the market price.; Chose B (not change), likely confusing US GAAP with IFRS treatment. Under IFRS the windfall goes to equity (no net income impact), but under
    * **Financial Institutions & Regulatory Capital** (3 errors) — Added Additional Tier 1 Capital to CET1. AT1 and CET1 are different categories. Only CET1 goes in the numerator of the CET1 ratio.; Did not deduct intangible assets and deferred tax assets from common equity before dividing by risk-weighted assets, resulting in 17% instea
    * **Earnings Quality, Accruals & Bond Classification** (4 errors) — Likely looked at the direction of the numbers rather than comparing absolute values; Calculated €500,000 − €300,000 = €200,000. This is the loss allocated to other assets after goodwill, but the question asks for the TOTAL im; Thought both classifications were consistent. Under US GAAP, interest received MUST be classified as operating — there is no choice.
    * **M&A Valuation, Pro Forma & Capital Structure** (4 errors) — Either excluded direct costs or used the borrowing rate instead of solving for the implied rate; May have missed the double-counting of interest or the reversed direction of synergies; Averaged the raw metrics (prices, EPS, BV) across comparables before computing ratios, yielding 67.07. The correct method is to compute mult
* **Curriculum Focus:**
    * FSA.pdf — LM 2: Employee Compensation: Post-Employment and Share-Based, Sections: "Financial Reporting For Share-Based Compensation", "Share-Based Compensation Tax And Share Count Effects, Note Disclosures", "The Debate Over Accounting For Share-Based Compensation", "The Shift To Restricted Stock"
    * FSA.pdf — LM 4: Analysis of Financial Institutions, Sections: "Analyzing A Bank: The Camels Approach", "Analyzing A Bank: Non-Camels Factors", "Analyzing A Bank: Example Of Camels", "Analyzing Property And Casualty Insurance"
    * FSA.pdf — LM 5: Evaluating Quality of Financial Reports, Sections: "Earnings Quality Indicators", "Earnings Persistence And Related Measures Of Accruals", "Cash Flow Quality", "Balance Sheet Quality"; LM 1: Intercorporate Investments, Section: "Investments In Financial Assets: Ifrs 9"
    * issuers.pdf — LM 4: Corporate Restructuring, Sections: "Evaluating Corporate Restructurings", "Modeling And Valuation", "Evaluating Investment Actions"
* **CFAI Practice Problem Sets:**
    * FSA.pdf — LM 2 Practice Problems (vesting period vs option life for expense, treasury stock method for RSUs, strike price vs market price on exercise, IFRS windfall to equity vs US GAAP windfall to I/S)
    * FSA.pdf — LM 4 Practice Problems (CET1 ratio: deduct intangibles + DTA; AT1 ≠ CET1; loan loss allowance ratio trend; provision increases allowance, charge-offs decrease it)
    * FSA.pdf — LM 5 Practice Problems (BS-based vs CF-based accrual ratios, use absolute value, impairment loss allocation: goodwill first); LM 1 Practice Problems (FVPL: coupon + FV changes to P&L; FVOCI: coupon to P&L, FV to OCI; amortized cost: coupon only; US GAAP vs IFRS cash flow classification)
    * issuers.pdf — LM 4 Practice Problems (comparable transaction method: compute multiples individually then average; pro forma: combined D&A + acquired intangible amortization; post-acquisition debt = existing + assumed target + new borrowings; implied lease rate ≠ borrowing rate)
* **Flashcards (Rote Memorization):**
    * Annual expense = Total FV / Vesting period
    * Use vesting period, not option life
    * Diluted shares = Basic + RSUs – (Unrecognized comp expense / Avg share price)
    * Treasury stock method: Net dilution, not gross dilution
    * Assumed repurchases reduce the dilutive impact
    * Paid-in capital increase = Cash from exercise + Reserve transfer
    * Cash = Options exercised × Strike price
    * Reserve transfer = Options exercised × Fair value per option
    * Use STRIKE price, not current market price
    * US GAAP: Excess tax benefit (windfall) = Tax deduction - Cumulative book expense -> hits Income Statement
    * IFRS: Excess tax benefit -> hits Equity (no P&L impact)
    * CET1 Ratio = CET1 Capital / Risk-Weighted Assets
    * Additional Tier 1 does NOT count as CET1
    * CET1: Common stock, retained earnings, AOCI
    * AT1: Preferred stock, hybrid instruments
    * Ending Allowance = Beginning + Provision − Net Charge-offs
    * Provision increases allowance (I/S expense)
    * Charge-offs decrease allowance (B/S write-off)
    * Compare ratio at beginning vs end to determine trend
    * CET1 Ratio = (CET1 Capital - Regulatory Deductions) / Risk-Weighted Assets
    * CET1 Capital = Common Equity - Intangibles - Deferred Tax Assets
    * Accruals ratios: Use ABSOLUTE VALUE to assess
    * Lower |accruals ratio| = higher earnings quality = improvement
    * Higher |accruals ratio| = lower earnings quality = deterioration
    * IFRS Impairment Loss = Carrying Value − Recoverable Amount

---

### Weekend 5: Equity Valuation — Income Models, Multiples & Dividend Policy
*(19 errors across 4 sub-topics)*

* **Targeted Sub-Topics:**
    * **Residual Income Valuation** (6 errors) — Thought low persistence meant lower returns, but it's EXTREME ROE and high accruals; Either forgot to discount RI values, or used WACC instead of cost of equity; Discounted for 10 years instead of 9 years (T-1)
    * **FCFF vs FCFE Selection & Calculation** (7 errors) — Chose DDM based on stable payout history, ignoring that planned expansion means dividends will exceed FCFE; Chose FCFE despite fluctuating leverage; Confused FCFF with FCFE — FCFE changes with leverage, FCFF does not
    * **DDM, H-Model & Dividend Policy** (3 errors) — Either jumped to target immediately or calculated increase but forgot to add to previous dividend; Concluded overvalued without checking 2% threshold; Chose B ($13). Used 0.5H (half of 4 = 2) instead of H (4) in the H-model formula. H is already defined as the half-life, so it should be use
    * **Justified Price Multiples & Insurance Ratios** (3 errors) — Calculated the FORWARD P/E (17.0) instead of TRAILING P/E (18.4). Trailing P/E includes the (1 + g) factor to convert E₀ to its relationship; Used Net Premiums WRITTEN for BOTH ratios. Wrong: Loss Ratio = 2,300 / 3,600 = 63.9% (wrong denominator!), Expense Ratio = 990 / 3,600 = 27.
* **Curriculum Focus:**
    * equiuty.pdf — LM 5: Residual Income Valuation, Sections: "The Residual Income Model", "Single-Stage And Multistage Residual Income", "Relationship To Other Approaches", "Accounting And International Considerations", "Accounting Considerations: Other"
    * equiuty.pdf — LM 3: Free Cash Flow Valuation, Sections: "Forecasting Free Cash Flow And Computing", "Fcff From Net Income", "Computing Fcfe From Fcff", "Two-Stage Free Cash Flow Models", "Three-Stage Free Cash Flow Models", "Non-Operating Assets And Firm Value"; LM 1: Equity Valuation: Applications and Processes, Section: "Selecting The Appropriate Valuation Method"
    * equiuty.pdf — LM 2: Discounted Dividend Valuation, Sections: "The Dividend Discount Model", "The Gordon Growth Model", "Multistage Dividend Discount Models", "The H-Model And Three-Stage Dividend Discount Models", "General Modeling And Estimating A Required Return Using Any Ddm"; issuers.pdf — LM 1: Analysis of Dividends and Share Repurchases, Sections: "Payout Policies", "Share Repurchases"
    * equiuty.pdf — LM 4: Market-Based Valuation: Price and Enterprise Value Multiples, Sections: "Price/Earnings: Valuation Based On Forecasted Fundamentals", "Price/Book Value", "Deriving The Justified P/B Expression", "Justified P/B Expression Based On Residual Income"; FSA.pdf — LM 4: Analysis of Financial Institutions, Section: "Analyzing Property And Casualty Insurance"
* **CFAI Practice Problem Sets:**
    * equiuty.pdf — LM 5 Practice Problems (RI persistence factor ω, finite-horizon discounting T−1 periods not T, OCI + NI for clean surplus, cost of equity not WACC, implied growth from single-stage RI)
    * equiuty.pdf — LM 3 Practice Problems (two-stage FCFF: subtract debt from firm value for equity; FCFE coverage ratio denominator = dividends + repurchases only; changing leverage → FCFF not FCFE); LM 1 Practice Problems (model selection for acquisitions, control perspective → FCFE)
    * equiuty.pdf — LM 2 Practice Problems (H-model: H is already the half-life — do NOT halve again; threshold check before over/under conclusion); issuers.pdf — LM 1 Practice Problems (target payout adjustment model: New Div = Prev Div + Increase)
    * equiuty.pdf — LM 4 Practice Problems (trailing P/E includes (1+g); forward P/E does not; justified P/B = (ROE−g)/(r−g)); FSA.pdf — LM 4 Practice Problems (Loss Ratio uses premiums EARNED; Expense Ratio uses premiums WRITTEN)
* **Flashcards (Rote Memorization):**
    * V₀ = B₀ + Σ PV(RI) + (P_T - B_T)/(1+r)^T
    * Equity models → Discount at cost of equity, NOT WACC
    * RI must be discounted to PV before adding
    * PV of TV = RI_T / [(1 + r - ω) × (1 + r)^(T-1)]
    * Discount for T-1 periods, NOT T periods
    * Denominator uses (1 + r - ω), NOT (1 - ω)
    * RI = (NI + OCI) - (r × Beginning Book Value)
    * Use BEGINNING of period BV for equity charge
    * Include OCI in income for clean surplus compliance
    * V0 = B0 + [(ROE - r) / (r - g)] x B0
    * g = r - [(ROE - r) / (P/B - 1)]
    * For equity valuation: use cost of equity, NOT WACC
    * DDM: Stable dividends = f(profitability)
    * RI: Requires quality accounting
    * FCF: Use when Div ≠ FCFE
    * Changing leverage → Use FCFF not FCFE
    * Multiple growth phases → Multi-stage model
    * FCFF is independent of capital structure
    * FCFE IS affected by capital structure changes
    * Debt issuance/buybacks are financing activities, not operating
    * FCFF: Use when capital structure is changing or evaluating from acquirer perspective
    * FCFE: Use when capital structure is stable
    * DDM: Use when dividends are predictable and no change in control
    * TV = FCFF_(n+1) / (WACC - g)
    * Equity Value = Firm Value - Market Value of Debt

---

### Weekend 6: Private Company Valuation & Alternative Investments
*(21 errors across 4 sub-topics)*

* **Targeted Sub-Topics:**
    * **Private Company Valuation & Discounts** (9 errors) — Forgot to include size premium in the build-up components; Likely forgot that the apartment adjustment offsets the salary adjustment, or incorrectly included dividends as an operating item; Either used the local currency bond or forgot to weight by λ
    * **REIT Valuation: NAV, P/AFFO & REOC** (5 errors) — May have thought NAV would be disadvantaged, but high transaction volumes actually help NAV estimation; Either forgot to subtract maintenance capex or double-counted gains already excluded from FFO; Chose Equity REIT, which has high liquidity but LIMITED growth opportunities due to the 90%+ distribution requirement. REITs cannot retain e
    * **Commodity Returns & Futures Curve Theories** (3 errors) — Forgot one of the three components (likely roll return or collateral return); Chose C (Consumer preferences). Natural gas demand is driven by weather and industrial activity, not consumer preferences. Weather is the on
    * **Hedge Fund Strategies & Liquid Alternatives** (4 errors) — Confused leverage or gate characteristics; Used one-way commission instead of round-trip
* **Curriculum Focus:**
    * equiuty.pdf — LM 6: Private Company Valuation, Sections: "Public Vs. Private Company Valuation", "Earnings Normalization And Cash Flow", "Private Company Discount Rates And Required Rates Of Return", "Valuation Discounts And Premiums", "Private Company Valuation Approaches", "Private Company Valuation: Income-Based", "Private Company Valuation: Market-Based"
    * alts.pdf — LM 3: Investments in Real Estate through Publicly Traded Securities, Sections: "Types Of Publicly Traded Real Estate", "Valuation: Net Asset Value Approach", "Valuation: Relative Value (Price Multiple)", "Reit Mini Case Study: Example Of Disclosures And Valuation Analysis", "Private Vs. Public: A Comparison"
    * alts.pdf — LM 1: Introduction to Commodities and Commodity Derivatives, Sections: "Commodity Sectors", "Commodity Spot And Futures Pricing", "Theories Of Futures Returns", "Components Of Futures Returns", "Contango, Backwardation, And The Roll"
    * alts.pdf — LM 4: Hedge Fund Strategies, Sections: "Introduction And Classification Of Hedge Fund Strategies", "Opportunistic Strategies: Global Macro", "Opportunistic Strategies: Managed Futures", "Multi-Manager Strategies", "Portfolio Contribution Of Hedge Fund"
* **CFAI Practice Problem Sets:**
    * equiuty.pdf — LM 6 Practice Problems (DLOC = 1 − [1/(1+CP)]; total discount = 1 − [(1−DLOC)(1−DLOM)]; build-up approach: r = Rf + ERP + SP + SCRP; expanded CAPM with all premia added directly; normalized earnings: business cycle ROE × current BVPS; investment value vs fair market value)
    * alts.pdf — LM 3 Practice Problems (NAVPS = (NOI/Cap Rate + Cash + Land − Debt) / Shares; AFFO = FFO − maintenance capex, do NOT re-subtract gains; REOC can reinvest 100% vs REIT ≥90% distribution; P/AFFO disadvantaged by one-time items)
    * alts.pdf — LM 1 Practice Problems (total return = price + roll + collateral; hedging pressure hypothesis; primary sector influences; weather across all commodity sectors)
    * alts.pdf — LM 4 Practice Problems (liquid alts: no incentive fees + daily redemption; multi-strategy vs FoF: leverage and gate differences; global macro for drawdown reduction; ETF round-trip cost = 2×commission + spread)
* **Flashcards (Rote Memorization):**
    * Build-up: r_e = r_f + ERP + SP + SCRP
    * SCRP = r_e - (r_f + ERP + SP)
    * CEO salary normalization: Increase SG&A to market rate
    * Remove personal-use assets: Eliminate both operating costs AND depreciation
    * Dividends do NOT affect operating income
    * Control Premium = [1/(1 – DLOC)] – 1
    * Value = Public Equity × (1 + Control Premium) × (1 – DLOM)
    * DLOC ≠ Control Premium — must convert!
    * ERP = ERP_developed + (λ × CRP)
    * CRP = EM bond yield (USD-denominated) – US Treasury yield
    * Use USD-denominated EM bond, NOT local currency bond
    * λ = proportion of revenue from the emerging market
    * Investment Value = Intrinsic Value + Value of Synergies
    * Intrinsic value: What company is worth to ANY owner
    * Investment value: What company is worth to THIS SPECIFIC owner
    * Normalized EPS = Average ROE (business cycle) × Current BVPS
    * Use MOST RECENT business cycle ROE, not long-term historical
    * Use CURRENT book value, not average book value
    * r_e = r_f + B(ERP) + Small Stock Premium + Company-Specific Premium + Industry Premium
    * Only ERP is multiplied by beta; other premiums are added directly
    * DLOC = 1 - [1 / (1 + Control Premium)]
    * Total Discount = 1 - [(1 - DLOC) x (1 - DLOM)]
    * Adjusted Value = Unadjusted Value x (1 - Total Discount)
    * P/AFFO: Disadvantaged by one-time gains/charges (income statement distortion)
    * NAV: Advantaged by high transaction volumes (more comparables)

---

### Weekend 7: Fixed Income — Term Structure, Valuation Framework & Credit
*(26 errors across 5 sub-topics)*

* **Targeted Sub-Topics:**
    * **Term Structure, Forward Rates & Yield Curve Theories** (6 errors) — Used 1-year spot rate (0.75%) instead of the forward rate; Confused preferred habitat (will leave for premium) with segmented markets (cannot leave); Thought unchanged rate meant fairly valued
    * **Binomial Trees, Embedded Options & Convexity** (8 errors) — Confused putable with callable bond convexity behavior; Thought higher volatility would increase OAS; Treated capped floater like uncapped - forgot that the cap limits upside for bondholder when rates rise
    * **Credit Analysis, CVA & Default Risk** (3 errors) — Either forgot to weight the migrations, forgot YTM, or got the sign wrong on spread widening; Added an extra $8 coupon payment in Year 3 on top of recovery value; ADDED the CVA instead of SUBTRACTING it, then reversed the spread calculation. Wrong: PV_corp = 82.1927 + 2.924 = 85.1167, Yield = (100/85.1
    * **CDS Mechanics, Settlement & Upfront Premium** (6 errors) — Used Bond X's recovery rate (40%) instead of CTD Bond Y's rate (35%); Used maturity instead of duration in calculation; Assumed both methods always produce the same result — they differ when held bond ≠ CTD
    * **ABS Credit Analysis & NSFR** (3 errors) — Chose portfolio-based (for dynamic pools) instead of statistics-based (for static, homogeneous pools); Chose portfolio-based, which is for dynamic pools that change over time
* **Curriculum Focus:**
    * FIX.pdf — LM 1: The Term Structure and Interest Rate Dynamics, Sections: "Spot Rates, Forward Rates, And The Forward", "What Is Bootstrapping?", "Ytm In Relation To Spot And Forward Rates", "Active Bond Portfolio Management", "When Spot Rates Evolve As Implied By The Current Forward", "Traditional Theories Of The Term Structure Of Interest Rates", "Preferred Habitat And Qe", "Yield Curve Factor Models", "The Maturity Structure Of Yield Curve Volatilities"
    * FIX.pdf — LM 2: The Arbitrage-Free Valuation Framework, Sections: "Arbitrage-Free Valuation For An Option-Free", "Creating A Binomial Interest Rate Tree", "Calibrating The Binomial Interest Rate Tree To The Term Structure", "The Monte Carlo Method", "Term Structure Models"; LM 3: Valuation and Analysis of Bonds with Embedded Options, Sections: "Callable And Putable Bonds", "Optimal Exercise Of Options", "Effect Of Interest Rate Volatility", "Bonds With Embedded Options: Effective", "Effective Convexity", "Capped And Floored Floating-Rate Bonds", "Convertible Bonds"
    * FIX.pdf — LM 4: Credit Analysis Models, Sections: "Modeling Credit Risk And The Credit Valuation Adjustment", "Credit Scores And Credit Ratings", "Structural And Reduced-Form Credit Models", "Valuing Risky Bonds In An Arbitrage-Free", "Interpreting Changes In Credit Spreads", "The Term Structure Of Credit Spreads", "Credit Analysis For Securitized Debt"
    * FIX.pdf — LM 5: Credit Default Swaps, Sections: "Basic Definitions And Concepts", "Important Features Of Cds Markets", "Basics Of Valuation And Pricing", "Applications Of Cds", "Valuation Differences And Basis Trading"
    * FIX.pdf — LM 4: Credit Analysis Models, Section: "Credit Analysis For Securitized Debt"
* **CFAI Practice Problem Sets:**
    * FIX.pdf — LM 1 Practice Problems (rolling yield = forward rate for period; preferred habitat: will leave for premium vs segmented markets: cannot leave; forward value increases when actual rates < implied rates; key rate duration and volatility annualization)
    * FIX.pdf — LM 2 Practice Problems (binomial calibration: calculated > market → increase rates; Monte Carlo drift adjustment vs benchmarking); LM 3 Practice Problems (effective convexity formula: [PV− + PV+ − 2×PV₀]/[Δcurve² × PV₀]; OAS: ↑volatility → ↑option cost → ↓OAS; callable: can have negative convexity; putable: always positive; convertible floor = MAX(conversion value, straight bond value))
    * FIX.pdf — LM 4 Practice Problems (credit migration: return = −Duration × Δspread; CVA: corporate value = risk-free − CVA; recovery already includes accrued interest — don't double-count)
    * FIX.pdf — LM 5 Practice Problems (CTD = lowest market value bond; upfront = (spread − coupon) × duration; cash settlement: payoff based on CTD + keep bond; physical: deliver bond, receive notional; covered bond: dual recourse)
    * FIX.pdf — LM 4 Practice Problems (statistics-based: short-term, granular, homogeneous, static pools; portfolio-based: dynamic changing pools; NSFR = ASF/RSF)
* **Flashcards (Rote Memorization):**
    * Rolling yield = forward rate for the period
    * 3-year bond held 1 year earns f(2,1)
    * Preferred Habitat: 'I'll leave for enough premium'
    * Segmented Markets: 'I can ONLY invest here, period'
    * Future spot < implied forward → Bond undervalued
    * Future spot > implied forward → Bond overvalued
    * Annual σ = Monthly σ × √12
    * Short-term rates are more volatile than long-term rates
    * Segmented markets: Yields = supply/demand at each maturity independently
    * Pure expectations: Forwards = expected future spots
    * Liquidity preference: Premium required for longer maturities
    * Preferred habitat: Like segmented but investors will move for sufficient premium
    * Lower spot rates -> Higher bond prices -> Long forward gains
    * Forward value increases when actual rates < forward-implied rates
    * Callable → Can have negative convexity
    * Putable → Always positive convexity
    * Z-Spread = OAS + Option Cost
    * ↑ Volatility → ↑ Option Cost → ↓ OAS
    * Uncapped floater = par at reset
    * Capped floater < par when rates can exceed cap
    * Cap benefit to issuer = cost to bondholder
    * Backward induction: Value = [Coupon + 0.5(V_up) + 0.5(V_down)] / (1 + rate)
    * At terminal nodes: Cash flow = Coupon + Par
    * Calculated > Market → Increase rates; Calculated < Market → Decrease rates
    * Callable bonds: negative convexity when call is near the money

---

### Weekend 8: Derivatives & Portfolio Management — Pricing, Greeks & Active Strategies
*(30 errors across 5 sub-topics)*

* **Targeted Sub-Topics:**
    * **Forward & Swap Pricing (Interest Rate, Currency, Equity)** (8 errors) — Used annual rates without adjusting for 6-month period; Used wrong time period for discounting; Used 6-month rate instead of 7-month rate
    * **Options: Binomial Pricing, Greeks & Strategies** (5 errors) — Used single-period model instead of two-period — must calculate values at T=2 first, then work backwards; Used N(−d₁) = 0.411 (put delta) instead of N(d₁) = 0.589 (call delta). For hedging short CALLS, use the call delta.; Selected Vega and Delta. Dealers hedge delta, so the risk is not delta itself but gamma (when the delta hedge breaks due to large price move
    * **Active Management & Fundamental Law** (7 errors) — Thought lower IC reduces weights, but higher IC actually does; Thought constraints reduced breadth, but they reduce transfer coefficient; Reversed the direction. Since actual active risk (10%) exceeds optimal (8.5%), need to REDUCE active risk by shorting the active portfolio a
    * **VaR, Drawdown & Bond Risk Premium** (4 errors) — Calculated monthly VaR without annualizing; Chose relative VaR but cash benchmark makes it redundant; Calculated 5.66% - 2.80% = 2.86%, which gives (Real rate + BRP) combined. Forgot to also subtract the inflation-linked yield (2.32%) to isol
    * **ETF Costs & Commodity Index Construction** (6 errors) — Selected Commodity 3 — likely reversed the formula (Farther − Near) or confused calendar spread with basis.; Selected hedging pressure hypothesis. The vignette states consumer hedging > producer hedging, which under hedging pressure would predict co; Selected frequent rebalancing with small % backwardation. In trending markets, frequent rebalancing forces you to sell winners and buy loser
* **Curriculum Focus:**
    * derivs.pdf — LM 1: Pricing and Valuation of Forward Commitments, Sections: "Carry Arbitrage", "Pricing Equity Forwards And Futures", "Pricing Fixed-Income Forward And Futures", "Pricing And Valuing Swap Contracts", "Pricing And Valuing Currency Swap", "Pricing And Valuing Equity Swap Contracts"
    * derivs.pdf — LM 2: Valuation of Contingent Claims, Sections: "Binomial Option Valuation Model", "One-Period Binomial Model", "Two-Period Binomial Model: Call Options", "Two-Period Binomial Model: Put Options", "Interest Rate Options And Multiperiod Model", "Black-Scholes-Merton (Bsm) Option Valuation", "Option Greeks And Implied Volatility: Delta", "Implied Volatility"
    * PM.pdf — LM 2: Analysis of Active Portfolio Management, Sections: "Active Management And Value Added", "The Sharpe Ratio And The Information Ratio", "Constructing Optimal Portfolios", "Active Security Returns And The Fundamental Law Of Active Management", "The Full Fundamental Law", "Applications Of The Fundamental Law", "Practical Limitations"; LM 4: Using Multifactor Models, Sections: "Factor Models In Return Attribution", "Factor Models In Risk Attribution"
    * PM.pdf — LM 5: Measuring and Managing Market Risk, Sections: "Estimating Var", "The Parametric Method Of Var Estimation", "The Historical Simulation Method Of Var", "Other Key Risk Measures", "Scenario Risk Measures"; LM 1: Economics and Investment Markets, Sections: "Conventional Government Bonds And Break-Even Inflation Rates", "The Slope Of The Yield Curve And The Term"
    * PM.pdf — LM 3: Exchange-Traded Funds: Mechanics and Applications, Sections: "Etf Mechanics", "Understanding Etfs", "Etfs In Portfolio Management"; alts.pdf — LM 1: Introduction to Commodities and Commodity Derivatives, Sections: "Commodity Indexes", "Theories Of Futures Returns", "Contango, Backwardation, And The Roll"
* **CFAI Practice Problem Sets:**
    * derivs.pdf — LM 1 Practice Problems (CIP: match rate period to forward period; FRA: 1×7 uses 1-month and 7-month rates; reverse carry: forward < fair → buy forward, short spot; equity swap: negative return flips pay to receive; swap valuation: FS = (1 − PV_final) / Σ PV factors)
    * derivs.pdf — LM 2 Practice Problems (two-period: work backwards T=2→T=1→T=0; call delta = N(d₁) not N(d₂); gamma highest for ATM options; dealer risk = gamma, speculator risk = theta; option strategy P&L with premiums)
    * PM.pdf — LM 2 Practice Problems (constraints reduce TC not breadth; optimal active risk = (IR/SR_B) × σ_B using BENCHMARK σ; actual > optimal → short active, long benchmark; SR²_combined = SR²_B + IR²); LM 4 Practice Problems (asset allocation = Σ(ΔW × R_B); security selection = Σ(W_P × ΔR); factor tilt = (Portfolio − Benchmark) sensitivities)
    * PM.pdf — LM 5 Practice Problems (annual σ = monthly σ × √12; annualize params first then calc VaR; maximum drawdown definition); LM 1 Practice Problems (BRP = conventional yield − inflation-linked yield − expected inflation)
    * PM.pdf — LM 3 Practice Problems (holding period cost = 2×commission + spread + fee×period/12; prorate management fee for holding period); alts.pdf — LM 1 Practice Problems (calendar spread = near − far; theory of storage vs hedging pressure; trending → infrequent rebalancing)
* **Flashcards (Rote Memorization):**
    * F = S × (1 + r_price × t) / (1 + r_base × t)
    * Always match rate period to forward period!
    * V_t = S_t - F₀/(1+r)^(T-t)
    * (T-t) = time remaining, not elapsed
    * Fixed Rate = (1 - PV_final) / Σ(PV factors)
    * Annualize by multiplying by payment frequency
    * FRA rate = {[1 + L_long×(days_long/360)] / [1 + L_short×(days_short/360)] - 1} × (360/loan_days)
    * 1×7 FRA uses 1-month and 7-month LIBOR rates
    * Loan period = end month - start month = 7 - 1 = 6 months
    * Forward < Fair → Buy forward, short spot, invest
    * Forward > Fair → Sell forward, buy spot, borrow
    * F₀ = FV(S₀) − AI_T − FVCI
    * S₀ (dirty price) = Clean Price + AI at initiation
    * FV(S₀) = S₀ × (1 + r)^T
    * Net CF = Fixed Received - (Equity Return × Notional)
    * Negative equity return → PAY becomes RECEIVE
    * Current Fixed Rate = (1 - PV_final) / Sum(All PV Factors)
    * Swap Value = Notional × (Original Rate - Current Rate) × Sum(PV Factors)
    * π = (1 + r - d)/(u - d)
    * Work backwards: T=2 → T=1 → T=0
    * Each step: c = [π×c_up + (1-π)×c_down]/(1+r)
    * Gamma is highest for ATM options
    * Gamma = ∂²C/∂S² (second derivative)
    * Deep ITM/OTM: Delta is stable → Low gamma
    * ATM: Delta is unstable (~0.5) → Highest gamma

---

