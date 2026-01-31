import pandas as pd
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, Border, Side, PatternFill
from openpyxl.utils import get_column_letter

# Create workbook
wb = Workbook()
ws = wb.active
ws.title = 'Model'

# Define styles
header_font = Font(bold=True, size=11)
title_font = Font(bold=True, size=14)
number_format = '#,##0'
pct_format = '0.0%'

# Column layout:
# A = marker column (x)
# B = labels
# C-F = Annual data (FY 2021-2024)
# G-K = blank separator (5 columns)
# L-O = Quarterly data (Q1-Q4 2024)

annual_years = ['FY 2021', 'FY 2022', 'FY 2023', 'FY 2024']
annual_dates = ['12/31/2021', '12/31/2022', '12/31/2023', '12/31/2024']
annual_cols = ['C', 'D', 'E', 'F']

quarterly_periods = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024']
quarterly_dates = ['3/31/2024', '6/30/2024', '9/30/2024', '12/31/2024']
quarterly_cols = ['L', 'M', 'N', 'O']  # Moved 4 columns over (was H-K, now L-O)

# Segment Revenue Data (in thousands)
segment_annual = {
    'nurse_allied': [2990100, 3982500, 2624500, 1815700],
    'physician_leadership': [594200, 697900, 669700, 728600],
    'tech_workforce': [399900, 562800, 495000, 439500],
}

segment_quarterly = {
    'nurse_allied': [519300, 442400, 399400, 454700],
    'physician_leadership': [188800, 186100, 180600, 173100],
    'tech_workforce': [112800, 112200, 107500, 106900],
}

# Prior year quarterly for YoY (Q1-Q4 2023)
segment_quarterly_prior = {
    'nurse_allied': [756900, 756600, 573400, 537600],  # Q1-Q4 2023 estimated from annual
    'physician_leadership': [170900, 171000, 159600, 168200],
    'tech_workforce': [131200, 130800, 120500, 112500],
}

# Income Statement Data (in thousands)
annual_data = {
    'revenue': [3984235, 5243242, 3789254, 2983781],
    'cost_of_revenue': [2674634, 3526558, 2539673, 2064405],
    'sga': [730451, 936576, 756238, 632489],
    'da': [101152, 133007, 154914, 167103],
    'goodwill_impairment': [0, 0, 0, 222457],
    'interest_expense': [34077, 40398, 54140, 69901],
    'tax_expense': [116533, 162653, 73610, -25595],
    # Balance Sheet - Assets
    'cash': [180928, 64524, 32935, 10649],
    'accounts_receivable': [789131, 675650, 623488, 437817],
    'subcontractor_recv': [239719, 268726, 117703, 70481],
    'prepaid_other': [139290, 84745, 67559, 75968],
    'restricted_cash': [64482, 61218, 68845, 71840],
    'fixed_assets': [127114, 149276, 191385, 186270],
    'other_assets': [156670, 172016, 236796, 258053],
    'deferred_tax_asset': [0, 0, 0, 25829],
    'goodwill': [892341, 935364, 1111549, 897456],
    'intangibles': [514460, 476832, 474134, 381364],
    # Balance Sheet - Liabilities
    'ap_accrued': [425257, 476452, 343847, 184311],
    'accrued_compensation': [354381, 333244, 278536, 287544],
    'other_current_liab': [189752, 48237, 33738, 73930],
    'revolving_credit': [0, 0, 460000, 210000],
    'notes_payable': [842322, 843505, 844688, 845872],
    'deferred_tax_liab': [47814, 22713, 23350, 0],
    'other_lt_liab': [110353, 120566, 108979, 107450],
}

quarterly_data = {
    'revenue': [820878, 740685, 687509, 734709],
    'cost_of_revenue': [563372, 510858, 474454, 515721],
    'sga': [174842, 149044, 149681, 158922],
    'da': [42719, 43101, 41122, 40161],
    'goodwill_impairment': [0, 0, 0, 222457],
    'interest_expense': [16628, 15715, 14444, 23114],
    'tax_expense': [5989, 5730, 819, -38133],
}

# Prior year quarterly revenue for YoY growth (Q1-Q4 2023)
quarterly_revenue_prior = [1126223, 991299, 853463, 818269]

# Track row references for formulas
row_refs = {}

# Start writing data
row = 1

# Title
ws.cell(row=row, column=2, value='AMN Healthcare Services Inc (AMN) - Financial Model').font = title_font
row += 2

# ==================== SEGMENT REVENUE BREAKDOWN ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='SEGMENT REVENUE BREAKDOWN - In Thousands USD').font = header_font
for i, yr in enumerate(annual_years):
    ws.cell(row=row, column=3+i, value=yr).font = header_font
for i, qtr in enumerate(quarterly_periods):
    ws.cell(row=row, column=12+i, value=qtr).font = header_font
row += 1

