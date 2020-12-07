import { request } from '../utils/request'

const apiAdd = async (data, guard = 'owner') => {
  return request({
    url: 'food-court',
    auth: true,
    data,
    method: 'post',
    guard
  })
}

const apiEdit = async (id, data, guard = 'owner') => {
  return request({
    url: `food-court/${id}`,
    auth: true,
    data,
    method: 'put',
    guard
  })
}

const apiGetOne = async (id, guard = 'owner') => {
  return request({
    url: `food-court/${id}`,
    auth: false,
    method: 'get',
    guard
  })
}

const apiDelete = async (id, data, guard = 'owner') => {
  return request({
    url: `food-court/${id}`,
    auth: true,
    data,
    method: 'delete',
    guard
  })
}

const apiGetAll = async (data, guard = 'owner') => {
  return request({
    url: 'food-court',
    auth: false,
    data,
    method: 'get',
    guard
  })
}

const apiGetMy = async (data, guard = 'owner') => {
  return request({
    url: 'my/food-court',
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
