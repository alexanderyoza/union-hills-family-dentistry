import React, { useEffect } from 'react';
import '../../Styles/ServiceDescription.css';
import Header from '../Header';
import WhiteningImg from '../../Assets/ServiceImages/WhiteningImg.jpeg';

function Whitening() {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='services-description-container'>
            <Header active='services'/>
            <div className='services-description'>
                <img src={WhiteningImg} alt='Teeth Whitening' />
                <h1>Teeth Whitening</h1>
                <div>
                    Teeth whitening is a safe and effective cosmetic dental procedure that
                    effectively removes stains and discoloration from the surface of your teeth.
                    Over time, teeth can become stained due to factors such as aging, consumption
                    of certain foods and beverages, tobacco use, and poor oral hygiene. Our teeth
                    whitening treatments are designed to reverse these effects, revealing a
                    dazzling smile.
                </div>
                <div>
                    Professional teeth whitening can brighten your smile by several shades, enhancing your
                    overall appearance and boosting your self-confidence. Whether you choose in-office whitening,
                    where we apply a powerful whitening gel and activate it with a special light, or opt for custom
                    take-home whitening kits, our treatments are designed to deliver noticeable and long-lasting results.
                </div>
                <h2>
                    Interested?
                </h2>
                <div>
                    Experience the transformative benefits of teeth whitening at our dental office. Schedule a consultation
                    with our dedicated team to discuss your goals and determine the most appropriate treatment plan for you.
                    Unleash the radiance of your smile and regain the confidence to show off your pearly whites with our professional
                    teeth whitening services.
                </div>
            </div>
        </div>
    )
}

export default Whitening