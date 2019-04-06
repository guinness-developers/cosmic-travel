import React from 'react';
import '../../../App.sass';
import CosmicButton from '../buttons/btn';
import shuttle from '../../../images/shuttle.png';
import { Link } from 'react-router-dom';


export default function Banner(props) {
    return (
      <section className="banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="content-left">
                <h1 className="intro intro-title">{props.introTitle}</h1>
                <h4 className="intro intro-paragraph">{props.introParagraph}</h4>
                <div className="buttons">
                <CosmicButton
                  buttonName='Choose trip'
                 />
                 
                  <Link to="/registration">
                    <CosmicButton
                      buttonName='Register'
                     />
                  </Link>
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
