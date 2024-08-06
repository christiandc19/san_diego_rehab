import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import METH from '../components/Addiction-Meth/Meth'
import MethSection from '../components/Addiction-Meth/MethSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Meth = () => {
  return (
    <>
    <Navbar /> 
    <METH />
    <MethSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Meth