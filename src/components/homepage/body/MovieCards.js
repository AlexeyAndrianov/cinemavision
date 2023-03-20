import React from 'react'
import MovieCard from './MovieCard'

export default function MovieCards(props) {
  return (
    <div className='movie-cards-wrapper'>
      {props.movieCardsCollection.map((film) => (
        <div key={film.id} className="movie-card">
          <MovieCard filmAttrs={film}/>
        </div>
      ))}
    </div>
  )
}
