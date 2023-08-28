import React from 'react';
import '../Styles/Staff.css';
import { useEffect } from 'react';
import teamnarrow from '../Assets/team-narrow.jpg';
import Header from './Header';
import Footer from './Footer';
import ethan from '../Assets/Staff/ethan.jpeg';
import Blanca from './Team/Blanca';
import Angie from './Team/Angie';
import Kirsten from './Team/Kirsten';
import Ann from './Team/Ann';
import Jamie from './Team/Jamie';
import Shelby from './Team/Shelby';


function Staff() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='staff-container'>
            <Header active='staff'/>
            <img className='staff-image' src={teamnarrow} alt='team' />
            <div className='staff-title'>
                Meet Our Team
            </div>
            <div className='staff-content'>
                <section className='dentist'>
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
                </section>
                <Blanca />
                <Angie />
                <Kirsten />
                <Ann />
                <Jamie />
                <Shelby />
            </div>
            <Footer />
        </div>
    )
}

export default Staff