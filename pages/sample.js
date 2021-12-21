import { Navbar, Footer, Breadcrum } from "../components";

function Sample() {
  return (
    <>
      <Navbar />

      {/* Change this to the current Active Page */}
      <Breadcrum currentPage="Sample" />

      {/* Your Page Code here || Remove the next line */}
      <br className="my-28" />

      <Footer />
    </>
  );
}

export default Sample;
