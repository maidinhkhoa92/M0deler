import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";

import { Table } from "../../components"
import { getAccountBalances } from "../../modules/balances/_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "Wallet",
    headerName: "Wallet"
  },
  {
    className: 'min-w-125px',
    field: "Initial Bal",
    headerName: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    field: "Curr. Balance",
    headerName: "Curr. Balance"
  },
  {
    className: 'min-w-125px',
    field: "Tx Count",
    headerName: "Tx Count"
  },
]

const Accounts = () => {
  const { id } = useParams();
  const {
    isLoading,
    data,
  } = useQuery(
    [`Accounts`, id],
    () => getAccountBalances(id || "")
  )

  return (
    <Table className='mb-5 mb-xl-10' title="Accounts" columns={ColumnsSandbox} data={data || []} isLoading={isLoading} />
  )
}

export default Accounts
