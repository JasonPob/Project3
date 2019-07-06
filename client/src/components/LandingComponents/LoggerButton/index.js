import React from 'react';
import './style.css';

const LoggerBtns = props => {
    console.log('btn props', props)
    return (
    <>
        <div className='btn-wrapper'>
            <button className='stylist-login-btn' onClick={props.HandleStylistLog}>I'm a Stylist</button>       
            
  
            <button className='client-login-btn btn-primary' onClick={props.HandleClientLog}>Book a Stylist</button>
        </div>
    </>
)}

export default LoggerBtns;