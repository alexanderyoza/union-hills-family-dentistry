import React, { useEffect } from 'react';
import '../../Styles/ServiceDescription.css';
import Header from '../Header';
import Footer from '../Footer';
import SameDayCrownsImg from '../../Assets/ServiceImages/Crown.jpeg';

function SameDayCrowns() {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='services-description-container'>
            <Header active='services'/>
            <div className='services-description'>
                <img src={SameDayCrownsImg} alt='Same Day Crowns' />
                <h1>Same Day Crowns</h1>
                <div>
                    Crowns are synthetic caps, usually made of a material like porcelain,
                    placed on the top of a tooth.
                    Crowns are typically used to restore a tooth’s function and appearance
                    following a restorative procedure such as a root canal. When decay in a
                    tooth has become so advanced that large portions of the tooth must be
                    removed, crowns are often used to restore the tooth.
                </div>
                <div>
                    Crowns are also used to attach bridges, cover implants, prevent a cracked
                    tooth from becoming worse, or an existing filling is in jeopardy of becoming
                    loose or dislocated. Crowns also serve an aesthetic use, and are applied
                    when a discolored or stained tooth needs to be restored to its natural appearance.
                </div>
                <h2>
                    Procedures
                </h2>
                <div>
                    A tooth must usually be reduced in size to accommodate a crown.
                    An impression is then made from the existing tooth to create a
                    custom-designed crown. The impression is sent to a special lab,
                    which manufactures a custom-designed crown. In some cases, a temporary
                    crown is applied until the permanent crown is ready. Permanent crowns
                    are cemented in place.
                </div>
                <div>
                    Crowns are sometimes confused with veneers,
                    but they are quite different. Veneers are typically
                    applied only to relatively small areas.
                </div>
                <h2>
                    Caring For Your Crowns
                </h2>
                <div>
                    With proper care, a good quality crown could last
                    up to eight years or longer. It is very important
                    to floss in the area of the crown to avoid excess plaque
                    or collection of debris around the restoration.
                </div>
                <div>
                    Certain behaviors such as jaw clenching or
                    bruxism (teeth grinding) significantly shorten the life of a
                    crown. Moreover, eating brittle foods, ice or hard candy can
                    compromise the adhesion of the crown, or even damage the crown.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SameDayCrowns