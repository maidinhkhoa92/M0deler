import { useQuery } from 'react-query'

import { Table } from "../../components"
import { getEconomy } from "./_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-325px rounded-start',
    field: "economy_name",
    headerName: "Name"
  },
  {
    className: 'min-w-200px',
    field: "gdp",
    headerName: "GDP"
  },
  {
    className: 'min-w-125px',
    field: "ir",
    headerName: "Interest Rate"
  },
  {
    className: 'min-w-125px',
    field: "gr",
    headerName: "Growth Rate"
  },
  {
    className: 'min-w-125px',
    field: "pop",
    headerName: "Population"
  },
]

const Economy = () => {
  const {
    isLoading,
    data,
  } = useQuery(
    `Economy`,
    getEconomy
  )

  return (
    <Table className='mb-5 mb-xl-10' title="Economy" columns={ColumnsSandbox} data={data || []} isLoading={isLoading} />
  )
}

export default Economy
