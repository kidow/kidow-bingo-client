import React, { Component } from 'react';
import { Content, Input, Button, Error, SwitchLink } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'

import isLength from 'validator/lib/isLength'

class ChangeName extends Component {
  handleChange = e => {
    const { UserActions } = this.props
    const { name, value } = e.target
    UserActions.changeInput({
      form: 'changeName',
      name,
      value
    })
  }

  setError = message => {
    const { UserActions } = this.props
    UserActions.setError({
      form: 'changeName',
      message
    })
    return false
  }

  handleChangeName = async () => {
    const { UserActions, form } = this.props
    const { id } = form.toJS()
    if (!isLength(id, { min: 3, max: 10 })) {
      this.setError('아이디는 3~10자로 이뤄져야 합니다')
      return
    }
    try {
      await UserActions.changeName(id)
    } catch (e) {
      console.log(e)
      this.setError('알 수 없는 오류가 발생했습니다')
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleChangeName()
    }
  }

  componentWillUnmount() {
    const { UserActions } = this.props
    UserActions.initializeForm('changeName')
  }

  render() {
    const { username, logged, error } = this.props
    const { id } = this.props.form.toJS()
    const { handleChange, handleChangeName, handleKeyPress } = this
    return (
      <Content title='회원정보 수정'>
        <Input 
          label='내 아이디'
          value={username}
          disabled
          readOnly
        />
        <Input
          label='변경할 아이디'
          placeholder={logged ? '변경할 아이디' : '로그인이 필요합니다'}
          disabled={!logged}
          autoFocus
          onChange={handleChange}
          name='id'
          value={id}
          onKeyPress={handleKeyPress}
        />
        {error && <Error>{error}</Error>}
        <Button onClick={handleChangeName}>변경하기</Button>
        <SwitchLink to={`/user/${username}/changePassword`}>비밀변호 변경하기</SwitchLink>
      </Content>
    );
  }
}

export default connect(
  state => ({
    username: state.user.getIn(['loggedInfo', 'username']),
    logged: state.user.get('logged'),
    form: state.user.getIn(['changeName', 'form']),
    error: state.user.getIn(['changeName', 'error'])
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(ChangeName);