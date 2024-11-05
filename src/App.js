import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './componentsJS/Home';
import Header from './componentsJS/Header';
import Intro from './componentsJS/Intro';
import Hamburger from './componentsJS/Hamburger'; 
import Credits from './componentsJS/Credits';
import EmergencyRolls from './componentsJS/EmergencyRolls';

function App() {
    return (
        <div className="App">
            <Header className="header-fixed" />
            <Routes>
                <Route path="/" element={<Navigate to="/tzahi" />} />
                <Route path="/tzahi" element={<Intro />} />
                <Route path="/tzahi/home" element={<Home className="home" />} />
                <Route path="/tzahi/EmergencyRolls" element={<EmergencyRolls />} />
                <Route path="/tzahi/Credits" element={<Credits />} />
                <Route path="/tzahi/EmergencyRolls/:scenarioId" element={<EmergencyRolls />} />
                <Route path="/tzahi/hamburger" element={<Hamburger  />} /> {/* הוסף את הנתיב לעמוד ההמבורגר */}
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
