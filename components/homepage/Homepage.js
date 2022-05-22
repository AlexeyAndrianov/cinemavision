import React from 'react'
import HomepageHeader from './body/HomepageHeader'
import HomepageBody from './body/HomepageBody'
import HomepageFooter from './body/HomepageFooter'

export default function Homepage() {
  return (
        <> 
        <div>{HomepageHeader}</div>
        <div>{HomepageBody}</div>
        <div>{HomepageFooter}</div>
        </>
    )
}
