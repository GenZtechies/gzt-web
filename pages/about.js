import Image from "next/image";
import { Navbar, Footer, Breadcrum } from "../components";

function About() {
  return (
    <>
      <Navbar />

      <main className="">
        <Breadcrum currentPage="About" />
      </main>

      <Footer />
    </>
  );
}

export default About;
