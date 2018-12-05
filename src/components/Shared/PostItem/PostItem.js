import React from 'react';
import './PostItem.scss'
import PostFooter from '../PostFooter';

const PostItem = ({post, onToggleLike, onCommentClick}) => {
  const { _id, title, description, liked, likesCount, comments } = post.toJS()
  const toggleLike = () => onToggleLike({
    postId: _id,
    liked
  })
  const commentClick = () => onCommentClick(_id)
  return (
    <div className='post-item'>
      <div className='title-image'>이미지를 등록하세요</div>
      <div className='item-title'>{title}</div>
      <div className='description'>{description}</div>
      <PostFooter
        likesCount={likesCount}
        comments={comments}
        onToggleLike={toggleLike}
        onCommentClick={commentClick}
      />
    </div>
  );
};

export default PostItem;