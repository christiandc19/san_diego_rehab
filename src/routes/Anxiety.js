import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ANXIETY from '../components/MH-Anxiety/Anxiety'
import AnxietySection from '../components/MH-Anxiety/AnxietySection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection'


const Anxiety = () => {
  return (
    <>
    <Navbar /> 
    <ANXIETY />
    <AnxietySection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Anxiety