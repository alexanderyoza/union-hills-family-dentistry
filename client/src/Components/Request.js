import React from 'react'
import '../Styles/Request.css';
import Header from './Header';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Request() {

    const navigate = useNavigate();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [ampm, setAmpm] = useState('Am');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [reason, setReason] = useState('');
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const date = new Date();
    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (!email || !password) {
        //     return;
        // }

        try {
            //const loginResponse = await axios.post('URL', {email, password});
            throw console.error('temporary');
        } catch (err) {
            if (err.response.status === 403) {
                alert('User has not verified their email. Please check your email to complete verification.');
            }
            else if (err.response.status === 404) {
                alert('Login failed. Please double check your email and password.');
            }
            console.log(err);
        }
    }


    return (
        <div className='request-container'>
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
                                <option value={date.getFullYear()+1}>{date.getFullYear()+1}</option>
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
                                <option value=''>Select Day</option>
                                <option value='morning'>Morning</option>
                                <option value='lunchtime'>Lunchtime</option>
                                <option value='afternoon'>Afternoon</option>
                            </select>
                        </div> 
                    </div>
                    <div className='small-spacing request-form-section'>
                        <div className='request-header'>
                            Name <span>(required)</span>
                        </div>
                        <div className='request-name-inputs'>
                            <input placeholder='First Name' type="text" id="firstname" value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}></input>
                            <input placeholder='Last Name' type="text" id="lastname" value={lastName}
                                onChange={(event) => setLastName(event.target.value)}></input>
                        </div> 
                    </div>
                    <div className='small-spacing request-form-section'>
                        <div className='request-header'>
                            Contact Information <span>(required)</span>
                        </div>
                        <div className='request-contact-inputs'>
                            <input placeholder='Email' type="text" id="email" value={email}
                                onChange={(event) => setEmail(event.target.value)}></input>
                            <input placeholder='Phone Number' type="text" id="phone" value={phone}
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
                </div>
            </div>
        </div>
    )
}

export default Request