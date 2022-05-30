import React from 'react'

export default function FilmCardInfo(props) {
  return (
    <>
    <label>{props.info_attrs.film_name}</label>
    <label>{props.info_attrs.film_genre}</label>
    <label>{props.info_attrs.film_release_year}</label>
    </>
  )
}
