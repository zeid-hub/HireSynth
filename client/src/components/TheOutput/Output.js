import React, { useState } from "react";
import "./Output.css";

const Output = ({ output }) => {
  const [isError, setIsError] = useState(false);

  return (
    <div className="output-container">
      <div className={`output-box ${isError ? "error" : ""}`}>
        {output && output.length > 0 ? (
          output.map((line, i) => <p key={i} className="my-value">{line}</p>)
        ) : (
          <p className="output-par">Click "Submit Code" to see the output here</p>
        )}
        {isError && (
          <p className="output-error">There was an error executing the code. Please check your code and try again.</p>
        )}
      </div>
    </div>
  );
};

export default Output;
