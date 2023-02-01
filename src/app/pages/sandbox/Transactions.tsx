import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";

import { Table } from "../../components"
import { getTransactions } from "../../modules/transactions/_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    accessor: "Timestamp",
    Header: "Timestamp"
  },
  {
    className: 'min-w-125px',
    accessor: "Sender",
    Header: "Sender"
  },
  {
    className: 'min-w-125px',
    accessor: "Receiver",
    Header: "Receiver"
  },
  {
    className: 'min-w-125px',
    accessor: "Initial Bal",
    Header: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    accessor: "Amount",
    Header: "Amount"
  },
  {
    className: 'min-w-125px',
    accessor: "Ending Bal",
    Header: "Ending Bal"
  },
  {
    className: 'min-w-125px',
    accessor: "Tx Count",
    Header: "Initial Bal SD"
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
    <Table className='mb-5 mb-xl-10' title="Transactions" columns={ColumnsSandbox} data={data || []} isLoading={isLoading} pageSize={50}/>
  )
}

export default Transactions
