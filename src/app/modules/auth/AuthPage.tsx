/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Registration } from './components/Registration'
import { ForgotPassword } from './components/ForgotPassword'
import { Login } from './components/Login'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none'
    return () => { }
  }, [])

  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root" style={{
      backgroundImage: `url(${toAbsoluteUrl('/media/auth/bg10.jpeg')})`,
    }}>
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-lg-row-fluid">
          <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/media/auth/agency.png" alt="" />
            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/media/auth/agency-dark.png" alt="" />
            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>
            <div className="text-gray-600 fs-base text-center fw-semibold">In this kind of post,
              <a href="#" className="opacity-75-hover text-primary me-1">the blogger</a>introduces a person they’ve interviewed
              <br />and provides some background information about
              <a href="#" className="opacity-75-hover text-primary me-1">the interviewee</a>and their
              <br />work following this is a transcript of the interview.</div>
          </div>
        </div>
        <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
          <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
            <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
              <div className="d-flex flex-center flex-column-fluid pb-15 pb-lg-20"><Outlet /></div>
            </div>
            <div className="d-flex flex-stack">
              <div className="me-10">
                <button className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                  <img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3" src="/media/flags/united-states.svg" alt="" />
                  <span data-kt-element="current-lang-name" className="me-1">English</span>
                  <span className="svg-icon svg-icon-5 svg-icon-muted rotate-180 m-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true" id="kt_auth_lang_menu">
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/media/flags/united-states.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">English</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/media/flags/spain.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">Spanish</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/media/flags/germany.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">German</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/media/flags/japan.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">Japanese</span>
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                      <span className="symbol symbol-20px me-4">
                        <img data-kt-element="lang-flag" className="rounded-1" src="/media/flags/france.svg" alt="" />
                      </span>
                      <span data-kt-element="lang-name">French</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex fw-semibold text-primary fs-base gap-5">
                <a href="../../demo39/dist/pages/team.html" target="_blank">Terms</a>
                <a href="../../demo39/dist/pages/pricing/column.html" target="_blank">Plans</a>
                <a href="../../demo39/dist/pages/contact.html" target="_blank">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export { AuthPage }
