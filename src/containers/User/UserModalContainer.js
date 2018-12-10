import React, { Component } from 'react';
import { UserModal } from 'components/User';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modalActions from 'store/modal'
import * as userActions from 'store/user'

import storage from 'lib/storage'

class UserModalContainer extends Component {
  setError = message => {
    const { ModalActions } = this.props
    ModalActions.setError({message})
  }

  handleRequestClose = () => {
    const { ModalActions } = this.props
    ModalActions.toggleModal({
      form: 'user',
      boolean: false
    })
  }

  handleChange = e => {
    const { ModalActions } = this.props
    const { value } = e.target
    ModalActions.changeInput(value)
  }

  handleLeave = async () => {
    const { UserActions, password } = this.props

    try {
      await UserActions.leave(password)
      await storage.remove('loggedInfo')
      window.location.href = '/'
    } catch (e) {
      console.log(e)
      this.setError('비밀번호를 다시 한 번 입력해 주세요')
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleLeave()
    }
  }

  render() {
    const { isOpen, password, error } = this.props
    const { handleRequestClose, handleChange, handleKeyPress, handleLeave } = this
    return (
      <UserModal
        isOpen={isOpen}
        onRequestClose={handleRequestClose}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onLeave={handleLeave}
        password={password}
        error={error}
      />
    );
  }
}

export default connect(
  state => ({
    isOpen: state.modal.getIn(['user', 'isOpen']),
    password: state.modal.getIn(['user', 'password']),
    error: state.modal.getIn(['user', 'error'])
  }),
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(UserModalContainer);