import React from "react";
import "./RecruiterAssessment.css";
import AdminSidebar from "../SideBar/AdminSidebar";
import DashboardSummary from "../Recruiter/AdminDashboard";

function RecruiterAssessments() {

  return (
    <div className="recruiter-ass-container">
      <AdminSidebar/>
      <div className="interviewees-part">
        <DashboardSummary/>
      </div>
    </div>
  );
}

export default RecruiterAssessments;
