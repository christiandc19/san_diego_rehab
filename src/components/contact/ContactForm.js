import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Popup message after send button is clicked
        const feedbackEl = document.querySelector(".feedback");
        feedbackEl.classList.remove("hidden");
        setTimeout(() => {
            feedbackEl.classList.add("hidden");
        }, 4000);

        // Service Id, Template Id, Public Key (Account Tab)
        emailjs.sendForm('service_bdfl0ie', 'template_g0g3pud', form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="contactform">
            <div className="contact2-header contact2-container">
                <h1>DO YOU NEED URGENT HELP?</h1>
                <p>Our Addiction and Recovery Support team is available to assist you.</p>
            </div>

            <section className="container">
                <div className="contact-content">
                    <div className="footer_get_touch_inner">
                        <div className="get_form_inner">
                            <div className="get_form_inner_text">
                                <h3>Get In Touch</h3>
                                <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
                            </div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="inputs">
                                    <input type="text" name='name' placeholder='Your Name' required /> <br/>
                                    <input type="email" name='email' placeholder='Your Email' required /> <br/>
                                    <input type="tel" name='phone' placeholder='Your Phone' pattern="[0-9]*" maxLength="15" required /> <br/>
                                    <input type="text" name='subject' placeholder='Subject' required /> <br/>
                                </div>
                                <div>
                                    <textarea name="message" placeholder="How can we help?" cols="30" rows="10" required></textarea>
                                    <input type="submit" value="Submit" />
                                </div>

                                <div className="textarea2 feedback hidden">
                                    <textarea name="message2" cols="30" rows="3" readOnly>Message Sent to San Diego Rehab!</textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13415.214720617382!2d-117.1674881!3d32.7489727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95357e7b9353d%3A0x690f3016e4d2df9b!2s430%20Nutmeg%20St%2C%20San%20Diego%2C%20CA%2092103%2C%20USA!5e0!3m2!1sen!2sus!4v1614036420286!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                    </div>
                </div>
            </section>

            <div className="contact-cards-container">
                <div className="get_form_inner2">
                    <h2>CALL US</h2>
                    <p><AiOutlinePhone /><a href="tel:3239403600"> +1 (323) 940-3600</a></p>
                </div>

                <div className="get_form_inner2">
                    <h2>EMAIL</h2>
                    <p><AiOutlineMail /> info@SanDiegoRehab.biz </p><br />
                </div>

                <div className="get_form_inner2">
                    <h2>LOCATION</h2>
                    <p><BsFillPinMapFill /> 430 Nutmeg Street Suite 200, San Diego, Ca 92103</p>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
