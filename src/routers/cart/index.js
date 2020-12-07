import React from 'react'

const Cart = React.lazy(() => import('../../pages/cart'))

export default [
  {
    path: '/cart',
    auth: false,
    exact: true,
    component: Cart
  }
]
