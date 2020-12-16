import {
  FETCH_VERIFICATION,
  SUCCESS_VERIFICATION,
  FAILED_VERIFICATION
} from '../../actions/types'

const initialState = {
  loading: false,
  data: {},
  meta: {},
  error: false,
  message: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_VERIFICATION:
      return Object.assign({}, state, {
        loading: true,
        data: {},
        meta: {},
        error: false,
        message: null
      })
    case SUCCESS_VERIFICATION:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        meta: action.payload.meta,
        error: false,
        message: null
      })
    case FAILED_VERIFICATION:
      return Object.assign({}, state, {
        loading: false,
        data: {},
        meta: {},
        error: true,
        message: action.payload.error
      })
    default:
      return state
  }
}
