import {
  apiAdd,
  apiEdit,
  apiGetAll,
  apiGetOne,
  apiGetMy,
  apiDelete
} from 'services/homeStand/homeStandService'
import { uploadImage } from '../utils/imageUploadAction'

import {
  FETCH_HOME_STAND,
  FAILED_HOME_STAND,
  RECEIVE_HOME_STAND,
  RECEIVE_ITEM_HOME_STAND
} from '../types'

const fetch = () => {
  return { type: FETCH_HOME_STAND }
}

const receiveItem = (currentItem, meta = {}) => {
  return {
    type: RECEIVE_ITEM_HOME_STAND,
    payload: {
      currentItem,
      meta
    }
  }
}

const receive = (list, meta = {}) => {
  return {
    type: RECEIVE_HOME_STAND,
    payload: {
      list,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_HOME_STAND,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const add = (data, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    if (data && data.image) {
      data.image = await dispatch(uploadImage('homeStand', data.image))
    }
    const response = await apiAdd(data, guard)
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

const edit = (id, data, guard) => async (dispatch) => {
  try {
    if (data && !data.imageRaw) {
      data.image = await dispatch(uploadImage('homeStand', data.image))
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

const deleteData = (id, guard) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiDelete(id, guard)
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

export {
  add,
  edit,
  getOne,
  getAll,
  getMy,
  deleteData
}
