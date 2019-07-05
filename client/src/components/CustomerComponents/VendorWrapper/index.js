import React from 'react';
import VendorList from '../VendorList';
import FilterWrapper from '../FilterWrapper';
import './style.css'

const VendorWrapper = props => {
    if (props.displayVendors === true) {
        return (
            <div className='vendor-wrapper container d-flex'>
                <FilterWrapper />
                <VendorList />
            </div>
        )
    } else {
        return null
    }
}

export default VendorWrapper;