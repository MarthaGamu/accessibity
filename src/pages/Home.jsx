import React from 'react'

import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import NewUseState from '../components/NewUseState'
import Heading from '../components/Heading'

export default function Home() {
  return (
    <div> 
        <Navigation/> 
        <Banner/>
        <Heading/>
        <Card/>
        <NewUseState name='martha'/>
        <Footer/>
    </div>
  )
}
