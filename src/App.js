import './App.css';
import Home from './components/Home';
import Intro from './components/Intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/tzahi" element={<Intro />} />
          <Route path="/tzahi/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
