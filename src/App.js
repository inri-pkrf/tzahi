import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './componentsJS/Home';
import HeaderTwo from './componentsJS/Header';
import Intro from './componentsJS/Intro';
import EmergencyRolls from './componentsJS/EmergencyRolls';
import HamburgerMenu from './componentsJS/Hamburger'; // ייבא את קומפוננטת ההמבורגר

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
