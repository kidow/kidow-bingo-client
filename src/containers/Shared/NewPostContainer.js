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
  render() {
    const { logged } = this.props
    const { handleChange } = this
    return (
      <NewPost 
        logged={logged}
        onChange={handleChange}
      />
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(NewPostContainer);