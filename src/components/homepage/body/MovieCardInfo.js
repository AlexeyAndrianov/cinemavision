import React from 'react'
import PropTypes from 'prop-types';

export default function MovieCardInfo(props) {
  return (
    <div className="movie-card-info">
      <div className='wrap-name-year'>
        <div className='film-name'>{props.info_attrs.film_name}</div>
        <div className='film-release-year'>{props.info_attrs.film_release_year}</div>
      </div>
      <div className='film-genre'>{props.info_attrs.film_genre}</div>
    </div>
  )
}

MovieCardInfo.propTypes = {
  film_image_url: PropTypes.string,
  film_name: PropTypes.string,
  film_genre: PropTypes.string,
  film_release_year: PropTypes.number
};
