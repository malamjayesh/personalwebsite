import './contact.css'
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ewryxwl', 'template_mgkuima', form.current, {
        publicKey: 'vj5NVlMvokI63qjOc',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className=" contact" id="contact">
          <RubberBand>
            <h2 className="col-12 mt-15 mb-1 text-center text-uppercase">
              Contact Us
            </h2>
            <hr />
          </RubberBand>
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <Fade bottom>
                      <img
                        src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                        alt="ocontact"
                        className="image"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <Fade bottom>
                  <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                      <div className="row">
                        <h6 className='icon'>
                          <a href="https://www.linkedin.com/in/malam-jayesh-32ab3a282/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin color="blue" size={30} className="ms-2" />
                          </a>
                          <a href="https://github.com/malamjayesh/jayesh/tree/main" target="_blank" rel="noopener noreferrer">
                            <BsGithub color="black" size={30} className="ms-2" />
                          </a>
                          <a href="https://www.facebook.com/jayesh.malam.94?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <BsFacebook color="blue" size={30} className="ms-2" />
                          </a>
                          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <BsInstagram color="blue" size={30} className="ms-2" />
                          </a>
                          <a href="https://wa.me/9773459630" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp color="blue" size={30} className="ms-2" />
                          </a>
                        </h6>
                      </div>

                      <div className="row px-3 mb-4">
                        <div className="line" />
                        <small className="or text-center">OR</small>
                        <div className="line" />
                      </div>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="mb-3"
                        // value={name}
                        // onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter Your Email Address"
                          className="mb-3"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="Write your message"
                          className="mb-3"
                        // value={msg}
                        // onChange={(e) => setMsg(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button" value="Send">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
