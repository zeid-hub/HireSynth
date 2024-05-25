import React from "react";
import "./Recruiters.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck, faLocationDot, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Recruiters() {

    const team = [
        {
          cover: "https://media.istockphoto.com/id/1824217014/photo/small-business-woman-and-tablet-for-e-commerce-startup-and-inventory-management-of-online.webp?b=1&s=170667a&w=0&k=20&c=xk4VF9WiI0oo8EzJ1xTwyKiUwgriDszEOp8cjCA0UZ4=", // Replace with your image URL
          address: "Tokyo, Japan",
          name: "Ava Taylor",
          icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
        },
        // {
        //   cover: "https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.webp?b=1&s=170667a&w=0&k=20&c=1VLP56VSuFBdjE-ioEuLEbOO-UIUGBnISnOjjymsB8s=",
        //   address: "Montreal, Canada",
        //   name: "Benjamin Miller",
        //   icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
        // },
        {
            cover: "https://media.istockphoto.com/id/1465289648/photo/satisfied-modern-millennial-man-in-stylish-casual-clothes-using-smartphone-and-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=XtHWL4iWZMcCpLjczYmTn5TZ2jcdis2MpalqDmCTseo=", // Replace with your image URL
            address: "Nairobi, Kenya",
            name: "Harijeet M. Siller",
            icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
          },
          {
            cover: "https://media.istockphoto.com/id/1481851563/photo/smiling-woman-walking-outdoors-on-city-street-looking-behind.webp?b=1&s=170667a&w=0&k=20&c=uB75v9MVxBHNDvKzlcCguIfJsnCNcuU9w9QBgxmrKBE=", // Replace with your image URL
            address: "Sydney, Australia",
            name: "Anna K. Young",
            icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
          },
          {
            cover: "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=",
            address: "New York City, United States",
            name: "Liam Smith",
            icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
          },
        //   {
        //     cover: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     address: "Mumbai, India",
        //     name: "Noah Brown",
        //     icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
        //   },
          {
            cover: "https://i.pinimg.com/236x/44/de/65/44de65cb7fb5556a7ac91b69358df424.jpg",
            address: "Moscow, Russia",
            name: "Sargam S. Singh",
            icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
          },
          {
            cover: "https://media.istockphoto.com/id/1488344026/photo/woman-portrait-and-laptop-in-office-planning-legal-consulting-or-policy-review-feedback-in.webp?b=1&s=170667a&w=0&k=20&c=mCBpSQK3DnXxm62WdR3POw0HmQ7oXp-anfxbZ3GnL2c=", // Replace with your image URL
            address: "Rio de Janeiro, Brazil",
            name: "Isabella Anderson",
            icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
          },
        //   {
        //     cover: "https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=6CGz0oF0bra0Yiyn0PR2Sy31cA3CidlbsZlYZJx1nxg=",
        //     address: "Nairobi, Kenya",
        //     name: "Olivia & James Wilson",
        //     icon: [faFacebookF, faLinkedin, faTwitter, faInstagram],
        //   },
          
      ];

    return(
        <div className="recruiter-container">
            <div className='test-inner-container'>
                <h1 className="rec-h1">Our Featured Coders</h1> 
                <p className="rec-par">Explore our top recruiters: handpicked for expertise, dedicated to excellence, and connected to prime opportunities. Partner with them for personalized career advancement</p>

                <div className='content-mtop-grid3'>
                    {team.map((val, index) => (
                    <div className='recruiter-box' key={index}>
                        <div className='re-details'>
                            <div className='re-img'>
                                <img src={val.cover} alt='' className="rec-image"/>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </div>
                            <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
                            <label className="rec-label" >{val.address}</label>
                            <h4 className="rec-h4" >{val.name}</h4>

                            <ul className="rec-ul">
                                {val.icon.map((icon, index) => (
                                <li key={index} className="rec-li"><FontAwesomeIcon icon={icon} /></li>
                                ))}
                            </ul>
                            <div className='re-button-flex'>
                                <button className="rec-button">
                                <FontAwesomeIcon icon={faEnvelope} className="rec-button-icon"/>
                                Message
                                </button>
                                <button className='re-btn4'>
                                <FontAwesomeIcon icon={faPhoneAlt} className="re-btn4-icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recruiters;
