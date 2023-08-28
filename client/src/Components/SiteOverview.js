import '../Styles/SiteOverview.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/uhfd-logo.svg';


function SiteOverview(props) {
  return (
    <main className='site-overview'>
        <section className='overview-section'>
            <div className='overview-side'>
                <img id='overview-logo' src={logo} alt='union hills family dentistry logo' />
            </div>
            <div className='overview-side'>
                <div className='welcome-text'>
                    {props.content['welcome']}
                </div>
            </div>
        </section>
        <section className='overview-section'>
            <div className='overview-side'>
                <Link className='overview-header' to='/services'>
                    {props.content['services']}
                </Link>
            </div>
            <div className='overview-side'>
                <img className='overview-full-image' src={props.images['services']} alt='our services' />
            </div>
        </section>
        <section className='overview-section'>
            <div className='overview-side'>
                <img className='overview-full-image' src={props.images['office']} alt='our office' />    
            </div>
            <div className='overview-side'>
                <Link className='overview-header' to='/office'>
                    {props.content['office']}
                </Link>   
            </div>
        </section>
        <section className='overview-section'>
            <div className='overview-side'>
                <Link className='overview-header' to='/staff'>
                    {props.content['team']}
                </Link>
            </div>
            <div className='overview-side'>
                <img className='overview-full-image' src={props.images['team']} alt='our team' />    
            </div>
        </section>
        <section className='overview-section'>
            <div className='overview-side'>
                <img className='overview-full-image' src={props.images['forms']} alt='forms' />    
            </div>
            <div className='overview-side'>
                <Link className='overview-header' to='/forms'>
                    {props.content['forms']}
                </Link>
            </div>
        </section>
    </main>

  )
}

export default SiteOverview