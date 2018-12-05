import React, { Component } from 'react';
import { NewPost } from 'components/Shared';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'
import * as postActions from 'store/post'

class NewPostContainer extends Component {
  handleChange = e => {
    const { PostActions } = this.props
    const { name, value } = e.target
    PostActions.changeInput({name, value})
  }

  handlePost = async () => {
    const { PostActions, write } = this.props
    const {
      cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
      cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
      cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
      cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
      cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
      title, description, oneBingo, twoBingo, threeBingo
    } = write.toJS()

    if (
      !cell_1_1 || !cell_1_2 || !cell_1_3 || !cell_1_4 || !cell_1_5
      || !cell_2_1 || !cell_2_2 || !cell_2_3 || !cell_2_4 || !cell_2_5
      || !cell_3_1 || !cell_3_2 || !cell_3_3 || !cell_3_4 || !cell_3_5
      || !cell_4_1 || !cell_4_2 || !cell_4_3 || !cell_4_4 || !cell_4_5
      || !title || !oneBingo || !twoBingo || !threeBingo) {
        PostActions.setError('모두 입력해주세요')
    }

    try {
      await PostActions.writePost({
        cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
        cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
        cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
        cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
        cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
        title, description, oneBingo, twoBingo, threeBingo
      })
      window.location.href = '/'
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { logged, write } = this.props
    const { handleChange, handlePost } = this
    const { 
      cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
      cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
      cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
      cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
      cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
      title, description, oneBingo, twoBingo, threeBingo, error
    } = write.toJS()
    return (
      <NewPost 
        logged={logged}
        onChange={handleChange}
        title={title}
        description={description}
        cell_1_1={cell_1_1}
        cell_1_2={cell_1_2}
        cell_1_3={cell_1_3}
        cell_1_4={cell_1_4}
        cell_1_5={cell_1_5}
        cell_2_1={cell_2_1}
        cell_2_2={cell_2_2}
        cell_2_3={cell_2_3}
        cell_2_4={cell_2_4}
        cell_2_5={cell_2_5}
        cell_3_1={cell_3_1}
        cell_3_2={cell_3_2}
        cell_3_3={cell_3_3}
        cell_3_4={cell_3_4}
        cell_3_5={cell_3_5}
        cell_4_1={cell_4_1}
        cell_4_2={cell_4_2}
        cell_4_3={cell_4_3}
        cell_4_4={cell_4_4}
        cell_4_5={cell_4_5}
        cell_5_1={cell_5_1}
        cell_5_2={cell_5_2}
        cell_5_3={cell_5_3}
        cell_5_4={cell_5_4}
        cell_5_5={cell_5_5}
        oneBingo={oneBingo}
        twoBingo={twoBingo}
        threeBingo={threeBingo}
        error={error}
        onClick={handlePost}
      />
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged'),
    write: state.post.get('write')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(NewPostContainer);