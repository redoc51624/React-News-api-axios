import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
