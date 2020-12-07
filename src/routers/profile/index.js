import React from 'react'

const Profile = React.lazy(() => import('../../pages/profile'))
const EditProfile = React.lazy(() => import('../../pages/profile/edit'))
const ChangePassword = React.lazy(() => import('../../pages/profile/changePassword'))

export default [
  {
    path: '/profile',
    auth: false,
    exact: true,
    component: Profile
  },
  {
    path: '/profile/edit',
    auth: false,
    exact: true,
    component: EditProfile
  },
  {
    path: '/profile/edit/password',
    auth: false,
    exact: true,
    component: ChangePassword
  }
]
