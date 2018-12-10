import React, { Component } from 'react';
import { NavBar } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postsActions from 'store/posts'

class NavBarContainer extends Component {
  load = async () => {
    const { PostsActions, username } = this.props
    try {
      await PostsActions.loadPost(username)
      const { next } = this.props
      if (next) {
        await PostsActions.prefetchPost(next)
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { load } = this
    return (
      <NavBar
        onLoad={load}
      />
    );
  }
}

export default connect(
  state => ({
    next: state.posts.get('next')
  }),
  dispatch => ({
    PostsActions: bindActionCreators(postsActions, dispatch)
  })
)(NavBarContainer);