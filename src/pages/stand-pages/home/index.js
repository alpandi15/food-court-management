import React from 'react'
import Link from 'next/link'
import { Icon } from 'react-materialize'

import StandMenu from 'components/StandMenu'
// import SideNav from 'components/SideNav'

const SideNav = React.lazy(() => import('components/SideNav'))

const standHome = () => {
  console.log('Logging ')
  return (
    <>
      <SideNav />
      <div className="mobile-layout-content margin-top">
        <div className="content">
          <div className="content-header-stand">
            <span>Halo,</span>
            <br />
            <span className="stand-name">Zeribowl</span>
          </div>

          <div className="order-list-wrapper">
            <div className="main-title">Pesanan Masuk</div>
            <Link href="#">
              <a>
                <div className="order-list-item">
                  <div className="list-header">
                    <div>
                      <span className="time">19:33 WIB</span>
                      <span className="order-number">ORD-4255</span>
                    </div>
                    <div className="order-status waiting-payment">
                      <Icon>query_builder</Icon>
                      <span>Belum bayar</span>
                    </div>
                  </div>
                  <div className="list-body">
                    <div className="customer-name">Fachri John</div>
                    <div className="customer-table">Meja #01</div>
                  </div>
                  <div className="list-action">
                    <button className="btn btn-app-primary">Konfirmasi Pembayaran</button>
                    <div className="time">4 Menit 59 Detik</div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="order-list-item">
                  <div className="list-header">
                    <div>
                      <span className="time">19:33 WIB</span>
                      <span className="order-number">ORD-4255</span>
                    </div>
                    <div className="order-status on-process">
                      <Icon>query_builder</Icon>
                      <span>Diproses</span>
                    </div>
                  </div>
                  <div className="list-body">
                    <div className="customer-name">Guess</div>
                    <div className="customer-table">Meja #16</div>
                  </div>
                  <div className="list-action">
                    <button className="btn btn-app-primary">Selesaikan Pesanan</button>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="order-list-wrapper">
            <div className="main-title">Pesanan Hari Ini</div>
            <Link href="#">
              <a>
                <div className="order-list-item">
                  <div className="list-header">
                    <div>
                      <span className="time">19:33 WIB</span>
                      <span className="order-number">ORD-4255</span>
                    </div>
                    <div className="order-status done">
                      <Icon>query_builder</Icon>
                      <span>Selesai</span>
                    </div>
                  </div>
                  <div className="list-body">
                    <div className="customer-name">Guess</div>
                    <div className="customer-table">Meja #02</div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <StandMenu />
      </div>
    </>
  )
}

export default standHome
