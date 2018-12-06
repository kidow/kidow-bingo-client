import React, { Component } from 'react';
import { BingoContent } from 'components/Bingo';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postsActions from 'store/posts'

class BingoContainer extends Component {
  render() {
    return (
      <BingoContent />
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    PostsActions: bindActionCreators(postsActions, dispatch)
  })
)(BingoContainer);