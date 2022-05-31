import React from 'react'
import MovieCard from './MovieCard'
import MoviesFoundCounter from './MoviesFoundCounter'
import SortingGroup from './SortingGroup'
import { Movies } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <>
      <SortingGroup />
      <MoviesFoundCounter />
      <div className='movie-cards-wrapper'>
        {Movies.map((film) => (
          <div key={film.id} className="movie-card">
            <MovieCard filmAttrs={film}/>
          </div>
        ))}
      </div>
    </>
  )
}
