import {
  apiAdd,
  apiEdit,
  apiGetAll,
  apiGetOne,
  apiGetMy
} from '../../services/foodcourt/foodCourtService'
import { uploadImage } from '../utils/imageUploadAction'

import {
  FETCH_FOODCOURT,
  FAILED_FOODCOURT,
  RECEIVE_FOODCOURT,
  RECEIVE_ITEM_FOODCOURT
} from '../types'

const fetch = () => {
  return { type: FETCH_FOODCOURT }
}

const receiveItem = (currentItem, meta = {}) => {
  return {
    type: RECEIVE_ITEM_FOODCOURT,
    payload: {
      currentItem,
      meta
    }
  }
}

const receive = (list, meta = {}) => {
  return {
    type: RECEIVE_FOODCOURT,
    payload: {
      list,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_FOODCOURT,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const add = (data, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    if (data && data.image) {
      data.image = await dispatch(uploadImage('foodCourt', data.image))
    }
    const response = await apiAdd(data, guard)
    if (response && response.success) {
      dispatch(receive(response.data, response.meta))
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    dispatch(failed(error))
    return error
  }
}

const edit = (id, data, guard) => async (dispatch) => {
  try {
    if (data && !data.imageRaw) {
      data.image = await dispatch(uploadImage('foodCourt', data.image))
    }
    const response = await apiEdit(id, data, guard)
    if (response && response.success) {
      dispatch(receiveItem(response.data, response.meta))
      if (response) {
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

const getAll = (data, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGetAll(data, guard)
    if (response && response.success) {
      dispatch(receive(response.data, response.meta))
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    return dispatch(failed(error))
  }
}

const getOne = (id, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGetOne(id, guard)
    if (response && response.success) {
      dispatch(receiveItem(response.data))
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    return dispatch(failed(error))
  }
}

/*
  type: all, member, owner
*/
const getMy = (data, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGetMy(data, guard)
    if (response && response.success) {
      dispatch(receive(response.data, response.meta))
      return response
    }
    dispatch(failed(response))
    return response
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  add,
  edit,
  getOne,
  getAll,
  getMy
}
