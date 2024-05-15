import React from "react";
// import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Intro.css"

function Intro () {
    const navigate = useNavigate();
    return(
        <div className="home-container">
        <div className="home-banner-container">
            <div className="home-bannerImage-container"></div>
            <div className="home-text-section">
            <h1 className="primary-heading">HireSynth</h1>
            <p className="primary-text"> It is the ultimate platform for recruiters to find and hire top talent. Our website is designed to streamline the hiring process by connecting recruiters with qualified interviewees in a seamless and efficient manner. Just like Coderbyte, we prioritize technical skills and provide a user-friendly interface for recruiters to easily navigate and find the perfect candidates for their job openings. Say goodbye to tedious hiring processes and welcome a new era of recruiting with Hiresynth.</p>
            {/* <button className="secondary-button"  onClick={() => navigate('/')}>Get Started <FiArrowRight /> </button> */}
            <button className="secondary-button" onClick={() => navigate('/signup')} >Get Started </button>
            </div>
            <div className="home-image-section">
            {/* <img src={BannerImage} alt="" /> */}
            </div>
        </div>
        </div>
    )
}

export default Intro;