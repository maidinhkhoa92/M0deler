export interface SandboxResponse {
  "sandbox_name": string
  "economy_name": string
  "cbdc_name": string
}

export interface EconomyResponse {
  "economy_name": string
  "gdp": number
  "ir": number
  "gr": number
  "pop": number
}

export interface CbdcResponse {
  "cbdc_name": string
  "engine": string
  "wallets_qty": number
  "tx_avg_nominal_amt": number
  "tx_nominal_amt_sd": number
  "txs": number
  "initial_balance_avg": number
  "initial_bal_sd": number
}