import React from 'react';
import CustAppointment from '../CustAppointment';
import './style.css';

const CustAppointmentList = () => (
    <>
        <p>Appointment list renders here</p>
        <div className='cust-appointment-list'>
            <CustAppointment />
            <CustAppointment />
            <CustAppointment />
        </div>
    </>
);

export default CustAppointmentList;