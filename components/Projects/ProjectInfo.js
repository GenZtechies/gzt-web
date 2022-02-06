import React from "react";

function ProjectInfo(props) {
  const myString = props.projectLanguage;
  const projectLanguage = myString.split("-");
  return (
    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
      <div className="max-w-lg lg:mx-12 lg:order-2">
        <h1 className="text-3xl header-1 font-black tracking-wide text-yellow-400 lg:text-4xl">
          {props.projectName}
        </h1>
        <p className="mt-4 text text-gray-400 dark:text-gray-300">
          {props.projectDesc}
        </p>
        <div className="flex text-2 flex-wrap flex-row space-x-5 text-yellow-400 my-3">
          {projectLanguage.map((lang) => {
            return <span>{lang}</span>;
          })}
        </div>
        <div className="my-6 button">
          <a
            href={props.projectLink}
            className="bg-white p-4 font-light rounded-full text-[#29279B]"
            target="_blank"
          >
            View Live Site
            <img
              className="inline-block w-9"
              src="/assets/projects/arrow.svg"
              alt="directional arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
