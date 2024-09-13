import React from 'react';
import './about.css'
// import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <>
      <Fade left>
        <div className='about' id='about'>
          <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
              <img src='./images/me1.jpg' alt='Profile_pic' />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content'>
              <h1>About me</h1>
              <p>
                Hello! I'm jayesh, a passionate and enthusiastic MERN Stack Developer, fresh out of [The Future Computer Science college (Keshod)]. With a strong foundation in web development, I specialize in creating dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. My journey into the world of coding began with a curiosity to understand how websites work and has since evolved into a full-fledged career path that I am excited to pursue.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default About;
