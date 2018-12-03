import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, SwitchLink, AuthError } from 'components/Auth';

class Login extends Component {
  render() {
    return (
      <AuthContent title='로그인'>
        <InputWithLabel 
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일'
          
        />
        <InputWithLabel 
          label='비밀번호'
          type='password'
          name='password'
          placeholder='비밀번호'

        />
        <AuthError>에러</AuthError>
        <AuthButton>로그인</AuthButton>
        <SwitchLink to='/auth/register'>회원가입</SwitchLink>
      </AuthContent>
    );
  }
}

export default Login;