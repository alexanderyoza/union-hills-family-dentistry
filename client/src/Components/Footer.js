import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <Link to="/" className="foot-link">Home</Link>
                <Link to="/services" className="foot-link">Services</Link>
                <Link to="/office" className="foot-link">Office</Link>
                <Link to="/staff" className="foot-link">Staff</Link>
                <Link to="/forms" className="foot-link">Forms</Link>
                <Link to="/request" className="foot-link">Schedule</Link>
                <Link to="/disclaimer" className="foot-link">Disclaimer</Link>
                <Link to="/patientprivacy" className="foot-link">Patient Privacy</Link>
            </div>
            <div className="footer-copyright">
                Copyright © 2023 Union Hills Family Dentistry. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;