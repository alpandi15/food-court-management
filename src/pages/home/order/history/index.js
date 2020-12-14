import React from 'react'

import Header from 'components/Header'
import { Tabs, Tab } from 'react-materialize'
import Link from 'next/link'
import CustomHelmet from 'components/CustomHelmet'
import { withAuthSync } from 'components/Security/auth'

// import image from 'static/Image/food-court.jpg'

const orderHistory = ({
  title
}) => {
  return (
    <>
      <CustomHelmet title={title} />
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
              <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
                <a>
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
                </a>
              </Link>
              <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
                <a>
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
                </a>
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
                <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
                  <a>
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
                  </a>
                </Link>
                <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
                  <a>
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
                  </a>
                </Link>
              </div>
              <div className="history-group">
                <div className="month">Oktober</div>
                <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
                  <a>
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
                  </a>
                </Link>
                <Link href="/home/order/history/detail/5ccfb5e3-3521-11eb-8c20-d0fe89b4eb7d">
                  <a>
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
                  </a>
                </Link>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

orderHistory.defaultProps = {
  title: 'History Pesanan Saya'
}

// initial props authenticated using guard users
orderHistory.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(orderHistory)
