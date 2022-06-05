import React from 'react'

export default function MovieCardActions() {
  let isMenuHidden = false;

  if (isMenuHidden) {
    return (
      <div className='menu-circle-with-dots' />
    )
  } else {
    return(
      <div className='open-options-menu'>
        EDIT
        DELETE
      </div>
    )
  }
}

