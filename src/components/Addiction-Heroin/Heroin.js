import React from 'react';
import '../AddictionStylesheet/AddictionHero.css'
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Heroin = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Understanding Heroin Addiction</h1>
            <p>Understanding the complexities of heroin addiction is crucial for developing effective treatment strategies and supporting those affected by this devastating condition.</p>
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

export default Heroin;
