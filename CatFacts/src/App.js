import React, { Component } from 'react';
import './App.css';
import StartButton from "./StartButton"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="body App-header">
          <StartButton/>
        </div>
      </div>
    );
  }
}

export default App;
