import './App.css';
import Home from './components/Home';
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import Intro from './components/Intro';
import EmergencyRolls from './components/EmergencyRolls';
import React, { useEffect } from 'react'; // Import useEffect from React
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Save the current path to local storage
  useEffect(() => {
    localStorage.setItem('currentPath', location.pathname);
  }, [location]);

  // Retrieve the path from local storage on initial load
  useEffect(() => {
    const savedPath = localStorage.getItem('currentPath');
    if (savedPath) {
      window.history.replaceState(null, '', savedPath);
    }
  }, []);

  return (
    <div className="App">
      {location.pathname === '/tzahi/home' && <HeaderOne className="header-fixed" />}
      {location.pathname !== '/tzahi/home' && location.pathname !== '/tzahi' && <HeaderTwo className="header-fixed" />}

      <Routes>
        <Route path="/tzahi" element={<Intro />} />
        <Route path="/tzahi/home" element={<Home className="home" />} />
        <Route path="/tzahi/EmergencyRolls" element={<EmergencyRolls />} />
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
