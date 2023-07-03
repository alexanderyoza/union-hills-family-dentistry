import React from 'react';
import '../../Styles/Team.css';
import jamie from '../../Assets/Staff/jamie.jpeg'

function Jamie() {
    return (
        <div className='team'>
            <div className='team-image-side'>
                <img src={jamie} alt='jamie' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Jamie
                </div>
                <div className='team-blurb'>
                    <div>
                        Jamie was born in California, grew up in Las Vegas, Nevada.
                        After moving to Arizona she passionately began working in the
                        dental field in 2005. Over the years her experience has vastly
                        grown with working in Pediatrics, Oral Surgery, Periodontal and General Dentistry.
                        “It is like art to me and I love helping transform the life of someone else.”
                        Here at UHFD you will see what true team work looks like. We take pride in making
                        our patients feel comfortable and respected.
                    </div>
                    <div>
                        Outside the office she is involved with church activities and functions.
                        Jamie and her husband David are also a part of Heavens Healing Hands,
                        a non profit organization that is Restoring Dignity to Veterans,Transforming
                        Homelesssness, Bridging Services, and Creating Hope. Having a big, generous
                        servants heart, Jamie loves to love on people. “I am just a vessel spreading
                        love like Jesus!” She loves spending time with her family, friends and especially
                        her grandson making them laugh and smile warms her heart. She loves Crocs, Groot,
                        Olaf and Giraffes. Jamie enjoys anything outdoors which include her annual camping
                        trips with family, being on the water with her kayak or paddleboard, getting in a good
                        4am workout, hiking, traveling and going on cruises.
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default Jamie