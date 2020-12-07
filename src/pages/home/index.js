import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import socketIOClient from 'socket.io-client'

import { getAll } from 'actions/homeStand/homeStandAction'
import Image from 'components/Image'
import SearchInput from 'components/Form/SearchInput'

import { Icon } from 'react-materialize'
import color from '../../theme/color'

const loveIcon = 'static/Icon/Heart.svg'
const docIcon = 'static/Icon/Document.svg'
const discIcon = 'static/Icon/Discount.svg'
const filterIcon = 'static/Icon/Filter.svg'

const ENDPOINT = 'http://192.168.3.65:3000'

const Home = ({
  // loadingData,
  listData,
  getAll
}) => {
  const socket = socketIOClient(ENDPOINT)
  React.useEffect(() => {
    socket.on('21d11972-351f-11eb-8c20-d0fe89b4eb7d', (data) => {
      console.log('Socket Data ', data)
    })
    const fetch = async () => {
      await getAll({
        foodCourtId: 6,
        relationship: 1
      })
    }

    fetch()
  }, [getAll])

  return (
    <>
      <div className="mobile-layout-content" style={{ backgroundColor: color.white, padding: '15px' }}>
        <div className="home-header-container d-flex">
          <div className="home-header-user">
            <div className="hallo-user">
              <Link to="/profile">
                Halo, Abrar Endra
                <Icon>chevron_right</Icon>
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
            <Link to="/favourite" className="btn btn-light-smooth waves-effect waves-light">
              <img src={loveIcon} alt="" />
            </Link>
            <Link to="/history" className="btn btn-light-smooth waves-effect waves-light">
              <img src={docIcon} alt="" />
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
              <Link to={`/stand/${val.uuid}/menu`} key={index}>
                <div className="content-product waves-effect">
                  <div className="image">
                    {/* <img src={image} alt="" /> */}
                    <Image
                      src={val.owner && val.owner.image && val.owner.image.url}
                      className="user-image"
                      alt="Profile"
                      defaultsrc="static/Image/default-stand/192x192.png"
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
                              defaultsrc="static/Image/default-product/32x32.png"
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
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { homeStandStore } = state
  return {
    loadingData: homeStandStore.loading,
    listData: homeStandStore.list,
    meta: homeStandStore.meta
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAll: (data) => dispatch(getAll(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
