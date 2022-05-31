import React from 'react'

export default function FilmCardInfo(props) {
  return (
    <div className="movie-card-info">
      <div className='film-name'>{props.info_attrs.film_name}</div>
      <div className='film-genre'>{props.info_attrs.film_genre}</div>
      <div className='film-release-year'>{props.info_attrs.film_release_year}</div>
    </div>
  )
}
