import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({username}) => {
  return (
    <div className='header'>
      <div className='contents'>
        <div className='left-side'>
          <Link to='/' className='logo'>빙고</Link>
          <Link to='/new' className='new'>새 빙고 만들기</Link>
          <Link className='my' to={`/user/${username}`}>내가 만든 빙고</Link>
        </div>
        <div className='spacer'>
          <input placeholder='빙고 제목을 입력 후 엔터를 눌러주세요.' />
        </div>
        <Link to='/auth/login' className='right-side'>
          로그인 | 가입
        </Link>
      </div>
      <div className='gradient-border'/>
    </div>
  );
};

export default Header;