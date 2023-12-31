import React from 'react';
import '../Styles/PatientPrivacy.css';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function PatientPrivacy() {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);
    return (
        <div className='privacy-container'>
            <Header active='' />
            <div className='privacy'>
                <h1>
                    Patient Privacy
                </h1>
                <div>
                    THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND
                    DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
                </div>
                <div>
                    PLEASE REVIEW IT CAREFULLY. THE PRIVACY OF YOUR MEDICAL INFORMATION IS
                    IMPORTANT TO US.
                </div>
                <h2>
                    Our Legal Duty
                </h2>
                <div>
                    We are required by applicable federal and state laws to maintain the privacy
                    of your protected health information. We are also required to give you this notice
                    about our privacy practices, our legal duties, and your rights concerning your
                    protected health information. We must follow the privacy practices that are described
                    in this notice while it is in effect. This notice takes effect April 14, 2003, and will
                    remain in effect until we replace it.
                </div>
                <div>
                    We reserve the right to change our privacy practices and the terms of
                    this notice at any time, provided that such changes are permitted by
                    applicable law. We reserve the right to make the changes in our privacy
                    practices and the new terms of our notice effective for all protected
                    healthin formation that we maintain, including medical information we
                    created or received before we made the changes.
                </div>
                <div>
                    You may request a copy of our notice (or any subsequent revised notice) at any time. For more
                    information about our privacy practices, or for additional copies of this notice,please contact us
                    using the information listed at the end of this notice.
                </div>
                <h2>
                    Uses and Disclosures of Protected Health Information
                </h2>
                <div>
                    We will use and disclose your protected health information about you for treatment,
                    payment, and health care operations. Following are examples of the types of uses and
                    disclosures of your protected health care information that may occur. These examples
                    are not meant to be exhaustive,but to describe the types of uses and disclosures
                    that maybe made by our office.
                </div>
                <div>
                    Treatment: We will use and disclose your protected health information to provide,
                    coordinate or manage your healthcare and any related services. This includes the
                    coordination or management of your health care with a third party. For example,
                    we would disclose your protected health information, as necessary, to a home health
                    agency that provides care to you. We will also disclose protected health information
                    to other physicians who may be treating you. For example, your protected health
                    information may be provided to a physician to whom you have been referred to ensure
                    that the physician has the necessary information to diagnose or treat you.
                </div>
                <div>
                    In addition, we may disclose your protected health information from time to time to
                    another physician or health care provider (e.g., a specialist or laboratory)who,
                    at the request of your physician, becomes involved in your care by providing
                    assistance with your health care diagnosis or treatment to your physician.
                </div>
                <div>
                    Payment: Your protected health information will be used, as needed, to obtain payment
                    for your health care services. This may include certain activities that your health
                    insurance plan may undertake before it approves or pays for the health care services
                    we recommend for you, such as:making a determination of eligibility or coverage for
                    insurance benefits, reviewing services provided to you for protected health
                    necessity, and undertaking utilization review activities. For example, obtaining
                    approval for a hospital stay may require that your relevant protected health
                    information be disclosed to the health plan to obtain approval for the hospital
                    admission.
                </div>
                <div>
                    Health Care Operations: We may use or disclose, as needed,your protected health
                    information in order to conduct certain business and operational activities. These
                    activities include, but are not limited to, quality assessment activities, employee
                    review activities, training of students, licensing, and conducting or arranging for
                    other business activities.
                </div>
                <div>
                    For example, we may use a sign-in sheet at the registration desk where you will be 
                    asked to sign your name. We may also call you by name in the waiting room when your 
                    doctor is ready to see you. We may use or disclose your protected health information, 
                    as necessary, to contact you by telephone or mail to remind you of your appointment. 
                </div>
                <div>
                    We will share your protected health information with third party “business associates”
                    that perform various activities(e.g., billing, transcription services) for the
                    practice. Whenever an arrangement between our office and a business associate
                    involves the use or disclosure of your protected health information, we will have
                    a written contract that contains terms that will protect the privacy of your
                    protected health information.
                </div>
                <div>
                    We may use or disclose your protected health information,as necessary, to provide
                    you with information about treatment alternatives or other health-related benefits
                    and services that may be of interest to you. We may also use and disclose your
                    protected health information for other marketing activities. For example, your
                    name and address may be used to send you a newsletter about our practice and the
                    services we offer. We may also send you information about products or services
                    that we believe may be beneficial to you. You may contact us to request that
                    these materials not be sent to you.
                </div>
                <div>
                    Uses and Disclosures Based On Your Written Authorization: Other uses and disclosures
                    of your protected health information will be made only with your authorization,
                    unless otherwise permitted or required by law as described below.
                </div>
                <div>
                    You may give us written authorization to use your protected health information or to 
                    disclose it to anyone for any purpose. If you give us an authorization, you may revoke 
                    it in writing at any time. Your revocation will not affect any use or disclosures 
                    permitted by your authorization while it was in effect. Without your written 
                    authorization, we will not disclose your health care information except as 
                    described in this notice.  
                </div>
                <div>
                    Others Involved in Your Health Care: Unless you object, we may disclose to a
                    member of your family, a relative, a close friend or any other person you
                    identify, your protected health information that directly relates to that
                    person’s involvement in your health care. If you are unable to agree or object
                    to such a disclosure, we may disclose such information as necessary if we
                    determine that it is in your best interest based on our professional judgment.
                    We may use or disclose protected health information to notify or assist in
                    notifying a family member, personal representative or any other person that
                    is responsible for your care of your location, general condition or death.
                </div>
                <div>
                    Marketing: We may use your protected health information to contact you with 
                    information about treatment alternatives that may be of interest to you. We may 
                    disclose your protected health information to a business associate to assist us in 
                    these activities. Unless the information is provided to you by a general newsletter 
                    or in person or is for products or services of nominal value, you may opt out of 
                    receiving further such information by telling us using the contact information listed 
                    at the end of this notice. 
                </div>
                <div>
                    Research; Death; Organ Donation: We may use or disclose your protected health
                    information for research purposes in limited circumstances. We may disclose the
                    protected health information of a deceased person to a coroner, protected health
                    examiner, funeral director or organ procurement organization for certain purposes.
                </div>
                <div>
                    Public Health and Safety: We may disclose your protected health information to the
                    extent necessary to avert a serious and imminent threat to your health or safety,
                    or the health or safety of others. We may disclose your protected health information
                    to a government agency authorized to oversee the health care system or government
                    programs or its contractors, and to public health authorities for public health
                    purposes.
                </div>
                <div>
                    Health Oversight: We may disclose protected health information to a health oversight
                    agency for activities authorized by law, such as audits, investigations and
                    inspections. Oversight agencies seeking this information include government
                    agencies that oversee the health care system, government benefit programs, other
                    government regulatory programs and civil rights laws.
                </div>
                <div>
                    Abuse or Neglect: We may disclose your protected health information to a public health
                    authority that is authorized by law to receive reports of child abuse or neglect.
                    In addition, we may disclose your protected health information if we believe that
                    you have been a victim of abuse, neglect or domestic violence to the governmental
                    entity or agency authorized to receive such information. In this case, the disclosure
                    will be made consistent with the requirements of applicable federal and state laws.
                </div>
                <div>
                    Food and Drug Administration: We may disclose your protected health information to a 
                    person or company required by the Food and Drug Administration to report adverse events, 
                    product defects or problems, biologic product deviations; to track products; to enable 
                    product recalls; to make repairs or replacements; or to conduct post marketing 
                    surveillance, as required.  
                </div>
                <div>
                    Criminal Activity: Consistent with applicable federal and state laws, we may disclose
                    your protected health information, if we believe that the use or disclosure is
                    necessary to prevent or lessen a serious and imminent threat to the health or
                    safety of a person or the public. We may also disclose protected health information
                    if it is necessary for law enforcement authorities to identify or apprehend an
                    individual.
                </div>
                <div>
                    Required by Law: We may use or disclose your protected health information when we are
                    required to do so by law. For example, we must disclose your protected health
                    information to the U.S. Department of Health and Human Services upon request for
                    purposes of determining whether we are in compliance with federal privacy laws.
                    We may disclose your protected health information when authorized by workers’
                    compensation or similar laws.
                </div>
                <div>
                    Process and Proceedings: We may disclose your protected health information in response
                    to a court or administrative order, subpoena, discovery request or other lawful
                    process,under certain circumstances. Under limited circumstances,such as a court
                    order, warrant or grand jury subpoena, wemay disclose your protected health
                    information to law enforcement officials.
                </div>
                <div>
                    Law Enforcement: We may disclose limited information to a law enforcement official
                    concerning the protected health information of a suspect, fugitive, material witness,
                    crime victim or missing person. We may disclose the protected health information
                    of an inmate or other person in lawful custody to a law enforcement official or
                    correctional institution under certain circumstances. We may disclose protected
                    health information where necessary to assist law enforcement officials to capture
                    an individual who has admitted to participation in a crime or has escaped from
                    lawful custody.
                </div>
                <h2>
                    Patient Rights
                </h2>
                <div>
                    Access: You have the right to look at or get copies of your protected health
                    information, with limited exceptions. You must make a request in writing to the
                    contact person listed herein to obtain access to your protected health information.
                    You may also request access by sending us a letter to the address at the end of
                    this notice. If you request copies, we will charge you $25.00 for each page or
                    $10.00 per hour to locate and copy your protected health information, and postage
                    if you want the copies mailed to you. If you prefer, we will prepare a summary
                    or an explanation of your protected health information for a fee. Contact us using
                    the information listed at the end of this notice for a full explanation of our
                    fee structure.
                </div>
                <div>
                    Accounting of Disclosures: You have the right to receive a list of instances
                    in which we or our business associates disclosed your protected health
                    information for purposes other than treatment, payment, health care operations
                    and certain other activities after April 14, 2003. After April 14, 2009,
                    the accounting will be provided for the past six(6) years. We will provide
                    you with the date on which we made the disclosure, the name of the person or
                    entity to whom we disclosed your protected health information, a description
                    of the protected health information we disclosed, the reason for the disclosure,
                    and certain other information. If you request this list more than once in a
                    12-month period, we may charge you a reasonable, cost-based fee for responding
                    to these additional requests. Contact us using the information listed at the end
                    of this notice for a full explanation of our fee structure.
                </div>
                <div>
                    Restriction Requests: You have the right to request that we place additional
                    restrictions on our use or disclosure of your protected health information.
                    We are not required to agree to these additional restrictions, but if we do, we
                    will abide by our agreement (except in an emergency). Any agreement we may make
                    to a request for additional restrictions must be in writing signed by a
                    person authorized to make such an agreement on our behalf. We will not be
                    bound unless our agreement is so memorialized in writing.
                </div>
                <div>
                    Confidential Communication: You have the right to request that we communicate with
                    you in confidence about your protected health information by alternative means
                    or to an alternative location. You must make your request in writing. We must
                    accommodate your request if it is reasonable, specifies the alternative means or
                    location, and continues to permit us to bill and collect payment from you.
                </div>
                <div>
                    Amendment: You have the right to request that we amend your protected health information.
                    Your request must be in writing, and it must explain why the information should be
                    amended. We may deny your request if we did not create the information you want amended
                    or for certain other reasons. If we deny your request, we will provide you a written
                    explanation. You may respond with a statement of disagreement to be appended to the
                    information you wanted amended. If we accept your request to amend the information,
                    we will make reasonable efforts to inform others, including people or entities you name,
                    of the amendment and to include the changes in any future disclosures of that information.
                </div>
                <div>
                    Electronic Notice: If you receive this notice on our website or by electronic mail
                    (e-mail), you are entitled to receive this notice in written form. Please contact
                    us using the information listed at the end of this notice to obtain this notice in
                    written form.
                </div>
                <h2>
                    Questions and Complaints
                </h2>
                <div>
                    If you want more information about our privacy practices or have questions or concerns,
                    please contact us using the information below. If you believe that we may have
                    violated your privacy rights, or you disagree with a decision we made about access
                    to your protected health information or in response to a request you made, you may
                    complain to us using the contact information below. You also may submit a written
                    complaint to the U.S. Department of Health and Human Services. We will provide you
                    with the address to file your complaint with the U.S. Department of Health and Human
                    Services upon request.
                </div>
                <div>
                    We support your right to protect the privacy of your protected health information.
                    We will not retaliate in anyway if you choose to file a complaint with us or with
                    the U.S. Department of Health and Human Services.
                </div>
                <h2>
                    Contact:
                </h2>
                <div>
                    Ethan Yoza
                </div>
                <div>
                    Telephone: 623-878-4460
                </div>
                <div>
                    Address: 8110 West Union Hills Drive, Suite 430. Glendale, AZ 85308
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PatientPrivacy