import gsap from "gsap";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Breadcrum } from "../components";

function Projects() {
  // GSAP Animation Config
  const el = React.useRef();
  const q = gsap.utils.selector(el);
  const tl = React.useRef();

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

        <div className="container flex flex-col px-6 py-5 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
          <div className="flex banner items-center justify-center w-full lg:w-1/2 mx-auto">
            <span className="object-contain w-full h-full max-w-2xl rounded-3xl">
              <Image
                width={379}
                height={288}
                layout="responsive"
                src="/assets/projects/p-genztechies.svg"
                alt="p-genztechies"
              />
            </span>
          </div>

          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl header-1 font-black tracking-wide text-yellow-400 lg:text-4xl">
                GenZtechies
              </h1>
              <p className="mt-4 text text-gray-400 dark:text-gray-300">
                A website that brings together teen developers and innovators
                from around Nigeria to exchange networking opportunities and get
                to know one another.
              </p>
              <div className="flex text-2 flex-wrap flex-row space-x-5 text-yellow-400 my-3">
                <span>NextJS</span>
                <span>TailwindCSS</span>
              </div>
              <div className="my-6 button">
                <a
                  href="https://genztechies.com"
                  className="bg-white p-4 font-light rounded-full text-[#29279B]"
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
        </div>
      </main>
    </Layout>
  );
}

export default Projects;
