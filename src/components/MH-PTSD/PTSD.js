import React from 'react';
import Therapist from '../../assets/man_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const PTSD = () => {
  return (
    <div className='mentalHealth'>
      <div className='mentalHealthContent'>
        <div className='mentalHealthFlex'>

          <div className='mentalHealthImage'>
            <img src={Therapist} alt="activities" />
          </div>


          <div className='mentalHealthText'>
            <h1>Understanding PTSD: Hope and Healing</h1>
            <p>Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event. It can affect anyone, regardless of age, gender, or background. Common events that may lead to PTSD include military combat, natural disasters, accidents, assaults, and severe illness.</p>
            <div className='mentalHealthBtn'>
              <div className='hero-btn1'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <button>Make an appointment</button>
                  </Link>
                </LinkRoll>
              </div>

            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default PTSD;




