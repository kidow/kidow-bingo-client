import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'lib/api/posts'

const CHANGE_INPUT = 'post/CHANGE_INPUT'
const CHANGE_BINGO_INPUT = 'post/CHANGE_BINGO_INPUT'
const WRITE_POST = 'post/WRITE_POST'
const UPDATE_POST = 'posts/UPDATE_POST'
const REMOVE_POST = 'posts/REMOVE_POST'

const SET_ERROR = 'post/SET_ERROR'

export const changeInput = createAction(CHANGE_INPUT)
export const changeBingoInput = createAction(CHANGE_BINGO_INPUT)
export const writePost = createAction(WRITE_POST, api.write)
export const updatePost = createAction(UPDATE_POST, api.update)
export const removePost = createAction(REMOVE_POST, api.remove, payload => payload)

export const setError = createAction(SET_ERROR)

const initialState = Map({
  write: Map({
    bingo: Map({
      cell11: '',
      cell12: '',
      cell13: '',
      cell14: '',
      cell15: '',
      cell21: '',
      cell22: '',
      cell23: '',
      cell24: '',
      cell25: '',
      cell31: '',
      cell32: '',
      cell33: '',
      cell34: '',
      cell35: '',
      cell41: '',
      cell42: '',
      cell43: '',
      cell44: '',
      cell45: '',
      cell51: '',
      cell52: '',
      cell53: '',
      cell54: '',
      cell55: ''
    }),
    title: '',
    description: '',
    oneBingo: '',
    twoBingo: '',
    threeBingo: '',
    error: ''
  })
})

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['write', name], value)
  },
  [CHANGE_BINGO_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['write', 'bingo', name], value)
  },
  [SET_ERROR]: (state, action) => {
    return state.setIn(['write', 'error'], action.payload)
  },
  ...pender({
    type: WRITE_POST,
    onSuccess: (state, action) => initialState
  })
}, initialState)