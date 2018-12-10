import React from 'react';
import './PostList.scss'
import Masonry from 'react-masonry-component'
import PostItem from '../PostItem';

const PostList = ({
  masonryRef, 
  posts, 
  onToggleLike, 
  onCommentClick, 
  onShareClick,
  username,
  onDeleteModal,
  onRemovePost
}) => {
  const postList = posts.map(post => 
    <PostItem 
      key={post.get('_id')} 
      post={post} 
      onToggleLike={onToggleLike} 
      onCommentClick={onCommentClick}
      onShareClick={onShareClick}
      username={username}
      onDeleteModal={onDeleteModal}
      onRemovePost={onRemovePost}
    />
  )
  return (
    <div className='post-list'>
      <Masonry options={{gutter: 16}} ref={masonryRef}>
        {postList}
      </Masonry>
    </div>
  );
};

export default PostList;