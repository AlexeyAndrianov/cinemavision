import React from 'react'
import MovieCard from './MovieCard'
import { Films } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <>
      {Films.map((film) => (
        <div key={film.id} className="movie-card">
          <MovieCard film_attrs={film}/>
        </div>
      ))}
    </>

  )
}
