import axios, {AxiosResponse} from 'axios'
import {SandboxTransactionsResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const TRANSACTIONS_URL = `${API_URL}/sandbox/transactions`

const getTransactions = (sandbox_name: string): Promise<Array<SandboxTransactionsResponse>> => {
  return axios
    .get(TRANSACTIONS_URL, {
      params: {
        sandbox_name
      }
    })
    .then((d: AxiosResponse<Array<SandboxTransactionsResponse>>) => d.data)
}

export {getTransactions}
