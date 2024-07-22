import React from 'react';
import './project.css';
import Spin from "react-reveal/Spin";

const Project=() =>{
  return (
    <>
      <div className='project' id='project'>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Recent Project
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here Are My Recent Project:-e-Gram is a digital platform designed to enhance the efficiency and accessibility of rural administrative services. It provides a centralized system for managing various government schemes and services, enabling villagers to access important information and resources easily. The website offers features such as online applications for certificates, land records management, and grievance redressal. It aims to bridge the gap between rural areas and government offices, reducing the need for physical visits and paperwork.
          it serves as a resource hub for educational materials, health services, and agricultural information, empowering villagers with the knowledge they need.  
        </p>
        <div className='row' id='ads'>
          <Spin>
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
            </Spin>
        </div>
      </div>
    </>
  );
}

export default Project;
