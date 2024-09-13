import React from 'react';
import './project.css';
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

const Project = () => {
  return (
    <>
      <div className='project' id='project'>
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Recent Project
          </h2>
          <hr />
          <span className="pb-3 text-center">
            👉 Here Are My Recent Project:-The objective of the Digital E-Gram website project is to create an accessible and user-friendly digital platform that enables village residents to efficiently access and utilize various local services, stay informed about community announcements, and find essential resources. By digitizing these services, the project aims to enhance community engagement, streamline service requests, and improve communication between residents and local authorities, ultimately contributing to better local governance and quality of life for the villagers.
          </span>
        </RubberBand>
        <div className='row' id='ads'>
          <Fade bottom>
            <div className=''>
              <div className='card rounded'>
                <div className='card-image'>
                  {/* <span className='card-notify-badge'>Full Stack</span> */}
                  <img src='https://pbs.twimg.com/media/E_4yzRUVUAMSzY9.jpg:large' alt='' />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                  <span className='card-detail-badge'>Html</span>
                  <span className='card-detail-badge'>CSS</span>
                  <span className='card-detail-badge'>Bootstrap</span>
                  <span className='card-detail-badge'>JavaScript</span>
                  <span className='card-detail-badge'>Php</span>
                  <span className='card-detail-badge'>MySql</span>
                </div>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <h5 className='text-uppercase'>Digital E-gram Website</h5>
                  </div>
                  <a className='ad-btn' href='viewx'>View</a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Project;
