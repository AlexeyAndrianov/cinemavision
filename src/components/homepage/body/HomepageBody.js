import React from 'react'
import MovieCard from './MovieCard'
import SortingGroup from './SortingGroup'
import { Films } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <>
      <SortingGroup />
      {Films.map((film) => (
        <div key={film.id} className="movie-card">
          <MovieCard film_attrs={film}/>
        </div>
      ))}
    </>

  )
}
