import { Component } from 'react'

class SearchBox extends Component {
  render(){
    const { className, placeHolder, handleChange } = this.props
    return(
      <input 
        className = {className}
        type="search"
        placeholder={ placeHolder }
        onChange={ handleChange }
      />
    )
  }
};

export default SearchBox