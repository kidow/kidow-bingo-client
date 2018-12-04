import { createAction, handleActions } from 'redux-actions'
import { Map, List } from 'immutable'
// import { pender } from 'redux-pender'

const CHANGE_INPUT = 'post/CHANGE_INPUT'

export const changeInput = createAction(CHANGE_INPUT)

const initialState = Map({
  write: Map({
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
    cell_5_5: '',
    title: '',
    description: '',
    error: ''
  }),
  list: List([])
})

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['write', name], value)
  }
}, initialState)