
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./AdminDashboard.css";

let questionChart; // Variable to store reference to the question chart instance
let recruiterChart; // Variable to store reference to the recruiter chart instance
let intervieweeChart; // Variable to store reference to the interviewee chart instance

function DashboardSummary() {
    const [intervieweeCount, setIntervieweeCount] = useState(0);
    const [recruiterCount, setRecruiterCount] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const userResponse = await fetch("/getallusers");
            const userData = await userResponse.json();

            console.log("All users:", userData); 

            const interviewees = userData.filter(user => user.role === "Interviewee");
            const recruiters = userData.filter(user => user.role === "Recruiter");

            console.log("Interviewees:", interviewees);
            console.log("Recruiters:", recruiters);

            setIntervieweeCount(interviewees.length);
            setRecruiterCount(recruiters.length);

            const questionResponse = await fetch("/code_challenges");
            const questionData = await questionResponse.json();

            console.log("All questions:", questionData);

            setQuestionCount(questionData.length);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Function to create and update charts
    const createCharts = () => {
        // Destroy existing charts if they exist
        if (questionChart) {
            questionChart.destroy();
        }
        if (recruiterChart) {
            recruiterChart.destroy();
        }
        if (intervieweeChart) {
            intervieweeChart.destroy();
        }

        // Get the canvas elements
        const questionChartCanvas = document.getElementById("questionChart");
        const recruiterChartCanvas = document.getElementById("recruiterChart");
        const intervieweeChartCanvas = document.getElementById("intervieweeChart");

        // Create question chart
        questionChart = new Chart(questionChartCanvas, {
            type: "bar",
            data: {
                labels: ["Total Questions"],
                datasets: [{
                    label: "Total Questions",
                    data: [questionCount],
                    backgroundColor: "rgba(255, 159, 64, 0.6)" // Change the color here
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Create recruiter chart
        recruiterChart = new Chart(recruiterChartCanvas, {
            type: "bar",
            data: {
                labels: ["Recruiters"],
                datasets: [{
                    label: "Recruiters",
                    data: [recruiterCount],
                    backgroundColor: "rgba(255, 99, 132, 0.6)"
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Create interviewee chart
        intervieweeChart = new Chart(intervieweeChartCanvas, {
            type: "bar",
            data: {
                labels: ["Interviewees"],
                datasets: [{
                    label: "Interviewees",
                    data: [intervieweeCount],
                    backgroundColor: "rgba(75, 192, 192, 0.6)"
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    useEffect(() => {
        createCharts();
    }, [intervieweeCount, recruiterCount, questionCount]);

    return (
        <div className="dashboard-summary">
            <div className="summary-item">
                <div className="h3-par">
                    <h3 className="dashboard-h3">Total No. Of Questions: </h3>
                    <p className="dashboard-par">{questionCount}</p>
                </div>
                <canvas id="questionChart" className="chart"></canvas>
            </div>
            <div className="summary-item">
                <div className="h3-par">
                    <h3 className="dashboard-h3">Total Interviewees: </h3>
                    <p className="dashboard-par">{intervieweeCount}</p>
                </div>
                <canvas id="intervieweeChart" className="chart"></canvas>
            </div>
            <div className="summary-item">
                <div className="h3-par">
                    <h3 className="dashboard-h3">Total Recruiters: </h3>
                    <p className="dashboard-par">{recruiterCount}</p>
                </div>
                <canvas id="recruiterChart" className="chart"></canvas>
            </div>
        </div>
    );
}

export default DashboardSummary;
