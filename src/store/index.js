/* eslint-disable comma-dangle */
import {
  combineReducers,
  applyMiddleware,
  createStore
  // compose
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import accountStore from './reducer/accountStore'
import forgotStore from './reducer/forgotPassword'
import foodCourt from './reducer/foodCourt'
import tableSessionStore from './reducer/tableSessionStore'

// GENERATED REDUCER
import userStore from './reducer/userStore'
import productStore from './reducer/productStore'
import homeStandStore from './reducer/homeStandStore'
import categoryStandStore from './reducer/categoryStandStore'
import standStore from './reducer/standStore'

const reducers = combineReducers({
  form: formReducer,
  accountStore,
  forgotStore,
  foodCourt,
  tableSessionStore,

  // GENERATED COMBINE
  userStore,
  productStore,
  homeStandStore,
  categoryStandStore,
  standStore,
})

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)

export default store
