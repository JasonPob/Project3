import React from 'react';
import VendorList from '../VendorList';
import FilterWrapper from '../FilterWrapper';
import './style.css';
import BookingModalWrapper from '../BookingModalWrapper';


const VendorWrapper = props => {
    console.log('vw', props)
    if (props.displayVendors === true) {
        return (
            <>
                <div className='vendor-wrapper container d-flex'>
                    <FilterWrapper />
                    <VendorList
                        HandleModalOpen={props.HandleModalOpen}
                        />
                </div>
                <div>
                    <BookingModalWrapper
                        showBookingModal={props.showBookingModal}
                        handleModalClose={props.handleModalClose}
                    />
                </div>
            </>
        )
    } else {
        return null
    }
}

export default VendorWrapper;