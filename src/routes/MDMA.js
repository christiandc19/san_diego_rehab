import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MDMA from '../components/Addiction-MDMA/Mdma'
import MdmaSection from '../components/Addiction-MDMA/MdmaSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Mdma = () => {
  return (
    <>
    <Navbar /> 
    <MDMA />
    <MdmaSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Mdma