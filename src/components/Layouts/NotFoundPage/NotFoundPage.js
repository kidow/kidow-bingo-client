import React from 'react';
import './NotFoundPage.scss'
import { GoAlert } from 'react-icons/go'

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <GoAlert />  잘못된 페이지입니다.
    </div>
  );
};

export default NotFoundPage;