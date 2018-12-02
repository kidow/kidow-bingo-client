import React from 'react';
import './PageWrapper.scss'
import Header from '../Header/Header';

const PageWrapper = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageWrapper;