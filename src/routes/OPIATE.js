import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIATE from '../components/Addiction-Opiate/Opiate'
import OpiateSection from '../components/Addiction-Opiate/OpiateSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import Contact2 from '../components/contact/Contact2'


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <OPIATE />
    <OpiateSection />
    <InsuranceSection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Fentanyl