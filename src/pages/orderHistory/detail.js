import React from 'react'

import Header from 'components/Header'
import { Icon } from 'react-materialize'

import image from 'static/Image/food-court.jpg'

const historyDetail = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Detail Pesaanan</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <div className="det-history-wrapper">
            <div className="det-history-title">
              <div className="main-title">Pesanan</div>
              <div className="date">5 Nov 2020 11.41</div>
            </div>

            <div className="det-order-wrapper">
              <div className="det-invoice">Invoice INV-e4465493-20</div>
              <div className="det-stand-wrapper">
                <div className="stand-image">
                  <img src="static/Image/food-court.jpg" alt="" />
                </div>
                <div className="stand-desc">
                  <div className="desc-header">
                    <div>
                      <div className="stand-name">Zeribowl</div>
                      <div className="order-amount">2 Item</div>
                    </div>
                    <div className="order-status">Selesai</div>
                  </div>
                  <div className="total-price">Rp 57.000</div>
                </div>
              </div>
              <div className="det-menu-wrapper">
                <div className="total-menu-order">
                  <span>x1</span>
                </div>
                <div className="menu-desc">
                  <div className="desc-header">
                    <div className="menu-name">Classic Milk Tea (S) + Bubble</div>
                    <div className="menu-price">Rp 19.000</div>
                  </div>
                  <div className="desc-variant">
                    <div className="desc-variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-selected">Less</div>
                    </div>
                    <div className="desc-variant-wrapper">
                      <div className="variant-name">Ice Level</div>
                      <div className="variant-selected">Normal</div>
                    </div>
                    <div className="desc-variant-wrapper">
                      <div className="variant-name">Topping</div>
                      <div className="variant-selected">Oreo, Pearl</div>
                    </div>
                  </div>
                  <div className="desc-note">
                    <div className="order-note">
                      <div className="title-wrapper">
                        <div className="icon">
                          <Icon>description</Icon>
                        </div>
                        <div className="title">Catatan</div>
                      </div>
                      <div className="note-text">Pakai sedotan yang besar ya</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="det-menu-wrapper">
                <div className="total-menu-order">
                  <span>x1</span>
                </div>
                <div className="menu-desc">
                  <div className="desc-header">
                    <div className="menu-name">Zeribowl Wintermelon</div>
                    <div className="menu-price">Rp 38.000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="det-order-wrapper">
              <div className="det-invoice">Invoice INV-e4465493-20</div>
              <div className="det-stand-wrapper">
                <div className="stand-image">
                  <img src="static/Image/food-court.jpg" alt="" />
                </div>
                <div className="stand-desc">
                  <div className="desc-header">
                    <div>
                      <div className="stand-name">Zeribowl</div>
                      <div className="order-amount">2 Item</div>
                    </div>
                    <div className="order-status">Selesai</div>
                  </div>
                  <div className="total-price">Rp 57.000</div>
                </div>
              </div>
              <div className="det-menu-wrapper">
                <div className="total-menu-order">
                  <span>x1</span>
                </div>
                <div className="menu-desc">
                  <div className="desc-header">
                    <div className="menu-name">Classic Milk Tea (S) + Bubble</div>
                    <div className="menu-price">Rp 19.000</div>
                  </div>
                  <div className="desc-variant">
                    <div className="desc-variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-selected">Less</div>
                    </div>
                    <div className="desc-variant-wrapper">
                      <div className="variant-name">Ice Level</div>
                      <div className="variant-selected">Normal</div>
                    </div>
                    <div className="desc-variant-wrapper">
                      <div className="variant-name">Topping</div>
                      <div className="variant-selected">Oreo, Pearl</div>
                    </div>
                  </div>
                  <div className="desc-note">
                    <div className="order-note">
                      <div className="title-wrapper">
                        <div className="icon">
                          <Icon>description</Icon>
                        </div>
                        <div className="title">Catatan</div>
                      </div>
                      <div className="note-text">Pakai sedotan yang besar ya</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="det-menu-wrapper">
                <div className="total-menu-order">
                  <span>x1</span>
                </div>
                <div className="menu-desc">
                  <div className="desc-header">
                    <div className="menu-name">Zeribowl Wintermelon</div>
                    <div className="menu-price">Rp 38.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default historyDetail
