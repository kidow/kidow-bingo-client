import React, { Component } from 'react';
import { Header } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'

import storage from 'lib/storage'

class HeaderContainer extends Component {
  handleLogout = async () => {
    const { UserActions } = this.props
    try {
      await UserActions.logout()
    } catch (e) {
      console.log(e)
    }
    storage.remove('loggedInfo')
    window.location.href = '/'
  }

  render() {
    const { logged, username, post, user } = this.props
    const { handleLogout } = this
    if (post.get('isOpen') || user.get('isOpen')) return null
    return (
      <Header 
        logged={logged} 
        onLogout={handleLogout}
        username={username}
      />
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged'),
    username: state.user.getIn(['loggedInfo', 'username']),
    post: state.modal.get('post'),
    user: state.modal.get('user')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(HeaderContainer);