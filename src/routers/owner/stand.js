import React from 'react'

const Stand = React.lazy(() => import('../../pages/owner/Stand/index'))
const Create = React.lazy(() => import('../../pages/owner/Stand/Create'))
const Detail = React.lazy(() => import('../../pages/owner/Stand/Detail'))

export default [
  {
    path: '/owner/stand',
    auth: true,
    exact: true,
    component: Stand,
    guard: 'owner'
  },
  {
    path: '/owner/stand/create',
    auth: true,
    exact: false,
    component: Create,
    guard: 'owner'
  },
  {
    path: '/owner/stand/view/:uuid',
    auth: true,
    exact: false,
    component: Detail,
    guard: 'owner'
  }
]
