// import React from "react";
// import "./PaymentForm.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCreditCard, faCalendarAlt, faQuestionCircle, faGlobe, faCity } from "@fortawesome/free-solid-svg-icons";

// function PaymentForm(){
//     return(



import React, { useState } from "react";
import "./PaymentForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCalendarAlt, faQuestionCircle, faGlobe, faCity } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function PaymentForm(){
    const [cardHolder, setCardHolder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [amount, setAmount] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/credit_cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    card_number: cardNumber,
                    expiration_date: expirationDate,
                    cvv: cvv,
                    country: country,
                    city: city,
                    amount_transacted: amount
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add credit card');
            }

            setCardHolder("");
            setCardNumber("");
            setExpirationDate("");
            setCVV("");
            setAmount("");
            setCountry("");
            setCity("");

            Swal.fire({
                icon: 'success',
                title: 'Payment Success',
                text: 'Your payment has been successfully processed!',
            });
        } catch (error) {
            console.error('Error adding credit card:', error);
            Swal.fire({
                icon: 'error',
                title: 'Payment Failed',
                text: 'There was an error processing your payment. Please try again later.',
            });
        }
    };
    return(
        <div className="outer-div-payment">
            <div className="div-payments">
                <form>
                    <div className="div-inputs">
                        <label> <FontAwesomeIcon icon={faCreditCard} className="payment-icon" /> Card Holder :</label>
                        <input
                        type="text"
                        className="card-holder"
                        placeholder="Name Of Card Holder"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        /><br/>
                        <label> <FontAwesomeIcon icon={faCreditCard} className="payment-icon" /> Card Number :</label>
                        <input
                        type="text" 
                        className="card-number"
                        placeholder="1234 1234 1234 1234" 
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        /><br/>
                        <div className="div-expiration-cvv">
                            <label className="label-label"> <FontAwesomeIcon icon={faCalendarAlt} className="payment-icon" /> Expiration Date :</label>
                            <input
                            type="text"
                            className="expiration-date"
                            placeholder="MM/YY"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            /><br/>
                            <label className="label-label"> <FontAwesomeIcon icon={faQuestionCircle} className="payment-icon" /> CVV :</label>
                            <input
                            type="text"
                            className="cvv"
                            placeholder="123"
                            value={cvv}
                            onChange={(e) => setCVV(e.target.value)}
                            /><br/>
                        </div>
                        <label> <FontAwesomeIcon icon={faCreditCard} className="payment-icon" /> Amount :</label>
                        <input
                        type="text"
                        className="amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        /><br/>
                        <div className="div-country-city">
                            <label className="label-label"> <FontAwesomeIcon icon={faGlobe} className="payment-icon" /> Country :</label>
                            <input
                            type="text"
                            className="country"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            /><br/>
                            <label className="label-label"> <FontAwesomeIcon icon={faCity} className="payment-icon" /> City :</label>
                            <input
                            type="text"
                            className="city"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            /><br/>
                        </div>
                    </div>
                </form>
                <button className="butt-payment" onClick={handleSubmit}>Make Payment</button>
            </div>
        </div>
        
    )
}

export default PaymentForm;