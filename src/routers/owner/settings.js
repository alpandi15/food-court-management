import React from 'react'

const Settings = React.lazy(() => import('../../pages/owner/Settings'))

export default [
  {
    path: '/owner/settings',
    auth: true,
    exact: true,
    component: Settings,
    guard: 'owner'
  }
]
