import '../Styles/SiteOverview.css';
import { Link } from 'react-router-dom';
import OverlayBlock from './OverlayBlock';
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
            <OverlayBlock
                picture={props.images['services']}
                alt='our services'
                content={
                    <Link className='overview-header' to='/services'>
                        {props.content['services']}
                    </Link>
                }
            />
        </section>
        <section className='overview-section'>
            <OverlayBlock
                picture={props.images['office']}
                alt='our office'
                content={
                    <Link className='overview-header' to='/office'>
                        {props.content['office']}
                    </Link>
            }
            />
        </section>
        <section className='overview-section'>
            <OverlayBlock
                picture={props.images['team']}
                alt='our team'
                content={
                    <Link className='overview-header' to='/staff'>
                        {props.content['team']}
                    </Link>
                }
            />
            
        </section>
        <section className='overview-section'>
            <OverlayBlock
            picture={props.images['forms']}
            alt='forms'
            content={
                <Link className='overview-header' to='/forms'>
                    {props.content['forms']}
                </Link>
            }
            />
            
        </section>
    </main>

  )
}

export default SiteOverview