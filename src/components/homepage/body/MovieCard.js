import React from 'react'
import MovieCardInfo from './MovieCardInfo'

export default function MovieCard(props) {
  return (
    <div className='movie-card'>
      <img src={props.film_attrs.film_image_url}></img>
      <MovieCardInfo info_attrs={props.film_attrs}/>
    </div>
  )
}
