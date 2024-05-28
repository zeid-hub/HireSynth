import React, { useState } from "react";

const FeedbackCard = ({ content, name, title, img }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedContent = expanded ? content : content.slice(0, 150) + "...";

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mx-auto my-0 feedback-card">
      <img
        src={"https://i.imgur.com/rx3eOUo.png"}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {expanded ? content : truncatedContent}
      </p>
      {!expanded && (
        <button
          className="bg-brandPrimary text-white font-bold py-1 px-2 rounded hover:bg-gray-800 transition-all duration-300 hover:translate-y-2 text-sm"
          onClick={toggleExpanded}
        >
          Read More
        </button>
      )}

      {expanded && (
        <button
          className="bg-brandPrimary text-white font-bold py-1 px-2 rounded hover:bg-gray-800 transition-all duration-300 hover:translate-y-2 text-sm"
          onClick={toggleExpanded}
        >
          Show Less
        </button>
      )}

      <div className="flex flex-row">
        <img src={img} alt={name} className="rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
