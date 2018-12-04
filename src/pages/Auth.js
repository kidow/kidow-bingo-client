import React from 'react';
import { Route } from 'react-router-dom'

import Login from 'containers/Auth/Login';
import Register from 'containers/Auth/Register';
import { PageWrapper } from 'components/Layouts';

const Auth = () => {
  return (
    <PageWrapper>
      <Route path='/auth/login' component={Login}/>
      <Route path='/auth/register' component={Register}/>
    </PageWrapper>
  );
};

export default Auth;