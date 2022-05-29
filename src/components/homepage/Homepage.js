import React from 'react'
import HomepageHeader from './header/HomepageHeader'
import HomepageBody from './body/HomepageBody'
import HomepageFooter from './footer/HomepageFooter'

export default function Homepage() {
  return (
    <>
      <div><HomepageHeader /></div>
      <div><HomepageBody /></div>
      <div><HomepageFooter /></div>
    </>
  )
}
