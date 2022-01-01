import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components";

function Index() {
  return (
    <Layout>
      <div>
        {/* Please DO NOT Temper with this code, it took me hours to fix it 
        
        
        ****************************************
        */}

        <div
          className="flex h-[60rem] md:h-[70rem] lg:h-[100rem] xl:h-[130rem] w-screen "
          style={{
            width: "-webkit-fill-available"
          }}
        >
          {/* desktop bg image  */}
          <div
            className="z-20 hidden sm:block bg-no-repeat bg-cover bg-center h-[60rem] md:h-[70rem] lg:h-[100rem] xl:h-[130rem] w-screen absolute bg-transparent"
            style={{
              backgroundImage: 'url("./assets/home/hero.svg")',
              width: "-webkit-fill-available"
            }}
          ></div>

          {/* mobile bg image  */}
          <div
            className="z-20 block sm:hidden bg-no-repeat bg-cover bg-center h-[60rem] w-screen absolute bg-transparent  scale-[1] sm:translate-y-[-40rem] "
            style={{
              backgroundImage: 'url("./assets/home/mobilehero.svg")',
              width: "-webkit-fill-available"
            }}
          ></div>
          <div className="mx-auto mt-[26vh] lg:mt-[24vh] z-20 translate-y-[7rem]  sm:translate-y-[5rem] md:translate-y-[10rem] xl:translate-y-[25rem]">
            <div className="text-center justify-center">
              <h1 className="font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-4xl lg:text-7xl">
                <span className="text-white">Connecting</span> Teen
                <br /> Techies <span className="text-white">Across</span>
                <br /> Nigeria
              </h1>
              <div className="mt-8 transition duration-150 ease-in-out hover:scale-105">
                <a
                  href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                  className="px-10 py-3 text-[#3331C4] rounded-full bg-yellow-400 text-base transition duration-150 ease-in-out hover:bg-yellow-500 hover:scale-105"
                >
                  Join The Community
                </a>
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <a className="px-10 py-3 font-light rounded-full text-yellow-400 hover:text-yellow-300 text-base ">
                    Learn More{" "}
                    <img
                      className="inline-block transition duration-150 ease-in-out hover:opacity-90 hover:scale-105"
                      src="./assets/arrow.svg"
                      alt="directional arrow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 
        
        ****************************************
        
        Please DO NOT Temper with this code, it took me hours to fix it  */}

        <section className="relative">
          <img
            src="./assets/home/gradient_ring_one.svg"
            className="w-56 image h-56 sm:w-96 md:h-96 absolute top-[-25vh] sm:top-[-50vh] scale-125 z-10 left-0 opacity-50"
            alt=""
          />

          <img
            src="./assets/home/gradient_ring_second.svg"
            className="w-56 image h-56 sm:w-96 md:h-96 absolute top-[120vh] scale-125 z-10 sm:right-12 md:right-12 opacity-50"
            alt=""
          />
        </section>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0">
              <div className="mb-6">
                <h2 className="max-w-lg mb-6 text-2xl tracking-widest font-sans text-yellow-300">
                  / 01
                </h2>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                  <span className="w-7 inline-block">
                    <Image
                      width={10}
                      height={10}
                      layout="responsive"
                      src="/assets/breadcrum/dot.svg"
                      className="inline-block w-7"
                    />
                  </span>{" "}
                  WHO WE ARE
                </h2>
                <p className="text-base md:text-lg text-white">
                  We are a community that connects teenagers in technology
                  across Nigeria to share opportunities within the network and
                  foster quality connections.
                </p>
              </div>
              <div>
                <Link href="/about">
                  <a className="px-10 py-3 font-light rounded-full text-yellow-400 hover:text-yellow-300 text-base ">
                    Learn More{" "}
                    <img
                      className="inline-block transition duration-150 ease-in-out hover:opacity-90 hover:scale-105"
                      src="./assets/arrow.svg"
                      alt="directional arrow"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <img
                src="./assets/home/who_we_are.png"
                alt="hero"
                className="min-w-full px-5"
              />
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0">
              <div className="mb-6">
                <h2 className="max-w-lg mb-6 text-2xl tracking-widest font-sans text-yellow-300">
                  / 02
                </h2>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                  <span className="w-7 inline-block">
                    <Image
                      width={10}
                      height={10}
                      layout="responsive"
                      src="/assets/breadcrum/dot.svg"
                      className="inline-block w-7"
                    />
                  </span>{" "}
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

        {/* <div className="flex w-full py-10">
          <img
            src="./assets/home/mission_vector.svg"
            className="mx-auto max-w-6xl"
            alt="mission_vector"
          />
        </div> */}

        <div className="flex w-screen pt-10 translate-y-[-2rem] md:translate-y-1">
          <img
            src="/assets/home/mission_vector.svg"
            className="mx-auto max-w-6xl w-full"
            alt="mission_vector"
          />
        </div>

        <div className="bg-[#29279B] -mt-11">
          <div className="px-8 pt-16 mx-auto max-w-full md:px-24">
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
                className="object-contain w-full h-full max-w-2xl rounded-3xl"
                src="./assets/projects/p-genztechies.svg"
                alt="p-genztechies"
              />
            </div>
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-black tracking-wide text-yellow-400 lg:text-4xl">
                  GenZtechies
                </h1>
                <p className="mt-4 text-gray-400 dark:text-gray-300">
                  A website that brings together teen developers and innovators
                  from around Nigeria to exchange networking opportunities and
                  get to know one another.
                </p>
                <div className="flex flex-wrap flex-row space-x-5 text-yellow-400 my-3">
                  <span>NextJS</span>
                  <span>TailwindCSS</span>
                </div>
                <div className="my-6 transition-all duration-300">
                  <a
                    href="https://genztechies.com"
                    className="bg-white p-4 font-light rounded-full text-[#29279B] hover:p-5 transition-all duration-500 ease-in-out"
                  >
                    View Live Site{" "}
                    <img
                      className="inline-block w-9 transition duration-150 ease-in-out hover:opacity-90 hover:scale-105"
                      src="./assets/projects/arrow.svg"
                      alt="directional arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full pt-10 pb-20">
            <div className="mt-8  hover:scale-105 transition duration-150 ease-in-out">
              <Link href="/projects">
                <a className="px-10 py-3 text-[#3331C4] rounded-full bg-yellow-400 text-base transition duration-150 ease-in-out hover:bg-yellow-500">
                  View All Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
