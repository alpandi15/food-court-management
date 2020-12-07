import React from 'react'

const Process = React.lazy(() => import('../../pages/process'))

export default [
  {
    path: '/process',
    auth: false,
    exact: true,
    component: Process
  }
]
