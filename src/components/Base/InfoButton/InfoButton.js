import React from 'react';
import './InfoButton.scss'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'white',
  backgroundColor: '#15aabf'
}

const InfoButton = ({onLogout, _id}) => {
  return (
    <div className='info-button'>
      <NavLink 
        to={`/user/${_id}/changeName`} 
        className='info'
        activeStyle={activeStyle}
      >
        내 정보 수정
      </NavLink>
      <div onClick={onLogout} className='logout'>로그아웃</div>
    </div>
  );
};

export default InfoButton;