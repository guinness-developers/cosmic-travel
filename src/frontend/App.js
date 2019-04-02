import React, { Component } from 'react';
import Header from './components/header/header';
import './App.sass';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Routes from './components/pages/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
	        <Header />
          <Routes/>
	        <Main/>
	        <Footer />
      </div>
    );
  }
}

export default App;
