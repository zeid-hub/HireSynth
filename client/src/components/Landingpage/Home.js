import React from "react";
import "./Home.css"
import Intro from "./Intro";
import Footer from "./Footer";
import Awards from "./Award";
import Recruiters from "./Recruiters";
import Price from "./Price";
import Companies from "./Companies";
import Hero from "./Hero";

function Home () {
    return(
        <div className="home-container">
        <Hero/>
        <Intro/>
        <Recruiters/>
        <Companies/>
        <Awards/>
        <Price/>
        <Footer/>
        </div>
    )
}

export default Home;