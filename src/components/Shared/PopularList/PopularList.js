import React from 'react';
import './PopularList.scss'
import Masonry from 'react-masonry-component'
import PopularItem from '../PopularItem';

const PopularList = ({
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
    <PopularItem
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
    <div className='popular-list'>
      <Masonry options={{ gutter: 16 }} ref={masonryRef}>
        {postList}
      </Masonry>
    </div>
  );
};

export default PopularList;