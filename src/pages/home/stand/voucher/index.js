import React from 'react'

import Header from 'components/Header'
import Link from 'next/link'
import CustomHelmet from 'components/CustomHelmet'
import { withAuthSync } from 'components/Security/auth'

const image = '/static/Image/food-court.jpg'

const Voucher = ({
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
        <span className="header-title">Voucher</span>
      </Header>
      <div className="mobile-layout-content margin-top margin-bottom">
        <div className="content">
          <Link href="/home/stand/21d11972-351f-11eb-8c20-d0fe89b4eb7d/voucher/21d11972-351f-11eb-8c20-d0fe89b4eb7d">
            <a>
              <div className="voucher-wrapper waves-effect">
                <div className="voucher-image">
                  <img src={image} alt="" />
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
            </a>
          </Link>
          <Link href="/home/stand/21d11972-351f-11eb-8c20-d0fe89b4eb7d/voucher/21d11972-351f-11eb-8c20-d0fe89b4eb7d">
            <a>
              <div className="voucher-wrapper waves-effect">
                <div className="voucher-image">
                  <img src={image} alt="" />
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
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

Voucher.defaultProps = {
  title: 'Voucher'
}

// initial props authenticated using guard users
Voucher.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(Voucher)
