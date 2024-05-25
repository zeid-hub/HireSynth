import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from './components/NavBar';
import ProDuct from './components/ProDuct';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Landingpage/Home';
import Assesments from './components/Assesment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questtrail" element={<ProDuct />} />
        <Route path="/assesments" element={<Assesments />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;