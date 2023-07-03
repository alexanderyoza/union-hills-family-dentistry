import React from 'react';
import '../../Styles/Team.css';
import ann from '../../Assets/Staff/ann.jpeg'

function Ann() {
    return (
        <div className='team'>
            <div className='team-image-side'>
                <img src={ann} alt='ann' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Ann
                </div>
                <div className='team-blurb'>
                    I am a second generation Arizonian.
                    Lived here when Phoenix was a small farming community.
                    I attended Central High School and had a fun time cruising
                    central phoenix. After high school I attended Phoenix College
                    and the dental hygiene school. I graduated in the first class
                    and we had to promote ourselves to dentists as they were not
                    aware of dental hygiene as a profession. My first job was in general
                    dentistry although my interests were in Periodontics. I eventually
                    ended up in Periodontics for 28 years and was certified in expanded
                    functions. I later switched my direction to general dentistry and
                    Prosthodontics which was a new learning experience. As the doc
                    I was working for passed away from ALS, I became a new member of
                    Dr. Yoza’s Staff. Always the best for last! I am semi-retired now
                    and still enjoy my old friends and patients who I adore. Although
                    athletics were fun for years, I now enjoy my cabin and fishing
                    in Alaska with my partner in crime Dan. My 2 kids are grown and
                    have 1 granddaughter and a cat.
                </div>
            </div>
        </div>
    )
}

export default Ann