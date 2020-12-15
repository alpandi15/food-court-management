import {
  FETCH_SESSION_TABLE,
  RECEIVE_ITEM_SESSION_TABLE,
  FAILED_SESSION_TABLE
} from '../../actions/types'

const initialState = {
  loading: false,
  currentItem: {},
  meta: {},
  error: false,
  message: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SESSION_TABLE:
      return {
        ...state,
        loading: true,
        error: false
      }
    case RECEIVE_ITEM_SESSION_TABLE:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      }
    case FAILED_SESSION_TABLE:
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
