import React from 'react'
import HomepageHeader from './header/HomepageHeader'
import HomepageBody from './body/HomepageBody'
import HomepageFooter from './footer/HomepageFooter'
import {HomepageHeaderContainer} from "../styles/HomepageHeaderContainer.styled"
import {HomepageBodyContainer} from '../styles/HomepageBodyContainer.styled'
import {HomepageFooterContainer} from '../styles/HomepageFooterContainer.styled'

export default function Homepage() {
  return (
    <>
      <HomepageHeaderContainer>
        <HomepageHeader />
      </HomepageHeaderContainer>
      <HomepageBodyContainer>
        <HomepageBody />
      </HomepageBodyContainer>
      <HomepageFooterContainer>
        <HomepageFooter />
      </HomepageFooterContainer>
    </>
  )
}
