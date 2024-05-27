import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntervieweeAssessment.css';
import CandidateSidebar from '../SideBar/CandidateSidebar';
import { gsap } from 'gsap/gsap-core';

function IntervieweeAssessments() {
  const [questions, setQuestions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewQuestionId, setViewQuestionId] = useState(null);
  const [selectedComplexity, setSelectedComplexity] = useState(null);
  const [isComplexityDropdownOpen, setIsComplexityDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://hiresynth-backend.onrender.com/code_challenges');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchQuestions();
  }, []);  

  const handleLanguageButtonClick = (language) => {
    setSelectedLanguage(language === selectedLanguage ? null : language);
    setIsDropdownOpen(false);
  };

  const handleComplexityButtonClick = (complexity) => {
    setSelectedComplexity(complexity === selectedComplexity ? null : complexity);
    setIsComplexityDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleComplexityDropdown = () => {
    setIsComplexityDropdownOpen(!isComplexityDropdownOpen);
  };

  const handleViewButtonClick = (id) => {
    setViewQuestionId(id === viewQuestionId ? null : id);
  };

  const handleQuestionAttempt = (question) => {
    navigate(`/answer-question/${encodeURIComponent(question)}`);
  };

  const complexityOptions = ['Easy', 'Medium', 'Hard'];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    tl.from(".welcome-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
    })
      .from(".welcome-btn", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(".welcome-image", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power3.out",
      });
  }, []);

  return (
    <div className="interviewee-container">
      <CandidateSidebar />
      <div className="the-content">
        <div className="interviewee-main-container">
          <h2 className="interviewee-h2">Filter By</h2>
          <div className="interviewee-filter">
            <div
              className={`interviewee-language ${isDropdownOpen ? 'open' : ''}`}
              onClick={toggleDropdown}
            >
              Languages <span className="filter-indicator">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>
            <div
              className={`time-complexity ${isComplexityDropdownOpen ? 'open' : ''}`}
              onClick={toggleComplexityDropdown}
            >
              Time & Complexity <span className="filter-indicator">{isComplexityDropdownOpen ? '▲' : '▼'}</span>
            </div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content show">
              {[...new Set(questions.map(q => q.languages))].map((language) => (
                <div
                  key={language}
                  className="language-item"
                  onClick={() => handleLanguageButtonClick(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          )}
          {isComplexityDropdownOpen && (
            <div className="dropdown-content show">
              {complexityOptions.map((complexity) => (
                <div
                  key={complexity}
                  className="complexity-item"
                  onClick={() => handleComplexityButtonClick(complexity)}
                >
                  {complexity}
                </div>
              ))}
            </div>
          )}
          <div>
            {selectedLanguage && (
              <div className="my-assessment-card">
                <div className="the-language-section">
                  {questions
                    .filter((q) => q.languages === selectedLanguage)
                    .map(({ id, title, description }) => (
                      <div key={id} className="question-card">
                        <div className="question-title">
                          {title}
                          <button
                            onClick={() => handleViewButtonClick(id)}
                            className="view-button"
                          >
                            {viewQuestionId === id ? 'Hide' : 'View'}
                          </button>
                        </div>
                        {viewQuestionId === id && (
                          <div className="question-details">
                            <div className="fetched-question">{description}</div>
                            <button
                              onClick={() => handleQuestionAttempt(description)}
                              className="attempt-button"
                            >
                              Attempt
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div>
            {selectedComplexity && (
              <div className="my-assessment-card">
                <div className="the-language-section">
                  {questions
                    .filter((q) => q.complexity === selectedComplexity)
                    .map(({ id, title, description }) => (
                      <div key={id} className="question-card">
                        <div className="question-title">
                          {title}
                          <button
                            onClick={() => handleViewButtonClick(id)}
                            className="view-button"
                          >
                            {viewQuestionId === id ? 'Hide' : 'View'}
                          </button>
                        </div>
                        {viewQuestionId === id && (
                          <div className="question-details">
                            <div className="fetched-question">{description}</div>
                            <button
                              onClick={() => handleQuestionAttempt(description)}
                              className="attempt-button"
                            >
                              Attempt
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="welcome-container">
          <div className="welcome-text">Welcome Coder</div>
          <img
            className="welcome-image"
            src='https://media.istockphoto.com/id/1447084046/photo/woman-cyber-security-and-iot-with-technology-for-team-meeting-or-programming-working-at-night.webp?b=1&s=170667a&w=0&k=20&c=frOxjzYU6MWG6VAtPnBu4Jsnq1slKQEyURsGCeNYVKs='
            alt="Welcome"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default IntervieweeAssessments;
