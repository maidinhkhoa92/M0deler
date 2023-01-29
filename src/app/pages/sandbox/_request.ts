import axios, {AxiosResponse} from 'axios'
// import {Response} from '../../../../../../_metronic/helpers'
import {SandboxTransactionsResponse, AccountResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const SANDBOX_URL = `${API_URL}/sandbox/transactions`
const ECONOMY_URL = `${API_URL}/sandbox/balances`

const getTransactions = (sandbox_name: string): Promise<Array<SandboxTransactionsResponse>> => {
  return axios
    .get(SANDBOX_URL, {
      params: {
        sandbox_name
      }
    })
    .then((d: AxiosResponse<Array<SandboxTransactionsResponse>>) => d.data)
}

const getAccountBalances = (sandbox_name: string): Promise<Array<AccountResponse>> => {
  return axios
    .get(ECONOMY_URL, {
      params: {
        sandbox_name
      }
    })
    .then((response: AxiosResponse<Array<AccountResponse>>) => response.data)
}

export {getTransactions, getAccountBalances}
