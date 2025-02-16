import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume.pdf'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import Fade from "react-reveal/Fade";
function Home() {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className='container home-content'>
          <Fade right>
            <h2>Hi 👋 I'a m</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ['Hello', 'Mern Stack Developer !'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className='home-buttons'>
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9773459630"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className='btn btn-cv' href={Resume} download="resume.pdf">Download Resume</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
