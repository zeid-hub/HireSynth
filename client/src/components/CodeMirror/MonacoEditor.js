// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./MonacoEditor.css";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import { cpp } from "@codemirror/lang-cpp";
// import Timer from "../TestTime/Timer";
// import Output from "../TheOutput/Output";
// import { executeCode } from "../../API";

// function CodeEditor() {
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("javascript");
//   const { question } = useParams();
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const [startTime, setStartTime] = useState(0); 
//   const [output, setOutput] = useState(""); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsTimerRunning(true);
//       setStartTime(Date.now());
//     }, 0);

//     return () => clearTimeout(timer);
//   }, []);
  
//   const handleSubmit = async () => {
//     console.log("Submitted code:", code);
//     console.log("Language used:", language);
//     console.log("Question:", question); // Log the question
//     const endTime = Date.now();
//     const timeTakenInSeconds = (endTime - startTime) / 1000;
//     console.log("Time taken:", timeTakenInSeconds, "seconds");
//     setIsTimerRunning(false);
  
//     try {
//       const { run: result } = await executeCode(language, code);
//       setOutput(result.output.split("\n"));
  
//       // Console log the output
//       console.log("Code Output:", result.output);
  
//       // Make a POST request to save the code result data
//       const postData = {
//         user_code: code,
//         code_output: result.output, // Include the code output
//         language,
//         question // Include the question
//       };
  
//       const response = await fetch('/code_results', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to save code result data');
//       }
  
//       console.log('Code result data saved successfully');
//     } catch (error) {
//       console.error("Error submitting code result:", error);
//     }
//   };  

//   return (
//     <div className="main-code-mirror-container">
//       <div className="div-for-question">
//         <h2 className="code-mirror-h2">{question}</h2>
//       </div>
//       <div className="div-for-coding">
//         <div className="div-for-language-and-time">
//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="select-languages"
//           >
//             <option value="javascript" className="javascript">
//               JavaScript
//             </option>
//             <option value="python" className="python">
//               Python
//             </option>
//             <option value="java" className="java">
//               Java
//             </option>
//             <option value="cpp" className="cplus">
//               C++
//             </option>
//           </select>
//           <div className="timer-place">
//             {isTimerRunning && (
//               <Timer duration={2400} onTimeUp={() => setIsTimerRunning(false)} />
//             )}
//           </div>
//         </div>
//         <div className="code-mirror-run-code">
//           <CodeMirror
//             className="actual-code-mirror"
//             value={code}
//             height="537px"
//             theme="dark"
//             extensions={[
//               language === "javascript" && javascript({ jsx: true }),
//               language === "python" && python(),
//               language === "java" && java(),
//               language === "cpp" && cpp(),
//             ].filter(Boolean)}
//             language={language}
//             onChange={(value, viewUpdate) => {
//               setCode(value);
//               setIsTimerRunning(true);
//               }}
//           />
//           <Output output={output} />
//         </div>
//         <button onClick={handleSubmit} className="submit-button">
//           Submit Code
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CodeEditor;


















// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./MonacoEditor.css";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import { cpp } from "@codemirror/lang-cpp";
// import Timer from "../TestTime/Timer";
// import Output from "../TheOutput/Output";
// import { executeCode } from "../../API";

// function CodeEditor() {
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("javascript");
//   const { question } = useParams();
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const [startTime, setStartTime] = useState(0);
//   const [output, setOutput] = useState("");
//   const [score, setScore] = useState(null); // Add score state

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsTimerRunning(true);
//       setStartTime(Date.now());
//     }, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = async () => {
//     console.log("Submitted code:", code);
//     console.log("Language used:", language);
//     console.log("Question:", question); // Log the question
//     const endTime = Date.now();
//     const timeTakenInSeconds = (endTime - startTime) / 1000;
//     console.log("Time taken:", timeTakenInSeconds, "seconds");
//     setIsTimerRunning(false);

//     try {
//       const { run: result } = await executeCode(language, code);
//       setOutput(result.output.split("\n"));

//       // Console log the output
//       console.log("Code Output:", result.output);

