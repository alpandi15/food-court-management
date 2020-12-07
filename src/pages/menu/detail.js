import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header'
import { Icon } from 'react-materialize'

import Input from 'components/Form/Input'
import color from 'theme/color'

const MenuDetail = () => {
  const [headerActive, setHeaderActive] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 250) {
        setHeaderActive(true)
      } else {
        setHeaderActive(false)
      }
    })
  }, [])

  return (
    <>
      <Header
        transparent={!headerActive}
        textStyle={{
          color: color.primaryColor,
          backgroundColor: color.white,
          borderRadius: '10px',
          width: '45px',
          height: '45px',
          marginRight: '.5rem'
        }}
      />

      <div className="mobile-layout-content">
        <div className="food-court-image">
          <img src="static/Image/food-court.jpg" alt="" />
        </div>

        <div className="content padding-bottom">
          <div className="content-header">
            <div>
              <div className="title">Classic Milk Tea (s) + Bubble</div>
              <div className="price">Rp 19.000</div>
            </div>
          </div>
          <div className="content-body">
            <div className="order-amount">
              <div className="amount">
                <span className="button minus waves-effect">
                  <Icon>remove</Icon>
                </span>
                <span className="number">1</span>
                <span className="button plus waves-effect">
                  <Icon>add</Icon>
                </span>
              </div>
              <div className="note">
                <Input
                  iconName="description"
                  meta={{}}
                  iconClassName="icon-style"
                  className="input-icon"
                  placeholder="Catatan"
                />
              </div>
            </div>
            <div className="choose-variant">
              <div className="variant-title">
                <div>
                  <span className="variant-name">Gula</span>
                  <span className="variant-stats">Wajib</span>
                </div>
                <div>
                  <span className="variant-number">Pilh satu</span>
                </div>
              </div>
              <div className="variant-content">
                <div className="radio">
                  <label>
                    <input className="with-gap" name="sugar" value="none" type="radio" />
                    <span>None</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
                <div className="radio">
                  <label>
                    <input className="with-gap" name="sugar" value="less" type="radio" />
                    <span>Less</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
                <div className="radio">
                  <label>
                    <input className="with-gap" name="sugar" value="normal" type="radio" />
                    <span>Normal</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
                <div className="radio">
                  <label>
                    <input className="with-gap" name="sugar" value="More" type="radio" />
                    <span>More</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-variant">
              <div className="variant-title">
                <div>
                  <span className="variant-name">Level Es</span>
                  <span className="variant-stats">Wajib</span>
                </div>
                <div>
                  <span className="variant-number">Pilh satu</span>
                </div>
              </div>
              <div className="variant-content">
                <div className="radio">
                  <label>
                    <input className="with-gap" name="ice" value="none" type="radio" />
                    <span>None</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
                <div className="radio">
                  <label>
                    <input className="with-gap" name="ice" value="less" type="radio" />
                    <span>Less</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
                <div className="radio">
                  <label>
                    <input className="with-gap" name="ice" value="normal" type="radio" />
                    <span>Normal</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
                <div className="radio">
                  <label>
                    <input className="with-gap" name="ice" value="More" type="radio" />
                    <span>More</span>
                  </label>
                  <div className="variant-price">
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-variant">
              <div className="variant-title">
                <div>
                  <span className="variant-name">Topping</span>
                  <span className="variant-stats"> </span>
                </div>
                <div>
                  <span className="variant-number">Pilh Maks 5</span>
                </div>
              </div>
              <div className="variant-content">
                <div className="check">
                  <label>
                    <input type="checkbox" className="filled-in" name="topping" value="oreo" />
                    <span>Oreo</span>
                  </label>
                  <div className="variant-price">
                    <span>+ 5.000</span>
                  </div>
                </div>
                <div className="check">
                  <label>
                    <input type="checkbox" className="filled-in" name="topping" value="red_bean" />
                    <span>Red Bean</span>
                  </label>
                  <div className="variant-price">
                    <span>+ 5.000</span>
                  </div>
                </div>
                <div className="check">
                  <label>
                    <input type="checkbox" className="filled-in" name="topping" value="pearl" />
                    <span>Pearl</span>
                  </label>
                  <div className="variant-price">
                    <span>+ 5.000</span>
                  </div>
                </div>
                <div className="check">
                  <label>
                    <input type="checkbox" className="filled-in" name="topping" value="coconut" />
                    <span>Coconut</span>
                  </label>
                  <div className="variant-price">
                    <span>+ 5.000</span>
                  </div>
                </div>
              </div>
              <div className="fixed-button">
                <Link to="/zeribowl/menu" className="btn btn-app waves-effect block">
                  <span>Pesan</span>
                  <span style={{ margin: '0 .5rem' }}> - </span>
                  <span className="price-button">Rp 107.000</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuDetail
