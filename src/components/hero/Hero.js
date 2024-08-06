import React from 'react';
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';
import './Hero.css';
import Zoom from 'react-reveal/Zoom';

import BgVideo from '../../assets/palmtree.mp4';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />
                <div className="hero-container">
                    
                <div className="content">
                    <Zoom duration={2000}>
                        <h1>Find Peace and Wellness at <br/><span>SAN DIEGO REHAB</span> </h1>
                        <h2>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                        <br />
                    </Zoom>

                    <Zoom duration={3000}>
                        <div className='hero-btn'>
                            <div className='hero-btn1'>
                                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                    <Link to="/contact"><button>Contact Us</button></Link>
                                </LinkRoll>
                            </div>

                            <div className='hero-btn2'>
                                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                    <Link to="/treatment"><button>Learn More</button></Link>
                                </LinkRoll>
                            </div>
                        </div>
                    </Zoom>
                </div>

                </div>
            </div>
        </>
    );
}

export default Hero;
