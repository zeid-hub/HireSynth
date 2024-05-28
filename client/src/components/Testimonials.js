import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { Carousel } from "nuka-carousel";

const feedback = [
  {
    id: "feedback-1",
    content:
      "HireSynth's platform is user-friendly and intuitive. The comprehensive features and ease of use make it a valuable tool for our recruitment process. The platform's coding challenges are robust and effectively filter the best candidates, saving us significant time and resources. We are highly satisfied with the results and recommend HireSynth to other recruiters looking for an efficient solution.",
    name: "Herman Jensen",
    title: "Recrutier",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-2",
    content:
      "HireSynth has revolutionized my technical interview process. The platform's preparation tools and resources are top-notch, helping me to improve my coding skills and perform better in interviews. The challenges are realistic and align well with industry standards. Thanks to HireSynth, I secured my dream job. I highly recommend it to anyone looking to enhance their technical interview skills.",
    name: "Steve Mark",
    title: "Interviwee",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-3",
    content:
      "HireSynth's coding challenges are a great way to showcase my technical skills to potential employers. The platform's user interface is sleek and easy to navigate, making it simple to manage the recruitment process efficiently. The detailed reporting and analytics provided by HireSynth help us make informed hiring decisions. I highly recommend HireSynth for both recruiters and candidates.",
    name: "Kenn Gallagher",
    title: "Interviwee",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <div className="w-full md:mt-0 mt-6">
                        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  What are   
                <br/>   <span className="text-brandPrimary leading-snug">
                         people saying About Us
                  </span> 
                </h1>
        
      </div>
    
    </div>
    <Carousel autoplay autoplayInterval={3000} wrapAround={true}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
              ))}
    </Carousel>
  </section>
);

export default Testimonials;


 // Assuming you want to export this component


//   const data = [
//     {
//       name: "Johnson Sakaja",
//       position: "Recruiter",
//       img: '/home/njesh/HireSynth/client/src/components/Assets/pexels-justin-shaifer-501272-1222271.jpg',
//       review: ""
//     },
//     {
//       name: "Norah Njesh",
//       position: "Interviewee",
//       img: '/home/njesh/HireSynth/client/src/components/Assets/pexels-danxavier-1239291.jpg',
//       review: "HireSynth has revolutionized my technical interview process. The platform's preparation tools and resources are top-notch, helping me to improve my coding skills and perform better in interviews. The challenges are realistic and align well with industry standards. Thanks to HireSynth, I secured my dream job. I highly recommend it to anyone looking to enhance their technical interview skills."
//     },
//     {
//       name: "Maggarita Oteino",
//       position: "Interviewee",
//       img: '/home/njesh/HireSynth/client/src/components/Assets/pexels-simon-robben-55958-614810.jpg',
//       review: "The coding challenges on HireSynth can be quite challenging, even for experienced developers. However, they are an excellent way to improve one's skills and demonstrate technical proficiency to potential employers. The support from HireSynth is also exceptional, providing timely assistance whenever needed. Overall, it's a fantastic platform for technical interview preparation."
//     },
//     {
//       name: "Raphael Kipruto",
//       position: "Recruiter",
//       img: '/pexels-tarzine-jackson-254126-773371.jpg',
//       review: "HireSynth's coding challenges are a great way to showcase my technical skills to potential employers. The platform's user interface is sleek and easy to navigate, making it simple to manage the recruitment process efficiently. The detailed reporting and analytics provided by HireSynth help us make informed hiring decisions. I highly recommend HireSynth for both recruiters and candidates."
//     }
//   ];

//   const [expanded, setExpanded] = useState(Array(data.length).fill(false));

//   const handleToggle = (index) => {
//     const newExpanded = [...expanded];
//     newExpanded[index] = !newExpanded[index];
//     setExpanded(newExpanded);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1
//   };

//   
//     <div className="w-3/4 mx-auto my-10 h-auto bg-silver">
//       <div className="mt-10">
//         <Slider {...settings}>
//           {data.map((d, index) => (
//             <div key={index} className="bg-gray-200 h-auto text-black rounded-xl p-4 flex flex-col items-center">
//               <div className="h-24 w-full flex justify-center items-center bg-brandPrimary rounded-t-xl">
//                 <img src={d.img} alt={d.name} className="h-20 w-20 rounded-full" />
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2 p-4">
//                 <p className="text-lg font-semibold">{d.name}</p>
//                 <p className="text-sm">{d.position}</p>
//                 <blockquote className="italic text-center text-sm">
//                   {expanded[index] ? d.review : `${d.review.substring(0, 60)}...`}
//                 </blockquote>
//                 <div>
//                   <button
//                     onClick={() => handleToggle(index)}
//                     className="bg-brandPrimary text-white font-bold py-1 px-2 rounded hover:bg-gray-800 transition-all duration-300 hover:translate-y-2 text-sm"
//                   >
//                     {expanded[index] ? "Read Less" : "Read More"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>


