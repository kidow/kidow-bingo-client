import React from 'react';
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='popularity'>
        인기순
      </div>
      <div className='latest'>
        최신순
      </div>
    </div>
  );
};

export default NavBar;