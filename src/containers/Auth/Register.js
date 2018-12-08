import React, { Component } from 'react';
import { Button, Input, Error, Content, SwitchLink } from 'components/Base'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'
import * as userActions from 'store/user'

import { isEmail, isLength } from 'validator'
import storage from 'lib/storage'
import debounce from 'lodash/debounce'

class Register extends Component {
  setError = message => {
    const { AuthActions } = this.props
    AuthActions.setError({
      form: 'register',
      message
    })
  }

  validate = {
    email: value => {
      if (!isEmail(value)) {
        this.setError('잘못된 이메일 형식입니다')
        return false
      }
      this.setError(null)
      return true
    },
    username: value => {
      if (!isLength(value, { min: 3, max: 10 })) {
        this.setError('아이디는 3~10자로 이뤄져야 합니다')
        return false
      }
      this.setError(null)
      return true
    },
    password: value => {
      if (!isLength(value, { min: 6 })) {
        this.setError('비밀번호는 6자리 이상 입력하세요')
        return false
      }
      this.setError(null)
      return true
    }
  }

  checkEmailExists = debounce(async email => {
    const { AuthActions, checkEmail } = this.props
    try {
      await AuthActions.checkEmailExists(email)
      if (checkEmail) {
        this.setError('이미 존재하는 이메일입니다')
      } else {
        this.setError(null)
      }
    } catch (e) {
      console.log(e)
    }
  }, 300)

  checkUsernameExists = debounce(async username => {
    const { AuthActions, checkUsername } = this.props
    try {
      await AuthActions.checkUsernameExists(username)
      if (checkUsername) {
        this.setError('이미 존재하는 아이디입니다')
      } else {
        this.setError(null)
      }
    } catch (e) {
      console.log(e)
    }
  }, 300)

  handleChange = e => {
    const { AuthActions } = this.props
    const { name, value } = e.target

    AuthActions.changeInput({
      form: 'register',
      name,
      value
    })

    const validation = this.validate[name](value)
    if (name.indexOf('password') > -1 || !validation) return;

    const check = name === 'email' ? this.checkEmailExists : this.checkUsernameExists
    check(value)
  }

  handleLocalRegister = async () => {
    const { AuthActions, UserActions, form, history, error } = this.props
    const { email, username, password } = form.toJS()
    const { validate } = this
    
    if (error) return

    if (!validate['email'](email)
      || !validate['username'](username)
      || !validate['password'](password)) {

      return
    }

    try {
      await AuthActions.localRegister({ email, username, password })

      const loggedInfo = this.props.result.toJS()

      storage.set('loggedInfo', loggedInfo)
      UserActions.setLoggedInfo(loggedInfo)
      UserActions.setValidated(true)
      history.push('/')
    } catch (e) {
      if (e.response.status === 409) {
        const { key } = e.response.data
        const message = key === 'email' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.'
        return this.setError(message)
      }
      console.log(e)
      this.setError('알 수 없는 에러가 발생했습니다')
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleLocalRegister()
    }
  }

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('register')
  }

  render() {
    const { email, username, password } = this.props.form.toJS()
    const { handleChange, handleLocalRegister, handleKeyPress } = this
    const { error } = this.props
    return (
      <Content title='회원가입'>
        <Input
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일'
          value={email}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <Input
          label='아이디'
          name='username'
          placeholder='아이디'
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
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
        <Button onClick={handleLocalRegister}>회원가입</Button>
        <SwitchLink to='/auth/login'>로그인</SwitchLink>
      </Content>
    );
  }
}

export default connect(
  state => ({
    form: state.auth.getIn(['register', 'form']),
    error: state.auth.getIn(['register', 'error']),
    result: state.auth.get('result'),
    exists: state.auth.getIn(['result', 'exists']),
    checkEmail: state.auth.getIn(['register', 'exists', 'email']),
    checkUsername: state.auth.getIn(['register', 'exists', 'username'])
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(Register);