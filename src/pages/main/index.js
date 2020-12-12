import React from 'react'
import { Icon } from 'react-materialize'
import Link from 'next/link'
// import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
// import { withAuthSync } from 'components/Security/auth'
// import Modal from 'components/Modal'
import { logoutUser, getUserData } from 'actions/auth/authAction'

// const Modal = dynamic(() => import('components/Modal'), {
//   ssr: false
// })

const mail = 'static/Icon/Message.svg'
const Background = 'static/Image/bg.svg'
const mainImage = 'static/Image/main.png'
const icon = '../../static/Icon/icon-app.svg'
const qrcode = '../../static/Icon/qr-code.svg'

const GUARD = 'user'

const Main = ({
  userData,
  logoutUser,
  getUserData,
  ...data
}) => {
  // const [modal, setModal] = React.useState(false)

  React.useEffect(() => {
    console.log('DATA ', data)
    const fetch = async () => {
      await getUserData(GUARD)
    }

    fetch()
  }, [GUARD, getUserData])

  // const handleModal = (status) => {
  //   setModal(status)
  // }

  // const handleLogout = async () => {
  //   await logoutUser(GUARD)
  //   setModal(false)
  // }

  return (
    <>
      <div className="mobile-layout-content with-header">
        <div>
          <div className="header">
            <div className="image main">
              <img src={mainImage} alt="" />
            </div>
            <div className="background main">
              <img className="rotate-5" src={Background} alt="" />
            </div>
          </div>
        </div>

        <div className="content login">
          <div className="top-content">
            <div className="logo">
              <img src={icon} alt="" />
              <span>Food Court</span>
            </div>
            <div className="welcome-text">
              <span>Selamat datang</span>
              {
                userData && userData.id ? (
                  <span style={{ fontWeight: '700' }}>{` ${userData.name}`}</span>
                ) : (
                  <span />
                )
              }
              ,
              <span> silahkan pindai kode QR yang ada di meja kamu untuk mulai memesan, atau login dengan akun kamu untuk mendapatkan fitur lainnya</span>
            </div>
          </div>

          <div className="qr-button">
            <Link href="/main/scan">
              <a className="btn btn-app waves-effect waves-light block">
                <div className="icon">
                  <img src={qrcode} alt="" />
                </div>
                <span>Pindai Kode QR</span>
              </a>
            </Link>
          </div>
          <div>
            {
              userData && userData.id ? (
                <div />
              ) : (
                <Link href="/auth/login">
                  <a className="waves-effect btn btn-light block">
                    <div className="icon">
                      <img src={mail} alt="" />
                    </div>
                    <span>Atau Masuk Dengan Email</span>
                  </a>
                </Link>
              )
            }
            <div className="bottom-content">
              <div className="location">
                <Link href="/main/maps">
                  <a className="map-location waves-effect">
                    <Icon>location_on</Icon>
                    Lihat Lokasi Food Court
                  </a>
                </Link>
              </div>
              <div className="register-button">
                {
                  userData && !userData.id ? (
                    <Link href="/auth/register">
                      <a className="waves-effect">
                        Daftar Sekarang
                      </a>
                    </Link>
                  ) : (
                    // <button onClick={() => handleModal(true)} className="btn-logout waves-effect waves-light">
                    <button className="btn-logout waves-effect waves-light">
                      <span>Keluar</span>
                      <i className="material-icons">exit_to_app</i>
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal
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
      </Modal> */}
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

Main.defaultProps = {
  title: 'Main'
}

// initial props authenticated using guard users
Main.getInitialProps = () => {
  return {
    guard: 'user'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Main)
)

// export default withAuthSync(
//   connect(mapStateToProps, mapDispatchToProps)(
//     withRouter(Main)
//   )
// )
