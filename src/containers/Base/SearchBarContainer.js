import React, { Component } from 'react';
import { SearchBar } from 'components/Base';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postsActions from 'store/posts'

class SearchBarContainer extends Component {
  handleChangeSearchBar = e => {
    const { PostsActions } = this.props
    const { value } = e.target
    PostsActions.changeSearchBarInput(value)
  }

  handleSearch = async () => {
    const { PostsActions, search, username } = this.props
    console.log('username :', username)
    try {
      PostsActions.searchPost(search)
    } catch (e) {
      console.log(e)
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSearch()
    }
  }

  render() {
    const { handleChangeSearchBar, handleKeyPress } = this
    const { search } = this.props
    return (
      <SearchBar
        search={search}
        onChangeSearchBar={handleChangeSearchBar}
        onKeyPress={handleKeyPress}
      />
    );
  }
}

export default connect(
  state => ({
    search: state.posts.get('search')
  }),
  dispatch => ({
    PostsActions: bindActionCreators(postsActions, dispatch)
  })
)(SearchBarContainer);