# Nurse and Allied Solutions
row_refs['seg_nurse'] = row
ws.cell(row=row, column=2, value='Nurse and Allied Solutions')
for i, val in enumerate(segment_annual['nurse_allied']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(segment_quarterly['nurse_allied']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Nurse YoY Growth
row_refs['seg_nurse_yoy'] = row
ws.cell(row=row, column=2, value='  YoY Growth')
# Annual YoY: current / prior - 1
for i, col in enumerate(annual_cols):
    if i == 0:
        ws.cell(row=row, column=3+i, value='')  # No prior year for 2021
    else:
        prior_col = annual_cols[i-1]
        formula = f'={col}{row_refs["seg_nurse"]}/{prior_col}{row_refs["seg_nurse"]}-1'
        ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
# Quarterly YoY (vs prior year same quarter)
for i, val in enumerate(segment_quarterly_prior['nurse_allied']):
    if val > 0:
        formula = f'={quarterly_cols[i]}{row_refs["seg_nurse"]}/{val}-1'
        ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

# Physician and Leadership Solutions
row_refs['seg_physician'] = row
ws.cell(row=row, column=2, value='Physician and Leadership Solutions')
for i, val in enumerate(segment_annual['physician_leadership']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(segment_quarterly['physician_leadership']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Physician YoY Growth
row_refs['seg_physician_yoy'] = row
ws.cell(row=row, column=2, value='  YoY Growth')
for i, col in enumerate(annual_cols):
    if i == 0:
        ws.cell(row=row, column=3+i, value='')
    else:
        prior_col = annual_cols[i-1]
        formula = f'={col}{row_refs["seg_physician"]}/{prior_col}{row_refs["seg_physician"]}-1'
        ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
for i, val in enumerate(segment_quarterly_prior['physician_leadership']):
    if val > 0:
        formula = f'={quarterly_cols[i]}{row_refs["seg_physician"]}/{val}-1'
        ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

# Technology and Workforce Solutions
row_refs['seg_tech'] = row
ws.cell(row=row, column=2, value='Technology and Workforce Solutions')
for i, val in enumerate(segment_annual['tech_workforce']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(segment_quarterly['tech_workforce']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Tech YoY Growth
row_refs['seg_tech_yoy'] = row
ws.cell(row=row, column=2, value='  YoY Growth')
for i, col in enumerate(annual_cols):
    if i == 0:
        ws.cell(row=row, column=3+i, value='')
    else:
        prior_col = annual_cols[i-1]
        formula = f'={col}{row_refs["seg_tech"]}/{prior_col}{row_refs["seg_tech"]}-1'
        ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
for i, val in enumerate(segment_quarterly_prior['tech_workforce']):
    if val > 0:
        formula = f'={quarterly_cols[i]}{row_refs["seg_tech"]}/{val}-1'
        ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

# Total Revenue (formula summing segments)
row_refs['seg_total'] = row
ws.cell(row=row, column=2, value='Total Revenue').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["seg_nurse"]}+{col}{row_refs["seg_physician"]}+{col}{row_refs["seg_tech"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["seg_nurse"]}+{col}{row_refs["seg_physician"]}+{col}{row_refs["seg_tech"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = number_format
row += 1

# Total YoY Growth
row_refs['seg_total_yoy'] = row
ws.cell(row=row, column=2, value='  YoY Growth').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    if i == 0:
        ws.cell(row=row, column=3+i, value='')
    else:
        prior_col = annual_cols[i-1]
        formula = f'={col}{row_refs["seg_total"]}/{prior_col}{row_refs["seg_total"]}-1'
        ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
for i, val in enumerate(quarterly_revenue_prior):
    if val > 0:
        formula = f'={quarterly_cols[i]}{row_refs["seg_total"]}/{val}-1'
        ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

row += 2  # Blank rows

# ==================== INCOME STATEMENT ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='INCOME STATEMENT - In Thousands USD').font = header_font
for i, yr in enumerate(annual_years):
    ws.cell(row=row, column=3+i, value=yr).font = header_font
for i, qtr in enumerate(quarterly_periods):
    ws.cell(row=row, column=12+i, value=qtr).font = header_font
row += 1

# Dates row
ws.cell(row=row, column=2, value='Period Ending')
for i, dt in enumerate(annual_dates):
    ws.cell(row=row, column=3+i, value=dt)
for i, dt in enumerate(quarterly_dates):
    ws.cell(row=row, column=12+i, value=dt)
row += 1

# Revenue
row_refs['revenue'] = row
ws.cell(row=row, column=2, value='Revenue').font = Font(bold=True)
for i, val in enumerate(annual_data['revenue']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['revenue']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Cost of Revenue
row_refs['cost_of_revenue'] = row
ws.cell(row=row, column=2, value='- Cost of Revenue')
for i, val in enumerate(annual_data['cost_of_revenue']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['cost_of_revenue']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Gross Profit (formula)
row_refs['gross_profit'] = row
ws.cell(row=row, column=2, value='Gross Profit').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    ws.cell(row=row, column=3+i, value=f'={col}{row_refs["revenue"]}-{col}{row_refs["cost_of_revenue"]}').number_format = number_format
for i, col in enumerate(quarterly_cols):
    ws.cell(row=row, column=12+i, value=f'={col}{row_refs["revenue"]}-{col}{row_refs["cost_of_revenue"]}').number_format = number_format
row += 1

# SG&A
row_refs['sga'] = row
ws.cell(row=row, column=2, value='- SG&A Expenses')
for i, val in enumerate(annual_data['sga']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['sga']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# D&A
row_refs['da'] = row
ws.cell(row=row, column=2, value='- Depreciation & Amortization')
for i, val in enumerate(annual_data['da']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['da']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Goodwill Impairment
row_refs['goodwill_impairment'] = row
ws.cell(row=row, column=2, value='- Goodwill Impairment')
for i, val in enumerate(annual_data['goodwill_impairment']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['goodwill_impairment']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Operating Income (formula)
row_refs['operating_income'] = row
ws.cell(row=row, column=2, value='Operating Income (Loss)').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["gross_profit"]}-{col}{row_refs["sga"]}-{col}{row_refs["da"]}-{col}{row_refs["goodwill_impairment"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["gross_profit"]}-{col}{row_refs["sga"]}-{col}{row_refs["da"]}-{col}{row_refs["goodwill_impairment"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = number_format
row += 1

# Interest Expense
row_refs['interest_expense'] = row
ws.cell(row=row, column=2, value='- Interest Expense, net')
for i, val in enumerate(annual_data['interest_expense']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['interest_expense']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Pretax Income (formula)
row_refs['pretax_income'] = row
ws.cell(row=row, column=2, value='Pretax Income (Loss)').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["operating_income"]}-{col}{row_refs["interest_expense"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["operating_income"]}-{col}{row_refs["interest_expense"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = number_format
row += 1

# Tax Expense
row_refs['tax_expense'] = row
ws.cell(row=row, column=2, value='- Income Tax Expense (Benefit)')
for i, val in enumerate(annual_data['tax_expense']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
for i, val in enumerate(quarterly_data['tax_expense']):
    ws.cell(row=row, column=12+i, value=val).number_format = number_format
row += 1

# Net Income (formula)
row_refs['net_income'] = row
ws.cell(row=row, column=2, value='Net Income (Loss)').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["pretax_income"]}-{col}{row_refs["tax_expense"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["pretax_income"]}-{col}{row_refs["tax_expense"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = number_format
row += 1

row += 1  # Blank row

# Reference Items section
ws.cell(row=row, column=2, value='Reference Items').font = header_font
row += 1

# EBITDA (formula)
row_refs['ebitda'] = row
ws.cell(row=row, column=2, value='EBITDA')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["operating_income"]}+{col}{row_refs["da"]}+{col}{row_refs["goodwill_impairment"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["operating_income"]}+{col}{row_refs["da"]}+{col}{row_refs["goodwill_impairment"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = number_format
row += 1

# Gross Margin (formula)
row_refs['gross_margin'] = row
ws.cell(row=row, column=2, value='Gross Margin')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["gross_profit"]}/{col}{row_refs["revenue"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["gross_profit"]}/{col}{row_refs["revenue"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

# Operating Margin (formula)
row_refs['operating_margin'] = row
ws.cell(row=row, column=2, value='Operating Margin')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["operating_income"]}/{col}{row_refs["revenue"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["operating_income"]}/{col}{row_refs["revenue"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

# Net Profit Margin (formula)
row_refs['net_margin'] = row
ws.cell(row=row, column=2, value='Net Profit Margin')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["net_income"]}/{col}{row_refs["revenue"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
for i, col in enumerate(quarterly_cols):
    formula = f'={col}{row_refs["net_income"]}/{col}{row_refs["revenue"]}'
    ws.cell(row=row, column=12+i, value=formula).number_format = pct_format
row += 1

row += 2  # Blank rows

# ==================== BALANCE SHEET (ANNUAL ONLY) ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='BALANCE SHEET - In Thousands of USD').font = header_font
for i, yr in enumerate(annual_years):
    ws.cell(row=row, column=3+i, value=yr).font = header_font
# NO QUARTERLY DATA FOR BALANCE SHEET
row += 1

ws.cell(row=row, column=2, value='Period Ending')
for i, dt in enumerate(annual_dates):
    ws.cell(row=row, column=3+i, value=dt)
row += 1

ws.cell(row=row, column=2, value='ASSETS').font = header_font
row += 1

# Cash
row_refs['cash'] = row
ws.cell(row=row, column=2, value='+ Cash and Cash Equivalents')
for i, val in enumerate(annual_data['cash']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Accounts Receivable
row_refs['accounts_receivable'] = row
ws.cell(row=row, column=2, value='+ Accounts Receivable, net')
for i, val in enumerate(annual_data['accounts_receivable']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Subcontractor Receivables
row_refs['subcontractor_recv'] = row
ws.cell(row=row, column=2, value='+ Subcontractor Receivables')
for i, val in enumerate(annual_data['subcontractor_recv']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Prepaid & Other
row_refs['prepaid_other'] = row
ws.cell(row=row, column=2, value='+ Prepaid & Other Current')
for i, val in enumerate(annual_data['prepaid_other']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Total Current Assets (formula)
row_refs['total_current_assets'] = row
ws.cell(row=row, column=2, value='Total Current Assets').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["cash"]}+{col}{row_refs["accounts_receivable"]}+{col}{row_refs["subcontractor_recv"]}+{col}{row_refs["prepaid_other"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

# Restricted Cash
row_refs['restricted_cash'] = row
ws.cell(row=row, column=2, value='+ Restricted Cash & Investments')
for i, val in enumerate(annual_data['restricted_cash']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Fixed Assets
row_refs['fixed_assets'] = row
ws.cell(row=row, column=2, value='+ Fixed Assets, net')
for i, val in enumerate(annual_data['fixed_assets']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Other Assets
row_refs['other_assets'] = row
ws.cell(row=row, column=2, value='+ Other Assets')
for i, val in enumerate(annual_data['other_assets']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Deferred Tax Assets
row_refs['deferred_tax_asset'] = row
ws.cell(row=row, column=2, value='+ Deferred Tax Assets')
for i, val in enumerate(annual_data['deferred_tax_asset']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Goodwill
row_refs['goodwill'] = row
ws.cell(row=row, column=2, value='+ Goodwill')
for i, val in enumerate(annual_data['goodwill']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Intangibles
row_refs['intangibles'] = row
ws.cell(row=row, column=2, value='+ Intangible Assets, net')
for i, val in enumerate(annual_data['intangibles']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Total Assets (formula)
row_refs['total_assets'] = row
ws.cell(row=row, column=2, value='Total Assets').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["total_current_assets"]}+{col}{row_refs["restricted_cash"]}+{col}{row_refs["fixed_assets"]}+{col}{row_refs["other_assets"]}+{col}{row_refs["deferred_tax_asset"]}+{col}{row_refs["goodwill"]}+{col}{row_refs["intangibles"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

row += 1
ws.cell(row=row, column=2, value="LIABILITIES & SHAREHOLDERS' EQUITY").font = header_font
row += 1

# AP & Accrued
row_refs['ap_accrued'] = row
ws.cell(row=row, column=2, value='+ Accounts Payable & Accrued')
for i, val in enumerate(annual_data['ap_accrued']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Accrued Compensation
row_refs['accrued_compensation'] = row
ws.cell(row=row, column=2, value='+ Accrued Compensation & Benefits')
for i, val in enumerate(annual_data['accrued_compensation']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Other Current Liabilities
row_refs['other_current_liab'] = row
ws.cell(row=row, column=2, value='+ Other Current Liabilities')
for i, val in enumerate(annual_data['other_current_liab']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Total Current Liabilities (formula)
row_refs['total_current_liab'] = row
ws.cell(row=row, column=2, value='Total Current Liabilities').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["ap_accrued"]}+{col}{row_refs["accrued_compensation"]}+{col}{row_refs["other_current_liab"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

# Revolving Credit
row_refs['revolving_credit'] = row
ws.cell(row=row, column=2, value='+ Revolving Credit Facility')
for i, val in enumerate(annual_data['revolving_credit']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Notes Payable
row_refs['notes_payable'] = row
ws.cell(row=row, column=2, value='+ Notes Payable, net')
for i, val in enumerate(annual_data['notes_payable']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Deferred Tax Liabilities
row_refs['deferred_tax_liab'] = row
ws.cell(row=row, column=2, value='+ Deferred Income Taxes')
for i, val in enumerate(annual_data['deferred_tax_liab']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Other LT Liabilities
row_refs['other_lt_liab'] = row
ws.cell(row=row, column=2, value='+ Other Long-term Liabilities')
for i, val in enumerate(annual_data['other_lt_liab']):
    ws.cell(row=row, column=3+i, value=val).number_format = number_format
row += 1

# Total Liabilities (formula)
row_refs['total_liabilities'] = row
ws.cell(row=row, column=2, value='Total Liabilities').font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["total_current_liab"]}+{col}{row_refs["revolving_credit"]}+{col}{row_refs["notes_payable"]}+{col}{row_refs["deferred_tax_liab"]}+{col}{row_refs["other_lt_liab"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

# Stockholders' Equity
row_refs['stockholders_equity'] = row
ws.cell(row=row, column=2, value="Stockholders' Equity").font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["total_assets"]}-{col}{row_refs["total_liabilities"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

# Total Liabilities & Equity
row_refs['total_liab_equity'] = row
ws.cell(row=row, column=2, value="Total Liabilities & Equity").font = Font(bold=True)
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["total_liabilities"]}+{col}{row_refs["stockholders_equity"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

row += 1
# Check A=L+E
row_refs['balance_check'] = row
ws.cell(row=row, column=2, value='Check A=L+E')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["total_assets"]}-{col}{row_refs["total_liab_equity"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

row += 2

# ==================== INTEREST SCHEDULE ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='INTEREST EXPENSE AND DEBT SCHEDULE').font = header_font
for i, yr in enumerate(annual_years):
    ws.cell(row=row, column=3+i, value=yr).font = header_font
row += 1

row_refs['int_sched_expense'] = row
ws.cell(row=row, column=2, value='Interest Expense')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["interest_expense"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

row_refs['total_debt'] = row
ws.cell(row=row, column=2, value='Total Debt')
for i, col in enumerate(annual_cols):
    formula = f'={col}{row_refs["revolving_credit"]}+{col}{row_refs["notes_payable"]}'
    ws.cell(row=row, column=3+i, value=formula).number_format = number_format
row += 1

row_refs['implied_rate'] = row
ws.cell(row=row, column=2, value='Implied Interest Rate')
for i, col in enumerate(annual_cols):
    formula = f'=IF({col}{row_refs["total_debt"]}>0,{col}{row_refs["int_sched_expense"]}/{col}{row_refs["total_debt"]},0)'
    ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
row += 1

row_refs['debt_to_ebitda'] = row
ws.cell(row=row, column=2, value='Debt / EBITDA')
for i, col in enumerate(annual_cols):
    formula = f'=IF({col}{row_refs["ebitda"]}>0,{col}{row_refs["total_debt"]}/{col}{row_refs["ebitda"]},0)'
    ws.cell(row=row, column=3+i, value=formula).number_format = '0.0x'
row += 1

row += 2

# ==================== PPE AND CAPEX SCHEDULE ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='PPE AND CAPEX SCHEDULE').font = header_font
for i, yr in enumerate(['FY 2022', 'FY 2023', 'FY 2024']):
    ws.cell(row=row, column=4+i, value=yr).font = header_font
row += 1

row_refs['capex'] = row
ws.cell(row=row, column=2, value='CapEx (implied)')
ws.cell(row=row, column=4, value=f'=D{row_refs["fixed_assets"]}-C{row_refs["fixed_assets"]}+D{row_refs["da"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["fixed_assets"]}-D{row_refs["fixed_assets"]}+E{row_refs["da"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["fixed_assets"]}-E{row_refs["fixed_assets"]}+F{row_refs["da"]}').number_format = number_format
row += 1

row_refs['ppe_revenue'] = row
ws.cell(row=row, column=2, value='Revenue')
ws.cell(row=row, column=4, value=f'=D{row_refs["revenue"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["revenue"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["revenue"]}').number_format = number_format
row += 1

row_refs['capex_pct'] = row
ws.cell(row=row, column=2, value='CapEx as % of Revenue')
ws.cell(row=row, column=4, value=f'=D{row_refs["capex"]}/D{row_refs["ppe_revenue"]}').number_format = pct_format
ws.cell(row=row, column=5, value=f'=E{row_refs["capex"]}/E{row_refs["ppe_revenue"]}').number_format = pct_format
ws.cell(row=row, column=6, value=f'=F{row_refs["capex"]}/F{row_refs["ppe_revenue"]}').number_format = pct_format
row += 1

row += 1

row_refs['ppe_da'] = row
ws.cell(row=row, column=2, value='Depreciation & Amortization')
ws.cell(row=row, column=4, value=f'=D{row_refs["da"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["da"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["da"]}').number_format = number_format
row += 1

row_refs['da_pct'] = row
ws.cell(row=row, column=2, value='D&A as % of Revenue')
ws.cell(row=row, column=4, value=f'=D{row_refs["ppe_da"]}/D{row_refs["ppe_revenue"]}').number_format = pct_format
ws.cell(row=row, column=5, value=f'=E{row_refs["ppe_da"]}/E{row_refs["ppe_revenue"]}').number_format = pct_format
ws.cell(row=row, column=6, value=f'=F{row_refs["ppe_da"]}/F{row_refs["ppe_revenue"]}').number_format = pct_format
row += 1

row += 2

# ==================== COMMON SIZE BALANCE SHEET ====================
ws.cell(row=row, column=2, value='COMMON SIZE BALANCE SHEET').font = header_font
row += 1
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='Balance Sheet Items as % of Revenue').font = header_font
for i, yr in enumerate(annual_years):
    ws.cell(row=row, column=3+i, value=yr).font = header_font
row += 1

ws.cell(row=row, column=2, value='ASSETS').font = header_font
row += 1

common_size_assets = [
    ('+ Cash and Cash Equivalents', 'cash'),
    ('+ Accounts Receivable, net', 'accounts_receivable'),
    ('+ Subcontractor Receivables', 'subcontractor_recv'),
    ('+ Prepaid & Other Current', 'prepaid_other'),
    ('Total Current Assets', 'total_current_assets'),
    ('+ Restricted Cash & Investments', 'restricted_cash'),
    ('+ Fixed Assets, net', 'fixed_assets'),
    ('+ Other Assets', 'other_assets'),
    ('+ Deferred Tax Assets', 'deferred_tax_asset'),
    ('+ Goodwill', 'goodwill'),
    ('+ Intangible Assets, net', 'intangibles'),
    ('Total Assets', 'total_assets'),
]

for label, key in common_size_assets:
    bold = 'Total' in label
    ws.cell(row=row, column=2, value=label)
    if bold:
        ws.cell(row=row, column=2).font = Font(bold=True)
    for i, col in enumerate(annual_cols):
        formula = f'={col}{row_refs[key]}/{col}{row_refs["revenue"]}'
        ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
    row += 1

row += 1
ws.cell(row=row, column=2, value="LIABILITIES & EQUITY").font = header_font
row += 1

common_size_liab = [
    ('+ Accounts Payable & Accrued', 'ap_accrued'),
    ('+ Accrued Compensation & Benefits', 'accrued_compensation'),
    ('+ Other Current Liabilities', 'other_current_liab'),
    ('Total Current Liabilities', 'total_current_liab'),
    ('+ Revolving Credit Facility', 'revolving_credit'),
    ('+ Notes Payable, net', 'notes_payable'),
    ('+ Deferred Income Taxes', 'deferred_tax_liab'),
    ('+ Other Long-term Liabilities', 'other_lt_liab'),
    ('Total Liabilities', 'total_liabilities'),
    ("Stockholders' Equity", 'stockholders_equity'),
    ("Total Liabilities & Equity", 'total_liab_equity'),
]

for label, key in common_size_liab:
    bold = 'Total' in label or 'Equity' in label
    ws.cell(row=row, column=2, value=label)
    if bold:
        ws.cell(row=row, column=2).font = Font(bold=True)
    for i, col in enumerate(annual_cols):
        formula = f'={col}{row_refs[key]}/{col}{row_refs["revenue"]}'
        ws.cell(row=row, column=3+i, value=formula).number_format = pct_format
    row += 1

row += 2

# ==================== EQUITY SCHEDULE ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='EQUITY SCHEDULE').font = header_font
for i, yr in enumerate(['FY 2022', 'FY 2023', 'FY 2024']):
    ws.cell(row=row, column=4+i, value=yr).font = header_font
row += 1

row_refs['equity_bop'] = row
ws.cell(row=row, column=2, value='Beginning of Period').font = Font(bold=True)
ws.cell(row=row, column=4, value=f'=C{row_refs["stockholders_equity"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=D{row_refs["stockholders_equity"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=E{row_refs["stockholders_equity"]}').number_format = number_format
row += 1

row_refs['equity_ni'] = row
ws.cell(row=row, column=2, value='+ Net Income')
ws.cell(row=row, column=4, value=f'=D{row_refs["net_income"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["net_income"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["net_income"]}').number_format = number_format
row += 1

row_refs['equity_other'] = row
ws.cell(row=row, column=2, value='+ Other Changes (Buybacks/Dividends/OCI)')
ws.cell(row=row, column=4, value=f'=D{row_refs["stockholders_equity"]}-D{row_refs["equity_bop"]}-D{row_refs["equity_ni"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["stockholders_equity"]}-E{row_refs["equity_bop"]}-E{row_refs["equity_ni"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["stockholders_equity"]}-F{row_refs["equity_bop"]}-F{row_refs["equity_ni"]}').number_format = number_format
row += 1

row_refs['equity_eop'] = row
ws.cell(row=row, column=2, value='End of Period').font = Font(bold=True)
ws.cell(row=row, column=4, value=f'=D{row_refs["stockholders_equity"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["stockholders_equity"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["stockholders_equity"]}').number_format = number_format
row += 1

row += 2

# ==================== STATEMENT OF CASH FLOWS ====================
ws.cell(row=row, column=1, value='x')
ws.cell(row=row, column=2, value='STATEMENT OF CASH FLOWS (Derived)').font = header_font
for i, yr in enumerate(['FY 2022', 'FY 2023', 'FY 2024']):
    ws.cell(row=row, column=4+i, value=yr).font = header_font
row += 1

ws.cell(row=row, column=2, value='Operating Activities:').font = header_font
row += 1

row_refs['scf_ni'] = row
ws.cell(row=row, column=2, value='Net Income')
ws.cell(row=row, column=4, value=f'=D{row_refs["net_income"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["net_income"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["net_income"]}').number_format = number_format
row += 1

row_refs['scf_da'] = row
ws.cell(row=row, column=2, value='+ Depreciation & Amortization')
ws.cell(row=row, column=4, value=f'=D{row_refs["da"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["da"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["da"]}').number_format = number_format
row += 1

row_refs['scf_impairment'] = row
ws.cell(row=row, column=2, value='+ Goodwill Impairment')
ws.cell(row=row, column=4, value=f'=D{row_refs["goodwill_impairment"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["goodwill_impairment"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["goodwill_impairment"]}').number_format = number_format
row += 1

row_refs['scf_ar'] = row
ws.cell(row=row, column=2, value='change in + Accounts Receivable')
ws.cell(row=row, column=4, value=f'=-(D{row_refs["accounts_receivable"]}-C{row_refs["accounts_receivable"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=-(E{row_refs["accounts_receivable"]}-D{row_refs["accounts_receivable"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=-(F{row_refs["accounts_receivable"]}-E{row_refs["accounts_receivable"]})').number_format = number_format
row += 1

row_refs['scf_sub'] = row
ws.cell(row=row, column=2, value='change in + Subcontractor Receivables')
ws.cell(row=row, column=4, value=f'=-(D{row_refs["subcontractor_recv"]}-C{row_refs["subcontractor_recv"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=-(E{row_refs["subcontractor_recv"]}-D{row_refs["subcontractor_recv"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=-(F{row_refs["subcontractor_recv"]}-E{row_refs["subcontractor_recv"]})').number_format = number_format
row += 1

row_refs['scf_prepaid'] = row
ws.cell(row=row, column=2, value='change in + Prepaid & Other')
ws.cell(row=row, column=4, value=f'=-(D{row_refs["prepaid_other"]}-C{row_refs["prepaid_other"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=-(E{row_refs["prepaid_other"]}-D{row_refs["prepaid_other"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=-(F{row_refs["prepaid_other"]}-E{row_refs["prepaid_other"]})').number_format = number_format
row += 1

row_refs['scf_ap'] = row
ws.cell(row=row, column=2, value='change in + Payables & Accruals')
ws.cell(row=row, column=4, value=f'=D{row_refs["ap_accrued"]}-C{row_refs["ap_accrued"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["ap_accrued"]}-D{row_refs["ap_accrued"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["ap_accrued"]}-E{row_refs["ap_accrued"]}').number_format = number_format
row += 1

row_refs['scf_comp'] = row
ws.cell(row=row, column=2, value='change in + Accrued Compensation')
ws.cell(row=row, column=4, value=f'=D{row_refs["accrued_compensation"]}-C{row_refs["accrued_compensation"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["accrued_compensation"]}-D{row_refs["accrued_compensation"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["accrued_compensation"]}-E{row_refs["accrued_compensation"]}').number_format = number_format
row += 1

row_refs['scf_other_cl'] = row
ws.cell(row=row, column=2, value='change in + Other ST Liabilities')
ws.cell(row=row, column=4, value=f'=D{row_refs["other_current_liab"]}-C{row_refs["other_current_liab"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["other_current_liab"]}-D{row_refs["other_current_liab"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["other_current_liab"]}-E{row_refs["other_current_liab"]}').number_format = number_format
row += 1

row_refs['cfo'] = row
ws.cell(row=row, column=2, value='Cash Flow From Operations').font = Font(bold=True)
ws.cell(row=row, column=4, value=f'=D{row_refs["scf_ni"]}+D{row_refs["scf_da"]}+D{row_refs["scf_impairment"]}+D{row_refs["scf_ar"]}+D{row_refs["scf_sub"]}+D{row_refs["scf_prepaid"]}+D{row_refs["scf_ap"]}+D{row_refs["scf_comp"]}+D{row_refs["scf_other_cl"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["scf_ni"]}+E{row_refs["scf_da"]}+E{row_refs["scf_impairment"]}+E{row_refs["scf_ar"]}+E{row_refs["scf_sub"]}+E{row_refs["scf_prepaid"]}+E{row_refs["scf_ap"]}+E{row_refs["scf_comp"]}+E{row_refs["scf_other_cl"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["scf_ni"]}+F{row_refs["scf_da"]}+F{row_refs["scf_impairment"]}+F{row_refs["scf_ar"]}+F{row_refs["scf_sub"]}+F{row_refs["scf_prepaid"]}+F{row_refs["scf_ap"]}+F{row_refs["scf_comp"]}+F{row_refs["scf_other_cl"]}').number_format = number_format
row += 1

row += 1
ws.cell(row=row, column=2, value='Investing Activities:').font = header_font
row += 1

row_refs['scf_ppe'] = row
ws.cell(row=row, column=2, value='change in + Property, Plant & Equip')
ws.cell(row=row, column=4, value=f'=-((D{row_refs["fixed_assets"]}-C{row_refs["fixed_assets"]})+D{row_refs["da"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=-((E{row_refs["fixed_assets"]}-D{row_refs["fixed_assets"]})+E{row_refs["da"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=-((F{row_refs["fixed_assets"]}-E{row_refs["fixed_assets"]})+F{row_refs["da"]})').number_format = number_format
row += 1

row_refs['scf_other_lt_assets'] = row
ws.cell(row=row, column=2, value='change in + Other LT Assets')
ws.cell(row=row, column=4, value=f'=-((D{row_refs["restricted_cash"]}-C{row_refs["restricted_cash"]})+(D{row_refs["other_assets"]}-C{row_refs["other_assets"]})+(D{row_refs["deferred_tax_asset"]}-C{row_refs["deferred_tax_asset"]}))').number_format = number_format
ws.cell(row=row, column=5, value=f'=-((E{row_refs["restricted_cash"]}-D{row_refs["restricted_cash"]})+(E{row_refs["other_assets"]}-D{row_refs["other_assets"]})+(E{row_refs["deferred_tax_asset"]}-D{row_refs["deferred_tax_asset"]}))').number_format = number_format
ws.cell(row=row, column=6, value=f'=-((F{row_refs["restricted_cash"]}-E{row_refs["restricted_cash"]})+(F{row_refs["other_assets"]}-E{row_refs["other_assets"]})+(F{row_refs["deferred_tax_asset"]}-E{row_refs["deferred_tax_asset"]}))').number_format = number_format
row += 1

row_refs['scf_goodwill'] = row
ws.cell(row=row, column=2, value='change in + Goodwill (Acquisitions)')
ws.cell(row=row, column=4, value=f'=-((D{row_refs["goodwill"]}-C{row_refs["goodwill"]})+D{row_refs["goodwill_impairment"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=-((E{row_refs["goodwill"]}-D{row_refs["goodwill"]})+E{row_refs["goodwill_impairment"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=-((F{row_refs["goodwill"]}-E{row_refs["goodwill"]})+F{row_refs["goodwill_impairment"]})').number_format = number_format
row += 1

row_refs['scf_intangibles'] = row
ws.cell(row=row, column=2, value='change in + Intangibles')
ws.cell(row=row, column=4, value=f'=-(D{row_refs["intangibles"]}-C{row_refs["intangibles"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=-(E{row_refs["intangibles"]}-D{row_refs["intangibles"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=-(F{row_refs["intangibles"]}-E{row_refs["intangibles"]})').number_format = number_format
row += 1

row_refs['cfi'] = row
ws.cell(row=row, column=2, value='Cash Flow From Investing').font = Font(bold=True)
ws.cell(row=row, column=4, value=f'=D{row_refs["scf_ppe"]}+D{row_refs["scf_other_lt_assets"]}+D{row_refs["scf_goodwill"]}+D{row_refs["scf_intangibles"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["scf_ppe"]}+E{row_refs["scf_other_lt_assets"]}+E{row_refs["scf_goodwill"]}+E{row_refs["scf_intangibles"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["scf_ppe"]}+F{row_refs["scf_other_lt_assets"]}+F{row_refs["scf_goodwill"]}+F{row_refs["scf_intangibles"]}').number_format = number_format
row += 1

row += 1
ws.cell(row=row, column=2, value='Financing Activities:').font = header_font
row += 1

row_refs['scf_lt_debt'] = row
ws.cell(row=row, column=2, value='change in + LT Debt')
ws.cell(row=row, column=4, value=f'=(D{row_refs["revolving_credit"]}-C{row_refs["revolving_credit"]})+(D{row_refs["notes_payable"]}-C{row_refs["notes_payable"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=(E{row_refs["revolving_credit"]}-D{row_refs["revolving_credit"]})+(E{row_refs["notes_payable"]}-D{row_refs["notes_payable"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=(F{row_refs["revolving_credit"]}-E{row_refs["revolving_credit"]})+(F{row_refs["notes_payable"]}-E{row_refs["notes_payable"]})').number_format = number_format
row += 1

row_refs['scf_other_lt_liab'] = row
ws.cell(row=row, column=2, value='change in + Other LT Liabilities')
ws.cell(row=row, column=4, value=f'=(D{row_refs["deferred_tax_liab"]}-C{row_refs["deferred_tax_liab"]})+(D{row_refs["other_lt_liab"]}-C{row_refs["other_lt_liab"]})').number_format = number_format
ws.cell(row=row, column=5, value=f'=(E{row_refs["deferred_tax_liab"]}-D{row_refs["deferred_tax_liab"]})+(E{row_refs["other_lt_liab"]}-D{row_refs["other_lt_liab"]})').number_format = number_format
ws.cell(row=row, column=6, value=f'=(F{row_refs["deferred_tax_liab"]}-E{row_refs["deferred_tax_liab"]})+(F{row_refs["other_lt_liab"]}-E{row_refs["other_lt_liab"]})').number_format = number_format
row += 1

row_refs['scf_equity'] = row
ws.cell(row=row, column=2, value='change in Total Equity (ex NI)')
ws.cell(row=row, column=4, value=f'=D{row_refs["equity_other"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["equity_other"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["equity_other"]}').number_format = number_format
row += 1

row_refs['cff'] = row
ws.cell(row=row, column=2, value='Cash Flow From Financing').font = Font(bold=True)
ws.cell(row=row, column=4, value=f'=D{row_refs["scf_lt_debt"]}+D{row_refs["scf_other_lt_liab"]}+D{row_refs["scf_equity"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["scf_lt_debt"]}+E{row_refs["scf_other_lt_liab"]}+E{row_refs["scf_equity"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["scf_lt_debt"]}+F{row_refs["scf_other_lt_liab"]}+F{row_refs["scf_equity"]}').number_format = number_format
row += 1

row += 1

row_refs['total_cf'] = row
ws.cell(row=row, column=2, value='Total Cash Flow').font = Font(bold=True)
ws.cell(row=row, column=4, value=f'=D{row_refs["cfo"]}+D{row_refs["cfi"]}+D{row_refs["cff"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["cfo"]}+E{row_refs["cfi"]}+E{row_refs["cff"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["cfo"]}+F{row_refs["cfi"]}+F{row_refs["cff"]}').number_format = number_format
row += 1

row += 1

row_refs['actual_cf'] = row
ws.cell(row=row, column=2, value='Actual Change in Cash (B/S)')
ws.cell(row=row, column=4, value=f'=D{row_refs["cash"]}-C{row_refs["cash"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["cash"]}-D{row_refs["cash"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["cash"]}-E{row_refs["cash"]}').number_format = number_format
row += 1

row_refs['cf_diff'] = row
ws.cell(row=row, column=2, value='Difference (Check)')
ws.cell(row=row, column=4, value=f'=D{row_refs["total_cf"]}-D{row_refs["actual_cf"]}').number_format = number_format
ws.cell(row=row, column=5, value=f'=E{row_refs["total_cf"]}-E{row_refs["actual_cf"]}').number_format = number_format
ws.cell(row=row, column=6, value=f'=F{row_refs["total_cf"]}-F{row_refs["actual_cf"]}').number_format = number_format
row += 1

# Adjust column widths
ws.column_dimensions['A'].width = 3
ws.column_dimensions['B'].width = 45
for col_letter in ['C', 'D', 'E', 'F']:
    ws.column_dimensions[col_letter].width = 14
for col_letter in ['G', 'H', 'I', 'J', 'K']:
    ws.column_dimensions[col_letter].width = 3  # Blank separator columns
for col_letter in ['L', 'M', 'N', 'O']:
    ws.column_dimensions[col_letter].width = 14

# Save workbook
wb.save('C:/Users/david/Documents/ClaudeCode/AMN_Healthcare_Model_v4.xlsx')
print('Excel model created successfully: AMN_Healthcare_Model_v4.xlsx')
print(f'Total rows: {row}')
