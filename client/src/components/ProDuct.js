import React from 'react';
// import { Link } from 'react-router-dom';
import './product.css';

function ProDuct() {
  return (
    <div>
      <div className="header">
        <h1><span className="blue-text">Streamline Technical Assessments with Our Platform</span></h1>
        <div className="text-container">
          <p>Welcome to our software platform designed to automate the in-person technical interview process.</p>
        </div>
      </div>

      {/* <div className="content">
        <div className="head-image">
          <img src="recruiter.jpeg" alt="Smart Recruiter" />
        </div>
      </div> */}
      
      
      <div className="card-container">
        <div className="card">
          <h2><span className="blue-text">User Authentication:</span></h2>
          <p>Recruiters and interviewees can securely log in to the platform with multiple user-type authentication.</p>
        </div>

        <div className="card">
          <h2><span className="blue-text">Assessment Creation:</span></h2>
          <p>Recruiters can create assessments with multiple-choice questions, subjective questions, and coding challenges.</p>
        </div>

        <div className="card">
          <h2><span className="blue-text">Assessment Management:</span></h2>
          <p>Recruiters can manage assessments by reviewing, publishing, and setting time limits for tests.</p>
        </div>

        <div className="card">
          <h2><span className="blue-text">Invitation Management:</span></h2>
          <p>Recruiters can send invitations to interviewees individually or in bulk, and interviewees can accept invitations.</p>
        </div>
      </div>
     
      <div className="feature1-container">
        <div className="feature1">
          <div className="feature1-content">
            <h2><span className="blue-text">Performance Analytics:</span></h2>
            <p>Recruiters can track interviewees' performance with system-generated statistics and sorted lists based on scores.</p>
          </div>
          <div className="feature1-image">
            <img src="dashboard.jpeg" alt="Performance Analytics" />
          </div>
        </div>

        <div className="feature">
          <div className="feature-image">
            <img src="feedback.jpeg" alt="Feedback Mechanism" />
          </div>
          <div className="feature-content">
            <h2><span className="blue-text">Feedback Mechanism:</span></h2>
            <p>Recruiters can provide feedback below each question's answer, fostering a constructive learning environment for interviewees.</p>
          </div>
        </div>

        <div className="f2">
          <div className="f2-content">
            <h2><span className="blue-text">Real-time Notifications:</span></h2>
            <p>Interviewees receive real-time notifications for assessment information, including time and date reminders.</p>
          </div>
          <div className="f2-image">
            <img src="noti.png" alt="Real-time Notifications" />
          </div>
        </div>

        <div className="feature">
          <div className="feature-image">
            <img src="demo.png" alt="Trial Assessments" />
          </div>
          <div className="feature-content">
            <h2><span className="blue-text">Trial Assessments:</span></h2>
            <p>Interviewees can take trial assessments to familiarize themselves with the platform before taking an actual assessment.</p>
          </div>
        </div>
      </div>    

      <div class="board">
  <div class="text">
    <h2><span class="blue-text">Whiteboard Process Submission:</span></h2>
    <p>Interviewees can submit a full whiteboard process, including writing BDD, pseudocode, and code, as part of their assessment.</p>
  </div>
  <div class="image-board">
    <img src="whiteboard.png" alt="Smart Recruiter" />
  </div>
</div>


      <div className="card-container">
        <div className="card">
          <h2><span className="blue-text">Feedback Review:</span></h2>
          <p>Interviewees can read feedback from their mentors to understand areas for improvement.</p>
        </div>

        <div className="card">
          <h2><span className="blue-text">User-Friendly Interface:</span></h2>
          <p>Our platform features a user-friendly interface built with ReactJS for the frontend, ensuring a seamless experience for users.</p>

        </div>

        <div className="card">
          <h2><span className="blue-text">Scalability and Performance:</span></h2>
          <p>Powered by Python (Flask) for the backend, our platform offers scalability and performance to handle large-scale assessments efficiently.</p>
          
        </div>
      </div>
      
      {/* <Link to="/signup">
        <button>Sign Up Now</button>
      </Link> */}
    </div>
  );
}

export default ProDuct;
