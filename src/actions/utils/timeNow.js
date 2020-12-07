import { apiTimeNow } from '../../services/utils/timeNow'

import {
  FETCH_CURRENT_TIME,
  FAILED_CURRENT_TIME,
  RECEIVE_CURRENT_TIME
} from '../types'

const fetch = () => {
  return { type: FETCH_CURRENT_TIME }
}

const receive = (data, meta = {}) => {
  return {
    type: RECEIVE_CURRENT_TIME,
    payload: {
      data,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_CURRENT_TIME,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getTimeNow = () => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiTimeNow()
    if (response && response.success) {
      dispatch(receive(response.data, response.meta))
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    console.log(error)
    return dispatch(failed(error))
  }
}

export {
  getTimeNow
}
