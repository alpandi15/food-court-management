import React from 'react'

const orderHistory = React.lazy(() => import('../../pages/orderHistory'))
const historyDetail = React.lazy(() => import('../../pages/orderHistory/detail'))

export default [
  {
    path: '/history',
    auth: false,
    exact: true,
    component: orderHistory
  },
  {
    path: '/history/detail/1',
    auth: false,
    exact: true,
    component: historyDetail
  }
]
