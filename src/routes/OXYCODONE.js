import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OXYCODONE from '../components/Addiction-Oxycodone/Oxycodone'
import OxycodoneSection from '../components/Addiction-Oxycodone/OxycodoneSection'
import ContactForm2 from '../components/contact/Contact2'
import InsuranceSection from '../components/insurance/InsuranceSection'


const Oxycodone = () => {
  return (
    <>
    <Navbar /> 
    <OXYCODONE />
    <OxycodoneSection />
    <InsuranceSection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Oxycodone