import React from 'react';
import TimeSlotButton from '../TimeSlotButton';
import './style.css'

class AvailabilitiesWrapper extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }

    render() {
        // I guess this will contain the available times logic when we know what the data will look like...
        let availableTimes = [];

        return (
            <div className='availabilities-wrapper p-3'>
                <h3>Availabilities:</h3>
                <hr />
                <div className='time-slot-buttons text-center mb-3'>
                    {/* Children will eventually be {this.whatever} */}
                    <TimeSlotButton>9:00am</TimeSlotButton>
                    <TimeSlotButton>11:00am</TimeSlotButton>
                    <TimeSlotButton>12:00pm</TimeSlotButton>
                    <TimeSlotButton>1:00pm</TimeSlotButton>
                    <TimeSlotButton>4:00pm</TimeSlotButton>
                </div>
                <div className='d-flex justify-content-center'>
                    <h4>Note to vendor:</h4>
                </div>
                <div className='d-flex justify-content-center'>
                    <textarea placeholder='Enter message' className='vendor-message-input'></textarea>
                </div>
            </div>
        )
    }
}

export default AvailabilitiesWrapper;