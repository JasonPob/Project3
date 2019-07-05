import React from 'react';
import './style.css';

const ZipInputWrapper = () => (
    <div className='zip-input-wrapper'>
            <h3 className='flex-row'>Where do you want to schedule your appointment?</h3>
        <div className='flex-row'>
            <input
                placeholder='zipcode'
                type='number'
            />
        </div>
        <div className='flex-row'>
            <button>Submit</button>
        </div>
    </div>
)

export default ZipInputWrapper;