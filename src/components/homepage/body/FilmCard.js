import React from 'react'

export default function FilmCard(props) {
    return (
    <div>
      <img src={props.film_image_url}></img>
    </div>
  )
}
