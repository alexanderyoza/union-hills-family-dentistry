import React from 'react';
import '../Styles/Staff.css';
import teamnarrow from '../Assets/team-narrow.jpg';
import Header from './Header';
import ethan from '../Assets/Staff/ethan.jpeg';

function Staff() {

    return (
        <div className='staff-container'>
            <Header active='staff'/>
            <img className='staff-image' src={teamnarrow} alt='team' />
            <div className='staff-title'>
                Meet Our Team
            </div>
            <div className='staff-content'>
                <div className='dentist'>
                    <div className='dentist-image-side'>
                        <img src={ethan} alt='Doctor Ethan Yoza' />
                    </div>
                    <div className='dentist-blurb-side'>
                        <div className='dentist-name'>
                            Doctor Ethan J. Yoza
                        </div>
                        <div className='dentist-blurb'>
                            <div>
                                Dr. Ethan J. Yoza DDS, FAGD was born and raised in Honolulu, Hawaii.
                                He has been happily married to his wife, Kymberly, also from Hawaii, for 19 years.
                                Their two children, Alex and Lexi, keep the whole family busy with sports.
                            </div>
                            <div>
                                After serving five years in the United States Air Force,
                                Dr. Yoza decided to build his dental office and make Arizona his new home.
                                Dr. Yoza is honored to be able to provide high quality, gentle, and compassionate
                                dentistry to his patients. He treats every patient like they are a part of his family.
                                Dr. Yoza will provide you with The Dental Care You’ve Been Looking For.
                            </div>
                        </div>
                        <div className='dentist-qualification'>
                            <div className='dentist-qualification-category'>
                                Education and Formal Training:
                            </div>
                            <div className='dentist-qualification-list'>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Post Doctorate Education: Advanced Education in General Dentistry
                                    </div>
                                    <div className='dentist-qualification-specification'>
                                        Scott Air Force Base, Illinois (2001)
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Professional Education: D.D.S.
                                    </div>
                                    <div className='dentist-qualification-specification'>
                                        University of Missouri at Kansas City-School of Dentistry (2000)
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Undergraduate Education: Zoology
                                    </div>
                                    <div className='dentist-qualification-specification'>
                                        University of Hawaii at Manoa (1996)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='dentist-qualification'>
                            <div className='dentist-qualification-category'>
                                Awards:
                            </div>
                            <div className='dentist-qualification-list'>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Fellow of the Academy of General Dentistry (FAGD) (2005)
                                    </div>
                                    <div className='dentist-qualification-specification'>
                                        374th Dental Squadron Officer of the Year United States Air Force Health Professions Scholarship
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        UMKC Dental summer scholar
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='dentist-qualification'>
                            <div className='dentist-qualification-category'>
                                Licensure and Certification:
                            </div>
                            <div className='dentist-qualification-list'>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Licensing Board: Western Regional Examining Board (2000)
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        State Licensure: Arizona (2000)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='dentist-qualification'>
                            <div className='dentist-qualification-category'>
                                Proffesional Affiliations:
                            </div>
                            <div className='dentist-qualification-list'>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Academy of General Dentistry
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        American Dental Association
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Arizona Dental Association
                                    </div>
                                </div>
                                <div className='dentist-qualification-item'>
                                    <div className='dentist-qualification-name'>
                                        Central Arizona Dental Society
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Staff