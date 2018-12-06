import React from 'react';
import './PostItem.scss'
import PostFooter from '../PostFooter';
import { Link } from 'react-router-dom'

const PostItem = ({post, onToggleLike, onCommentClick}) => {
  const { _id, title, description, liked, likesCount, comments } = post.toJS()
  const toggleLike = () => onToggleLike({
    postId: _id,
    liked
  })
  const commentClick = () => onCommentClick(_id)
  return (
    <div className='post-item'>
      <Link to={`/post/${_id}`} className='title-image'>이미지를 등록하세요</Link>
      <Link to={`/post/${_id}`} className='item-title'>{title}</Link>
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