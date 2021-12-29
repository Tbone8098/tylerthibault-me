import React, { useState } from 'react'

import AboutMeImg from '../../img/aboutme.png'

export default function Index() {
    const [content, setContent] = useState('aboutme')

    const aboutme = () => {
        return (
            <div className='row mx-2'>
                <div className="col-4 d-flex align-items-center">
                    <img src={AboutMeImg} alt="about me picture" className='w-100 rounded rounded-3 border border-dark border-2' />
                </div>
                <div className="col-8">
                    <div className="aboutme-personal-content">
                        <p>A bit about me, I grew up in Cashmere WA, the youngest of 3 children. When I was a child my family moved over to Indonesia to work as teachers at an international school there. Living there for 3 years layed some fundamentals of who I am today. For instance, my willingness to travel and explore the world as well as my intercultural understanding. After the 3 years in Indonesia my family moved back to the US.
                        </p>
                        <p>Following High School I joined the US Navy and served my country for 5 years as a Logistic specialist. Doing 3 deployments in the persian gulf from 2008 to 2013. During my time in the Navy I reconnected with a friend from my childhood in Indonesia and after my time in the service I persued her and moved over to Indonesia for a second time. We got married shortly after and now have two amazing boys.
                        </p>
                        <p>While in Indonesia for the second time I went to UPH (Universitas Pelita Harapan) and earned my teaching degree. After my schooling was over I taught 4th grade at SPH (Sekolah Pelita Harapan) for 3 years. Interesting fact: this was the same internation school my parents taught at 17 years earlier. While teaching has its own benefits I found that I was always learning new code to try and create different applications to assist me in whatever I was doing, whether that be for my job or for recreational purposes.
                        </p>
                        <p>I eventually came to the conclusion that I wanted to have a career change and pursue software development as a full time job. This lead me to the Coding Dojo bootcamp and then to another bootcamp at University of Washington.</p>
                    </div>
                </div>
            </div>
        )
    }

    const indexObj = {
        aboutme: aboutme
    }

    return (
        <div className='section-box container-fluid p-0'>
            <div className="section-box-title">
                <div className="col-7">
                    <h3>About Me</h3>
                </div>
                <div className="col-5">
                    <select className='form-control' name="aboutme" id="aboutme">
                        <option value="aboutme">About Me</option>
                    </select>
                </div>
            </div>
            <div className="section-box-content">
                {indexObj[content]()}
            </div>
        </div>
    )
}
