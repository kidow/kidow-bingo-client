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

  handleBingoChange = e => {
    const { PostActions } = this.props
    const { name, value } = e.target
    PostActions.changeBingoInput({name, value})
  }

  handlePost = async () => {
    const { PostActions, write } = this.props
    const { bingo, title, description, oneBingo, twoBingo, threeBingo } = write.toJS()
    const {
      cell11, cell12, cell13, cell14, cell15,
      cell21, cell22, cell23, cell24, cell25,
      cell31, cell32, cell33, cell34, cell35,
      cell41, cell42, cell43, cell44, cell45,
      cell51, cell52, cell53, cell54, cell55
    } = bingo
    

    if (
      !cell11 || !cell12 || !cell13 || !cell14 || !cell15
      || !cell21 || !cell22 || !cell23 || !cell24 || !cell25
      || !cell31 || !cell32 || !cell33 || !cell34 || !cell35
      || !cell41 || !cell42 || !cell43 || !cell44 || !cell45
      || !cell51 || !cell52 || !cell53 || !cell54 || !cell55 
      || !title || !oneBingo || !twoBingo || !threeBingo) {
        PostActions.setError('모두 입력해주세요')
    } else {
      try {
        await PostActions.writePost({
          title, description, oneBingo, twoBingo, threeBingo, bingo
        })
        window.location.href = '/'
      } catch (e) {
        console.log(e)
      }
    }
  }

  render() {
    const { logged, write } = this.props
    const { handleChange, handlePost, handleBingoChange } = this
    const { 
      cell11, cell12, cell13, cell14, cell15,
      cell21, cell22, cell23, cell24, cell25,
      cell31, cell32, cell33, cell34, cell35,
      cell41, cell42, cell43, cell44, cell45,
      cell51, cell52, cell53, cell54, cell55,
      title, description, oneBingo, twoBingo, threeBingo, error
    } = write.toJS()
    return (
      <NewPost 
        logged={logged}
        onChange={handleChange}
        onBingoChange={handleBingoChange}
        title={title}
        description={description}
        cell11={cell11}
        cell12={cell12}
        cell13={cell13}
        cell14={cell14}
        cell15={cell15}
        cell21={cell21}
        cell22={cell22}
        cell23={cell23}
        cell24={cell24}
        cell25={cell25}
        cell31={cell31}
        cell32={cell32}
        cell33={cell33}
        cell34={cell34}
        cell35={cell35}
        cell41={cell41}
        cell42={cell42}
        cell43={cell43}
        cell44={cell44}
        cell45={cell45}
        cell51={cell51}
        cell52={cell52}
        cell53={cell53}
        cell54={cell54}
        cell55={cell55}
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