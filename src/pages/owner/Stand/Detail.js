import React from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getOne } from 'actions/stand/standAction'
import { getOne as getUser } from 'actions/user/userAction'
import Layout from 'components/Owner/layout'
import Image from 'components/Image'
// import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER } from '../../../constants'

const MemoLayout = React.memo(Layout)

const Detail = ({
  currentItem,
  userData,
  getOne,
  getUser
}) => {
  const params = useParams()
  React.useEffect(() => {
    const fetch = async () => {
      if (params && params.uuid) await getOne(params.uuid, GUARD_OWNER)
    }

    fetch()
  }, [getOne, params])

  React.useEffect(() => {
    const fetch = async () => {
      if (currentItem && currentItem.userId) await getUser(currentItem.userId, GUARD_OWNER)
    }

    fetch()
  }, [getUser, currentItem])

  return (
    <MemoLayout>
      <div className="owner-content">
        <div className="header-title">
          <div className="header-content">
            <h5>Detail Stand</h5>
          </div>
        </div>
        <div className="content">
          <div className="information-detail row">
            <div className="title">Informasi Stand</div>
            <div className="button">
              <Link to="#" className="btn btn-light-smooth waves-effect waves-light bg-pimary"><i className="material-icons">create</i></Link>
            </div>
            <div className="col s12 m6 l6">
              <div className="content">
                <div className="data">
                  <div className="lable">Nama Stand</div>
                  <div className="value">{currentItem && currentItem.name}</div>
                </div>
                <div className="data">
                  <div className="lable">Kategori</div>
                  <div className="value">Ahmad</div>
                </div>
                <div className="data">
                  <div className="lable">Deskripsi Stand</div>
                  <div className="value">
                    {currentItem && currentItem.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="content">
                {
                  (currentItem && currentItem.id) && userData && userData.image && (
                    <Image
                      src={userData && userData.image && userData.image.url}
                      className="user-image"
                      alt="Profile"
                      defaultsrc="static/Image/default-stand/512x512.png"
                      style={{ width: '100%' }}
                    />
                  )
                }
              </div>
            </div>
          </div>
          <div className="information-detail row">
            <div className="title">Informasi User</div>
            <div className="col s12 m12 l12">
              <div className="content">
                <div className="data">
                  <div className="lable">Nama User</div>
                  <div className="value">{userData && userData.name}</div>
                </div>
                <div className="data">
                  <div className="lable">Username</div>
                  <div className="value">{userData && userData.username}</div>
                </div>
                <div className="data">
                  <div className="lable">No Telepon</div>
                  <div className="value">{userData && userData.phone}</div>
                </div>
                <div className="data">
                  <div className="lable">Alamant Email</div>
                  <div className="value">
                    {userData && userData.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MemoLayout>
  )
}

const mapStateToProps = (state) => {
  const { standStore, userStore } = state
  return {
    loadingData: standStore.loading,
    currentItem: standStore.currentItem,
    userData: userStore.currentItem
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOne: (id, guard) => dispatch(getOne(id, guard)),
  getUser: (id, guard) => dispatch(getUser(id, guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
