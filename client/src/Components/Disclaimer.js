import React from 'react';
import '../Styles/Disclaimer.css';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

function Disclaimer() {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='disclaimer-container'>
            <Header active='' />
            <div className='disclaimer'>
                <h1>
                    Disclaimer
                </h1>
                <h2>
                    DISCLAIMER OF Ethan Yoza and AGY LLC
                </h2>
                <div>
                    Ethan Yoza and AGY LLC expressly disclaims all warranties and
                    responsibilities of any kind, whether express or implied, for
                    the accuracy or reliability of the content of any information
                    contained in this Web Site, and for the suitability, results,
                    effectiveness or fitness for any particular purpose of the services,
                    procedures, advice or treatments referred to herein, such content
                    and suitability, etc., being the sole responsibility of parties
                    other than Ethan Yoza and AGY LLC, and the reliance upon or use of same
                    by you is at your own independent discretion and risk.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Disclaimer