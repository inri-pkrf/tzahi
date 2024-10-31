import './App.css';
import Home from './components/Home';
import HeaderTwo from './components/HeaderTwo';
import Intro from './components/Intro';
import EmergencyRolls from './components/EmergencyRolls';
import React from 'react';
// Use HashRouter instead of BrowserRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <HeaderTwo className="header-fixed" />
            <Routes>
                {/* Redirect the root path ("/") to "/tzahi" */}
                <Route path="/" element={<Navigate to="/tzahi" />} />
                <Route path="/tzahi" element={<Intro />} />
                <Route path="/tzahi/home" element={<Home className="home" />} />
                <Route path="/tzahi/EmergencyRolls" element={<EmergencyRolls />} />
                <Route path="/tzahi/EmergencyRolls/:scenarioId" element={<EmergencyRolls />} />
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
