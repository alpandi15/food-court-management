import React from 'react'

const Dashboard = React.lazy(() => import('../../pages/owner/Dashboard'))
const RegisterFoodCourt = React.lazy(() => import('../../pages/owner/RegisterFoodCourt'))
const SelectFoodCourt = React.lazy(() => import('../../pages/owner/SelectFoodCourt'))

export default [
  {
    path: '/owner',
    auth: true,
    exact: true,
    component: Dashboard,
    guard: 'owner'
  },
  {
    path: '/owner/register-foodcourt',
    auth: true,
    exact: true,
    component: RegisterFoodCourt,
    guard: 'owner'
  },
  {
    path: '/owner/select-foodcourt',
    auth: false,
    exact: false,
    component: SelectFoodCourt,
    guard: 'owner'
  }
]
