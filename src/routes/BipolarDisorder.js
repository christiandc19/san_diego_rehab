import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BIPOLARDISORDER from '../components/MH-BipolarDisorder/BipolarDisorder'
import BipolarDisorderSection from '../components/MH-BipolarDisorder/BipolarDisorderSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const BipolarDisorder = () => {
  return (
    <>
    <Navbar /> 
    <BIPOLARDISORDER />
    <BipolarDisorderSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default BipolarDisorder