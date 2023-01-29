/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { THeadProps, TBodyProps, TableProps } from "./types"
import Pagination from './pagination'

const THeader: React.FC<THeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr className='fw-bold text-muted bg-light'>
        {columns.map((item) => <th className={item.className || ""}>{item.headerName}</th>)}
      </tr>
    </thead>
  )
}

const TBody: React.FC<TBodyProps> = ({
  data,
  columns,
}) => (
  <tbody>
    {data.map((row, i) => (
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
    ))}
  </tbody>
)

const Table: React.FC<TableProps> = ({className, title, subtitle, columns, data}) => {
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
              <THeader columns={columns} data={data}/>
            {/* end::Table head */}
            {/* begin::Table body */}
            <TBody columns={columns} data={data}/>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
      {/* <Pagination/> */}
    </div>
  )
}

export { Table }
