import '../Styles/Forms.css';
import Header from './Header';
import Footer from './Footer';
import npp from '../Assets/Forms/New-Patient-Packet.pdf';
import toc from '../Assets/Forms/Types_of_cleanings.pdf';

function Forms() {
    return (
        <div className='forms-container'>
            <Header active='forms' />
            <div className='forms'>
                <div className='forms-title'>
                    New patient forms
                </div>
                <div className='forms-descriptions'>
                    Please print and fill out these forms so we can expedite your first visit:
                </div>
                <a className='forms-link' href={npp} target='_blank' rel='noreferrer noopener'>New patient Packet</a>
                <a className='forms-link' href={toc} target='_blank' rel='noreferrer noopener'>Types of Cleanings</a>
            </div>
            <Footer />
        </div>
    )
}

export default Forms