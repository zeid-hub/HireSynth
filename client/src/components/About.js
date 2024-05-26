import React from "react";
import Upperpart from "./Upperpart";
import Introduction from "./Introduction";
import Testimonial from "./Testimonials";
import './About.css' // Import your About specific styles

function About() {
    return (
        <div  className="App  bg-silver"> 
            <Upperpart />
            <Introduction />
            <Testimonial />
                   </div>
    )
}

export default About;
