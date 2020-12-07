import React from 'react'
import { Link } from 'react-router-dom'

import image from 'static/Image/food-court.jpg'
import Background from 'static/Image/bg.svg'
import Header from 'components/Header'

const Process = () => {
  return (
    <>
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
              <img src="static/Image/order_process.png" alt="" />
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
                    <img src="static/Image/food-court.jpg" alt="" />
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
                    <img src="static/Image/food-court.jpg" alt="" />
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
            <Link to="/history/detail/1">
              <button className="btn btn-app waves-effect block">
                <span>Lihat Detail Pesanan</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Process
