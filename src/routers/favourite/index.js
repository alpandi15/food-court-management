import React from 'react'

const Favourite = React.lazy(() => import('../../pages/favourite'))

export default [
  {
    path: '/favourite',
    auth: false,
    exact: true,
    component: Favourite
  }
]
