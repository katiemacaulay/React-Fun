import React, { Component } from 'react';
import './App.css';
import TimerInput from './TimerInput'
import Timer from './Timer'
import StartButton from './StartButton'

class App extends Component {
  state = {
      seconds: '00', 
      minutes: '0',
    }

  render() {
    return (
      <div>
        <TimerInput minutes={this.state.minutes}/>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <StartButton/>
      </div>
    );
  }
}

export default App;
