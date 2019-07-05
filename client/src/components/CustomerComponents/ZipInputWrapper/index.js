import React from 'react';
import './style.css';

const ZipInputWrapper = props => {
    console.log(props);
    return (
    <div className='zip-input-wrapper'>
            <h3 className='flex-row'>Where do you want to schedule your appointment?</h3>
        <div className='flex-row'>
            <input
                placeholder='zipcode'
                type='number'
            />
        </div>
        <div className='flex-row'>
            <button onClick={props.HandleDisplayVendors}>Submit</button>
        </div>
    </div>
)}

export default ZipInputWrapper;