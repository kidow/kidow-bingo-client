import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, SwitchLink } from 'components/Auth';

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
        <InputWithLabel
          label='비밀번호 확인'
          type='password'
          name='passwordConfirm'
          placeholder='비밀번호 확인'

        />
        <AuthButton>회원가입</AuthButton>
        <SwitchLink to='/auth/login'>로그인</SwitchLink>
      </AuthContent>
    );
  }
}

export default Register;