import React, { useState } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

import './AboutUs.css';
import './index.css';
// import interview from "/home/njesh/HireSynth/client/src/components/Assets/interview.jpg";
// import second from "/home/njesh/HireSynth/client/src/components/Assets/images.jpeg";
// import fourth from "/home/njesh/HireSynth/client/src/components/Assets/eliott-reyna-iO2d-KYp5JU-unsplash.jpg";

const Introduction = () => {
 
  return ( 
         <>
         <div className=" h-1/4 relative" >
      <TECarousel showControls showIndicators ride="carousel">
        <div className="  h-1/4 relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              className="block w-full h-1/4"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Collaboration</h5>
              <p>
              Empowering organizations to identify top tech talent through skills-based assessments, streamlining the hiring process and ensuring the best fit.
              </p>
              <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4">Get Started</button>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="h-1/4 relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Innovation: </h5>
              <p>   We are constantly striving to improve and evolve the recruitment landscape through cutting-edge technology and data-driven insights.
              </p>
              <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4">Get Started</button>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="h-1/4 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Transparency</h5>
              <p>
              HireSynth provides clear assessment criteria and results.
              </p>
              <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4">Get Started</button>
            </div>
          </TECarouselItem>
        </div>
            </TECarousel>
            </div>
    </>
 
);
};

export default Introduction


   
       /* { <Carousel className="w-full mx-auto" autoplay={true}>
          <div className="flex justify-center items-center">
            <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-2 h-full">
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  The hiring platform,
                  <span className="text-brandPrimary leading-snug">
                    that clicks for everyone!
                  </span>
                </h1>
                <p className="text-neutralDGrey text-base nb-8">HireSynth uses skills-based assessments to identify top talent quickly, saving you time and resources.</p>
                <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4">Get Started</button>
              </div>
              <div className="md:w-1/2">
                <img className="w-full" src={interview} alt="Interview" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-2 h-full">
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  The hiring platform,
                  <span className="text-brandPrimary leading-snug">
                    that clicks for everyone!
                  </span>
                </h1>
                <p className="text-neutralDGrey text-base nb-8">HireSynth uses skills-based assessments to identify top talent quickly, saving you time and resources.</p>
                <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4">Get Started</button>
              </div>
              <div className="md:w-1/2">
                <img className="w-full" src={second} alt="Second" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-2 h-full">
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  The hiring platform,
                  <span className="text-brandPrimary leading-snug">
                    that clicks for everyone!
                  </span>
                </h1>
                <p className="text-neutralDGrey text-base nb-8">HireSynth uses skills-based assessments to identify top talent quickly, saving you time and resources.</p>
               
              </div>
              <div className="md:w-1/2">
                <img className="w-full" src={fourth} alt="Fourth" />
              </div>
            </div>
          </div>
        </Carousel> }
      </div>
    </div>*/
  ;
