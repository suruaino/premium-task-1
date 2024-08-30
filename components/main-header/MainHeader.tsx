"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import menu from "../../public/assets/shared/mobile/icon-hamburger.svg";
import close from "../../public/assets/shared/mobile/icon-close.svg";

const MainHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);

  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className=" h-[128px] flex flex-col justify-center">
      <div className="container max-w-[80%] w-full flex justify-between self-center">
        <div className="logo">
          <Image
            src="/assets/shared/desktop/logo-dark.png"
            width={196}
            height={24}
            alt="Main Header Logo"
          />
        </div>
        {isMobile ? (
          <nav className="w-full flex gap-5 md:gap-[42px]">
            <Image
              className="menuBtn absolute right-10"
              src={showNav ? close : menu}
              alt="Menu Toggle"
              onClick={menuToggle}
            />
            {showNav &&
            
            <ul className="bg-[#1D1C1E] text-white text-[24px] w-full py-8 px-4 flex flex-col gap-8 absolute right-0 top-[125px] z-50">
              <div className="overlay bg-[#00000080] h-screen absolute inset-0 -z-10"></div>
              <Link href="/" onClick={menuToggle} className="hover:underline">Home</Link>
              <Link href="/aboutus" onClick={menuToggle} className="hover:underline">Our Company</Link>
              <Link href="/locations" onClick={menuToggle} className="hover:underline">Locations</Link>
              <Link href="/contact" onClick={menuToggle} className="hover:underline">Contact</Link>
            </ul>
}
          </nav>
        ) : (
          <nav className="flex gap-5 md:gap-[42px]">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/aboutus" className="hover:underline">Our Company</Link>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainHeader;

