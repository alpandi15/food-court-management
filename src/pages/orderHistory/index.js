import React from 'react'

import Header from 'components/Header'
import { Tabs, Tab } from 'react-materialize'
import { Link } from 'react-router-dom'

// import image from 'static/Image/food-court.jpg'

const orderHistory = () => {
  return (
    <>
      <Header
        textStyle={{
          color: '#000000'
        }}
      >
        <span className="header-title">Riwayat Pesaanan</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <Tabs
            className="tab-app"
          >
            <Tab
              tabWidth="10"
              options={{
                duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: true
              }}
              title="Proses"
            >
              <Link to="/history/detail/1">
                <div className="history-wrapper waves-effect">
                  <div className="date-time">
                    <div className="history-date">05 November 2020</div>
                    <div className="history-time">11.41 WIB</div>
                  </div>
                  <div className="history-desc">
                    <div className="stand-amount">2 Stand</div>
                    <div className="total-price">
                      Total
                      <span>Rp 151.000</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/history/detail/1">
                <div className="history-wrapper waves-effect">
                  <div className="date-time">
                    <div className="history-date">05 November 2020</div>
                    <div className="history-time">11.41 WIB</div>
                  </div>
                  <div className="history-desc">
                    <div className="stand-amount">2 Stand</div>
                    <div className="total-price">
                      Total
                      <span>Rp 151.000</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Tab>
            <Tab
              options={{
                duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: true
              }}
              title="Selesai"
            >
              <div className="history-group">
                <div className="month">November</div>
                <Link to="/history/detail/1">
                  <div className="history-wrapper waves-effect">
                    <div className="date-time">
                      <div className="history-date">05 November 2020</div>
                      <div className="history-time">11.41 WIB</div>
                    </div>
                    <div className="history-desc">
                      <div className="stand-amount">2 Stand</div>
                      <div className="total-price">
                        Total
                        <span>Rp 151.000</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/history/detail/1">
                  <div className="history-wrapper waves-effect">
                    <div className="date-time">
                      <div className="history-date">05 November 2020</div>
                      <div className="history-time">11.41 WIB</div>
                    </div>
                    <div className="history-desc">
                      <div className="stand-amount">2 Stand</div>
                      <div className="total-price">
                        Total
                        <span>Rp 151.000</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="history-group">
                <div className="month">Oktober</div>
                <Link to="/history/detail/1">
                  <div className="history-wrapper waves-effect">
                    <div className="date-time">
                      <div className="history-date">05 November 2020</div>
                      <div className="history-time">11.41 WIB</div>
                    </div>
                    <div className="history-desc">
                      <div className="stand-amount">2 Stand</div>
                      <div className="total-price">
                        Total
                        <span>Rp 151.000</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/history/detail/1">
                  <div className="history-wrapper waves-effect">
                    <div className="date-time">
                      <div className="history-date">05 November 2020</div>
                      <div className="history-time">11.41 WIB</div>
                    </div>
                    <div className="history-desc">
                      <div className="stand-amount">2 Stand</div>
                      <div className="total-price">
                        Total
                        <span>Rp 151.000</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default orderHistory
