import React from 'react';
import './About.css';
import '../index.css'
import { useCollapse } from 'react-collapsed';

function Upperpart() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  return (
    <div 
      className="upper bg-cover bg-center w-full h-1/3 relative" 
      style={{ backgroundImage: 'url(/7d7063b9688958c7148365a9960c4b9f.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-center items-start text-white h-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-bold text-neutralDGrey">Welcome to HireSynth</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-neutralDGrey">Your comprehensive platform for technical interviews</p>
        <div>
          { isExpanded && (
            <button 
              {...getToggleProps()} 
              className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4"
            >
             Show Less
            </button>
          )}
          <section  {...getCollapseProps()} className='text-lg md:text-l lg:text-l mb-6  text-black'>
           At HireSynth, we specialize in providing comprehensive solutions for technical recruitment, utilizing Codility to streamline the hiring process. Our mission is to connect top talent with leading companies by leveraging advanced assessment tools and methodologies. We assist organizations in identifying the best candidates through rigorous coding tests, ensuring that only the most qualified individuals make it through. Additionally, we support candidates in their preparation for Codility assessments, offering resources and guidance to help them succeed. Our commitment to excellence in technical recruitment drives us to constantly innovate and refine our strategies, ensuring the best possible outcomes for both employers and job seekers.
          </section>
          {!isExpanded && (
            <button 
              {...getToggleProps()} 
              className="bg-brandPrimary text-white font-bold py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4"
            >
              About Us
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upperpart;
