"use client";

import Link from "next/link";
import { useState } from "react";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="z-20 h-8 w-8 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <nav
        className={`absolute bottom-0 left-0 right-0 top-0 bg-slate-950 lg:relative ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex h-full w-full flex-col items-start justify-center gap-2 text-xl lg:flex-row lg:items-center lg:justify-start lg:text-base">
          <li className="w-full text-center lg:w-max">
            <Link
              href="/#home"
              className="inline-block w-[110px] text-left lg:w-max"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Home
            </Link>
          </li>
          <li className="w-full text-center lg:w-max">
            <Link
              href="/#about"
              className="inline-block w-[110px] text-left  lg:w-max"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              About
            </Link>
          </li>
          <li className="w-full text-center lg:w-max">
            <Link
              href="/#contact"
              className="inline-block w-[110px] text-left  lg:w-max"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Hamburger;
