import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PTSD from '../components/MH-PTSD/PTSD'
import PTSDSection from '../components/MH-PTSD/PTSDSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import Contact from '../components/contact/ContactForm'


const Ptsd = () => {
  return (
    <>
    <Navbar /> 
    <PTSD />
    <PTSDSection />
    <InsuranceSection />
    <Contact />
    <Footer />
     </>
  )
}

export default Ptsd