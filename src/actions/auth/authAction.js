import { remove } from 'services/utils/storage'
import { loggedin } from 'components/Security/auth'
import {
  apiRegister,
  apiLogin,
  apiGetProfile,
  apiGetTokenGuest
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

const receive = (data, path, guard) => {
  loggedin({ ...data, path, guard })
  return {
    type: RECEIVE_AUTH,
    payload: {
      currentItem: data
    }
  }
}

const receivedAuthMe = (data) => {
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
const loginUser = (data, guard = 'user', path) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiLogin(data)
    if (response && response.success) {
      dispatch(receive(response.data, path, guard))
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
const loginGuest = (data, guard = 'user', path) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGetTokenGuest()
    if (response && response.success) {
      dispatch(receive(response.data, path, guard))
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
    dispatch(receivedAuthMe(response.data))
    return response
  }
  // await remove(`access_token_${guard}`)
  // await remove(`refresh_token_${guard}`)
  dispatch(failed(response))
  return response
}

export {
  registerUser,
  loginUser,
  logoutUser,
  getUserData,
  loginGuest
}
