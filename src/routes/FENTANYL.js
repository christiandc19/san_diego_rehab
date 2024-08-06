import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FENTANYL from '../components/Addiction-Fentanyl/Fentanyl'
import FentanylSection from '../components/Addiction-Fentanyl/FentanylSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <FENTANYL />
    <FentanylSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Fentanyl