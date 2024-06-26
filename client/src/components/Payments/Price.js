import React from "react";
import "./Price.css"
import PriceCard from "./PriceCards";
import CandidateSidebar from "../SideBar/CandidateSidebar";

function Price (){
    return(
    <div>
        <div className='price-container'>
          <div className="cand-side-bar">
            <CandidateSidebar />
          </div>
          <div className="price-main-content">
            <h1 className="price-h1">Select Your Package</h1>
            <p className="price-par">To access our package, payment is required. Choose your plan, pay securely online with credit cards or other accepted methods, and enjoy immediate access to all features</p>
            <PriceCard />
          </div>
        </div>
        
    </div>
    )
}

export default Price;