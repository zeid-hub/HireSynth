import React from "react";
import YouTube from "react-youtube";
import "./Demo.css"; 

const Demo = () => {
  const videoId = "G85RczkTjTc";

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
        <span className="blue-text">Get a Demo of Hiresynth Today!</span>
      </h2>
      <p>Experience the power of Hiresynth with a personalized demo. See how our platform can transform your hiring process.</p>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} id="video" />
    </div>
  );
};

export default Demo;
