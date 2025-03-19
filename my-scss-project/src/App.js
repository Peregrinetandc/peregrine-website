import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import './assets/styles/main.scss';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;