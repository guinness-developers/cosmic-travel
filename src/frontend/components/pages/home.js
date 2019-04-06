import React, { Fragment, Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Routes from '../routes/routes';

class Home extends Component {
  render() {
    return (
      <Fragment>
      
	        <Header />
	        <Main/>

      </Fragment>
    );
  }
}

export default Home;
