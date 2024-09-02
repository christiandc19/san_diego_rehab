import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MH from '../components/MH/MH'
import MentalHealthMenu from '../components/menus/MentalHealthMenu';

import InsuranceSection from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'




const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <MH />
    <MentalHealthMenu />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default MHealth