import React from 'react';
import './Report.css'; 
import Reportimg from '../assets/Report.png'
import imgBackground from '../assets/img-background.png'

function Report() {
  return (
    <div className="report-container">
      <div className="left-content">
        <h2 className="section-title">Real-Time Insightful Reporting</h2>
        <p className='section-description'>
          Interior brings 41 years of interior designs experience
          <br />
          right to your home or office. Our design professionals
          <br />
          are equipped to help you determine the products and
          <br />
          design that work best for our customers.
        </p>

        <ul className='feature-list'>
          <li>Create folders and files</li>
          <li>Set up an internet connection</li>
          <li>Connect your computer </li>
          <li>Navigate all of the programs</li>
          <li>Operating system</li>
        </ul>
        <button className='getStartButton'>GET STARTED</button>
      </div>

      <div className="right-content1">
        <img
          src={imgBackground}
          alt="Background Image"
          className="background-image"
        />
        <img
          src={Reportimg}
          alt="Report image"
          className="report-image"
        />
      </div>
    </div>
  );
}

export default Report;
