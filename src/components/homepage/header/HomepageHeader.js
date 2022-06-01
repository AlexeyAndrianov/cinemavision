import React from 'react'
import SearchHeader from './search_group/SearchHeader'
import SearchInput from './search_group/SearchInput'
import SearchButton from './search_group/SearchButton'
import HeaderLabel from './HeaderLabel'
import AddMovieButton from './AddMovieButton'

export default function HomepageHeader() {
  return (
    <div className="header-wrapper">
      <div className="header-background" />
      <div className='header-label'><HeaderLabel /></div>
      <AddMovieButton />
      <div className="search-group">
        <SearchHeader />
        <SearchInput />
        <SearchButton />
      </div>
      <div className='header-body-divider' />
    </div>
  )
}
