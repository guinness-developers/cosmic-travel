import React, { Component } from 'react';
import './banner.css';
import TripsButton from '../buttons/tripsBtn';
import RegisterButton from '../buttons/registerBtn';


class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="container">
          <div className="banner-content">
              <h1 className="intro">Explore the solar<br /> system with us</h1>
              <h4 className="intro">We take you to the planets in our <br />solar system, offering you once in a <br />lifetime experiences that you will <br />never forget.</h4>
              <div className="buttons">
              <TripsButton />
              <RegisterButton />
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
