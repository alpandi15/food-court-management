import {
  FETCH_CATEGORY_STAND,
  RECEIVE_ITEM_CATEGORY_STAND,
  RECEIVE_CATEGORY_STAND,
  FAILED_CATEGORY_STAND
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
    case FETCH_CATEGORY_STAND:
      return {
        ...state,
        loading: true,
        error: false
      }
    case RECEIVE_ITEM_CATEGORY_STAND:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      }
    case RECEIVE_CATEGORY_STAND:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      }
    case FAILED_CATEGORY_STAND:
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
