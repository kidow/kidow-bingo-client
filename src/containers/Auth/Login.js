import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, SwitchLink, AuthError } from 'components/Auth';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

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
  
  render() {
    const { email, password } = this.props.form.toJS()
    const { handleChange } = this
    const { error } = this.props
    return (
      <AuthContent title='로그인'>
        <InputWithLabel 
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일'
          value={email}
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
        {error && <AuthError>에러</AuthError>}
        <AuthButton>로그인</AuthButton>
        <SwitchLink to='/auth/register'>회원가입</SwitchLink>
      </AuthContent>
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
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Login);