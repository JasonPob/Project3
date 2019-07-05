import React from 'react';
import CustAppointmentsWrapper from '../../components/CustomerComponents/CustAppointmentsWrapper';
import BookApptWrapper from '../../components/CustomerComponents/BookApptWrapper';

const CustomerView = () => (
    <>
        <h1>Customer View</h1>
        <CustAppointmentsWrapper />
        <BookApptWrapper />
    </>
);

export default CustomerView;