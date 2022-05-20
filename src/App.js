import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }

  render(){
    return(
      <div className="App">
        <h1>Monster's Rolodex</h1>
      </div>
    );
  }

}

export default App;
