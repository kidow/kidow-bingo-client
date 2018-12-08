import React from 'react';
import './PostFooter.scss'

import { MdThumbUp } from 'react-icons/md'
import { IoMdChatbubbles, IoMdShare, IoMdCreate, IoIosTrash } from 'react-icons/io'

const PostFooter = ({likesCount = 0, comments = [], onToggleLike, onCommentClick, username}) => {
  return (
    <div className='post-footer'>
      <div className='likes'>
        {username ? (
          <>
            <IoMdCreate className='svg'/>
            <span className='svg'>수정</span>
          </>
        ) : (
          <>
            <MdThumbUp className={likesCount ? 'active' : 'svg'} onClick={onToggleLike} />
            <span>{likesCount}개</span>
          </>
        )}
      </div>
      {!username && <IoMdShare className='share'/>}
      <div className='comments' onClick={onCommentClick}>
        {username ? (
          <>
            <IoIosTrash className='svg'/>
            <span className='svg'>삭제</span>
          </>
        ) : (
          <>
            <IoMdChatbubbles />
            <span>댓글 {comments.length}개</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PostFooter;