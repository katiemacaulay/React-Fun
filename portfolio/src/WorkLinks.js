import React, { Component } from 'react';
import './App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class App extends Component {
    render() {
      return (
        <GridList class="mdc-grid-list">
          <GridListTileBar class="mdc-grid-list__tiles">
            <GridListTile class="mdc-grid-tile">
              <div>
                <img class="mdc-grid-tile__primary-content" src="my-image.jpg" />
              </div>
              <span class="mdc-grid-tile__secondary">
                <span class="mdc-grid-tile__title">Title</span>
              </span>
            </li>
            <li class="mdc-grid-tile">
              <div class="mdc-grid-tile__primary">
                <img class="mdc-grid-tile__primary-content" src="my-image.jpg" />
              </div>
              <span class="mdc-grid-tile__secondary">
                <span class="mdc-grid-tile__title">Title</span>
              </span>
            </li>
          </ul>
        </div>
      );
    }
  }
  
  export default App;