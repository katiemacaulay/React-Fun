import React, { Component } from 'react';
import './App.css';
import Navbar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
      </div>
    );
  }
}

export default App;
