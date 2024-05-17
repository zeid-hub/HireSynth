import React from "react";
import YouTube from "react-youtube";

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

  return <YouTube videoId={videoId} opts={opts} onReady={_onReady} id="video" />;
};

export default Demo;