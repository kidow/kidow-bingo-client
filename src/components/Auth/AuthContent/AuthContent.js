import React from 'react';
import './AuthContent.scss'
import AuthWrapper from '../AuthWrapper';

const AuthContent = ({title, children}) => {
  return (
    <AuthWrapper>
      <div className='title'>{title}</div>
      {children}
    </AuthWrapper>
  );
};

export default AuthContent;