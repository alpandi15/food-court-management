import React from 'react'
import Link from 'next/link'
import Header from 'components/Header'
import CustomHelmet from 'components/CustomHelmet'
import { withAuthSync } from 'components/Security/auth'

const image = '/static/Image/food-court.jpg'
const Background = '/static/Image/bg.svg'
const Cooking = '/static/Image/order_process.png'

const Order = ({
  title
}) => {
  return (
    <>
      <CustomHelmet title={title} />
      <Header
        transparent
      />
      <div className="mobile-layout-content with-header">
        <div>
          <div className="header">
            <div className="background">
              <img className="rotate-75" src={Background} alt="" />
            </div>
            <div className="image process">
              <img src={Cooking} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="text-center">
            <span>Pesanan kamu sedang disiapkan tunggu beberapa saat pemilik stand akan menghampiri kamu.</span>
            <div className="total-price">
              <div>
                Total
                <span>Rp 107.000</span>
              </div>
            </div>
          </div>
          <div className="order-detail">
            <div className="title">Pesanan</div>
            <div className="order-wrapper">
              <div className="invoice-status">
                <div className="inovice-number">Invoice INV-e44054923-20</div>
              </div>
              <div className="menu-item">
                <div className="menu-wrapper waves-effect">
                  <div className="menu-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="menu-desc">
                    <div className="menu-name">Zeribowl</div>
                    <div className="menu-short-desc">2 Item</div>
                    <div className="menu-price">Rp 57.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-wrapper">
              <div className="invoice-status">
                <div className="inovice-number">Invoice INV-e44054923-20</div>
              </div>
              <div className="menu-item">
                <div className="menu-wrapper waves-effect">
                  <div className="menu-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="menu-desc">
                    <div className="menu-name">Zeribowl</div>
                    <div className="menu-short-desc">2 Item</div>
                    <div className="menu-price">Rp 57.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-button">
            <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
              <a>
                <button className="btn btn-app waves-effect block">
                  <span>Lihat Detail Pesanan</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

Order.defaultProps = {
  title: 'Pesanan Saya'
}

// initial props authenticated using guard users
Order.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(Order)
