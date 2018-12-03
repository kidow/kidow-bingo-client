import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import LoginButton from '../LoginButton';
import InfoButton from '../InfoButton';

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
          <NavLink to='/new' activeStyle={activeStyle} className='new'>새 빙고 만들기</NavLink>
          {logged && <NavLink className='my' activeStyle={activeStyle} to={`/posts/${username}`}>내가 만든 빙고</NavLink>}
        </div>
        <div className='spacer'>
          <input placeholder='빙고 제목을 입력 후 엔터를 눌러주세요.' />
        </div>
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