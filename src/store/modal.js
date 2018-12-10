import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const TOGGLE_MODAL = 'modal/TOGGLE_MODAL'
const CHANGE_INPUT = 'modal/CHANGE_INPUT'

const SET_ERROR = 'modal/SET_ERROR'

export const toggleModal = createAction(TOGGLE_MODAL)
export const changeInput = createAction(CHANGE_INPUT)

export const setError = createAction(SET_ERROR)

const initialState = Map({
  post: Map({
    isOpen: false
  }),
  user: Map({
    isOpen: false,
    password: '',
    error: ''
  })
})

export default handleActions({
  [TOGGLE_MODAL]: (state, action) => {
    const { form, boolean } = action.payload
    return state.setIn([form, 'isOpen'], boolean)
  },
  [CHANGE_INPUT]: (state, action) => {
    const { payload: value } = action
    return state.setIn(['user', 'password'], value)
  },
  [SET_ERROR]: (state, action) => {
    const { message } = action.payload
    return state.setIn(['user', 'error'], message)
  }
}, initialState)