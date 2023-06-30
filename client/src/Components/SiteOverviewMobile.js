import '../Styles/SiteOverviewMobile.css';
import OverlayBlock from './OverlayBlock';
import wave from '../Assets/wave.jpg';
import cartoon from '../Assets/cartoon.jpg';
import megan from '../Assets/megan.jpg';
import team from '../Assets/team.jpg';

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
                <div className='mobile-overview-header'>
                    Learn more about the services we offer
                </div>
            }
        />
        
        <OverlayBlock
            picture={team}
            alt='our team'
            content={
                <div className='mobile-overview-header'>
                    Learn about our office and our team
                </div>
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