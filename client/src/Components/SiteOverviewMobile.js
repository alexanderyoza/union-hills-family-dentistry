import '../Styles/SiteOverviewMobile.css';
import { Link } from 'react-router-dom';
import OverlayBlock from './OverlayBlock';
import wave from '../Assets/wave.jpg';
import cartoon from '../Assets/cartoon.jpg';
import megan from '../Assets/megan.jpg';
import team from '../Assets/team.jpg';
import office from '../Assets/officefront.jpg';
import forms from '../Assets/forms.jpeg';

function SiteOverviewMobile() {
  return (
    <div className='site-overview-mobile'>
        <OverlayBlock 
            picture={wave} 
            alt='union hills family dentistry logo' 
            content={
                <div id='mobile-welcome-text'>
                    Welcome!
                    Union Hills Family Dentistry has been working with patients 
                    to provide the best cosmetic dentistry care for patients in the 
                    Glendale, AZ area. Dr. Yoza’s experience in cosmetic dentistry is coupled 
                    with genuine concern for his patients. All of our staff is dedicated to your 
                    comfort and prompt attention.  We also work closely with the 
                    top dental specialists in the valley.  
                    Our goal is to change your life by giving you the smile and function you deserve.
                </div>
            }
        />

        <OverlayBlock
            picture={cartoon}
            alt='our services'
            content={
                <Link className='mobile-overview-header' to='/services'>
                    Learn more about the services we offer
                </Link>
            }
        />
        
        <OverlayBlock
            picture={office}
            alt='our office'
            content={
                <Link className='mobile-overview-header' to='/office'>
                    Learn about our office
                </Link>
            }
        />
        
        <OverlayBlock
        picture={team}
        alt='our team'
        content={
            <Link className='mobile-overview-header' to='/staff'>
                Meet our team
            </Link>
        }
        />
        
        <OverlayBlock
        picture={forms}
        alt='forms'
        content={
            <Link className='mobile-overview-header' to='/forms'>
                Fill out these forms before your appointment
            </Link>
        }
        />

        <OverlayBlock

            picture={megan}
            alt='request appointment'
            content={
                <div className='mobile-overview-request-overlay'>
                    <div>Call (623)878-4460</div>
                    <div>or</div>
                    <div id='mobile-overview-request-button'>Request an appointment</div>
                </div>
            }
        />
    </div>

  )
}

export default SiteOverviewMobile