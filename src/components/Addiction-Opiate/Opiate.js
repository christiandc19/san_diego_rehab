import React from 'react';
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Opiate = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Understanding Opiate Addiction</h1>
            <p>Opiates are a class of drugs naturally derived from the opium poppy plant. They are primarily used for pain relief and include drugs such as morphine, codeine, and thebaine. </p>
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

export default Opiate;




// background: url('https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg') no-repeat center center/cover;
