import '../Styles/SiteOverviewMobile.css';
import { Link } from 'react-router-dom';
import OverlayBlock from './OverlayBlock';
import wave from '../Assets/wave.jpg';

function SiteOverviewMobile(props) {
  return (
    <div className='site-overview-mobile'>
        <OverlayBlock 
            picture={wave} 
            alt='union hills family dentistry logo' 
            content={
                <div id='mobile-welcome-text'>
                    {props.content['welcome']}
                </div>
            }
        />

        <OverlayBlock
            picture={props.images['services']}
            alt='our services'
            content={
                <Link className='mobile-overview-header' to='/services'>
                    {props.content['services']}
                </Link>
            }
        />
        
        <OverlayBlock
            picture={props.images['office']}
            alt='our office'
            content={
                <Link className='mobile-overview-header' to='/office'>
                    {props.content['office']}
                </Link>
            }
        />
        
        <OverlayBlock
        picture={props.images['team']}
        alt='our team'
        content={
            <Link className='mobile-overview-header' to='/staff'>
                {props.content['team']}
            </Link>
        }
        />
        
        <OverlayBlock
        picture={props.images['forms']}
        alt='forms'
        content={
            <Link className='mobile-overview-header' to='/forms'>
                {props.content['forms']}
            </Link>
        }
        />
    </div>

  )
}

export default SiteOverviewMobile