import {
  FETCH_PRODUCT,
  RECEIVE_ITEM_PRODUCT,
  RECEIVE_PRODUCT,
  FAILED_PRODUCT
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        loading: true,
        error: false
      }
    case RECEIVE_ITEM_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      }
    case RECEIVE_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      }
    case FAILED_PRODUCT:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error
      }
    default:
      return state
  }
}
