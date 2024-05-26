import React from "react";
import { Carousel } from "flowbite-react"; // Assuming this is the correct import statement for the Carousel component
import './About.css'
import '../index.css';
import interview from "/home/njesh/HireSynth/client/src/components/Assets/interview.jpg";
import second from "/home/njesh/HireSynth/client/src/components/Assets/images.jpeg";
import fourth from "/home/njesh/HireSynth/client/src/components/Assets/eliott-reyna-iO2d-KYp5JU-unsplash.jpg";

const Introduction = () => {
  return (
    <div className="introduction bg-silver h-1/3">
      <div className="px-4 lg:px-8 max-w-screen-2xl mx-auto h-screen flex items-center justify-center">
        <Carousel className="w-full mx-auto" autoplay={true}>
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
                <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4">Get Started</button>
              </div>
              <div className="md:w-1/2">
                <img className="w-full" src={fourth} alt="Fourth" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Introduction;
