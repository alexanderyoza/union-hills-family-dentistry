import '../Styles/Home.css';
import Header from './Header';
import homepage from '../Assets/ocean.jpg';
import SiteOverview from './SiteOverview';

function Home() {
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
                  Be the snack that smiles back
                </div>
                <div className='landing-overlay-request-container'>
                  <div className='landing-overlay-request-text'>
                    Request an appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteOverview/>
    </div>
  )
}

export default Home