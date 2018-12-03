import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'
import LoginButton from '../LoginButton';
import InfoButton from '../InfoButton';

const Header = ({username, logged, onLogout}) => {
  return (
    <div className='header'>
      <div className='contents'>
        <div className='left-side'>
          <Link to='/' className='logo'>빙고</Link>
          <Link to='/new' className='new'>새 빙고 만들기</Link>
          <Link className='my' to={`/posts/${username}`}>내가 만든 빙고</Link>
        </div>
        <div className='spacer'>
          <input placeholder='빙고 제목을 입력 후 엔터를 눌러주세요.' />
        </div>
        {logged ? (
          <InfoButton />
        ) : (
          <LoginButton />
        )}
      </div>
      <div className='gradient-border'/>
    </div>
  );
};

export default Header;