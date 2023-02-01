import { useQuery } from 'react-query'

import { Table } from "../../components"
import { getCBDC } from "./_request" 

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    accessor: "cbdc_name",
    Header: "Name"
  },
  {
    className: 'min-w-125px',
    accessor: "engine",
    Header: "Engine"
  },
  {
    className: 'min-w-125px',
    accessor: "wallets_qty",
    Header: "Wallets"
  },
  {
    className: 'min-w-125px',
    accessor: "tx_avg_nominal_amt",
    Header: "TX Avg"
  },
  {
    className: 'min-w-125px',
    accessor: "tx_nominal_amt_sd",
    Header: "Tx SD"
  },
  {
    className: 'min-w-125px',
    accessor: "txs",
    Header: "Txs"
  },
  {
    className: 'min-w-125px',
    accessor: "initial_balance_avg",
    Header: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    accessor: "initial_bal_sd",
    Header: "Initial Bal SD"
  },
]

const CBDC = () => {
  const {
    isLoading,
    data,
  } = useQuery(
    `CBDC`,
    getCBDC
  )

  return (
  <Table className='mb-5 mb-xl-10' title="CBDC" columns={ColumnsSandbox} data={data || []} isLoading={isLoading} />
)}

export default CBDC
