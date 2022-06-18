import React from 'react'
import MovieCard from './MovieCard'
import { Movies } from '../../../fixtures.js'

export default function MovieCards() {
  return (
    <div className='movie-cards-wrapper'>
      {Movies.map((film) => (
        <div key={film.id} className="movie-card">
          <MovieCard filmAttrs={film}/>
        </div>
      ))}
    </div>
  )
}
