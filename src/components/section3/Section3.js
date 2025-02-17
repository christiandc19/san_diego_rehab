import React from "react";
import "./Section3.css";
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

import wrapper1 from "../../assets/section3-img1.webp";

const Section3 = () => {
  return (
    <>
      <div className="section3 ">
        <div className="section3-content container">
          <div className="section3-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>

          <div className="section3-right">
            <h1>Treatment</h1> <br />
            <hr />

            <h2>
              We care about your mental health.
            </h2>
            <p>
              All treatment clients will have a recovery/treatment plan
              developed within 30 days of admission. Measurement and
              reassessment of treatment plan progress happen on a weekly basis
              through the weekly summary. <br />
              <br /> In the weekly summary, the drug and alcohol counselor will
              ensure that action steps to be taken by client or counselor are on
              target and that the action step achievements will enable
              resolution of the objective. All treatment plans are reviewed by
              and signed off on by the clinical director.
            </p>

            <div className='section3-btn'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/treatment">
                    <button>Learn More</button>
                  </Link>
                </LinkRoll>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
