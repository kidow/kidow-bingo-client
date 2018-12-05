import React from 'react';
import { PageWrapper } from 'components/Layouts';
import PostListContainer from 'containers/Shared/PostListContainer';

const Home = () => {
  return (
    <PageWrapper>
      <PostListContainer />
    </PageWrapper>
  );
};

export default Home;