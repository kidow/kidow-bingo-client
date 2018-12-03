import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, SwitchLink, AuthError } from 'components/Auth';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

class Register extends Component {
  handleChange = e => {
    const { AuthActions } = this.props
    const { name, value } = e.target

    AuthActions.changeInput({
      form: 'register',
      name,
      value
    })
  }

  render() {
    const { email, username, password } = this.props.form.toJS()
    const { handleChange } = this
    const { error } = this.props
    return (
      <AuthContent title='회원가입'>
        <InputWithLabel
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일'
          value={email}
          onChange={handleChange}
        />
        <InputWithLabel
          label='아이디'
          name='username'
          placeholder='아이디'
          value={username}
          onChange={handleChange}
        />
        <InputWithLabel
          label='비밀번호'
          type='password'
          name='password'
          placeholder='비밀번호'
          value={password}
          onChange={handleChange}
        />
        <AuthError>에러</AuthError>
        <AuthButton>회원가입</AuthButton>
        <SwitchLink to='/auth/login'>로그인</SwitchLink>
      </AuthContent>
    );
  }
}

export default connect(
  state => ({
    form: state.auth.getIn(['register', 'form']),
    error: state.auth.getIn(['register', 'error']),
    result: state.auth.get('result')
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Register);