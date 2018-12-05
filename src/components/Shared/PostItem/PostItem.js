import React from 'react';
import './PostItem.scss'

const PostItem = ({post, onToggleLike, onCommentClick}) => {
  const { _id, title, description, liked, likesCount, comments } = post.toJS()
  const toggleLike = () => onToggleLike({
    postId: _id,
    liked
  })
  const commentClick = () => onCommentClick(_id)
  return (
    <div className='post-item'>
      <div>{title}</div>
      <div>{description}</div>
      <div>{likesCount}</div>
      <div>{comments}</div>
    </div>
  );
};

export default PostItem;