import React from 'react';
import './Hero.css';
import image1 from '../assets/image1.png';
import subimage1 from '../assets/subimage1.png';

function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero-left'>
          <p>BUY YOUR</p>
          <p className='dream-home'>DREAM HOME</p>
          <p>IN KYIV!</p>
          <button className='button1'>GET STARTED</button>
        </div>

        <div className='hero-right'>
          <img src={subimage1} alt="main hero subImage" />
          <img src={image1} alt="main hero image" />
        </div>
      </div>

      <div className='additional-content'>
         <div className='text-main'>
         Selling a property can be quite challenging
          <br />
          If you don't have the right tools at your disposal.
       
         </div>
     

        <p>
          We help our clients sell, buy or rent properties hassle-free. Due to our unparalleled results, 
          expertise and dedication, we rank amongst the top 6 agencies in Kyiv.
          We are very proud of the service we provide and what our guests have to say about us.
        </p>
      </div>
    </>
  );
}

export default Hero;
