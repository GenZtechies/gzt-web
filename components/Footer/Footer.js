import Link from "next/link";

function Footer({ overlayBg }) {
  return (
    <footer
      className="text-white footer"
      style={{
        background: `linear-gradient(180deg,${
          overlayBg ? overlayBg : "#3331C4"
        } 25%,#131249 25%)`
      }}
    >
      <div className="flex mx-10 justify-center">
        <div className="p-2 w-screen bg-gradient-to-r from-yellow-300 to-purple-600 rounded-3xl">
          <img
            src="/assets/footer/footer-hero-hand.svg"
            className="h-28 bg-cover mx-auto z-10 absolute left-0 right-0"
            alt="footer-hero-hand"
          />
          <div className="flex py-20 relative bg-[#3331C4] rounded-3xl">
            <div className="text-center relative z-10 mx-auto max-w-2xl lg:max-w-5xl">
              <h2 className="text-xl md:text-2xl lg:text-5xl text-center text-white mb-2">
                Are you a teen techie looking to meet other techies in Nigeria?
              </h2>
              {/* <p className="my-5">Join Us In Our Community</p> */}
              <a
                href="https://forms.gle/W4JgHYBjw9U9WmrCA"
                target="_blank"
                className="text-[#3331C4]"
              >
                <button className="px-5 py-2 bg-yellow-400 rounded-full hover:scale-105 text-base transition duration-150 ease-in-out hover:bg-yellow-500">
                  Join The Community
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 m-auto text-center">
          <img
            src="./assets/footer/nav-logo.svg"
            className=" m-auto"
            alt="logo"
          />
        </div>
        <div className="flex flex-wrap flex-grow px-auto mt-10 text-center">
          <div className="lg:w-1/2" />
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <Link href="/">
              <a className="block p-3">Home</a>
            </Link>
            <Link href="/about">
              <a className="block p-3">About</a>
            </Link>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <Link href="/members">
              <a className="block p-3">Members</a>
            </Link>
            <a href="mailto:hello@genztechies.com" className="block p-3">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <hr className="container mx-auto text-gray-600 hidden lg:block" />
      <div className="container mx-auto px-5 lg:py-10 pb-5 flex flex-wrap flex-col lg:flex-row">
        <p className="text-sm text-left hidden lg:block">
          Copyright &copy; {new Date().getFullYear()} GenzTechies. All rights
          reserved
        </p>
        <Link href="/credits">
          <a className="text-sm text-center p-5 lg:p-0 mx-auto">Credits</a>
        </Link>
        <p className="text-sm text-center p-5 lg:p-0 lg:ml-auto">
          <a href="https://github.com/GenZtechies" target="_blank">
            <img
              src="./assets/footer/footer-github-icon.svg"
              className="inline-flex mx-1"
              alt=""
            />
            •<span className="mx-1">View On GitHub</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
