import React from 'react';
import Therapist from '../../assets/man_therapist.webp';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const Schizophrenia = () => {
  return (
    <div className='mentalHealth'>
      <div className='mentalHealthContent'>
        <div className='mentalHealthFlex'>

          <div className='mentalHealthImage'>
            <img src={Therapist} alt="activities" />
          </div>


          <div className='mentalHealthText'>
            <h1>Understanding Schizophrenia</h1>
            <p>Schizophrenia is a chronic mental health disorder that affects how a person thinks, feels, and behaves. Individuals with schizophrenia may seem like they have lost touch with reality, which can be distressing for both the person affected and those around them.</p>
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

export default Schizophrenia;




