"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { language, changeLanguage, t } = useLanguage();

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="h-20 flex items-center justify-between">

            <a href="#" className="font-bold tracking-tight">
              <span className="text-white text-xl md:text-3xl">
                SR Cleaning
              </span>
              <span className="text-yellow-400 text-xl md:text-3xl">
                {" "}Solutions
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">

              <a
                href="#services"
                className="text-white/80 hover:text-yellow-400 transition"
              >
                {t.navbar.services}
              </a>

              <a
                href="#reviews"
                className="text-white/80 hover:text-yellow-400 transition"
              >
                {t.navbar.reviews}
              </a>

              <a
                href="#about"
                className="text-white/80 hover:text-yellow-400 transition"
              >
                {t.navbar.about}
              </a>

              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="
                bg-white/10
                border
                border-white/20
                text-white
                rounded-xl
                px-3
                py-2
                outline-none
                "
              >
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
              </select>

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
                {t.navbar.callNow}
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </nav>

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

        <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">

          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="
            w-full
            bg-white/10
            border
            border-white/20
            text-white
            rounded-xl
            px-4
            py-3
            "
          >
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
          </select>

          <a
            href="#services"
            onClick={closeMenu}
            className="text-3xl text-white"
          >
            {t.navbar.services}
          </a>

          <a
            href="#reviews"
            onClick={closeMenu}
            className="text-3xl text-white"
          >
            {t.navbar.reviews}
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="text-3xl text-white"
          >
            {t.navbar.about}
          </a>

          <div className="flex flex-col gap-4 w-full mt-4">

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
              {t.navbar.callNow}
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
              {t.navbar.whatsapp}
            </a>

          </div>
        </div>
      </div>
    </>
  );
}