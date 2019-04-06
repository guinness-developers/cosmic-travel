import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Details, Registration, Login } from '../pages';

class Routes extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default Routes;
