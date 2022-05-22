import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json() )
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
   })
    //const {monsters} = this.state;
    const displayedMonsters = filteredMonsters.map((monster) => {
      return(
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      )
    })

    return(
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <input
         className='search-box'
         type='search'
         placeholder='Search Monsters'
         onChange={ (event) => {
           console.log(event.target.value)
           const searchField = event.target.value.toLocaleLowerCase()
           
           this.setState(() => {
             return {searchField}
           })
         }
         }/>
        <>
          {displayedMonsters}
        </>
      </div>
    );
  }

}
export default App;