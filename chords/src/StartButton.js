import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class TimerInput extends Component {
    state = {
        facts: [],
        randomFact: [],
        }

    componentDidMount(){
        fetch('http://localhost:7979/facts')
            .then(data => data.json())
            .then(data => {
                this.setState({facts: data.all})
            })
    }

    giveFact(){
        let number = (Math.floor(Math.random() * 145));
        let newFact = this.state.facts[number];
        this.setState({randomFact: newFact});
    }

    render() {
      return (
        <div>
            <Button onClick={() => this.giveFact()}>Give me a cat fact right meow!</Button>
            <div>
                {this.state.randomFact.text}
            </div>
        </div>
      ); 
    }
  }
  
  export default TimerInput;
  