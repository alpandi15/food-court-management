import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { Icon } from 'react-materialize'
import Header from 'components/Header'
import { logoutUser, getUserData } from 'actions/auth/authAction'
import { withAuthSync, logout } from 'components/Security/auth'

const Image = dynamic(() => import('components/Image'), { ssr: false })
const Modal = dynamic(() => import('components/Modal'), {
  ssr: false
})


const profileIcon = '/static/Icon/Profile.svg'
const lockIcon = '/static/Icon/Lock.svg'
const heartIcon = '/static/Icon/HeartL.svg'
const favouriteIcon = '/static/Icon/FavouriteL.svg'
const logoutIcon = '/static/Icon/Logout.svg'

const GUARD = 'user'

const Profile = ({
  userData,
  getUserData
}) => {
  const [modal, setModal] = React.useState(false)
  React.useEffect(() => {
    const fetch = async () => {
      await getUserData(GUARD)
    }

    fetch()
  }, [GUARD, getUserData])

  const handleModal = (status) => {
    setModal(status)
  }

  const handleLogout = async () => {
    await logout(GUARD)
    setModal(false)
  }

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
                <Image
                  src={userData && userData.image && userData.image.url}
                  className="user-image"
                  alt="Profile"
                  defaultsrc="/static/Image/default-image-user.png"
                />
              </div>
              <div className="user-desc">
                <div className="user-name">{userData && userData.name}</div>
                <div className="user-email">{userData && userData.email}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content profile">
          <Link href="/profile/edit">
            <a>
              <div className="list-menu-wrapper waves-effect">
                <div className="icon">
                  <img src={profileIcon} alt="" />
                </div>
                <div className="menu-name">Edit Profil</div>
                <div className="right-icon">
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/profile/change-password">
            <a>
              <div className="list-menu-wrapper waves-effect">
                <div className="icon">
                  <img src={lockIcon} alt="" />
                </div>
                <div className="menu-name">Ganti Kata Sandi</div>
                <div className="right-icon">
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/home/favorite">
            <a>
              <div className="list-menu-wrapper waves-effect">
                <div className="icon">
                  <img src={heartIcon} alt="" />
                </div>
                <div className="menu-name">Stand Favorit</div>
                <div className="right-icon">
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/home/order/history">
            <a>
              <div className="list-menu-wrapper waves-effect">
                <div className="icon">
                  <img src={favouriteIcon} alt="" />
                </div>
                <div className="menu-name">Riwayat Pesanan</div>
                <div className="right-icon">
                  <Icon>chevron_right</Icon>
                </div>
              </div>
            </a>
          </Link>

          <div onClick={() => handleModal(true)} className="list-menu-wrapper waves-effect logout">
            <div className="icon">
              <img src={logoutIcon} alt="" />
            </div>
            <div className="menu-name">Keluar</div>
          </div>
        </div>
      </div>

      <Modal
        open={modal}
        onCloseStart={handleModal}
        id="ModalInformasi"
        endingTop="10%"
        modalBottom
      >
        <div>
          <div className="modal-content-custom logout">
            <button
              className="btn modal-close close waves-effect btn-close"
              node="button"
            >
              <Icon>close</Icon>
            </button>
            <span>Ingin keluar dari akun kamu ?</span>
            <div className="modal-action">
              <button
                className="waves-effect waves-light btn-logout"
                onClick={() => handleLogout()}
                node="button"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}


const mapStateToProps = (state) => {
  const { accountStore } = state
  return {
    loadingUser: accountStore.loading,
    userData: accountStore.currentItem
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: guard => dispatch(logoutUser(guard)),
  getUserData: guard => dispatch(getUserData(guard))
})

Profile.defaultProps = {
  title: 'Profile User'
}

// initial props authenticated using guard users
Profile.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default withAuthSync(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
)
