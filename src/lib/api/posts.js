import axios from 'axios'

export const write = ({
  cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
  cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
  cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
  cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
  cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
  title, description, oneBingo, twoBingo, threeBingo
}) => axios.post('/api/posts/', {
  cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
  cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
  cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
  cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
  cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
  title, description, oneBingo, twoBingo, threeBingo
})
export const list = username => axios.get('/api/posts' + (username ? `?username=${username}` : ''))

export const next = url => axios.get(url)
export const like = postId => axios.post(`/api/posts/${postId}/likes`)
export const dislike = postId => axios.delete(`/api/posts/${postId}/likes`)

export const comment = ({ postId, text }) => axios.post(`api/posts/${postId}/comments`, { text })