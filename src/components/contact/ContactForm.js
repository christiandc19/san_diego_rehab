import React, { useRef, useState } from "react";
import './ContactForm.css';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();

        // Change button text after sending the message
        setButtonText("Message Sent!");

        // Service Id, Template Id, Public Key (Account Tab)
        emailjs.sendForm("service_bdfl0ie", "template_s459jd6", form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="contactform2">
            <div className="contact2-container">
                <div className="contact2-header contact2-container">
                    <h1>DO YOU NEED URGENT HELP?</h1>
                    <p>Our Mental Health and Addiction Support team is here to help.</p>
                </div>

                <div className="contact-form-content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div><br/>
                            <div className="text-one">430 Nutmeg Street Suite 200,</div>
                            <div className="text-two">San Diego, Ca 92103</div>
                        </div>

                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div><br/>
                            <div className="text-one"><a href="tel:3239403600">+1 (323) 940-3600</a></div>
                        </div>

                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div><br/>
                            <div className="text-one">info@SanDiegoRehab.biz</div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="topic-text">Send us a message</div> <br/>
                        <p className="topic-text-p">Please call our admission department if you have any questions.</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-box">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="input-box">
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="input-box">
                                <input type="tel" name="phone" placeholder="Your Phone" required />
                            </div>
                            <div className="input-box">
                                <input type="text" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="input-box message-box">
                                <textarea name="message" rows="4" placeholder="How can we help?" required></textarea>
                            </div>

                            <div className="disclaimer">
                                <p>San Diego Rehab needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                      <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                                    </LinkRoll></p>
                            </div>


                            <input className="contact-btn" type="submit" value={buttonText} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
