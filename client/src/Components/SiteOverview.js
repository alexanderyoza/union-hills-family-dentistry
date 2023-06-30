import '../Styles/SiteOverview.css';
import logo from '../Assets/uhfd-logo.svg';
import cartoon from '../Assets/cartoon.jpg';
import megan from '../Assets/megan.jpg'
import team from '../Assets/team.jpg'

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
                <div className='overview-headers'>
                    Check out the services that we offer!
                </div>
                
            </div>
            <div className='overview-side'>
                <img className='overview-full-image' src={cartoon} alt='our services' />
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <img className='overview-full-image' src={team} alt='our team' />    
            </div>
            <div className='overview-side'>
                <div className='overview-header'>
                    Learn about our office and our team
                </div>
                
            </div>
        </div>
        <div className='overview-section'>
            <div className='overview-side'>
                <div className='overview-header'>
                    Interested?     
                </div>
                
            </div>
            <div className='overview-side'>
                <div id='overview-request-container'>
                    <div id='overview-request-image-container'>
                        <img src={megan} alt='request appointment' />
                    </div>
                    <div id='overview-request-overlay'>
                        <div>Call (623)878-4460</div>
                        <div>or</div>
                        <div id='overview-request-button'>Request an appointment</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SiteOverview