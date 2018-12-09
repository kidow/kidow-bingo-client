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
    const { logged, _id } = this.props
    const { handleLogout } = this
    return (
      <Header 
        logged={logged} 
        onLogout={handleLogout}
        _id={_id}
      />
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged'),
    _id: state.user.getIn(['loggedInfo', '_id'])
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(HeaderContainer);