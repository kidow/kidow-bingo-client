import axios from 'axios'

export const checkEmailExists = email => axios.get(`/auth/exists/email/${email}`)
export const checkUsernameExists = username => axios.get(`/auth/exists/username/${username}`)

export const localRegister = ({email, username, password}) => axios.post('/auth/register/local', {email, username, password})
export const localLogin = ({username, password}) => axios.post('/auth/login/local', {username, password})