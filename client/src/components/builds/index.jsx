import React, { useState } from 'react'

export default function Index() {
    const [location, setLocation] = useState('')

    const dropdownHandler = (e) => {
        setLocation(e.target.value)
    }

    const btnHandler = () => {
        console.log(location);
        window.focus()
        window.open(location, '_blank')
    }

    return (
        <div className="container">
            <div className="row section-box">
                <div className="section-box-content">
                    <div className="col-10">
                        <select className='form-control' name="builds" id="builds" onChange={(e) => dropdownHandler(e) }>
                            <option value="notanoption">Choose an option</option>
                            <option value="https://carry-the-fire.herokuapp.com/">Carry the fire</option>
                        </select>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <button className="btn bg-green" onClick={() => btnHandler()}>GO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
