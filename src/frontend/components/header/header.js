import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.sass';

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
                    <Link className="log-in" to='/login'>Log In</Link>
                </nav>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;
