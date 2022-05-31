import React from 'react'
import PropTypes from 'prop-types';
import MovieCardInfo from './MovieCardInfo'

export default function MovieCard(props) {
  return (
    <div>
      <img src={props.film_attrs.film_image_url} alt={props.film_attrs.film_name}></img>
      <MovieCardInfo info_attrs={props.film_attrs}/>
    </div>
  )
}

MovieCard.propTypes = {
  film_image_url: PropTypes.string,
  film_name: PropTypes.string,
  film_genre: PropTypes.string,
  film_release_year: PropTypes.number
};
