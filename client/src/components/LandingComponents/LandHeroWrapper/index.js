import React from 'react';
import './style.css';

class LandHeroWrapper extends React.Component {
    render() {
        return (
            <>
            
                <div className='Hero-wrapper'>
                    <h3 className='Hero-header-text'>Are you a Hair Stylist?</h3>

                    <p className='Hero-body-text'>Nullam maximus nunc ut felis mollis, eu euismod diam pellentesque. Vivamus sed arcu nec eros venenatis tempus. Duis mollis sagittis tincidunt. Vestibulum pulvinar lobortis scelerisque. Cras velit nunc, pulvinar eget quam a, suscipit pretium diam.</p>

                    <h3 className='Hero-header-text2'>Looking for  a Hair Stylist?</h3>
                    <ul className='Hero-pros-text'>
                        <li><strong>Join:</strong> Nullam scelerisque tempus</li>
                        <li><strong>Search:</strong> Libero vitae ultricies.</li>
                        <li><strong>Book:</strong> In at efficitur urna.</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default LandHeroWrapper;