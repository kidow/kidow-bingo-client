import axios from 'axios'

export const logout = () => axios.post('/users/logout')
export const checkStatus = () => axios.get('/users/check')

export const changeName = username => axios.patch('/users/change/username', { username })
export const changePassword = password => axios.patch('/users/change/password', { password })
export const leave = password => axios.post('/users/leave', { password })