import React from 'react';
import '../../Styles/ServiceDescription.css';
import Header from '../Header';
import ImplantImg from '../../Assets/ServiceImages/ImplantImg.jpeg';

function ImplantRestorations() {
    return (
        <div className='services-description-container'>
            <Header active='services'/>
            <div className='services-description'>
                <img src={ImplantImg} alt='Implant Restorations' />
                <h1>Implant Restorations</h1>
                <div>
                    Dental implants, made of biocompatible titanium, are surgically placed
                    into the jawbone to provide a stable foundation. Custom-made restorations,
                    such as crowns, bridges, or dentures, are then attached to the implants to
                    create a natural-looking smile.
                </div>
                <h2>
                    Benefits
                </h2>
                <div>
                    Implant restorations offer a multitude of benefits. Firstly, they provide aesthetic
                    improvements, as the restorations are meticulously designed to match the shape,
                    color, and size of your natural teeth, resulting in a seamless and attractive smile.
                    Secondly, implant restorations offer enhanced functionality. The implants fuse with the
                    jawbone, providing a stable and durable base for chewing, speaking, and biting, similar
                    to natural teeth. Unlike traditional removable dentures or bridges, implant restorations
                    are fixed in place, eliminating concerns about discomfort, slipping, or shifting.
                </div>
                <div>
                    Moreover, implant restorations contribute to the long-term health of your jawbone. When a tooth is
                    lost, the underlying bone can deteriorate over time. Dental implants act as artificial tooth roots,
                    stimulating the bone and preventing bone loss. This not only preserves the structure and integrity of
                    the jaw but also promotes a youthful facial appearance. At our dental office, our experienced team will
                    assess your oral health, develop a personalized treatment plan, and utilize advanced technology for
                    precise implant placement and expertly crafted restorations.
                </div>
            </div>

        </div>
    )
}

export default ImplantRestorations