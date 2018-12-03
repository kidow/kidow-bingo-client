import React from 'react';
import './PageWrapper.scss'
import HeaderContainer from 'containers/Base/HeaderContainer';

const PageWrapper = ({children}) => {
  return (
    <div className='page-wrapper'>
      <HeaderContainer />
      {children}
    </div>
  );
};

export default PageWrapper;