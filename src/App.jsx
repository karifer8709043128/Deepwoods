import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;