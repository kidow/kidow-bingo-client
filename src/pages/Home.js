import React from 'react';
import { Header } from 'components/Base'
import { PostList } from 'components/Shared';
import PageWrapper from '../components/Base/PageWrapper/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <PostList />
    </PageWrapper>
  );
};

export default Home;