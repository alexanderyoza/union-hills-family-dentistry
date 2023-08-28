import React from 'react';
import '../../Styles/Team.css';
import kirsten from '../../Assets/Staff/kirsten.jpeg'

function Kirsten() {
    return (
        <section className='team'>
            <div className='team-image-side'>
                <img src={kirsten} alt='kirsten' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Kirsten
                </div>
                <div className='team-blurb'>
                    Originally from Alaska, Kirsten moved to Arizona in July 2010.
                    She graduated from dental hygiene school in Mesa, Arizona and has
                    over 5 years of dental experience. In her spare time, Kirsten likes
                    to check out new restaurants, play frolf, go geocaching, and traveling.
                </div>
            </div>
        </section>
    )
}

export default Kirsten