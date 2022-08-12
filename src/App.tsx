import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/device/:name" element={<h1>device detail</h1>} />
      </Routes>
    </div>
  );
}

export default App;
