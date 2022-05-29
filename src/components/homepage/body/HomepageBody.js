import React from 'react'
import FilmCard from './FilmCard'
import { Films } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <>
      {Films.map((film) => (
        <FilmCard key={film.id} film_attrs={film} />
      ))}
    </>

  )
}
