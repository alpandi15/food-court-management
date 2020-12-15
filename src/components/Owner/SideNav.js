import React from 'react'
// import { useHistory } from 'react-router-dom'
import Link from 'next/link'
import { Button } from 'react-materialize'
import { connect } from 'react-redux'
import Select from 'components/Form/SelectionDefault'
import Modal from 'components/Modal'
import { logoutUser } from 'actions/auth/authAction'
import { getMy } from 'actions/foodcourt/foodCourtAction'
import { get, set } from 'services/utils/storage'
import Image from 'components/Image'
import { GUARD_OWNER, FOODCOURT_SELECTED } from '../../constants'

const generateOption = (datas) => {
  let options = []
  datas.map((value) => {
    return options.push({
      value: String(value.id),
      id: String(value.id),
      label: value.name
    })
  })

  return options
}

const MemoModal = React.memo(Modal)

const SideNav = ({
  userData,
  logoutUser,
  getMy,
  list
}) => {
  // const history = useHistory()
  const [modal, setModal] = React.useState(false)
  const [selected, setSelected] = React.useState(null)

  React.useEffect(() => {
    const fetch = async () => {
      await getMy()
    }

    fetch()
  }, [getMy])

  React.useEffect(() => {
    const selectedCache = async () => {
      if (list && list.length > 0) {
        const getCache = await get(FOODCOURT_SELECTED)
        setSelected(getCache)
      }
    }

    selectedCache()
  }, [list, get])

  // const handleModal = (status) => {
  //   setModal(status)
  // }

  const handleModal = React.useCallback(setModal, [])

  const handleLogout = React.useCallback(async () => {
    await logoutUser(GUARD_OWNER)
    setModal(false)
    // history.push('/owner/login')
  }, [])

  const handleSelected = (id) => {
    setSelected(id)
    set(FOODCOURT_SELECTED, id)
    console.log(selected)
    window.location.reload()
  }

  return (
    <>
      <div className="col s12 m4 l3">
        <div className="profile-content">
          <div className="image">
            <Image
              src={userData && userData.image && userData.image.url}
              className="user-image"
              alt="Profile"
              defaultsrc="static/Image/default_image.png"
              style={{ width: '100%' }}
            />
          </div>
          <div className="name">
            {
              userData ? userData.name : 'No Name'
            }
          </div>
          <div className="content-select">
            <Select
              options={list}
              onChange={e => handleSelected(e.target.value)}
              defaultValue={selected || null}
              className="select-foodcourt"
            />
          </div>
        </div>
        <div className="nav-menu">
          <Link to="/owner" className="menu-item waves-effect">
            <i className="material-icons">dashboard</i>
            Dashboard
          </Link>
          <Link to="/owner/stand" className="menu-item waves-effect">
            <i className="material-icons">device_hub</i>
            Stand
          </Link>
          <Link to="/owner/register" className="menu-item waves-effect">
            <i className="material-icons">table_chart</i>
            Management Meja
          </Link>
          <Link to="/owner/register" className="menu-item waves-effect">
            <i className="material-icons">book</i>
            Laporan
          </Link>
          <Link to="/owner/settings" className="menu-item waves-effect">
            <i className="material-icons">settings</i>
            Pengaturan
          </Link>
        </div>

        <div onClick={() => handleModal(true)} className="container-logout waves-effect">
          <div className="logout">
            <i className="material-icons">login</i>
            Logout
          </div>
        </div>
      </div>

      <MemoModal
        open={modal}
        onCloseStart={handleModal}
        id="ModalInformasi"
        endingTop="40%"
        footerContent={null}
      >
        <>
          <div className="modal-content-owner">
            <div className="modal-title logout">Ingin keluar dari akun kamu ?</div>
          </div>
          <div className="modal-footer-owner">
            <Button
              className="waves-effect waves-light"
              modal="close"
              node="button"
              style={{
                color: 'red !important'
              }}
            >
              Tidak
            </Button>
            <button
              className="waves-effect waves-light btn red"
              onClick={() => handleLogout()}
              node="button"
              style={{
                backgroundColor: 'red !important'
              }}
            >
              Keluar
            </button>
          </div>
        </>
      </MemoModal>
    </>
  )
}

const mapStateToProps = (state) => {
  const { accountStore, foodCourt } = state
  return {
    loadingUser: accountStore.loading,
    userData: accountStore.currentItem,
    list: generateOption(foodCourt.list)
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: guard => dispatch(logoutUser(guard)),
  getMy: data => dispatch(getMy(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
