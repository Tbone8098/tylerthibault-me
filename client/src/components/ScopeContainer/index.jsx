import React, { useState } from 'react'
import { InlineWidget } from 'react-calendly'

export default function Index(props) {
    const { section } = props
    const [scopeMid, setScopeMid] = useState(section)


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
            <div className='container'>
                <div className="row m-0">
                    <div className="col-6">
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>MySQL</li>
                            <li>AJAX</li>
                            <li>Jquery</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Express</li>
                            <li>React</li>
                            <li>Nodesjs</li>
                            <li>C#</li>
                            <li>ASP.NET</li>
                            <li>AWS</li>
                            <li>Heroku</li>
                            <li>Sequilize</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const scopeContactMe = () => {
        return (
            <div className="w-100 ">
                <InlineWidget url="https://calendly.com/tyler-thibault" />
            </div>
        )
    }

    const selectHandler = async () => {
        let el = await document.querySelector(`#${scopeMid}`)
        console.log(el);
        // el.setAttribute('selected')
    }

    const scopeObj = {
        whoami: scopeMidWhoami,
        tech: scopeTech,
        contactme: scopeContactMe,
    }

    return (
        <div className="section-box">
            <div className="section-box-title">
                <h3>Scope</h3>
                <select className='form-control w-50' name="scope" id="scope" onChange={(e) => changeScope(e)}>
                    {/* {selectHandler()} */}
                    <option value="whoami" id='whoami' >Who am I</option>
                    <option value="tech" id='tech' >What Tech I know</option>
                    <option value="contactme" id='contactme' >Contact Me</option>
                </select>
            </div>
            <div className="section-box-content">
                {scopeObj[scopeMid]()}
            </div>
        </div>
    )
}
