import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Intro from './components/Intro';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/tzahi' && <Header className="header-fixed" />}

      <Routes>
        <Route path="/tzahi" element={<Intro />} />
        <Route path="/tzahi/home" element={<Home className="home" />} />
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
