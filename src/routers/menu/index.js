import React from 'react'

const Menu = React.lazy(() => import('../../pages/menu'))
const MenuDetail = React.lazy(() => import('../../pages/menu/detail'))

export default [
  {
    path: '/stand/:uuid/menu',
    auth: false,
    exact: true,
    component: Menu
  },
  {
    path: '/zeribowl/menu/1',
    auth: false,
    exact: true,
    component: MenuDetail
  }
]
