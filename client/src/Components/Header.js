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
            const narrow = window.innerWidth <= 700;
            setIsMobile(narrow);
        };
        
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
                <div className='header-cont-mobile'>
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
                        <Link onClick={closeMenu} className={props.active === 'home' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/'>
                            <div className='link-mobile'>Home</div>
                        </Link>
                        <Link onClick={closeMenu} className={props.active === 'office' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/'>
                            <div className='link-mobile'>Office</div>
                        </Link>
                        <Link onClick={closeMenu} className={props.active === 'services' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/'>
                            <div className='link-mobile'>Services</div>
                        </Link>
                        <Link onClick={closeMenu} className={props.active === 'staff' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/'>
                            <div className='link-mobile'>Staff</div>
                        </Link>
                        <Link onClick={closeMenu} className={props.active === 'schedule' ? 'active-header-itm-mobile': 'header-itm-mobile'} to='/'>
                            <div className='link-mobile'>Schedule</div>
                        </Link>
                    </div>
                </div>
            )
        }

        return (
            <div className='header-cont'>
                <div className='header'>
                    <div className='header-title'>
                        <img src={logo} alt='uhfd logo' />
                    </div>
                    <div className='header-menu'>
                        <Link className={props.active === 'home' ? 'active-header-itm': 'header-itm'} to='/'>
                            <div className='link'>Home</div>
                        </Link>
                        <Link className={props.active === 'office' ? 'active-header-itm': 'header-itm'} to='/'>
                            <div className='link'>Office</div>
                        </Link>
                        <Link className={props.active === 'services' ? 'active-header-itm': 'header-itm'} to='/'>
                            <div className='link'>Services</div>
                        </Link>
                        <Link className={props.active === 'staff' ? 'active-header-itm': 'header-itm'} to='/'>
                            <div className='link'>Staff</div>
                        </Link>
                        <Link className={props.active === 'schedule' ? 'active-header-itm': 'header-itm'} to='/'>
                            <div className='link'>Schedule</div>
                        </Link>
                    </div>
                    <div className='header-rank'>
                        <img src={topdentist} alt='phoenix top ranked dentist' />
                    </div>
                </div>
            </div>
        );
    }


    return getLayout()
}

export default Header