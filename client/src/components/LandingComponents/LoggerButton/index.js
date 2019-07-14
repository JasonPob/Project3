import React from 'react';
import './style.css';

const LoggerBtns = props => {
    console.log('btn props', props)
    return (
        <>
            <div className="container mt-2">
                <div className="row rowBack">
                    <div className="col">
                    <div id='btnWrapStyle' className='text-center mt-2'>
                <button className='stylist-login-btn' onClick={props.HandleStylistLog}>I'm a Stylist</button>
            </div>
                    </div>
                    <div className="col">
                    <div id='btnWrapStyle' className='text-center mt-2'>
                <button className='client-login-btn btn-primary' onClick={props.HandleClientLog}>Book a Stylist</button>
            </div>
                    </div>
                </div>
            </div>
{/* 
            <div className='btnWrapper'>
                <button className='stylist-login-btn' onClick={props.HandleStylistLog}>I'm a Stylist</button>
            </div>

            <div className='btnWrapper'>
                <button className='client-login-btn btn-primary' onClick={props.HandleClientLog}>Book a Stylist</button>
            </div> */}
        </>
    )
}

export default LoggerBtns;