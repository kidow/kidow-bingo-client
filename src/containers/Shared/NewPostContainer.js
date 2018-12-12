import React, { Component } from 'react';
import { NewPost } from 'components/Shared';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'
import * as postActions from 'store/post'

import isLength from 'validator/lib/isLength'

class NewPostContainer extends Component {
  handleChange = e => {
    const { PostActions } = this.props
    const { name, value } = e.target
    PostActions.changeInput({name, value})
  }

  handleBingoChange = e => {
    const { PostActions } = this.props
    const { name, value } = e.target
    PostActions.changeBingoInput({name, value})
  }

  handleUploadClick = () => {
    const upload = document.createElement('input');
    upload.type = 'file';
    upload.onchange = () => {
      if (!upload.files) return;
      const file = upload.files[0];
      this.uploadImage(file);
    };
    upload.click();
  };

  uploadImage = async file => {
    if (!file) return
    if (file.size > 1024 * 1024 * 10) return;
    console.log('file :', file)
  }

  handlePost = async () => {
    const { PostActions, write } = this.props
    const { bingo, title, description, oneBingo, twoBingo, threeBingo } = write.toJS()

    if (!Object.values(bingo).every(item => item.length > 0) || !title || !oneBingo || !twoBingo || !threeBingo) {
        PostActions.setError('모두 입력해주세요')
        return
    }

    if (!isLength(title, { max: 20 }) 
      || !isLength(description, { max: 20 })
      || !isLength(oneBingo, { max: 20 })
      || !isLength(threeBingo, { max: 20 })) {
      PostActions.setError('20자 이내로 작성해주세요')
      return
    }

    try {
      await PostActions.writePost({
        title, description, oneBingo, twoBingo, threeBingo, bingo
      })
      window.location.href = '/'
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { logged, write } = this.props
    const { handleChange, handlePost, handleBingoChange, handleUploadClick } = this
    const {
      title, description, oneBingo, twoBingo, threeBingo, error, bingo
    } = write.toJS()
    return (
      <NewPost 
        logged={logged}
        onChange={handleChange}
        onUploadClick={handleUploadClick}
        onBingoChange={handleBingoChange}
        title={title}
        description={description}
        oneBingo={oneBingo}
        twoBingo={twoBingo}
        threeBingo={threeBingo}
        error={error}
        onClick={handlePost}
        bingo={bingo}
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