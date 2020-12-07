import React from 'react'

const RegisterOwner = React.lazy(() => import('../../pages/owner/Auth/Register'))
const LoginOwner = React.lazy(() => import('../../pages/owner/Auth/Login'))

export default [
  {
    path: '/owner/register',
    auth: false,
    exact: true,
    component: RegisterOwner,
    guard: 'owner'
  },
  {
    path: '/owner/login',
    auth: false,
    exact: true,
    component: LoginOwner,
    guard: 'owner'
  }
]
