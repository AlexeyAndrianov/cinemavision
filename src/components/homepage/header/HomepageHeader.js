import React from 'react'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'

export default function HomepageHeader() {
  return (
    <div>
      <div>
        <img src="https://static.alphacoders.com/thumbs_categories/20.jpg"></img>
      </div>
      <div className="search_group">
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  )
}
