import React from 'react'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'

export default function HomepageHeader() {
  return (
    <div className="header-wrapper">
      <div className="header-background" />
      <div className="search-group">
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  )
}
