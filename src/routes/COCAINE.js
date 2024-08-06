import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import COCAINE from '../components/Addiction-Cocaine/Cocaine'
import CocaineSection from '../components/Addiction-Cocaine/CocaineSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Cocaine = () => {
  return (
    <>
    <Navbar /> 
    <COCAINE />
    <CocaineSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Cocaine