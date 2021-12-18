import Image from "next/image";
import styles from "../styles/home.module.css";

export default function home() {
  return (
    <div className="bg-[#3331C4] ">
      <div className={styles.overlay}>
        <div className=" flex h-screen mx-5">
          <div className="text-center m-auto justify-center content-center">
            <h1 className="font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-3xl md:text-4xl lg:text-7xl">
              <span className="text-white">Connecting</span> Teen
              <br />
              Techies <span className="text-white">Across</span>
              <br />
              Nigeria
            </h1>
            <div className="mt-8">
              <a
                href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                className="px-10 py-3 text-[#3331C4] rounded-full bg-yellow-400"
              >
                Join The Community
              </a>
            </div>

            <div className="flex mt-8">
              <a
                href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                className="px-10 py-1 font-light flex mx-auto rounded-full text-yellow-400"
              >
                <span className="px-2">Learn More </span>
                <Image
                  className="inline-block text-yellow-400"
                  width={25}
                  height={25}
                  src="/assets/arrow.svg"
                  alt="directional arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="m-auto mx-10 ">
          <p className="text-yellow-500 my-3 font-light">/ 01 </p>
          <Image
            className="inline-block mx-left text-yellow-400"
            width={20}
            height={12.5}
            src="/assets/dot.svg"
            alt="directional arrow"
          />
          <h1 className="font-black inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            WHO ARE WE
          </h1>
          <p className="text-white text-sm font-thin">
            We are a community that connect teen techies/devs across Nigeria in
            one place to share network opportunities and get to know each other
          </p>
          <div className="flex mt-8">
            <a
              href="https://forms.gle/W4JgHYBjw9U9WmrCA"
              className=" py-1 font-light flex mx-left rounded-full text-yellow-400"
            >
              <span className="px-2">Learn More </span>
              <Image
                className="inline-block text-yellow-400"
                width={25}
                height={25}
                src="/assets/arrow.svg"
                alt="directional arrow"
              />
            </a>
          </div>
        </div>
        <div className="mx-5">
          <Image
            src="/assets/three.svg"
            alt="Picture of the author"
            width={900}
            height={900}
          />
        </div>
      </div>
      <div className={`${styles.mission} flex`}>
        <div className="m-auto mx-3 ml-8">
          <p className="text-yellow-500 my-3 font-light">/ 02 </p>
          <Image
            className="inline-block my-10 mx-left text-yellow-400"
            width={20}
            height={12.5}
            src="/assets/dot.svg"
            alt="directional arrow"
          />
          <h1 className="font-black inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            OUR MISSION
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <Image
              className="col-span-1"
              src="/assets/mission_quote.svg"
              width={20}
              height={20}
              layout="responsive"
            />
            <p className="text-white col-span-3 m-auto text-lg font-bold">
              Our mission is to connect teens involved in technology across
              Nigeria to share ideas and access new opportunities.
            </p>
          </div>
          <div className="flex mt-8">
            <a
              href="https://forms.gle/W4JgHYBjw9U9WmrCA"
              className=" py-1 font-light flex mx-left rounded-full text-yellow-400"
            >
              <span className="px-2">Learn More </span>
              <Image
                className="inline-block text-yellow-400"
                width={25}
                height={25}
                src="/assets/arrow.svg"
                alt="directional arrow"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            className=""
            src="/assets/lower-ellipse.svg"
            width={600}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
