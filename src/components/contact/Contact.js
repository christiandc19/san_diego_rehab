import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'



const Contact = () => {

    return (
      <>
      <div className='contact-hero main-menu'>
            <div className="contact-hero-content">
                  <Fade top>
                        <h1>HAVE SOME QUESTIONS?</h1>
                        <h2>Our Addiction and Recovery Support team is available to assist you.</h2>
                        <h3><a href="tel:3237920502">323 792-0605</a></h3>
                  </Fade>
            </div>
      </div>

      <ContactForm />

      </>
    )
}

export default Contact