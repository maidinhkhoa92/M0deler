/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from 'react'
import { THeadProps, TBodyProps, TableProps } from "./types"
import Pagination from './pagination'

const THeader: React.FC<THeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr className='fw-bold text-muted bg-light'>
        {columns.map((item, key) => <th className={item.className || ""} key={key}>{item.headerName}</th>)}
      </tr>
    </thead>
  )
}

const TBody: React.FC<TBodyProps> = ({
  data,
  columns,
  isPaging,
  page
}) => (
  <tbody>
    {data.map((row, i) => {
      if (isPaging && page) {
        if (i < (page - 1) * 50 || i >= page * 50) {
          return <></>
        }
      }
      
      return (
        <tr key={i}>
          {columns.map((column, k) => {
            const { renderCell, valueFormatter } = column
            return (
              <td key={k} width={column.width}>
                {renderCell
                  ? renderCell({ value: row[column.field], row })
                  : valueFormatter
                    ? valueFormatter({ value: row[column.field], row })
                    : row[column.field]}
              </td>
            )
          })}
        </tr>
      )
    })}
  </tbody>
)

const Table: React.FC<TableProps> = ({ className, title, subtitle, columns, data, isPaging }) => {
  const [page, setPage] = useState<number>(1)

  const pages = useMemo(() => {
    if (data.length < 50) {
      return 0
    }
    let calPage = data.length / 50
    if (data.length % 50 > 0) {
      calPage++
    }
    return calPage
  }, [data])

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {title && <span className='card-label fw-bold fs-3 mb-1'>{title}</span>}
          {subtitle && <span className='text-muted mt-1 fw-semibold fs-7'>{subtitle}</span>}
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <THeader columns={columns} data={data} />
            {/* end::Table head */}
            {/* begin::Table body */}
            <TBody columns={columns} data={data} page={page} isPaging={isPaging} />
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
        {isPaging && <Pagination pages={pages} page={page} setPage={setPage}/>}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { Table }
