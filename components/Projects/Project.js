import React from "react";
import ProjectBanner from "./ProjectBanner";
import ProjectInfo from "./ProjectInfo";

function Project({ children }) {
  return (
    <div className="container flex flex-col px-6 py-5 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
      {children}
    </div>
  );
}

export default Project;
