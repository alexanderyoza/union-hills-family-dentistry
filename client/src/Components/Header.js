import '../Styles/Header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/uhfd-logo.svg';
import topdentist from '../Assets/TopDentistsLogo.png';
import menubox from '../Assets/menubox.png';
import exit from '../Assets/exit.png';

function Header(props) {

    const [isMobile, setIsMobile] = useState(false);
    const [menuCSS, setMenuCSS] = useState('header-menu-mobile-none');

    useEffect(() => {
        const checkMobile = () => {
            const narrow = window.innerWidth <= 1000;
            setIsMobile(narrow);
        };

        window.scrollTo(0, 0);  
    
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };

    }, []);

    const openMenu = () => {
        setMenuCSS('header-menu-mobile')
    }

    const closeMenu = () => {
        setMenuCSS('header-menu-mobile-invisible')
    }


    const getLayout = () => {
        if(isMobile) {
            return (
                <header className='header-cont-mobile'>
                    <div className='header-mobile'>
                        <div className='header-rank-mobile'>
                            <img src={topdentist} alt='phoenix top ranked dentist' />
                        </div>
                        <div className='header-title-mobile'>
                            <img src={logo} alt='uhfd logo' />
                        </div>
                        <div className='header-menubox'  onClick={openMenu}>
                            <img src={menubox} alt='menu dropdown botton' />
                        </div>
                    </div>

                    <div className={menuCSS}>
                        <div className={'menu-exit-' + menuCSS} onClick={closeMenu}>
                            <img src={exit} alt='exit menu' />
                        </div>
                        <div className='mobile-items-container'>
                            <Link onClick={closeMenu} className={props.active === 'home' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/'>
                                <div className='link-mobile'>Home</div>
                            </Link>
                            <Link onClick={closeMenu} className={props.active === 'services' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/services'>
                                <div className='link-mobile'>Services</div>
                            </Link>
                            <Link onClick={closeMenu} className={props.active === 'office' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/office'>
                                <div className='link-mobile'>Office</div>
                            </Link>
                            <Link onClick={closeMenu} className={props.active === 'staff' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/staff'>
                                <div className='link-mobile'>Staff</div>
                            </Link>
                            <Link onClick={closeMenu} className={props.active === 'forms' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/forms'>
                                <div className='link-mobile'>Forms</div>
                            </Link>
                            <Link onClick={closeMenu} className={props.active === 'request' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/request'>
                                <div className='link-mobile'>Request Appointment</div>
                            </Link>
                        </div>
                    </div>
                </header>
            )
        }

        return (
            <header className='header-cont'>
                <div className='header'>
                    <div className='header-title'>
                        <img src={logo} alt='uhfd logo' />
                    </div>
                    <div className='header-menu'>
                        <Link className={props.active === 'home' ? 'active-header-itm': 'header-itm'} to='/'>
                            <div className='header-link'>Home</div>
                        </Link>
                        <Link className={props.active === 'services' ? 'active-header-itm': 'header-itm'} to='/services'>
                            <div className='header-link'>Services</div>
                        </Link>
                        <Link className={props.active === 'office' ? 'active-header-itm': 'header-itm'} to='/office'>
                            <div className='header-link'>Office</div>
                        </Link>
                        <Link className={props.active === 'staff' ? 'active-header-itm': 'header-itm'} to='/staff'>
                            <div className='header-link'>Staff</div>
                        </Link>
                        <Link className={props.active === 'forms' ? 'active-header-itm': 'header-itm'} to='/forms'>
                            <div className='header-link'>Forms</div>
                        </Link>
                        <Link className={props.active === 'request' ? 'active-header-itm': 'header-itm'} to='/request'>
                            <div className='header-link'>Request Appointment</div>
                        </Link>
                    </div>
                    <div className='header-logos'>

                        <div className='bb-logo'>
                            <a href="https://www.bbb.org/us/az/glendale/profile/dentist/union-hills-family-dentistry-1126-1000010655/#sealclick" target="_blank" rel="noreferrer"><img src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-200-42-bbb-1000010655.png" alt="Union Hills Family Dentistry BBB Business Review" /></a>
                        </div>
                        <div className='header-rank'>
                            <img src={topdentist} alt='phoenix top ranked dentist' />    
                        </div>
                    </div>
                    
                </div>
            </header>
        );
    }


    return getLayout()
}

export default Header