import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { withAuthSync } from 'components/Security/auth'
import NProgress from 'nprogress'

import { getAll } from 'actions/homeStand/homeStandAction'
import { getUserData } from 'actions/auth/authAction'
import Image from 'components/Image'
import { Icon } from 'react-materialize'
import SearchInput from 'components/Form/SearchInput'
import { toastify } from 'components/Toast/Toastify'
import color from '../../theme/color'

const loveIcon = '/static/Icon/Heart.svg'
const docIcon = '/static/Icon/Document.svg'
const discIcon = '/static/Icon/Discount.svg'
const filterIcon = '/static/Icon/Filter.svg'
const defaultImgStand = '/static/Image/default-stand/192x192.png'
const defaultImgProduct = '/static/Image/default-product/32x32.png'

const GUARD = 'user'
const SESSION_TABLE = true

const WAIT_INTERVAL = 1000

const Home = ({
  // loadingData,
  userData,
  listData,
  getAll,
  getUserData,
  dataError,
  messageList,
  ...datas
}) => {
  React.useEffect(() => {
    console.log('DATA PROPS ', datas)
    const fetch = async () => {
      NProgress.start()
      await getAll({
        relationship: 1
      })

      await getUserData(GUARD, SESSION_TABLE)
      NProgress.done()
    }

    fetch()
  }, [getAll, getUserData, GUARD, NProgress, SESSION_TABLE])

  React.useEffect(() => {
    if (dataError && messageList) {
      toastify({
        type: 'error',
        message: messageList
      })
    }
  }, [dataError, messageList])

  const debounce = (func, delay) => {
    let debounceTimer
    return function () {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
  }
  let handleChange = async (event) => {
    NProgress.start()
    event.persist()
    await getAll({
      keyword: event.target.value,
      relationship: 1
    })
    NProgress.done()
    console.log('Ini Value ', event.target.value)
  }
  let onSearch = debounce(handleChange, WAIT_INTERVAL)

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
                  {
                    userData && userData.isGuest ? 'Pengunjung'
                    : userData.name
                  }
                  <Icon>chevron_right</Icon>
                </a>
              </Link>
            </div>
            <div className="location-content d-flex">
              <div className="location">
                Lokasi, Medan Night Market
              </div>
              <div className="table">
                {userData && userData.tableNumber}
              </div>
            </div>
          </div>
          <div className="home-header-right">
            <Link href="/home/favorite">
              <a className="btn btn-light-smooth waves-effect waves-light">
                <img src={loveIcon} alt="" />
              </a>
            </Link>
            <Link href="/home/order/history">
              <a className="btn btn-light-smooth waves-effect waves-light">
                <img src={docIcon} alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="header-search-bar">
          <SearchInput autoComplete="off"
            id="search"
            placeholder="Mau makan apa?"
            onChange={onSearch}
          />
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
                        src={val.image && val.image.url}
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
                          {/* <div className="info-stand">
                            <div className="stand-number">Stand #10</div>
                          </div> */}
                        </div>
                      </div>
                      <div className="voucher-stand">
                        <img className="icon-14" src={discIcon} alt="" />
                        <span>Voucher potongan 20%</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      >
                        {
                          val.menus && val.menus.map((menu, key) => (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              borderBottom: '1px solid #ece9e9',
                              padding: '3px 0'
                            }}
                            >
                              <div
                                key={key}
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  overflow: 'hidden',
                                  border: '3px solid #FFFFFF',
                                  zIndex: 1
                                }}
                              >
                                <Image
                                  src={menu.image && menu.image.url}
                                  className="user-image"
                                  alt="Profile"
                                  defaultsrc={defaultImgProduct}
                                  style={{ width: '100%', height: '100%' }}
                                />
                              </div>

                              <div>
                                <div style={{ fontSize: '10px' }}>{menu.name}</div>
                                <div style={{ fontWeight: '600' }}>20.000</div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                      {/* <div className="food-preview">
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
                      </div> */}
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
    dataError: homeStandStore.error,
    messageList: homeStandStore.message,
    loadingUser: accountStore.loading,
    userData: accountStore.currentItem
  }
}

const mapDispatchToProps = dispatch => ({
  getAll: data => dispatch(getAll(data)),
  getUserData: (guard, sessionTable) => dispatch(getUserData(guard, sessionTable))
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