//       // Make a POST request to save the code result data
//       const postData = {
//         user_code: code,
//         code_output: result.output, // Include the code output
//         language,
//         question // Include the question
//       };

//       const response = await fetch("/code_results", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(postData)
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save code result data");
//       }

//       console.log("Code result data saved successfully");

//       // Parse the response to get the score
//       const responseData = await response.json();
//       setScore(responseData.score);
//     } catch (error) {
//       console.error("Error submitting code result:", error);
//     }
//   };

//   return (
//     <div className="main-code-mirror-container">
//       <div className="div-for-question">
//         <h2 className="code-mirror-h2">{question}</h2>
//       </div>
//       <div className="div-for-coding">
//         <div className="div-for-language-and-time">
//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="select-languages"
//           >
//             <option value="javascript" className="javascript">
//               JavaScript
//             </option>
//             <option value="python" className="python">
//               Python
//             </option>
//             <option value="java" className="java">
//               Java
//             </option>
//             <option value="cpp" className="cplus">
//               C++
//             </option>
//           </select>
//           <div className="timer-place">
//             {isTimerRunning && (
//               <Timer
//                 duration={2400}
//                 onTimeUp={() => setIsTimerRunning(false)}
//               />
//             )}
//           </div>
//         </div>
//         <div className="code-mirror-run-code">
//           <CodeMirror
//             className="actual-code-mirror"
//             value={code}
//             height="537px"
//             theme="dark"
//             extensions={[
//               language === "javascript" && javascript({ jsx: true }),
//               language === "python" && python(),
//               language === "java" && java(),
//               language === "cpp" && cpp()
//             ].filter(Boolean)}
//             language={language}
//             onChange={(value, viewUpdate) => {
//               setCode(value);
//               setIsTimerRunning(true);
//             }}
//           />
//           <Output output={output} />
//         </div>
//         {score !== null && (
//             <div>
//               <h3>Score: {score}</h3>
//               <p>{score === 100 ? "Congratulations! You passed the challenge." : "Sorry, you failed the challenge."}</p>
//             </div>
//           )}
//         <button onClick={handleSubmit} className="submit-button">
//           Submit Code
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CodeEditor;

















// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./MonacoEditor.css";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import { cpp } from "@codemirror/lang-cpp";
// import Timer from "../TestTime/Timer";
// import Output from "../TheOutput/Output";
// import { executeCode } from "../../API";

// function CodeEditor() {
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("javascript");
//   const { question } = useParams();
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const [startTime, setStartTime] = useState(0);
//   const [output, setOutput] = useState("");
//   const navigate = useNavigate(); // useHistory hook to navigate to a different page

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsTimerRunning(true);
//       setStartTime(Date.now());
//     }, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = async () => {
//     console.log("Submitted code:", code);
//     console.log("Language used:", language);
//     console.log("Question:", question); // Log the question
//     const endTime = Date.now();
//     const timeTakenInSeconds = (endTime - startTime) / 1000;
//     console.log("Time taken:", timeTakenInSeconds, "seconds");
//     setIsTimerRunning(false);

//     try {
//       const { run: result } = await executeCode(language, code);
//       setOutput(result.output.split("\n"));

//       // Console log the output
//       console.log("Code Output:", result.output);

//       // Make a POST request to save the code result data
//       const postData = {
//         user_code: code,
//         code_output: result.output, // Include the code output
//         language,
//         question // Include the question
//       };

//       const response = await fetch("/code_results", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(postData)
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save code result data");
//       }

//       console.log("Code result data saved successfully");

//       // Parse the response to get the score
//       const responseData = await response.json();
//       const score = responseData.score;

//       // Navigate to the score page and pass the score as a URL parameter
//       navigate(`/my-scores/${score}`);
//     } catch (error) {
//       console.error("Error submitting code result:", error);
//     }
//   };

