import Image from "next/image";
import HomePage from "./Homepage/page";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMb from "./Components/Navbar/NavbarMb";
import StickyNavbar from "./Components/Navbar/Navstyle";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <StickyNavbar />
    <NavbarMb />
  <HomePage />

  </>
  );
}
