import React from "react";
import { useParams } from "react-router-dom";

function MyScores() {
  const { score } = useParams();

  return (
    <div>
      <h1>My Scores</h1>
      <p>Your score: {score}</p>
    </div>
  );
}

export default MyScores;