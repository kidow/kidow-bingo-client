import React from 'react';
import './PostItem.scss'
import PostFooter from '../PostFooter';
import { Link } from 'react-router-dom'
import CommentBlockContainer from 'containers/Shared/CommentBlockContainer';
import withScuize from 'lib/hoc/withScuize'
import ShareBlockContainer from 'containers/Shared/ShareBlockContainer';
import PostModalContainer from 'containers/Shared/PostModalContainer';

const PostItem = ({
  post, 
  onToggleLike, 
  onCommentClick, 
  onShareClick, 
  username,
  onDeleteModal,
  onRemovePost
}) => {
  const { _id, title, description, liked, likesCount, comments } = post.toJS()
  const toggleLike = () => onToggleLike({
    postId: _id,
    liked
  })
  const shareClick = () => onShareClick(_id)
  const commentClick = () => onCommentClick(_id)
  const removeClick = () => onRemovePost(_id)
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
      <PostModalContainer onRemovePost={removeClick}/>
    </div>
  );
};

export default withScuize(PostItem, function (nextProps, nextState) {
  return this.props.post !== nextProps.post
});