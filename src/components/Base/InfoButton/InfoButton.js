import React from 'react';
import './InfoButton.scss'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'white',
  backgroundColor: '#15aabf'
}

const InfoButton = ({onLogout, username}) => {
  return (
    <div className='info-button'>
      <NavLink 
        to={`/user/${username}`} 
        className='info'
        activeStyle={activeStyle}
      >
        수정
      </NavLink>
      <div onClick={onLogout} className='logout'>로그아웃</div>
    </div>
  );
};

export default InfoButton;