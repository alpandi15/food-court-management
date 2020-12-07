import React from 'react'

const Main = React.lazy(() => import('../../pages/main'))
const Home = React.lazy(() => import('../../pages/home'))
const ScanQR = React.lazy(() => import('../../pages/scanQrcode'))
const InputTableManual = React.lazy(() => import('../../pages/scanQrcode/ManualInput'))

export default [
  {
    path: '/',
    auth: false,
    exact: true,
    component: Main
  },
  {
    path: '/scan-qr',
    auth: false,
    exact: false,
    component: ScanQR
  },
  {
    path: '/scan-manual',
    auth: false,
    exact: false,
    component: InputTableManual
  },
  {
    path: '/home',
    auth: false,
    exact: true,
    component: Home
  }
]
