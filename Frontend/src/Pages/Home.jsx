import React from 'react'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import Report from '../Components/Report/Report'
import Target from '../Components/Target/Target'
import ManageAccount from '../Components/ManageAccount/ManageAccount'
import LeadSystem from '../Components/LeadSystem/LeadSystem'
import Explore from '../Components/Explore/Explore'
import Search from '../Components/Search/Search'
import './Home.css'
import Footer from '../Components/Footer/Footer'



function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Report />
            <Target />
            <ManageAccount />
            <LeadSystem />
            <div className='footer'>
                <Explore />
                <hr />
                <Search />
            </div>

            <Footer/>
        </>



    )
}

export default Home
