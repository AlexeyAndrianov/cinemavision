import React from 'react'

export default function AddMovieForm() {
  return (
    <form>
      <label>
        TITLE:
        <input type="text" name="name" />
      </label>
      <label>
        RELEASE DATE
        <input type="text" name="release_date" />
      </label>
      <label>
        MOVIE URL:
        <input type="text" name="movie_url" />
      </label>
      <label>
        RATING:
        <input type="text" name="rating" />
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
        <input type="text" name="runtime" />
      </label>
      <label>
        OVERVIEW:
        <input type="text" name="overview" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
