import React from 'react';
import './style.css';

const ZipInputWrapper = props => {
    console.log('zip input props', props);

    const zipMessageStyle = props.displayZipMessage ?
        { display: 'block' } : { display: 'none' };

    return (
        <div className='zip-input-wrapper'>
            <h3 className='flex-row'>Where do you want to schedule your appointment?</h3>
            <div className='flex-row'>
                <input
                    placeholder='zipcode'
                    type='number'
                    id='zip-input'
                />
            </div>
            <div className='flex-row'>
                <button onClick={props.HandleDisplayVendors}>Submit</button>
            </div>
            <div style={zipMessageStyle} className='zip-message'>
                <p>Please enter a valid zipcode.</p>
            </div>
        </div>
    )
}

export default ZipInputWrapper;