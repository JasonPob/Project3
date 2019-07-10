import React from 'react';
import VendorCard from '../../components/CustomerComponents/VendorCard'
import VendorAppointmentList from '../../components/VendorComponents/VendorAppointmentList'
import VendorCalendar from 'react-calendar'


const VendorView = (props) =>
    
            <>
        <h1>Vendor View</h1>
        <VendorCalendar tileClassName={props.tileClassName}/>
        <VendorCard />
        <VendorAppointmentList />
    </>
        
    

    

export default VendorView;


