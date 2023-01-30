import axios, {AxiosResponse} from 'axios'
import {BalancesResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const BALANCES_URL = `${API_URL}/sandbox/balances`

const getAccountBalances = (sandbox_name: string): Promise<Array<BalancesResponse>> => {
  return axios
    .get(BALANCES_URL, {
      params: {
        sandbox_name
      }
    })
    .then((response: AxiosResponse<Array<BalancesResponse>>) => response.data)
}

export {getAccountBalances}
