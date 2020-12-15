import {
  apiTokenTable
} from 'services/tableSession/tableSessionService'
import { loggedSessionTable } from 'components/Security/auth'

import {
  FETCH_SESSION_TABLE,
  FAILED_SESSION_TABLE,
  RECEIVE_ITEM_SESSION_TABLE
} from '../types'

const fetch = () => {
  return { type: FETCH_SESSION_TABLE }
}

const receiveItem = (currentItem, meta = {}) => {
  loggedSessionTable({
    session_token: currentItem.access_token
  })
  return {
    type: RECEIVE_ITEM_SESSION_TABLE,
    payload: {
      currentItem,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_SESSION_TABLE,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const getSessionTable = (data, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiTokenTable(data, guard)
    if (response && response.success) {
      dispatch(receiveItem(response.data, response.meta))
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

export {
  getSessionTable
}
