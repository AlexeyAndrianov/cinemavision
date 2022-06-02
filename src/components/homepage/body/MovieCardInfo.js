import React from 'react'
import PropTypes from 'prop-types';

export default function MovieCardInfo(props) {
  return (
    <div className="movie-card-info">
      <div className='wrap-name-year'>
        <div className='film-name'>{props.infoAttrs.filmName}</div>
        <div className='film-release-year'>{props.infoAttrs.filmReleaseYear}</div>
      </div>
      <div className='film-genre'>{props.infoAttrs.filmGenre}</div>
    </div>
  )
}

MovieCardInfo.propTypes = {
  filmImageUrl: PropTypes.string,
  filmName: PropTypes.string,
  filmGenre: PropTypes.string,
  filmReleaseYear: PropTypes.number
};
