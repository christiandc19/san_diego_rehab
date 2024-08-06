import React from 'react';
import Therapist from '../../assets/man_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Adhd = () => {
  return (
    <div className='mentalHealth'>
      <div className='mentalHealthContent'>
        <div className='mentalHealthFlex'>

          <div className='mentalHealthImage'>
            <img src={Therapist} alt="activities" />
          </div>


          <div className='mentalHealthText'>
            <h1>Understanding ADHD: Attention-Deficit/Hyperactivity Disorder</h1>
            <p>ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning or development. While it is commonly diagnosed in children, ADHD can continue into adolescence and adulthood, affecting individuals at various stages of their lives.</p>
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

export default Adhd;




