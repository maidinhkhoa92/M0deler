import { useQuery } from 'react-query'

import { Table } from "../../components"
import { getCBDC } from "./_request" 

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "cbdc_name",
    headerName: "Name"
  },
  {
    className: 'min-w-125px',
    field: "engine",
    headerName: "Engine"
  },
  {
    className: 'min-w-125px',
    field: "wallets_qty",
    headerName: "Wallets"
  },
  {
    className: 'min-w-125px',
    field: "tx_avg_nominal_amt",
    headerName: "TX Avg"
  },
  {
    className: 'min-w-125px',
    field: "tx_nominal_amt_sd",
    headerName: "Tx SD"
  },
  {
    className: 'min-w-125px',
    field: "txs",
    headerName: "Txs"
  },
  {
    className: 'min-w-125px',
    field: "initial_balance_avg",
    headerName: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    field: "initial_bal_sd",
    headerName: "Initial Bal SD"
  },
]

const DataSandbox = [
  {
      "cbdc_name": "initial launch2",
      "engine": "mit-opencbdc-2pc",
      "wallets_qty": 20,
      "tx_avg_nominal_amt": 100,
      "tx_nominal_amt_sd": 10,
      "txs": 200,
      "initial_balance_avg": 1000,
      "initial_bal_sd": 50
  },
  {
      "cbdc_name": "initial launch444",
      "engine": "mit-opencbdc-2pc",
      "wallets_qty": 20,
      "tx_avg_nominal_amt": 100,
      "tx_nominal_amt_sd": 10,
      "txs": 200,
      "initial_balance_avg": 2000,
      "initial_bal_sd": 50
  }
]

const CBDC = () => {
  const {
    isLoading,
    data,
    error,
  } = useQuery(
    `CBDC`,
    getCBDC
  )

  console.log("CBDC", isLoading, data, error)

  return (
  <Table className='mb-5 mb-xl-10' title="CBDC" columns={ColumnsSandbox} data={DataSandbox} />
)}

export default CBDC
