import auth from './auth'

import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  auth,
  penderReducer
})