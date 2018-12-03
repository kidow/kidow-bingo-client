import React from 'react';
import './UserWrapper.scss'

const UserWrapper = ({children}) => {
  return (
    <div className='user-wrapper'>
      <div className='box'>
        <div className='logo-wrapper'>
          회원정보 수정
        </div>
        <div className='contents'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserWrapper;