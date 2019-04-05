import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../App';
import Details from './details';


class Routes extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/details' component={Details} />
      </Switch>
    );
  }
}

export default Routes;

https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/