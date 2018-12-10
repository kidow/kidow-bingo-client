import axios from 'axios'

export const logout = () => axios.post('/api/users/logout')
export const checkStatus = () => axios.get('/api/users/check')

export const changeName = username => axios.patch('/api/users/change/username', { username })
export const changePassword = password => axios.patch('/api/users/change/password', { password })
export const leave = password => axios.post('/api/users/leave', { password })