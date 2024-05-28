import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Upperpart from "./Upperpart";
import Introduction from "./Introduction";
import Testimonial from "./Testimonials";
import "./AboutUs.css";

function AboutUs() {
    return (
        <div className="bg-primary w-full overflow-hidden">
    <div className={`container mx-auto`}> </div>
      <div className={`xl:max-w-[1280px] w-full`}></div>
            <Upperpart />
            <Introduction />
             <Testimonial /> 
                   </div>
    )
}

export default AboutUs;
