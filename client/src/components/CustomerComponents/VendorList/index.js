import React from 'react';
import VendorCard from '../VendorCard';
import './style.css';

const VendorList = () => (
    <>
        <div className='vendor-list col-md-9'>
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
            <VendorCard />
        </div>
    </>
)

export default VendorList;