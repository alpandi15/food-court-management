import { APIUPLOAD } from 'config'
import { request } from 'services/utils/request'

// User
const apiUpload = async (type = 'product', data) => {
  return request({
    url: `${APIUPLOAD}/image/upload/${type}`,
    fullUrl: true,
    auth: true,
    data,
    method: 'post'
  })
}

export {
  apiUpload
}
