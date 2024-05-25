// import React from "react";
// import "./Award.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { faTrophy, faBriefcase, faLightbulb, faHeart } from '@fortawesome/free-solid-svg-icons';

// function Awards (){

//     const awards = [
//         {
//           icon: <FontAwesomeIcon icon={faTrophy} />,
//           num: "32 M",
//           name: "Blue Burmin Award",
//         },
//         {
//           icon: <FontAwesomeIcon icon={faBriefcase} />,
//           num: "43 M",
//           name: "Mimo X11 Award",
//         },
//         {
//           icon: <FontAwesomeIcon icon={faLightbulb} />,
//           num: "51 M",
//           name: "Australian UGC Award",
//         },
//         {
//           icon: <FontAwesomeIcon icon={faHeart} />,
//           num: "42 M",
//           name: "IITCA Green Award",
//         },
//       ];

//     return(
//         <div className="awards-container">
//             <div className='award-first-container'>
//                 <h4>Our Awards</h4>
//                 <p>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>

//                 <div className='award-content-grid4-mtop'>
//                     {awards.map((val, index) => (
//                     <div className='award-box' key={index}>
//                         <div className='award-icon'>
//                         <span>{val.icon}</span>
//                         </div>
//                         <h1>{val.num}</h1>
//                         <p>{val.name}</p>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//     </div>
//     )
// }

// export default Awards;













import React, { useEffect } from "react";
import "./Award.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faBriefcase, faLightbulb, faHeart } from '@fortawesome/free-solid-svg-icons';
import { gsap, TweenMax } from "gsap";

function Awards() {

  useEffect(() => {
    animateAwards(); // Initial animation
    const interval = setInterval(() => {
      animateAwards(); // Repeating animation every 5 seconds
    }, 4000);

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  const animateAwards = () => {
    gsap.from(".award-box", {
      duration: 1.5,
      opacity: 0,
      y: 50,
      scale: 0.5,
      stagger: 0.2,
      ease: "power4.out",
    });

    animateNumbers();
  };

  const animateNumbers = () => {
    const numberElements = document.querySelectorAll(".number");

    numberElements.forEach((element, index) => {
      TweenMax.to(element, 1.5, { scale: 1.1, opacity: 1, yoyo: true, repeat: -1, ease: "power4.out", delay: index * 0.2 });
    });
  };

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

  return (
    <div className="awards-container">
      <div className='award-first-container'>
        <h4>Our Awards</h4>
        <p>Over 1,24,000+ Happy User Being With Us Still They Love Our Services</p>

        <div className='award-content-grid4-mtop'>
          {awards.map((val, index) => (
            <div className='award-box' key={index}>
              <div className='award-icon'>
                <span>{val.icon}</span>
              </div>
              <h1 className="number">{val.num}</h1> {/* Start with original value */}
              <p>{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
