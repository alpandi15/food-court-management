import { request } from 'services/utils/request'

const apiAdd = async (data, guard = 'owner') => {
  return request({
    url: 'category-stand',
    auth: true,
    data,
    method: 'post',
    guard
  })
}

const apiEdit = async (id, data, guard = 'owner') => {
  return request({
    url: `category-stand/${id}`,
    auth: true,
    data,
    method: 'put',
    guard
  })
}

const apiGetOne = async (id, guard = 'owner') => {
  return request({
    url: `category/${id}`,
    auth: true,
    method: 'get',
    guard
  })
}

const apiDelete = async (id, guard = 'owner') => {
  return request({
    url: `category-stand/${id}`,
    auth: true,
    method: 'delete',
    guard
  })
}

const apiGetAll = async (data, guard = 'owner') => {
  return request({
    url: 'category-stand',
    auth: true,
    data,
    method: 'get',
    guard
  })
}

const apiGetMy = async (data, guard = 'owner') => {
  return request({
    url: 'my/category-stand',
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
