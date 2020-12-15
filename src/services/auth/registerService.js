import { request } from '../utils/request'

export async function apiRegister (data) {
  return request({
    url: 'auth/register',
    auth: false,
    data,
    method: 'post'
  })
}

export async function apiLogin (data) {
  return request({
    url: 'auth/login',
    auth: false,
    data,
    method: 'post'
  })
}

export async function apiGetProfile (guard) {
  return request({
    url: 'auth/me',
    auth: true,
    method: 'get',
    guard
  })
}

export async function apiGetTokenGuest () {
  return request({
    url: 'auth/token-guest',
    auth: false,
    method: 'get'
  })
}
