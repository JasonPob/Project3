import React from 'react';
import './style.css';

const VendorCard = props => {
    console.log('vc', props);
    return (
    <div className='vendor-card col-md-3'>
        <p><strong>Name:</strong> John Smith</p>
        <p><strong>Location:</strong> Philadelphia, PA</p>
        <p><strong>Price:</strong> $20</p>
        <p><em>"I've been cutting hair for 5 yerars. New in town and looking for customers!</em></p>
        <button className='book-vendor-btn' onClick={props.HandleModalOpen}>View Availabilities</button>
    </div>
)}

export default VendorCard;