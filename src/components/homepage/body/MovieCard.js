import React from 'react'
import PropTypes from 'prop-types';
import MovieCardInfo from './MovieCardInfo'
import MovieCardActions from './MovieCardActions'

export default function MovieCard(props) {
  return (
    <>
      <div className='movie-card-img-with-actions'>
        <img className='movie-card-image' src={props.filmAttrs.filmImageUrl} alt={props.filmAttrs.filmName}></img>
        <MovieCardActions />
      </div>
      <MovieCardInfo infoAttrs={props.filmAttrs}/>
    </>
  )
}

MovieCard.propTypes = {
  filmImageUrl: PropTypes.string,
  filmName: PropTypes.string,
  filmGenre: PropTypes.string,
  filmReleaseYear: PropTypes.number
};
