import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    stories: [],
  }

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(response => {
        const formattedData = response.slice(0, 30);
        formattedData.forEach((id, index) =>{
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(storyData => storyData.json())
          .then(storyData => {
            this.setState({stories: [...this.state.stories, storyData]})
          })
        })
      })
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
