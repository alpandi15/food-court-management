import React from 'react'

const Login = React.lazy(() => import('../../pages/auth/Login'))
const Register = React.lazy(() => import('../../pages/auth/Register'))
const ForgotPassword = React.lazy(() => import('../../pages/forgotPassword/ForgotPassword'))
const VerificationCode = React.lazy(() => import('../../pages/forgotPassword/Verification'))
const ResetPassword = React.lazy(() => import('../../pages/forgotPassword/ResetPassword'))

export default [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/forgot-password',
    exact: true,
    component: ForgotPassword
  },
  {
    path: '/forgot-password/verification',
    exact: false,
    component: VerificationCode
  },
  {
    path: '/reset-password',
    exact: true,
    component: ResetPassword
  }
]
