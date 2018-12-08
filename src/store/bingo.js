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
  bingoIndex: 0,
  post: Map({}),
})

export default handleActions({
  [BINGO_COUNT]: (state, action) => {
    return state.set('bingoCount', state.get('bingoCount') + 1)
  },
  [CHECK]: (state, action) => {
    return state.set('bingoIndex', state.get('bingoIndex') + 1)
  },
  ...pender({
    type: GET_DATA,
    onSuccess: (state, action) => {
      const { data: post } = action.payload
      return state.set('post', fromJS(post))
    }
  }),
}, initialState)