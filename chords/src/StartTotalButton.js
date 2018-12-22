import React, { Component } from 'react';
import './App.css';
// import TimerInput from './TimerInput'
// import Timer from './Timer'
// import StartButton from './StartButton'
import Button from '@material-ui/core/Button';

class App extends Component {
    state = {
        total: 0,
        boxTotal: 5,
      }
    addFunction(num){
      this.setState({total: (this.state.total + num)})
    }
    randomizeBoxTotals(){
      return Math.floor(Math.random() * 2000)
    }
  
    makeNumberBoxes(){
      return <li>{this.randomizeBoxTotals()}</li>
    }
  
    render() {
      this.randomizeBoxTotals()
      return (
        <div>
          <div> {this.state.total} </div>
          <Button onClick={() => this.addFunction(this.state.boxTotal)} />
          <ul>
            {this.makeNumberBoxes()}
          </ul> 
        </div>
      );
    }
  }
  
  export default App;
  