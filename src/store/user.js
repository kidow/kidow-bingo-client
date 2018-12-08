import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'lib/api/auth'

const LOGOUT = 'user/LOGOUT'

const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'
const SET_VALIDATED = 'user/SET_VALIDATED'
const CHECK_STATUS = 'user/CHECK_STATUS'

const CHANGE_INPUT = 'user/CHANGE_INPUT'
const CHANGE_NAME = 'user/CHANGE_NAME'
const CHANGE_PASSWORD = 'user/CHANGE_PASSWORD'
const INITIALIZE_FORM = 'user/INITIALIZE_FORM'
const LEAVE = 'user/LEAVE'

const SET_ERROR = 'user/SET_ERROR'

export const logout = createAction(LOGOUT, api.logout)

export const setLoggedInfo = createAction(SET_LOGGED_INFO)
export const setValidated = createAction(SET_VALIDATED)
export const checkStatus = createAction(CHECK_STATUS, api.checkStatus)

export const changeInput = createAction(CHANGE_INPUT)
export const changeName = createAction(CHANGE_NAME, api.changeName)
export const changePassword = createAction(CHANGE_PASSWORD, api.changePassword)
export const initializeForm = createAction(INITIALIZE_FORM)
export const leave = createAction(LEAVE, api.leave)

export const setError = createAction(SET_ERROR)

const initialState = Map({
  loggedInfo: Map({
    username: ''
  }),
  logged: false,
  validated: false,
  changeName: Map({
    form: Map({
      id: ''
    }),
    error: ''
  }),
  changePassword: Map({
    form: Map({
      password: '',
      passwordConfirm: ''
    }),
    error: ''
  })
})

export default handleActions({
  [SET_LOGGED_INFO]: (state, action) => {
    return state.set('loggedInfo', Map(action.payload))
                .set('logged', true)
  },
  [SET_VALIDATED]: (state, action) => {
    return state.set('validated', action.payload)
  },
  ...pender({
    type: CHECK_STATUS,
    onSuccess: (state, action) => {
      return state.set('loggedInfo', Map(action.payload.data))
                  .set('validated', true)
    },
    onFailure: (state, action) => initialState
  }),
  [CHANGE_INPUT]: (state, action) => {
    const { form, name, value } = action.payload
    return state.setIn([form, 'form', name], value)
  },
  ...pender({
    type: CHANGE_NAME,
    onSuccess: (state, action) => {
      const { data: username } = action.payload
      return state.setIn(['loggedInfo', 'username'], username)
    }
  }),
  [SET_ERROR]: (state, action) => {
    const { form, message } = action.payload
    return state.setIn([form, 'error'], message)
  },
  [INITIALIZE_FORM]: (state, action) => {
    const initialForm = initialState.get(action.payload)
    return state.set(action.payload, initialForm)
  }
}, initialState)