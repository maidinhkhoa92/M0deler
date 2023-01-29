/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef, ForwardedRef } from "react"
import clsx from 'clsx'
import { range } from "lodash"

type Props = {
  pages: number
  ref?: ForwardedRef<{ page: number }>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<Props> = forwardRef(({ pages, page, setPage }) => {
  if (pages < 0) return <></>

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
        <div id='kt_table_users_paginate'>
          <ul className='pagination'>
            <li className={clsx('page-item', {
              active: false,
              disabled: page === 1,
              previous: true,
              next: false,
            })}>
              <a
                className={clsx('page-link', {
                  'page-text': true,
                  'me-5': true,
                })}
                style={{ cursor: 'pointer' }}
              >
                Previous
              </a>
            </li>
            {range(1, pages + 1).map((it, key) => <li key={key} className={clsx('page-item', {
              active: page === it,
              disabled: false,
              previous: false,
              next: false,
            })}>
              <a
                className={clsx('page-link', {
                  'page-text': false,
                  'me-5': false,
                })}
                style={{ cursor: 'pointer' }}
                onClick={() => setPage(it)}
              >
                {it}
              </a>
            </li>)}
            
            <li className={clsx('page-item', {
              active: false,
              disabled: page === pages,
              previous: false,
              next: true,
            })}>
              <a
                className={clsx('page-link', {
                  'page-text': true,
                  'me-5': false,
                })}
                style={{ cursor: 'pointer' }}
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})

export default Pagination
