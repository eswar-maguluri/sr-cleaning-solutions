"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <a
              href="#"
              className="font-bold tracking-tight"
            >
              <span className="text-white text-2xl md:text-3xl">
                SR Cleaning
              </span>
              <span className="text-yellow-400 text-2xl md:text-3xl">
                {" "}Solutions
              </span>
            </a>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10">
              <a
                href="#services"
                className="text-white/80 hover:text-yellow-400 transition"
              >
                Services
              </a>
              <a
                href="#reviews"
                className="text-white/80 hover:text-yellow-400 transition"
              >
                Reviews
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-yellow-400 transition"
              >
                About
              </a>
              <a
                href="tel:+919494239260"
                className="
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                px-7
                py-3
                rounded-full
                font-semibold
                shadow-lg
                shadow-yellow-500/20
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Call Now
              </a>
            </div>
            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </nav>
      {/* BACKDROP */}
      <div
        onClick={closeMenu}
        className={`
        fixed inset-0
        bg-black/70
        backdrop-blur-sm
        z-40
        transition-all duration-300
        ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
        md:hidden
        `}
      />
      {/* MOBILE MENU */}
      <div
        className={`
        fixed
        top-0
        right-0
        h-screen
        w-full
        bg-[#050b14]
        z-50
        flex
        flex-col
        transition-all
        duration-500
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
        md:hidden
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <h2 className="text-white text-2xl font-bold">
            Menu
          </h2>
          <button
            onClick={closeMenu}
            className="text-white"
          >
            <X size={32} />
          </button>
        </div>
        {/* LINKS */}
        <div className="flex flex-col items-center justify-center flex-1 gap-10">
          <a
            href="#services"
            onClick={closeMenu}
            className="
            text-3xl
            text-white
            hover:text-yellow-400
            transition
            "
          >
            Services
          </a>
          <a
            href="#reviews"
            onClick={closeMenu}
            className="
            text-3xl
            text-white
            hover:text-yellow-400
            transition
            "
          >
            Reviews
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="
            text-3xl
            text-white
            hover:text-yellow-400
            transition
            "
          >
            About
          </a>
          <div className="flex flex-col gap-4 w-[85%] mt-8">
            <a
              href="tel:+919494239260"
              className="
              bg-yellow-500
              text-black
              py-4
              rounded-full
              text-center
              font-semibold
              "
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919494239260"
              className="
              border
              border-white/20
              text-white
              py-4
              rounded-full
              text-center
              "
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}