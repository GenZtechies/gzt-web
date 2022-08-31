import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="z-20 relative">
        <nav className="flex justify-between px-4 py-5 mx-auto bg-[#3331C4] ">
          <div>
            <Link href="/">
              <a>
                <img
                  src="./assets/navbar/nav-logo.svg"
                  className="p-3"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="flex space-x-8">
            <div className="flex space-x-8">
              <Link href="/">
                <a
                  className={[
                    "p-3 text-white lg:block hidden uppercase  hover:text-yellow-500",
                    router.pathname === "/" && "text-yellow-500"
                  ].join(" ")}
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={[
                    "p-3 text-white lg:block hidden uppercase hover:text-yellow-500",
                    router.pathname === "/about" && "text-yellow-500"
                  ].join(" ")}
                >
                  About
                </a>
              </Link>
              <a
                href="http://members.genztechies.com/"
                target="_blank"
                className={[
                  "p-3 text-white lg:block hidden uppercase hover:text-yellow-500",
                  router.pathname === "/members" && "text-yellow-500"
                ].join(" ")}
              >
                Members
              </a>
              <Link href="/projects">
                <a
                  className={[
                    "p-3 text-white lg:block hidden uppercase hover:text-yellow-500",
                    router.pathname === "/projects" && "text-yellow-500"
                  ].join(" ")}
                >
                  Projects
                </a>
              </Link>
              <a
                href="https://linktr.ee/genztechies"
                target="_blank"
                className="text-[#3331C4] hidden md:block"
              >
                <button
                  className="p-3 bg-yellow-300 rounded-full hover:scale-105 transition duration-150 ease-in-out hover:bg-yellow-500
                "
                >
                  Join The Community
                </button>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button className="block" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <img
                    src="./assets/navbar/nav-menu-icon-close.svg"
                    className="p-auto"
                    alt="menu"
                  />
                ) : (
                  <img
                    src="./assets/navbar/nav-menu-icon-open.svg"
                    className="p-auto"
                    alt="menu"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div className="none -mt-5 bg-[#3331C4] flex lg:hidden">
            <div className="mx-2 w-screen flex-col divide-y divide-white">
              <Link href="/">
                <a className="p-5 w-full float-left text-white uppercase">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="p-5 w-full float-left text-white uppercase">
                  About
                </a>
              </Link>
              <a
                href="http://members.genztechies.com/"
                target="_blank"
                className="p-5 w-full float-left text-white uppercase"
              >
                Members
              </a>
              <Link href="/projects">
                <a className="p-5 w-full float-left text-white uppercase">
                  Projects
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
