import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, SwitchLink, AuthError } from 'components/Auth';

class Register extends Component {
  render() {
    return (
      <AuthContent title='회원가입'>
        <InputWithLabel
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일'

        />
        <InputWithLabel
          label='아이디'
          name='username'
          placeholder='아이디'

        />
        <InputWithLabel
          label='비밀번호'
          type='password'
          name='email'
          placeholder='비밀번호'

        />
        <AuthError>에러</AuthError>
        <AuthButton>회원가입</AuthButton>
        <SwitchLink to='/auth/login'>로그인</SwitchLink>
      </AuthContent>
    );
  }
}

export default Register;