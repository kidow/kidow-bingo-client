import React from 'react';
import { PageWrapper } from 'components/Layouts';
import PostListContainer from 'containers/Shared/PostListContainer';

import { connect } from 'react-redux'

class Posts extends React.Component {
  render() {
    const { match, logged, loggedInfo, history } = this.props
    const { username } = match.params
    if (!logged) history.push('/')
    if (username !== loggedInfo.get('username')) history.push('/')
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
    logged: state.user.get('logged'),
    loggedInfo: state.user.get('loggedInfo')
  })
)(Posts);