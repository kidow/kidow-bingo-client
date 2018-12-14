import React, { Component } from 'react';
import { PageWrapper, SearchWrapper } from 'components/Layouts';
import PopularListContainer from 'containers/Shared/PopularListContainer';

import { connect } from 'react-redux'

class MyPopular extends Component {
  render () {
    const { match, logged, loggedInfo, history } = this.props
    const { username } = match.params
    if (!logged) history.push('/')
    if (username !== loggedInfo.get('username')) history.push('/')
    return (
      <PageWrapper>
        {/* <SearchWrapper username={username}/> */}
        <PopularListContainer username={username}/>
      </PageWrapper>
    );
  }
}

export default connect(
  state => ({
    logged: state.user.get('logged'),
    loggedInfo: state.user.get('loggedInfo')
  })
)(MyPopular);