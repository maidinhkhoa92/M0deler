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

const DataSandbox = [
  {
    "economy_name": "wakanda",
    "gdp": 600000000,
    "ir": 310,
    "gr": 300,
    "pop": 10
  },
  {
    "economy_name": "wakanda444",
    "gdp": 600000000,
    "ir": 210,
    "gr": 100,
    "pop": 10
  }
]

const Economy = () => {
  const {
    isLoading,
    data,
    error,
  } = useQuery(
    `Economy`,
    getEconomy
  )

  console.log("Economy", isLoading, data, error)

  return (
    <Table className='mb-5 mb-xl-10' title="Economy" columns={ColumnsSandbox} data={DataSandbox} />
  )
}

export default Economy
