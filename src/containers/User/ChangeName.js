import React, { Component } from 'react';
import { Content, Input, Error, Button, SwitchLink } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'

class NameChange extends Component {
  render() {
    const { username, logged } = this.props
    return (
      <Content title='회원정보 수정'>
        <Input
          label='아이디'
          placeholder={logged ? '변경할 아이디' : '로그인이 필요합니다'}
          disabled={!logged}
        />
        {/* {error && <Error>{error}</Error>} */}
        <Button >변경하기</Button>
        {logged && <Button red>탈퇴하기</Button>}
        <SwitchLink to={`/user/${username}/changePassword`}>비밀변호 변경하기</SwitchLink>
      </Content>
    );
  }
}

export default connect(
  state => ({
    username: state.user.getIn(['loggedInfo', 'username']),
    logged: state.user.get('logged')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(NameChange);