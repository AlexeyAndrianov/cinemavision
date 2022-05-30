import React from 'react'
import SearchHeader from './search_group/SearchHeader'
import SearchInput from './search_group/SearchInput'
import SearchButton from './search_group/SearchButton'

export default function HomepageHeader() {
  return (
    <div className="header-wrapper">
      <div className="header-background" />
      <div className="search-group">
        <SearchHeader />
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  )
}
