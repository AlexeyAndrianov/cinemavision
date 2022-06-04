import React from 'react'

export default function MovieCardActions() {
  let isMenuHidden = true;

  if (isMenuHidden) {
    return (
      <select className='menu-circle-with-dots'>
        <option>Edit</option>
        <option>Delete</option>
      </select>
    )
  } else {
    return(<p> qwe </p>)
  }
}

