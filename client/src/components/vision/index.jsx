import React, {useState, useEffect} from 'react'

export default function Index() {
    const [content, setContent] = useState('vision')
    const [visionEl, setVisionEl] = useState('')
    const [missionEl, setMissionEl] = useState('')

    useEffect(() => {
        setVisionEl(document.querySelector('#vision-title'))
        setMissionEl(document.querySelector('#mission-title'))
    }, [])
    
    const contentVision = () => {
        toggle()
        return (
            <div>
                This is my vision statement
            </div>
        )
    }
    
    const contentMission = () => {
        toggle()
        return (
            <div>
                This is my Mission statement
            </div>
        )
    }
    
    const toggle = () => {
        if (content === 'vision'){
            visionEl.classList.add('u')
            missionEl.classList.remove('u')
        } else {
            visionEl.classList.remove('u')
            missionEl.classList.add('u')
        }
    }

    return (
        <div className='section-box'>
            <div className="section-box-title px-3">
                <h3 className='clickable u' id="vision-title" onClick={() => setContent('vision')}>Vision</h3>
                <h3 className='clickable' id='mission-title' onClick={() => setContent('mission')}>Mission</h3>
            </div>
            <div className="section-box-content">
                {visionEl !== '' ?
                content === 'vision' ? contentVision() : contentMission()
                :
                'loading...'
                }
            </div>
        </div>
    )
}
