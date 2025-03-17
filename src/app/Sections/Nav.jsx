'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import YButton from "../Components/YButton";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.isReady, router.events]);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#002a31]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-[#FFFB00] font-bold text-2xl">AMERAA FINNWAY</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex text-white items-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="#service">Service</Link>
            <Link href="#contact">Contact Us</Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block font-semibold">
            <YButton text="Get a Fund Quote" padding="px-10" />
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden z-50">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button text-gray-200 hover:text-[#FFFB00]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-8 w-8 text-[#FFFB00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu with Transition */}
      <div
        className={`
          fixed inset-0 bg-[#002a31] text-white flex flex-col pl-10 pt-20 space-y-8
          transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
          z-40
        `}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl">Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl">About Us</Link>
        <Link href="#service" onClick={() => setIsOpen(false)} className="text-xl">Service</Link>
        <Link href="#contact" onClick={() => setIsOpen(false)} className="text-xl">Contact Us</Link>
        <div className="text-black font-semibold mt-4 text-xl" onClick={() => setIsOpen(false)}>
          <YButton text="Get a Fund Quote" padding="px-8" />
        </div>
      </div>
    </div>
  );
}
