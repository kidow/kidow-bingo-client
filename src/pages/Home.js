import React from 'react';
import { PageWrapper, SearchWrapper } from 'components/Layouts';
import PostListContainer from 'containers/Shared/PostListContainer';

const Home = () => {
  return (
    <PageWrapper>
      <SearchWrapper />
      <PostListContainer />
    </PageWrapper>
  );
};

export default Home;