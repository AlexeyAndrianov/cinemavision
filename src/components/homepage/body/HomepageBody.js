import React from 'react'
import FilmCard from './MovieCard'
import { Films } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <>
      {Films.map((film) => (
        <div key={film.id}className="movie-card">
          <FilmCard film_attrs={film}/>
        </div>
      ))}
    </>

  )
}
