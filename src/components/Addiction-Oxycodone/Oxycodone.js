import React from 'react';
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Oxycodone = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Understanding Oxycodone Addiction</h1>
            <p>Oxycodone is a powerful opioid pain medication prescribed to manage moderate to severe pain. It works by altering the way the brain and nervous system respond to pain. While effective for pain relief, oxycodone has a high potential for abuse and addiction due to its euphoric effects.</p>
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

export default Oxycodone;




// background: url('https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg') no-repeat center center/cover;
