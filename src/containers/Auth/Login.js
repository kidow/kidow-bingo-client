import React, { Component } from 'react';
import { AuthContent, InputWithLabel } from 'components/Auth';

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
      </AuthContent>
    );
  }
}

export default Login;