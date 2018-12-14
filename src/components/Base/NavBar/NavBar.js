import React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = ({onLoad}) => {
  return (
    <div className='nav-bar'>
      <Link to='/popular' className='link'>
        인기순
      </Link>
      <Link to='/' className='link' onClick={onLoad}>
        최신순
      </Link>
    </div>
  );
};

export default NavBar;