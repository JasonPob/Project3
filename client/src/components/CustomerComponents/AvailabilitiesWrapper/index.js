import React from 'react';
import TimeSlotButton from '../TimeSlotButton';

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
            <div className='availabilities-wrapper'>
                <h3>Availabilities:</h3>
                <div className='time-slot-buttons'>
                    {/* Children will eventually be {this.whatever} */}
                   <TimeSlotButton>9:00am</TimeSlotButton>
                   <TimeSlotButton>11:00am</TimeSlotButton>
                   <TimeSlotButton>12:00pm</TimeSlotButton>
                   <TimeSlotButton>1:00pm</TimeSlotButton>
                   <TimeSlotButton>4:00pm</TimeSlotButton>
                </div>
            </div>
        )
    }
}

export default AvailabilitiesWrapper;