import { useQuery } from 'react-query'

import { Table } from "../../components"
import { getEconomy } from "./_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-325px rounded-start',
    accessor: "economy_name",
    Header: "Name"
  },
  {
    className: 'min-w-200px',
    accessor: "gdp",
    Header: "GDP"
  },
  {
    className: 'min-w-125px',
    accessor: "ir",
    Header: "Interest Rate"
  },
  {
    className: 'min-w-125px',
    accessor: "gr",
    Header: "Growth Rate"
  },
  {
    className: 'min-w-125px',
    accessor: "pop",
    Header: "Population"
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
