import React, { useState } from 'react'
import '../../css/style.css'


import Header from '../../components/header'
import Footer from '../../components/footer'
import ScopeContainer from '../../components/ScopeContainer'
import Vision from '../../components/vision'
import Builds from '../../components/builds'
import AboutMe from '../../components/aboutme'

export default function Index() {


    return (
        <div className='grid-page-wrapper'>
            <div className="header">
                <Header />
            </div>
           
            <div className="main grid-container">
                <ScopeContainer section="contactme" />
                <Vision />
                <Builds />
                <AboutMe />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
