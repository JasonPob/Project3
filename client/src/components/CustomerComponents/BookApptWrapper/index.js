import React from 'react';
import './style.css';

// const BookApptWrapper = () => (
//     <div className='btn-wrapper'>
//         <button className='book-appt-btn'>Book an Appointment</button>
//     </div>
// )

class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false
        }
    };

    HandleStartBooking = () => {
        alert('hi');
    };

    render() {
        return (
            <div className='btn-wrapper'>
                <button className='book-appt-btn' onClick={this.HandleStartBooking}>Book an Appointment</button>
            </div>
        )
    }
}

export default BookApptWrapper;