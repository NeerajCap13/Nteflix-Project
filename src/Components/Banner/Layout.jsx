import React from 'react'
import Slider from '../Slider/Slider'
import MoreInfo from '../ContentInfo/MoreInfo'
import Accordion from '../Accordion/Accordion'
import Footer from '../Footer/Footer'
import '../Banner/Layout.css'

function Layout() {
  return (
    <div className='layout'>
            <Slider />
            <MoreInfo />
            <Accordion />
            <Footer />
    </div>
  )
}

export default Layout
