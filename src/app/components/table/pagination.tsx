/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import clsx from 'clsx'

type Props = {
  canNextPage: boolean 
  canPreviousPage: boolean
  nextPage: () => void 
  previousPage: () => void
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void
  pageOptions: number[]
  pageIndex: number
}

const Pagination: React.FC<Props> = ({ canNextPage, canPreviousPage, nextPage, previousPage, pageOptions, gotoPage, pageIndex }) => {
  if (pageOptions.length < 2) return null
  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
        <div id='kt_table_users_paginate'>
          <ul className='pagination'>
            <li className={clsx('page-item', {
              active: false,
              disabled: !canPreviousPage,
              previous: true,
              next: false,
            })}>
              <a
                className={clsx('page-link', {
                  'page-text': true,
                  'me-5': true,
                })}
                style={{ cursor: 'pointer' }}
                onClick={previousPage}
              >
                Previous
              </a>
            </li>
            {pageOptions.map((it, key) => <li key={key} className={clsx('page-item', {
              active: pageIndex === it,
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
                onClick={() => gotoPage(it)}
              >
                {it + 1}
              </a>
            </li>)}
            
            <li className={clsx('page-item', {
              active: false,
              disabled: !canNextPage,
              previous: false,
              next: true,
            })}>
              <a
                className={clsx('page-link', {
                  'page-text': true,
                  'me-5': false,
                })}
                style={{ cursor: 'pointer' }}
                onClick={nextPage}
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pagination
