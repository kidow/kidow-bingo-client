import React from 'react';
import './InfoButton.scss'
import { Link } from 'react-router-dom'

const InfoButton = ({onLogout, username}) => {
  return (
    <div className='info-button'>
      <Link to={`/user/${username}`} className='info'>수정</Link>
      <div onClick={onLogout} className='logout'>로그아웃</div>
    </div>
  );
};

export default InfoButton;