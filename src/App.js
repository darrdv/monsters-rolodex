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

  /*
  Moved onChange event to it's own method so that when state changes, searchField is not being recreated every time as it would with an anonymous function. This is a best practice for performance reasons.
  */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField}
    })}
  

  render(){

    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
   })
   
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
         onChange={onSearchChange}
         />
        <>
          {displayedMonsters}
        </>
      </div>
    );
  }

}
export default App;