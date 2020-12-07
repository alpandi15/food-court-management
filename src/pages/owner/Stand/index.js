import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAll, deleteData } from 'actions/stand/standAction'
import Layout from 'components/Owner/layout'
import { get } from 'services/utils/storage'
import { toastify } from 'components/Toast/Toastify'
import { GUARD_OWNER, FOODCOURT_SELECTED } from '../../../constants'

const InputSearch = React.lazy(() => import('../../../components/Form/SearchInput'))
const Pagination = React.lazy(() => import('../../../components/Pagination'))

const MemoLayout = React.memo(Layout)

const WAIT_INTERVAL = 1000
// const ENTER_KEY = 13
const limit = 10

const Stand = ({
  getAll,
  loadingData,
  listData,
  pagination,
  deleteData
}) => {
  const [totalPage, setTotalPage] = React.useState(0)
  const [totalData, setTotalData] = React.useState(0)
  const [params, setParams] = React.useState({
    page: 1,
    keyword: null
  })

  React.useEffect(() => {
    const fetch = async () => {
      const foodCourtId = await get(FOODCOURT_SELECTED)
      await getAll({
        foodCourtId,
        sort: '-createdAt',
        limit,
        ...params
      }, GUARD_OWNER)
    }

    fetch()
  }, [getAll, params])

  React.useEffect(() => {
    if (pagination) {
      setTotalData(pagination.totalData)
      setTotalPage(pagination.lastPage)
    }
  }, [pagination])

  const onPageChanged = async (data) => {
    const { currentPage } = data
    setParams({
      page: Number(currentPage),
      keyword: params.keyword || null
    })
  }

  const debounce = (func, delay) => {
    let debounceTimer
    return function () {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
  }
  let handleChange = (event) => {
    event.persist()
    setParams({
      ...params,
      page: 1,
      sort: '-createdAt',
      keyword: event.target.value
    })
    console.log('Ini Value ', event.target.value)
  }
  let onSearch = debounce(handleChange, WAIT_INTERVAL)

  const onDelete = async (id) => {
    const confm = window.confirm('Delete this data ?')
    if (confm) {
      const res = await deleteData(id, GUARD_OWNER)
      if (!res.success) {
        toastify({
          type: 'error',
          message: res.message || res.detail
        })
      } else {
        const foodCourtId = await get(FOODCOURT_SELECTED)
        await getAll({
          foodCourtId,
          page: 1,
          sort: '-createdAt',
          ...params
        })
        toastify({
          type: 'success',
          message: res.meta.message
        })
      }
    }
  }

  return (
    <MemoLayout>
      <div className="owner-content">
        <div className="header-title">
          <div className="header-content">
            <h4>Management Stand</h4>
            <Link to="/owner/category-stand" className="waves-effect waves-light btn-small">Kategori Stand</Link>
          </div>
        </div>
        <div className="content">
          <div className="list-stand list">
            <div className="search">
              <InputSearch
                name="search"
                placeholder="Cari Stand"
                onChange={onSearch}
              />
              <div className="category-stand">
                <Link to="/owner/stand/create" className="btn btn-app-outline waves-effect">Tambah Stand</Link>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Stand</th>
                  <th>Pemilik Stand</th>
                  <th>Tanggal Dibuat</th>
                  <th>Operator</th>
                </tr>
              </thead>

              <tbody>
                {
                  loadingData && (
                    <tr>
                      <td colSpan="4">
                        Loading...
                      </td>
                    </tr>
                  )
                }
                {
                  !loadingData && (listData && listData.length > 0) && listData.map((val, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.user}</td>
                        <td>{val.createdAt}</td>
                        <td className="actions">
                          <Link to={`/owner/stand/view/${val.uuid}`} className="btn-action waves-effect">
                            <i className="material-icons">remove_red_eye</i>
                          </Link>
                          <div className="btn-action waves-effect">
                            <i className="material-icons">edit</i>
                          </div>
                          <div className="btn-action waves-effect" onClick={(e) => onDelete(val.id, e)}>
                            <i className="material-icons">delete_forever</i>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div className="pagination">
              {
                !loadingData && totalPage && totalPage > 0 ? (
                  <Pagination
                    totalRecords={totalData}
                    pageLimit={limit}
                    pageNeighbours={1}
                    onPageChanged={onPageChanged}
                    startPage={params.page}
                  />
                ) : ''
              }
            </div>
          </div>
        </div>
      </div>
    </MemoLayout>
  )
}

const mapStateToProps = (state) => {
  const { standStore } = state
  return {
    loadingData: standStore.loading,
    listData: standStore.list,
    pagination: standStore.meta && standStore.meta.pagination
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAll: (data, guard) => dispatch(getAll(data, guard)),
  deleteData: (id, guard) => dispatch(deleteData(id, guard))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stand)
