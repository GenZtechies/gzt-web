import { Navbar, Footer, Breadcrum } from "../components";

function Sample() {
  return (
    <>
      <Navbar />

      <main className="bg-[#3331C4] pb-12">
        {/* Change this to the current Active Page */}
        <Breadcrum currentPage="Sample" />

        {/* Your Page Code here || Remove the next line */}
        <br className="my-28" />
      </main>

      <Footer />
    </>
  );
}

export default Sample;
