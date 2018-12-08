import React from 'react';
import { PageWrapper } from 'components/Layouts';
import { Route } from 'react-router-dom'
import ChangeName from 'containers/User/ChangeName';
import ChangePassword from 'containers/User/ChangePassword';

const User = ({match}) => {
  const { name } = match.params
  return (
    <PageWrapper>
      <Route path='/user/:name/changeName' component={ChangeName} name={name}/>
      <Route path='/user/:name/changePassword' component={ChangePassword} name={name}/>
    </PageWrapper>
  );
};

export default User;