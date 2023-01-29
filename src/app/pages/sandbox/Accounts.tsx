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
]

const DataSandbox = [
  {
    name: "name",
    engine: "engine", 
    wallets: "wallets",
    txAvg: "tx-avg",
  }
]

const Accounts = () => (
  <Table className='mb-5 mb-xl-10' title="Accounts" columns={ColumnsSandbox} data={DataSandbox} />
)

export default Accounts
