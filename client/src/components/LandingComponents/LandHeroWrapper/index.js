import React from 'react';
import './style.css';
import LandingCarousel from '../LandingCarousel';

class LandHeroWrapper extends React.Component {
    render() {
        return (
            <>
                <LandingCarousel />

                <div className='Hero-wrapper mt-2'>
                    <h4 className='Hero-header-text text-white'>Are you a Barber?</h4>
                    <p className='Hero-body-text text-white'>Start using OmniCut services as a vendor  in three easy steps. <br/> <strong> (1) </strong>Join <strong> (2) </strong> Style and <strong> (3) </strong> Review
                    </p>

                    {/* <p className='Hero-body-text text-white'>Nullam maximus nunc ut felis mollis, eu euismod diam pellentesque. Vivamus sed arcu nec eros venenatis tempus. Duis mollis sagittis tincidunt. Vestibulum pulvinar lobortis scelerisque. Cras velit nunc, pulvinar eget quam a, suscipit pretium diam.</p> */}
                </div>

                <div className='Hero-wrapper2 mt-2 mb-4'>
                    <h4 className='Hero-header-text2 text-white'>In need of a Barber?</h4>
                    <p className='Hero-body-text text-white'>Start using OmniCut services as a client in three easy steps. <br/> <strong> (1) </strong>Join <strong> (2) </strong> Search and <strong> (3) </strong> Book
                    </p>
                </div>
            </>
        )
    }
}

export default LandHeroWrapper;