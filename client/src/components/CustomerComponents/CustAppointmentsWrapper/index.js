import React from 'react';
import './style.css';
import CustAppointmentList from '../CustAppointmentList';

class CustAppointmentsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointmentsView: 'upcoming'
        }
    };

    render() {
        return (
            <>
                <div className='cust-appointments-wrapper'>
                    <h3 className='cust-appointments-header-text'>Your Upcoming Appointments</h3>
                    <CustAppointmentList />
                </div>
            </>
        )
    }
}

export default CustAppointmentsWrapper;