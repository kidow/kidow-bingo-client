import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const BINGO_COUNT = 'bingo/BINGO_COUNT'
const CHECK = 'bingo/CHECK'

export const bingoCount = createAction(BINGO_COUNT)
export const check = createAction(CHECK)

const initialState = Map({
  bingoCount: 0,
  cell_1_1: false,
  cell_1_2: false,
  cell_1_3: false,
  cell_1_4: false,
  cell_1_5: false,
  cell_2_1: false,
  cell_2_2: false,
  cell_2_3: false,
  cell_2_4: false,
  cell_2_5: false,
  cell_3_1: false,
  cell_3_2: false,
  cell_3_3: false,
  cell_3_4: false,
  cell_3_5: false,
  cell_4_1: false,
  cell_4_2: false,
  cell_4_3: false,
  cell_4_4: false,
  cell_4_5: false,
  cell_5_1: false,
  cell_5_2: false,
  cell_5_3: false,
  cell_5_4: false,
  cell_5_5: false
})

export default handleActions({
  [BINGO_COUNT]: (state, action) => {
    return state.set('bingoCount', state.get('bingoCount') + 1)
  },
  [CHECK]: (state, action) => {
    const { cell } = action.payload
    return state.set(cell, action.payload)
  }
}, initialState)