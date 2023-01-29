import axios, {AxiosResponse} from 'axios'
// import {Response} from '../../../../../../_metronic/helpers'
import {SandboxResponse, EconomyResponse, CbdcResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const SANDBOX_URL = `${API_URL}/sandbox/list`
const ECONOMY_URL = `${API_URL}/economy/list`
const CBDC_URL = `${API_URL}/cbdc/list`

const getSandbox = (): Promise<Array<SandboxResponse>> => {
  return axios
    .get(SANDBOX_URL)
    .then((d: AxiosResponse<Array<SandboxResponse>>) => d.data)
}

const getEconomy = (): Promise<Array<EconomyResponse>> => {
  return axios
    .get(ECONOMY_URL)
    .then((response: AxiosResponse<Array<EconomyResponse>>) => response.data)
}

const getCBDC = (): Promise<Array<CbdcResponse>> => {
  return axios
    .get(CBDC_URL)
    .then((response: AxiosResponse<Array<CbdcResponse>>) => response.data)
}

export {getSandbox, getEconomy, getCBDC}
