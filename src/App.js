import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HeaderTwo from './components/HeaderTwo';
import Intro from './components/Intro';
import EmergencyRolls from './components/EmergencyRolls';
import HamburgerMenu from './components/Hamburger'; // ייבא את קומפוננטת ההמבורגר

function App() {
    return (
        <div className="App">
            <HeaderTwo className="header-fixed" />
            <Routes>
                <Route path="/" element={<Navigate to="/tzahi" />} />
                <Route path="/tzahi" element={<Intro />} />
                <Route path="/tzahi/home" element={<Home className="home" />} />
                <Route path="/tzahi/EmergencyRolls" element={<EmergencyRolls />} />
                <Route path="/tzahi/EmergencyRolls/:scenarioId" element={<EmergencyRolls />} />
                <Route path="/tzahi/hamburger" element={<HamburgerMenu />} /> {/* הוסף את הנתיב לעמוד ההמבורגר */}
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
