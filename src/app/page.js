import Image from "next/image";
import HomePage from "./Homepage/page";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMb from "./Components/Navbar/NavbarMb";
import StickyNavbar from "./Components/Navbar/Navstyle";
import MetaPixel from "./util/meta/metaPixel";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <MetaPixel />
    <StickyNavbar />
    <NavbarMb />
  <HomePage />

  </>
  );
}
