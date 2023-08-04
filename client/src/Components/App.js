import '../Styles/App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Office from './Office';
import Staff from './Staff';
import Forms from './Forms';
import Request from './Request';
import Disclaimer from './Disclaimer';
import PatientPrivacy from './PatientPrivacy';
import RouteChange from './RouteChange';
import Veneers from './Services/Veneers';
import Whitening from './Services/Whitening';
import ImplantRestorations from './Services/ImplantRestorations';
import DenturesSolution from './Services/DenturesSolution';
import InvisibleBraces from './Services/InvisibleBraces';
import SameDayCrowns from './Services/SameDayCrowns';

function App() {
    return (
        <div className='App-Container'>
            <div className='App'>
                <Router>
                    <RouteChange>
                        <Routes>
                            <Route exact path='/' element={< Home />}></Route>
                            <Route exact path='/office' element={< Office />}></Route>
                            <Route exact path='/services' element={< Services />}></Route>
                            <Route exact path='/staff' element={< Staff />}></Route>
                            <Route exact path='/forms' element={< Forms />}></Route>
                            <Route exact path='/request' element={< Request />}></Route>
                            <Route exact path='/disclaimer' element={< Disclaimer />}></Route>
                            <Route exact path='/patientprivacy' element={< PatientPrivacy />}></Route>
                            <Route exact path='/veneers' element={< Veneers />}></Route>
                            <Route exact path='/whitening' element={< Whitening />}></Route>
                            <Route exact path='/implantrestorations' element={< ImplantRestorations />}></Route>
                            <Route exact path='/denturessolution' element={< DenturesSolution />}></Route>
                            <Route exact path='/invisiblebraces' element={< InvisibleBraces />}></Route>
                            <Route exact path='/samedaycrowns' element={< SameDayCrowns />}></Route>
                        </Routes>
                    </RouteChange>
                </Router>
            </div>
        </div>
        
    );
}

export default App;
