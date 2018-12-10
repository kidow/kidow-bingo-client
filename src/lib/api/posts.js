import axios from 'axios'

export const write = ({
  bingo, title, description, oneBingo, twoBingo, threeBingo
}) => axios.post('/api/posts/', {
  bingo, title, description, oneBingo, twoBingo, threeBingo
})
export const list = username => axios.get('/api/posts' + (username ? `?username=${username}` : ''))
export const getData = id => axios.get(`/api/posts/${id}`)

export const next = url => axios.get(url)
export const like = postId => axios.post(`/api/posts/${postId}/likes`)
export const dislike = postId => axios.delete(`/api/posts/${postId}/likes`)

export const comment = ({postId, text}) => axios.post(`api/comments/${postId}/comments`, {text})

export const update = ({
  bingo, title, description, oneBingo, twoBingo, threeBingo, postId
}) => axios.patch(`/api/posts/${postId}/update`, {
  bingo, title, description, oneBingo, twoBingo, threeBingo, postId
})
export const remove = postId => axios.post(`/api/posts/${postId}/delete`)