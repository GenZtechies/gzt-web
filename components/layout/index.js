import { Navbar, Footer } from "../index";

export default function Layout({ children, ...props }) {
  return (
    <>
      <Navbar />

      <main className="bg-[#3331C4]">{children}</main>

      <Footer overlayBg="#29279B" />
    </>
  );
}
