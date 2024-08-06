import React from 'react';
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const AlcoholHero = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Alcoholism</h1>
            <p>Alcohol addiction can lead to a range of health problems, including liver disease, cardiovascular issues, and neurological damage. Alcoholism affects individuals physically, emotionally, and socially, often resulting in strained relationships and impaired functioning in daily life.</p>
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

export default AlcoholHero;
