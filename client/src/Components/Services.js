import '../Styles/Services.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import office from '../Assets/office.jpeg';
import down from '../Assets/down.png';
import service from '../Assets/service.jpeg';

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
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name' to='/services'>
                            Bonding
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name' to='/services'>
                            Bonding
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name' to='/services'>
                            Bonding
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name' to='/services'>
                            Bonding
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name' to='/services'>
                            Bonding
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name' to='/services'>
                            Bonding
                        </div>
                    </div>
                </div>
                <div className='services-item'>
                    <div className='services-item-inner-container' onClick={() => navigate('/')}>
                        <div className='services-item-image-container'>
                            <img src={service} alt='bonding' />
                        </div>   
                        <div className='services-item-name'>
                            Bonding
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services