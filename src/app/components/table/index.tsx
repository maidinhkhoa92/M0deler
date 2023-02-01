/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useTable, useSortBy, usePagination, useGlobalFilter, Row } from "react-table"
import { debounce } from "lodash"
import { TableProps } from "./types"
import Pagination from './pagination'

const GlobalFilter: React.FC<{
  preGlobalFilteredRows: Row<{}>[]
  globalFilter: any
  setGlobalFilter: (filterValue: any) => void
}> = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = debounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)

    return (
      <span>
        Search:{' '}
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
          style={{
            fontSize: '1.1rem',
            border: '0',
          }}
        />
      </span>
    )
  }

const Table: React.FC<TableProps> = ({ className, title, subtitle, isLoading, columns, data, pageSize = 10 }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, globalFilter },
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize } }, useGlobalFilter, useSortBy, usePagination)

  return (
    <div className={`card ${className} position-relative`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {title && <span className='card-label fw-bold fs-3 mb-1'>{title}</span>}
          {subtitle && <span className='text-muted mt-1 fw-semibold fs-7'>{subtitle}</span>}
        </h3>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      {isLoading ? (<span
        className='w-100 translate-middle-y lh-0 my-auto d-flex align-items-center justify-content-center'
        data-kt-search-element='spinner'
      >
        <span className='spinner-border h-35px w-35px align-middle text-gray-400' />
      </span>) : (
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle gs-0 gy-4' {...getTableProps()}>
              {/* begin::Table head */}
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr className='fw-bold text-muted bg-light' {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                      return (
                        <th {...column.getHeaderProps({
                          ...column.getSortByToggleProps(),
                          className: "min-w-125px"
                        })}>
                          {column.render('Header')}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? <i className="bi bi-arrow-down-short text-primary"></i>
                                : <i className="bi bi-arrow-up-short text-primary"></i>
                              : ''}
                          </span>
                        </th>
                      )
                    })}
                  </tr>
                ))
                }

              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody {...getTableBodyProps()}>
                {
                  page.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {
                          row.cells.map(cell => {
                            return (
                              <td {...cell.getCellProps()}>
                                {
                                  cell.render('Cell')}
                              </td>
                            )
                          })}
                      </tr>
                    )
                  })
                }
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
          <Pagination canNextPage={canNextPage} canPreviousPage={canPreviousPage} nextPage={nextPage} previousPage={previousPage} gotoPage={gotoPage} pageOptions={pageOptions} pageIndex={pageIndex} />
        </div>)}

      {/* begin::Body */}
    </div>
  )
}

export { Table }
