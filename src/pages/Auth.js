import React from 'react';
import { Route } from 'react-router-dom'

import Login from 'containers/Auth/Login';
import Register from 'containers/Auth/Register';

const Auth = () => {
  return (
    <div>
      <Route path='/auth/login' component={Login}/>
      <Route path='/auth/register' component={Register}/>
    </div>
  );
};

export default Auth;