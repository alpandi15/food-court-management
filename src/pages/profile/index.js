import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-materialize'

import Header from 'components/Header'

const Profile = () => {
  return (
    <>
      <Header
        transparent
      />
      <div className="mobile-layout-content with-header">
        <div>
          <div className="header profile">
            <div className="user-wrapper">
              <div className="user-avatar">
                <img src="static/Image/food-court.jpg" alt="" />
              </div>
              <div className="user-desc">
                <div className="user-name">Abrar Endra</div>
                <div className="user-email">lfcabrar@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content profile">
          <Link to="/profile/edit">
            <div className="list-menu-wrapper waves-effect">
              <div className="icon">
                <img src="static/Icon/Profile.svg" alt="" />
              </div>
              <div className="menu-name">Edit Profil</div>
              <div className="right-icon">
                <Icon>chevron_right</Icon>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="list-menu-wrapper waves-effect">
              <div className="icon">
                <img src="static/Icon/Lock.svg" alt="" />
              </div>
              <div className="menu-name">Ganti Kata Sandi</div>
              <div className="right-icon">
                <Icon>chevron_right</Icon>
              </div>
            </div>
          </Link>
          <Link to="/favourite">
            <div className="list-menu-wrapper waves-effect">
              <div className="icon">
                <img src="static/Icon/HeartL.svg" alt="" />
              </div>
              <div className="menu-name">Stand Favorit</div>
              <div className="right-icon">
                <Icon>chevron_right</Icon>
              </div>
            </div>
          </Link>
          <Link to="/history">
            <div className="list-menu-wrapper waves-effect">
              <div className="icon">
                <img src="static/Icon/FavouriteL.svg" alt="" />
              </div>
              <div className="menu-name">Riwayat Pesanan</div>
              <div className="right-icon">
                <Icon>chevron_right</Icon>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="list-menu-wrapper waves-effect logout">
              <div className="icon">
                <img src="static/Icon/Logout.svg" alt="" />
              </div>
              <div className="menu-name">Keluar</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
