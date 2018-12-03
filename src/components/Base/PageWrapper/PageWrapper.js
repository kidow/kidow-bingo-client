import React from 'react';
import './PageWrapper.scss'
import Header from '../Header/Header';

const PageWrapper = ({children}) => {
  return (
    <div className='page-wrapper'>
      <Header />
      {children}
    </div>
  );
};

export default PageWrapper;