import Router from 'next/router'
import { verificationCode } from 'services/auth/verificationService'
import { TYPE_ACCOUNT_EMAIL } from 'constants'
import {
  FETCH_VERIFICATION,
  SUCCESS_VERIFICATION,
  FAILED_VERIFICATION
} from '../types'

const fetch = () => {
  return {
    type: FETCH_VERIFICATION
  }
}

const success = (data, meta) => {
  return {
    type: SUCCESS_VERIFICATION,
    payload: {
      data,
      meta
    },
    message: data.message
  }
}

const failed = (error) => {
  return {
    type: FAILED_VERIFICATION,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const verification = value => async (dispatch) => {
  try {
    dispatch(fetch())
    value.typeAccount = TYPE_ACCOUNT_EMAIL
    const response = await verificationCode(value)
    console.log('Response Ini ', response)
    if (response.success) {
      dispatch(success(response.data, response.meta))
      if (value && value.account) {
        Router.push({
          pathname: '/auth/reset-password',
          query: { email: value.account }
        })
      }
    } else {
      dispatch(failed(response))
    }
  } catch (error) {
    dispatch(failed(error))
  }
}

export {
  verification
}
