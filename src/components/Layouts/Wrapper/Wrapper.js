import React from 'react';
import './Wrapper.scss'
import { IoIosGrid } from 'react-icons/io'

const Wrapper = ({children}) => {
  return (
    <div className='wrapper'>
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

export default Wrapper;