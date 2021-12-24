import React from "react";
import Link from "next/link";
import { Navbar, Footer } from "../components";

import { gsap } from "gsap";

function Index() {
  // Gsap Animation Config
  const el = React.useRef();
  const q = gsap.utils.selector(el);
  const tl = React.useRef();

  React.useEffect(() => {
    tl = gsap.timeline();
    tl.from(q(".header"), { duration: 1.5, ease: "back.out(1, 0.3)", y: -200 });

    tl.from(
      q(".button"),
      {
        opacity: 0,
        duration: 1.5
      },
      "-=1.5"
    );
    tl.from(
      q(".text"),
      { duration: 1, ease: "back.out(1, 0.3)", y: 200 },
      "-=1.5"
    );
    tl.from(
      q(".num-1"),
      {
        duration: 1,
        ease: "power2.bounce",
        x: "300%"
      },
      "-=1"
    )
      .from(
        q(".image-1"),
        {
          duration: 2.5,
          opacity: 0
        },
        "-=1"
      )
      .from(
        q(".num-2"),
        {
          duration: 1,
          ease: "power2.bounce",
          x: "-300%"
        },
        "-=0.5"
      );

    tl.from(
      q(".num-3"),
      {
        duration: 1,
        ease: "power2.bounce",
        x: "-300%"
      },
      "-=0.5"
    ).from(
      q(".banner"),
      {
        duration: 2,
        opacity:0,
        x: "-300%"
      },
      "-=0.5"
    ).from(
      q(".text-2"),
      { duration: 1, ease: "back.out(1, 0.3)", y: 500 },
      "-=0"
    );
  });

  return (
    <>
      <Navbar />

      <main ref={el} className="bg-[#3331C4]">
        <div className="flex h-screen w-screen">
          <div
            className="bg-no-repeat image bg-cover bg-center min-h-full w-screen absolute bg-[#131249] rounded-b-[25vh]"
            style={{ backgroundImage: 'url("./assets/home/hero.svg")' }}
          ></div>
          <div className="mx-auto mt-[26vh] lg:mt-[24vh] z-10">
            <div className="text-center justify-center">
              <h1 className="font-black header bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-3xl md:text-4xl lg:text-7xl">
                <span className="text-white">Connecting</span> Teen
                <br /> Techies <span className="text-white">Across</span>
                <br /> Nigeria
              </h1>
              <div className="mt-8 button">
                <a
                  href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                  className="px-10 py-3 text-[#3331C4] rounded-full bg-yellow-400"
                >
                  Join The Community
                </a>
              </div>
              <div className="mt-8 text">
                <a
                  href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                  className="px-10 py-3 font-light rounded-full text-yellow-400"
                >
                  Learn More{" "}
                  <img
                    className="inline-block"
                    src="./assets/arrow.svg"
                    alt="directional arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          src="./assets/home/gradient_ring_one.svg"
          className="m-w-full h-full absolute top-1/3 opacity-50 -z-10 left-0"
          alt=""
        />

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex num-1 flex-col justify-center md:pr-8 xl:pr-0">
              <div className="mb-6">
                <h2 className="max-w-lg mb-6 text-2xl tracking-widest font-sans text-yellow-300">
                  / 01
                </h2>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                  <img
                    src="./assets/breadcrum/dot.svg"
                    className="inline-block w-7"
                    alt=""
                  />{" "}
                  WHO WE ARE
                </h2>
                <p className="text-base md:text-lg text-white">
                  We are a community that connect teen techies/devs across
                  Nigeria in one place to share network opportunities and get to
                  know each other
                </p>
              </div>
              <div>
                <a
                  href
                  className="px-3 py-3 font-light rounded-full text-yellow-400"
                >
                  Learn More{" "}
                  <img
                    className="inline-block"
                    src="./assets/arrow.svg"
                    alt="directional arrow"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <img
                src="./assets/home/who_we_are.png"
                alt="hero"
                className="min-w-full px-5 image-1"
              />
            </div>
          </div>
        </div>

        <img
          src="./assets/home/gradient_ring_second.svg"
          className="m-w-full h-full absolute top-[120vh] opacity-80 -z-10 right-0"
          alt=""
        />

        <div className="px-4 py-16 mx-auto max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10">
            <div className="flex num-2 flex-col justify-center md:pr-8 xl:pr-0">
              <div className="mb-6">
                <h2 className="max-w-lg mb-6 text-2xl tracking-widest font-sans text-yellow-300">
                  / 02
                </h2>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                  <img
                    src="./assets/breadcrum/dot.svg"
                    className="inline-block w-7"
                    alt=""
                  />{" "}
                  OUR MISSON
                </h2>
                <div className="grid grid-cols-3 lg:grid-cols-5 space-x-5">
                  <div className="col-span-1 lg:col-span-1">
                    <img
                      src="./assets/home/mission_quote.svg"
                      className="px-5 inline-block min-h-full"
                      alt="mission_quote"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-4 text-xl md:text-3xl lg:text-5xl text-white">
                    Our mission is to connect teens involved in technology
                    across Nigeria to share ideas and access new opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen py-10">
          <img
            src="./assets/home/mission_vector.svg"
            className="mx-auto max-w-6xl w-full"
            alt="mission_vector"
          />
        </div>

        <div className="bg-[#29279B] -mt-11">
          <div className="px-8 num-3 pt-16 mx-auto max-w-full md:px-24">
            <h2 className="mb-6 text-2xl tracking-widest font-sans text-yellow-300">
              / 03
            </h2>
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
              <img
                src="./assets/breadcrum/dot.svg"
                className="inline-block w-7"
                alt=""
              />{" "}
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="flex flex-col px-6 pt-8 mx-auto space-y-6 lg:h-128 lg:flex-row lg:items-center">
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <img
                className="banner object-contain w-full h-full max-w-2xl rounded-3xl"
                src="./assets/projects/p-genztechies.svg"
                alt="p-genztechies"
              />
            </div>
            <div className="flex text-2 flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-black tracking-wide text-yellow-400 lg:text-4xl">
                  GenZtechies
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  A website that brings together teen developers and innovators
                  from around Nigeria in one place to exchange networking
                  opportunities and get to know one another.
                </p>
                <div className="flex flex-wrap flex-row space-x-5 text-yellow-400 my-3">
                  <span>NextJS</span>
                  <span>TailwindCSS</span>
                </div>
                <div className="my-6">
                  <a
                    href
                    className="bg-white p-4 font-light rounded-full text-[#29279B]"
                  >
                    View Live Site{" "}
                    <img
                      className="inline-block w-9"
                      src="./assets/projects/arrow.svg"
                      alt="directional arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full pt-10 pb-20">
            <div className="mt-8">
              <Link href="/projects">
                <a className="px-10 py-3 text-[#3331C4] rounded-full bg-yellow-400">
                  View All Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer overlayBg="#29279B" />
    </>
  );
}

export default Index;
