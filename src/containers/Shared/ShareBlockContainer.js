import React, { Component } from 'react';
import { ShareBlock } from 'components/Shared';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postsActions from 'store/posts'

class ShareBlockContainer extends Component {

  render() {
    const { _id, status } = this.props
    const { visible } = status ? status.toJS() : {}

    if (!visible) return null
    
    return (
      <ShareBlock 
        _id={_id}
      />
    );
  }
}

export default connect(
  (state, ownProps) => ({
    status: state.posts.getIn(['share', ownProps.post.get('_id')]),
  }),
  dispatch => ({
    PostsActions: bindActionCreators(postsActions, dispatch)
  })
)(ShareBlockContainer);