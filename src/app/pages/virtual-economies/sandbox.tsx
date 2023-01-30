import { Link } from "react-router-dom";
import { useQuery } from 'react-query'

import { Table } from "../../components"
import { KTSVG } from '../../../_metronic/helpers'
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
    className: 'min-w-125px rounded-end',
    field: "sandbox_name",
    headerName: "",
    renderCell: ({ value }: { value: string; }) => (
      <>
        <Link to={`/sandbox/${value}`} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 mr-2' >
          <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
        </Link>
        <Link to={`/chart/${value}`} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' >
          <i className="bi bi-graph-down fs-2x"></i>
        </Link>
      </>

    )
  }
]

const Sandbox = () => {
  const {
    isLoading,
    data,
  } = useQuery(
    `sandbox`,
    getSandbox
  )

  return (
    <Table className='mb-5 mb-xl-10' title="Sandbox" columns={ColumnsSandbox} data={data || []} isLoading={isLoading} />
  )
}

export default Sandbox
