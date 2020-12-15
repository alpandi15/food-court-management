import { request } from 'services/utils/request'

const apiAdd = async (data, guard = 'user') => {
  return request({
    url: 'home/stand',
    auth: true,
    data,
    method: 'post',
    guard
  })
}

const apiEdit = async (id, data, guard = 'user') => {
  return request({
    url: `home/stand/${id}`,
    auth: true,
    data,
    method: 'put',
    guard
  })
}

const apiGetOne = async (id, guard = 'user') => {
  return request({
    url: `home/stand/${id}`,
    auth: true,
    method: 'get',
    guard
  })
}

const apiDelete = async (id, guard = 'user') => {
  return request({
    url: `home/stand/${id}`,
    auth: true,
    method: 'delete',
    guard
  })
}

const apiGetAll = async (data, guard = 'user') => {
  return request({
    url: 'home/stand',
    auth: true,
    data,
    method: 'get',
    sessionTable: true, // <-- untuk menggunakan session/token table
    guard
  })
}

const apiGetMy = async (data, guard = 'user') => {
  return request({
    url: 'my/home/stand',
    auth: true,
    data,
    method: 'get',
    guard
  })
}

export {
  apiGetAll,
  apiAdd,
  apiDelete,
  apiGetOne,
  apiEdit,
  apiGetMy
}
