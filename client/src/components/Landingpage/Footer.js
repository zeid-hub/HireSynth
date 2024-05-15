import React from "react";
import "./Footer.css"
// import Logo from '../../Images/logo.png';

import Logo from '../Images/logo.png'

function Footer (){

    const footer = [
        {
          title: "LAYOUTS",
          text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
        },
        {
          title: "ALL SECTIONS",
          text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
        },
        {
          title: "COMPANY",
          text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
        },
      ]
      

    return(
    <div className="class-footer-container">
        <div className='footer-Contact'>
            <div className='send-flex'>
              <div className='text'>
                <h1 className="title-text">Do You Have Questions ?</h1>
                <p>We'll help you to grow your career and growth.</p>
              </div>
              <button className='btn5'>Contact Us Today</button>
            </div>
        </div>
        <div className='container'>
            <div className='box'>
                <img src={ Logo } alt="Logo" className="my-image-footer"/>
                <h2>Do You Need Help With Anything?</h2>
                <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p><div className='input-flex'>
                <form className="footer-text">
                  <input type='text' placeholder='Email Address' />
                  <button className="form-button">Subscribe</button>
                </form>
            </div>
            </div>

            {footer.map((val) => (
              <div className='box'>
                <h3>{val.title}</h3>
                <ul className="unordered">
                  {val.text.map((items) => (
                    <li className="ordered"> {items.list} </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className='legal'>
          <h1 className="legal-1">© 2024 HireSynth. Designd By Group2.</h1>
        </div>
    </div>
    )
}
export default Footer;