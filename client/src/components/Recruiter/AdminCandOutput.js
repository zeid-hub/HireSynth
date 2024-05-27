// import React, { useState, useEffect } from "react";
// import "./AdminCandOutput.css";

// function AdminCandOutput() {
//     const [codeResults, setCodeResults] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [feedbacks, setFeedbacks] = useState({}); // Use an object to store feedback for each question

//     useEffect(() => {
//         async function fetchCodeResults() {
//             try {
//                 const response = await fetch("/code_results");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch code results");
//                 }
//                 const data = await response.json();
//                 // Initialize feedbacks object with empty strings for each question
//                 const initialFeedbacks = data.reduce((acc, result) => {
//                     acc[result.id] = "";
//                     return acc;
//                 }, {});
//                 setFeedbacks(initialFeedbacks);
//                 setCodeResults(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching code results:", error);
//                 setLoading(false);
//             }
//         }

//         fetchCodeResults();
//     }, []);

//     const handleFeedbackChange = (e, questionId) => {
//         const newFeedbacks = { ...feedbacks, [questionId]: e.target.value };
//         setFeedbacks(newFeedbacks);
//     };

//     const handleSubmitFeedback = (e, questionId) => {
//         e.preventDefault();
//         const feedback = feedbacks[questionId];
//         // Here you can handle submitting the feedback to your backend
//         console.log("Feedback submitted for question", questionId, ":", feedback);
//         // Optionally, you can clear the feedback field after submission
//         const newFeedbacks = { ...feedbacks, [questionId]: "" };
//         setFeedbacks(newFeedbacks);
//     };

//     return (
//         <div className="div-admin-cand-output">
//             <h2 className="admin-cand-result">All Code Results</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 codeResults.map((result) => (
//                     <div key={result.id}>
//                         <ul className="unordered-admin-cand">
//                             <li className="ordered-admin-cand">
//                                 <strong className="output-question">Question:</strong>{" "}
//                                 {result.question}
//                                 <br />
//                                 <strong className="output-user-code">User Code:</strong>{" "}
//                                 {result.user_code} <br />
//                                 <strong className="output-code-output">Code Output:</strong>{" "}
//                                 {result.code_output} <br />
//                                 <strong className="output-language">Language:</strong>{" "}
//                                 {result.language} <br />
//                                 <hr />
//                             </li>
//                         </ul>
//                         <form onSubmit={(e) => handleSubmitFeedback(e, result.id)}>
//                             <div className="div-feedback">
//                             <label className="admin-feedback">
//                                 Feedback:
//                             </label>
//                             <textarea
//                                     value={feedbacks[result.id]}
//                                     onChange={(e) => handleFeedbackChange(e, result.id)}
//                                     className="feedback-textarea"
//                                 />
//                             </div>
//                             <button type="submit" className="submit-feedback-btn">
//                                 Submit Feedback
//                             </button>
//                         </form>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default AdminCandOutput;







import React, { useState, useEffect } from "react";
import "./AdminCandOutput.css";

function AdminCandOutput() {
    const [codeResults, setCodeResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedbacks, setFeedbacks] = useState({});

    useEffect(() => {
        async function fetchCodeResults() {
            try {
                const response = await fetch("/code_results");
                if (!response.ok) {
                    throw new Error("Failed to fetch code results");
                }
                const data = await response.json();
                setCodeResults(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching code results:", error);
                setLoading(false);
            }
        }

        fetchCodeResults();
    }, []);

    const handleFeedbackChange = (e, questionId) => {
        const newFeedbacks = { ...feedbacks, [questionId]: e.target.value };
        setFeedbacks(newFeedbacks);
    };

    const handleSubmitFeedback = async (e, questionId) => {
        e.preventDefault();
        const feedback = feedbacks[questionId];
        try {
            const response = await fetch(`/submit_feedback/${questionId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ feedback }),
            });
            if (!response.ok) {
                throw new Error("Failed to submit feedback");
            }
            // Optionally, you can clear the feedback field after submission
            const newFeedbacks = { ...feedbacks, [questionId]: "" };
            setFeedbacks(newFeedbacks);
            console.log("Feedback submitted successfully");
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };

    return (
        <div className="div-admin-cand-output">
            <h2 className="admin-cand-result">All Code Results</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                codeResults.map((result) => (
                    <div key={result.id}>
                        <ul className="unordered-admin-cand">
                            <li className="ordered-admin-cand">
                                <strong className="output-question">Question:</strong>{" "}
                                {result.question}
                                <br />
                                <strong className="output-user-code">User Code:</strong>{" "}
                                {result.user_code} <br />
                                <strong className="output-code-output">Code Output:</strong>{" "}
                                {result.code_output} <br />
                                <strong className="output-language">Language:</strong>{" "}
                                {result.language} <br />
                                <strong className="output-username">Username:</strong>{" "}
                                {result.username} {/* Display username */}
                                <hr />
                            </li>
                        </ul>
                        <form onSubmit={(e) => handleSubmitFeedback(e, result.id)}>
                            <div className="div-feedback">
                                <label className="admin-feedback">
                                    Feedback:
                                    <textarea
                                        value={feedbacks[result.id] || ""}
                                        onChange={(e) => handleFeedbackChange(e, result.id)}
                                        className="feedback-textarea"
                                    />
                                </label>
                            </div>
                            <button type="submit" className="submit-feedback-btn">
                                Submit Feedback
                            </button>
                        </form>
                    </div>
                ))
            )}
        </div>
    );
}

export default AdminCandOutput;
