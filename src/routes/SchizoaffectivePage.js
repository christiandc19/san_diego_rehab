import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SCHIZOAFFECTIVE from '../components/MH-Schizoaffective/Schizoaffective'
import SchizoaffectiveSection from '../components/MH-Schizoaffective/SchizoaffectiveSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection'


const Schizoaffective  = () => {
  return (
    <>
    <Navbar /> 
    <SCHIZOAFFECTIVE />
    <SchizoaffectiveSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Schizoaffective 