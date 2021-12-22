import Image from "next/image";
import { Navbar, Footer, Breadcrum } from "../components";
import Link from "next/link";
function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#3331C4] overflow-x-hidden">
        <Breadcrum currentPage="About" />
        <div className="w-56 h-56 sm:w-96 md:h-96 absolute top-28 md:top-0 scale-125 z-10 left-0 opacity-50">
          <Image
            width={500}
            height={500}
            layout="responsive"
            src="/assets/home/gradient_ring_one.svg"
            // class="m-w-full h-full absolute top-1/3 opacity-50 z-10 left-0"
            alt=""
          />
        </div>
        <div className="w-56 h-56 sm:w-96 md:h-96 absolute top-[120vh] scale-125 z-10 right-5 sm:right-12 md:right-12 opacity-50">
          <Image
            width={500}
            height={500}
            layout="responsive"
            src="/assets/home/gradient_ring_second.svg"
            // class="m-w-full h-full absolute top-1/3 opacity-50 z-10 left-0"
            alt=""
          />
        </div>

        {/* About section starts  */}
        <section className="bg-[#3331C4] relative">
          {/* Design Elements starts */}

          {/* Design Elements  ends*/}
          <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                          alt
                        />
                      </span>{" "}
                      WHO WE ARE
                    </h2>
                    <p className="text-base md:text-lg text-white">
                      We are a community that connect teen techies/devs across
                      Nigeria in one place to share network opportunities and
                      get to know each other
                    </p>
                  </div>
                  <div>
                    <Link href="#">
                      <a className="px-3 py-3 font-light rounded-full text-yellow-400 flex items-center space-x-10 cursor-pointer">
                        Learn More{" "}
                        <span className="w-10 h-10 inline-block ml-2">
                          <Image
                            width={10}
                            height={10}
                            layout="responsive"
                            className="inline-block"
                            src="/assets/arrow.svg"
                            alt="directional arrow"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex items-center justify-center -mx-4 lg:pl-8 relative">
                  <div className="w-full h-98">
                    <Image
                      width={106}
                      height={109}
                      layout="responsive"
                      src="/assets/home/who_we_are.png"
                      alt="hero"
                      className="min-w-full px-5"
                    />
                  </div>
                </div> */}
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
            <div class="flex w-screen pt-10 translate-y-1">
              <img
                src="/assets/home/mission_vector.svg"
                class="mx-auto max-w-6xl w-full"
                alt="mission_vector"
              />
            </div>
          </div>
        </section>

        {/* About section starts  */}

        {/* More than just a coommunity section starts  */}
        <section className="bg-[#29279B] py-20 flex items-center flex-col text-center">
          <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            More than just a coommunity
          </h2>
          <h1 class="text-3xl font-black tracking-wide text-yellow-400 lg:text-4xl py-3">
            We Learn, Build and have fun
          </h1>

          <img
            src="/assets/about/placeholder.svg"
            alt="A placeholder Image"
            className="py-5 px-5"
          />
          <Link href="#">
            <a className="px-5 py-2 bg-yellow-500 rounded-full cursor-pointer">
              MEET THE TEAM
            </a>
          </Link>
        </section>
      </main>
      {/* More than just a coommunity section ends */}
      <Footer />
    </>
  );
}

export default About;
