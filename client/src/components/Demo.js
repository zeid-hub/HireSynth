import React from "react";
import YouTube from 'react-youtube';
import "./Demo.css"; 

const Demo = () => {
  const videoId = "dqHdFWqNN5c";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="get-demo-section">
      <h2>
        <span className="blue-text">Get a Demo on a Codechallenge Today!</span>
      </h2>
      <p>Interested in learning how to take the code challenges for interviewees? Watch our demo video below for a step-by-step guide.</p>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} id="video" />
    </div>
  );
};

export default Demo;


