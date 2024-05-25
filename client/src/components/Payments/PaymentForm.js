import React from "react";
import "./PaymentForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCalendarAlt, faQuestionCircle, faGlobe, faCity } from "@fortawesome/free-solid-svg-icons";

function PaymentForm(){
    return(
        <div className="div-payments">
            <form>
                <div className="div-inputs">
                    <label> <FontAwesomeIcon icon={faCreditCard} className="payment-icon" /> Card Holder :</label>
                    <input
                    type="text"
                    className="card-holder"
                    placeholder="Name Of Card Holder"
                    /><br/>
                    <label> <FontAwesomeIcon icon={faCreditCard} className="payment-icon" /> Card Number :</label>
                    <input
                    type="text" 
                    className="card-number"
                    placeholder="1234 1234 1234 1234" 
                    /><br/>
                    <div className="div-expiration-cvv">
                        <label className="label-label"> <FontAwesomeIcon icon={faCalendarAlt} className="payment-icon" /> Expiration Date :</label>
                        <input
                        type="text"
                        className="expiration-date"
                        placeholder="MM/YY"
                        /><br/>
                        <label className="label-label"> <FontAwesomeIcon icon={faQuestionCircle} className="payment-icon" /> CVV :</label>
                        <input
                        type="text"
                        className="cvv"
                        placeholder="123"
                        /><br/>
                    </div>
                    <label> <FontAwesomeIcon icon={faCreditCard} className="payment-icon" /> Amount :</label>
                    <input
                    type="text"
                    className="amount"
                    placeholder="Amount"
                    /><br/>
                    <div className="div-country-city">
                        <label className="label-label"> <FontAwesomeIcon icon={faGlobe} className="payment-icon" /> Country :</label>
                        <input
                        type="text"
                        className="country"
                        placeholder="Country"
                        /><br/>
                        <label className="label-label"> <FontAwesomeIcon icon={faCity} className="payment-icon" /> City :</label>
                        <input
                        type="text"
                        className="city"
                        placeholder="City"
                        /><br/>
                    </div>
                </div>
            </form>
            <button className="butt-payment">Make Payment</button>
        </div>
    )
}

export default PaymentForm;