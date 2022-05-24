import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

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
   
    return(
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <SearchBox
         className='monsters-search-box'
         type='search'
         placeholder='Search Monsters'
         handleChange={onSearchChange}
         />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}
export default App;