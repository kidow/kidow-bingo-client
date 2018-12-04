import React from 'react';
import { PageWrapper } from 'components/Layouts';
import MyPostListContainer from 'containers/User/MyPostListContainer';

const Post = () => {
  return (
    <PageWrapper>
      <MyPostListContainer />
    </PageWrapper>
  );
};

export default Post;