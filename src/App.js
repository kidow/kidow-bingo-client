import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home, Auth, New, User, Posts, Bingo, NotFound } from 'pages';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from 'store/user'

import storage from 'lib/storage'
import UserModalContainer from 'containers/User/UserModalContainer';

class App extends Component {
  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo')
    if (!loggedInfo) return

    const { UserActions } = this.props
    UserActions.setLoggedInfo(loggedInfo)
    try {
      await UserActions.checkStatus()
    } catch (e) {
      storage.remove('loggedInfo')
      window.location.href = '/auth/login?expired'
    }
  }

  componentDidMount() {
    this.initializeUserInfo()
  }
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={Auth} />
          <Route path='/new' component={New} />
          <Route path='/user/:username' component={User} />
          <Route path='/post/:id' component={Bingo} />
          <Route path='/posts/:username' component={Posts} />
          <Route component={NotFound} />
        </Switch>
        <UserModalContainer />
      </>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    UserActions: bindActionCreators(UserActions, dispatch)
  })
)(App);
