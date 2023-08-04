import React, { useEffect } from 'react';
import '../../Styles/ServiceDescription.css';
import Header from '../Header';
import Footer from '../Footer';
import DenturesImg from '../../Assets/ServiceImages/Dentures.jpeg';

function DenturesSolution() {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='services-description-container'>
            <Header active='services'/>
            <div className='services-description'>
                <img src={DenturesImg} alt='Dentures' />
                <div>
                    We have a solution for you!
                    All-on-4 dentures offer a transformative dental restoration
                    that combines the benefits of dental implants and fixed dentures.
                    By strategically placing four dental implants in your jawbone, we
                    secure a custom-designed denture that looks, feels, and functions just
                    like natural teeth.
                </div>
                <h2>
                    Benefits
                </h2>
                <div>
                    One major advantage of All-on-4 dentures is their immediate functionality.
                    In many cases, we can place the implants and attach the denture on the same day,
                    providing you with a fully functional set of teeth. This immediate loading approach
                    allows you to eat, speak, and smile confidently right from the start.
                </div>
                <div>
                    We understand that each patient is unique, and we take a personalized approach to your treatment plan.
                    Our experienced dental professionals will evaluate your oral health, jawbone structure, and specific goals to determine
                    if All-on-4 dentures are the best fit for you. If needed, we can discuss alternative treatment options that align with your
                    individual needs.
                </div>
                <h2>
                    Interested?
                </h2>
                <div>
                    Union Hills Family Dentistry is committed to delivering exceptional care in a
                    comfortable environment. We utilize state-of-the-art facilities and compassionate
                    staff to ensure your dental health is our top priority throughout the entire treatment
                    process.
                </div>
                <div>
                    Ready to regain your smile and enjoy the benefits of All-on-4 dentures?
                    Contact us today to schedule a consultation and take the first step towards a
                    confident and beautiful smile once again.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DenturesSolution