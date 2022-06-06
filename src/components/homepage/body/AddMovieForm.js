import React from 'react'

export default function AddMovieForm() {
  return (
    <form>
      <label>
        TITLE:
        <input className='movie-form-input' type="text" name="name" />
      </label>
      <label>
        RELEASE DATE
        <input className='movie-form-input' type="text" name="release_date" />
      </label>
      <label>
        MOVIE URL:
        <input className='movie-form-input' type="text" name="movie_url" />
      </label>
      <label>
        RATING:
        <input className='movie-form-input' type="text" name="rating" />
      </label>
      <label>
        GENRE
        <select>
          <option>Detective</option>
          <option>Drama</option>
        </select>
      </label>
      <label>
        RUNTIME:
        <input className='movie-form-input' type="text" name="runtime" />
      </label>
      <label>
        OVERVIEW:
        <input className='movie-form-input' type="text" name="overview" />
      </label>
      <input className='movie-form-reset-button' type="submit" value="Reset" />
      <input className='movie-form-submit-button' type="submit" value="Submit" />
    </form>
  )
}
