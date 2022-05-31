import React from 'react'
import MovieCard from './MovieCard'
import MoviesFoundCounter from './MoviesFoundCounter'
import SortingGroup from './SortingGroup'
import { Films } from '../../../fixtures.js'
import MooviesFoundCounter from './MoviesFoundCounter'

export default function HomepageBody() {
  return (
    <>
      <SortingGroup />
      <MoviesFoundCounter />
      {Films.map((film) => (
        <div key={film.id} className="movie-card">
          <MovieCard film_attrs={film}/>
        </div>
      ))}
    </>

  )
}
