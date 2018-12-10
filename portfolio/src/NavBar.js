import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {

    render() {
      return (
        <div >
            <Button>Home</Button>
            <Button>About</Button>
            <h1>Katie Macaulay</h1>
            <Button>Work</Button>
            <Button>Contact</Button>
        </div>
      );
    }
  }
  
  export default App;
  