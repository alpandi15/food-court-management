import { request } from '../utils/request'

const verificationCode = async (data) => {
  console.log('MASUK KE REQUEST ', data)
  return request({
    url: 'auth/verification',
    auth: false,
    data,
    method: 'post'
  })
}

const resendVerificationCode = async (data) => {
  return request({
    url: 'auth/resend/verification',
    auth: false,
    data,
    method: 'post'
  })
}

export {
  verificationCode,
  resendVerificationCode
}
