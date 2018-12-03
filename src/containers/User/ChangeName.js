import React, { Component } from 'react';
import { Content, Input, Error, Button, SwitchLink } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'store/user'

class NameChange extends Component {
  render() {
    const { username } = this.props
    return (
      <Content title='회원정보 수정'>
        <Input
          label='아이디'
          placeholder='변경할 아이디'
        />
        {/* {error && <Error>{error}</Error>} */}
        <Button >변경하기</Button>
        <Button >탈퇴하기</Button>
        <SwitchLink to={`/user/${username}/changePassword`}>비밀변호 변경하기</SwitchLink>
      </Content>
    );
  }
}

export default connect(
  state => ({
    username: state.user.getIn(['loggedInfo', 'username'])
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(NameChange);