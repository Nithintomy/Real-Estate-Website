import React from 'react'
import './LeadSystem.css'
import Leadmanagement from '../assets/Lead-Management.png'
import imgBackground from '../assets/img-background.png'


function LeadSystem() {
    return (
        <div className="target-container">
    
          <div className="content-container">
            <div className="left-content">
              <img src={imgBackground} alt="Image Background" className="background-image" />
              <img src={Leadmanagement} alt="Create Profile" className="create-profile-image" />
            </div>
    
            <div className="right-content">
              <h5 className="section-title">Lead Management System</h5>
              <p className="section-description">
                Interior brings 41 years of interior designs experience
                <br />
                right to your home or office. Our design professionals
                <br />
                are equipped to help you determine the products and
                <br />
                design that work best for our customers.
              </p>
              <ul className="feature-list">
                <li>Create folders and files</li>
                <li>Set up an internet connection</li>
                <li>Connect your computer</li>
                <li>Navigate all of the programs</li>
                <li>Operating system</li>
              </ul>
              <button className="getStartButton">GET STARTED</button>
            </div>
          </div>
        </div>
      );
}

export default LeadSystem
