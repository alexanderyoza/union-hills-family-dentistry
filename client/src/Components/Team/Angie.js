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
                    Angela Espinoza is the GREATEST DENTAL ASSISTANT here at Union Hills
                    Family Dentistry. Angela graduated from Apollo College Dental Assistant
                    program in 2005; she has been an assistant with Dr. Yoza since 2009. She
                    is Certified in Radiology, Coronal Polishing, and CPR. Angela has worked
                    with Periodontists, Endodontists, Prostodontists and Oral Surgeons but
                    prefers General and Cosmetic Dentistry citing, “ I enjoy helping people
                    regain the ability to smile”.Outside of work, Angela is happily married
                    and has two adopted cats. She enjoys all art and crafts including making
                    greeting cards, sewing, painting and reading. Being a native of Arizona,
                    Angela has traveled all the over the Northern half of the state. Ask her
                    where the best spot to enjoy wine tasting or where to go to see the best
                    view of the stars.
                </div>
            </div>
        </div>
    )
}

export default Angie