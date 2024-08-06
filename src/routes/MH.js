import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MH from '../components/MH/MH'
import MentalHealthMenu from '../components/menus/MentalHealthMenu';

import InsuranceSection from '../components/insurance/InsuranceSection'
import Contact2 from '../components/contact/Contact2'




const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <MH />
    <MentalHealthMenu />
    <InsuranceSection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default MHealth