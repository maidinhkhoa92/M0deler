import { Link } from "react-router-dom";
import { Table } from "../../components"
import {KTSVG} from '../../../_metronic/helpers'

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "name",
    headerName: "Name"
  },
  {
    className: 'min-w-125px',
    field: "economy",
    headerName: "Economy"
  },
  {
    className: 'min-w-125px',
    field: "CBDC",
    headerName: "CBDC"
  },
  {
    className: 'min-w-125px',
    field: "generatedTransactions",
    headerName: "Generated Transactions"
  },
  {
    className: 'min-w-125px rounded-end',
    field: "name",
    headerName: "",
    renderCell: ({ value }: { value: string; }) => (
      <Link to="/sandbox" className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' >
        <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
      </Link>
    )
  }
]

const DataSandbox = [
  {
    name: "123",
    economy: "123567", 
    CBDC: "1234",
    generatedTransactions: "00000000",
  }
]

const Sandbox = () => (
  <Table className='mb-5 mb-xl-10' title="Sandbox" columns={ColumnsSandbox} data={DataSandbox} />
)

export default Sandbox
