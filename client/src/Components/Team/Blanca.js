import React from 'react';
import '../../Styles/Team.css';
import blanca from '../../Assets/Staff/blanca.jpeg'

function Blanca() {
    return (
        <section className='team'>
            <div className='team-image-side'>
                <img src={blanca} alt='blanca' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Blanca
                </div>
                <div className='team-blurb'>
                    Blanca has worked in the dental field since 2002 as a front office associate and
                    treatment coordinator. Blanca began working with Dr. Yoza in 2009 and enjoys
                    the great family atmosphere as well as the team’s high standards in patient care.
                    She believes patient trust is very important. She likes to celebrate when a patient
                    takes the last step in finishing treatment and getting them back to a healthy state.
                    Out of the office, Blanca enjoys spending time with her three children and hiking.
                </div>
            </div>
        </section>
    )
}

export default Blanca