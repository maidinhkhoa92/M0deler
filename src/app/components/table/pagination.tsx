/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'

const Pagination = () => {
  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
        <div id='kt_table_users_paginate'>
          <ul className='pagination'>
            <li className={clsx('page-item', {
              active: true,
              disabled: false,
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
            <li className={clsx('page-item', {
              active: false,
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
              >
                1
              </a>
            </li>
            <li className={clsx('page-item', {
              active: false,
              disabled: false,
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
}

export default Pagination
