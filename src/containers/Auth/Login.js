import React, { Component } from 'react';
import { Button, Input, Content, Error, SwitchLink } from 'components/Base'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'
import * as userActions from 'store/user'

import storage from 'lib/storage'
import queryString from 'query-string'

class Login extends Component {
  handleChange = e => {
    const { AuthActions } = this.props
    const { name, value } = e.target
    AuthActions.changeInput({
      name,
      value,
      form: 'login'
    })
  }

  setError = message => {
    const { AuthActions } = this.props
    AuthActions.setError({
      form: 'login',
      message
    })
    return false
  }

  handleLocalLogin = async () => {
    const { form, AuthActions, UserActions, history } = this.props
    const { username, password } = form.toJS()

    try {
      await AuthActions.localLogin({ username, password })
      const loggedInfo = this.props.result.toJS()

      UserActions.setLoggedInfo(loggedInfo)
      history.push('/')
      storage.set('loggedInfo', loggedInfo)
    } catch (e) {
      console.log(e)
      this.setError('잘못된 계정 정보입니다.')
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleLocalLogin()
    }
  }

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('login')
  }

  componentDidMount() {
    const { location } = this.props
    const query = queryString.parse(location.search)
    if (query.expired) {
      this.setError('세션이 만료되었습니다. 다시 로그인하세요.')
    }
  }
  
  render() {
    const { username, password } = this.props.form.toJS()
    const { handleChange, handleLocalLogin, handleKeyPress } = this
    const { error } = this.props
    return (
      <Content title='로그인'>
        <Input
          label='아이디'
          name='username'
          placeholder='아이디'
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <Input
          label='비밀번호'
          type='password'
          name='password'
          placeholder='비밀번호'
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {error && <Error>{error}</Error>}
        <Button onClick={handleLocalLogin}>로그인</Button>
        <SwitchLink to='/auth/register'>회원가입</SwitchLink>
      </Content>
    );
  }
}

export default connect(
  state => ({
    form: state.auth.getIn(['login', 'form']),
    error: state.auth.getIn(['login', 'error']),
    result: state.auth.get('result')
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(Login);