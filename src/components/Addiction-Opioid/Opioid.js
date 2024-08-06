import React from 'react';
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Opioid = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Understanding Opioid Addiction</h1>
            <p>This article delves into the nature of opioid addiction, its causes, symptoms, and treatment options, providing a comprehensive understanding for those seeking information or support.</p>
            <div className='addictionBtn'>
              <div className='hero-btn1'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <button>Make an appointment</button>
                  </Link>
                </LinkRoll>
              </div>

            </div>
          </div>

          <div className='addictionImage'>
            <img src={Therapist} alt="activities" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opioid;




// background: url('https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg') no-repeat center center/cover;
