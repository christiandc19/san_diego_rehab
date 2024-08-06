import React from 'react'
import './Section1.css'
import img1 from "../../assets/therapy-session-young-man.webp";


const Section1 = () => {
  return (
    <>

    <div className='section1'>
        <div className="section1-content container">
          <div className='section1-left'>
                <h1>Welcome To San Diego Rehab</h1>
                <h2>Who We Are?</h2>
                <hr />
                <p>
                Welcome to San Diego Rehab, where your journey to recovery begins. We are a dedicated team of healthcare professionals committed to providing compassionate and comprehensive care for individuals struggling with addiction and mental health issues. Our state-of-the-art facility, located in the heart of San Diego, offers a serene and supportive environment to help you heal and thrive.
                </p>
          </div>

          <div className='section1-right'>
            <img src={img1} alt="Calm man in front of the sea" loading="lazy" />
          </div>

        </div>
    </div>
    </>
  )
}

export default Section1
