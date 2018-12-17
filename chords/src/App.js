import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    facts: []
  }

  componentDidMount(){
    fetch('http://localhost:7979/facts')
    .then(data => data.json())
    .then(data => {
      this.setState({facts: data.all})
    })
  }

  showFact(){
    return this.state.facts.map((item, index) => {
      return <li key={index}> {item.text} </li>
    })
  }

  
  render() {
    return (
          <ul>
            {this.showFact()}
          </ul>
    );
  }
}

export default App;
