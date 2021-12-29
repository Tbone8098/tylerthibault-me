import React, { useState } from 'react'
import '../../css/style.css'

import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Index() {
    const [scopeMid, setScopeMid] = useState('whoami')


    const changeScope = (e) => {
        setScopeMid(e.target.value)
    }

    const scopeMidWhoami = () => {
        return (
            <div>
                <p>I am a full stack developer, officially trained in Python with Django
                    and flask as a frameworks and mySQL as a database and MERN
                    (Mongo DB, Express, React, Nodejs) as well C# with asp.net. I have
                    deployed on AWS as well as Heroku.  </p>
            </div>
        )
    }

    const scopeTech = () => {
        return (
            <div>
                <p>Tech</p>
            </div>
        )
    }

    const scopeContactMe = () => {
        return (
            <div>
                <p>Contact Me</p>
            </div>
        )
    }


    const scope = {
        whoami: scopeMidWhoami,
        tech: scopeTech,
        contactme: scopeContactMe,
    }

    return (
        <div className='grid-page-wrapper'>
            <div className="header">
                <Header />
            </div>
            <div className="nav-one">
                <p>Nav</p>
            </div>
            <div className="main grid-container">
                <div className="bg-green d-flex flex-column h-100 border border-dark">
                    <div className="bg-green-light mb-auto d-flex justify-content-between p-3">
                        <h3>Scope</h3>
                        <select className='form-control w-50' name="scope" id="scope" onChange={(e) => changeScope(e)}>
                            <option value="whoami">Who am I</option>
                            <option value="tech">What Tech I know</option>
                            <option value="contactme">Contact Me</option>
                        </select>
                    </div>
                    <div className="bg-mint px-3 h-100 d-flex align-items-center">
                        {scope[scopeMid]()}
                    </div>
                    <div className="bg-green-light mt-auto">
                        <p>test</p>
                    </div>
                </div>
                <div className="bg-green">

                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
