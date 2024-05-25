import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from './components/NavBar';
import ProDuct from './components/ProDuct';
import Signup from './components/SIGNUP/Signup';
import Login from './components/Login/LoginForm';
import Home from './components/Landingpage/Home';
import RecruiterAssessments from './components/AssessRecruiter/Recruiter Assesment';
import IntervieweeAssessments from './components/AssessInterviewee/IntervieweeAssessment';
import CodeEditor from './components/CodeMirror/MonacoEditor';
import Result from './components/Candidate/Result';
import CandidatePassword from './components/Candidate/CandidatePassword';
import Questions from './components/Recruiter/Questions';
import AdminPassword from './components/Recruiter/AdminPassword';
import Demo from './components/Demo';
import Price from './components/Payments/Price';
import PaymentForm from './components/Payments/PaymentForm';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questtrail" element={<ProDuct />} />
        <Route path="/recruiter-dashboard" element={<RecruiterAssessments />} />
        <Route path="/interviewee-dashboard" element={<IntervieweeAssessments />} />
        <Route path="/answer-question/:question" element={<CodeEditor />} />
        <Route path="/candidate-result" element={<Result />} />
        <Route path="/candidate-password" element={<CandidatePassword />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/admin-password" element={<AdminPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo-page" element={<Demo />} />
        <Route path="/packages" element={<Price />} />
        <Route path="/payments" element={<PaymentForm />} />
      </Routes>
    </div>
  );
}

export default App;