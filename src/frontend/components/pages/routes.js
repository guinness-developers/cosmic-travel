import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../App';
import Details from './details';


class Routes extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={App} />
          <Route exact path='/details' component={Details} />
      </Router>
    );
  }
}

export default Routes;
