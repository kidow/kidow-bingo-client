import React, { Component } from 'react';
import { Content, Input, Button, SwitchLink, Error } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'
import * as modalActions from 'store/modal'

import isLength from 'validator/lib/isLength'
import storage from 'lib/storage'

class ChangePassword extends Component {
  handleChange = e => {
    const { UserActions } = this.props
    const { name, value } = e.target
    UserActions.changeInput({
      form: 'changePassword',
      name,
      value
    })
  }

  setError = message => {
    const { UserActions } = this.props
    UserActions.setError({
      form: 'changePassword',
      message
    })
    return false
  }

  handleChangePassword = async () => {
    const { form, UserActions, loggedInfo, history } = this.props
    const { password, passwordConfirm } = form.toJS()

    if (!isLength(password, { min: 6 })) {
      this.setError('비밀번호는 6자리 이상 입력해주세요')
      return
    }

    if (password !== passwordConfirm) {
      this.setError('비밀번호가 일치하지 않습니다')
      return
    }

    try {
      await UserActions.changePassword(password)
      await storage.change('loggedInfo', 'password', loggedInfo.get('password'))
      history.push('/')
    } catch (e) {
      console.log(e)
      this.setError('알 수 없는 오류가 발생했습니다')
    }
  }

  handleLeave = async () => {
    const { ModalActions, form } = this.props
    const { password, passwordConfirm } = form.toJS()

    if (!isLength(password, { min: 6 })) {
      this.setError('비밀번호를 제대로 입력해주세요')
      return
    }

    if (password !== passwordConfirm) {
      this.setError('비밀번호가 일치하지 않습니다')
      return
    }

    try {
      await ModalActions.toggleModal({
        form: 'user',
        boolean: true
      })
    } catch (e) {
      console.log(e)
      this.setError('알 수 없는 오류가 발생했습니다')
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleChangePassword()
    }
  }

  componentWillUnmount() {
    const { UserActions } = this.props
    UserActions.initializeForm('changePassword')
  }

  render() {
    const { logged, error, loggedInfo } = this.props
    const { username } = loggedInfo.toJS()
    const { password, passwordConfirm } = this.props.form.toJS()
    const { handleChange, handleChangePassword, handleKeyPress, handleLeave } = this
    return (
      <Content title='회원정보 수정'>
        <Input
          label='변경할 비밀번호'
          placeholder={logged ? '변경할 비밀번호' : '로그인이 필요합니다'}
          disabled={!logged}
          autoFocus
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
        />
        <Input
          label='비밀번호 확인'
          placeholder={logged ? '비밀번호 확인' : ''}
          type='password'
          name='passwordConfirm'
          value={passwordConfirm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {error && <Error>{error}</Error>}
        <Button onClick={handleChangePassword}>변경하기</Button>
        {logged && <Button red onClick={handleLeave}>탈퇴하기</Button>}
        <SwitchLink to={`/user/${username}/changeName`}>아이디 변경하기</SwitchLink>
      </Content>
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged'),
    form: state.user.getIn(['changePassword', 'form']),
    error: state.user.getIn(['changePassword', 'error']),
    loggedInfo: state.user.get('loggedInfo')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(ChangePassword);