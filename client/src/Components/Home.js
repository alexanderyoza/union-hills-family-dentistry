import '../Styles/Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import homepage from '../Assets/ocean.png';
import SiteOverview from './SiteOverview';
import SiteOverviewMobile from './SiteOverviewMobile';
import Footer from './Footer';
import service from '../Assets/service.jpg';
import team from '../Assets/team.jpg';
import office from '../Assets/office.jpeg';
import forms from '../Assets/forms.jpeg';

function Home() {

    const overviewcontent = {
        'welcome': `Welcome!
                    Union Hills Family Dentistry has been working with patients 
                    to provide the best cosmetic dentistry care for patients in the 
                    Greater Phoenix area. Dr. Yoza’s experience in cosmetic dentistry is coupled 
                    with a genuine concern for his patients. Our entire staff is dedicated to your 
                    comfort and prompt attention.  We also work closely with the 
                    top dental specialists in the valley.  
                    Our goal is to change your life by giving you the smile and function you deserve.`,
        'services': 'Services we provide',
        'office': 'Learn more about our office',
        'team': 'Meet our team',
        'forms': 'Print Patient Forms'
    }

    const overviewimages = {
        'services': service,
        'office': office,
        'team': team,
        'forms': forms
    }

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
        <div className='home-container'>
            <Header active='home'/>
            <div className='home'>
                <div className='landing'>
                    <div className='landing-img-container'>
                        <img src={homepage} alt='ethan yoza home page' />
                    </div>
                    <div className='landing-overlay'>
                        <div className='format-overlay'>
                            <div className='overlay-container'>
                                <div className='landing-overlay-text'>
                                    Unleashing Aloha: Transforming Your Dental Care Experience
                                </div>
                                <Link className='landing-overlay-request-container' to='/request'>
                                    Request an appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMobile ? <SiteOverviewMobile content={overviewcontent} images={overviewimages} /> : <SiteOverview content={overviewcontent} images={overviewimages} />}
            <Footer/>
        </div>
    )
}

export default Home