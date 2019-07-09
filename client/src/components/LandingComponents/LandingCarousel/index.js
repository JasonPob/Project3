import React from 'react';
import './style.css';

const LandingCarousel = props => {
    console.log(props);
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" >
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <img className="d-block w-100" src='/images/City-03.jpg' alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 id='carTitle'>Door to Door Service</h5>
                        <p id='carSubText'>Making your life easier with door to door service. You pick your location anywhere, anytime.</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src='/images/Barber-03.jpg' alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 id='carTitle'>Trim The Wait Times</h5>
                        <p id='carSubText'>Get you hair cut on your timeframe. No more waiting and no more  double booking. </p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src='/images/Barber-05.jpg' src1={props.SliderImage3} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 id='carTitle' className='mb-3'>Sharpen Your Skill</h5>
                        <p id='carSubText' className='mb-5'>Are you a stylist wanting to create you own schedule. Book your clientele. Build your portfolio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingCarousel;