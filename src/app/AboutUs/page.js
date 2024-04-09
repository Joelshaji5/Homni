import React from 'react'
import AboutHero from '../Components/Components/About/AboutHero'
import AboutHero2 from '../Components/Components/About/AboutHero2'
import Navbar from '../Components/Navbar/Navbar'
import NavbarMb from '../Components/Navbar/NavbarMb'
import StickyNavbar from '../Components/Navbar/Navstyle'

function AboutUs() {
  return (
    <div>
      {/* <Navbar /> */}
      <StickyNavbar />
      <NavbarMb />
      <AboutHero />
      <AboutHero2 />
    </div>
  )
}

export default AboutUs