import React from 'react';
import '../../Styles/Team.css';
import heather from '../../Assets/Staff/heather.jpeg'

function Heather() {
    return (
        <section className='team'>
            <div className='team-image-side'>
                <img src={heather} alt='jamie' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Heather
                </div>
                <div className='team-blurb'>
                    <div>
                        Front office
                    </div>
               
                </div>
            </div>
        </section>
    )
}

export default Heather