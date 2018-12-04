import React, { Component } from 'react';
import { NewPost } from 'components/Shared';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'

class NewPostContainer extends Component {
  render() {
    const { logged } = this.props
    return (
      <NewPost 
        logged={logged}
      />
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(NewPostContainer);