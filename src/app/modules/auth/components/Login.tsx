/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { Link } from "react-router-dom"
import { getUserByToken, login } from '../core/_requests'
import { useAuth } from '../core/Auth'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        const { data: auth } = await login(values.email, values.password)
        console.log("auth", auth)
        saveAuth(auth)
        const { data: user } = await getUserByToken(auth.api_token)
        console.log("user", user)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login detail is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (

    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_sign_in_form'
    >
      <div className="text-center mb-11">
        <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
        <div className="text-gray-500 fw-semibold fs-6">M0deler Engine v.133</div>
      </div>
      <div className="row g-3 mb-9">
        <div className="col-md-6">
          <a
            href="#"
            className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              src="/media/svg/brand-logos/google-icon.svg"
              className="h-15px me-3"
            />Sign in with Google</a
          >
        </div>
        <div className="col-md-6">
          <a
            href="#"
            className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              src="/media/svg/brand-logos/apple-black.svg"
              className="theme-light-show h-15px me-3"
            />
            <img
              alt="Logo"
              src="/media/svg/brand-logos/apple-black-dark.svg"
              className="theme-dark-show h-15px me-3"
            />Sign in with Apple</a
          >
        </div>
      </div>
      <div className="separator separator-content my-14">
        <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
      </div>
      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}
      <div className="fv-row mb-8">
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      <div className="fv-row mb-3">
        <input
          placeholder="Password"
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>
        <a
          href="../../demo39/dist/authentication/layouts/overlay/reset-password.html"
          className="link-primary"
        >Forgot Password ?</a
        >
      </div>
      <div className="d-grid mb-10">
        <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
          <span className="indicator-label">Sign In</span>
          <span className="indicator-progress"
          >Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span
            ></span>
        </button>
      </div>
      <div className="text-gray-500 text-center fw-semibold fs-6">
        Not a Member yet?
        <a
          href="../../demo39/dist/authentication/layouts/overlay/sign-up.html"
          className="link-primary"
        >Sign up</a
        >
      </div>
    </form>
  )
}
