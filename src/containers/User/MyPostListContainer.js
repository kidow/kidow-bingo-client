import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'

class MyPostListContainer extends Component {
  render() {
    const { logged } = this.props
    return (
      <div>
        {logged ? 'login' : 'not login'}
      </div>
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
)(MyPostListContainer);