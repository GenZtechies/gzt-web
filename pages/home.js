import Image from 'next/image'

export default function home() {
  return (
    <div className="bg-[#131249]">
      <div className="flex h-screen w-screen">
        <div
          className="bg-no-repeat bg-cover bg-center min-h-screen w-screen absolute"
          style={{backgroundImage: "url('/public/assets/hero.svg')" }}
        ></div>

        <div className="mx-auto mt-[27vh] z-10">
          <div className="text-center justify-center">
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

            <div className="mt-8">
              <a
                href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                className="px-10 py-3 font-light rounded-full text-yellow-400"
              >
                Learn More{" "}
                <Image
                  className="inline-block text-yellow-400"
                //   width="30px"
                layout="fill"
                  src="/assets/arrow.svg"
                  alt="directional arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
