import React from 'react';
import './PostItem.scss'
import PostFooter from '../PostFooter';
import { Link } from 'react-router-dom'
import CommentBlockContainer from 'containers/Shared/CommentBlockContainer';
import scuize from 'lib/scuize'
import ShareBlockContainer from 'containers/Shared/ShareBlockContainer';

const PostItem = ({
  post, 
  onToggleLike, 
  onCommentClick, 
  onShareClick, 
  username,
  onDeleteModal
}) => {
  const { _id, title, description, liked, likesCount, comments } = post.toJS()
  const toggleLike = () => onToggleLike({
    postId: _id,
    liked
  })
  const shareClick = () => onShareClick(_id)
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
        onShareClick={shareClick}
        username={username}
        onDeleteModal={onDeleteModal}
      />
      <ShareBlockContainer post={post} _id={_id}/>
      <CommentBlockContainer post={post}/>
    </div>
  );
};

export default scuize(PostItem, function (nextProps, nextState) {
  return this.props.post !== nextProps.post
});