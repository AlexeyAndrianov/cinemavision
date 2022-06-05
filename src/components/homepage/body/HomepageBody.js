import React from 'react'
import MovieCard from './MovieCard'
import MoviesFoundCounter from './MoviesFoundCounter'
import SortingGroup from './SortingGroup'
import AddMovieForm from './AddMovieForm'
import { Movies } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <div className='body-content'>
      <SortingGroup />
      <MoviesFoundCounter />
      <div className='movie-cards-wrapper'>
        {Movies.map((film) => (
          <div key={film.id} className="movie-card">
            <MovieCard filmAttrs={film}/>
          </div>
        ))}
      </div>
      <AddMovieForm />
    </div>
  )
}
