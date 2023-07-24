import React from 'react';
import '../../Styles/Team.css';
import angie from '../../Assets/Staff/angie.jpeg'

function Angie() {
    return (
        <div className='team'>
            <div className='team-image-side'>
                <img src={angie} alt='angie' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Angie
                </div>
                <div className='team-blurb'>
                    Angela Espinoza is excited to return to the Union Hills Family Dentistry
                    team as a Dental Hygienist! She graduated from Rio Salado Community
                    College Dental Hygiene Program in 2021. Outside of work, Angela is
                    happily married and has four adopted cats. She enjoys all art and
                    crafts including making greeting cards, sewing, painting and reading.
                    Angela loves to travel and experience new cultures and food!
                </div>
            </div>
        </div>
    )
}

export default Angie