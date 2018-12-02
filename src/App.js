import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home, Auth, Post, User } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/new' component={Post}/>
        <Route path='/user/:username' component={User}/>
      </div>
    );
  }
}

export default App;
