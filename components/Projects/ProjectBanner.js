import Image from "next/image";
import React from "react";

function ProjectBanner(props) {
  return (
    <div className="flex banner items-center justify-center w-full lg:w-1/2 mx-auto">
      <span className="object-contain w-full h-full max-w-2xl rounded-3xl">
        <Image
          width={379}
          height={288}
          layout="responsive"
          src={props.bannerSrc}
          alt={props.bannerAlt}
        />
      </span>
    </div>
  );
}

export default ProjectBanner;
