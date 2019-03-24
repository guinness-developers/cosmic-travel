import React, { Component, Fragment } from 'react';
import './main.css';
import Banner from './banner/banner';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Banner
          introTitle="Explore the solar system with us"
          introParagraph="We take you to the planets in our solar system, offering you once in a lifetime experiences that you will never forget."/>
      </Fragment>
    );
  }
}

export default Main;
