import '../Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Office from './Office';
import Staff from './Staff';
import Forms from './Forms';
import Request from './Request';
import RouteChange from './RouteChange';

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
                        </Routes>
                    </RouteChange>
                </Router>
            </div>
        </div>
        
    );
}

export default App;
