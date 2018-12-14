import React from 'react';
import './PopularFooter.scss'

import { MdThumbUp } from 'react-icons/md'
import { IoMdChatbubbles, IoMdShare, IoMdCreate, IoIosTrash } from 'react-icons/io'

const PopularFooter = ({
  likesCount = 0,
  comments = [],
  onToggleLike,
  onCommentClick,
  onShareClick,
  username,
  onDeleteModal
}) => {
  return (
    <div className='post-footer'>
      {username ? (
        <div className='items'>
          <div className='update'>
            <IoMdCreate size={30} />수정
          </div>
          <IoMdShare className='share' size={30} onClick={onShareClick} />
          <div className='remove'>
            <IoIosTrash size={30} onClick={onDeleteModal} />삭제
          </div>
        </div>
      ) : (
          <div className='items'>
            <div className='like' onClick={onToggleLike}>
              <MdThumbUp className={likesCount ? 'active' : 'inactive'} size={30} />{likesCount}
            </div>
            <IoMdShare className='share' size={30} onClick={onShareClick} />
            <div className='comments' onClick={onCommentClick}>
              <IoMdChatbubbles size={30} />{comments.length}
            </div>
          </div>
        )}
    </div>
  );
};

export default PopularFooter;