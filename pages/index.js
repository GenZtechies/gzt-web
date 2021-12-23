import Image from "next/image";
import { Navbar, Footer, Breadcrum } from "../components";

function Index() {
  return (
    <>
      <Navbar />
      <main className="bg-[#3331C4] pb-12">
        {/* Change this to the current Active Page */}
        <Breadcrum currentPage="Home" />
          <div className="flex h-screen w-screen ">
              <div
                className="bg-no-repeat bg-cover bg-center min-h-full w-screen absolute bg-[#131249] rounded-b-[25vh] index-page-bg-image"
                style={{
                  backgroundImage: `url('/assets/home/hero.svg')`
                }}>
              </div>

              <div className="mx-auto mt-[26vh] lg:mt-[24vh] z-10">
                  <div className="text-center justify-center ">
                      <h1
                          className="font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-3xl md:text-4xl lg:text-7xl">
                          <div className="text-white">Connecting</div> Teen
                          <br /> Techies <div className="text-white">Across</div>
                          <br /> Nigeria
                      </h1>

                      <div className="mt-8">
                          <a href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                              className="px-10 py-3 text-[#3331C4] rounded-full bg-yellow-400">
                              Join The Community
                          </a>
                      </div>

                      <div className="mt-8">
                          <a href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                              className="px-10 py-3 font-light rounded-full text-yellow-400">
                              Learn More <img className="inline-block" src="/assets/arrow.svg" alt="directional arrow" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="m-w-full h-full absolute top-1/3 opacity-50 -z-10 left-0">
            <Image src="/assets/home/gradient_ring_one.svg" layout="responsive" width={274} height={445} alt=""/>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-2">
                  <div className="flex flex-col justify-center md:pr-8 xl:pr-0">
                      <div className="mb-6">
                          <h2 className="max-w-lg mb-6 text-2xl tracking-widest font-sans text-yellow-300">
                              / 01
                          </h2>
                          <h2
                              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
                              <div className="inline-block w-7 mr-2">
                                <Image src="/assets/breadcrum/dot.svg" width={15} height={16} layout="responsive" alt=""/>
                              </div>WHO WE ARE
                          </h2>
                          <p className="text-base md:text-lg text-white">
                              We are a community that connect teen techies/devs across Nigeria in one place to share network
                              opportunities and get to know each other
                          </p>
                      </div>
                      <div>
                          <a href="" className="px-3 py-3 font-light rounded-full text-yellow-400">
                              Learn More <img className="inline-block" src="/assets/arrow.svg" alt="directional arrow" />
                          </a>
                      </div>
                  </div>
                  <div className="flex items-center justify-center -mx-4 lg:pl-8">
                      <div className="min-w-full px-5">
                        <Image src="/assets/home/who_we_are.png" width={581} height={526} layout="responsive"alt="hero"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="m-w-full h-full absolute top-[120vh] opacity-80 -z-10 right-0">
            <Image src="/assets/home/gradient_ring_second.svg" width={15} height={16} layout="responsive" alt=""/>
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
                          alt
                        />
                      </span>{" "}
                      OUR MISSON
                    </h2>
                    <div className="grid grid-cols-3 lg:grid-cols-5 space-x-5 md:space-x-10">
                      <div className="col-span-1 lg:col-span-1">
                        <Image
                          width={10}
                          height={10}
                          layout="responsive"
                          src="/assets/home/mission_quote.svg"
                          className="px-5 inline-block min-h-full"
                          alt="mission_quote"
                        />
                      </div>
                      <div className="col-span-2 lg:col-span-4 text-base md:text-3xl lg:text-5xl text-white">
                        Our mission is to connect teens involved in technology
                        across Nigeria to share ideas and access new
                        opportunities.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-screen pt-10 translate-y-1">
              <img
                src="/assets/home/mission_vector.svg"
                className="mx-auto max-w-6xl w-full"
                alt="mission_vector"
              />
            </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
