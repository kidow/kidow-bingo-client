import axios from 'axios'

export const checkEmailExists = email => axios.get(`/api/auth/exists/email/${email}`)
export const checkUsernameExists = username => axios.get(`/api/auth/exists/username/${username}`)

export const localRegister = ({email, username, password}) => axios.post('/api/auth/register/local', {email, username, password})
export const localLogin = ({username, password}) => axios.post('/api/auth/login/local', {username, password})

export const checkStatus = () => axios.get('/api/auth/check')
export const logout = () => axios.post('/api/auth/logout')

export const changeName = username => axios.patch('/api/auth/change/username', {username})
export const changePassword = password => axios.patch('/api/auth/change/password', {password})
export const leave = password => axios.delete('/api/auth/leave', { password })