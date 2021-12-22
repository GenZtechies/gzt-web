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
        <p className="absolute text-center w-full bottom-10 text-xl text-white">
          <span className="inline-block mr-3">Home</span>
          <img className="inline-block" src="assets/breadcrum/dot.svg" />
          <span className="inline-block ml-3">{currentPage}</span>
        </p>
      </div>
    </>
  );
}
