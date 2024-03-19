import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { MapHome } from './Components/MapHome';
import Navbar from './Components/Navbar';
import Dashbar from './Components/Dashbar';

function App() {
  return (
    <Router> {/* Wrap your routes with BrowserRouter */}
       <div className="h-screen overflow-hidden">
        <Navbar />
        <Dashbar/>
        <Routes>
          <Route path="/" element={<MapHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
