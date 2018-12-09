import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import { LoginButton, InfoButton, SearchBar } from 'components/Base'

const activeStyle = {
  color: 'white',
  backgroundColor: '#12b886',
}

const Header = ({username, logged, onLogout}) => {
  return (
    <div className='header'>
      <div className='contents'>
        <div className='left-side'>
          <Link to='/' className='logo'>빙고</Link>
          {logged ? (
            <NavLink to='/new' activeStyle={activeStyle} className='new'>새 빙고 만들기</NavLink>
          ) : (
            <Link to='/auth/login' className='new'>새 빙고 만들기</Link>
          )}
          {logged && <NavLink className='my' activeStyle={logged && activeStyle} to={`/posts/${username}`}>내가 만든 빙고</NavLink>}
        </div>
        <SearchBar />
        {logged ? (
          <InfoButton username={username} onLogout={onLogout}/>
        ) : (
          <LoginButton />
        )}
      </div>
      <div className='gradient-border'/>
    </div>
  );
};

export default Header;