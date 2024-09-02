import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import Section2 from '../components/section2/Section2';
import AboutSection from '../components/about/AboutSection';
import ContactForm from '../components/contact/ContactForm';

const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <AboutSection />
           <Section2 />
           <ContactForm />
           <Footer />
        </>
    )
}

export default AboutPage