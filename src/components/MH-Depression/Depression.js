import React from 'react';
import Therapist from '../../assets/man_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import '../MH-Stylesheet/MentalHealthHero.css'

const Depression = () => {
  return (
    <div className='mentalHealth'>
      <div className='mentalHealthContent'>
        <div className='mentalHealthFlex'>

          <div className='mentalHealthImage'>
            <img src={Therapist} alt="activities" />
          </div>


          <div className='mentalHealthText'>
            <h1>Understanding Depression</h1>
            <p>Depression is a common mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. </p>
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

export default Depression;




