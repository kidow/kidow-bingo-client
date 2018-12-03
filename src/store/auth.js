import { handleActions, createAction } from 'redux-actions'
import { Map } from 'immutable'
import { pender } from 'redux-pender'

const CHANGE_INPUT = 'auth/CHANGE_INPUT'

export const changeInput = createAction(CHANGE_INPUT)

const initialState = Map({
  login: Map({
    form: Map({
      email: '',
      password: ''
    }),
    error: ''
  }),
  register: Map({
    form: Map({
      email: '',
      username: '',
      password: ''
    })
  })
})

export default handleActions({

}, initialState)