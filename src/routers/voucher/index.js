import React from 'react'

const Voucher = React.lazy(() => import('../../pages/voucher'))
const Detail = React.lazy(() => import('../../pages/voucher/detail'))

export default [
  {
    path: '/zeribowl/voucher',
    auth: false,
    exact: true,
    component: Voucher
  },
  {
    path: '/zeribowl/voucher/1',
    auth: false,
    exact: true,
    component: Detail
  }
]
