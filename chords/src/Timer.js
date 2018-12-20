import React, { Component } from 'react';
import './App.css';


class Timer extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.minutes}:{this.props.seconds}</h1>
        </div>
      );
    }
  }
  
  export default Timer;
  