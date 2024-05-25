import React from "react";
import "./PriceCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function PriceCard() {

  const navigate = useNavigate();
    const price = [
      {
        plan: "Starter",
        price: "29",
        ptext: "per user, per month",
        list: [
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Access to interview codes",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "120GB of Interview Storage",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "5GB of Resume Storage",
          },
          { change: "color", icon: <FontAwesomeIcon icon={faTimes} />, text: "Basic Interview Support" },
          { change: "color", icon: <FontAwesomeIcon icon={faTimes} />, text: "Advanced Interview Analysis" },
        ],
      },
      {
        best: "Recommended",
        plan: "Pro",
        price: "49",
        ptext: "per user, per month",
        list: [
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Access to interview codes",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "150GB of Interview Storage",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "10GB of Resume Storage",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Advanced Interview Support",
          },
          {
            change: "color",
            icon: <FontAwesomeIcon icon={faTimes} />,
            text: "Enterprise Interview SLA",
          },
        ],
      },
      {
        plan: "Enterprise",
        price: "79",
        ptext: "per user, per month",
        list: [
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Access to interview codes",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Unlimited Interview Storage",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Unlimited Resume Storage",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Dedicated Interview Support",
          },
          {
            icon: <FontAwesomeIcon icon={faCheck} />,
            text: "Enterprise Interview SLA",
          },
        ],
      },
    ];
    
    return(
        <div className="pricecard-outer-container">
            <div className='content-flex-mtop'>
                {price.map((item, index) => (
                <div className='box-shadow' key={index}>
                    <div className='topbtn'>
                      <button className='btn3'>{item.best}</button>
                    </div>
                    <h3 className="pcar-h3">{item.plan}</h3>
                    <h1 className="pcar-h1">
                      <span className="pcar-span">$</span>
                      {item.price}
                    </h1>
                    <p className="pcar-par">{item.ptext}</p>
                    <ul className="pcar-ul">
                      {item.list.map((val) => {
                        const { icon, text, change } = val
                        return (
                          <li className="pcar-li">
                            <label
                              className="pcar-label"
                              style={{
                                background: change === "color" ? "#dc35451f" : "#27ae601f",
                                color: change === "color" ? "#dc3848" : "#27ae60",
                              }}
                            >
                              {icon}
                            </label>
                            <p className="pr-cd-par">{text}</p>
                          </li>
                        )
                      })}
                    </ul>
                    <button
                      className='pcar-btn5'
                      style={{
                        background: item.plan === "Pro" ? "#27ae60" : (item.plan === "Standard" ? "#27ae60" : "#fff"),
                        color: item.plan === "Pro" ? "#fff" : (item.plan === "Standard" ? "#fff" : "#27ae60"),
                      }}
                      onClick={() => navigate('/payments')}
                    >
                      Start {item.plan}
                    </button>
                  </div>
              ))}
            </div>
        </div>
    )
}

export default PriceCard;