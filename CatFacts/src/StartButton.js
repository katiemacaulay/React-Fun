import React, { Component } from 'react';
import './App.css';

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
            <div className="random-fact">
                {this.state.randomFact.text}
            </div>
            <div className="button-box">
                <button className="button button:hover"onClick={() => this.giveFact()}>Cat Facts Right Meow!</button>
            </div>
        </div>
      ); 
    }
  }
  
  export default TimerInput;
  