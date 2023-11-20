import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'; 
import logo from '../assets/Logo.png'

function Navbar() {
    return (
        <div className='Navbar'>
          <div className='nav-logo'>
            <img src={logo} alt='logo' />
          </div>
    
          <div className='nav-links'>
      <Link to='/' className='nav-link' activeClassName='active'>HOME</Link>
      <Link to='/profile' className='nav-link' activeClassName='active'>PROFILE</Link>
      <Link to='/reports' className='nav-link' activeClassName='active'>REPORTS</Link>
      <Link to='/insight' className='nav-link' activeClassName='active'>INSIGHT</Link>
    </div>
    
          <div className='nav-buttons'>
            <button>LOGIN</button>
            <button>GET STARTED</button>
          </div>
        </div>
      );
}

export default Navbar
