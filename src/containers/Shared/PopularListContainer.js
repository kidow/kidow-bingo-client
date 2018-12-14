import React, { Component } from 'react';
import { PopularList } from 'components/Shared';
import { Spinner } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postsActions from 'store/posts'
import * as modalActions from 'store/modal'
import * as postActions from 'store/post'

import { setRelayoutHandler } from 'lib/hoc/withRelayout'

class PopularListContainer extends Component {
  prev = null

  load = async () => {
    const { PostsActions, username } = this.props
    try {
      await PostsActions.loadPopularPost(username)
      const { next } = this.props
      if (next) {
        await PostsActions.prefetchPopularPost(next)
      }
    } catch (e) {
      console.log(e)
    }
  }

  loadNext = async () => {
    const { PostsActions, next } = this.props
    PostsActions.showPrefetchedPost()
    if (next === this.prev || !next) return
    this.prev = next

    try {
      await PostsActions.prefetchPopularPost(next)
    } catch (e) {
      console.log(e)
    }
    this.handleScroll()
  }

  handleScroll = () => {
    const { nextData } = this.props
    if (nextData.size === 0) return

    const { innerWidth } = window
    const { scrollHeight } = document.body
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

    if (scrollHeight - innerWidth - scrollTop < 100) {
      this.loadNext()
    }
  }

  handleToggleLike = ({ postId, liked }) => {
    const { PostsActions, logged } = this.props

    if (logged) {
      if (liked) {
        PostsActions.dislikePost(postId)
      } else {
        PostsActions.likePost(postId)
      }
    }
  }

  handleCommentClick = postId => {
    const { PostsActions } = this.props
    PostsActions.toggleComment(postId)
    setTimeout(() => this.masonry.masonry.layout(), 0);
  }

  handleShareClick = postId => {
    const { PostsActions } = this.props
    PostsActions.toggleShare(postId)
    setTimeout(() => this.masonry.masonry.layout(), 0);
  }

  handleRelayout = () => {
    setTimeout(() => this.masonry.masonry.layout(), 0);
  }

  validate = () => {
    const { loggedInfo, username } = this.props
    if (username && loggedInfo.get('username') !== username) {
      window.location.href = '/'
    }
  }

  handleUpdatePost = postId => {

  }

  handleRemovePost = async postId => {
    const { PostActions } = this.props
    try {
      await PostActions.removePost(postId)
      window.location.reload()
    } catch (e) {
      console.log(e)
    }
  }

  handleDeleteModal = () => {
    const { ModalActions } = this.props
    ModalActions.toggleModal({
      form: 'post',
      boolean: true
    })
  }

  componentDidMount() {
    this.load()
    window.addEventListener('scroll', this.handleScroll)
    setRelayoutHandler(this.handleRelayout)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.username !== this.props.username) {
      this.load()
    }
  };

  componentWillUnmount() {
    this.validate()
    window.removeEventListener('scroll', this.handleScroll)
  }
  render() {
    const { loading, data, username } = this.props
    const {
      handleToggleLike,
      handleCommentClick,
      handleShareClick,
      handleDeleteModal,
      handleRemovePost
    } = this
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
            <PopularList
              masonryRef={ref => this.masonry = ref}
              posts={data}
              onToggleLike={handleToggleLike}
              onCommentClick={handleCommentClick}
              onShareClick={handleShareClick}
              username={username}
              onDeleteModal={handleDeleteModal}
              onRemovePost={handleRemovePost}
            />
          )}
      </>
    );
  }
}

export default connect(
  state => ({
    loading: state.pender.pending['posts/LOAD_POST'],
    next: state.posts.get('next'),
    data: state.posts.get('data'),
    nextData: state.posts.get('nextData'),
    logged: state.user.get('logged'),
    loggedInfo: state.user.get('loggedInfo')
  }),
  dispatch => ({
    PostsActions: bindActionCreators(postsActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(PopularListContainer);