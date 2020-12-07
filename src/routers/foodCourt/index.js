import React from 'react'

const ListFoodCourt = React.lazy(() => import('../../pages/foodCourt/List'))

export default [
  {
    path: '/list-food-court',
    auth: false,
    exact: true,
    component: ListFoodCourt
  }
]
