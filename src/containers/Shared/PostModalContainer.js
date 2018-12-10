import React, { Component } from 'react';
import { PostModal } from 'components/Shared';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modalActions from 'store/modal'

class PostModalContainer extends Component {
  handleRequestClose = () => {
    const { ModalActions } = this.props
    ModalActions.toggleModal({
      form: 'post',
      boolean: false
    })
  }

  handleDelete = async () => {
    const { PostsActions } = this.props

    try {
      
    } catch (e) {
      
    }
  }

  render() {
    const { isOpen, onRemovePost } = this.props
    const { handleRequestClose } = this
    return (
      <PostModal
        isOpen={isOpen}
        onRequestClose={handleRequestClose}
        onRemovePost={onRemovePost}
      />
    );
  }
}

export default connect(
  state => ({
    isOpen: state.modal.getIn(['post', 'isOpen'])
  }),
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(PostModalContainer);