import React from 'react'
import { Icon } from 'react-materialize'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'components/Modal'

import { logoutUser } from '../../actions/auth/authAction'
const mail = 'static/Icon/Message.svg'
const Background = 'static/Image/bg.svg'

const GUARD = 'user'

const Home = ({
  userData,
  logoutUser
}) => {
  const [modal, setModal] = React.useState(false)

  const handleModal = (status) => {
    setModal(status)
  }

  const handleLogout = async () => {
    await logoutUser(GUARD)
    setModal(false)
  }

  return (
    <>
      <div className="mobile-layout-content with-header">
        <div>
          <div className="header">
            <div className="image main">
              <img src="static/Image/main.png" alt="" />
            </div>
            <div className="background main">
              <img className="rotate-5" src={Background} alt="" />
            </div>
          </div>
        </div>
        <div className="content login">
          <div className="top-content">
            <div className="logo">
              <img src="static/Icon/icon-app.svg" alt="" />
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
            <Link to="/scan-qr" className="btn btn-app waves-effect waves-light block">
              <div className="static/Icon/icon-app.svg">
                <img src="static/Icon/qr-code.svg" alt="" />
              </div>
              <span>Pindai Kode QR</span>
            </Link>
          </div>
          <div>
            {
              userData && userData.id ? (
                <div />
              ) : (
                  <Link to="/login" className="waves-effect btn btn-light block">
                    <div className="icon">
                      <img src={mail} alt="" />
                    </div>
                    <span>Atau Masuk Dengan Email</span>
                  </Link>
                )
            }
            <div className="bottom-content">
              <div className="location">
                <Link to="/list-food-court" className="map-location waves-effect">
                  <Icon>location_on</Icon>
                  Lihat Lokasi Food Court
                </Link>
              </div>
              <div className="register-button">
                {
                  userData && !userData.id ? (
                    <>
                      <Link to="/register" className="waves-effect">
                        Daftar Sekarang
                      </Link>
                    </>
                  ) : (
                      <button onClick={() => handleModal(true)} className="btn-logout waves-effect waves-light">
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

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (guard) => dispatch(logoutUser(guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
