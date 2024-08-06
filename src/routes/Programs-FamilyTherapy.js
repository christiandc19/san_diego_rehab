import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FamilyTherapy from '../components/Programs-FamilyTherapy/FamilyTherapy'
import FamilyTherapySection from '../components/Programs-FamilyTherapy/FamilyTherapySection'
import Contact2 from "../components/contact/Contact2";



const FamilyTherapyPage = () => {
  return (
    <>
    <Navbar /> 
    <FamilyTherapy />
    <FamilyTherapySection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default FamilyTherapyPage