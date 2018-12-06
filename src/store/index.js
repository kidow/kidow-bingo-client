import auth from './auth'
import user from './user'
import post from './post'
import posts from './posts'
import bingo from './bingo'

import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'

export default combineReducers({
  auth,
  user,
  post,
  posts,
  bingo,
  pender: penderReducer
})