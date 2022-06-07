import React, { useState, useRef  } from 'react';
import useOutsideClick from "../../../hooks/useOutsideClick";


export default function MovieCardActions() {
  let [isMenuHidden, toggleMenu] = useState(true);
  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleMenu(isMenuHidden =>{return(!isMenuHidden)})
  });

  if (isMenuHidden) {
    return (
      <div className='menu-circle-with-dots' onClick={
        () =>toggleMenu(isMenuHidden =>{return(!isMenuHidden)})
      }/>
    )
  } else {
    return(
      <div ref={ref} className='open-options-menu'>
        <div className='cross' onClick={
          () =>toggleMenu(isMenuHidden =>{return(!isMenuHidden)})
        }>
          X
        </div>
        <div className='edit-delete-links'>
          <div className='opened-menu-link'>Edit</div>
          <div className='opened-menu-link'>Delete</div>
        </div>
      </div>
    )
  }
}


