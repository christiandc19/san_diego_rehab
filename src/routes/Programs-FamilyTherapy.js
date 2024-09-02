import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FamilyTherapy from '../components/Programs-FamilyTherapy/FamilyTherapy'
import FamilyTherapySection from '../components/Programs-FamilyTherapy/FamilyTherapySection'
import ContactForm from "../components/contact/ContactForm";



const FamilyTherapyPage = () => {
  return (
    <>
    <Navbar /> 
    <FamilyTherapy />
    <FamilyTherapySection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default FamilyTherapyPage