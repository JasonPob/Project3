import React from 'react';
import VendorList from '../VendorList';
import FilterWrapper from '../FilterWrapper';
import './style.css';
import BookingModalWrapper from '../BookingModalWrapper';


class VendorWrapper extends React.Component {
    constructor(props) {
        super(props);

        const date = new Date();
        const dayOfWeek = date.getDay()
        console.log('date:', date);
        console.log('day of week:', dayOfWeek);
    }

    render() {
        if (this.props.displayVendors === true) {
            return (
                <>
                    <div className='vendor-wrapper container d-flex flex-wrap'>
                        <FilterWrapper 
                                apptDay={this.props.apptDay}
                                handleFilterChange={this.props.handleFilterChange}
    
                        />
                        <VendorList
                            HandleModalOpen={this.props.HandleModalOpen}
                        />
                    </div>
                    <div>
                        <BookingModalWrapper
                            showBookingModal={this.props.showBookingModal}
                            handleModalClose={this.props.handleModalClose}
                        />
                    </div>
                </>
            )
        } else {
            return null
        }
    }
}

export default VendorWrapper;