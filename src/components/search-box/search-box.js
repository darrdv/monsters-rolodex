import { Component } from 'react'
import './search-box.css';

class SearchBox extends Component {
  render(){
    const { className, placeHolder, handleChange } = this.props
    return(
      <input 
        className = { `search-box ${className}` }
        type="search"
        placeholder={ placeHolder }
        onChange={ handleChange }
      />
    )
  }
};

export default SearchBox