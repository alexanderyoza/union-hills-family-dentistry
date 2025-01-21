import React from 'react';
import '../../Styles/Team.css';
import kat from '../../Assets/Staff/kat.jpeg'

function Kat() {
    return (
        <section className='team'>
            <div className='team-image-side'>
                <img src={kat} alt='jamie' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Kat
                </div>
                <div className='team-blurb'>
                    <div>
                        Assistant
                    </div>
               
                </div>
            </div>
        </section>
    )
}

export default Kat