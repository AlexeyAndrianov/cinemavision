import React, { Component } from 'react'
import { FilmList } from '../fixtures/FilmList.js'

export default class SearchInput extends Component {
  render() {
    return (
      <div>
          <div>Search:</div>
          <input placeholder='type here'/>
          { FilmList.map((val) => (
            <p key={val.id}>{val.name}</p>
          )) }
      </div>
    )
  }
}
