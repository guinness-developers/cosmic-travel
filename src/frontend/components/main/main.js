import React, { Component, Fragment } from 'react';
import '../../App.sass';
import Banner from './banner/banner';
import Products from './products/products';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Fragment>
          <Banner
            introTitle="Explore the solar system with us"
            introParagraph="We take you to the planets in our solar system, offering you once in a lifetime experiences that you will never forget."/>
          <Products />
        </Fragment>
      </div>
    );
  }
}

export default Main;
