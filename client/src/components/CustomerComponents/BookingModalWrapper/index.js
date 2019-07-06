import React from 'react';
import './style.css';

const BookingModalWrapper = props => {
    const showHideClassName = props.showBookingModal ? "booking-modal modal-display-block" : " modal-display-none";
    console.log('bmw', props);
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h1>Modal stuff</h1>
                <button onClick={props.handleModalClose}>close</button>
            </section>
        </div>)
}

export default BookingModalWrapper;