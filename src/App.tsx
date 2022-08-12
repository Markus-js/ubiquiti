import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Header';
// ROUTES
import Home from './pages/Home/';
import Device from './pages/Device';



function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device/:name" element={<Device />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
