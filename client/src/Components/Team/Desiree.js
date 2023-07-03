import React from 'react';
import '../../Styles/Team.css';
import desiree from '../../Assets/Staff/desiree.jpeg'

function Desiree() {
    return (
        <div className='team'>
            <div className='team-image-side'>
                <img src={desiree} alt='desiree' />
            </div>
            <div className='team-blurb-side'>
                <div className='team-name'>
                    Desiree
                </div>
                <div className='team-blurb'>
                    I’ve been in the dental industry for what seems to be my whole life.
                    My mother is a Dental Assistant with over 34 years of experiences
                    so I grew up in dental offices all over the valley acquiring the knowledge
                    and passion for treating patients. When I’m not seeing patients, I enjoy hiking
                    and travelling around the world with my son. I also enjoy volunteering for the
                    Autism Speaks Foundation that provides services for the Autism Community.
                </div>
            </div>
        </div>
    )
}

export default Desiree