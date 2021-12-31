import Image from "next/image";
import Link from "next/link";
export default function Breadcrum({ currentPage }) {
  return (
    <>
      <div className="relative z-20 w-full h-48 lg:h-60 ">
        <img
          className="w-full object-fill h-48 hidden md:block lg:h-60"
          src="assets/breadcrum/desktop-ellipse.png"
        />
        <img
          className="w-full object-fill h-48 md:hidden"
          src="assets/breadcrum/mobile-ellipse.png"
        />
        <p className="absolute text-center w-full bottom-10 text-xl text-white translate-y-[-4rem]">
          <Link href="/">
            <a className="inline-block mr-3">Home</a>
          </Link>
          <img className="inline-block" src="assets/breadcrum/dot.svg" />

          <Link href={`/${currentPage}`}>
            <a className="inline-block ml-3">{currentPage}</a>
          </Link>
        </p>
      </div>

      <div className="w-56 h-56 sm:w-96 md:h-96 absolute top-28 md:top-0 scale-125 z-10 left-0 opacity-50">
        <Image
          width={500}
          height={500}
          layout="responsive"
          src="/assets/home/gradient_ring_one.svg"
          // className="m-w-full h-full absolute top-1/3 opacity-50 z-10 left-0"
          alt=""
        />
      </div>
    </>
  );
}
