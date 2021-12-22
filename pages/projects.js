import Image from "next/image";
import { Navbar, Footer, Breadcrum } from "../components";

function Projects() {
  return (
    <>
      <Navbar />

      <main className="bg-[#3331C4] pb-12">
        {/* Change this to the current Active Page */}
        <Breadcrum currentPage="Sample" />

        <body className="bg-[#131249]">
          <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
              <div className="flex items-center justify-center w-full lg:w-1/2">
                <span className="object-contain w-full h-full max-w-2xl rounded-3xl">
                  <Image
                    width={379}
                    height={288}
                    src="/assets/projects/p-genztechies.svg"
                    alt="p-genztechies"
                  />
                </span>
              </div>

              <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                  <div className="max-w-lg lg:mx-12 lg:order-2">
                      <h1 className="text-3xl font-black tracking-wide text-yellow-400 lg:text-4xl">GenZtechies</h1>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">A website that brings together teen developers and innovators from around Nigeria in one place to exchange networking opportunities and get to know one another.</p>
                      <div className="flex flex-wrap flex-row space-x-5 text-yellow-400 my-3">
                          <span>NextJS</span>
                          <span>TailwindCSS</span>
                      </div>
                      <div className="my-6">
                          <a className="bg-white p-4 font-light rounded-full text-[#29279B]">
                              View Live Site <img className="inline-block w-9" src="/assets/projects/arrow.svg" alt="directional arrow" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </body>
      </main>

      <Footer />
    </>
  );
}

export default Projects;
