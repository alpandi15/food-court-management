import { request } from 'services/utils/request'

const apiTokenTable = async (data, guard = 'user') => {
  return request({
    url: 'table-scan',
    auth: true,
    data,
    method: 'post',
    guard
  })
}

export {
  apiTokenTable
}
