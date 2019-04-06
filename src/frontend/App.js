import React, { Component } from 'react';
import './App.sass';
import Routes from './components/routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes />
      </div>
    );
  }
}

export default App;
