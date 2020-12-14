import React from 'react'

import Header from 'components/Header'
import { Icon } from 'react-materialize'
import Link from 'next/link'

const image = '/static/Image/food-court.jpg'

const Cart = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Keranjang Pesanan</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom bottom-10rem">
        <div className="content">
          <div className="order-group">
            <div className="stand-name">
              <span>Zeribowl</span>
            </div>
            <div className="order-wrapper">
              <div className="order-detail">
                <div className="menu-image">
                  <img src={image} alt="" />
                </div>
                <div className="order-desc">
                  <div className="desc-header">
                    <div>
                      <div className="menu-title">
                        <span>Classic Milk Tea (S) + Bubble</span>
                      </div>
                      <div className="menu-price">
                        <span>Rp 19.000</span>
                        <span className="qty">x1</span>
                      </div>
                    </div>
                    <div className="edit-button">
                      <button className="btn x-small">Edit</button>
                    </div>
                  </div>
                  <div className="menu-variant">
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="order-wrapper">
              <div className="order-detail">
                <div className="menu-image">
                  <img src={image} alt="" />
                </div>
                <div className="order-desc">
                  <div className="desc-header">
                    <div>
                      <div className="menu-title">
                        <span>Classic Milk Tea (S) + Bubble</span>
                      </div>
                      <div className="menu-price">
                        <span>Rp 19.000</span>
                        <span className="qty">x1</span>
                      </div>
                    </div>
                    <div className="edit-button">
                      <button className="btn x-small">Edit</button>
                    </div>
                  </div>
                  <div className="menu-variant">
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-group">
            <div className="stand-name">
              <span>Zeribowl</span>
            </div>
            <div className="order-wrapper">
              <div className="order-detail">
                <div className="menu-image">
                  <img src={image} alt="" />
                </div>
                <div className="order-desc">
                  <div className="desc-header">
                    <div>
                      <div className="menu-title">
                        <span>Classic Milk Tea (S) + Bubble</span>
                      </div>
                      <div className="menu-price">
                        <span>Rp 19.000</span>
                        <span className="qty">x1</span>
                      </div>
                    </div>
                    <div className="edit-button">
                      <button className="btn x-small">Edit</button>
                    </div>
                  </div>
                  <div className="menu-variant">
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-wrapper">
              <div className="order-detail">
                <div className="menu-image">
                  <img src={image} alt="" />
                </div>
                <div className="order-desc">
                  <div className="desc-header">
                    <div>
                      <div className="menu-title">
                        <span>Classic Milk Tea (S) + Bubble</span>
                      </div>
                      <div className="menu-price">
                        <span>Rp 19.000</span>
                        <span className="qty">x1</span>
                      </div>
                    </div>
                    <div className="edit-button">
                      <button className="btn x-small">Edit</button>
                    </div>
                  </div>
                  <div className="menu-variant">
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                    <div className="variant-wrapper">
                      <div className="variant-name">Sugar Level</div>
                      <div className="variant-type">Less</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-button">
            <Link href="/home/order/view/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d" className="btn btn-app waves-effect block">
              <a>
                <span>Pesan</span>
                <span style={{ margin: '0 .5rem' }}> - </span>
                <span className="price-button">Rp 107.000</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
