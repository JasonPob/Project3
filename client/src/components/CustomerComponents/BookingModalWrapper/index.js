import React from 'react';
import AvailabilitiesWrapper from '../AvailabilitiesWrapper';
import './style.css';

const BookingModalWrapper = props => {
    const showHideClassName = props.showBookingModal ? "booking-modal modal-display-block" : " modal-display-none";
    // console.log('bmw', props);
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className='d-flex justify-content-end'>
                    <button onClick={props.handleModalClose}>X</button>
                </div>
                <h1 className='text-center'>Book your Appointment!</h1>
                <AvailabilitiesWrapper />
            </section>
        </div>)
}

export default BookingModalWrapper;