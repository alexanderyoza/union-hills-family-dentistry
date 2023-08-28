import React from 'react';
import '../../Styles/Team.css';
import shelby from '../../Assets/Staff/shelby.jpeg'

function Shelby() {
    return (
        <section className='team'>
            <div className='team-image-side'>
                <img src={shelby} alt='shelby' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Shelby
                </div>
                <div className='team-blurb'>
                    My name is Shelby, my friends call me Ell.
                    I was born in New York, but raised here in Arizona.
                    I have been a dental assistant since February of 2013.
                    I got married to my amazing husband in 2021. We share two beautiful
                    cat children together. When I am not at at work, I am at home either
                    making candles and lotions for my online shop or playing video games.
                </div>
            </div>
        </section>
    )
}

export default Shelby