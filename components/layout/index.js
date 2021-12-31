import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout({ children, ...props }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <Footer overlayBg="#29279B" />
    </>
  );
}
