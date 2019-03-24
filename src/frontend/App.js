import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import Banner from './components/main/banner/banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
