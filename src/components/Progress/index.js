import React from "react";
import "./styles.scss";

const ProgressBar = ({ text, progress }) => {
  return (
    <div className="progress">
      <div className="shadow w-full mt-2 bg-white">
        <div
          className="bg-blue-600 text-xs leading-none py-1 text-center text-black"
          styles={`width: ${progress}%`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
