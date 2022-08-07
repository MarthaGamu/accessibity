import React from 'react'

import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Heading from '../components/Heading'

export default function Home() {
  return (
    <div> 
        <Navigation/> 
        <Banner/>
        <Heading/>
        <Card/>
        <Footer/>
    </div>
  )
}
