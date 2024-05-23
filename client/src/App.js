import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from './components/NavBar';
import ProDuct from './components/ProDuct';
import Demo from './components/Demo';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
                <Route path="/questtrail" element={<ProDuct />} />
                <Route path="/demo" element={<Demo />} />
                
                
      </Routes>
    </div>
  );
}

export default App;