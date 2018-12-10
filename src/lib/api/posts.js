import axios from 'axios'

export const write = ({
  bingo, title, description, oneBingo, twoBingo, threeBingo
}) => axios.post('/posts/', {
  bingo, title, description, oneBingo, twoBingo, threeBingo
})
export const list = username => axios.get('/posts' + (username ? `?username=${username}` : ''))
export const getData = id => axios.get(`/posts/${id}`)

export const next = url => axios.get(url)
export const like = postId => axios.post(`/posts/${postId}/likes`)
export const dislike = postId => axios.delete(`/posts/${postId}/likes`)

export const comment = ({postId, text}) => axios.post(`/posts/${postId}/comments`, {text})

export const update = ({
  bingo, title, description, oneBingo, twoBingo, threeBingo, postId
}) => axios.patch(`/posts/${postId}/update`, {
  bingo, title, description, oneBingo, twoBingo, threeBingo, postId
})
export const remove = postId => axios.post(`/posts/${postId}/delete`)

export const search = title => axios.get(`/posts/search/${title}`)