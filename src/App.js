import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from './Home';
import Cities from './Cities';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';


function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero/>
        <Routes>
          <Route path="/ " element={<Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />} />
          <Route path="/Cities" element={<Cities selectedCountry={selectedCountry} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
























