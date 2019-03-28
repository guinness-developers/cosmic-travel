import React from 'react';
import '../../../App.sass';
import TripsButton from '../buttons/tripsBtn';
import RegisterButton from '../buttons/registerBtn';
import shuttle from '../../../images/shuttle.png';


export default function Banner(props) {
    return (
      <section className="banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="content-left">
                <h1 className="intro intro-title">{props.introTitle}</h1>
                <h4 className="intro intro-paragraph">{props.introParagraph}</h4>
                <div className="buttons">
                  <TripsButton />
                  <RegisterButton />
                </div>
            </div>
            <div className="content-right">
              <img src={shuttle} alt="space shuttle" />
            </div>
          </div>
        </div>
      </section>
    );
}
