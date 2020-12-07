import React from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '../../components/Form/SearchInput'
import Header from '../../components/Header'

const Favourite = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Stand Favorit</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <div className="header-search-bar">
            <SearchInput autoComplete="off" id="search" placeholder="Mau makan apa?" />
          </div>

          <div className="container-stand-list">
            <Link to="zeribowl/menu">
              <div className="content-product waves-effect">
                <div className="image">
                  <img src="static/Image/food-court.jpg" alt="" />
                  <div className="promo-badge">Promo</div>
                </div>
                <div className="info">
                  <div className="info-detail">
                    <div className="d-flex justify-content-space-between">
                      <div>
                        <div className="product-name">Zeribowl</div>
                        <div className="product-category">Minuman</div>
                      </div>
                      <div className="info-stand">
                        <div className="stand-number">Stand #10</div>
                      </div>
                    </div>
                  </div>
                  <div className="voucher-stand">
                    <img className="icon-14" src="static/Icon/Discount.svg" alt="" />
                    <span>Voucher potongan 20%</span>
                  </div>
                  <div className="food-preview">
                    <div className="item">
                      <img src="static/Image/food-court.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="static/Image/food-court.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="static/Image/food-court.jpg" alt="" />
                    </div>
                    <div className="item-last">
                      <span>+54 Menu</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Favourite
