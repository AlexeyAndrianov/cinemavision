import React from 'react'

export default function FilmCard(props) {
  return (
    <>
      <img src={props.film_attrs.film_image_url}></img>
    </>
  )
}
