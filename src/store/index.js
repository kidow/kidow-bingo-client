import auth from './auth'
import user from './user'
import post from './post'

import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  auth,
  user,
  post,
  penderReducer
})