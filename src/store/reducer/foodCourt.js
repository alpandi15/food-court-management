import {
  FETCH_FOODCOURT,
  RECEIVE_ITEM_FOODCOURT,
  RECEIVE_FOODCOURT,
  FAILED_FOODCOURT,
  FETCH_LOGOUT_USER
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
    case FETCH_FOODCOURT:
      return {
        ...state,
        loading: true,
        error: false
      }
    case RECEIVE_ITEM_FOODCOURT:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      }
    case RECEIVE_FOODCOURT:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      }
    case FAILED_FOODCOURT:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error
      }
    case FETCH_LOGOUT_USER:
      return {
        ...state,
        loading: false,
        error: false,
        currentItem: {}
      }
    default:
      return state
  }
}
