import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home, Auth, New, User, Posts } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/new' component={New}/>
        <Route path='/user/:username' component={User}/>
        <Route path='/posts/:username' component={Posts}/>
      </div>
    );
  }
}

export default App;
