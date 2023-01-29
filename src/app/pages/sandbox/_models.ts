export interface SandboxTransactionsResponse {
  "Timestamp": number
  "Sender": string
  "Receiver": string
  "Initial Bal": number
  "Amount": number
  "Ending Bal": number
  "Tx Count": number
}

export interface AccountResponse {
  "Wallet": number
  "Initial Bal": number
  "Curr. Balance": number
  "Tx Count": number
}
