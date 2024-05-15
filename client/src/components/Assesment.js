// import React from "react";
// import "./Assesment.css"
// import { NavLink } from "react-router-dom";

// function Assesments () {
//     return(
//         <div class="assesment-container">
//             <div class="sidebar">
//                 <h1 class="assesment-h1">Assesment Bar</h1>
//                 <div class="assesment-links">
//                     <div className="candidate"><NavLink to="/candidate">CANDIDATE RESULT</NavLink></div>
//                     <div className="interviews"><NavLink to="/interviews">INTERVIEWS</NavLink></div>
//                     <div className="reports"><NavLink to="/reports">REPORTS</NavLink></div>
//                     <div className="settings"><NavLink to="/settings">SETTINGS</NavLink></div>
//                 </div>
//             </div>
//             <div class="main-content">
//                 <div class="assesment-main-container">
//                     <h2 class="assesment-h2">Filter By</h2>
//                     <div class="assesment-filter">Languages</div>
//                     <div class="assesment-filter">Levels</div>
//                     <div class="assesment-filter">Time and Complexity</div>
//                     <div class="assesment-filter">Skills</div>
//                     <div>
//                         <h2 class="assesment-second-h2">Assesments</h2>
//                         <div class="assesment-card">
//                             <div class="assesment-card-container">
//                                 <div className="language-section" >
//                                     <h3>JavaScript</h3>
//                                     <div>Question 1: What is closure in JavaScript?</div>
//                                     <div>Question 2: Explain the event loop in JavaScript.</div>
//                                 </div>
//                                 <div className="language-section" >
//                                     <h3>Python</h3>
//                                     <div>Question 1: What are decorators in Python?</div>
//                                     <div>Question 2: Explain list comprehension in Python.</div>
//                                 </div>
//                             </div>
//                             <button class="assesment-button">Create New Assesments</button>
//                         </div>
//                     </div>
//                     <div>
//                         <h2 class="past-assesment-h2">Past Assesments</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Assesments;












import React, { useState } from "react";
import "./Assesment.css";
import { NavLink } from "react-router-dom";

function Assessments() {
  const questions = [
    {
      language: 'python',
      image: 'https://i.pinimg.com/236x/6b/b9/17/6bb9177f1f2075cab554dbb6276f3732.jpg',
      data: [
        { question: 'Question 1: What are decorators in Python?' },
        { question: 'Question 2: Explain list comprehension in Python.' }
      ]
    },
    {
      language: 'javascript',
      image: 'https://i.pinimg.com/236x/37/fc/63/37fc630b338d68d18b5fe5fde855562e.jpg',
      data: [
        { question: 'Question 1: What is closure in JavaScript?' },
        { question: 'Question 2: Explain the event loop in JavaScript.' }
      ]
    },
    // Add more languages here...
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageButtonClick = (language) => {
    setSelectedLanguage(language === selectedLanguage ? null : language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="assessment-container">
      <div className="sidebar">
        <h1 className="assessment-h1">Assessment Bar</h1>
        <div className="assessment-links">
          <div className="candidate">
            <NavLink to="/candidate">CANDIDATE RESULT</NavLink>
          </div>
          <div className="interviews">
            <NavLink to="/interviews">INTERVIEWS</NavLink>
          </div>
          <div className="reports">
            <NavLink to="/reports">REPORTS</NavLink>
          </div>
          <div className="settings">
            <NavLink to="/settings">SETTINGS</NavLink>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="assessment-main-container">
          <h2 className="assessment-h2">Filter By</h2>
          <div className="assessment-filter">
            <div className="assessment-language" onClick={toggleDropdown}>
              Languages
              {/* <FaArrowDown className="arrow-key"/> */}
              {/* <span className={`arrow-icon ${isDropdownOpen ? 'up' : 'down'}`}></span> */}
            </div>
            <div className="assessment-level" onClick={toggleDropdown}>
              Levels
              {/* <span className={`arrow-icon ${isDropdownOpen ? 'up' : 'down'}`}></span> */}
            </div>
            <div className="assessment-skills" onClick={toggleDropdown}>
              Skils
              {/* <FaArrowDown className="arrow-key"/> */}
              {/* <span className={`arrow-icon ${isDropdownOpen ? 'up' : 'down'}`}></span> */}
            </div>
            <div className="assessment-time-complexity" onClick={toggleDropdown}>
              Time & Complexity
              {/* <FaArrowDown className="arrow-key"/> */}
              {/* <span className={`arrow-icon ${isDropdownOpen ? 'up' : 'down'}`}></span> */}
            </div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {questions.map(({ language }) => (
                <button
                  key={language}
                  className={`assessment-filter ${language === selectedLanguage ? 'selected' : ''}`}
                  onClick={() => handleLanguageButtonClick(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
          <div>
            <h2 className="assessment-second-h2">Assessments</h2>
            {selectedLanguage &&
              questions.map(({ language, data }) => (
                language === selectedLanguage && (
                  <div className="assessment-card" key={language}>
                    <div className="language-section">
                      <img src={questions.find(q => q.language === language).image} alt={language} />
                      <h3>{language}</h3>
                      {data.map(({ question }) => (
                        <div key={question}>{question}</div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            <button className="assessment-button">Create New Assessments</button>
          </div>
          <div>
            <h2 className="past-assessment-h2">Past Assessments</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessments;
