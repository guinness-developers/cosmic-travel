import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>
          <div className='container'>
            <div className='nav-bar'>
                <div className='logo'>
                    cosmic
                </div>
                <nav className='nav'>
                    <a href='https://www.google.com/' 
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        Log In
                    </a>
                </nav>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;