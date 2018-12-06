import { createAction, handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'lib/api/posts'

const BINGO_COUNT = 'bingo/BINGO_COUNT'
const CHECK = 'bingo/CHECK'
const GET_DATA = 'bingo/GET_DATA'

export const bingoCount = createAction(BINGO_COUNT)
export const check = createAction(CHECK)
export const getData = createAction(GET_DATA, api.getData)

const initialState = Map({
  bingoCount: 0,
  post: Map({}),
  cell11: false,
  cell12: false,
  cell13: false,
  cell14: false,
  cell15: false,
  cell21: false,
  cell22: false,
  cell23: false,
  cell24: false,
  cell25: false,
  cell31: false,
  cell32: false,
  cell33: false,
  cell34: false,
  cell35: false,
  cell41: false,
  cell42: false,
  cell43: false,
  cell44: false,
  cell45: false,
  cell51: false,
  cell52: false,
  cell53: false,
  cell54: false,
  cell55: false
})

export default handleActions({
  [BINGO_COUNT]: (state, action) => {
    return state.set('bingoCount', state.get('bingoCount') + 1)
  },
  [CHECK]: (state, action) => {
    const { cell } = action.payload
    return state.set(cell, action.payload)
  },
  ...pender({
    type: GET_DATA,
    onSuccess: (state, action) => {
      const { data: post } = action.payload
      return state.set('post', fromJS(post))
    }
  })
}, initialState)