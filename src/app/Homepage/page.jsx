import React from 'react'
import Hero from '../Components/HeroComponent/Hero'
import Hero2 from '../Components/HeroComponent/Hero2'
import Hero3 from '../Components/HeroComponent/Hero3'
import Essentials from '../Components/HeroComponent/Essentials'
import Hero5Denatlspa from '../Components/HeroComponent/DentalSpa'
import Patienttestimonials from '../Components/HeroComponent/PatienttesTimonials'
import BookingForm from '../Components/Components/Form/BookingForm'
import Footer from '../Components/Components/Footer/Footer'
import Form from '../Components/Components/Form/FormPC'
import VedioBg from '../Components/HeroComponent/VedioBg'
import MetaPixel from '../util/meta/metaPixel'
function HomePage() {
  return (
    <>
    <MetaPixel />
    <Hero />
    <BookingForm />
    <Hero2 />
    <Hero3 />
    <Essentials />
    <Hero5Denatlspa />
    <VedioBg />
    <Patienttestimonials />
    <BookingForm />
    <Form />
    <Footer />

    
    </>

    )
}

export default HomePage