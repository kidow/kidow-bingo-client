import React from 'react';
import { PageWrapper } from 'components/Layouts';
import { Route } from 'react-router-dom'
import ChangeName from 'containers/User/ChangeName';
import ChangePassword from 'containers/User/ChangePassword';

const User = () => {
  return (
    <PageWrapper>
      <Route path='/user/:username/changeName' component={ChangeName}/>
      <Route path='/user/:username/changePassword' component={ChangePassword}/>
    </PageWrapper>
  );
};

export default User;