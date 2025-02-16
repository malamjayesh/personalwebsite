import React from 'react';
import './menus.css'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
import {FcAbout,FcHome,FcReadingEbook,FcVideoProjector,FcBusinessContact, FcBiotech } from "react-icons/fc";

const Menus=({toggle})=> {
  return (
    <>
    { toggle ? (
      <> 
      <Zoom>
      <div className='navbar-profile-pic'>
      <img src="./images/me1.jpg" alt='profile' />
  </div>
      </Zoom>
    <Fade left>
  <div className='nav-items'>
    <div className='nav-item'>
      <div className='nav-link'>
        <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
        <FcHome/>
        Home
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
        <FcAbout/>
        About
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
        <FcReadingEbook/>
        Education
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
        < FcBiotech />
        Tech Stack
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
        <FcVideoProjector/>
        Project
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
        <FcBusinessContact/>
        Contact
        </Link>
        </div>
    </div>
  </div>
  </Fade>
  </>
    ):(
      <>
      
  <div className='nav-items'>
    <div className='nav-item'>
      <div className='nav-link'>
      <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
        <FcHome/>
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
        <FcAbout/>
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
        <FcReadingEbook/>
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
        < FcBiotech />
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
        <FcVideoProjector/>
        </Link>
        </div>
        <div className='nav-link'>
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
        <FcBusinessContact/>
        </Link>
        </div>
    </div>
  </div>
      </>
    )}
  
    </>
  );
};

export default Menus;
