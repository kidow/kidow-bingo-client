import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'lib/api/posts'

const CHANGE_INPUT = 'post/CHANGE_INPUT'
const CHANGE_BINGO_INPUT = 'post/CHANGE_BINGO_INPUT'
const WRITE_POST = 'post/WRITE_POST'
const SET_ERROR = 'post/SET_ERROR'

export const changeInput = createAction(CHANGE_INPUT)
export const changeBingoInput = createAction(CHANGE_BINGO_INPUT)
export const writePost = createAction(WRITE_POST, api.write)
export const setError = createAction(SET_ERROR)

const initialState = Map({
  write: Map({
    bingo: Map({
      cell_1_1: '',
      cell_1_2: '',
      cell_1_3: '',
      cell_1_4: '',
      cell_1_5: '',
      cell_2_1: '',
      cell_2_2: '',
      cell_2_3: '',
      cell_2_4: '',
      cell_2_5: '',
      cell_3_1: '',
      cell_3_2: '',
      cell_3_3: '',
      cell_3_4: '',
      cell_3_5: '',
      cell_4_1: '',
      cell_4_2: '',
      cell_4_3: '',
      cell_4_4: '',
      cell_4_5: '',
      cell_5_1: '',
      cell_5_2: '',
      cell_5_3: '',
      cell_5_4: '',
      cell_5_5: ''
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