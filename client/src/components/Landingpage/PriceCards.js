import React from "react";
import "./PriceCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function PriceCard() {

    const price = [
        {
          plan: "Basic",
          price: "29",
          ptext: "per user, per month",
          list: [
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "99.5% Uptime Guarantee",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "120GB CDN Bandwidth",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "5GB Cloud Storage",
            },
            { change: "color", icon: <FontAwesomeIcon icon={faTimes} />, text: "Personal Help Support" },
            { change: "color", icon: <FontAwesomeIcon icon={faTimes} />, text: "Enterprise SLA" },
          ],
        },
        {
          best: "Best Value",
          plan: "Standard",
          price: "49",
          ptext: "per user, per month",
          list: [
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "99.5% Uptime Guarantee",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "150GB CDN Bandwidth",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "10GB Cloud Storage",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "Personal Help Support",
            },
            {
              change: "color",
              icon: <FontAwesomeIcon icon={faTimes} />,
              text: "Enterprise SLA",
            },
          ],
        },
        {
          plan: "Platinum",
          price: "79",
          ptext: "2 user, per month",
          list: [
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "100% Uptime Guarantee",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "200GB CDN Bandwidth",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "20GB Cloud Storage",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "Personal Help Support",
            },
            {
              icon: <FontAwesomeIcon icon={faCheck} />,
              text: "Enterprise SLA",
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
                            background: item.plan === "Standard" ? "#27ae60" : "#fff",
                            color: item.plan === "Standard" ? "#fff" : "#27ae60",
                        }}
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