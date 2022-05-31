import React from 'react'
import FilmCardInfo from './MovieCardInfo'

export default function FilmCard(props) {
  return (
    <div>
      <img src={props.film_attrs.film_image_url}></img>
      <FilmCardInfo info_attrs={props.film_attrs}/>
    </div>
  )
}
