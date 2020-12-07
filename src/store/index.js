/* eslint-disable comma-dangle */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import accountStore from './reducer/accountStore'
import forgotStore from './reducer/forgotPassword'
import foodCourt from './reducer/foodCourt'

// GENERATED REDUCER
import userStore from './reducer/userStore'
import productStore from './reducer/productStore'
import homeStandStore from './reducer/homeStandStore'
import categoryStandStore from './reducer/categoryStandStore'
import standStore from './reducer/standStore'

const rooterReducers = combineReducers({
  form: formReducer,
  accountStore,
  forgotStore,
  foodCourt,

  // GENERATED COMBINE
  userStore,
  productStore,
  homeStandStore,
  categoryStandStore,
  standStore,
})

export default rooterReducers
