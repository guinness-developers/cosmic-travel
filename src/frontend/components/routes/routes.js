import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Details } from '../pages';

class Routes extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
      </Switch>
    );
  }
}

export default Routes;
