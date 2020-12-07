import React from 'react'

import Header from 'components/Header'
import { Link } from 'react-router-dom'

import image from 'static/Image/food-court.jpg'

const Voucher = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Voucher</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <Link to="/zeribowl/voucher/1">
            <div className="voucher-wrapper waves-effect">
              <div className="voucher-image">
                <img src="static/Image/food-court.jpg" alt="" />
              </div>
              <div className="voucher-desc">
                <div>
                  <div className="voucher-name">MKNENAKBGT25</div>
                  <div className="voucher-strip">Potongan 25%</div>
                </div>
                <div className="desc-footer">
                  <div className="voucher-exp">Berlaku sampai 10 Nov 2020</div>
                  <div>
                    <button className="btn btn-app-primary x-small">Pakai</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/zeribowl/voucher/1">
            <div className="voucher-wrapper waves-effect">
              <div className="voucher-image">
                <img src="static/Image/food-court.jpg" alt="" />
              </div>
              <div className="voucher-desc">
                <div>
                  <div className="voucher-name">MKNENAKBGT25</div>
                  <div className="voucher-strip">Potongan 25%</div>
                </div>
                <div className="desc-footer">
                  <div className="voucher-exp">Berlaku sampai 10 Nov 2020</div>
                  <div>
                    <button className="btn btn-app-primary x-small">Pakai</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Voucher
