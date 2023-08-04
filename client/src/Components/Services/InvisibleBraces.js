import React, { useEffect } from 'react';
import '../../Styles/ServiceDescription.css';
import Header from '../Header';
import Footer from '../Footer';
import InvisibleBracesImg from '../../Assets/ServiceImages/InvisibleBracesImg.jpeg';

function InvisibleBraces() {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);
    
    return (
        <div className='services-description-container'>
            <Header active='services'/>
            <div className='services-description'>
                <img src={InvisibleBracesImg} alt='Invisible Braces' />
                <h1>Invisible Braces</h1>
                <div>
                    Invisible braces are a revolutionary alternative to traditional metal braces. They are custom-made,
                    transparent aligners that gradually and gently shift your teeth into the desired position. The aligners
                    are virtually invisible when worn, allowing you to undergo orthodontic treatment without drawing unnecessary attention.
                </div>
                <h2>
                    Benefits
                </h2>
                <div>
                    One of the key advantages of invisible braces is their comfort and convenience. The aligners are made of smooth,
                    BPA-free plastic, eliminating the discomfort associated with metal brackets and wires. Additionally, they can be easily
                    removed for eating, brushing, and flossing, allowing for optimal oral hygiene and unrestricted enjoyment of your favorite foods.
                </div>
                <div>
                    Throughout your treatment, you will progress through a series of aligners, wearing each set for a designated period of
                    time before moving on to the next. Regular check-ups with our dental professionals will ensure that your treatment is
                    progressing as planned and allow for any necessary adjustments.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InvisibleBraces