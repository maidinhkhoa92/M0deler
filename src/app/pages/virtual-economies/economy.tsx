import { Table } from "../../components"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-325px rounded-start',
    field: "name",
    headerName: "Name"
  },
  {
    className: 'min-w-200px',
    field: "GDP",
    headerName: "GDP"
  },
  {
    className: 'min-w-125px',
    field: "interestRate",
    headerName: "Interest Rate"
  },
  {
    className: 'min-w-125px',
    field: "growthRate",
    headerName: "Growth Rate"
  },
  {
    className: 'min-w-125px',
    field: "population",
    headerName: "Population"
  },
]

const DataSandbox = [
  {
    name: "123",
    GDP: "123567", 
    interestRate: "1234",
    growthRate: "00000000",
    population: "111111111"
  }
]

const Economy = () => (
  <Table className='mb-5 mb-xl-10' title="Economy" columns={ColumnsSandbox} data={DataSandbox} />
)

export default Economy
