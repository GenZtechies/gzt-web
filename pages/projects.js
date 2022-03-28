import gsap from "gsap";
import React from "react";
import Image from "next/image";
import { Layout, Breadcrum } from "../components";
import Project from "../components/Projects/Project";
import ProjectBanner from "../components/Projects/ProjectBanner";
import ProjectInfo from "../components/Projects/ProjectInfo";

function Projects() {
  // GSAP Animation Config
  const el = React.useRef();
  const q = gsap.utils.selector(el);
  let tl = React.useRef();

  React.useEffect(() => {
    tl = gsap.timeline();

    // banner image
    tl.from(q(".banner"), {
      duration: 0.5,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
      x: "-200%"
    });

    // header
    tl.from(q(".header-1"), {
      duration: 0.5,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
      x: "200%"
    });

    // text
    tl.from(q(".text"), {
      duration: 1,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
      x: "200%"
    });

    tl.from(q(".text-2"), { duration: 1, ease: "back.out(1, 0.3)", y: -500 });

    tl.from(q(".button"), { duration: 1, ease: "back.out(1, 0.3)", y: 500 });
  });

  return (
    <Layout>
      <main ref={el} className="bg-[#3331C4] pb-12">
        {/* Change this to the current Active Page */}
        <Breadcrum currentPage="Projects" />

        <Project>
          <ProjectBanner
            bannerSrc="/assets/projects/genz-meet-site-preview.png"
            bannerAlt="p-genz-meet"
          />
          {/* Separate Each Project language with a dash or hyphen asin (-) */}
          <ProjectInfo
            projectName="GenZ-Meet"
            projectDesc="Premium Meetings free for everyone 🤘🏾. Create a More secure, more flexible, and completely free video conference"
            projectLanguage="Vue-Jitsi Meet SDk"
            projectLink="https://meet.genztechies.com"
          />
        </Project>

        <Project>
          <ProjectBanner
            bannerSrc="/assets/projects/p-genztechies.svg"
            bannerAlt="p-genztechies"
          />
          {/* Separate Each Project language with a dash or hyphen asin (-) */}
          <ProjectInfo
            projectName="GenZtechies"
            projectDesc="A website that brings together GenZ developers and innovators from
          around Africa to exchange networking opportunities and get to know
          one another."
            projectLanguage="NextJS-TailwindCSS"
            projectLink="https://genztechies.com"
          />
        </Project>
      </main>
    </Layout>
  );
}

export default Projects;
