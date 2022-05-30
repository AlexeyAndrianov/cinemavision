import React from 'react'
import FilmCard from './FilmCard'
import FilmCardInfo from './FilmCardInfo'
import { Films } from '../../../fixtures.js'
import { HomepageBodyContainer } from '../../styles/HomepageBody.styled'

export default function HomepageBody() {
  return (
    <HomepageBodyContainer>
      {Films.map((film) => (
        <div key={film.id}className="movie-card">
          <FilmCard film_attrs={film}/>
          <FilmCardInfo info_attrs={film}/>
        </div>
      ))}
    </HomepageBodyContainer>

  )
}
