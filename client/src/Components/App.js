import '../Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RouteChange from './RouteChange';

function App() {
    return (
        <div className='App-Container'>
            <div className='App'>
                <Router>
                    <RouteChange>
                        <Routes>
                            <Route exact path='/' element={< Home />}></Route>
                        </Routes>
                    </RouteChange>
                </Router>
            </div>
        </div>
        
    );
}

export default App;