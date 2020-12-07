import React from 'react'

const Category = React.lazy(() => import('../../pages/owner/CategoryStand/index'))
const Create = React.lazy(() => import('../../pages/owner/CategoryStand/create'))
const Edit = React.lazy(() => import('../../pages/owner/CategoryStand/edit'))

export default [
  {
    path: '/owner/category-stand',
    auth: true,
    exact: true,
    component: Category,
    guard: 'owner'
  },
  {
    path: '/owner/category-stand/create',
    auth: true,
    exact: false,
    component: Create,
    guard: 'owner'
  },
  {
    path: '/owner/category-stand/edit/:id',
    auth: true,
    exact: false,
    component: Edit,
    guard: 'owner'
  }
]
