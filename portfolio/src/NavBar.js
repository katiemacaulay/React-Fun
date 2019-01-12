import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import webLogo from './webDesign.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WorkTiles from './WorkLinks'
import About from './About'

function BasicExample() {
  return (
    <Router>
      <div>
        <div class="flex justify-center bb" >
            <Link to="/" class="mt4 mr3 no-underline"><Button>Home</Button></Link>
            <Link to="/about/" class="mt4 mr3 no-underline"><Button>About</Button></Link>
            <div>
              <h1 class="mr4 ml5 mb4 mt4">Katie Macaulay</h1>
            </div>
            <Link to="/Work/" class="mt4 mr3 no-underline"><Button>Work</Button></Link>
            <Button variant="outlined ba b--white mr2">Contact</Button>
        </div>
        <div class= "flex justify-center">
          <img src={webLogo} class="Negative-margin h3"/>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/Work/" component={WorkTiles} />
      </div>
  </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Work({ match }) {
  return (
    <div>
      <h2>Work</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;