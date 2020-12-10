import { set, remove } from 'services/utils/storage'
import { loggedin } from 'components/Security/auth'
import {
  apiRegister,
  apiLogin,
  apiGetProfile
} from '../../services/auth/registerService'
import {
  FETCH_AUTH,
  RECEIVE_AUTH,
  FAILED_AUTH,
  FETCH_LOGOUT_USER
} from '../types'
import { FOODCOURT_SELECTED } from '../../constants'

const fetch = () => {
  return { type: FETCH_AUTH }
}

const receive = (data) => {
  loggedin({ ...data })
  return {
    type: RECEIVE_AUTH,
    payload: {
      currentItem: data
    }
  }
}

const logout = () => {
  return { type: FETCH_LOGOUT_USER }
}

const failed = (error) => {
  return {
    type: FAILED_AUTH,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

// Register User
const registerUser = data => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiRegister(data)
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        return response
      }
    } else {
      dispatch(failed(response))
      return response
    }
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

// Login
const loginUser = (data, guard = 'user') => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiLogin(data)
    console.log('Login Data ', response, guard)
    if (response && response.success) {
      dispatch(receive(response.data))
      if (response && response.data) {
        await set(`access_token_${guard}`, response.data.access_token)
        await set(`refresh_token_${guard}`, response.data.refresh_token)
        return response
      }
    } else {
      dispatch(failed(response))
      return response
    }
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

// Logout
const logoutUser = guard => async (dispatch) => {
  await remove(`access_token_${guard}`)
  await remove(`refresh_token_${guard}`)
  if (guard === 'owner') {
    await remove(FOODCOURT_SELECTED)
  }
  dispatch(logout())
}

// Get user token
const getUserData = guard => async (dispatch) => {
  console.log('USER TOKEN ', guard)
  const response = await apiGetProfile(guard)
  if (response.success) {
    dispatch(receive(response.data))
    return response
  }
  await remove(`access_token_${guard}`)
  await remove(`refresh_token_${guard}`)
  dispatch(failed(response))
  return response
}

export {
  registerUser,
  loginUser,
  logoutUser,
  getUserData
}
