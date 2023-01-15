import React from "react";
import "./styles.scss";

import Avatar from "../../components/Avatar";
import ProgressBar from "../../components/Progress";

const Resume = () => {
  return (
    <div className="resume">
      <Avatar />
      <h1>Adrián Cañuelo Martínez</h1>
      <h2>Junior Frontend Developer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3>SKILLS</h3>
      <ProgressBar text="HTML" progress={70} />
      <ProgressBar text="CSS" progress={20} />
    </div>
  );
};

export default Resume;
