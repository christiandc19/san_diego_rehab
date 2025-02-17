import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FENTANYL from '../components/Addiction-Prescriptions/Prescriptions'
import FentanylSection from '../components/Addiction-Prescriptions/PrescriptionsSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection'


const Prescriptions = () => {
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

export default Prescriptions
