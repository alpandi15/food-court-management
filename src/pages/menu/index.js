import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import socketIOClient from 'socket.io-client'
// import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import OrderPreview from 'components/OrderPreview'
import SearchInput from 'components/Form/SearchInput'
import color from 'theme/color'
import Header from 'components/Header'

import { getStandMenu } from 'actions/product/productAction'

import Voucher from 'static/Icon/voucher.svg'

import SearchModal from './search'

const ENDPOINT = 'http://192.168.3.65:3000'

const categories = [
  { id: 1, name: 'Rekomendasi' },
  { id: 2, name: 'Minuman' },
  { id: 3, name: '2 Liter' },
  { id: 4, name: 'Dessert' },
  { id: 5, name: '23 Ribu' },
  { id: 6, name: 'Pedas' },
  { id: 7, name: 'Ramuan' },
  { id: 8, name: 'Tongkat Ali' }
]

const products = [
  {
    id: 1,
    categoryId: 1,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 6,
    categoryId: 1,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 10,
    categoryId: 3,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 11,
    categoryId: 3,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 13,
    categoryId: 4,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 14,
    categoryId: 4,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 15,
    categoryId: 4,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 16,
    categoryId: 5,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 17,
    categoryId: 5,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 18,
    categoryId: 5,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  },
  {
    id: 19,
    categoryId: 5,
    name: 'Classic Milk Tea (S) + Bubble',
    price: 19000,
    description: 'Fresh milk tea with bubble'
  }
]

const Menu = ({
  getStandMenu
}) => {
  const params = useParams()
  const [modal, setModal] = React.useState(false)
  const [fav, setFav] = React.useState(false)
  const [listProduct, setListProduct] = React.useState([])
  const [headerActive, setHeaderActive] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 250) {
        setHeaderActive(true)
      } else {
        setHeaderActive(false)
      }
    })

    const fetch = async () => {
      console.log('Masuk Effect ', params)
      if (params && params.uuid) {
        const socket = socketIOClient(ENDPOINT)
        await getStandMenu(params.uuid)

        socket.on(params.uuid, (data) => {
          console.log('Socket Data Detail ', data)
        })
      }
    }

    const groupList = () => {
      setListProduct(() => {
        return products.reduce((r, a) => {
          r[a.categoryId] = [...r[a.categoryId] || [], a]
          return r
        }, [])
      })
    }

    fetch()
    groupList()
  }, [params.uuid, getStandMenu])

  const handleFavorite = () => {
    setFav(!fav)
  }

  console.log('TER GRUB ', listProduct)

  return (
    <>
      <Header
        transparent={!headerActive}
        textStyle={{
          color: color.primaryColor,
          backgroundColor: color.white,
          borderRadius: '10px',
          width: '60px',
          height: '45px',
          marginRight: '.5rem'
        }}
      >
        <SearchInput onClick={() => setModal(true)} placeholder="Cari Menu" disabled />
      </Header>

      <div className={`category ${headerActive ? 'scroll' : ''}`}>
        <div className="category-wrapper">
          <ul>
            {
              categories && categories.map((val, index) => {
                return (
                  <li key={index}>
                    <LinkScroll
                      to={`sectionId-${val.id}`}
                      activeClass="active"
                      spy
                      smooth
                      duration={500}
                      offset={-100}
                    >
                      {val.name}
                    </LinkScroll>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="mobile-layout-content">
        <div className="food-court-image">
          <img src="static/Image/food-court.jpg" alt="" />
        </div>

        <div className="content">
          <div className="content-header">
            <div>
              <div className="title">Zeribowl</div>
              <div className="sub-title">Minuman</div>
            </div>
            <div>
              <div onClick={handleFavorite} className={`waves-effect favourite-icon ${fav ? 'active' : ''}`} />
            </div>
          </div>
          <div className="content-body">
            <div className="voucher">
              <div className="voucher-icon">
                <img className="icon-24" src={Voucher} alt="" />
              </div>
              <div>
                <span>Lihat voucher stand ini</span>
              </div>
              <div className="button">
                <Link to="/zeribowl/voucher" className="btn btn-app-outline x-small waves-effect">Buka</Link>
              </div>
            </div>
            <div className="menu">
              {
                listProduct && listProduct.length !== 0 && listProduct.map((val, index) => {
                  return (
                    <div key={index} className="section-content" id={`sectionId-${index}`}>
                      <div className="category-name">
                        <div>
                          {
                            (categories.find((e) => e.id === index)).name
                          }
                        </div>
                      </div>
                      {
                        val.map((list, indexL) => (
                          <div className="menu-item" key={indexL}>
                            <Link to="/zeribowl/menu/1">
                              <div className="menu-wrapper waves-effect">
                                <div className="menu-image">
                                  <img src="static/Image/food-court.jpg" alt="" />
                                </div>
                                <div className="menu-desc">
                                  <div className="menu-name">{list.name}</div>
                                  <div className="menu-short-desc">{list.description}</div>
                                  <div className="menu-price">{`Rp. ${list.price}`}</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <OrderPreview />
      <SearchModal open={modal} onHide={setModal} />
    </>
  )
}

const mapStateToProps = (state) => {
  const { standStore } = state
  return {
    loadingData: standStore.loading,
    currentItem: standStore.currentItem
  }
}

const mapDispatchToProps = (dispatch) => ({
  getStandMenu: (id, guard) => dispatch(getStandMenu(id, guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
