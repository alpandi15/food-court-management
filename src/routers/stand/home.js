import React from 'react'

const standHome = React.lazy(() => import('../../pages/stand_home'))

export default [
  {
    path: '/stand/home',
    auth: true,
    exact: true,
    component: standHome,
    guard: 'stand'
  }
]
