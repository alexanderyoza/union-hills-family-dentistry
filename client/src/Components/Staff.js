import React from 'react';
import '../Styles/Staff.css';
import team from '../Assets/team.jpg';

function Staff() {
    return (
        <div className='staff-container'>
            <img className='staff-image' src={team} alt='team' />
            <div className='staff-content'>
            </div>
        </div>
    )
}

export default Staff