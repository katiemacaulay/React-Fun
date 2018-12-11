import React, { Component } from 'react';
import './App.css';
import Navbar from './NavBar.js'
// import WorkTiles from './WorkLinks'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          {/* <WorkTiles></WorkTiles> */}
      </div>
    );
  }
}

export default App;
