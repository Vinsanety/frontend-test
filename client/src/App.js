import React, { Component } from 'react';
import './App.css';
import Login from './Login.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/de/thumb/a/ad/Seaspan_Marine_Corporation_logo.svg/2000px-Seaspan_Marine_Corporation_logo.svg.png" className="App-logo" alt="logo" />
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
