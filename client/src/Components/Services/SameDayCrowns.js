import React, { useEffect } from 'react';
import '../../Styles/ServiceDescription.css';
import Header from '../Header';
import Footer from '../Footer';
import SameDayCrownsImg from '../../Assets/ServiceImages/Crown.jpeg';

function SameDayCrowns() {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='services-description-container'>
            <Header active='services'/>
            <div className='services-description'>
                <img src={SameDayCrownsImg} alt='Same Day Crowns' />
                <h1>Same Day Crowns</h1>
                <div>
                    Crowns are synthetic caps, usually made of porcelain, placed on top of the tooth. 
                    Crowns are used to restore a tooth’s function and appearance following a procedure 
                    such as a root canal. Crowns also restore teeth that have extensive decay, large 
                    defective fillings or teeth that have cracks. 
                </div>
                <div>
                    In our office we have the ability to fabricate porcelain crowns in a short 2 hour 
                    appointment utilizing CEREC technology. 
                </div>
                <h2>How Does The CEREC Machine Work?</h2>
                <div>
                    The CEREC (Chairside Economical Restoration of Esthetic Ceramics) machine is a dental
                    tool used to make customized ceramic dental restorations in one visit, speeding up a
                    process that typically requires sending a mold of a patient’s teeth to a dental
                    laboratory to get a part made, which can take up to a week and requires multiple
                    trips to the dentist.
                </div>
                <div>
                    CEREC machines produce ceramic onlays, inlays and dental crowns with the use of
                    3D scans, allowing dentists to provide same-day restorations for patients
                    who need crowns or dental implants.
                </div>
                <div>
                    CEREC machines use 3D-imaging software to make a detailed replication of your
                    teeth. The process begins with your dentist taking X-rays and photographs
                    of your mouth with the CEREC machine, which uses the information received to
                    create a 3D model of your mouth. The Computer-Aided Design (CAD) software
                    then highlights the parts of the model that need to be fixed.
                </div>
                <div>
                    Once the 3D model and the areas that need to be restored have been highlighted,
                    the machine will create the restoration from a solid ceramic block. The
                    machine-created piece will then be color-matched to your natural teeth.
                </div>
                <h2>Advantages of CEREC machines</h2>
                <div>
                    Saves time: More dentists are having CEREC machines installed in their offices
                    because it saves both them and their patients time — for example, if you go to
                    a dentist’s office to get a dental crown and the dentist does not have a CEREC
                    machine, they will have to take a mold of your teeth and send it to a laboratory
                    to get the crown made, and then the dentist will give you a temporary crown until
                    you come back in when the permanent crown arrives to finish the procedure;
                    basically, having a CEREC machine eliminates the waiting period so you do not
                    have to go back a second time.
                </div>
                <div>
                    Accuracy: The CAD technology used by CEREC machines provides the most accurate
                    replication of your tooth, which means the size and shape of the replica will
                    be almost identical to your real tooth.
                </div>
                <div>
                    Reduces waste: Due to the accuracy of the machine, the replica created by the
                    CEREC machine is very precise, which means it only uses the needed amount of
                    the material used to create the replica, reducing waste
                </div>
                <h2>
                    Caring For Your Crowns
                </h2>
                <div>
                    With proper care, a good quality crown could last
                    up to eight years or longer. It is very important
                    to floss in the area of the crown to avoid excess plaque
                    or collection of debris around the restoration.
                </div>
                <div>
                    Certain behaviors such as jaw clenching or
                    bruxism (teeth grinding) significantly shorten the life of a
                    crown. Moreover, eating brittle foods, ice or hard candy can
                    compromise the adhesion of the crown, or even damage the crown.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SameDayCrowns