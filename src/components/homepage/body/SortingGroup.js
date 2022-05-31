import React from 'react'

export default function SortingGroup() {
  return (
    <div className='sorting-group'>
      <div className='buttons-group'>
        <button>ALL</button>
        <button>DOCUMENTARY</button>
        <button>COMEDY</button>
        <button>HORROR</button>
        <button>CRIME</button>
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
