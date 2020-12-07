import React from 'react'

const LoginStand = React.lazy(() => import('../../pages/stand_auth/Login'))

export default [
  {
    path: '/stand/login',
    auth: false,
    exact: true,
    component: LoginStand,
    guard: 'stand'
  }
]
