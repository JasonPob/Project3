import React from 'react';
import './style.css'

const CustApptToggle = props => {
    console.log('btn props', props)
    if (!props.upcomingApptsView) {
        return (
            <>
                <button onClick={props.handleToggleView} className='toggle-btn'>Upcoming Appointments</button> 
                <span className='not-checked p-2'><strong>Past Appointments</strong></span>
            </>
        )
    } else {
        return (
            <>
                <span className='not-checked p-2'><strong>Upcoming Appointments</strong></span> 
                <button onClick={props.handleToggleView} className='toggle-btn'>Past Appointments</button>
            </>
        )
    }
}

export default CustApptToggle;