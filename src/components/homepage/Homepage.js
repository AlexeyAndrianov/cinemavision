import React from 'react'
import HomepageHeader from './header/HomepageHeader'
import HomepageBody from './body/HomepageBody'
import HomepageFooter from './footer/HomepageFooter'
import {HomepageHeaderContainer} from "../styles/HomepageHeaderContainer.styled"

export default function Homepage() {
  return (
    <>
      <HomepageHeaderContainer>
        <HomepageHeader />
      </HomepageHeaderContainer>
      <div><HomepageBody /></div>
      <div><HomepageFooter /></div>
    </>
  )
}
