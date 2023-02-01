import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";

import { Table } from "../../components"
import { getAccountBalances } from "../../modules/balances/_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    accessor: "Wallet",
    Header: "Wallet"
  },
  {
    className: 'min-w-125px',
    accessor: "Initial Bal",
    Header: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    accessor: "Curr. Balance",
    Header: "Curr. Balance"
  },
  {
    className: 'min-w-125px',
    accessor: "Tx Count",
    Header: "Tx Count"
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
