import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';


class TimerInput extends Component {
    render() {
      return (
        <div>
          <h3>Input your desired time</h3>
          <TextField id="outlined-number" 
          minutes={this.props.minutes}  
          label="Minutes" type="number" required />
        </div>
      );
    }
  }
  
  export default TimerInput;
  