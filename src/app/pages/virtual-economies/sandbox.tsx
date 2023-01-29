import { Link } from "react-router-dom";
import { useQuery } from 'react-query'

import { Table } from "../../components"
import {KTSVG} from '../../../_metronic/helpers'
import { getSandbox } from "./_request" 

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "sandbox_name",
    headerName: "Name"
  },
  {
    className: 'min-w-125px',
    field: "economy_name",
    headerName: "Economy"
  },
  {
    className: 'min-w-125px',
    field: "cbdc_name",
    headerName: "CBDC"
  },
  {
    className: 'min-w-125px',
    field: "generatedTransactions",
    headerName: "Generated Transactions"
  },
  {
    className: 'min-w-125px rounded-end',
    field: "sandbox_name",
    headerName: "",
    renderCell: ({ value }: { value: string; }) => (
      <Link to={`/sandbox/${value}`} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' >
        <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
      </Link>
    )
  }
]

const DataSandbox = [
  {
      "sandbox_name": "q2",
      "economy_name": "wakanda",
      "cbdc_name": "initial launch2"
  },
  {
      "sandbox_name": "q4",
      "economy_name": "wakanda444",
      "cbdc_name": "initial launch444"
  }
]

const Sandbox = () => {
  const {
    isLoading,
    data,
    error,
  } = useQuery(
    `sandbox`,
    getSandbox
  )

  console.log("Sandbox", isLoading, data, error)
  return (
    <Table className='mb-5 mb-xl-10' title="Sandbox" columns={ColumnsSandbox} data={DataSandbox} />
  )
}

export default Sandbox
