import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-section-min.webp";

const AboutSection = () => {
  return (
    <>

      <div className="aboutSection">

        <div className="aboutContent container">

        <div className="aboutSectionFlex">

        <div className="aboutSectionImage">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="aboutSectionText">

            <h1>Our Mission</h1>
            <p>
            Our mission is to empower individuals to overcome their challenges and achieve lasting recovery. We believe in treating the whole person, not just the symptoms, and we are dedicated to delivering personalized care tailored to each individual's unique needs.</p>
            <h1>Our Approach</h1>
            <p>At San Diego Rehab, we combine evidence-based practices with holistic therapies to provide a well-rounded treatment experience. Our multidisciplinary team includes doctors, therapists, counselors, and support staff who work together to create customized treatment plans. Our programs are designed to address the physical, emotional, and spiritual aspects of recovery, ensuring comprehensive and effective care.</p>
            <h1>Our Values</h1>
            <ul>
              <li>Compassion: We treat everyone with kindness, understanding, and respect.</li>
              <li>Integrity: We uphold the highest standards of honesty and ethics in everything we do.</li>
              <li>Excellence: We strive for excellence in all aspects of care and service</li>
              <li>Innovation: We embrace new ideas and approaches to improve treatment outcomes.</li>
              <li>Collaboration: We believe in the power of teamwork and partnerships to enhance the recovery process.</li>
            </ul>


          </div>

       </div>



        </div>
      </div>
    </>
  );
};

export default AboutSection;
