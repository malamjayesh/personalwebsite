import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css'
import { MdSchool } from "react-icons/md";
import {FaSchool} from 'react-icons/fa'

const Education=()=> {
  return (
    <>
      <div className='education' id='education'>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Detail
        </h2>
        <hr />
        
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">12th(Commerce)</h3>
    <h4 className="vertical-timeline-element-subtitle">Complete With 73%</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">BCA</h3>
    <h4 className="vertical-timeline-element-subtitle">The Future computer science collage (keshod)</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    </>
  );
}

export default Education;
