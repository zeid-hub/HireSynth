import React from "react";
import "./Result.css"
import CandidateSidebar from "../SideBar/CandidateSidebar";

function Result () {
    return(
        <div className="result-container">
            <div className="candidate-sidebar">
                <CandidateSidebar />
            </div>
            <h1 className="result-h1">Results</h1>
        </div>
    )
}

export default Result;