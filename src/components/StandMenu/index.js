import React, { Component } from 'react'

const homeIcon = '/static/Icon/Menu_Home.svg'
const menuIcon = '/static/Icon/Menu_Category.svg'
const orderIcon = '/static/Icon/Menu_Document.svg'
const profileIcon = '/static/Icon/Menu_Profile.svg'

class standMenu extends Component {
  render () {
    return (
      <div>
        <div className="stand-menu">
          <div className="menu-item waves-effect">
            <div><img src={homeIcon} alt="home" /></div>
            <div>Beranda</div>
          </div>
          <div className="menu-item waves-effect">
            <div><img src={menuIcon} alt="menu" /></div>
            <div>Menu</div>
          </div>
          <div className="menu-item waves-effect">
            <div><img src={orderIcon} alt="order" /></div>
            <div>Pesanan</div>
          </div>
          <div className="menu-item waves-effect">
            <div><img src={profileIcon} alt="profile" /></div>
            <div>Profil</div>
          </div>
        </div>
      </div>
    )
  }
}

export default standMenu
