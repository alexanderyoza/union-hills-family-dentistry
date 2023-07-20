import '../Styles/SiteOverview.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/uhfd-logo.svg';
import service from '../Assets/service.jpg';
import megan from '../Assets/megan.jpg';
import team from '../Assets/team.jpg';
import office from '../Assets/office.jpeg';
import forms from '../Assets/forms.jpeg';


function SiteOverview() {
  return (
    <div className='site-overview'>
        <div className='overview-section'>
            <div className='overview-side'>
                <img id='overview-logo' src={logo} alt='union hills family dentistry logo' />
            </div>
            <div className='overview-side'>
                <div className='welcome-text'>
                    Welcome!
                    Union Hills Family Dentistry has been working with patients 
                    to provide the best cosmetic dentistry care for patients in the 
                    Glendale, AZ area. Dr. Yoza’s experience in cosmetic dentistry is coupled 
                    with genuine concern for his patients. All of our staff is dedicated to your 
                    comfort and prompt attention.  We also work closely with the 
                    top dental specialists in the valley.  
                    Our goal is to change your life by giving you the smile and function you deserve.
                </div>
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <Link className='overview-header' to='/services'>
                    Check out the services that we offer!
                </Link>
            </div>
            <div className='overview-side'>
                <img className='overview-full-image' src={service} alt='our services' />
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <img className='overview-full-image' src={office} alt='our office' />    
            </div>
            <div className='overview-side'>
                <Link className='overview-header' to='/office'>
                    Learn more about our office
                </Link>   
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <Link className='overview-header' to='/staff'>
                    Meet our team
                </Link>
            </div>
            <div className='overview-side'>
                <img className='overview-full-image' src={team} alt='our team' />    
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <img className='overview-full-image' src={forms} alt='forms' />    
            </div>
            <div className='overview-side'>
                <Link className='overview-header' to='/forms'>
                    Fill out these forms before your appointment
                </Link>
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <div id='overview-interested' className='overview-header'>
                    Interested?     
                </div>
            </div>
            <div className='overview-side'>
                <div id='overview-request-container'>
                    <div id='overview-request-image-container'>
                        <img src={megan} alt='request appointment' />
                    </div>
                    <div id='overview-request-overlay'>
                        <a href='tel:6238784460'>Call (623)878-4460</a>
                        <div>or</div>
                        <Link id='overview-request-button' to='/request'>Request an appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SiteOverview