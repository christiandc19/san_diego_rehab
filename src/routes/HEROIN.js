import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HEROIN from '../components/Addiction-Heroin/Heroin'
import HeroinSection from '../components/Addiction-Heroin/HeroinSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Heroin = () => {
  return (
    <>
    <Navbar /> 
    <HEROIN />
    <HeroinSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Heroin