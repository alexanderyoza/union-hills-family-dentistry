/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../Styles/Request.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';

function Request() {

    const [month, setMonth] = useState('0');
    const [day, setDay] = useState('0');
    const [year, setYear] = useState('0');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [ampm, setAmpm] = useState('Am');
    const [dayOfWeek, setDayOfWeek] = useState('0');
    const [timeOfDay, setTimeOfDay] = useState('0');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [firstNameFilled, setFirstNameFilled] = useState(true);
    const [lastNameFilled, setLastNameFilled] = useState(true);
    const [emailFilled, setEmailFilled] = useState(true);
    const [phoneFilled, setPhoneFilled] = useState(true);
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const date = new Date();

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    useEffect(() => {

        if (!firstName) {
            setFirstNameFilled(false);
        } else {
            setFirstNameFilled(true);
        }

    }, [firstName]);

    useEffect(() => {
        
        if (!lastName) {
            setLastNameFilled(false);
        } else {
            setLastNameFilled(true);
        }

    }, [lastName]);

    useEffect(() => {
        
        if (!email) {
            setEmailFilled(false);
        } else {
            setEmailFilled(true);
        }

    }, [email]);

    useEffect(() => {
        
        if (!phone) {
            setPhoneFilled(false);
        } else {
            setPhoneFilled(true);
        }

    }, [phone]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        for (let v of [firstNameFilled, lastNameFilled, emailFilled, phoneFilled]) {
            if (!v) {
                alert('Submit not successful. Please ensure all required boxes are correctly completed.')
                return;
            }
        }

        if (!email.includes('@')) {
            alert('Submit not successful. Please ensure that your email is correct.')
            return;
        }

        if (phone.length !== 10 && phone.length !== 11) {
            if (!phone.includes('(') && !phone.includes(')') && !phone.includes('-')&& !phone.includes('+')) {
                alert('Submit not successful. Please ensure that your phone number is correct.')
                return;
            }
        }

        try {
            //create email info
            const info = {
                'month': month,
                'day': day,
                'year': year,
                'hour': hour,
                'minute': minute,
                'ampm': ampm,
                'dayOfWeek': dayOfWeek,
                'timeOfDay': timeOfDay,
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'phone': phone,
                'reason': reason,
            };
            //post email info and await response
            await axios.post('http://localhost:9000/requestappointment', info);

        } catch (err) {
            console.log(err);
            return;
        }

        setSubmitted(true);
    }

    const handleDisplay = () => {
        if(submitted) {
            return (
                <div className='request-container' >
                    <Header active='request' />
                    <div className='request'>
                        <div className='spacing request-title'>
                            Request an appointment
                        </div>
                        <div className='spacing request-description'>
                            Your request was succesfully submitted
                        </div>
                        <div className='request-notice'>
                            NOTICE: This is only a request. It is not a booked appointment.
                            Our scheduling coordinator will contact you to confirm your appointment or
                            please call at (623)878-4460.
                        </div>
                    </div>
                    <Footer />
                </div >
            )
        }
        return (
            <div className='request-container' >
                <Header active='request' />
                <div className='request'>
                    <div className='spacing request-title'>
                        Request an appointment
                    </div>
                    <div className='spacing request-description'>
                        To request appointment availability, please fill out the form below.
                        Our scheduling coordinator will contact
                        you to confirm your appointment.
                    </div>
                    <div className='spacing request-form'>
                        <div className='small-spacing request-form-section'>
                            <div className='request-header'>
                                Preferred Date
                            </div>
                            <div className='request-date-inputs'>
                                <select id='month' name='month' onChange={(event) => setMonth(event.target.value)}>
                                    <option value={0}>Select Month</option>
                                    <option value={1}>January</option>
                                    <option value={2}>February</option>
                                    <option value={3}>March</option>
                                    <option value={4}>April</option>
                                    <option value={5}>May</option>
                                    <option value={6}>June</option>
                                    <option value={7}>July</option>
                                    <option value={8}>August</option>
                                    <option value={9}>September</option>
                                    <option value={10}>October</option>
                                    <option value={11}>November</option>
                                    <option value={12}>December</option>
                                </select>
                                <select id='day' name='day' onChange={(event) => setDay(event.target.value)}>
                                    <option value={0}>Select Day</option>
                                    {days.map((d) => (<option value={d}>{d}</option>))}
                                </select>
                                <select id='year' name='year' onChange={(event) => setYear(event.target.value)}>
                                    <option value={0}>Select Year</option>
                                    <option value={date.getFullYear()}>{date.getFullYear()}</option>
                                    <option value={date.getFullYear() + 1}>{date.getFullYear() + 1}</option>
                                </select>
                            </div>
                        </div>
                        <div className='small-spacing request-form-section'>
                            <div className='request-header'>
                                Preferred Time
                            </div>
                            <div className='request-time-inputs'>
                                <input placeholder='Hour' type="text" id="hour" value={hour}
                                    onChange={(event) => setHour(event.target.value)}></input>
                                <div>
                                    :
                                </div>
                                <input placeholder='Minute' type="text" id="minute" value={minute}
                                    onChange={(event) => setMinute(event.target.value)}></input>
                                <select id='ampm' name='ampm' onChange={(event) => setAmpm(event.target.value)}>
                                    <option value='Am'>Am</option>
                                    <option value='Pm'>Pm</option>
                                </select>
                            </div>
                        </div>
                        <div className='small-spacing request-form-section'>
                            <div className='request-header'>
                                Preferred Day of the Week
                            </div>
                            <div className='request-dayofweek-inputs'>
                                <select id='dayofweek' name='dayofweek' onChange={(event) => setDayOfWeek(event.target.value)}>
                                    <option value=''>Select Day</option>
                                    <option value='monday'>Monday</option>
                                    <option value='tuesday'>Tuesday</option>
                                    <option value='wednesday'>Wednesday</option>
                                    <option value='thursday'>Thursday</option>
                                    <option value='friday'>Friday</option>
                                </select>
                            </div>
                        </div>
                        <div className='small-spacing request-form-section'>
                            <div className='request-header'>
                                Preferred Time of the Day
                            </div>
                            <div className='request-timeofday-inputs'>
                                <select id='timeofday' name='timeofday' onChange={(event) => setTimeOfDay(event.target.value)}>
                                    <option value=''>Select Time</option>
                                    <option value='morning'>Morning</option>
                                    <option value='lunchtime'>Lunchtime</option>
                                    <option value='afternoon'>Afternoon</option>
                                </select>
                            </div>
                        </div>
                        <div className='small-spacing request-form-section-required'>
                            <div className='request-header'>
                                Name <span>(required)</span>
                            </div>
                            <div className='request-name-inputs'>
                                <input placeholder='First Name' className={firstNameFilled ?  'request-required-input' : 'request-error-input'} type="text" id="firstname" value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}></input>
                                <input placeholder='Last Name' className={lastNameFilled ?  'request-required-input' : 'request-error-input'} type="text" id="lastname" value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}></input>
                            </div>
                        </div>
                        <div className='small-spacing request-form-section-requied'>
                            <div className='request-header'>
                                Contact Information <span>(required)</span>
                            </div>
                            <div className='request-contact-inputs'>
                                <input placeholder='Email' className={emailFilled ?  'request-required-input' : 'request-error-input'} type="text" id="email" value={email}
                                    onChange={(event) => setEmail(event.target.value)}></input>
                                <input placeholder='Phone Number' className={phoneFilled ?  'request-required-input' : 'request-error-input'} type="text" id="phone" value={phone}
                                    onChange={(event) => setPhone(event.target.value)}></input>
                            </div>
                        </div>
                        <div className='small-spacing request-form-section'>
                            <div className='request-header'>
                                Reason for appointment:
                            </div>
                            <div className='request-reason-inputs'>
                                <textarea name='reason' id='reason' cols='30' rows='10' value={reason}
                                    onChange={(event) => setReason(event.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='small-spacing request-button-container'>
                            <div onClick={handleSubmit}>
                                Submit
                            </div>
                        </div>
                        <div className='request-notice'>
                            NOTICE: This is only a request. It is not a booked appointment.
                            Our scheduling coordinator will contact you to confirm your appointment or
                            please call at (623)878-4460.
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }


    return handleDisplay();
}

export default Request