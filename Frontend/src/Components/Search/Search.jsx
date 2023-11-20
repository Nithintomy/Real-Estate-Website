import React from 'react';
import searchBuyer from '../assets/helpSearch.png';
import './Search.css';

function Search() {
  return (
    <div className="search-container">
      <div className="search-image">
        <img src={searchBuyer} alt="search Buyer" />
      </div>
      <div className="text-container">
        <div className="search-text">
          Let Us Help You Find Your Ideal
          <br />
          Buyer!
        </div>
        <div className="search-description">
          <p>
            Interior brings 41 years of interior designs experience
            <br />
            right to your home or office. Our design professionals
            <br />
            are equipped to help you determine the products and
            <br />
            design that work best for our customers.
          </p>
        </div>
        <button className="register-btn">REGISTER NOW</button>
      </div>
    </div>
  );
}

export default Search;
