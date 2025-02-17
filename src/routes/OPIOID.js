import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIOID from '../components/Addiction-Opioid/Opioid'
import OpioidSection from '../components/Addiction-Opioid/OpioidSection'
import ContactForm from '../components/contact/ContactForm'


const Opioid = () => {
  return (
    <>
    <Navbar /> 
    <OPIOID />
    <OpioidSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Opioid