import React from 'react';
import Therapist from '../../assets/man_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const BipolarDisorder = () => {
  return (
    <div className='mentalHealth'>
      <div className='mentalHealthContent'>
        <div className='mentalHealthFlex'>

          <div className='mentalHealthImage'>
            <img src={Therapist} alt="activities" />
          </div>


          <div className='mentalHealthText'>
            <h1>Understanding Bipolar Disorder</h1>
            <p>Bipolar Disorder is a mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).</p>
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

export default BipolarDisorder;




