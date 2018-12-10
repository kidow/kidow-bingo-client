import React from 'react';
import { PageWrapper } from 'components/Layouts';
import PostListContainer from 'containers/Shared/PostListContainer';

import { connect } from 'react-redux'

class Posts extends React.Component {
  render() {
    const { match, logged } = this.props
    const { username } = match.params
    if (!logged) return null
    return (
      <PageWrapper>
        {/* <SearchWrapper username={username}/> */}
        <PostListContainer username={username} />
      </PageWrapper>
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged')
  })
)(Posts);