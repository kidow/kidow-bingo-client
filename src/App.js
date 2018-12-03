import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home, Auth, New, User, Posts } from 'pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/new' component={New}/>
        <Route path='/user/:username' component={User}/>
        <Route path='/posts/:username' component={Posts}/>
      </Switch>
    );
  }
}

export default App;
