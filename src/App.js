import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserSearch from './containers/UserSearch';
import UserProfile from './containers/UserProfile';
import './App.css';

const MainRoutes = () => (
  <Switch>
    <Route exact={true} path="/" component={UserSearch} />
    <Route path="/users/:username" component={UserProfile} />
  </Switch>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