//   return (
//     <div className="main-code-mirror-container">
//       <div className="div-for-question">
//         <h2 className="code-mirror-h2">{question}</h2>
//       </div>
//       <div className="div-for-coding">
//         <div className="div-for-language-and-time">
//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="select-languages"
//           >
//             <option value="javascript" className="javascript">
//               JavaScript
//             </option>
//             <option value="python" className="python">
//               Python
//             </option>
//             <option value="java" className="java">
//               Java
//             </option>
//             <option value="cpp" className="cplus">
//               C++
//             </option>
//           </select>
//           <div className="timer-place">
//             {isTimerRunning && (
//               <Timer
//                 duration={2400}
//                 onTimeUp={() => setIsTimerRunning(false)}
//               />
//             )}
//           </div>
//         </div>
//         <div className="code-mirror-run-code">
//           <CodeMirror
//             className="actual-code-mirror"
//             value={code}
//             height="537px"
//             theme="dark"
//             extensions={[
//               language === "javascript" && javascript({ jsx: true }),
//               language === "python" && python(),
//               language === "java" && java(),
//               language === "cpp" && cpp()
//             ].filter(Boolean)}
//             language={language}
//             onChange={(value, viewUpdate) => {
//               setCode(value);
//               setIsTimerRunning(true);
//             }}
//           />
//           <Output output={output} />
//         </div>
//         <button onClick={handleSubmit} className="submit-button">
//           Submit Code
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CodeEditor;

















import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MonacoEditor.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import Timer from "../TestTime/Timer";
import Output from "../TheOutput/Output";
import { executeCode } from "../../API";
import Swal from "sweetalert2";

function CodeEditor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const { question } = useParams();
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimerRunning(true);
      setStartTime(Date.now());
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    console.log("Submitted code:", code);
    console.log("Language used:", language);
    console.log("Question:", question); // Log the question
    const endTime = Date.now();
    const timeTakenInSeconds = (endTime - startTime) / 1000;
    console.log("Time taken:", timeTakenInSeconds, "seconds");
    setIsTimerRunning(false);

    try {
      const { run: result } = await executeCode(language, code);
      setOutput(result.output.split("\n"));

      // Console log the output
      console.log("Code Output:", result.output);

      // Make a POST request to save the code result data
      const postData = {
        user_code: code,
        code_output: result.output, // Include the code output
        language,
        question // Include the question
      };

      const response = await fetch("/code_results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error("Failed to save code result data");
      }

      console.log("Code result data saved successfully");

      // Parse the response to get the score
      const responseData = await response.json();
      const score = responseData.score;

      // Display the score using SweetAlert
      Swal.fire({
        title: "Your score",
        text: `Your score is: ${score}`,
        icon: "success",
        confirmButtonText: "Ok"
      });

    } catch (error) {
      console.error("Error submitting code result:", error);
    }
  };

  return (
    <div className="main-code-mirror-container">
      <div className="div-for-question">
        <h2 className="code-mirror-h2">{question}</h2>
      </div>
      <div className="div-for-coding">
        <div className="div-for-language-and-time">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select-languages"
          >
            <option value="javascript" className="javascript">
              JavaScript
            </option>
            <option value="python" className="python">
              Python
            </option>
            <option value="java" className="java">
              Java
            </option>
            <option value="cpp" className="cplus">
              C++
            </option>
          </select>
          <div className="timer-place">
            {isTimerRunning && (
              <Timer
                duration={2400}
                onTimeUp={() => setIsTimerRunning(false)}
              />
            )}
          </div>
        </div>
        <div className="code-mirror-run-code">
          <CodeMirror
            className="actual-code-mirror"
            value={code}
            height="537px"
            theme="dark"
            extensions={[
              language === "javascript" && javascript({ jsx: true }),
              language === "python" && python(),
              language === "java" && java(),
              language === "cpp" && cpp()
            ].filter(Boolean)}
            language={language}
            onChange={(value, viewUpdate) => {
              setCode(value);
              setIsTimerRunning(true);
            }}
          />
          <Output output={output} />
        </div>
        <button onClick={handleSubmit} className="submit-button">
          Submit Code
        </button>
      </div>
    </div>
  );
}

export default CodeEditor;
