import { apiUpload } from 'services/utils/imageService'
import {
  FETCH_IMAGE,
  FAILED_IMAGE,
  SUCCESS_IMAGE
} from '../types'

const fetch = () => {
  return {
    type: FETCH_IMAGE
  }
}

const success = (data, meta) => {
  return {
    type: SUCCESS_IMAGE,
    payload: {
      data,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_IMAGE,
    payload: {
      errorMessage: typeof error === 'object' ? error.message : error
    }
  }
}

/**
 *
 * @param {String} type
 * @param {String} image
 */
const uploadImage = (type = 'product', image) => async (dispatch) => {
  try {
    dispatch(fetch())
    if (!type) {
      return dispatch(failed('Type is Required'))
    }
    if (!image) {
      return dispatch(failed('Image is Required'))
    }

    const formData = new FormData()
    formData.append('file', image)
    const response = await apiUpload(type, formData)
    if (response.success) {
      dispatch(success(response.data, response.meta))
      return response.data.filename
    }
    dispatch(failed(response))
    throw response
  } catch (error) {
    dispatch(failed(error))
    throw error
  }
}

export {
  uploadImage
}
