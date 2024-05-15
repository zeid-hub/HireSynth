import { Routes, Route } from 'react-router-dom';
import "./App.css"
import React from 'react'
import Navbar from './components/NavBar';
import ProDuct from './components/ProDuct';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
                <Route path="/questtrail" element={<ProDuct />} />
      </Routes>
    </div>
  );
}

export default App;