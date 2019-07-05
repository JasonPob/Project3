import React from 'react';
import './style.css';
import CustAppointmentList from '../CustAppointmentList';

const CustAppointmentsWrapper = () => (
    <>
        <div className='cust-appointments-wrapper'>
            <h3 className='cust-appointments-header-text'>Your Upcoming Appointments</h3>
            <CustAppointmentList />
        </div>
    </>
)

export default CustAppointmentsWrapper;