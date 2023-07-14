import '../Styles/Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import homepage from '../Assets/ocean.jpg';
import SiteOverview from './SiteOverview';
import SiteOverviewMobile from './SiteOverviewMobile';

function Home() {

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
                    Be the snack that smiles back (REMEMBER TO CHANGE IMAGES)
                </div>
                <Link className='landing-overlay-request-container' to='/request'>
                    Request an appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? <SiteOverviewMobile/> : <SiteOverview/>}
    </div>
  )
}

export default Home