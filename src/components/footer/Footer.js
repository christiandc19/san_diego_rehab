import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from "../../assets/nav-logo-cl.png";
import "./FooterStyles.css";
import DHCS from "../../assets/DHCS-logo2.png";
// import JointCommission from "../../assets/the_joint_commission_logo.png";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div className="top container">

            <div className="logo-footer">
              <img src={logo} alt="Sacramento Rehab Logo" loading="lazy"/>
            </div>

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <BsFillArrowUpCircleFill className="icon" />
            </LinkRoll>
          </div>



          <div className="column-container container">

            <div className="column">
              <h3>COMPANY</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mission">
                  <p>Our Mission</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/about-us">
                  <p>About Us</p>
                </Link>
              </LinkRoll>
            </div>

            <div className="column">
              <h3>Navigation</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/">
                  <p>Home</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/insurance">
                  <p>Insurance</p>
                </Link>
              </LinkRoll>


              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </LinkRoll>
            </div>


            <div className="column">
              <h3>programs</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health">
                  <p>Mental Health Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse">
                  <p>Substance Abuse Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/jobs">
                  <p>Job Assistance Program</p>
                </Link>
              </LinkRoll>
            </div>


            <div className="column">
              <h3>Treatment</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/php">
                  <p>Partial Hospitalization Program</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/iop">
                  <p>Intensive Outpatient Program</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/op">
                  <p>Outpatient Program</p>
                </Link>
              </LinkRoll>
            </div>


          </div>



          <div className="certification">

            <div className="dhcs">
                  <h3>Certified by the State Department of Health Care Services</h3>
                  <p>Certification Number: 370230AP <br /> Expiration Date: 9/30/2026</p>
                  <br />
                  <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities"
                  target="_blank"
                  rel="noreferrer">( View License & Certification Information here ).</a>
                      <div className='dhcsImage'>
                          <img
                          src={DHCS}
                          alt="DHCS Logo"
                          loading="lazy"
                          />
                      </div>
              </div>
{/* 
              <div className="joint">
                  <h3>San Diego Rehab is accredited by The Joint Commission and have been awarded its Gold Seal of Approval™</h3>
                  
                      <div className='jointImage'>
                          <img
                          src={JointCommission}
                          alt="Joint Commission Logo"
                          loading="lazy"
                          />
                      </div>
              </div> */}

            </div>


          <p className="copyright">
            <p>
              &copy; 2023 San Diego Rehab. All rights reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
