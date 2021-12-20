export default function IndexPage() {
  return (
    <main className="bg-[#131249]">
      <div className="flex h-screen w-screen">
        <div
          className="bg-no-repeat bg-cover bg-center min-h-screen w-screen absolute"
          style={{ backgroundImage: "url('./assets/banner.svg')" }}
        />
        <div className="m-auto z-10">
          <div className="text-center justify-center">
            <h1 className="font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 text-4xl md:text-6xl lg:text-8xl">
              <span className="text-white">Connecting</span> Teen Techies
              <br className="hidden md:block" />
              <span className="text-white">Across</span> Nigeria
            </h1>

            <div className="mt-12 text-yellow-400 text-2xl lg:md:text-3xl font-black">
              Gen
              <span className="text-3xl lg:md:text-4xl">Z</span>
              techies.
              <span className="text-5xl lg:md:text-6xl">com</span>
            </div>

            <div className="mt-8">
              <a
                href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                className="px-10 py-2 font-semibold text-white rounded-full transition duration-500 ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-900 focus:shadow-outline focus:outline-none"
              >
                Wanna hear when we go live?
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
