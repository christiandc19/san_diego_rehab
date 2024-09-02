import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import CaseManagement from '../components/Programs-CaseManagement/CaseManagement'
import CaseManagementSection from '../components/Programs-CaseManagement/CaseManagementSection'
import ContactForm from "../components/contact/ContactForm";



const CaseManagementPage = () => {
  return (
    <>
    <Navbar /> 
    <CaseManagement />
    <CaseManagementSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default CaseManagementPage