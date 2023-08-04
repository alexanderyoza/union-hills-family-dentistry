import '../Styles/Services.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import office from '../Assets/office.jpeg';
import down from '../Assets/down.png';
import CosmeticPorcelainVeneersImg from '../Assets/ServiceImages/Veneer.jpeg';
import TeethWhiteningImg from '../Assets/ServiceImages/WhiteningImg.jpeg';
import ImplantRestorationsImg from '../Assets/ServiceImages/ImplantImg.jpeg';
import TiredOfDenturesThatDontStayInImg from '../Assets/ServiceImages/DenturesComplete.jpeg';
import InvisibleBracesImg from '../Assets/ServiceImages/InvisibleBracesImg.jpeg';
import SameDayCrownImg from '../Assets/ServiceImages/Crown.jpeg';

function Services() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='services-container'>
            <Header active='services' />
            <div className='services-title'>
                <div className='services-overlay-container'>
                    <div className='services-overlay-image'>
                        <img src={office} alt='office' />
                    </div>
                    
                    <div className='services-title-text'>
                        Explore the services that we offer
                    </div>
                </div>
                <div className='services-downarrow'>
                    <img src={down} alt='down arrow' />
                </div>
            </div>
            <div className='services-content'>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/veneers')}>
                        <div className='services-item-image-container'>
                            <img src={CosmeticPorcelainVeneersImg} alt='Cosmetic Porcelain Veneers' />
                        </div>   
                        <div className='services-item-overlay'>
                            <div className='services-item-name'>
                                Cosmetic Porcelain Veneers
                            </div>
                            <div className='services-item-button'>Learn More</div>
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/whitening')}>
                        <div className='services-item-image-container'>
                            <img src={TeethWhiteningImg} alt='Teeth Whitening' />
                        </div>   
                        <div className='services-item-overlay'>
                            <div className='services-item-name'>
                                Teeth Whitening
                            </div>    
                            <div className='services-item-button'>Learn More</div>
                        </div>
                        
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/implantrestorations')}>
                        <div className='services-item-image-container'>
                            <img src={ImplantRestorationsImg} alt='Implant Restorations' />
                        </div>   
                        <div className='services-item-overlay'>
                            <div className='services-item-name'>
                                Implant Restorations
                            </div>
                            <div className='services-item-button'>Learn More</div>
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/invisiblebraces')}>
                        <div className='services-item-image-container'>
                            <img src={InvisibleBracesImg} alt='Invisible Braces' />
                        </div>   
                        <div className='services-item-overlay'>
                            <div className='services-item-name'>
                                Invisible Braces
                            </div>
                            <div className='services-item-button'>Learn More</div>
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/samedaycrowns')}>
                        <div className='services-item-image-container'>
                            <img src={SameDayCrownImg} alt='Same Day Crowns' />
                        </div>   
                        <div className='services-item-overlay'>
                            <div className='services-item-name'>
                                Same Day Crowns
                            </div>
                            <div className='services-item-button'>Learn More</div>
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/denturessolution')}>
                        <div className='services-item-image-container'>
                            <img src={TiredOfDenturesThatDontStayInImg} alt="Tired of Dentures that don't stay in?" />
                        </div>   
                        <div className='services-item-overlay'>
                            <div className='services-item-name'>
                                Tired of Dentures that don't stay in?
                            </div>
                            <div className='services-item-button'>Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services