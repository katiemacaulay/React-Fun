import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {

    render() {
      return (
        <div class="flex justify-center bb" >
            <Button variant="outlined ba b--white mr3">Home</Button>
            <Button variant="outlined ba b--white mr2">About</Button>
            <h1 class="mr4 ml4">Katie Macaulay</h1>
            <Button variant="outlined ba b--white mr2">Work</Button>
            <Button variant="outlined ba b--white mr2">Contact</Button>
        </div>
      );
    }
  }
  
  export default App;
  