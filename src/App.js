import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home } from 'pages';
import Auth from './pages/Auth';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
      </div>
    );
  }
}

export default App;
