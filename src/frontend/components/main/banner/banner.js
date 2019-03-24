import React from 'react';
import './banner.sass';
import TripsButton from '../buttons/tripsBtn';
import RegisterButton from '../buttons/registerBtn';


export default function Banner(props) {
    return (
      <section className="banner">
        <div className="container">
          <div className="banner-content">
              <h1 className="intro intro-title">{props.introTitle}</h1>
              <h4 className="intro intro-paragraph">{props.introParagraph}</h4>
              <div className="buttons">
                <TripsButton />
                <RegisterButton />
              </div>
          </div>
        </div>
      </section>
    );
}
