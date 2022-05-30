import React from 'react'
import FilmCard from './FilmCard'
import { Films } from '../../../fixtures.js'
import { HomepageBodyContainer } from '../../styles/HomepageBody.styled'

export default function HomepageBody() {
  return (
    <HomepageBodyContainer>
      {Films.map((film) => (
        <div className="movie-card">
          <FilmCard key={film.id} film_attrs={film}/>
        </div>
      ))}
    </HomepageBodyContainer>

  )
}
