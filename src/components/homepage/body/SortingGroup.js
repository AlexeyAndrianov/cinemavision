import React from 'react'

export default function SortingGroup() {
  return (
    <div className='sorting-group'>
      <div className='buttons-group'>
        <button className='hover-underline-animation'>ALL</button>
        <button className='hover-underline-animation'>DOCUMENTARY</button>
        <button className='hover-underline-animation'>COMEDY</button>
        <button className='hover-underline-animation'>HORROR</button>
        <button className='hover-underline-animation'>CRIME</button>
      </div>
      <div className='sort-select'>
        <label>SORT BY</label>
        <select name="sort-options">
          <option value="Asc">RELEASE DATE</option>
        </select>
      </div>
    </div>
  )
}
