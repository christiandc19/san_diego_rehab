import React from 'react';
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Fentanyl = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Understanding Fentanyl Addiction</h1>
            <p>Fentanyl is a powerful synthetic opioid that is similar to morphine but is 50 to 100 times more potent. It is typically used to treat patients with severe pain, especially after surgery or for those with chronic pain who are physically tolerant to other opioids. Fentanyl is also produced and used illegally, often mixed with other drugs such as heroin and cocaine, increasing the risk of overdose.</p>
            <div className='addiction-btn'>
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

export default Fentanyl;
