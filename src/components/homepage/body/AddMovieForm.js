import React from 'react'

export default function AddMovieForm() {
  return (
    <form>
      <div className='movie-form-left-input-group'>
        <div>TITLE:</div>
        <input className='movie-form-input movie-form-left-input-group-input' type="text" name="name" />
      </div>
      <div className='movie-form-right-input-group'>
        <div>RELEASE DATE</div>
        <input className='movie-form-input movie-form-right-input-group-input' type="text" name="release_date" />
      </div>
      <div className='movie-form-left-input-group'>
        <div>MOVIE URL:</div>
        <input className='movie-form-input movie-form-left-input-group-input' type="text" name="movie_url" />
      </div>
      <div className='movie-form-right-input-group'>
        <div>RATING:</div>
        <input className='movie-form-input movie-form-right-input-group-input' type="text" name="rating" />
      </div>
      <div className='movie-form-left-input-group '>
        <div>GENRE</div>
        <select className='movie-form-input movie-form-left-input-group-input'>
          <option>Detective</option>
          <option>Drama</option>
        </select>
      </div>
      <div className='movie-form-right-input-group'>
        <div>RUNTIME:</div>
        <input className='movie-form-input movie-form-right-input-group-input' type="text" name="runtime" />
      </div>
      <div className='overview-textarea-group'>
        <div>OVERVIEW:</div>
        <input className='overview-textarea' type="text" name="overview" />
      </div>
      <input className='movie-form-reset-button' type="submit" value="Reset" />
      <input className='movie-form-submit-button' type="submit" value="Submit" />
    </form>
  )
}
