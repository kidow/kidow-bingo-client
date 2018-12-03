import React from 'react';
import './AuthWrapper.scss'
import { IoIosGrid } from 'react-icons/io'

const AuthWrapper = ({children}) => {
  return (
    <div className='auth-wrapper'>
      <div className='box'>
        <div className='logo-wrapper'>
          <IoIosGrid size='2rem'/>
          <span>빙고</span>
        </div>
        <div className='contents'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;