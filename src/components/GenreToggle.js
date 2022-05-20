import React from 'react'
import Select from 'react-select'
import { FilmGenres } from '../fixtures/FilmGenres.js'

  
class GenreToggle extends React.PureComponent {
  render(){
    return (
      <div>
        <Select options = {FilmGenres} />
      </div>        
    );
  }
}
  
export default GenreToggle;