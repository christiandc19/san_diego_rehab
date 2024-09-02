import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIATE from '../components/Addiction-Opiate/Opiate'
import OpiateSection from '../components/Addiction-Opiate/OpiateSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <OPIATE />
    <OpiateSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Fentanyl