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
    console.log("Question:", question);
    const endTime = Date.now();
    const timeTakenInSeconds = (endTime - startTime) / 1000;
    console.log("Time taken:", timeTakenInSeconds, "seconds");
    setIsTimerRunning(false);

    try {
      const { run: result } = await executeCode(language, code);
      setOutput(result.output.split("\n"));

      console.log("Code Output:", result.output);

      const postData = {
        user_code: code,
        code_output: result.output,
        language,
        question
      };

      const response = await fetch("https://hiresynth-backend.onrender.com/code_results", {
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

      const responseData = await response.json();
      const score = responseData.score;
      console.log("Score:", score);
      
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
