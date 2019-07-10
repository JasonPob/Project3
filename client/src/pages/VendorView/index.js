import React from 'react';
import VendorCard from '../../components/CustomerComponents/VendorCard'
import VendorAppointmentList from '../../components/VendorComponents/VendorAppointmentList'
import VendorCalendar from '../../components/VendorComponents/VendorCalendar'


const VendorView = () =>
    
            <>
        <h1>Vendor View</h1>
        <VendorCalendar />
        <VendorCard />
        <VendorAppointmentList />
    </>
        
    

    

export default VendorView;


