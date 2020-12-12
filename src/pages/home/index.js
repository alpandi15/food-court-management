import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { withAuthSync } from 'components/Security/auth'

import { getAll } from 'actions/homeStand/homeStandAction'
import { getUserData } from 'actions/auth/authAction'
import Image from 'components/Image'
import { Icon } from 'react-materialize'
import SearchInput from 'components/Form/SearchInput'
import color from '../../theme/color'

const loveIcon = '/static/Icon/Heart.svg'
const docIcon = '/static/Icon/Document.svg'
const discIcon = '/static/Icon/Discount.svg'
const filterIcon = '/static/Icon/Filter.svg'
const defaultImgStand = '/static/Image/default-stand/192x192.png'
const defaultImgProduct = '/static/Image/default-product/32x32.png'

const GUARD = 'user'

const Home = ({
  // loadingData,
  userData,
  listData,
  getAll,
  getUserData,
  ...datas
}) => {
  React.useEffect(() => {
    console.log('DATA PROPS ', datas)
    const fetch = async () => {
      await getAll({
        foodCourtId: 6,
        relationship: 1
      })

      await getUserData(GUARD)
    }

    fetch()
  }, [getAll, getUserData, GUARD])

  return (
    <>
      <div className="mobile-layout-content" style={{ backgroundColor: color.white, padding: '15px' }}>
        <div className="home-header-container d-flex">
          <div className="home-header-user">
            <div className="hallo-user">
              <Link href="/profile">
                <a>
                  Halo,
                  {' '}
                  {userData && userData.name}
                  <Icon>chevron_right</Icon>
                </a>
              </Link>
            </div>
            <div className="location-content d-flex">
              <div className="location">
                Lokasi, Medan Night Market
              </div>
              <div className="table">
                Meja #14
              </div>
            </div>
          </div>
          <div className="home-header-right">
            <Link href="/favourite">
              <a className="btn btn-light-smooth waves-effect waves-light">
                <img src={loveIcon} alt="" />
              </a>
            </Link>
            <Link href="/history">
              <a className="btn btn-light-smooth waves-effect waves-light">
                <img src={docIcon} alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="header-search-bar">
          <SearchInput autoComplete="off" id="search" placeholder="Mau makan apa?" />
        </div>

        <div className="product-filter">
          <div className="text font-semibold">Pilih Stand</div>
          <div className="icon-filter">
            <button className="btn btn-light-smooth waves-effect waves-light bg-transparent">
              <img src={filterIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="container-stand-list">
          {
            listData && listData.length !== 0 && listData.map((val, index) => (
              <Link href={`/home/stand/${val.uuid}`} key={index}>
                <a>
                  <div className="content-product waves-effect">
                    <div className="image">
                      {/* <img src={image} alt="" /> */}
                      <Image
                        src={val.owner && val.owner.image && val.owner.image.url}
                        className="user-image"
                        alt="Profile"
                        defaultsrc={defaultImgStand}
                        style={{ width: '100%' }}
                      />
                      <div className="promo-badge">Promo</div>
                    </div>
                    <div className="info">
                      <div className="info-detail">
                        <div className="d-flex justify-content-space-between">
                          <div>
                            <div className="product-name">{val.name}</div>
                            <div className="product-category">{val.category && val.category.name}</div>
                          </div>
                          <div className="info-stand">
                            <div className="stand-number">Stand #10</div>
                          </div>
                        </div>
                      </div>
                      <div className="voucher-stand">
                        <img className="icon-14" src={discIcon} alt="" />
                        <span>Voucher potongan 20%</span>
                      </div>
                      <div className="food-preview">
                        {
                          val.menus && val.menus.map((menu, key) => (
                            <div className="item" key={key}>
                              <Image
                                src={menu.image && menu.image.url}
                                className="user-image"
                                alt="Profile"
                                defaultsrc={defaultImgProduct}
                                style={{ width: '100%' }}
                              />
                            </div>
                          ))
                        }
                        <div className="item-last">
                          <span>+54 Menu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { homeStandStore, accountStore } = state
  return {
    loadingData: homeStandStore.loading,
    listData: homeStandStore.list,
    meta: homeStandStore.meta,
    loadingUser: accountStore.loading,
    userData: accountStore.currentItem
  }
}

const mapDispatchToProps = dispatch => ({
  getAll: data => dispatch(getAll(data)),
  getUserData: guard => dispatch(getUserData(guard))
})

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.defaultProps = {
  title: 'Home Food Court'
}

// initial props authenticated using guard users
Home.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(Home)
  )
)
