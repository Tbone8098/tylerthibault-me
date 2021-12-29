import React from 'react'

export default function index(props) {
    const {text="Contact Me", location="/"} = props


    return (
        <div>
            <button className="btn bg-orange bg-black-hover txt-orange-hover">{text}</button>
        </div>
    )
}
