import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json() )
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const {monsters} = this.state;
    const displayedMonsters = monsters.map((monster) => {
      return(
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      )
    })

    return(
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <>
          {displayedMonsters}
        </>
      </div>
    );
  }

}

export default App;
