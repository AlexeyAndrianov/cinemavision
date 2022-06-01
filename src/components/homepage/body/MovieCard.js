import React from 'react'
import PropTypes from 'prop-types';
import MovieCardInfo from './MovieCardInfo'

export default function MovieCard(props) {
  return (
    <div>
      <img className='movie-card-image' src={props.filmAttrs.filmImageUrl} alt={props.filmAttrs.filmName}></img>
      <MovieCardInfo infoAttrs={props.filmAttrs}/>
    </div>
  )
}

MovieCard.propTypes = {
  filmImageUrl: PropTypes.string,
  filmName: PropTypes.string,
  filmGenre: PropTypes.string,
  filmReleaseYear: PropTypes.number
};
