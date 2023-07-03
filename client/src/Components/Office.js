import '../Styles/Office.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import officefront from '../Assets/officefront.jpg';

function Office() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const narrow = window.innerWidth <= 700;
            setIsMobile(narrow);
        };
        window.scrollTo(0, 0);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };

    }, []);

    return (
        <div className='office-container'>
            <Header active='office'/>
            <div className='office'>
                <div className='office-info'>
                    <div className={isMobile ? 'office-info-back' : 'office-info-side'}>
                        <img src={officefront} alt='office front view' />
                    </div>
                    <div className={isMobile ? 'office-info-front' : 'office-info-side'}>
                        <div className='office-content'>
                            <div className='office-title'>
                                Union Hills Family Dentistry
                            </div>
                            <div className='office-address'>
                                Address:
                                <a href='https://goo.gl/maps/8RRCyGUoxc5LD8gt5' target='_blank' rel="noreferrer noopener">
                                    <div>
                                        8110 West Union Hills Drive
                                    </div>
                                    <div>
                                        Suite 430
                                    </div>
                                    <div>
                                        Glendale, AZ 85308
                                    </div> 
                                </a>
                            </div>
                            <div className='office-phone'>
                                <div>
                                    Phone Number:
                                </div>
                                <a class="tel-header" href="tel:6238784460">623-878-4460</a>
                            </div>
                            <div className='office-hours'>
                                <div className='hours-title'>
                                    Hours:
                                </div>
                                <div className='office-day'>
                                    <div>Monday: </div>
                                    <div>9AM - 6PM</div>
                                </div>
                                <div className='office-day'>
                                    <div>Tuesday: </div>
                                    <div>9AM - 6PM</div>
                                </div>
                                <div className='office-day'>
                                    <div>Wednesday: </div>
                                    <div>9AM - 5PM</div>
                                </div>
                                <div className='office-day'>
                                    <div>Thursday: </div>
                                    <div>9AM - 5PM</div>
                                </div>
                                <div className='office-day'>
                                    <div>Friday: </div>
                                    <div>Closed</div>
                                </div>
                                <div className='office-day'>
                                    <div>Saturday: </div>
                                    <div>By Appointment</div>
                                </div>
                                <div className='office-day'>
                                    <div>Sunday: </div>
                                    <div>Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Office