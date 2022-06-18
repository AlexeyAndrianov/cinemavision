import React from 'react'
import MoviesFoundCounter from './MoviesFoundCounter'
import SortingGroup from './SortingGroup'
import AddMovieForm from './AddMovieForm'
import { AddMovieFormContainer } from '../../styles/AddMovieFormContainer.styled'
import MovieCards from './MovieCards'
import { Movies } from '../../../fixtures.js'

export default function HomepageBody() {
  return (
    <div className='body-content'>
      <SortingGroup />
      <MoviesFoundCounter />
      <MovieCards movieCardsCollection={ Movies } />
      <AddMovieFormContainer>
        <AddMovieForm />
      </AddMovieFormContainer>
    </div>
  )
}
