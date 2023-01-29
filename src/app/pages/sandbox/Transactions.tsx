import { Table } from "../../components"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "name",
    headerName: "Name"
  },
  {
    className: 'min-w-125px',
    field: "engine",
    headerName: "Engine"
  },
  {
    className: 'min-w-125px',
    field: "wallets",
    headerName: "Wallets"
  },
  {
    className: 'min-w-125px',
    field: "txAvg",
    headerName: "TX Avg"
  },
  {
    className: 'min-w-125px',
    field: "txSd",
    headerName: "Tx SD"
  },
  {
    className: 'min-w-125px',
    field: "txs",
    headerName: "Txs"
  },
  {
    className: 'min-w-125px',
    field: "initialBal",
    headerName: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    field: "initialBalSd",
    headerName: "Initial Bal SD"
  },
  {
    className: 'min-w-125px',
    field: "initialBalHd",
    headerName: "Initial Bal HD"
  },
]

const DataSandbox = [
  {
    name: "name",
    engine: "engine", 
    wallets: "wallets",
    txAvg: "tx-avg",
    txSd: "txSd",
    txs: "txs",
    initialBal: "initialBal",
    initialBalSd: "initialBalSd",
    initialBalHd: "initialBalHd"
  }
]

const Transactions = () => (
  <Table className='mb-5 mb-xl-10' title="Transactions" columns={ColumnsSandbox} data={DataSandbox} />
)

export default Transactions
