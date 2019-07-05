import React from 'react';
import VendorList from '../VendorList';
import './style.css'

const VendorWrapper = props => {
    if (props.displayVendors === true) {
        return (
            <div className='vendor-wrapper container'>
                <h3>Vendors</h3>
                <VendorList />
            </div>
        )
    } else {
        return null
    }
}

export default VendorWrapper;