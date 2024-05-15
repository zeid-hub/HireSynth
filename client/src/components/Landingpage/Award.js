import React from "react";
import "./Award.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrophy, faBriefcase, faLightbulb, faHeart } from '@fortawesome/free-solid-svg-icons';

function Awards (){

    const awards = [
        {
          icon: <FontAwesomeIcon icon={faTrophy} />,
          num: "32 M",
          name: "Blue Burmin Award",
        },
        {
          icon: <FontAwesomeIcon icon={faBriefcase} />,
          num: "43 M",
          name: "Mimo X11 Award",
        },
        {
          icon: <FontAwesomeIcon icon={faLightbulb} />,
          num: "51 M",
          name: "Australian UGC Award",
        },
        {
          icon: <FontAwesomeIcon icon={faHeart} />,
          num: "42 M",
          name: "IITCA Green Award",
        },
      ];

    return(
        <div className="awards-container">
            <div className='award-first-container'>
                <h4>Our Awards</h4>
                <p>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>

                <div className='award-content-grid4-mtop'>
                    {awards.map((val, index) => (
                    <div className='award-box' key={index}>
                        <div className='award-icon'>
                        <span>{val.icon}</span>
                        </div>
                        <h1>{val.num}</h1>
                        <p>{val.name}</p>
                    </div>
                    ))}
                </div>
            </div>
    </div>
    )
}

export default Awards;