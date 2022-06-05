import React, { useState } from 'react';

export default function MovieCardActions() {
  let [isMenuHidden, toggleMenu] = useState(true);

  if (isMenuHidden) {
    return (
      <div className='menu-circle-with-dots' onClick={
        () =>toggleMenu(isMenuHidden =>{return(!isMenuHidden)})
      }/>
    )
  } else {
    return(
      <div className='open-options-menu'>
        <div className='cross' onClick={
          () =>toggleMenu(isMenuHidden =>{return(!isMenuHidden)})
        }>
          X
        </div>
        <div className='edit-delete-links'>
          EDIT
          DELETE
        </div>
      </div>
    )
  }
}


