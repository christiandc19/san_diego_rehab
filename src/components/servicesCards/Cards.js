import React from "react";
import "./Cards.css";
import Zoom from 'react-reveal/Zoom';

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/card1.webp";
import Card2 from "../../assets/card2.webp";
import Card3 from "../../assets/card3.webp";

const Cards = () => {
  return (
    <>
      <div id="cards">
      <Zoom duration={2000}>

        <div className="main-cards-header container">
          <h1>OUR PROGRAMS</h1>
          <h2>Dedicated to your <span>recovery</span> and <span>well being</span> .</h2>
          <p>At San Diego Rehab Treatment Center, clients
                receive individual therapy alongside a range of additional
                treatments, including relapse prevention, trauma therapy,
                mindfulness meditation, yoga, and more. We offer support that
                clients need to allow them to gradually go back to treatment.</p>
        </div>
      </Zoom>


      <div className="cards-flex">


        <div className="services-card">
          <img src={Card1} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Partial Hospitalization</h1>
              <p className="card-text">A Partial Hospitalization Program (PHP) is a structured mental health treatment program that provides intensive care without requiring an overnight stay. It is designed for individuals who need a higher level of care than traditional outpatient services but do not require the 24-hour supervision of inpatient hospitalization.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/php">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>


        <div className="services-card">
          <img src={Card2} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Intensive Outpatient</h1>
              <p className="card-text">An Intensive Outpatient Program (IOP) is a type of mental health and substance abuse treatment program that provides a higher level of care than traditional outpatient therapy but does not require the patient to stay overnight at a treatment facility. </p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/iop">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>


        <div className="services-card">
          <img src={Card3} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Outpatient</h1>
              <p className="card-text">An Outpatient Program (OP) is a type of mental health and substance abuse treatment program designed for individuals who do not require the intensive level of care provided by inpatient or residential treatment facilities. It offers flexibility, allowing participants to live at home and maintain their daily routines while receiving therapeutic support. </p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/op">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Cards;
