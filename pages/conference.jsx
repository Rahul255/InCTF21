import React from 'react'
import Base from "../src/components/shared/Base";
import Banner from '../src/components/confernces/Banner/Banner'
import About from '../src/components/confernces/About/About'
import Goals from '../src/components/confernces/Goal/Goals'
import Footer from '../src/components/confernces/Footer/Footer'
import EndProgram from '../src/components/confernces/EndProgram/EndProgram'
import Organizers from '../src/components/confernces/Organizers/Organizers'
import Timeline from '../src/components/confernces/Timeline'
import TopBar from "../src/components/shared/TopBar";
import FAQSection from '../src/components/confernces/FAQ/FAQ'
// import LandingSponsorship from '../Components/Sponsor/Sponsors'
import Sponsor from '../src/components/confernces/Sponsor/Sponsor'
import ConferenceSpeakers from '../src/components/confernces/Speaker/mainSpeakers'

function Home() {
    return (
        <Base>
            <TopBar />  
            <Banner />
            <About />
            <EndProgram />
            <Goals />
            <ConferenceSpeakers />
            <Timeline />
            {/* <LandingSponsorship /> */}
            <Sponsor />
            <Organizers/>
            <FAQSection />
            <Footer />
        </Base>
    )
}

export default Home