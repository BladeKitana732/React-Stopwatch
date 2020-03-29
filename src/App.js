import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'


export default class App extends Component {
  render() {
    return (
      <div className="App">
  
        <div className="button-container">

          <Buttons />

        </div>

      </div>
    )
  }
}

