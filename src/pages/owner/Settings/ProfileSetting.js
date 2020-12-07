import React from 'react'
import Image from 'components/Image'
import { connect } from 'react-redux'
import Modal from 'components/Modal'

const ModalEdit = React.lazy(() => import('./ModalEdit'))
const ModalEditPassword = React.lazy(() => import('./ModalEditPassword'))
const ModalEditEmail = React.lazy(() => import('./ModalEditEmail'))

const MemoModal = React.memo(Modal)

const Settings = ({
  userData
}) => {
  const [modal, setModal] = React.useState(false)
  const [modalEmail, setModalEmail] = React.useState(false)
  const [modalPassword, setModalPassword] = React.useState(false)

  return (
    <>
      <div className="content">
        <div className="user-setting">
          <div className="section">
            <span>Informasi Akun</span>
            <button onClick={() => setModal(true)} className="btn btn-light-smooth waves-effect waves-light bg-pimary">
              <i className="material-icons">create</i>
            </button>
          </div>
          <div className="row">
            <div className="col s3 m4 l3">
              Foto Profil
            </div>
            <div className="col s6 m6 l4">
              <Image
                src={userData && userData.image && userData.image.url}
                className="user-image"
                alt="Profile"
                defaultsrc="static/Image/default_image.png"
              />
            </div>
            <div className="col s2 m2 l2" />
          </div>
          <div className="row">
            <div className="col s3 m4 l3">
              Nama
            </div>
            <div className="col s6 m6 l4 text">
              {
                userData && userData.name
              }
            </div>
          </div>
          <div className="row">
            <div className="col s3 m4 l3">
              Username
            </div>
            <div className="col s6 m6 l4 text">
              {
                userData && userData.username
              }
            </div>
          </div>

          <div className="section">
            Kontak
          </div>
          <div className="row">
            <div className="col s3 m4 l3">
              Nomor Telepon
            </div>
            <div className="col s6 m6 l4">
              <div className="text">
                {
                  userData && userData.phone
                }
              </div>
              <div className="verification">
                {/* <div className="unverif">
                      Belum terverifikasi
                    </div> */}
                {/* <div className="verif">
                      Terverifikasi
                    </div> */}
                {/* <div className="verif-now waves-effect">
                      Verifikasi Sekarang
                    </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s3 m4 l3">
              Alamat Email
            </div>
            <div className="col s6 m6 l4 text">
              <div className="text">
                {
                  userData && userData.email
                }
              </div>
              <div className="verification">
                {/* <div className="unverif">
                      Belum terverifikasi
                    </div> */}
                {/* <div className="verif">
                      Terverifikasi
                    </div> */}
                {/* <div className="verif-now waves-effect">
                      Verifikasi Sekarang
                    </div> */}
              </div>
            </div>
            <div className="col s2 m2 l2">
              <button onClick={() => setModalEmail(true)} className="btn btn-light-smooth waves-effect waves-light bg-pimary">
                <i className="material-icons">create</i>
              </button>
            </div>
          </div>

          <div className="section">
            Password
          </div>
          <div className="row">
            <div className="col s3 m4 l3">
              Kata Sandi
            </div>
            <div className="col s6 m6 l4 text">
              *************
            </div>
            <div className="col s2 m2 l2">
              <button onClick={() => setModalPassword(true)} className="btn btn-light-smooth waves-effect waves-light bg-pimary">
                <i className="material-icons">create</i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MemoModal
        open={modal}
        onCloseStart={setModal}
        id="ModalInformasi"
        endingTop="5%"
      >
        <ModalEdit data={userData} onCloseModal={setModal} />
      </MemoModal>

      <MemoModal
        open={modalEmail}
        onCloseStart={setModal}
        id="ModalEditEmail"
        endingTop="15%"
      >
        <ModalEditEmail data={userData} onCloseModal={setModalEmail} />
      </MemoModal>
      <MemoModal
        open={modalPassword}
        onCloseStart={setModalPassword}
        id="ModalUpdatePassword"
        endingTop="15%"
      >
        <ModalEditPassword data={userData} onCloseModal={setModalPassword} />
      </MemoModal>
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

export default connect(mapStateToProps, null)(Settings)
