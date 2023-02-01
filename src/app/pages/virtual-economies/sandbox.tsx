import { Link } from "react-router-dom";
import { useQuery } from 'react-query'

import { Table } from "../../components"
import { KTSVG } from '../../../_metronic/helpers'
import { getSandbox } from "./_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    accessor: "sandbox_name",
    Header: "Name"
  },
  {
    className: 'min-w-125px',
    accessor: "economy_name",
    Header: "Economy"
  },
  {
    className: 'min-w-125px',
    accessor: "cbdc_name",
    Header: "CBDC"
  },
  {
    className: 'min-w-125px rounded-end',
    accessor: "button",
    Header: "",
    Cell: ({ cell }: { cell: any }) => (
      <>
        <Link to={`/sandbox/${cell.row.values.sandbox_name}`} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 mr-2' >
          <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
        </Link>
        <Link to={`/chart/${cell.row.values.sandbox_name}`} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' >
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
