import React from 'react';
import { Header } from 'components/Base'
import { PostList } from 'components/Shared';

const Home = () => {
  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
};

export default Home;