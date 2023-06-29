import '../Styles/SiteOverview.css';
import logo from '../Assets/uhfd-logo.svg';
import random from '../Assets/homepage.jpg';

function SiteOverview() {
  return (
    <div className='site-overview'>
        <div className='overview-side'>
            <div className='overview-two'>
                <div className='overview-stick'>
                    <div className='overview-content'>
                            <img id='overview-logo' src={logo} alt='union hills family dentistry logo' />
                    </div>  
                </div>     
            </div>

            <div className='overview-four'>
                <div className='overview-scroll'>
                    <div className='overview-content'>
                        <div className='overview-header-text'>
                            Check out the services that we offer!
                        </div>
                    </div>  
                </div>
                <div className='overview-stick'>
                    <div className='overview-content'>
                        <img className='overview-full-image' src={random} alt='our services' />    
                    </div>  
                </div>
            </div>

            <div className='overview-one'>
                <div className='overview-scroll'>
                    <div className='overview-content'>
                        <div id='overview-request' className='overview-header-text'>
                            Request an appointment now
                        </div>
                    </div>  
                </div>     
            </div>


        </div>
        <div className='overview-side'>
            <div className='overview-four'>
                <div className='overview-scroll'>
                    <div className='overview-content'>
                        <div className='overview-text'>
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
                <div className='overview-stick'>
                    <div className='overview-content'>
                        <img className='overview-full-image' src={random} alt='our services' />
                    </div>  
                </div>
            </div>

            <div className='overview-three'>
                <div className='overview-scroll'>
                    <div className='overview-content'>
                        <div className='overview-header-text'>
                            Meet our team
                        </div>
                    </div>  
                </div>
                <div className='overview-stick'>
                    <div className='overview-content'>
                        <div className='overview-header-text'>
                            Interested?
                        </div>    
                    </div>  
                </div>
            </div>
        </div>
    </div>

  )
}

export default SiteOverview