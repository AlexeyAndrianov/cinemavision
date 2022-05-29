import React from 'react'

export default function FilmCard(props) {
  return (
    <>
      <img src={props.film_attrs.film_image_url}></img>
      <div>
        {props.film_attrs.film_name}
        {props.film_attrs.film_genre}
        {props.film_attrs.film_release_year}
      </div>
    </>
  )
}
