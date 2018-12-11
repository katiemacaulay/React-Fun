import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import webLogo from './webDesign.jpeg'

class App extends Component {

    render() {
      return (
        <div>
          <div class="flex justify-center bb" >
              <Button variant="outlined ba b--white mr3">Home</Button>
              <Button variant="outlined ba b--white mr2">About</Button>
              <div>
                <h1 class="mr4 ml4">Katie Macaulay</h1>
                {/* <img src={webLogo} class= "mt0 ml5 h3"/> */}
              </div>
              <Button variant="outlined ba b--white mr2">Work</Button>
              <Button variant="outlined ba b--white mr2">Contact</Button>
          </div>
          <img src={webLogo} class="Negative-margin ml8 ml2 h3"/>
        </div>
      );
    }
  }
  
  export default App;
  