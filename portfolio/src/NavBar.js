import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import webLogo from './webDesign.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Work = () => <h2>Work</h2>;

class App extends Component{
  render() {
    return (
      <Router>
        <div class="flex justify-center bb" >
            <Button variant="outlined ba b--white mr3"><Link to="/">Home</Link></Button>
            <Button variant="outlined ba b--white mr2"><Link to="/about/">About</Link></Button>
            <div>
              <h1 class="mr4 ml5 mb4 mt4">Katie Macaulay</h1>
            </div>
            <Button variant="outlined ba b--white mr2"><Link to="/Work/">Work</Link></Button>
            <Button variant="outlined ba b--white mr2">Contact</Button>
        </div>
        <div class= "flex justify-center">
          <img src={webLogo} class="Negative-margin h3"/>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/Work/" component={Work} />
      </Router>
    );
  }
}

    
export default App;
  