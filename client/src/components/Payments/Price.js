import React from "react";
import "./Price.css"
import PriceCard from "./PriceCards";

function Price (){
    return(
    <div>
        <div className='price-container'>
          <h1 className="price-h1">Select Your Package</h1>
          <p className="price-par">To access our package, payment is required. Choose your plan, pay securely online with credit cards or other accepted methods, and enjoy immediate access to all features</p>
          <PriceCard />
        </div>
        
    </div>
    )
}

export default Price;