import React from 'react';
import Therapist from '../../assets/woman_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Mdma = () => {
  return (
    <div className='addiction'>
      <div className='addictionContent'>
        <div className='addictionFlex'>
          <div className='addictionText'>
            <h1>Understanding MDMA Addiction: A Comprehensive Guide</h1>
            <p>MDMA, commonly known as Ecstasy or Molly, is a popular synthetic drug known for its psychoactive effects. While it is often associated with recreational use at parties and music festivals, MDMA can lead to serious addiction and long-term health consequences.</p>
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

export default Mdma;
