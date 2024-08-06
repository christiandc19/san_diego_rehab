import React from "react";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

import "./TherapyMH.css";
import { Link } from "react-router-dom";


import Anxiety from '../../assets/anxiety.webp'
import Depression from '../../assets/depression.webp'
import Bipolar from '../../assets/bipolar.webp'
import Stress from '../../assets/stress-disorder.webp'

const TherapyMH = () => {


  
  return (
    <>
      <div className="TherapyMH">
        <div className="content">

        <Zoom duration={2000}>
        <div className="TherapyMH-header">
              <div className="left-content container">
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>Compassionate care for your mental health journey</h2>
              </div>
            </div>
          </Zoom>



          

          <div className="mh-flex container">


            <div className="card">

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/anxiety">


                <div className="cardImage">
                  <img src={Anxiety} alt="Man suffering from anxiety" loading="lazy" />
                </div>

                  <h1>ANXIETY</h1>

                  </Link>
                </LinkRoll>

                <p>
                Anxiety disorder is a mental health condition characterized by excessive, persistent worry and fear about everyday situations.
                </p>
              </div>


            <div className="card">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/depression">
                      <div className="cardImage">
                        <img src={Depression} alt="Man suffering from anxiety" loading="lazy" />
                      </div>

                  <h1>DEPRESSION</h1>
                  </Link>
                    </LinkRoll>

                <p>
                Depression Disorder is a common mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities.
                </p>
              </div>


            <div className="card">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/bipolar-disorder">
                <div className="cardImage">
                      <img src={Bipolar} alt="Man suffering from anxiety" loading="lazy" />
                    </div>
                      <h1>BIPOLAR DISORDER</h1>
                      </Link>
                    </LinkRoll>
                    <p>
                    Bipolar Disorder is a mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). 
                    </p>
                  </div>

            <div className="card">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/acute-stress-disorder">
                        <div className="cardImage">
                          <img src={Stress} alt="Man suffering from anxiety" loading="lazy" />
                        </div>
                        <h1>STRESS DISORDER</h1>
                      </Link>
                </LinkRoll>

                <p>
                Stress disorders encompass a range of conditions triggered by significant stress, including acute stress disorder and post-traumatic stress disorder (PTSD).
                </p>
              </div>
            </div>


          <div className="TherapyMH-btn">
            <div className='hero-btn1'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health"><button>VIEW ALL</button></Link>
                </LinkRoll>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default TherapyMH;
