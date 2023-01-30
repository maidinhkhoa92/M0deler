import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";

import { Table } from "../../components"
import { getTransactions } from "../../modules/transactions/_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "Timestamp",
    headerName: "Timestamp"
  },
  {
    className: 'min-w-125px',
    field: "Sender",
    headerName: "Sender"
  },
  {
    className: 'min-w-125px',
    field: "Receiver",
    headerName: "Receiver"
  },
  {
    className: 'min-w-125px',
    field: "Initial Bal",
    headerName: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    field: "Amount",
    headerName: "Amount"
  },
  {
    className: 'min-w-125px',
    field: "Ending Bal",
    headerName: "Ending Bal"
  },
  {
    className: 'min-w-125px',
    field: "Tx Count",
    headerName: "Initial Bal SD"
  },
]

const Transactions = () => {
  const { id } = useParams();
  const {
    isLoading,
    data,
  } = useQuery(
    [`Transactions`, id],
    () => getTransactions(id || "")
  )

  return (
    <Table className='mb-5 mb-xl-10' title="Transactions" columns={ColumnsSandbox} data={data || []} isLoading={isLoading} isPaging/>
  )
}

export default Transactions
