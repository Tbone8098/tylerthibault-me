import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../img/logo2.png'
import CallToAction from '../btns/callToAction'

export default function Index() {

    const logo = (width="100px") => <img src={Logo} alt="" width={width} />

    const desktop = () => {
        return (
            <div className="d-flex align-items-center justify-content-between m-4 border-bottom border-2">
                {logo()}
                <ul className="ul-menu-row gap-3">
                    <li className='d-flex align-items-center'><Link to="#" className="a-tag">Scope</Link></li>
                    <li className='d-flex align-items-center'><Link to="#" className="a-tag">Build</Link></li>
                    <li className='d-flex align-items-center'><Link to="#" className="a-tag">Philosophy</Link></li>
                    <li className='d-flex align-items-center'><Link to="#" className="a-tag">About Me</Link></li>
                    <li className='d-flex align-items-center'><CallToAction/></li>
                </ul>
            </div>
        )
    }

    const mobile = () => {
        return (
            <div className='d-flex align-items-center justify-content-between border-bottom border-2 border-dark'>
                {logo()}
                <CallToAction />
            </div>
        )
    }
    return (
        <div>
            {mobile()}
        </div>
    )
}
